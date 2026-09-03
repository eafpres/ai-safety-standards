(() => {
  "use strict";

  const form = document.getElementById("contact-form");
  const submitButton = document.getElementById("submit-button");
  const status = document.getElementById("form-status");
  const widget = document.getElementById("turnstile-widget");
  const config = window.CONTACT_FORM_CONFIG || {};
  const localPreview = ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
  const localTestSiteKey = "1x00000000000000000000AA";
  let turnstileToken = "";
  let widgetId = null;

  function showStatus(message, type = "") {
    status.textContent = message;
    status.className = `status ${type}`.trim();
  }

  function hasLiveEndpoint() {
    try {
      const endpoint = new URL(config.endpoint);
      return endpoint.protocol === "https:"
        && !config.endpoint.includes("REPLACE_");
    } catch {
      return false;
    }
  }

  function siteKey() {
    if (localPreview) return localTestSiteKey;
    if (typeof config.turnstileSiteKey !== "string" || config.turnstileSiteKey.includes("REPLACE_")) {
      return "";
    }
    return config.turnstileSiteKey;
  }

  function resetVerification() {
    turnstileToken = "";
    submitButton.disabled = true;
    if (widgetId !== null && window.turnstile) window.turnstile.reset(widgetId);
  }

  async function sendMessage(event) {
    event.preventDefault();
    showStatus("");

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (!turnstileToken) {
      showStatus("Please complete the human-verification check.", "error");
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Sending…";

    const payload = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      subject: document.getElementById("subject").value.trim(),
      message: document.getElementById("message").value.trim(),
      website: document.getElementById("website").value,
      turnstileToken,
    };

    try {
      const response = await fetch(config.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "omit",
        referrerPolicy: "no-referrer",
      });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        throw new Error(result.message || "The message could not be sent.");
      }

      form.reset();
      showStatus("Thank you. Your message was sent to the site administrator.", "success");
    } catch (error) {
      const message = error instanceof Error && error.message
        ? error.message
        : "The message could not be sent right now. Please try again later.";
      showStatus(message, "error");
    } finally {
      submitButton.textContent = "Send message";
      resetVerification();
    }
  }

  const endpointReady = hasLiveEndpoint() && !localPreview;
  const selectedSiteKey = siteKey();

  if (!endpointReady) {
    showStatus("Preview mode: sending will be enabled after the private email relay is configured.", "error");
    submitButton.disabled = true;
  }

  if (!selectedSiteKey) {
    widget.hidden = true;
    return;
  }

  if (!window.turnstile) {
    showStatus("Human verification could not load. Please refresh the page.", "error");
    return;
  }

  widgetId = window.turnstile.render(widget, {
    sitekey: selectedSiteKey,
    action: "contact",
    callback(token) {
      turnstileToken = token;
      if (endpointReady) {
        submitButton.disabled = false;
        showStatus("");
      }
    },
    "expired-callback"() {
      resetVerification();
      showStatus("The human-verification check expired. Please complete it again.", "error");
    },
    "error-callback"() {
      resetVerification();
      showStatus("Human verification could not be completed. Please refresh the page.", "error");
    },
  });

  form.addEventListener("submit", sendMessage);
})();
