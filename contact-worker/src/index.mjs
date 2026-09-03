const MAX_REQUEST_BYTES = 12 * 1024;
const MAX_RESPONSE_BYTES = 4 * 1024;
const TURNSTILE_TIMEOUT_MS = 8_000;
const DELIVERY_TIMEOUT_MS = 15_000;
const ALLOWED_FIELDS = new Set([
  "name",
  "email",
  "subject",
  "message",
  "website",
  "turnstileToken",
]);

class RequestError extends Error {
  constructor(message, status = 400, code = "invalid_request") {
    super(message);
    this.name = "RequestError";
    this.status = status;
    this.code = code;
  }
}

function securityHeaders() {
  return {
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8",
    "Referrer-Policy": "no-referrer",
    "X-Content-Type-Options": "nosniff",
  };
}

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function jsonResponse(body, status, origin = "") {
  const headers = securityHeaders();
  if (origin) Object.assign(headers, corsHeaders(origin));
  return new Response(JSON.stringify(body), { status, headers });
}

function requiredSetting(env, name) {
  const value = typeof env[name] === "string" ? env[name].trim() : "";
  if (!value || value.startsWith("REPLACE_")) {
    throw new Error(`Missing Worker setting: ${name}`);
  }
  return value;
}

function cleanSingleLine(value, name, min, max) {
  if (typeof value !== "string") {
    throw new RequestError(`${name} is required.`);
  }
  const cleaned = value.trim();
  if (cleaned.length < min || cleaned.length > max) {
    throw new RequestError(`${name} must be ${min}-${max} characters.`);
  }
  if (/[\u0000-\u001f\u007f]/u.test(cleaned)) {
    throw new RequestError(`${name} contains unsupported characters.`);
  }
  return cleaned;
}

function cleanMessage(value) {
  if (typeof value !== "string") {
    throw new RequestError("Message is required.");
  }
  const cleaned = value.trim();
  if (cleaned.length < 10 || cleaned.length > 2_000) {
    throw new RequestError("Message must be 10-2000 characters.");
  }
  if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/u.test(cleaned)) {
    throw new RequestError("Message contains unsupported characters.");
  }
  return cleaned;
}

export function validateContactPayload(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    throw new RequestError("The request body must be an object.");
  }

  for (const key of Object.keys(input)) {
    if (!ALLOWED_FIELDS.has(key)) {
      throw new RequestError("The request contains an unsupported field.");
    }
  }

  const website = typeof input.website === "string" ? input.website.trim() : "";
  if (website) return { isBot: true };

  const name = cleanSingleLine(input.name, "Name", 1, 80);
  const email = cleanSingleLine(input.email, "Email", 3, 254).toLowerCase();
  const subject = cleanSingleLine(input.subject, "Subject", 3, 120);
  const message = cleanMessage(input.message);
  const turnstileToken = cleanSingleLine(
    input.turnstileToken,
    "Human-verification token",
    1,
    2_048,
  );

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(email)) {
    throw new RequestError("Enter a valid email address.");
  }

  return { isBot: false, name, email, subject, message, turnstileToken };
}

export async function readTextWithLimit(body, limit) {
  if (!body) return "";
  const reader = body.getReader();
  const chunks = [];
  let total = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > limit) {
        await reader.cancel("Body exceeded size limit");
        throw new RequestError("The request is too large.", 413, "request_too_large");
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const bytes = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
}

async function readJsonResponse(response) {
  let text;
  try {
    text = await readTextWithLimit(response.body, MAX_RESPONSE_BYTES);
  } catch {
    throw new Error("An upstream service returned an oversized response.");
  }
  try {
    return JSON.parse(text);
  } catch {
    throw new Error("An upstream service returned an invalid response.");
  }
}

function toBase64Url(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/u, "");
}

