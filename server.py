#!/usr/bin/env python3
"""
Walleve Capital — local site server.

Serves the static site AND handles the contact form:
  POST /api/contact  ->  emails the submission to support@wallevegroup.co via SMTP.

Run:
  python server.py                 # http://localhost:8000
  PORT=9000 python server.py

SMTP config via environment variables (required for real e-mail delivery):
  SMTP_HOST   e.g. smtp.gmail.com / smtp.office365.com / your provider
  SMTP_PORT   default 587
  SMTP_USER   sending-account username
  SMTP_PASS   sending-account password / app-password
  SMTP_FROM   From address (default: SMTP_USER)
  SMTP_SSL    "1" for implicit SSL (usually port 465); otherwise STARTTLS is used
  MAIL_TO     recipient (default: support@wallevegroup.co)

If SMTP is not configured, submissions are saved to ./contact_messages/ and the
form still confirms success (demo mode); the server console logs what to set.
"""
import os, json, smtplib, ssl, datetime
from email.message import EmailMessage
from urllib.parse import parse_qs
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


def _load_env_file(path):
    """Load KEY=VALUE lines from an env file into os.environ (real env vars win)."""
    try:
        with open(path, encoding="utf-8") as f:
            for line in f:
                line = line.rstrip("\r\n")
                if not line or line.lstrip().startswith("#") or "=" not in line:
                    continue
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v)  # value kept verbatim (passwords may contain =, \, | ...)
    except FileNotFoundError:
        pass


_load_env_file(os.path.join(os.path.dirname(os.path.abspath(__file__)), "smtp.env"))

MAIL_TO   = os.environ.get("MAIL_TO", "support@wallevegroup.co")
SMTP_HOST = os.environ.get("SMTP_HOST", "")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "587"))
SMTP_USER = os.environ.get("SMTP_USER", "")
SMTP_PASS = os.environ.get("SMTP_PASS", "")
SMTP_FROM = os.environ.get("SMTP_FROM", SMTP_USER or "no-reply@wallevegroup.co")
SMTP_SSL  = os.environ.get("SMTP_SSL", "").lower() in ("1", "true", "yes") or SMTP_PORT == 465
PORT      = int(os.environ.get("PORT", "8000"))

ROOT    = os.path.dirname(os.path.abspath(__file__))
MSG_DIR = os.path.join(ROOT, "contact_messages")


def build_email(fields):
    action = fields.get("ACTION", ["CONTACT"])[0]
    kind = "Media" if "MEDIA" in action else ("General" if "GENERAL" in action else "Contact")
    g = lambda k: fields.get(k, [""])[0].strip()
    name, company, phone, email, message = g("name"), g("company"), g("phone"), g("email"), g("message")
    body = (f"New {kind} inquiry from the Walleve Capital website\n\n"
            f"Name:    {name}\n"
            f"Company: {company}\n"
            f"Phone:   {phone}\n"
            f"Email:   {email}\n\n"
            f"Message:\n{message}\n")
    msg = EmailMessage()
    msg["Subject"] = f"[Walleve Capital] {kind} inquiry" + (f" from {name}" if name else "")
    msg["From"] = SMTP_FROM
    msg["To"] = MAIL_TO
    if email:
        msg["Reply-To"] = email
    msg.set_content(body)
    return msg, body


def send_via_smtp(msg):
    if SMTP_SSL:
        with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT, context=ssl.create_default_context(), timeout=30) as s:
            if SMTP_USER:
                s.login(SMTP_USER, SMTP_PASS)
            s.send_message(msg)
    else:
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=30) as s:
            s.ehlo()
            try:
                s.starttls(context=ssl.create_default_context()); s.ehlo()
            except smtplib.SMTPNotSupportedError:
                pass
            if SMTP_USER:
                s.login(SMTP_USER, SMTP_PASS)
            s.send_message(msg)


def save_local(body):
    os.makedirs(MSG_DIR, exist_ok=True)
    ts = datetime.datetime.now().strftime("%Y%m%d-%H%M%S-%f")
    path = os.path.join(MSG_DIR, f"contact-{ts}.txt")
    with open(path, "w", encoding="utf-8") as f:
        f.write(body)
    return path


class Handler(SimpleHTTPRequestHandler):
    def _json(self, code, obj):
        data = json.dumps(obj).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def guess_type(self, path):
        t = super().guess_type(path)
        return "text/html; charset=utf-8" if t == "text/html" else t

    def do_POST(self):
        if self.path.split("?")[0] != "/api/contact":
            self._json(404, {"ok": False, "message": "Not found"}); return
        try:
            length = int(self.headers.get("Content-Length", 0) or 0)
            raw = self.rfile.read(length).decode("utf-8", "replace")
            fields = parse_qs(raw, keep_blank_values=True)
            msg, body = build_email(fields)
            if SMTP_HOST:
                try:
                    send_via_smtp(msg)
                    print(f"[contact] e-mail sent to {MAIL_TO} (reply-to {fields.get('email',[''])[0]})")
                    self._json(200, {"ok": True, "message": "Thank you — your message has been sent."})
                except Exception as e:
                    p = save_local(body)
                    print(f"[contact] SMTP send FAILED: {e}\n          submission saved to {p}")
                    self._json(500, {"ok": False, "message": "Sorry, we couldn't send your message. Please email support@wallevegroup.co directly."})
            else:
                p = save_local(body)
                print(f"[contact] SMTP not configured — saved submission to {p}")
                print("          To actually e-mail support@wallevegroup.co, set SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS.")
                self._json(200, {"ok": True, "message": "Thank you — your message has been sent."})
        except Exception as e:
            print(f"[contact] error: {e}")
            self._json(500, {"ok": False, "message": "Sorry, something went wrong. Please email support@wallevegroup.co directly."})

    def log_message(self, *a):
        pass  # keep the console quiet except for our contact logs


if __name__ == "__main__":
    os.chdir(ROOT)
    httpd = ThreadingHTTPServer(("127.0.0.1", PORT), Handler)
    print(f"Walleve Capital site  ->  http://localhost:{PORT}/")
    print(f"Contact form e-mails  ->  {MAIL_TO}" + ("" if SMTP_HOST else "   (SMTP not set yet — demo mode, messages saved to ./contact_messages/)"))
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nstopped")
