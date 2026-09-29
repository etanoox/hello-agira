import type { Locale, SightId } from '../lib/i18n';
import { getSaintAnthonyPage } from './saint-anthony-page';
import { getAbbeyPage } from './abbey-page';
import type photos from './photos.json';

export interface AudioTrack {
  /** Local path under public/audio/, e.g. /audio/castle/it/01.mp3. */
  src: string;
  durationSeconds?: number;
}
export interface AudioChapter extends AudioTrack {
  title: string;
  /** Plain text; rendered without HTML injection. */
  transcript: string[];
}
export interface PlaceAudioGuide {
  language?: Locale;
  title: string;
  introduction: string;
  chapters: AudioChapter[];
  /** Optional continuous recording; chapters work independently of this file. */
  full?: AudioTrack;
  credit?: string;
}
export interface SightPage {
  id: SightId;
  name: string;
  category: string;
  title: string;
  description: string;
  introduction: string;
  image: keyof typeof photos;
  location: string;
  mapQuery: string;
  visitorNote?: string;
  facts: { label: string; value: string }[];
  story: { title: string; paragraphs: string[] }[];
  highlights: { title: string; text: string }[];
  practical: { title: string; text: string }[];
  gallery: { key: keyof typeof photos; title: string }[];
  sources: { title: string; url: string }[];
  /** Omit when no audio is available in the current page language. */
  audio?: PlaceAudioGuide;
}

