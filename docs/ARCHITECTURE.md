# 🏛️ Architecture Guide

> Technical architecture, component system, data flow, and code patterns for the Prela Automobile AG website.

---

## High-Level Architecture

```
┌─────────────────────────────────────────────────┐
│                   Browser                        │
│  Static HTML/CSS/JS served from Netlify CDN     │
└────────────────────┬────────────────────────────┘
                     │
         ┌───────────┼───────────┐
         ▼           ▼           ▼
   ┌──────────┐ ┌─────────┐ ┌──────────┐
   │ Netlify  │ │ Google  │ │ Formspree│
   │  CDN     │ │ Fonts   │ │  (Forms) │
   └──────────┘ └─────────┘ └──────────┘
```

- **No backend server** – 100% static site
- **No database** – all content is in `.astro` files
- **Form handling** – Formspree (3rd party SaaS)
- **WhatsApp** – Direct link to `wa.me`

---

## Framework: Astro

The site uses **Astro v5** in **static output mode** (`output: 'static'`).

### Why Astro?
- Ships **zero JavaScript by default** (HTML-first)
- Component-based architecture with `.astro` files
- Built-in image optimization via Sharp
- File-based routing (`src/pages/` → URL routes)
- Excellent build performance for static sites

### Key Astro Concepts Used
- **Layouts** – `BaseLayout.astro` wraps every page
- **Components** – Reusable `.astro` components (Header, Footer, etc.)
- **File-based routing** – Each `.astro` file in `src/pages/` becomes a route
- **Props** – Components accept typed props (e.g., `title`, `description`)
- **`<slot />`** – Layout slot for page content injection
- **`is:inline`** – Scripts marked as inline to preserve execution order

---

## Component Map

```
BaseLayout.astro
├── <head> (meta tags, SEO, structured data, stylesheets)
├── <body>
│   ├── Loader animation
│   ├── Search overlay
│   ├── <slot /> ← Page content injected here
│   ├── WhatsApp floating button
│   ├── Mobile sidebar navigation
│   └── Scripts (jQuery, plugins, main.js)
└── </body>

Page (e.g., index.astro)
├── Header.astro
│   ├── Logo
│   ├── Phone / Email / Address
│   └── Desktop navigation menu
├── [Page-specific content sections]
├── ContactForm.astro (valuation form)
├── FAQSection.astro (homepage only)
├── BrandSlider.astro (homepage only)
└── Footer.astro
    ├── Company links
    ├── Tips links
    ├── Legal links
    └── Contact info
```

---

## Component Details

### BaseLayout.astro
**Location:** `src/layouts/BaseLayout.astro`
**Props:**
```typescript
interface Props {
  title?: string;       // Page title (prefixed with "Prela Automobile AG – ")
  description?: string; // Meta description
  ogImage?: string;     // Open Graph image URL
}
```
**Responsibilities:**
- HTML `<head>` with all meta tags
- JSON-LD structured data (AutoDealer + WebSite schemas)
- Loading all CSS and JS assets
- WhatsApp floating button
- Mobile sidebar navigation
- Page loader animation

### Header.astro
**Location:** `src/components/Header.astro`
- Sticky header (`header--sticky` class)
- Logo with link to homepage
- Phone, email, and address in top bar
- Desktop navigation: Startseite, Über Uns, Tipps & Ratgeber (dropdown), Kontakt
- "Gratis Bewertung" CTA button
- Hamburger menu trigger for mobile

### Footer.astro
**Location:** `src/components/Footer.astro`
- Dynamic copyright year: `new Date().getFullYear()`
- 4-column layout:
  1. **Unternehmen:** Unsere Geschichte, Gratis Autobewertung
  2. **Tipps & Ratgeber:** Auto verkaufen, kaufen, exportieren
  3. **Rechtliches:** AGB, Datenschutz, Cookie-Richtlinie
  4. **Kontakt:** Phone + Email

### ContactForm.astro
**Location:** `src/components/ContactForm.astro`
- Submits to Formspree: `https://formspree.io/f/maqdyeoz`
- **Fields:**
  - Marke & Modell (Make & Model) – required
  - Erstzulassung (First registration year) – required
  - Kilometerstand (Mileage) – required
  - Gewünschter Preis (Desired price) – optional
  - Nachname (Last name) – required
  - Vorname (First name) – required
  - Telefon (Phone) – required
  - E-Mail – optional
  - Bemerkungen (Notes) – optional
- Redirects to `/danke` after submission
- Accepts URL parameter `?brand=` to pre-fill the make field

