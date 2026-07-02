// Netlify serverless function: handles the contact form and e-mails the
// submission to support@wallevegroup.co via SMTP (Titan).
// The site posts to /api/contact, which netlify.toml rewrites to this function.
//
// SMTP settings come from Netlify environment variables (Site settings ->
// Environment variables) — NOT committed to the repo:
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_SSL, MAIL_TO
const nodemailer = require("nodemailer");

function json(statusCode, obj) {
  return { statusCode, headers: { "Content-Type": "application/json" }, body: JSON.stringify(obj) };
}

async function trySend(useSSL, mail) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: useSSL ? 465 : 587,
    secure: useSSL,          // 465 => implicit SSL; 587 => STARTTLS
    requireTLS: !useSSL,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    connectionTimeout: 4500,
    greetingTimeout: 4500,
    socketTimeout: 8000,
  });
  return transporter.sendMail(mail);
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return json(405, { ok: false, message: "Method not allowed" });
  }

  const raw = event.isBase64Encoded
    ? Buffer.from(event.body || "", "base64").toString("utf8")
    : (event.body || "");
  const params = new URLSearchParams(raw);
  const get = (k) => (params.get(k) || "").trim();
  const f = {
    name: get("name"), company: get("company"), phone: get("phone"),
    email: get("email"), message: get("message"), action: get("ACTION"),
  };

  for (const k of ["name", "company", "phone", "email", "message"]) {
    if (/[^\x00-\x7F]/.test(f[k])) {
      return json(400, { ok: false, message: "Please use English (Latin) characters only." });
    }
  }

  const kind = f.action.includes("MEDIA") ? "Media"
             : f.action.includes("GENERAL") ? "General" : "Contact";
  const text =
    `New ${kind} inquiry from the Walleve Capital website\n\n` +
    `Name:    ${f.name}\n` +
    `Company: ${f.company}\n` +
    `Phone:   ${f.phone}\n` +
    `Email:   ${f.email}\n\n` +
    `Message:\n${f.message}\n`;

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return json(500, { ok: false, message: "Sorry, we couldn't send your message. Please email support@wallevegroup.co directly.",
      error: "missing env var(s): " + ["SMTP_HOST","SMTP_USER","SMTP_PASS"].filter(k => !process.env[k]).join(", ") });
  }

  const mail = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.MAIL_TO || "support@wallevegroup.co",
    replyTo: f.email || undefined,
    subject: `[Walleve Capital] ${kind} inquiry` + (f.name ? ` from ${f.name}` : ""),
    text,
  };

  // Prefer the configured mode, then fall back to the other (in case a port is blocked)
  const primarySSL = process.env.SMTP_SSL ? process.env.SMTP_SSL !== "0"
                    : String(process.env.SMTP_PORT) !== "587";
  const attempts = primarySSL ? [true, false] : [false, true];

  let lastErr;
  for (const useSSL of attempts) {
    try {
      await trySend(useSSL, mail);
      return json(200, { ok: true, message: "Thank you — your message has been sent." });
    } catch (e) {
      lastErr = e;
      console.error(`SMTP send failed (ssl=${useSSL}, port=${useSSL ? 465 : 587}):`, e && e.message);
    }
  }

  // TEMP DIAGNOSTICS: expose the SMTP error + non-secret config so it can be
  // diagnosed remotely. (Password itself is NOT exposed — only its length.)
  return json(500, {
    ok: false,
    message: "Sorry, we couldn't send your message. Please email support@wallevegroup.co directly.",
    error: String(lastErr && (lastErr.message || lastErr)),
    code: lastErr && lastErr.code,
    cfg: {
      host: process.env.SMTP_HOST || null,
      port: process.env.SMTP_PORT || null,
      user: process.env.SMTP_USER || null,
      from: process.env.SMTP_FROM || null,
      passLen: (process.env.SMTP_PASS || "").length,       // expected: 15
      passHasSpace: /\s/.test(process.env.SMTP_PASS || ""),  // expected: false
    },
  });
};