export function getSightPages(lang: Locale): SightPage[] {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  return [{
    id: 'castle', name: l('Il Castello di Agira', 'Agira Castle'),
    category: l('Pietra, storia e paesaggio', 'Stone, history and landscape'),
    title: l('Castello di Agira: storia, panorama e visita | Hello Agira', 'Agira Castle: history, views and visiting | Hello Agira'),
    description: l('Scopri il Castello di Agira sul Monte Teja: le torri medievali, il paesaggio e le informazioni utili per organizzare la salita e la visita.', 'Discover Agira Castle on Monte Teja: medieval towers, views of the surrounding landscape and practical information for planning your visit.'),
    introduction: l('In alto, sopra le case. Il castello è un invito a risalire Agira e a osservarla da un’altra prospettiva: prima lungo le strade, poi accanto alle sue torri.', 'High above the houses, the castle invites you to walk uphill through Agira and see it from another perspective: first along its streets, then beside its towers.'),
    image: 'castleDaylight', location: l('Monte Teja · Agira, EN · Sicilia', 'Monte Teja · Agira, EN · Sicily'),
    mapQuery: 'Castello di Agira, Monte Teja, Agira, Sicilia',
    facts: [
      {label:l('Dove', 'Location'),value:l('Sommità del Monte Teja', 'Summit of Monte Teja')},
      {label:l('Quota della sommità', 'Summit elevation'),value:l('Circa 824 m s.l.m.', 'About 824 m above sea level')},
      {label:l('Da osservare', 'Look out for'),value:l('Torri, murature e paesaggio', 'Towers, stonework and views')},
    ],
    story: [
      {title:l('Una sommità, molte storie.', 'One summit, many stories.'),paragraphs:[
        l('Il castello occupa la parte più alta del Monte Teja. L’area conserva tracce di epoche diverse: la sintesi storica “Agira città d’arte” ricorda qui l’acropoli di Agyrion e i ritrovamenti legati a un’antica zecca.', 'The castle stands at the top of Monte Teja. The area preserves traces of different periods: the historical account “Agira città d’arte” places the acropolis of Agyrion here and describes discoveries associated with an ancient mint.'),
        l('Le torri che segnano oggi il profilo del paese sono ricondotte alla fase federiciana del XIII secolo. Guardare il castello significa quindi incontrare una parte medievale di un luogo molto più antico.', 'The towers that mark the town’s skyline today are associated with the 13th-century period of Frederick II. Visiting the castle brings you face to face with a medieval layer of a much older site.'),
      ]},
      {title:l('Il paese ai tuoi piedi.', 'The town below you.'),paragraphs:[
        l('Dalla sommità il paesaggio si apre verso l’interno della Sicilia. Tra i riferimenti descritti dalle fonti locali ci sono l’Etna e il lago Pozzillo, la cui visibilità dipende dalle condizioni atmosferiche.', 'From the summit, the landscape opens across inland Sicily. Local sources describe views towards Mount Etna and Lake Pozzillo, with visibility depending on the weather.'),
        l('Prenditi il tempo per osservare il rapporto tra le torri, la roccia e le case. La salita e la sosta sono due parti della stessa visita: lascia spazio alle pause e scegli un percorso adatto al tuo passo.', 'Take time to notice the relationship between the towers, the rock and the houses. The climb and the stop are two parts of the same visit: allow for breaks and choose an approach that suits your pace.'),
      ]},
    ],
    highlights: [
      {title:l('Le torri', 'The towers'),text:l('Osserva i volumi superstiti e come disegnano il profilo del paese. Rimani nelle aree consentite alla visita.', 'Notice the surviving structures and how they shape the town’s skyline. Stay within areas open to visitors.')},
      {title:l('La pietra', 'The stonework'),text:l('Soffermati sui dettagli delle murature e sul loro rapporto con il terreno. Una fotografia ravvicinata può raccontare quanto una veduta.', 'Look at the details of the walls and their relationship with the ground. A close-up can tell as much as a wider view.')},
      {title:l('Il paesaggio', 'The landscape'),text:l('Alterna lo sguardo tra il paese e l’orizzonte. Se la giornata è limpida, dedica tempo a riconoscere i riferimenti lontani.', 'Look between the town and the horizon. On a clear day, take time to identify landmarks in the distance.')},
    ],
    practical: [
      {title:l('Accesso e orari', 'Access and opening hours'),text:l('Verifica con il Comune di Agira le condizioni di accesso all’area e le eventuali limitazioni. Non diamo per garantita l’apertura degli spazi interni.', 'Check access conditions and any restrictions with the Municipality of Agira. Access to interior spaces should not be assumed.')},
      {title:l('Come arrivare', 'Getting there'),text:l('La visita richiede di raggiungere la parte alta del paese. Prima di seguire il navigatore, controlla sul posto viabilità e parcheggi; il punto sulla mappa non indica un parcheggio o un ingresso verificato.', 'You need to reach the upper part of town. Before following navigation, check local roads and parking; the map location is not a confirmed parking space or entrance.')},
      {title:l('Salite e accessibilità', 'Slopes and accessibility'),text:l('Pendenze, scale e fondo possono incidere sulla visita. Se hai esigenze di mobilità, chiedi informazioni aggiornate prima di organizzare la salita.', 'Slopes, steps and surfaces may affect your visit. If you have mobility requirements, ask for current information before planning the climb.')},
      {title:l('Il tempo da dedicare', 'Time to allow'),text:l('Lascia spazio alla salita, alle pause e al ritorno. Il tempo necessario varia in base al punto di partenza e al percorso: non indichiamo una percorrenza cronometrata.', 'Allow time for the climb, breaks and the return journey. The time needed depends on your starting point and route; no measured walking time is provided.')},
    ],
    gallery: [
      {key:'castleDaylight',title:l('Le torri del Castello', 'The castle towers')},
      {key:'hero',title:l('Il castello nel profilo di Agira, visto dal centro', 'The castle on Agira’s skyline, seen from the centre')},
    ],
    sources: [
      {title:'Agira città d’arte — Rita Loredana Foti e Salvatore Longo Minnolo',url:'https://www.agira.org/Sintesi-storiche/agira-citta-darte.html'},
      {title:l('Kore Siciliæ — Castello di Agira', 'Kore Siciliæ — Agira Castle'),url:'https://koresiciliae.it/it/luoghi/castello-di-agira'},
    ],
  }, getAbbeyPage(lang), getSaintAnthonyPage(lang)];
}
