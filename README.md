# Walleye Capital — Local 1:1 Mirror

A fully static, self-contained local copy of **https://walleyecapital.com/**, visually and
structurally identical to the original. Serve it from the project root and every request stays
local — no calls to any external domain.

## Run

- **Recommended — `python server.py`** (or double-click **`serve.bat`** / run `./serve.sh`), then
  open http://localhost:8000/ . This serves the site **and** runs the contact-form mail backend.
- Browsing only (contact form won't send): double-click `index.html` (`file://`) or
  `python -m http.server 8000`.

> The site's main stylesheet is compiled in the browser by the CMS and embedded in `js/main.js`
> (no `XMLHttpRequest`), so plain `file://` double-click still renders correctly.

## Contact form → e-mail (SMTP)

`server.py` handles `POST /api/contact` and e-mails submissions to **support@wallevegroup.co**.
Set these environment variables to enable real delivery (otherwise it runs in **demo mode**:
submissions are saved to `./contact_messages/` and the form still confirms success):

```
SMTP_HOST=smtp.yourprovider.com   SMTP_PORT=587
SMTP_USER=you@yourprovider.com    SMTP_PASS=your-app-password
SMTP_FROM=you@yourprovider.com    # optional, defaults to SMTP_USER
SMTP_SSL=1                         # optional, for implicit-SSL (port 465)
MAIL_TO=support@wallevegroup.co    # optional, this is the default
```
Example (PowerShell): `$env:SMTP_HOST="smtp.gmail.com"; $env:SMTP_USER="..."; $env:SMTP_PASS="..."; python server.py`

## Local customizations (differ from the donor site)

- Brand renamed to **Walleve** everywhere (text + logo + fish icon).
- Home hero background uses `img/hero-bg.jpg`.
- **Careers** page removed (and its nav links / campus-faq sub-page).
- **Investor login** links directly to `https://terminal.wallevecapital.com` (no popup modal).
- **Podcasts & Publications** section removed.
- **Contact** page: only New York, London, Dubai offices; form e-mails support@wallevegroup.co;
  form fields accept **English (Latin/ASCII) input only** (filtered live client-side + enforced server-side).
- All e-mail addresses → **support@wallevegroup.co**.
- US-residents confirmation modal on entry (see below).

## Structure

```
/
  index.html                 (/)
  about-us.html              (/about-us)
  approach.html              (/approach)
  our-people.html            (/our-people)
  our-platform.html          (/our-platform)
  careers.html               (/careers)
  contact.html               (/contact)
  campus-faq.html            (/campus-faq)
  bio.html                   (/bio  → redirects to our-people.html, as on the original)
  bio-<name>.html  ×10        (/bio/<name> — the 10 team bios)
  not-found.html             (/not_found — the 404 page)
  css/
    main.css                 static stylesheets, concatenated (see note 1)
  js/
    main.js                  core bundle + embedded CMS stylesheet source (see notes 1-2)
    home.js about.js approach.js careers-new.js contact-new.js
    slick.min.js flickity.js podcast-slider.js    (page-specific)
  img/                       all images/SVG/icons/favicons (107 files, incl. hero/ svg/ biopics/ insights/)
  fonts/                     Roboto + Roboto Slab (variable woff2, latin + latin-ext)
  pdf/                       privacy-policy.pdf
```

The Terms of Use, Disclosures and Investor Login are **modals** on every page (as on the
original), not separate pages. Privacy Policy is a PDF. These are all preserved and working.

## Notes on the two structural decisions

**1. CSS.** The site is built on a proprietary CMS (Ovis Technologies). Its main stylesheet is
written in a custom `$variable` syntax with *runtime-responsive* rules
(e.g. `if (css.vars.w()>980) "20px"; else "16px"`). It is compiled in the browser by the CMS's
"CSS PostProcessor" (`css2.js`, inside `main.js`) and injected as a `<style>` element that fires a
`css_ready` event which gates all page initialisation. Flattening it to plain CSS would destroy the
responsive behaviour, so it is kept as a runtime source — embedded at the top of `js/main.js`
(`window.__WALLEYE_STYLE_SRC__`) and compiled via `css.open('#style')`. Embedding (instead of the
original XHR load) is what lets the page work over `file://` too. All the *plain* stylesheets
(Google Fonts, `fx3.css`, `ce.css`, `slick.css`, `flickity.css`) are consolidated into
`css/main.css` in load order. Every `@font-face` and `url()` was rewritten to local, document-
relative `../fonts` / `../img` (and `img/…` inside the embedded source) paths.

**2. JS.** `js/main.js` is the site's common core, concatenated in the original load order
(jmodule → jQuery → css2 → fx31 → site init → jquery-ui → ce → orphanKiller → browserDetect →
scroll-out). Page-specific scripts stay as separate files in `js/` and load per page after
`main.js` — the same load order as the original.

## What was changed vs. the origin (and why)

- **All external resources localised.** CSS/JS/fonts/images that loaded from
  `d20j9xtxuc1as2.cloudfront.net` (CDN), `fonts.googleapis.com` / `fonts.gstatic.com`
  (Google Fonts) and `cdnjs.cloudflare.com` were downloaded and rewritten to local paths.
- **Telemetry removed.** `ErrorDetector.js` (posts JS errors to `/cgi-bin/util/error_detector.pl`)
  was dropped, per the "remove external analytics" requirement. No Google Analytics / GTM / other
  trackers were present on the site.
- **Google reCAPTCHA removed** from the contact/careers forms (it is external and cannot work
  offline). The forms still render; only the captcha widget is gone.
- **GSAP not bundled.** On the live site the GSAP scripts either 404 (`/j/gsap/*`) or are commented
  out, so the split-text entrance animation never runs and text simply displays — this copy
  reproduces that exact behaviour. All animations that *do* run on the original (scroll fade-ins,
  carousels, the number counters, parallax, hero reveals, responsive layout) work here.
- **Charset fixed** from the origin's `iso-8859-1` meta to `utf-8` (the bytes are UTF-8, and
  `http.server` sends no charset header, so this is required for correct rendering of `–`, `"`, `©`).
