# 🎨 Design Decisions

> All UI/UX decisions, client preferences, and design guidelines for the Prela Automobile AG website.

---

## Design System

### Colors

| Color | Hex | Usage |
|---|---|---|
| **Primary Blue** | `#05539a` | Main brand color, buttons, headers |
| **Primary Blue Dark** | `#033a6b` | Gradient endpoints, hover states |
| **WhatsApp Green** | `#25d366` | Floating WhatsApp button |
| **WhatsApp Green Hover** | `#128c7e` | WhatsApp button hover state |
| **Background Light** | `#f5f7fa` | Page backgrounds, card backgrounds |
| **Gradient Light** | `#f5f7fa → #c3cfe2` | Special page backgrounds (quote form) |
| **White** | `#ffffff` | Cards, content areas |
| **Text Dark** | Bootstrap defaults | Body text |

### Typography
- Uses **Bootstrap default typography** plus custom icon font (`rt-icon`)
- No custom Google Fonts are loaded for body text (keeping it lightweight)
- Icon font located at `/fonts/rt-icon.css`

### Buttons
- **Shape:** Pill/rounded (`border-radius: 50px`) – explicitly requested by client
- **Style:** Gradient blue backgrounds, white text
- **Hover:** Scale/shadow transition effects
- All CTA buttons are `.rts-btn.radius-big.icon.btn-primary`

### Cards
- White background
- Subtle box-shadow
- Rounded corners (10–20px border-radius)

---

## Client-Specified UI Preferences

These are direct quotes/instructions from the client translated into design decisions:

### Logo
> "Bigger Logo and take it to the corner more"
- Logo max-height: 120px
- Positioned with `margin-left: -15px` to hug the corner

### Phone Number Formatting
> "phone number bynkatab 2/2/3"
- Display as: **079 308 80 00** (not 079 3088 000 or other formats)
- href uses: `callto:+41793088000`

### Reviews Section
> "Remove the image of the guys and keep the ratings"
- Customer reviews are **text-only** with star ratings
- No profile photos or avatar images
- On mobile: also **remove the car icon** next to reviews

### WhatsApp Button
> "Whatsapp button make it bigger on laptop and add a message to it"
- Desktop: 60px × 60px
- Mobile: 50px × 50px
- Position: fixed, bottom-right corner
- Has tooltip/hover animation

### Social Media
> "Remove socials links"
- No Facebook, Instagram, Twitter, or any social media links anywhere on the site
- The only external link is WhatsApp

### Footer
> "Clean the footer"
- 4 clean columns: Unternehmen, Tipps & Ratgeber, Rechtliches, Kontakt
- "Unsere Geschichte" (Our Story) links to `/ueber-uns`
- No social icons, no newsletter signup, minimal and professional

### Location Display
> "Address should be Luzern but not Switzerland"
- Show "Sursee, Luzern" – never "Sursee, Luzern, Switzerland"
- Clicking the address opens Google Maps

### Car Brands Display
> "Car Brands on the phone make them bel 3ared w 3am y2albo" (horizontal and scrolling)
- Implemented as infinite auto-scrolling horizontal slider
- Brand order is specific and intentional:
  1. **German:** Volkswagen, Skoda, Seat, Audi, Mercedes, BMW, Porsche
  2. **French:** Renault, Peugeot, Opel
  3. **Japanese:** Toyota, Honda, Nissan, Mazda

### Images
> "Change pictures to get pictures from Facebook"
- Real business photos used instead of stock photos
- About Us page shows **3 images side-by-side on mobile** (responsive grid)

### Content Emphasis
> "Ebroz aktar eno we buy all types in any condition" (Emphasize more that we buy all types in any condition)
- This messaging appears prominently on the homepage and in multiple sections
- Key selling point for the business

---

## Page-Specific Design Notes

### Homepage Flow
The homepage follows this exact flow (intentionally ordered):
1. **Hero Banner** – "Auto verkaufen zum Bestpreis" with CTA
2. **Valuation Form** – Immediately after banner (client: "Put the formula right under the Welcome")
3. **About Section** – Brief intro with 2,000+ cars stat
4. **Counter Stats** – Animated counter bar (25+ years, 1,500+ customers, 5,000+ vehicles)
5. **Brand Slider** – Auto-scrolling car brand logos
6. **Why Choose Us** – 8 value propositions
7. **Testimonials** – Real Google reviews in slider
8. **FAQ Accordion** – 8 Q&A with JSON-LD
9. **Contact Form** – Another valuation form at the bottom

### Bewertung (Quote) Page
- Minimal header (just logo + close button)
- No standard navigation – focused conversion page
- Gradient background (`#f5f7fa → #c3cfe2`)
- Form is the star of the page

### Tips Pages
- Standard layout with breadcrumbs
- Informational content with embedded valuation forms
- "Last updated" shows dynamically as last month

---

## Animations & Interactions

| Element | Animation |
|---|---|
| Hero text | Fade-in-up with staggered delays (0.2s, 0.4s, 0.6s, 0.8s) |
| Counters | Count-up animation on scroll (via counter-up.js) |
| Brand logos | Infinite horizontal auto-scroll (CSS keyframes) |
| WhatsApp button | Scale(1.1) + enhanced shadow on hover |
| Page load | Split-screen loader animation |
| Parallax | Jarallax.js on banner background images |
| Reviews | Swiper.js slider with auto-play |

---

## Responsive Design

- **Mobile-first considerations** – the client tests extensively on mobile
- Bootstrap grid system used throughout
- Key breakpoint: `767px` for mobile-specific styles
- Mobile sidebar menu for navigation
- 3-column about images stack to single column on mobile (but show 3 images, not 1)
- Brand slider adapts to touch/swipe on mobile
