export const locales = ['it', 'en'] as const;
export type Locale = typeof locales[number];
export const homeUrl = (lang: Locale) => `/${lang}/`;
export const otherLocale = (lang: Locale): Locale => lang === 'it' ? 'en' : 'it';
export const sectionIds = {
  discover: { it: 'scopri', en: 'discover' },
  sights: { it: 'cosa-vedere', en: 'sights' },
  pastry: { it: 'cassatella', en: 'cassatella' },
  routes: { it: 'itinerari', en: 'itineraries' },
  eat: { it: 'mangiare', en: 'food' },
  stay: { it: 'dormire', en: 'stay' },
  events: { it: 'eventi', en: 'events' },
  map: { it: 'mappa', en: 'map' },
  history: { it: 'storia', en: 'history' },
  info: { it: 'informazioni', en: 'information' },
  about: { it: 'progetto', en: 'about' },
} satisfies Record<string, Record<Locale, string>>;
export type Section = keyof typeof sectionIds;
export const anchor = (key: Section, lang: Locale) => `#${sectionIds[key][lang]}`;
// Future page translations are mapped by entityId, never inferred by replacing slugs.
export const clusters = {
  sights: { it: 'cosa-vedere', en: 'things-to-see' },
  eat: { it: 'mangiare', en: 'food-and-drink' },
  stay: { it: 'dormire', en: 'where-to-stay' },
  routes: { it: 'itinerari', en: 'itineraries' },
  history: { it: 'storia', en: 'history' },
  events: { it: 'eventi', en: 'events' },
  festival: { it: 'sagra-cassatella', en: 'cassatella-festival' },
  info: { it: 'informazioni', en: 'visitor-information' },
} as const;
export const pageUrl = (key: keyof typeof clusters, lang: Locale) => `/${lang}/${clusters[key][lang]}/`;

export const itinerarySlugs = {
  first: { it: 'un-primo-incontro', en: 'a-first-encounter' },
  day: { it: 'prendila-con-calma', en: 'take-your-time' },
  weekend: { it: 'resta-un-po-di-piu', en: 'stay-a-little-longer' },
} as const;
export type ItineraryId = keyof typeof itinerarySlugs;
export const itineraryUrl = (id: ItineraryId, lang: Locale) => `${pageUrl('routes', lang)}${itinerarySlugs[id][lang]}/`;

export const sightSlugs = {
  abbey: { it: 'abbazia-san-filippo', en: 'san-filippo-abbey' },
  castle: { it: 'castello-di-agira', en: 'agira-castle' },
} as const;
export type SightId = keyof typeof sightSlugs;
export const sightUrl = (id: SightId, lang: Locale) => `${pageUrl('sights', lang)}${sightSlugs[id][lang]}/`;
