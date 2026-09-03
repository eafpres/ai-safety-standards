const MAX_CLOCK_SKEW_MS = 5 * 60 * 1000;

function jsonOutput_(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}

function cleanSingleLine_(value, name, minLength, maxLength) {
  if (typeof value !== "string") throw new Error(name + " is required");
  const cleaned = value.trim();
  if (cleaned.length < minLength || cleaned.length > maxLength) {
    throw new Error(name + " has an invalid length");
  }
  if (/[\u0000-\u001f\u007f]/.test(cleaned)) {
    throw new Error(name + " contains unsupported characters");
  }
  return cleaned;
}

function validateMessage_(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    throw new Error("Invalid message");
  }

  const allowed = ["name", "email", "subject", "message", "submittedAt"];
  Object.keys(input).forEach(function (key) {
    if (allowed.indexOf(key) === -1) throw new Error("Unsupported message field");
  });

  const name = cleanSingleLine_(input.name, "Name", 1, 80);
  const email = cleanSingleLine_(input.email, "Email", 3, 254).toLowerCase();
  const subject = cleanSingleLine_(input.subject, "Subject", 3, 120);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Invalid email");

  if (typeof input.message !== "string") throw new Error("Message is required");
  const message = input.message.trim();
  if (message.length < 10 || message.length > 2000) throw new Error("Invalid message length");
  if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(message)) {
    throw new Error("Message contains unsupported characters");
  }

  const submittedAt = cleanSingleLine_(input.submittedAt, "Submission time", 20, 30);
  if (isNaN(Date.parse(submittedAt))) throw new Error("Invalid submission time");

  return { name: name, email: email, subject: subject, message: message, submittedAt: submittedAt };
}

function bytesToHex_(bytes) {
  return bytes.map(function (value) {
    return ((value + 256) % 256).toString(16).padStart(2, "0");
  }).join("");
}

function constantTimeEqual_(first, second) {
  if (typeof first !== "string" || typeof second !== "string" || first.length !== second.length) {
    return false;
  }
  let difference = 0;
  for (let index = 0; index < first.length; index += 1) {
    difference |= first.charCodeAt(index) ^ second.charCodeAt(index);
  }
  return difference === 0;
}

function verifyAndDecode_(envelope, sharedSecret) {
  if (!envelope || typeof envelope !== "object" || Array.isArray(envelope)) {
    throw new Error("Invalid envelope");
  }

  const timestamp = Number(envelope.timestamp);
  const payload = envelope.payload;
  const signature = envelope.signature;
  if (!Number.isFinite(timestamp) || typeof payload !== "string" || typeof signature !== "string") {
    throw new Error("Invalid envelope fields");
  }
  if (payload.length > 8192 || !/^[A-Za-z0-9_-]+$/.test(payload) || !/^[a-fA-F0-9]{64}$/.test(signature)) {
    throw new Error("Invalid envelope encoding");
  }
  if (Math.abs(Date.now() - timestamp) > MAX_CLOCK_SKEW_MS) {
    throw new Error("Expired envelope");
  }

  const expected = bytesToHex_(Utilities.computeHmacSha256Signature(
    timestamp + "." + payload,
    sharedSecret,
    Utilities.Charset.UTF_8
  ));
  if (!constantTimeEqual_(signature.toLowerCase(), expected)) {
    throw new Error("Invalid signature");
  }

  const decoded = Utilities.newBlob(Utilities.base64DecodeWebSafe(payload)).getDataAsString("UTF-8");
  return validateMessage_(JSON.parse(decoded));
}

function doPost(e) {
  try {
    const properties = PropertiesService.getScriptProperties();
    const recipient = properties.getProperty("CONTACT_RECIPIENT");
    const sharedSecret = properties.getProperty("CONTACT_SHARED_SECRET");
    if (!recipient || !sharedSecret || sharedSecret.length < 32) {
      throw new Error("The script is not configured");
    }

    if (!e || !e.postData || typeof e.postData.contents !== "string" || e.postData.contents.length > 12288) {
      throw new Error("Invalid request size");
    }
    const envelope = JSON.parse(e.postData.contents);
    const message = verifyAndDecode_(envelope, sharedSecret);
    const body = [
      "A visitor used the AI Safety Matrices contact form.",
      "",
      "Name: " + message.name,
      "Reply email: " + message.email,
      "Submitted: " + message.submittedAt,
      "",
      message.message,
      "",
      "---",
      "This relay accepts plain text only; no file was uploaded or attached."
    ].join("\n");

    MailApp.sendEmail({
      to: recipient,
      subject: "[AI Safety Matrices] " + message.subject,
      body: body,
      replyTo: message.email,
      name: "AI Safety Matrices"
    });

    return jsonOutput_({ ok: true });
  } catch (error) {
    console.error("Contact relay rejected a request: " + error.name);
    return jsonOutput_({ ok: false });
  }
}

function doGet() {
  return jsonOutput_({ ok: false, message: "POST requests only" });
}
