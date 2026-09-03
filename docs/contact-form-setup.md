# Private contact form setup — step by step

This guide connects the public contact form to a private Gmail inbox without publishing the inbox address. It is intentionally detailed; you do not need to know Cloudflare, DNS, or programming.

## What you are building

Think of the system as three locked doors:

1. **The public form** collects plain text. It has no attachment button.
2. **Cloudflare** checks that the visitor is probably human, validates the message, and puts it in a tamper-evident envelope.
3. **Google Apps Script** checks the envelope again and sends the message to your private inbox.

The visitor sees only the contact form. The public files contain neither the destination email address nor the Google relay URL.

> **No DNS changes:** this setup does not move nameservers, change MX records, alter GoDaddy email, enable Cloudflare Email Routing, or change anything at `eaf-llc.com`. Your existing domain and mailboxes continue working exactly as they do now.

## Before you start

Have these two pieces of information ready:

- **Live site origin:** the beginning of the public website address, including `https://` but no page name, path, or final slash. Example: if the page is `https://example.github.io/project/contact.html`, the origin is `https://example.github.io`.
- **Live site hostname:** the same address without `https://`. In that example, it is `example.github.io`.

Do not use the local preview address (`127.0.0.1`) for the final production settings.

Keep a temporary private note with the following blanks. Delete the note when setup is complete.

```text
Live site origin:
Live site hostname:
Google Apps Script /exec URL:
64-character shared secret:
Turnstile site key (PUBLIC):
Turnstile secret key (PRIVATE):
Worker URL:
```

Only the Turnstile **site key** and Worker URL are public. Treat everything marked private, plus the Google `/exec` URL and shared secret, like passwords.

## Step 1 — Make Google the private mailroom

