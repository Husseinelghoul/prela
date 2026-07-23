# 🚀 Deployment Guide

> How to deploy the Prela Automobile AG website to production and preview environments.

---

## Current Production Setup

| Setting | Value |
|---|---|
| **Platform** | Cloudflare Pages |
| **Domain** | prela-automobile.ch |
| **Build Command** | `npm run build` |
| **Publish Directory** | `dist/` |
| **Output** | Static HTML/CSS/JS (SSG) |

> **Migrated off Netlify** on 2026-07-23. `netlify.toml` was removed; its cache
> headers and 301 redirects now live in `public/_headers` and `public/_redirects`
> (copied verbatim into `dist/` at build time). Project config: `wrangler.jsonc`.

---

## Cloudflare Pages Deployment

### Recommended: Git-connected Pages (auto-deploy on push)

One-time setup in the [Cloudflare Dashboard](https://dash.cloudflare.com/):

1. **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Select the `Husseinelghoul/prela` GitHub repo, branch `master`.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Cloudflare rebuilds and deploys on every push to `master`.
5. **Custom domain:** project → **Custom domains** → add `prela-automobile.ch`
   (and `www`). Then point DNS (see below).

### Manual / one-off deploy (no Git)

```bash
npm run build
npx wrangler pages deploy dist --project-name=prela-automobile
```

### Routing config (replaces `netlify.toml`)

| Concern | File | Notes |
|---|---|---|
| Cache headers | `public/_headers` | Images/fonts 1y immutable, CSS/JS 30d, HTML 1h |
| 301 redirects | `public/_redirects` | Old EN slugs → DE slugs (real 301s on CF Pages) |
| Project config | `wrangler.jsonc` | `pages_build_output_dir: dist` |

Both `_headers` and `_redirects` are in `public/`, so Astro copies them into
`dist/` unchanged. Cloudflare Pages reads them automatically — no dashboard rules needed.

---

## Performance (front-end trim — 2026-07-23)

The site felt slow to open even though it's fully static. Root cause + fixes:

- **Loader gate (biggest win):** the full-screen preloader only revealed the page on
  `window.load` (after *every* asset finished) plus a 1 s CSS delay. Now reveals on
  `DOMContentLoaded` (`public/js/main.js` `preloader()`), and the fade delay was cut
  (`public/css/style.css`). First paint is no longer gated on full download.
- **Removed unused libraries:** jQuery-UI (~67 KB gz — no autocomplete/datepicker was ever
  initialised) and magnifying-popup (~8 KB gz — no gallery/video used). Script tags removed
  from `BaseLayout.astro`; the `magnificPopup` calls in `main.js` are feature-guarded.
- **Font Awesome subsetting (~483 KB saved):** the site uses only ~34 icons but shipped the
  full FA Pro fonts (~494 KB woff2). `public/fonts/fa-*.woff2` are now subset to ~11 KB total.
  The unused `.eot/.svg/.woff` formats were deleted (the `@font-face` only references woff2+ttf).

### ⚠️ Adding a Font Awesome icon

Fonts are **subset to the icons in use**. If you add a new `fa-*` icon anywhere, its glyph
won't be in the subset and won't render. Regenerate the subset:

```bash
bash scripts/subset-fonts.sh   # re-scans src/, re-subsets from scripts/fa-full/
npm run build
```

The full source fonts are kept in `scripts/fa-full/` (outside `public/`, so never deployed).

---

## Build Process

### Standard Build

```bash
npm run build
```

This produces the `dist/` directory containing:
- Static HTML pages for every route
- Compressed CSS, JS, and SVG via `astro-compress`
- Optimized images (if using `astro/assets`)

### What Happens During Build

1. **Astro compiles** all `.astro` pages to static HTML
2. **astro-compress** minifies CSS, HTML, JS, and SVG
3. **Terser** further minifies JS and strips `console.log`
4. **Sharp** processes any dynamically referenced images
5. Static assets from `public/` are copied as-is to `dist/`

### Image Optimization Script

There's also a standalone image optimization script:

```bash
node scripts/optimize-images.mjs
```

This converts images to WebP format at 85% quality. Run this when adding new images to `public/images/`.

---

## Environment Notes

- **No environment variables** are needed – the site is fully static
- **No database** – form submissions go to Formspree
- **No backend server** – pure static HTML
- **Node.js ≥ 18.17.1** required for the build process
- The Formspree endpoint (`maqdyeoz`) is hardcoded in `ContactForm.astro`

---

## DNS & Domain

| Record | Value |
|---|---|
| **Domain** | prela-automobile.ch |
| **SSL** | Managed by Cloudflare (auto HTTPS / Universal SSL) |
| **DNS** | Point the domain at Cloudflare Pages: add the custom domain in the Pages project, then either move the domain's nameservers to Cloudflare (recommended) or add the CNAME shown in the dashboard at your current DNS provider. |

---

## Pre-Deployment Checklist

Before deploying any changes:

- [ ] Run `npm run build` and verify no errors
- [ ] Check that `dist/` output looks correct
- [ ] Verify all page routes resolve correctly
- [ ] Test the valuation form submission (goes to Formspree)
- [ ] Check WhatsApp link works
- [ ] Verify phone/email links are correct
- [ ] Test on mobile viewport
- [ ] Sitemap is auto-generated by `@astrojs/sitemap` — no manual edits needed
      (confirm new pages appear in `dist/sitemap-0.xml`; `/danke` and `/merci` are excluded)
- [ ] For French pages, confirm `lang="fr"` + hreflang alternates render and the DE↔FR switcher works
