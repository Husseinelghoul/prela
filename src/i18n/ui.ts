// Central UI dictionary for the shared chrome (Header / Footer) and locale plumbing.
// Page bodies live in their own .astro files per locale — this only covers the
// reusable navigation, footer and CTA strings so those components stay DRY.

export type Lang = 'de' | 'fr';

export const LOCALE = {
  de: 'de-CH',
  fr: 'fr-CH',
} as const;

export const OG_LOCALE = {
  de: 'de_CH',
  fr: 'fr_CH',
} as const;

export const ui = {
  de: {
    'nav.home': 'Startseite',
    'nav.about': 'Über Uns',
    'nav.tips': 'Tipps & Ratgeber',
    'nav.tips.sell': 'Auto verkaufen',
    'nav.tips.buy': 'Auto kaufen',
    'nav.tips.export': 'Auto exportieren',
    'nav.contact': 'Kontakt',
    'cta.valuation': 'Gratis Bewertung',
    'aria.openMenu': 'Menü öffnen',
    'aria.closeMenu': 'Menü schliessen',
    'footer.company': 'Unternehmen',
    'footer.ourStory': 'Unsere Geschichte',
    'footer.freeValuation': 'Gratis Autobewertung',
    'footer.tips': 'Tipps & Ratgeber',
    'footer.tips.sell': 'Auto verkaufen Tipps',
    'footer.tips.buy': 'Auto kaufen Tipps',
    'footer.tips.export': 'Auto exportieren',
    'footer.legal': 'Rechtliches',
    'footer.terms': 'AGB & Haftungsausschluss',
    'footer.privacy': 'Datenschutz',
    'footer.cookies': 'Cookie-Richtlinie',
    'footer.contact': 'Kontakt',
    'footer.rights': 'Alle Rechte vorbehalten',
    'footer.regions': 'Autoankauf nach Region',
    'lang.switch': 'FR',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.tips': 'Conseils',
    'nav.tips.sell': 'Vendre sa voiture',
    'nav.tips.buy': 'Acheter une voiture',
    'nav.tips.export': 'Exporter une voiture',
    'nav.contact': 'Contact',
    'cta.valuation': 'Estimation gratuite',
    'aria.openMenu': 'Ouvrir le menu',
    'aria.closeMenu': 'Fermer le menu',
    'footer.company': 'Entreprise',
    'footer.ourStory': 'Notre histoire',
    'footer.freeValuation': 'Estimation gratuite',
    'footer.tips': 'Conseils',
    'footer.tips.sell': 'Conseils pour vendre',
    'footer.tips.buy': 'Conseils pour acheter',
    'footer.tips.export': 'Exporter une voiture',
    'footer.legal': 'Mentions légales',
    'footer.terms': 'CGV & clause de non-responsabilité',
    'footer.privacy': 'Protection des données',
    'footer.cookies': 'Politique en matière de cookies',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés',
    'footer.regions': 'Rachat de voiture par région',
    'lang.switch': 'DE',
  },
} as const;

export type UiKey = keyof (typeof ui)['de'];

/** Returns a translator bound to a language, falling back to German. */
export function useT(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui.de[key];
}

// Route map for the four localised core pages. Used by the language switcher
// and for hreflang alternates. Pages that exist in one language only are absent.
export const ROUTES: { de: string; fr: string }[] = [
  { de: '/', fr: '/fr/' },
  { de: '/ueber-uns', fr: '/fr/a-propos' },
  { de: '/kontakt', fr: '/fr/contact' },
  { de: '/bewertung', fr: '/fr/estimation' },
];
