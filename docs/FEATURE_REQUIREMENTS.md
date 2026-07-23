# ✅ Feature Requirements

> Complete list of all features requested by the client, organized by status. This is the single source of truth for what's been done and what's still pending.

---

## 🟢 Completed Features

These features have been implemented and deployed:

### Homepage & Banner
- [x] Hero banner with "Auto verkaufen zum Bestpreis" headline
- [x] Valuation form (ContactForm) placed **immediately after the banner** – per client request: "Put the formula right under the Welcome"
- [x] Counter stats bar: 25+ years, 1,500+ customers, 5,000+ vehicles, 2,000+ cars bought
- [x] Removed "10M visitors per year" counter – client said to remove it
- [x] Removed "Get free quote" button from main message area – duplicate was unnecessary

### Navigation & Layout
- [x] Bigger logo, moved more to the corner
- [x] Sticky header with phone, email, and address
- [x] Mobile sidebar navigation with dropdown for Tips & Ratgeber
- [x] Clean footer with 4 columns: Unternehmen, Tipps & Ratgeber, Rechtliches, Kontakt
- [x] Footer "History" link goes to the About/Story page (`/ueber-uns`)
- [x] Removed social media links from everywhere – client doesn't use social media

### Car Brands
- [x] Car brand logos displayed as an **infinite horizontal auto-scrolling slider**
- [x] On mobile: horizontal scrollable slider ("bel 3ared w 3am y2albo")
- [x] Brand ordering: **German first** (VW, Skoda, Seat, Audi, Mercedes, BMW, Porsche), **then French** (Renault, Peugeot, Opel), **then Japanese** (Toyota, Honda, Nissan, Mazda)
- [x] Clicking a car brand navigates to the valuation form with the brand **pre-filled** via URL param (`/bewertung?brand=audi`)

### Contact & Communication
- [x] Phone number: +41 79 308 80 00, formatted in **2/2/3** Swiss style (079 308 80 00)
- [x] Email: info@prela-automobile.ch
- [x] WhatsApp floating button – made **bigger on laptop** with a tooltip message
- [x] Clicking location/address opens **Google Maps**
- [x] Valuation form (ContactForm) appears on **every page** (home, about, tips, contact)

### Reviews & Testimonials
- [x] Display real Google reviews – **text only, no profile images** (client: "Remove the image of the guys and keep the ratings")
- [x] Remove car icon when viewing reviews on mobile
- [x] 4 real Google reviews with star ratings

### Design & UI
- [x] All buttons have **rounded edges** (border-radius: 50px)
- [x] "Since 2004" / 25+ years messaging throughout the site
- [x] Emphasize that "we buy **all types in any condition**" – this messaging appears prominently
- [x] "Last updated" date on tips pages **always shows last month** (auto-calculated)
- [x] Changed pictures to use real photos from the business (from Facebook)
- [x] About Us page shows **3 pictures on mobile**

### Localization (English → German)
- [x] All URL slugs changed to German: `/about` → `/ueber-uns`, `/contact` → `/kontakt`, etc.
- [x] All page content translated to German-Swiss (de-CH)
- [x] Legal pages (AGB, Datenschutz, Cookie-Richtlinie) fully translated and professionally styled
- [x] 301 redirects set up for all old English URLs in `netlify.toml`

### SEO
- [x] Structured data (JSON-LD): AutoDealer, WebSite, FAQPage schemas
- [x] German meta tags with Swiss-German keywords
- [x] hreflang tags (`de-CH` and `x-default`)
- [x] Open Graph and Twitter Card meta tags
- [x] XML sitemap at `/sitemap.xml`
- [x] robots.txt with crawl-delay
- [x] Canonical URLs on all pages

### Technical
- [x] Migration from Django to Astro (static site generation)
- [x] Image optimization: WebP conversion, lazy loading
- [x] CSS/HTML/JS/SVG compression via astro-compress
- [x] Console.log stripping in production
- [x] Cache headers configured (Netlify): images/fonts 1yr, CSS/JS 30 days, HTML 1hr
- [x] Fixed "Leutsern" spelling → correct "Luzern"

---

## 🟡 Pending Features (Still TODO)

These features have been discussed but not yet implemented:

### 1. Canton-Specific SEO Landing Pages (MAJOR)
The client wants canton-based landing pages for Swiss SEO:
- Example pages: "Auto verkaufen Zürich", "Auto verkaufen Bern", "Auto verkaufen Basel", etc.
- Canton links should appear in the footer
- Clicking a canton should take the user to a localized page
- **Goal:** Rank in Google for auto selling queries in each Swiss canton

### 2. Car Brand Scrolling Enhancement
- The "Personal" section in meeting notes still lists: "Allow the user to scroll through the car brands"
- This may refer to additional scrolling behavior or a different scrolling UX than what's currently implemented

---

## 💡 Future Considerations

Ideas that were discussed or implied but not formally requested:

- **Multi-language support** – Currently German only, but the site could expand to French/Italian for other Swiss regions
- **Inventory/Listings** – Currently no live car inventory; could add a listings page showing available vehicles
- **Blog/Content** – The "Tipps" section could be expanded with more SEO-focused articles
- **Analytics Dashboard** – Form submissions currently go to Formspree; could integrate with a CRM
- **Image Gallery** – Could add a gallery section showing the workshop, vehicles, team
