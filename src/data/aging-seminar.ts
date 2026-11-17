import { pageUrl, type Locale } from '../lib/i18n';
import { imageReference } from '../lib/schema';

export const seminar = {
  image: 'agingSeminarPoster',
  start: '2026-11-28T17:00:00+01:00',
  address: 'Via Vittorio Emanuele 338/340',
} as const;

export function seminarCopy(lang: Locale) {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  return {
    name: l('Invecchiare non significa arrendersi: proteggere la mente, la memoria e il sorriso', 'Growing older doesn’t mean giving up: protecting the mind, memory and smile'),
    category: l('Seminario', 'Seminar'),
    date: l('Sabato 28 novembre 2026, ore 17:00', 'Saturday, 28 November 2026, 5:00 pm'),
    venue: 'Circolo degli Operai, Agira',
    admission: l('Ingresso gratuito, senza prenotazione.', 'Free admission. No booking required.'),
    description: l('Un seminario sulla salute della mente e sulla memoria durante l’invecchiamento.', 'A seminar on brain health and memory as we age.'),
    organizer: l('A cura della dott.ssa Maria Ausilia Parrinello, neuropsichiatra presso la casa di cura Villa Letizia.', 'Organised by Dr Maria Ausilia Parrinello, a neuropsychiatrist at Villa Letizia.'),
    participant: l('Con la partecipazione del dott. Giacomo Alia.', 'With the participation of Dr Giacomo Alia.'),
    support: l('Con il supporto della Pro Loco di Agira.', 'With support from Pro Loco di Agira.'),
    credit: l('Grafica non ufficiale a cura di Hello Agira.', 'Unofficial event graphic by Hello Agira.'),
  };
}

export function seminarGraph(origin: URL, lang: Locale) {
  const c = seminarCopy(lang);
  const url = (path: string) => new URL(path, origin).href;
  const page = url(pageUrl('agingSeminar', lang));
  const id = url(pageUrl('agingSeminar', 'it')) + '#event';
  const image = imageReference(origin, seminar.image);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Event', '@id': id, name: c.name, description: c.description, url: page, image,
        startDate: seminar.start, eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode', isAccessibleForFree: true,
        location: { '@type': 'Place', name: c.venue,
          address: { '@type': 'PostalAddress', streetAddress: seminar.address, addressLocality: 'Agira', addressRegion: 'Sicilia', postalCode: '94011', addressCountry: 'IT' } },
        organizer: { '@type': 'Person', name: 'Maria Ausilia Parrinello' },
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
