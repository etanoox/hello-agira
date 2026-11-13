import { pageUrl, sightUrl, type Locale } from '../lib/i18n';
import { imageReference } from '../lib/schema';

export const conference = {
  image: 'diodorusConferencePoster',
  start: '2026-11-21T16:00:00+01:00',
  website: 'https://www.fondazionefranzone.org/',
  email: 'info@fondazionefranzone.org',
} as const;

export function conferenceCopy(lang: Locale) {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  return {
    name: l('Diodoro Siculo – L’antico Egitto, le Amazzoni e gli Atlantidi', 'Diodorus Siculus – Ancient Egypt, the Amazons and the Atlantians'),
    category: l('Cultura e storia', 'Culture and history'),
    date: l('Sabato 21 novembre 2026, ore 16:00', 'Saturday, 21 November 2026, 4:00 pm'),
    venue: l('Chiesa del SS. Salvatore, Agira', 'Church of the Most Holy Saviour (Chiesa del SS. Salvatore), Agira'),
    admission: l('Ingresso gratuito, senza prenotazione.', 'Free admission. No booking required.'),
    description: l('Ad Agira, città natale di Diodoro Siculo, una giornata di studio e ricerca storica dedicata ai racconti della sua Biblioteca storica.', 'Agira, the birthplace of Diodorus Siculus, hosts a conference exploring the accounts preserved in his Library of History.'),
    book: l('Biblioteca storica', 'Library of History'),
    body: l('Dall’antico Egitto alle Amazzoni e agli Atlantidi, studiosi di diverse discipline si confrontano su come interpretare questi racconti alla luce delle fonti antiche e della ricerca moderna.', 'From ancient Egypt to the Amazons and the Atlantians, scholars from different fields will discuss how ancient sources and modern research can help us understand these accounts.'),
    credit: l('Locandina della Fondazione Franzone.', 'Event poster from the Franzone Foundation.'),
    organizer: l('L’iniziativa è promossa dalla Fondazione Franzone con il patrocinio del Comune di Agira.', 'The event is organised by the Franzone Foundation under the patronage of the Municipality of Agira.'),
  };
}

export function conferenceGraph(origin: URL, lang: Locale) {
  const c = conferenceCopy(lang);
  const url = (path: string) => new URL(path, origin).href;
  const page = url(pageUrl('diodorusConference', lang));
  const id = url(pageUrl('diodorusConference', 'it')) + '#event';
  const image = imageReference(origin, conference.image);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Event', '@id': id, name: c.name, description: c.description, url: page, image,
        startDate: conference.start, eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode', isAccessibleForFree: true,
        location: { '@type': 'Place', name: c.venue, url: url(sightUrl('salvatore', lang)),
          address: { '@type': 'PostalAddress', streetAddress: 'Piazza Roma', addressLocality: 'Agira', addressRegion: 'Sicilia', postalCode: '94011', addressCountry: 'IT' } },
        organizer: { '@type': 'Organization', name: 'Fondazione Franzone', url: conference.website, email: conference.email },
        mainEntityOfPage: { '@id': page + '#page' } },
      { '@type': 'BreadcrumbList', '@id': page + '#breadcrumb', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Hello Agira', item: url('/' + lang + '/') },
        { '@type': 'ListItem', position: 2, name: lang === 'it' ? 'Eventi' : 'Events', item: url(pageUrl('events', lang)) },
        { '@type': 'ListItem', position: 3, name: c.name, item: page },
      ] },
      { '@type': 'WebPage', '@id': page + '#page', mainEntity: { '@id': id }, breadcrumb: { '@id': page + '#breadcrumb' }, primaryImageOfPage: image },
    ],
  };
}
