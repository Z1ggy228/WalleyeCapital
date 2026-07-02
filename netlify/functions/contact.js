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

  // English (Latin/ASCII) only — mirrors the front-end filter
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

  const MAIL_TO = process.env.MAIL_TO || "support@wallevegroup.co";
  const port = Number(process.env.SMTP_PORT || 465);

  if (!process.env.SMTP_HOST) {
    console.error("SMTP not configured (set SMTP_HOST/USER/PASS env vars in Netlify).");
    return json(500, { ok: false, message: "Sorry, we couldn't send your message. Please email support@wallevegroup.co directly." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: (process.env.SMTP_SSL ? process.env.SMTP_SSL !== "0" : port === 465), // 465 => implicit SSL
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: MAIL_TO,
      replyTo: f.email || undefined,
      subject: `[Walleve Capital] ${kind} inquiry` + (f.name ? ` from ${f.name}` : ""),
      text,
    });
    return json(200, { ok: true, message: "Thank you — your message has been sent." });
  } catch (e) {
    console.error("SMTP send failed:", e && e.message);
    return json(500, { ok: false, message: "Sorry, we couldn't send your message. Please email support@wallevegroup.co directly." });
  }
};
