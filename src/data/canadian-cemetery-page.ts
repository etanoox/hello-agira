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
    visitorNote: l('Prima della visita, verifica le condizioni di accesso attraverso i canali ufficiali del cimitero.', 'Before visiting, check access arrangements through the cemetery’s official channels.'),
    visitorContacts: [{ label: l('Scheda ufficiale · Veterans Affairs Canada', 'Official guide · Veterans Affairs Canada'), href: 'https://veterans.gc.ca/en/remembrance/memorials/overseas/agira-canadian-war-cemetery' }],
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
      { title: l('Il paesaggio', 'The landscape'), text: l('La vista della fotografia mette in relazione il luogo della memoria con il territorio di Agira.', 'The view in the photograph connects this place of remembrance with the countryside around Agira.') },
      { title: l('La memoria condivisa', 'Shared remembrance'), text: l('Una tappa per comprendere il legame storico tra Agira e il Canada.', 'A stop for understanding the historical connection between Agira and Canada.') },
    ],
    practical: [
      { title: l('Accesso e visita', 'Access and visiting'), text: l('Consulta la scheda ufficiale prima di partire e verifica eventuali limitazioni. Segui le indicazioni presenti all’ingresso.', 'Consult the official guide before setting off and check for any restrictions. Follow the guidance displayed at the entrance.') },
      { title: l('Come arrivare', 'Getting there'), text: l('Usa le indicazioni della mappa per raggiungere il cimitero. Organizza lo spostamento in base al tuo punto di partenza.', 'Use the map directions to reach the cemetery. Plan your journey according to your starting point.') },
      { title: l('Un luogo di raccoglimento', 'A place for reflection'), text: l('Mantieni un comportamento rispettoso, non toccare le lapidi e non disturbare chi si ferma a commemorare.', 'Be respectful, avoid touching the headstones and do not disturb those pausing to commemorate.') },
      { title: l('Accessibilità', 'Accessibility'), text: l('Se hai esigenze di mobilità, verifica prima della visita le condizioni degli ingressi e dei percorsi con i referenti ufficiali.', 'If you have mobility requirements, check entrance and route conditions with the official contacts before visiting.') },
    ],
    gallery: [{ key: 'canadianCemetery', title: l('Le lapidi, il lago Pozzillo e l’Etna', 'Headstones, Lake Pozzillo and Mount Etna') }],
    sources: [{ title: 'Veterans Affairs Canada — Agira Canadian War Cemetery', url: 'https://veterans.gc.ca/en/remembrance/memorials/overseas/agira-canadian-war-cemetery' }],
  };
}
