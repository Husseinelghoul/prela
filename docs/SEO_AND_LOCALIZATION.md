# 🌐 SEO & Localization Guide

> Everything about the Swiss-German SEO strategy, URL structure, structured data, and localization decisions for the Prela Automobile AG website.

---

## Language & Locale

| Setting | Value |
|---|---|
| **Primary Language** | German-Swiss (de-CH) |
| **Secondary Language** | French-Swiss (fr-CH) — core pages only |
| **HTML lang** | `de-CH` (default) / `fr-CH` (under `/fr/`) |
| **hreflang** | `de-CH`, `fr-CH`, `x-default` (→ German) |
| **og:locale** | `de_CH` / `fr_CH` |
| **Structured Data language** | `de-CH` |

The site is **bilingual (DE + FR)** as of 2026-07-23. German is the primary
language; a French version of the four **core** funnel pages lives under `/fr/`:

| German | French |
|---|---|
| `/` | `/fr/` |
| `/ueber-uns` | `/fr/a-propos` |
| `/kontakt` | `/fr/contact` |
| `/bewertung` | `/fr/estimation` |
| `/danke` (thank-you) | `/fr/merci` |

**Not translated (German only):** the Tipps/Ratgeber guides and all legal pages
(`/agb`, `/datenschutz`, `/cookie-richtlinie`). French pages link to these German
pages by design. Italian remains a potential future expansion.

Localisation mechanics: shared chrome (Header, Footer, ContactForm, FAQSection,
BrandSlider) is driven by a `lang` prop reading from `src/i18n/ui.ts`. Each core
page passes `lang` + `alternates` to `BaseLayout`, which emits `<html lang>`,
`og:locale`, and bidirectional hreflang tags. A DE↔FR switcher lives in the header.

> ⚠️ The French copy was machine-translated (Swiss French, vouvoiement) and should
> be proofread by a native speaker before it is promoted in marketing.

---

## URL Strategy

All URLs use **German slugs** for maximum Swiss SEO impact. The site was originally in English and all old URLs have **301 redirects** configured in `public/_redirects` (Cloudflare Pages).

### Current URL Map

| Page | German URL | Old English URL |
|---|---|---|
| Homepage | `/` | `/` |
| About Us | `/ueber-uns` | `/about` |
| Contact | `/kontakt` | `/contact` |
| Valuation | `/bewertung` | `/quote` |
| Thank You | `/danke` | `/thank-you` |
| Terms | `/agb` | `/terms` |
| Privacy | `/datenschutz` | `/privacy-policy` |
| Cookies | `/cookie-richtlinie` | `/cookie-policy` |
| Tips: Selling | `/tipps/auto-verkaufen` | `/tips/selling` |
| Tips: Buying | `/tipps/auto-kaufen` | `/tips/buying` |
| Tips: Exporting | `/tipps/auto-exportieren` | `/tips/exporting` |

### Redirect Configuration

All redirects are 301 (permanent) and configured in [`public/_redirects`](../public/_redirects), the Cloudflare Pages redirect file (real server-side 301s):

```
/about          /ueber-uns    301
```

There's also a wildcard redirect for the tips directory (place it **after** the
specific `/tips/*` rules so they take precedence):
```
/tips/*         /tipps/:splat  301
```

---

## Target Keywords

Primary keywords targeted across the site (from meta tags):

| Keyword | Search Intent |
|---|---|
| Auto verkaufen Schweiz | Sell car in Switzerland |
| Autoankauf Schweiz | Car purchase service Switzerland |
| kostenlose Autobewertung | Free car valuation |
| Autohändler Luzern | Car dealer Lucerne |
| Gebrauchtwagen verkaufen | Sell used car |
| Auto kaufen Schweiz | Buy car Switzerland |
| Autoexport Schweiz | Car export Switzerland |
| Autoankauf Luzern | Car purchase Lucerne |
| Fahrzeugbewertung | Vehicle valuation |
| Unfallwagen verkaufen | Sell accident/damaged car |

---

## Structured Data (JSON-LD)

The site uses multiple JSON-LD schemas. All are embedded in `BaseLayout.astro`:

### 1. AutoDealer Schema (on every page)
```json
{
  "@type": "AutoDealer",
  "name": "Prela Automobile AG",
  "address": {
    "streetAddress": "Allmendstrasse 10",
    "addressLocality": "Sursee",
    "addressRegion": "Luzern",
    "postalCode": "6210",
    "addressCountry": "CH"
  },
  "telephone": "+41-79-308-80-00",
  "openingHoursSpecification": [...],
  "aggregateRating": {
    "ratingValue": "4.7",
    "reviewCount": "50"
  },
  "hasOfferCatalog": [
    "Kostenlose Autobewertung",
    "Autoankauf",
    "Autoexport"
  ]
}
```

