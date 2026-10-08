import type { Locale } from '../lib/i18n';
import type { SightPage } from './sight-pages';

export function getCanadianCemeteryPage(lang: Locale): SightPage {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  return {
    id: 'canadianCemetery', name: l('Il Cimitero militare canadese', 'Agira Canadian War Cemetery'),
    category: l('Silenzio, storia e memoria', 'Quiet, history and remembrance'),
    title: l('Cimitero militare canadese di Agira: storia e visita | Hello Agira', 'Agira Canadian War Cemetery: history and visiting | Hello Agira'),
    description: l('Scopri il Cimitero militare canadese di Agira, luogo di memoria della campagna di Sicilia del 1943: storia, fotografia e informazioni per la visita.', 'Explore Agira Canadian War Cemetery, a place of remembrance for the 1943 Sicily campaign, with history, a photograph and visiting information.'),
    introduction: l('Tra le lapidi e il paesaggio, una sosta per ricordare. Il cimitero canadese custodisce una parte della storia di Agira e invita a incontrarla con rispetto e senza fretta.', 'Among the headstones and the landscape, a pause for remembrance. The Canadian cemetery preserves part of Agira’s history and invites you to approach it respectfully and without rushing.'),
    image: 'canadianCemetery', location: l('Cimitero militare canadese · Agira, EN · Sicilia', 'Agira Canadian War Cemetery · Agira, EN · Sicily'),
    mapQuery: 'Agira Canadian War Cemetery Sicilia',
    visitorNote: l('Il Cimitero è sempre aperto. Si trova lungo la SS 121, sulla strada in direzione Regalbuto, ed è possibile parcheggiare facilmente nelle vicinanze.', 'The cemetery is always open. It is located along the SS 121 road towards Regalbuto, and parking is easily available nearby.'),
    facts: [
      { label: l('Il luogo', 'The place'), value: l('Cimitero di guerra canadese', 'Canadian war cemetery') },
      { label: l('Contesto storico', 'Historical context'), value: l('Seconda guerra mondiale · campagna di Sicilia', 'Second World War · Sicily campaign') },
      { label: l('Scelta del sito', 'Site selected'), value: l('Settembre 1943', 'September 1943') },
    ],
    story: [
      { title: l('Agira, luglio 1943.', 'Agira, July 1943.'), paragraphs: [l('Le truppe canadesi sbarcarono in Sicilia il 10 luglio 1943 insieme agli Alleati. Durante l’avanzata nell’interno dell’isola, Agira fu teatro di duri combattimenti: la città venne conquistata il 28 luglio, dopo cinque giorni di battaglia.', 'Canadian troops landed in Sicily on 10 July 1943 alongside the Allies. During the advance through the island’s interior, Agira saw fierce fighting: the town was captured on 28 July, after five days of battle.')] },
      { title: l('Un luogo per ricordare.', 'A place to remember.'), paragraphs: [l('Terminata la campagna di Sicilia, si decise di riunire in un unico cimitero le sepolture dei canadesi caduti nei combattimenti sull’isola. Nel settembre 1943 gli ufficiali canadesi scelsero questo sito, su una piccola collina nel territorio di Agira.', 'After the Sicily campaign, the decision was made to gather the graves of Canadians who had died in the island fighting into a single cemetery. In September 1943, Canadian officers selected this site on a small hill in the municipality of Agira.')] },
      { title: l('Guardare, leggere, fermarsi.', 'Look, read, pause.'), paragraphs: [l('La fotografia mostra le lapidi sul prato, tra gli alberi, con il lago Pozzillo e l’Etna sullo sfondo. Durante la visita, dedica attenzione alle iscrizioni: dietro ogni nome c’è una vita. Il paesaggio accompagna il ricordo, senza sostituirlo.', 'The photograph shows headstones on the lawn among trees, with Lake Pozzillo and Mount Etna in the background. During your visit, take time to read the inscriptions: behind every name is a life. The landscape accompanies remembrance rather than replacing it.')] },
    ],
    highlights: [
      { title: l('Le lapidi', 'The headstones'), text: l('Leggi nomi e iscrizioni con calma, rispettando le sepolture e gli altri visitatori.', 'Take time to read names and inscriptions, respecting the graves and other visitors.') },
      { title: l('Il paesaggio', 'The landscape'), text: l('Da qui si può scorgere il lago Pozzillo e sullo sfondo è possibile ammirare la maestosa Etna.', 'From here, you can see Lake Pozzillo and, in the distance, admire the majestic Mount Etna.') },
      { title: l('Firma il Guestbook', 'Sign the Guestbook'), text: l('Prima di andare via, lascia una firma e un pensiero sul guestbook che troverai all’interno della nicchia sulla sinistra, poco prima dell’uscita.', 'Before you leave, sign the guestbook and leave a few words. You will find it inside the niche on the left, just before the exit.') },
    ],
    practical: [
      { title: l('Accesso e visita', 'Access and visiting'), text: l('L’accesso è gratuito e non ci sono orari di apertura o chiusura. Rispetta questo luogo e contribuisci a preservarlo per le generazioni future.', 'Admission is free and there are no opening or closing hours. Please respect this place and help preserve it for future generations.') },
      { title: l('Come arrivare', 'Getting there'), text: l('Usa le indicazioni della mappa per raggiungere il cimitero. Organizza lo spostamento in base al tuo punto di partenza.', 'Use the map directions to reach the cemetery. Plan your journey according to your starting point.') },
      { title: l('Un luogo di raccoglimento', 'A place for reflection'), text: l('Mantieni un comportamento rispettoso, non toccare le lapidi e non disturbare chi si ferma a commemorare.', 'Be respectful, avoid touching the headstones and do not disturb those pausing to commemorate.') },
      { title: l('Accessibilità', 'Accessibility'), text: l('Il cimitero si trova su una collinetta e per accedere bisogna salire pochi gradini.', 'The cemetery is located on a small hill, and access requires climbing a few steps.') },
    ],
    gallery: [{ key: 'canadianCemetery', title: l('Le lapidi, il lago Pozzillo e l’Etna', 'Headstones, Lake Pozzillo and Mount Etna') }],
    sources: [{ title: 'Veterans Affairs Canada — Agira Canadian War Cemetery', url: 'https://veterans.gc.ca/en/remembrance/memorials/overseas/agira-canadian-war-cemetery' }],
  };
}
