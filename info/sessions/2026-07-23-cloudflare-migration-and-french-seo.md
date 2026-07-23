# Session — Cloudflare migration + French SEO locale

**Date:** 2026-07-23
**Branch:** master

## Asked
1. Migrate hosting from Netlify → Cloudflare ("too slow / cold start").
2. Bring SEO up to (and beyond) the "Auto Sofortkauf" package the client paid the same for.

## Investigated / Challenged
- Site is a **fully static** Astro build (`output: 'static'`, no serverless functions;
  contact form → Formspree). **Static sites don't cold-start on Netlify** — so the
  perceived slowness is the heavy render-blocking front-end (jQuery + jQuery-UI +
  Bootstrap + Swiper + jarallax + ~6 plugins + full-screen loader), NOT the host.
  → Told the user; recommended a front-end trim as a follow-up. Migration still worth doing.
- Compared against the reference project at `~/Code/auto-sofortkauf.ch`. Its SEO package =
  programmatic city/canton landing pages, `@astrojs/sitemap`, `site:` set, Astro redirects,
  richer JSON-LD, **DE+FR bilingual** with hreflang.

## Decided (via AskUserQuestion)
- Cloudflare deploy: **Git-connected Pages** (auto-deploy on push).
- City landing pages: **skipped** (user's call — flagged as the biggest missed lever).
- French locale: **yes**, core pages only, **I translate** (machine → needs native proofread).

## Built
### Phase 1 — Cloudflare migration
- `public/_headers` + `public/_redirects` (verbatim port of `netlify.toml` cache + 301s).
- `wrangler.jsonc` (`pages_build_output_dir: dist`).
- `astro.config.mjs`: set `site`, added `@astrojs/sitemap` (excludes `/danke`, `/merci`).
- Removed `netlify.toml` and the stale hand-written `public/sitemap.xml`.
- `robots.txt` → `/sitemap-index.xml`.

### Phase 2 — Technical SEO
- Auto-sitemap (index + 0), correct canonicals (trailing-slash consistent with sitemap).

### Phase 3 — French locale (`/fr/`)
- `src/i18n/ui.ts` — shared UI dictionary + `useT()` + `ROUTES` + locale/og maps.
- Made shared components `lang`-aware (no duplication): `Header` (+ DE|FR switcher),
  `Footer`, `ContactForm` (form `_next` → `/fr/merci` in FR), `FAQSection` (full FR Q&A +
  FR FAQPage JSON-LD), `BrandSlider`. `Breadcrumb` already prop-driven.
- `BaseLayout`: `lang` + `alternates` props → `<html lang>`, `og:locale`, bidirectional hreflang,
  localized mobile sidebar + search/WhatsApp aria.
- New pages: `fr/index`, `fr/a-propos`, `fr/contact`, `fr/estimation`, `fr/merci`
  (translated via 6 parallel subagents given the glossary + component contract).
- Added `alternates` + switcher `altHref` to the 4 German core pages (return-link hreflang).

## Tested (real evidence)
- `npm run build` → 16 pages, no errors (clean `rm -rf dist` rebuild).
- Served `dist/` via `python3 -m http.server`: all DE + FR routes + sitemaps → **200**.
- Verified: `<html lang=fr-CH>`, bidirectional hreflang on both DE and FR, `og:locale=fr_CH`,
  DE↔FR switcher, canonicals per page, FR form `_next=/fr/merci`, sitemap includes `/fr/*`
  and excludes `/danke` + `/merci`, DE pages unchanged, no "Sofortkauf" branding leak
  (an early wrong title was a stale server on :4321, not our output).

## Follow-ups
- **User action:** connect GitHub repo in Cloudflare Pages + DNS cutover (can't do it for them).
- **User action:** native-speaker proofread of the machine-translated French.
- Recommend: trim the render-blocking JS to actually fix perceived speed.
- Recommend (declined for now): programmatic city/canton landing pages — the main local-SEO driver.
- Minor: `/danke` + `/fr/merci` are sitemap-excluded but not `noindex`; add a robots meta if desired.
- FR footer's Tipps/legal links point to German pages (those aren't translated — by scope).