### FAQSection.astro
**Location:** `src/components/FAQSection.astro`
- 8 FAQ questions in accordion format
- Includes FAQPage JSON-LD schema for Google rich results
- Uses Bootstrap accordion

### BrandSlider.astro
**Location:** `src/components/BrandSlider.astro`
- Infinite horizontal auto-scrolling brand logos
- CSS keyframe animation (no JS dependency for scrolling)
- Clicking a brand → `/bewertung?brand={brandname}`
- Brands ordered: German → French → Japanese

### Breadcrumb.astro
**Location:** `src/components/Breadcrumb.astro`
**Props:** `title`, `current`, `className`
- Simple breadcrumb: Home → Current page

### OptimizedImage.astro
**Location:** `src/components/OptimizedImage.astro`
- Wrapper for optimized image rendering
- WebP format with lazy loading

---

## JavaScript Dependencies

All JS is loaded from `public/js/` and executed inline:

| Script | Purpose |
|---|---|
| `jquery.js` | DOM manipulation (required by several plugins) |
| `jquery-ui.js` | UI interactions |
| `bootstrap.min.js` | Bootstrap components (accordion, dropdown, etc.) |
| `waw.js` | WOW.js – scroll-triggered animations |
| `counter-up.js` | Animated number counter |
| `swiper.js` | Touch slider for testimonials |
| `metismenu.js` | Mobile sidebar menu |
| `jarallax.js` | Parallax scrolling on banner |
| `smooth-scroll.js` | Smooth anchor scrolling |
| `magnifying-popup.js` | Image lightbox popup |
| `waypoint.js` | Scroll position detection |
| `main.js` | Custom site logic (v1.0.2) |

**Loading strategy:** jQuery loads first (synchronous), all others use `defer`.

---

## CSS Architecture

| File | Purpose |
|---|---|
| `css/vendor/bootstrap.min.css` | Bootstrap framework |
| `css/plugins/plugins.css` | Plugin styles (WOW, Swiper, etc.) |
| `css/plugins/magnifying-popup.css` | Lightbox styles |
| `fonts/rt-icon.css` | Custom icon font |
| `css/style.css` | Main custom styles (versioned `?v=3.1`) |

**Load order matters** – plugins → vendor → icons → custom styles.

---

## Data Flow

### Form Submission Flow
```
User fills form → Submit → POST to Formspree API
                              ↓
                    Formspree processes & emails
                              ↓
                    Redirect to /danke (Thank You page)
```

### Brand Pre-fill Flow
```
User clicks brand logo → /bewertung?brand=audi
                              ↓
                    ContactForm reads URL param
                              ↓
                    "Marke & Modell" field pre-filled with "Audi"
```

### WhatsApp Flow
```
User clicks WhatsApp button → Opens wa.me/+41793088000
                              ↓
                    WhatsApp app opens with Prela's number
```

---

## File Naming Conventions

- **Pages:** German slugs, lowercase, hyphens (e.g., `ueber-uns.astro`, `auto-verkaufen.astro`)
- **Components:** PascalCase (e.g., `BrandSlider.astro`, `ContactForm.astro`)
- **Images:** Organized in subdirectories by feature (e.g., `images/about/`, `images/banner/`)
- **CSS/JS:** Versioned with query params (e.g., `style.css?v=3.1`, `main.js?v=1.0.2`)

---

## Adding a New Page

1. Create a `.astro` file in `src/pages/` (e.g., `src/pages/neue-seite.astro`)
2. Import `BaseLayout`, `Header`, `Footer`, and optionally `ContactForm`, `Breadcrumb`
3. Wrap content in `<BaseLayout title="..." description="...">`
4. Add the page to `public/sitemap.xml`
5. Add navigation links in `Header.astro` and/or `Footer.astro` if needed
6. If replacing an old URL, add a 301 redirect in `netlify.toml`

### Page Template

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import Header from "../components/Header.astro";
import Breadcrumb from "../components/Breadcrumb.astro";
import ContactForm from "../components/ContactForm.astro";
import Footer from "../components/Footer.astro";
---

<BaseLayout
    title="Seitentitel – Keyword"
    description="Meta-Beschreibung mit relevanten Keywords."
>
    <div class="rts-wrapper">
        <div class="rts-wrapper-inner">
            <Header />
            <Breadcrumb title="Seitentitel" current="Seite" className="service" />

            <!-- Page content here -->

            <ContactForm />
            <Footer />
        </div>
    </div>
</BaseLayout>
```
