import photos from './photos.json';
import { pageUrl, type Locale } from '../lib/i18n';

export const nessunDormaChristmas = {
  startDate: '2026-12-25T00:01:00+01:00',
  endDate: '2026-12-25T05:00:00+01:00',
  organizer: { name: 'Pub Nessun Dorma', url: 'https://nessundormapub.it/' },
  address: 'Via Cairoli 21',
  image: 'nessunDormaChristmas',
} as const;

export function getNessunDormaChristmas(lang: Locale) {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  return {
    title: l('Natale al Nessun Dorma ad Agira: 25 dicembre 2026 | Hello Agira', 'Christmas at Nessun Dorma in Agira: 25 December 2026 | Hello Agira'),
    name: l('Natale al Nessun Dorma', 'Christmas at Nessun Dorma'),
    heading: l('Natale al\nNessun Dorma.', 'Christmas at\nNessun Dorma.'),
    description: l('Il 25 dicembre 2026, dalle 00:01 alle 05:00, Natale al Pub Nessun Dorma di Agira: ingresso gratuito in Via Cairoli 21, nella notte del Presepe Vivente.', 'On 25 December 2026, from 00:01 to 05:00, celebrate Christmas at Pub Nessun Dorma in Agira: free admission at Via Cairoli 21, on the night of the Living Nativity.'),
    intro: l('Appena dopo la mezzanotte, la notte di Natale continua al Nessun Dorma. Un appuntamento annuale per ritrovarsi al pub e scambiarsi gli auguri, nella stessa notte in cui Agira accoglie il Presepe Vivente.', 'Just after midnight, Christmas night continues at Nessun Dorma. An annual gathering to meet at the pub and exchange Christmas greetings, on the same night that Agira hosts its Living Nativity.'),
    sections: [
      { id: 'notte-di-natale', label: l('01 / DOPO LA MEZZANOTTE', '01 / AFTER MIDNIGHT'), title: l('La notte continua,\nin paese.', 'The night continues\nin town.'), paragraphs: [
        l('La notte tra il 24 e il 25 dicembre è un momento speciale per Agira. Accanto al percorso del Presepe Vivente, il Natale al Nessun Dorma è diventato un appuntamento che si rinnova ogni anno.', 'The night of 24–25 December is a special occasion in Agira. Alongside the Living Nativity route, Christmas at Nessun Dorma has become a gathering that returns every year.'),
        l('Chi desidera proseguire la serata dopo la visita al Presepe può ritrovarsi al pub. L’evento è organizzato dal Pub Nessun Dorma, con ingresso gratuito dalle 00:01 del 25 dicembre 2026 e conclusione alle 05:00 dello stesso giorno.', 'Visitors wishing to continue their evening after the Living Nativity can meet at the pub. The event is organised by Pub Nessun Dorma, with free admission from 00:01 on 25 December 2026 until 05:00 that morning.'),
      ] },
    ],
    faqs: [
      { q: l('Qual è la notte giusta?', 'Which night is it?'), a: l('È la notte tra giovedì 24 e venerdì 25 dicembre 2026: l’evento inizia un minuto dopo la mezzanotte, alle 00:01 del 25 dicembre.', 'It is the night of Thursday 24 to Friday 25 December 2026: the event begins one minute after midnight, at 00:01 on 25 December.') },
      { q: l('Quando termina?', 'When does it finish?'), a: l('L’evento si conclude alle 05:00 del mattino di venerdì 25 dicembre 2026.', 'The event ends at 05:00 on the morning of Friday 25 December 2026.') },
      { q: l('L’ingresso è gratuito?', 'Is admission free?'), a: l('Sì, l’ingresso all’evento è gratuito. Per informazioni sui servizi del locale, rivolgiti direttamente al pub.', 'Yes, admission to the event is free. For information about the venue’s services, contact the pub directly.') },
      { q: l('Dove si trova il pub?', 'Where is the pub?'), a: l('Il Pub Nessun Dorma si trova in Via Cairoli 21, ad Agira. Sul sito del locale trovi i riferimenti per organizzare la visita.', 'Pub Nessun Dorma is at Via Cairoli 21 in Agira. The pub’s website has details to help you plan your visit.') },
    ],
  };
}

export function getNessunDormaChristmasGraph(origin: URL, lang: Locale) {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  const c = getNessunDormaChristmas(lang);
  const root = origin.origin;
  const page = new URL(pageUrl('nessunDormaChristmas', lang), root).href;
  const eventId = new URL(pageUrl('nessunDormaChristmas', 'it') + '#edizione-2026', root).href;
  const organizerId = `${nessunDormaChristmas.organizer.url}#organization`;
  const locationId = `${nessunDormaChristmas.organizer.url}#place`;
  const photo = photos[nessunDormaChristmas.image];
  const width = Math.max(...photo.widths);
  const imageUrl = new URL(`/images/${nessunDormaChristmas.image}-${width}.webp`, root).href;
  const imageId = `${imageUrl}#image`;
  const breadcrumbId = `${page}#breadcrumb`;
  return {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'Event', '@id': eventId, name: c.name, url: page,
        description: l('L’appuntamento annuale di Natale al Pub Nessun Dorma, per ritrovarsi dopo mezzanotte e continuare la serata ad Agira.', 'The annual Christmas gathering at Pub Nessun Dorma, to meet after midnight and continue the evening in Agira.'),
        startDate: nessunDormaChristmas.startDate, endDate: nessunDormaChristmas.endDate,
        eventStatus: 'https://schema.org/EventScheduled', eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        isAccessibleForFree: true, location: { '@id': locationId }, organizer: { '@id': organizerId }, image: { '@id': imageId }, mainEntityOfPage: { '@id': `${page}#page` },
      },
      { '@type': 'Place', '@id': locationId, name: 'Pub Nessun Dorma', url: nessunDormaChristmas.organizer.url,
        address: { '@type': 'PostalAddress', streetAddress: nessunDormaChristmas.address, addressLocality: 'Agira', addressRegion: 'Sicilia', postalCode: '94011', addressCountry: 'IT' } },
      { '@type': 'Organization', '@id': organizerId, ...nessunDormaChristmas.organizer },
      { '@type': 'ImageObject', '@id': imageId, url: imageUrl, contentUrl: imageUrl, width, height: Math.round(photo.height * width / photo.width), caption: photo.alt[lang], creditText: photo.credit[lang] },
      { '@type': 'BreadcrumbList', '@id': breadcrumbId, itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Hello Agira', item: `${root}/${lang}/` },
        { '@type': 'ListItem', position: 2, name: l('Eventi', 'Events'), item: new URL(pageUrl('events', lang), root).href },
        { '@type': 'ListItem', position: 3, name: c.name, item: page },
      ] },
      { '@type': 'WebPage', '@id': `${page}#page`, mainEntity: { '@id': eventId }, breadcrumb: { '@id': breadcrumbId }, primaryImageOfPage: { '@id': imageId } },
    ],
  };
}
