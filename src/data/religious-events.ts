import photos from './photos.json';
import { pageUrl, type Locale } from '../lib/i18n';

// Edition dates already confirmed by the editor. Unknown times, admission
// arrangements and organizers are omitted rather than inferred from past years.
export const saintPhilipMainEvent = {
  startDate: '2027-05-12',
  image: 'abbeyFestivalAnello',
} as const;
export const nativityEvent = {
  startDate: '2026-12-24',
  image: 'nativitySanfilippo7586',
  organizer: 'Associazione Amici del Presepe',
} as const;

type ReligiousEvent = 'saintPhilip' | 'nativity';

export function getReligiousEventGraph(origin: URL, lang: Locale, kind: ReligiousEvent) {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  const saint = kind === 'saintPhilip';
  const details = saint ? saintPhilipMainEvent : nativityEvent;
  const route = saint ? 'saintFestival' : 'nativity';
  const root = origin.origin;
  const page = new URL(pageUrl(route, lang), root).href;
  // Both languages identify the same edition, rather than two separate events.
  const eventId = new URL(pageUrl(route, 'it') + (saint ? '#edizione-2027' : '#edizione-2026'), root).href;
  const locationId = `${root}/#${saint ? 'luoghi-festa-san-filippo' : 'luoghi-presepe-vivente'}`;
  const breadcrumbId = `${page}#breadcrumb`;
  const photo = photos[details.image];
  const width = Math.max(...photo.widths.filter(value => value <= 2048));
  const imageUrl = new URL(`/images/${details.image}-${width}.webp`, root).href;
  const imageId = `${imageUrl}#image`;
  const organizerId = `${root}/#associazione-amici-del-presepe`;
  const name = saint
    ? l('Festa di San Filippo d’Agira 2027', 'Feast of Saint Philip of Agira 2027')
    : l('Presepe Vivente di Agira 2026 · 36ª edizione', 'Agira Living Nativity 2026 · 36th edition');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': saint ? 'Festival' : 'Event', '@id': eventId,
        name,
        description: saint
          ? l('La festa principale del patrono di Agira rinnova la devozione a San Filippo attraverso celebrazioni religiose, venerazione delle reliquie e processioni. Orari e percorsi saranno indicati nel programma dell’edizione.', 'The principal feast of Agira’s patron saint renews devotion to Saint Philip through religious celebrations, veneration of relics and processions. Times and routes will be announced in the edition’s programme.')
          : l('La 36ª edizione del Presepe Vivente attraversa la parte alta del centro storico di Agira, tra figuranti, botteghe e antichi mestieri, fino alla Natività nello scenario del Castello.', 'The 36th edition of the Living Nativity winds through Agira’s upper historic centre, with costumed performers, workshops and traditional crafts, culminating in the Nativity at the castle.'),
        url: page, startDate: details.startDate,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: { '@id': locationId }, image: { '@id': imageId },
        mainEntityOfPage: { '@id': `${page}#page` },
        ...(!saint ? { organizer: { '@id': organizerId } } : {}),
      },
      {
        '@type': 'Place', '@id': locationId,
        name: saint
          ? l('Abbazia di San Filippo e luoghi delle celebrazioni ad Agira', 'San Filippo Abbey and celebration venues in Agira')
          : l('Centro storico e Castello di Agira', 'Historic centre and castle of Agira'),
        address: {
          '@type': 'PostalAddress', addressLocality: 'Agira',
          addressRegion: 'Sicilia', postalCode: '94011', addressCountry: 'IT',
        },
      },
      ...(!saint ? [{ '@type': 'Organization', '@id': organizerId, name: nativityEvent.organizer }] : []),
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
          { '@type': 'ListItem', position: 3, name, item: page },
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
