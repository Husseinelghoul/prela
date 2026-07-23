# 🚗 Prela Automobile AG – Official Website

> **Live Site:** [https://prela-automobile.ch](https://prela-automobile.ch)

The official website for **Prela Automobile AG**, a Swiss family-owned auto dealership based in Sursee, Kanton Luzern. The site is built as a high-performance static website using Astro, fully localized for the German-Swiss (de-CH) market.

---

## 📋 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:4321/

# Build for production
npm run build

# Preview production build
npm run preview
```

**Prerequisites:** Node.js ≥ 18.17.1

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Astro](https://astro.build/) v5 (Static Site Generation) |
| **CSS** | Bootstrap (vendor) + custom styles |
| **Animations** | WOW.js, Jarallax (parallax), Swiper (sliders) |
| **Image Processing** | Sharp + astro-compress |
| **Forms** | [Formspree](https://formspree.io/) |
| **Hosting** | Netlify (also deployable via Cloudflare Pages) |
| **SEO** | JSON-LD structured data, hreflang, Open Graph |

---

## 📁 Project Structure

```
autovolt/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro         # Global layout (meta, scripts, WhatsApp btn, sidebar)
│   ├── components/
│   │   ├── Header.astro             # Sticky header with logo, phone, email, navigation
│   │   ├── Footer.astro             # 4-column footer (Company, Tips, Legal, Contact)
│   │   ├── ContactForm.astro        # Reusable car valuation form (Formspree)
│   │   ├── FAQSection.astro         # 8-question FAQ accordion with JSON-LD
│   │   ├── BrandSlider.astro        # Infinite scrolling car brand logos
│   │   ├── Breadcrumb.astro         # Simple breadcrumb navigation
│   │   └── OptimizedImage.astro     # Image optimization wrapper
│   └── pages/
│       ├── index.astro              # Homepage
│       ├── ueber-uns.astro          # About Us
│       ├── kontakt.astro            # Contact
│       ├── bewertung.astro          # Free Car Valuation (quote form)
│       ├── danke.astro              # Thank You (post-form)
│       ├── agb.astro                # Terms & Conditions
│       ├── datenschutz.astro        # Privacy Policy
│       ├── cookie-richtlinie.astro  # Cookie Policy
│       └── tipps/
│           ├── auto-verkaufen.astro # Tips: Selling your car
│           ├── auto-kaufen.astro    # Tips: Buying a car
│           └── auto-exportieren.astro # Tips: Exporting a car
├── public/
│   ├── css/                         # Stylesheets (Bootstrap, plugins, custom)
│   ├── js/                          # JavaScript (jQuery, plugins, main.js)
│   ├── fonts/                       # Icon fonts (rt-icon)
│   ├── images/                      # All images (logo, about, banner, brands, etc.)
│   ├── maps/                        # Google Maps related assets
│   ├── robots.txt                   # Search engine crawl directives
│   └── sitemap.xml                  # XML sitemap for SEO
├── scripts/
│   └── optimize-images.mjs          # Image optimization script (WebP conversion)
├── docs/                            # 📚 Project documentation (see below)
├── meeting_notes.md                 # Client meeting notes and feature requests
├── astro.config.mjs                 # Astro configuration
├── netlify.toml                     # Netlify deployment config + redirects
├── tsconfig.json                    # TypeScript configuration
└── package.json                     # Project dependencies
```

---

## 📚 Documentation

Detailed documentation for developers and AI models is in the [`docs/`](docs/) directory:

| Document | Description |
|---|---|
| [`CLIENT_BRIEF.md`](docs/CLIENT_BRIEF.md) | Who the client is, what they do, business context |
| [`DESIGN_DECISIONS.md`](docs/DESIGN_DECISIONS.md) | All UI/UX decisions, client preferences, design system |
| [`FEATURE_REQUIREMENTS.md`](docs/FEATURE_REQUIREMENTS.md) | Complete list of features: done, pending, and future |
| [`SEO_AND_LOCALIZATION.md`](docs/SEO_AND_LOCALIZATION.md) | SEO strategy, German localization, structured data |
| [`DEPLOYMENT.md`](docs/DEPLOYMENT.md) | How to deploy to Netlify and Cloudflare Pages |
| [`ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Technical architecture, components, data flow |

---

## 🔑 Key Information

| | |
|---|---|
| **Company** | Prela Automobile AG |
| **Domain** | prela-automobile.ch |
| **Phone** | +41 79 308 80 00 |
| **Email** | info@prela-automobile.ch |
| **Address** | Allmendstrasse 10, 6210 Sursee, Luzern |
| **Language** | German-Swiss (de-CH) |
| **Form Provider** | Formspree (endpoint: `maqdyeoz`) |

---

## ⚠️ Important Notes

- This site was **migrated from Django** to Astro for better performance and easier maintenance.
- All URLs are in **German** (de-CH). Old English URLs have 301 redirects in `netlify.toml`.
- The valuation form (ContactForm) appears on **every page** – this was a specific client request.
- Social media links were **intentionally removed** per client request.
- The "Last Updated" date on tips pages should **always show last month**.

---

*Built with ❤️ for Prela Automobile AG*