function toHex(buffer) {
  return [...new Uint8Array(buffer)]
    .map(byte => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function signEnvelope(message, sharedSecret, timestamp = Date.now()) {
  const payload = toBase64Url(JSON.stringify(message));
  const signingInput = `${timestamp}.${payload}`;
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(sharedSecret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(signingInput),
  );
  return { timestamp, payload, signature: toHex(signature) };
}

async function verifyTurnstile(contact, request, env, fetchImpl) {
  const response = await fetchImpl("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: requiredSetting(env, "TURNSTILE_SECRET_KEY"),
      response: contact.turnstileToken,
      remoteip: request.headers.get("CF-Connecting-IP") || undefined,
      idempotency_key: crypto.randomUUID(),
    }),
    signal: AbortSignal.timeout(TURNSTILE_TIMEOUT_MS),
  });

  if (!response.ok) throw new Error("Turnstile verification was unavailable.");
  const result = await readJsonResponse(response);
  const expectedHostname = requiredSetting(env, "TURNSTILE_EXPECTED_HOSTNAME");
  const expectedAction = requiredSetting(env, "TURNSTILE_EXPECTED_ACTION");

  if (!result.success || result.hostname !== expectedHostname || result.action !== expectedAction) {
    throw new RequestError(
      "Human verification failed. Please refresh the page and try again.",
      400,
      "verification_failed",
    );
  }
}

async function deliverMessage(contact, env, fetchImpl) {
  const envelope = await signEnvelope(
    {
      name: contact.name,
      email: contact.email,
      subject: contact.subject,
      message: contact.message,
      submittedAt: new Date().toISOString(),
    },
    requiredSetting(env, "APPS_SCRIPT_SHARED_SECRET"),
  );

  const response = await fetchImpl(requiredSetting(env, "APPS_SCRIPT_URL"), {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(envelope),
    redirect: "follow",
    signal: AbortSignal.timeout(DELIVERY_TIMEOUT_MS),
  });

  if (!response.ok) throw new Error("The email relay was unavailable.");
  const result = await readJsonResponse(response);
  if (!result.ok) throw new Error("The email relay rejected the message.");
}

export async function handleRequest(request, env, fetchImpl = fetch) {
  let allowedOrigin;
  try {
    allowedOrigin = requiredSetting(env, "ALLOWED_ORIGIN");
  } catch {
    console.error(JSON.stringify({ event: "contact_relay_misconfigured" }));
    return jsonResponse(
      { ok: false, message: "The contact form is temporarily unavailable." },
      503,
    );
  }
  const requestOrigin = request.headers.get("Origin") || "";
  const originIsAllowed = requestOrigin === allowedOrigin;

  if (request.method === "OPTIONS") {
    if (!originIsAllowed) return jsonResponse({ ok: false }, 403);
    return new Response(null, { status: 204, headers: corsHeaders(requestOrigin) });
  }

  if (request.method !== "POST") {
    return jsonResponse({ ok: false, message: "Method not allowed." }, 405);
  }
  if (new URL(request.url).pathname !== "/contact") {
    return jsonResponse({ ok: false, message: "Not found." }, 404);
  }
  if (!originIsAllowed) {
    return jsonResponse({ ok: false, message: "Request origin is not allowed." }, 403);
  }

  const contentType = request.headers.get("Content-Type") || "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return jsonResponse(
      { ok: false, message: "The request must be JSON." },
      415,
      requestOrigin,
    );
  }

  const contentLength = Number(request.headers.get("Content-Length") || "0");
  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
    return jsonResponse(
      { ok: false, message: "The request is too large." },
      413,
      requestOrigin,
    );
  }

  const requestId = request.headers.get("CF-Ray") || crypto.randomUUID();

  try {
    const text = await readTextWithLimit(request.body, MAX_REQUEST_BYTES);
    let input;
    try {
      input = JSON.parse(text);
    } catch {
      throw new RequestError("The request body is not valid JSON.");
    }

    const contact = validateContactPayload(input);
    if (contact.isBot) {
      return jsonResponse(
        { ok: true, message: "Thank you. Your message was sent." },
        200,
        requestOrigin,
      );
    }

    await verifyTurnstile(contact, request, env, fetchImpl);
    await deliverMessage(contact, env, fetchImpl);
    return jsonResponse(
      { ok: true, message: "Thank you. Your message was sent." },
      200,
      requestOrigin,
    );
  } catch (error) {
    if (error instanceof RequestError) {
      return jsonResponse(
        { ok: false, code: error.code, message: error.message },
        error.status,
        requestOrigin,
      );
    }

    console.error(JSON.stringify({
      event: "contact_delivery_failed",
      requestId,
      error: error instanceof Error ? error.name : "UnknownError",
    }));
    return jsonResponse(
      { ok: false, message: "The message could not be sent right now. Please try again later." },
      502,
      requestOrigin,
    );
  }
}

export default {
  async fetch(request, env) {
    return handleRequest(request, env);
  },
};