### 2. WebSite Schema (on every page)
For Google sitelinks search box:
```json
{
  "@type": "WebSite",
  "name": "Prela Automobile AG",
  "url": "https://prela-automobile.ch",
  "inLanguage": "de-CH"
}
```

### 3. FAQPage Schema (on homepage)
8 Q&A pairs embedded in the FAQ section component (`FAQSection.astro`).

---

## Sitemap

The sitemap is **auto-generated at build time** by `@astrojs/sitemap`
(configured in `astro.config.mjs`, which sets `site: 'https://prela-automobile.ch'`).
It produces `/sitemap-index.xml` → `/sitemap-0.xml`. `robots.txt` points at
`/sitemap-index.xml`. The thank-you confirmation pages (`/danke`, `/fr/merci`) are
excluded via the integration's `filter`. No manual sitemap editing is required —
new pages appear automatically.

> The old hand-written `public/sitemap.xml` was removed in the Cloudflare migration.

French core pages carry bidirectional `hreflang` alternates (`de-CH` ↔ `fr-CH`,
plus `x-default` → German); German-only pages carry a self-referential `de-CH` alternate.

---

## Meta Tags Strategy

Each page has unique, descriptive meta tags. The pattern is:

```html
<title>Prela Automobile AG – {Page-Specific Title}</title>
<meta name="description" content="{Page-specific description with keywords}" />
```

### Page Titles & Descriptions

| Page | Title | Key Terms in Description |
|---|---|---|
| Homepage | Auto verkaufen Schweiz – Sofort Bestpreis | Bestpreis, Luzern, Autobewertung, 25 Jahre |
| About | Über Prela Automobile AG – Autohändler in Sursee | Familienbetrieb, Autoankauf, Autoverkauf |
| Contact | Kontakt – Autohändler in Luzern | Autoankauf, Autobewertung, Allmendstrasse |
| Valuation | Kostenlose Autobewertung – Wert in 24 Stunden | kostenlose Bewertung, faires Angebot |

---

## robots.txt

```
User-agent: *
Allow: /
Crawl-delay: 1
Sitemap: https://prela-automobile.ch/sitemap-index.xml
```

---

## Open Graph / Social Sharing

Every page includes:
- `og:type`: website
- `og:locale`: de_CH
- `og:site_name`: Prela Automobile AG
- `og:image`: Default is `/images/about/03.webp` (can be overridden per page)
- Twitter Card: `summary_large_image`

---

## Canonical URLs

All pages have canonical URLs pointing to `https://prela-automobile.ch{pathname}`.

---

## Regional Landing Pages (Local SEO) — implemented 2026-07-23

Nine canton/region landing pages capture local "Autoankauf <Region>" search intent:

| URL | Region | Angle |
|---|---|---|
| `/autoankauf-luzern` | Kanton Luzern | Home market, fastest response |
| `/autoankauf-sursee` | Sursee (HQ town) | Hyper-local, personal |
| `/autoankauf-zug` | Kanton Zug | Premium / business fleets |
| `/autoankauf-aargau` | Kanton Aargau | A1/A3 corridor, high volume |
| `/autoankauf-zuerich` | Region Zürich | Largest market, liquidity |
| `/autoankauf-bern` | Kanton Bern | Large rural canton, AWD |
| `/autoankauf-basel` | Basel-Stadt/Land | Border → export advantage |
| `/autoankauf-schwyz` | Kanton Schwyz | Proximity, alpine AWD |
| `/autoankauf-zentralschweiz` | Zentralschweiz | Regional hub (LU/ZG/SZ/UR/OW/NW) |

**Architecture (DRY, data-driven):**
- Content lives in `src/data/cities.ts` (`CITIES: City[]`). Each entry has **genuinely
  unique** copy — a distinct angle, 4 unique paragraphs, a highlight section, 3 region-specific
  USPs, 8 local towns, and the correct Strassenverkehrsamt. This is deliberate: templated
  near-duplicate pages get flagged by Google as **doorway pages** and can hurt rankings.
- A single `src/pages/autoankauf-[stadt].astro` template renders them via `getStaticPaths`.
- Each page emits `Service` JSON-LD with `areaServed`, and cross-links 2–3 neighbouring regions.
- **Internal linking:** all nine are listed in the shared `Footer` ("Autoankauf nach Region")
  so they're not orphan pages, and they appear automatically in the sitemap.

> To add a region: append one object to `CITIES` in `src/data/cities.ts` (keep the copy unique).
> If it introduces a new Font Awesome icon, run `bash scripts/subset-fonts.sh` (see DEPLOYMENT.md).

---

## 404 Page

`src/pages/404.astro` → served by Cloudflare Pages as the real **404** response for any
unmatched route (avoids soft-404 issues). It's on-brand and links back to the home,
valuation, about and contact pages to retain the visitor instead of bouncing.