1. Sign in to the Google account that should send and receive these messages.
2. Open [Google Apps Script](https://script.google.com/) and select **New project**.
3. Name the project `AI Safety contact relay`.
4. Open the default `Code.gs` file. Delete its sample contents.
5. Copy all of [`apps-script/Code.gs`](../apps-script/Code.gs) into the editor.
6. Select **Save project**.

### Create the shared secret

This is a private password used only by Cloudflare and Google. It prevents someone from calling the Google relay directly.

The easiest option is to ask a password manager to generate a 64-character random password using letters and numbers. If you prefer PowerShell, paste these three lines into PowerShell and press Enter:

```powershell
$contactBytes = New-Object byte[] 32
$contactRng = [Security.Cryptography.RandomNumberGenerator]::Create()
$contactRng.GetBytes($contactBytes)
$contactRng.Dispose()
$contactSecret = [BitConverter]::ToString($contactBytes).Replace('-', '')
$contactSecret
```

Copy the 64-character result into the private note. Do **not** put it in this repository, `contact-config.js`, a GitHub issue, or a screenshot.

### Give the script its two private settings

1. In Apps Script, select **Project Settings** (the gear icon).
2. Scroll to **Script Properties** and select **Add script property**.
3. Add these two properties exactly as written:

| Property | Value |
| --- | --- |
| `CONTACT_RECIPIENT` | Your private Gmail inbox address |
| `CONTACT_SHARED_SECRET` | The 64-character secret you just generated |

4. Select **Save script properties**.

Script properties are not sent to website visitors. Anyone who can edit the Apps Script project can read them, so do not add collaborators unless they need that access.

### Deploy the Google script

1. Select **Deploy** → **New deployment**.
2. Next to **Select type**, select the gear and choose **Web app**.
3. Enter `Private contact relay` as the description.
4. For **Execute as**, choose **Me**.
5. For **Who has access**, choose **Anyone**. This sounds broad, but the script rejects every request that does not carry the correct cryptographic signature and recent timestamp.
6. Select **Deploy**.
7. Google will ask you to authorize the script to send email. Review the permissions and approve them for your own project.
8. Copy the **Web app URL** ending in `/exec` into your private note.

Do not use the `/dev` test URL. Whenever you later change `Code.gs`, use **Deploy** → **Manage deployments** → edit the deployment → choose **New version** → **Deploy**.

## Step 2 — Create the free human check

Cloudflare Turnstile works even though Cloudflare does not manage the site's DNS.

1. Sign in to the [Cloudflare dashboard](https://dash.cloudflare.com/).
2. Open **Turnstile** and select **Add widget**.
3. Use `AI Safety contact form` for the widget name.
4. Add the **live site hostname** from your note. Enter only the hostname—no `https://`, slash, or page name.
5. Choose **Managed** mode.
6. Create the widget.
7. Copy both values Cloudflare displays:
   - **Site key:** public; this goes in `contact-config.js`.
   - **Secret key:** private; this goes only in the Worker's secret settings.

Turnstile's browser check is not trusted by itself. The Worker code also calls Cloudflare's server-side verification service and requires the correct hostname and action. Cloudflare documents that server-side validation is mandatory: [Turnstile server-side validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/).

## Step 3 — Create the Cloudflare Worker

The dashboard method is easiest and does not require installing anything.

1. In the Cloudflare dashboard, open **Workers & Pages**.
2. Select **Create application**. This is the correct starting point for both Workers and Pages.
3. On the next screen, select **Create Worker**. If Cloudflare presents templates instead, choose the basic **Hello World** Worker—not Pages, Workers AI, or a full-stack framework.
4. Name the Worker `ai-safety-contact-relay`, then deploy the starter once.
5. Open the new Worker and choose **Edit code**.
6. Delete the starter code and paste in all of [`contact-worker/src/index.mjs`](../contact-worker/src/index.mjs).
7. Select **Deploy**. If that button appears to do nothing, select the back arrow and choose **Create new version** when Cloudflare asks how to save the changes. Then open the Worker's **Deployments** page, select **Promote deployment**, choose the newly created version, assign it 100% of traffic, and confirm the deployment.

The Worker will not send anything until the settings below exist.

### Add three ordinary text variables

Open the Worker's **Settings** → **Variables and Secrets**, then add:

| Type | Name | Value |
| --- | --- | --- |
| Text | `ALLOWED_ORIGIN` | Your live site origin, such as `https://example.github.io` |
| Text | `TURNSTILE_EXPECTED_HOSTNAME` | Your live site hostname, such as `example.github.io` |
| Text | `TURNSTILE_EXPECTED_ACTION` | `contact` |

`ALLOWED_ORIGIN` must not contain a path or final slash. Even if this repository is hosted under `/ai-safety-standards/`, the origin is still only `https://example.github.io`.

### Add three encrypted secrets

In the same area, add these as **Secret** values, not ordinary text:

| Type | Name | Value |
| --- | --- | --- |
| Secret | `TURNSTILE_SECRET_KEY` | The private Turnstile secret key |
| Secret | `APPS_SCRIPT_URL` | The Google web app URL ending in `/exec` |
| Secret | `APPS_SCRIPT_SHARED_SECRET` | The exact same 64-character secret stored in Google |

Save/deploy the settings. Cloudflare hides secret values after saving them.

Finally, copy the Worker's public URL. It normally looks like:

```text
https://ai-safety-contact-relay.YOUR-SUBDOMAIN.workers.dev
```

Opening that URL in a browser will say that the method is not allowed; that is expected. The Worker accepts contact submissions only at `/contact` and only from the allowed website.

## Step 4 — Connect the public form

Open [`contact-config.js`](../contact-config.js). Replace only the two placeholder values:

```js
window.CONTACT_FORM_CONFIG = Object.freeze({
  endpoint: "https://YOUR-WORKER.workers.dev/contact",
  turnstileSiteKey: "YOUR_PUBLIC_TURNSTILE_SITE_KEY",
});
```

Important:

- Add `/contact` to the end of the Worker URL.
- Use the public Turnstile **site key**, never its secret key.
- This file is public. It must never contain the private Gmail address, Google `/exec` URL, Turnstile secret, or shared secret.

Commit and publish the site only after reviewing the local preview. On `localhost` or `127.0.0.1`, the page automatically displays Cloudflare's official visible test widget. The test widget demonstrates the human check but cannot send a message: local preview mode always leaves the Send button disabled. The live website uses only the production site key from `contact-config.js`.

## Step 5 — Test the finished live form

After the updated site is live:

1. Open the live `contact.html` page in a private/incognito browser window.
2. Confirm that the human check appears.
3. Send a harmless message from an email address you can access.
4. Confirm that the message reaches the private inbox.
5. Select **Reply** in Gmail and confirm that the visitor's email—not your own address—appears in the To field.
6. View the public page source and search for your private email address. It should not appear.
7. Confirm there is no attachment or file-upload control.

If the page says **Preview mode**, one of the two values in `contact-config.js` still contains `REPLACE_`. If the browser reports an origin error, `ALLOWED_ORIGIN` is not an exact match for the live site's scheme and hostname. If verification fails, compare the Turnstile widget hostname with `TURNSTILE_EXPECTED_HOSTNAME`.

## What this protects—and what it does not

The implementation provides layered protection:

- no public destination address;
- no attachment or HTML-email capability;
- a hidden honeypot field for simple bots;
- mandatory server-side Turnstile verification;
- exact website-origin, Turnstile-hostname, and action checks;
- a 12 KB request limit and strict per-field limits;
- rejection of unexpected fields and unsafe control characters;
- a signed Cloudflare-to-Google envelope that expires after five minutes;
- independent validation inside Google before `MailApp` sends plain text;
- error logs that omit names, addresses, subjects, and message bodies.

No contact form can promise that every message is friendly. A human can still type a malicious link into plain text. Treat unexpected links as untrusted and never send passwords or confidential information through the form.

Turnstile and the normal Workers free allowance are generally sufficient for a small site. Cloudflare publishes current limits on its [Workers pricing page](https://developers.cloudflare.com/workers/platform/pricing/). Google publishes current [Apps Script quotas](https://developers.google.com/apps-script/guides/services/quotas); accounts ending in `@gmail.com` currently have a lower daily recipient allowance than paid Google Workspace accounts.

## Emergency off switch and secret rotation

If the form is abused:

1. In Cloudflare, open the Worker and disable its public `workers.dev` route, or replace `ALLOWED_ORIGIN` temporarily with a non-matching value.
2. Generate a new 64-character shared secret.
3. Replace `CONTACT_SHARED_SECRET` in Google and `APPS_SCRIPT_SHARED_SECRET` in Cloudflare with the new identical value.
4. If necessary, rotate the Turnstile secret in Cloudflare and update `TURNSTILE_SECRET_KEY` in the Worker.

## Later migration to `trustandsafety.institute`

Do not publish an Institute-branded email identity or imply that the form represents the Institute until the domain owner explicitly authorizes it. Once permission and hosting are in place, the technical move is small:

1. Add the new hostname to the Turnstile widget.
2. Change `ALLOWED_ORIGIN` to the new `https://...` origin.
3. Change `TURNSTILE_EXPECTED_HOSTNAME` to the new hostname.
4. If the recipient changes, edit only Google's `CONTACT_RECIPIENT` script property. The address still remains private.
5. Test from the new live page before removing the old hostname.

The Worker and Google relay can stay in place. No change to `eaf-llc.com` DNS or existing email is required during that migration.

## Optional developer commands

These are not needed for dashboard setup. They are included for future maintainers.

```powershell
cd contact-worker
npm install
npm test
npx wrangler types
npx wrangler deploy --dry-run
npx wrangler secret put TURNSTILE_SECRET_KEY
npx wrangler secret put APPS_SCRIPT_URL
npx wrangler secret put APPS_SCRIPT_SHARED_SECRET
npx wrangler deploy
```

Before CLI deployment, replace the two `REPLACE_...` ordinary variables in `contact-worker/wrangler.jsonc`. Never place secret values in that file.

## Official references

- [Cloudflare Turnstile: get started](https://developers.cloudflare.com/turnstile/get-started/)
- [Cloudflare Turnstile: server-side validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/)
- [Cloudflare Workers: secrets](https://developers.cloudflare.com/workers/configuration/secrets/)
- [Google Apps Script: web apps](https://developers.google.com/apps-script/guides/web)
- [Google Apps Script: script properties](https://developers.google.com/apps-script/guides/properties)
- [Google Apps Script: MailApp](https://developers.google.com/apps-script/reference/mail/mail-app)
