import type { Locale } from '../lib/i18n';
import type { SightPage } from './sight-pages';

export function getManmanoGussioPage(lang: Locale): SightPage {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  return {
    id: 'manmanoGussio', name: 'Palazzo baronale Manmano Gussio',
    category: l('Una dimora, una storia ritrovata', 'A historic residence rediscovered'),
    title: l('Palazzo baronale Manmano Gussio ad Agira | Hello Agira', 'Palazzo baronale Manmano Gussio in Agira | Hello Agira'),
    description: l('Scopri Palazzo baronale Manmano Gussio, già Trigona di S. Elia, ad Agira: secoli XVI–XVIII, interni decorati e visite previa prenotazione in via Norfo 2.', 'Discover Palazzo baronale Manmano Gussio, formerly Trigona di S. Elia, in Agira: a 16th–18th-century residence with decorated interiors, open by prior reservation at Via Norfo 2.'),
    introduction: l('Alza lo sguardo. Tra scene dipinte, cornici e dettagli ornamentali, Palazzo baronale Manmano Gussio offre un incontro con il patrimonio delle dimore storiche di Agira.', 'Look up. Among painted scenes, frames and ornamental details, Palazzo baronale Manmano Gussio offers an encounter with Agira’s historic residential heritage.'),
    image: 'manmanoGussio', location: l('Via Norfo 2 · angolo via Diodorea 135 · Agira', 'Via Norfo 2 · corner of Via Diodorea 135 · Agira'),
    mapQuery: 'Palazzo Manmano Gussio Via Norfo 2 Agira',
    visitorNote: l('Il palazzo è visitabile previa prenotazione. Per concordare la visita, contatta Orazio La Delfa al +39 328 779 7235, anche su WhatsApp.', 'The palace can be visited by prior reservation. To arrange a visit, contact Orazio La Delfa on +39 328 779 7235, also available on WhatsApp.'),
    visitorContacts: [
      { label: l('Chiama Orazio La Delfa · +39 328 779 7235', 'Call Orazio La Delfa · +39 328 779 7235'), href: 'tel:+393287797235' },
      { label: l('Prenota su WhatsApp · Orazio La Delfa', 'Book via WhatsApp · Orazio La Delfa'), href: 'https://wa.me/393287797235' },
    ],
    facts: [
      { label: l('Denominazione', 'Name'), value: 'Palazzo baronale Manmano Gussio' },
      { label: l('Già', 'Formerly'), value: 'Trigona di S. Elia' },
      { label: l('Epoca', 'Period'), value: l('Secoli XVI–XVIII', '16th–18th centuries') },
      { label: l('Visita', 'Visiting'), value: l('Previa prenotazione', 'By prior reservation') },
    ],
    story: [
      { title: l('Una dimora nel cuore di Agira.', 'A residence in the heart of Agira.'), paragraphs: [l('Il Palazzo baronale Manmano Gussio, già Trigona di S. Elia, si trova in via Norfo 2, all’angolo con via Diodorea 135. La sua denominazione e la datazione ai secoli XVI–XVIII raccontano un luogo che attraversa più fasi della storia del paese.', 'Palazzo baronale Manmano Gussio, formerly Trigona di S. Elia, stands at Via Norfo 2, on the corner of Via Diodorea 135. Its name and dating to the 16th–18th centuries reflect a place spanning several periods of the town’s history.')] },
      { title: l('Il piacere di osservare.', 'The pleasure of looking closely.'), paragraphs: [l('La fotografia degli interni mostra un soffitto articolato in scene figurative, medaglioni e motivi ornamentali. Cornici dipinte, composizioni floreali e un grande lampadario accompagnano lo sguardo dal centro ai bordi della sala. Sono dettagli da osservare con calma durante la visita.', 'The interior photograph shows a ceiling divided into figurative scenes, medallions and ornamental motifs. Painted frames, floral compositions and a large chandelier lead the eye from the centre towards the edges of the room. Take time to notice these details during your visit.')] },
      { title: l('Un patrimonio recuperato.', 'Heritage restored.'), paragraphs: [l('Il palazzo è stato recentemente restaurato da Orazio La Delfa. Il recupero permette di riscoprire una dimora storica di Agira e di avvicinarsi ai suoi ambienti attraverso una visita concordata in anticipo.', 'The palace has recently been restored by Orazio La Delfa. This work offers an opportunity to rediscover a historic residence in Agira and explore its rooms through a visit arranged in advance.')] },
    ],
    highlights: [
      { title: l('Il soffitto dipinto', 'The painted ceiling'), text: l('Passa dalla scena centrale ai medaglioni e alle decorazioni che la circondano.', 'Move your gaze from the central scene to the surrounding medallions and decoration.') },
      { title: l('I dettagli degli interni', 'Interior details'), text: l('La fotografia rivela cornici, motivi floreali e decorazioni delle pareti: dedica tempo anche ai particolari.', 'The photograph reveals frames, floral motifs and wall decoration: allow time for the details too.') },
      { title: l('Il recente restauro', 'The recent restoration'), text: l('Un’occasione per conoscere il recupero della dimora curato da Orazio La Delfa.', 'An opportunity to learn about the residence’s restoration by Orazio La Delfa.') },
    ],
    practical: [
      { title: l('Prenotare la visita', 'Arranging a visit'), text: l('La visita richiede prenotazione. Contatta Orazio La Delfa al +39 328 779 7235, per telefono o WhatsApp, per concordare giorno, orario e condizioni di accesso.', 'Visits require prior reservation. Contact Orazio La Delfa on +39 328 779 7235 by phone or WhatsApp to agree on the date, time and access arrangements.') },
      { title: l('Dove si trova', 'Location'), text: l('L’indirizzo è via Norfo 2, angolo via Diodorea 135, ad Agira. Usa la mappa come aiuto per orientarti e verifica sul posto l’ingresso concordato.', 'The address is Via Norfo 2, on the corner of Via Diodorea 135, in Agira. Use the map to get your bearings and confirm the agreed entrance on arrival.') },
      { title: l('Durante la visita', 'During your visit'), text: l('Segui le indicazioni dei referenti della dimora e chiedi prima di fotografare gli ambienti. Evita di toccare decorazioni e arredi.', 'Follow the guidance of the residence’s representatives and ask before photographing the rooms. Avoid touching decorations and furnishings.') },
      { title: l('Accessibilità', 'Accessibility'), text: l('Se hai esigenze di mobilità, verifica al momento della prenotazione gli ingressi, le scale e gli ambienti accessibili.', 'If you have mobility requirements, check entrances, stairs and accessible rooms when arranging your visit.') },
    ],
    gallery: [
      { key: 'manmanoGussio', title: l('Il soffitto decorato e il lampadario del palazzo', 'The palace’s decorated ceiling and chandelier') },
      { key: 'manmanoGussioFacade', title: l('La facciata del Palazzo baronale Manmano Gussio', 'The façade of Palazzo baronale Manmano Gussio') },
      { key: 'manmanoGussioMirror', title: l('Il soffitto e il lampadario riflessi nello specchio', 'The ceiling and chandelier reflected in the mirror') },
    ],
    sources: [{ title: 'Graziella Graziano — Palazzo Manmano Gussio, Nuove Edizioni Bohemien', url: 'https://www.nuoveedizionibohemien.it/index.php/27179/' }],
  };
}
