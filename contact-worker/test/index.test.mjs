import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

import { handleRequest, signEnvelope, validateContactPayload } from "../src/index.mjs";

const env = {
  ALLOWED_ORIGIN: "https://example.com",
  TURNSTILE_EXPECTED_HOSTNAME: "example.com",
  TURNSTILE_EXPECTED_ACTION: "contact",
  TURNSTILE_SECRET_KEY: "turnstile-secret",
  APPS_SCRIPT_URL: "https://script.google.com/macros/s/example/exec",
  APPS_SCRIPT_SHARED_SECRET: "shared-secret-with-at-least-32-characters",
};

function validBody(overrides = {}) {
  return {
    name: "Ada Lovelace",
    email: "ada@example.net",
    subject: "Matrix correction",
    message: "Please review the publication date in row 12.",
    website: "",
    turnstileToken: "verified-token",
    ...overrides,
  };
}

function makeRequest(body, headers = {}) {
  return new Request("https://relay.example.workers.dev/contact", {
    method: "POST",
    headers: {
      Origin: "https://example.com",
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  });
}

test("validates and delivers an ordinary message", async () => {
  const calls = [];
  const fetchImpl = async (url, options) => {
    calls.push({ url, options });
    if (url.includes("siteverify")) {
      return Response.json({ success: true, hostname: "example.com", action: "contact" });
    }
    return Response.json({ ok: true });
  };

  const response = await handleRequest(makeRequest(validBody()), env, fetchImpl);
  const result = await response.json();

  assert.equal(response.status, 200);
  assert.equal(result.ok, true);
  assert.equal(calls.length, 2);
  assert.equal(calls[0].url, "https://challenges.cloudflare.com/turnstile/v0/siteverify");
  assert.equal(calls[1].url, env.APPS_SCRIPT_URL);
  assert.equal(calls[1].options.redirect, "follow");
});

test("rejects a request from any other website", async () => {
  let called = false;
  const response = await handleRequest(
    makeRequest(validBody(), { Origin: "https://attacker.example" }),
    env,
    async () => {
      called = true;
      return Response.json({});
    },
  );

  assert.equal(response.status, 403);
  assert.equal(called, false);
  assert.equal(response.headers.get("Access-Control-Allow-Origin"), null);
});

test("silently discards submissions that fill the honeypot", async () => {
  let called = false;
  const response = await handleRequest(
    makeRequest(validBody({ website: "spam.example" })),
    env,
    async () => {
      called = true;
      return Response.json({});
    },
  );

  assert.equal(response.status, 200);
  assert.equal(called, false);
});

test("rejects fields that could smuggle an attachment", () => {
  assert.throws(
    () => validateContactPayload({ ...validBody(), attachment: "payload" }),
    /unsupported field/u,
  );
});

test("does not deliver when Turnstile verification fails", async () => {
  let calls = 0;
  const response = await handleRequest(makeRequest(validBody()), env, async () => {
    calls += 1;
    return Response.json({ success: false, "error-codes": ["invalid-input-response"] });
  });

  assert.equal(response.status, 400);
  assert.equal(calls, 1);
});

test("rejects an oversized request before reading it", async () => {
  const response = await handleRequest(
    makeRequest(validBody(), { "Content-Length": "12289" }),
    env,
    async () => Response.json({}),
  );
  assert.equal(response.status, 413);
});

test("fails closed when the Worker has not been configured", async () => {
  const originalConsoleError = console.error;
  console.error = () => {};
  try {
    const response = await handleRequest(makeRequest(validBody()), {}, async () => Response.json({}));
    const result = await response.json();

    assert.equal(response.status, 503);
    assert.equal(result.ok, false);
  } finally {
    console.error = originalConsoleError;
  }
});

test("creates a deterministic signed envelope", async () => {
  const first = await signEnvelope({ message: "hello" }, "secret", 12345);
  const second = await signEnvelope({ message: "hello" }, "secret", 12345);

  assert.deepEqual(first, second);
  assert.equal(first.timestamp, 12345);
  assert.match(first.payload, /^[A-Za-z0-9_-]+$/u);
  assert.match(first.signature, /^[a-f0-9]{64}$/u);
});

test("Google Apps Script accepts an envelope signed by the Worker", async () => {
  const code = await readFile(new URL("../../apps-script/Code.gs", import.meta.url), "utf8");
  const context = vm.createContext({
    console,
    Utilities: {
      Charset: { UTF_8: "UTF-8" },
      computeHmacSha256Signature(value, secret) {
        const digest = createHmac("sha256", secret).update(value, "utf8").digest();
        return [...digest].map(byte => (byte > 127 ? byte - 256 : byte));
      },
      base64DecodeWebSafe(value) {
        return [...Buffer.from(value, "base64url")];
      },
      newBlob(bytes) {
        return { getDataAsString: () => Buffer.from(bytes).toString("utf8") };
      },
    },
  });
  vm.runInContext(code, context);

  const secret = "a-64-character-shared-secret-used-by-both-sides-1234567890abcdef";
  const message = {
    name: "Ada Lovelace",
    email: "ada@example.net",
    subject: "Matrix correction",
    message: "Please review the publication date in row 12.",
    submittedAt: new Date().toISOString(),
  };
  const envelope = await signEnvelope(message, secret);

  assert.deepEqual(
    JSON.parse(JSON.stringify(context.verifyAndDecode_(envelope, secret))),
    message,
  );
});
