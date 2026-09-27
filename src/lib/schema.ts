import type { Locale } from './i18n';
export function websiteGraph(origin: URL, lang: Locale, title: string, pagePath = `/${lang}/`) {
  const root = origin.origin;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': `${root}/#website`, url: `${root}/`, name: 'Hello Agira', inLanguage: ['it', 'en'] },
      { '@type': 'WebPage', '@id': `${root}${pagePath}#page`, url: `${root}${pagePath}`, name: title, inLanguage: lang, isPartOf: { '@id': `${root}/#website` }, about: { '@type': 'Place', name: 'Agira', address: { '@type': 'PostalAddress', addressLocality: 'Agira', addressRegion: 'Sicilia', addressCountry: 'IT' } } },
    ],
  };
}
export const serializeSchema = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c');