- **Stylesheet loader** changed from `css.open("/c/style.css")` (runtime XHR) to compiling the
  embedded source via `css.open('#style')` — removes the only same-origin request and makes
  `file://` work. The `/bio` JS redirect was repointed to `our-people.html`.

## Added: custom confirmation modal + banner (not on the donor site)

`js/confirm-modal.js` + styles in `css/main.css` add a confirmation popup —
**"Please confirm — Are you a resident of the USA?"** with **Yes / No** buttons — styled to match
the site's existing modals (white card, dimmed overlay, Roboto Slab heading, brand-blue buttons).
Self-contained: the script injects its own markup + overlay into every page (one `<script>`
include per page, no other markup hand-edited).

- **Asked once, remembered:** the choice is stored in `localStorage` (`walleyeResidentConfirm` =
  `yes` / `no`), so the modal is **not** re-shown on every page navigation. After **Yes** it never
  appears again; after **No** the banner keeps showing (modal does not). Works over `http://` and
  `file://`.
- **No close "X":** it can only be dismissed by clicking **Yes** or **No**.
- **Page scroll is locked** while the modal is open (restored on close).
- **Yes** → remembers + closes. **No** → remembers + closes + shows a brand-blue **banner** fixed at
  the top — *"Please note: Walleye Capital works exclusively with residents of the United States."* —
  which pushes the site header down and can be dismissed with its own ×.
- **Reset / test from the console:** `resetConfirmModal()` (clears the choice and reloads),
  `showConfirmModal()` / `hideConfirmModal()` / `showUsBanner()`.

## Verified (headless Chromium, all 20 pages)

- **0** requests to any external domain
- **0** HTTP 404 / 4xx / 5xx responses; every local reference resolves (742 checked)
- **0** console errors
- Counters animate (16 → $16B AUM, 400 employees, 2005 founded, 5), Login / Terms / Disclosures
  modals open, carousels and hero reveals run, mobile (hamburger) layout works
- Side-by-side screenshots vs. the live site: visually identical
