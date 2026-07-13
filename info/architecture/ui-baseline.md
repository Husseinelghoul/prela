# UI Baseline — Prela Automobile (autovolt)

Astro static marketing site built on a purchased HTML template ("Rega"-style).
Global styles live in `public/css/style.css` (~28.7k lines, template CSS).

## Design tokens (source of truth: `public/css/style.css` `:root`)

### Fonts
- `--font-primary: "Outfit"` → headings (h1–h6, `.title`, display).
- `--font-secondary: "Inter"` → body copy, UI, forms.
- Both loaded via Google Fonts `@import` (top of style.css) with `display=swap`.
- Preconnect: `fonts.googleapis.com` + `fonts.gstatic.com` (crossorigin) in BaseLayout.
- **Rule:** never introduce a third family. Stray `Syne`/`Raleway`/`roboto`
  references were remapped to the two tokens. Reference tokens, not literals.

### Font-weight ladder (see `public/css/ui-baseline.css`)
- body / paragraphs: 400–500
- emphasis / links / labels: 600 (`--p-semi-bold`)
- headings h3–h6: 700 · h1–h2 / hero: 800
- Tokens `--p-*` / `--s-*` (300..900) already exist; ladder applies them to base
  `h1–h6` so headings are consistent even when a component omits a weight.

### Icons — one pack: Font Awesome 6 Pro
- Defined in `public/css/plugins/plugins.css`, fonts bundled in `public/fonts/`.
- Use `fa-light` (line UI icons), `fa-solid` (filled, e.g. rating stars).
- Size scale via context; unify sizing in `ui-baseline.css`.
- **Removed:** the template's `rt-icon` glyph font (usages → FA, and the
  `rt-icon.{css,eot,svg,ttf,woff,woff2}` files + `<link>`s deleted) and the
  hand-drawn inline `<svg>` header icons (→ FA). Unused FA sub-families
  `fa-brands-400.*` and `fa-duotone-900.*` were also deleted; only
  **light / regular / solid** ship. Unused `OptimizedImage.astro` removed.

### Skeleton loaders (see `public/css/ui-baseline.css`)
- One shimmer utility `.skeleton` + `@keyframes ui-shimmer`.
- `prefers-reduced-motion: reduce` disables the shimmer.
- Applied to: async `<iframe>` map (kontakt) and reusable image placeholders.
- The full-screen `.loader-wrapper` spinner is kept as the pre-hydration state
  only (acceptable per baseline); it is not the per-view data-load experience.

### Tooltips
- Icon-only controls carry both `title` and `aria-label`: search open/close,
  WhatsApp float, mobile menu (hamburger), sidebar close.

## Key files
- `src/layouts/BaseLayout.astro` — head, preloader, WhatsApp float, sidebar, script order.
- `public/css/ui-baseline.css` — additive polish layer, loaded AFTER style.css.
- `src/components/{Header,Footer,ContactForm}.astro` — icon usages.
