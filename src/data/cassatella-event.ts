import photos from './photos.json';
import { pageUrl, type Locale } from '../lib/i18n';

// Details confirmed by the editor; coordinates resolve from the supplied Maps pin.
export const cassatellaEvent = {
  name: '14ª Sagra della Cassatella e le vie dei sapori',
  startDate: '2026-11-13T19:00:00+01:00',
  endDate: '2026-11-15',
  organizer: { name: 'Etna Eventi Management', url: 'https://etnaeventimanagement.it/' },
  location: {
    name: 'Piazza Europa',
    mapUrl: 'https://maps.app.goo.gl/MoMfUFijVn3ypgeNA',
    latitude: 37.658005,
    longitude: 14.518352,
  },
  image: 'cassatelleAnello9934',
} as const;

export function getCassatellaEventGraph(origin: URL, lang: Locale) {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  const root = origin.origin;
  const page = new URL(pageUrl('festival', lang), root).href;
  // The two language versions describe the same edition of the event.
  const eventId = new URL(pageUrl('festival', 'it') + '#evento-2026', root).href;
  const locationId = `${root}/#piazza-europa-agira`;
  const organizerId = `${cassatellaEvent.organizer.url}#organization`;
  const photo = photos[cassatellaEvent.image];
  const width = Math.max(...photo.widths.filter(value => value <= 1800));
  const imageUrl = new URL(`/images/${cassatellaEvent.image}-${width}.webp`, root).href;
  const imageId = `${imageUrl}#image`;
  const breadcrumbId = `${page}#breadcrumb`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FoodEvent', '@id': eventId,
        name: l(cassatellaEvent.name, '14th Sagra della Cassatella e le vie dei sapori'),
        description: l(
          'Dal 13 al 15 novembre 2026, Piazza Europa ad Agira ospita la Sagra della Cassatella e le vie dei sapori. Inizio venerdì 13 alle 19:00. Ingresso libero senza prenotazione o biglietto, spettacoli inclusi. Cibo e bevande si acquistano separatamente.',
          'From 13 to 15 November 2026, Piazza Europa in Agira hosts the Sagra della Cassatella e le vie dei sapori. The festival begins on Friday 13 at 19:00. Free entry without booking or tickets, including shows. Food and drinks are purchased separately.'
        ),
        url: page,
        startDate: cassatellaEvent.startDate, endDate: cassatellaEvent.endDate,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        isAccessibleForFree: true,
        location: { '@id': locationId },
        organizer: { '@id': organizerId },
        image: { '@id': imageId },
        mainEntityOfPage: { '@id': `${page}#page` },
      },
      {
        '@type': 'Place', '@id': locationId, name: cassatellaEvent.location.name,
        address: {
          '@type': 'PostalAddress', streetAddress: 'Piazza Europa',
          addressLocality: 'Agira', addressRegion: 'Sicilia', postalCode: '94011', addressCountry: 'IT',
        },
        geo: { '@type': 'GeoCoordinates', latitude: cassatellaEvent.location.latitude, longitude: cassatellaEvent.location.longitude },
        hasMap: cassatellaEvent.location.mapUrl,
      },
      { '@type': 'Organization', '@id': organizerId, ...cassatellaEvent.organizer },
      {
        '@type': 'ImageObject', '@id': imageId, contentUrl: imageUrl, url: imageUrl,
        width, height: Math.round(photo.height * width / photo.width),
        caption: photo.alt[lang], creditText: photo.credit[lang],
        creator: { '@type': 'Person', name: photo.author },
      },
      {
        '@type': 'BreadcrumbList', '@id': breadcrumbId,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Hello Agira', item: `${root}/${lang}/` },
          { '@type': 'ListItem', position: 2, name: l('Eventi', 'Events'), item: new URL(pageUrl('events', lang), root).href },
          { '@type': 'ListItem', position: 3, name: l('Sagra della Cassatella 2026', 'Cassatella Festival 2026'), item: page },
        ],
      },
      {
        '@type': 'WebPage', '@id': `${page}#page`,
        mainEntity: { '@id': eventId }, breadcrumb: { '@id': breadcrumbId },
        primaryImageOfPage: { '@id': imageId },
      },
    ],
  };
}
