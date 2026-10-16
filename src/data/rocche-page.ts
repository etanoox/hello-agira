import type { Locale } from '../lib/i18n';
import type { SightPage } from './sight-pages';

export function getRocchePage(lang: Locale): SightPage {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  return {
    id: 'rocche',
    name: l('Il Quartiere delle Rocche', 'The Rocche Quarter'),
    category: l('Vicoli, case e memoria', 'Lanes, houses and memory'),
    title: l('Quartiere delle Rocche ad Agira: vicoli e storia | Hello Agira', 'The Rocche Quarter in Agira: lanes and history | Hello Agira'),
    description: l('Scopri il Quartiere delle Rocche di Agira: vicoli e scalinate di matrice araba, memoria contadina e fotografie di Filippo Anello. Accesso da via Diodorea.', 'Explore Agira’s Rocche Quarter: lanes and steps reflecting Arab urban traditions, rural heritage and photographs by Filippo Anello. Access from Via Diodorea.'),
    introduction: l('Una svolta, una scalinata, una casa affacciata sul vicolo. Alle Rocche, Agira si racconta attraverso gli spazi della vita quotidiana: un quartiere da attraversare a piedi, con il tempo di osservare.', 'A turn, a flight of steps, a house opening onto a lane. In the Rocche Quarter, Agira tells its story through the spaces of everyday life: a neighbourhood to explore on foot, with time to look closely.'),
    image: 'roccheAnelloLanes',
    location: l('Quartiere delle Rocche · Accesso da via Diodorea · Agira', 'Rocche Quarter · Access from Via Diodorea · Agira'),
    mapQuery: 'Via Diodorea, Agira, Enna, Sicilia',
    visitorNote: l('Via Diodorea è il riferimento per iniziare la passeggiata. Il quartiere presenta scale e dislivelli; per la Casa Museo non sono qui indicati orari di apertura o modalità di visita.', 'Via Diodorea is the starting reference for your walk. The quarter has steps and changes in level; opening hours and visiting arrangements for the house museum are not listed here.'),
    facts: [
      { label: l('Accesso', 'Access'), value: l('Da via Diodorea', 'From Via Diodorea') },
      { label: l('Da scoprire', 'Explore'), value: l('Vicoli, cortili e scalinate', 'Lanes, courtyards and steps') },
      { label: l('Impianto urbano', 'Urban layout'), value: l('Di matrice araba', 'Reflecting Arab urban traditions') },
      { label: l('Come visitarlo', 'Getting around'), value: l('A piedi, con salite e scale', 'On foot, with slopes and steps') },
    ],
    story: [
      {
        title: l('Un quartiere da leggere camminando.', 'A neighbourhood to read as you walk.'),
        paragraphs: [
          l('La Pro Loco descrive le Rocche come un antico quartiere dal tessuto urbanistico di tipo arabo. Stradine irregolari, vicoli ciechi, curve a gomito e piccoli cortili compongono una trama che si scopre un passo alla volta.', 'Pro Loco describes the Rocche as an old quarter with an urban layout shaped by Arab traditions. Irregular lanes, dead ends, sharp turns and small courtyards form a pattern best discovered one step at a time.'),
          l('Nella lettura proposta dalla Pro Loco, le strade si articolano in percorsi principali pubblici, passaggi secondari semipubblici e vicoli privati legati a uno stesso ambito familiare. È una chiave per comprendere il rapporto tra le case e gli spazi condivisi, senza attribuire la stessa epoca a tutti gli edifici che vediamo oggi.', 'Pro Loco distinguishes between main public streets, secondary semi-public passages and private dead-end lanes serving a family group. This offers a way to understand the relationship between homes and shared spaces, without assuming that every building seen today dates from the same period.'),
        ],
      },
      {
        title: l('Le case e gli spazi della vita quotidiana.', 'Homes and the spaces of everyday life.'),
        paragraphs: [
          l('Il racconto delle Rocche passa anche dalle soglie delle abitazioni, dai pianerottoli e dalle scalinate esterne. La sintesi storica Agira città d’arte ricorda gli astraci davanti alle case, elementi di un paesaggio urbano in cui abitazione e strada sono strettamente connesse.', 'The story of the Rocche also unfolds through doorways, landings and outdoor steps. The historical account Agira città d’arte mentions the astraci in front of the houses, features of a townscape in which home and street are closely connected.'),
          l('Le fotografie di Filippo Anello accompagnano questa scoperta: osservano le murature, i passaggi e i diversi livelli delle case, conservando il carattere dei luoghi e i segni della loro vita quotidiana.', 'Filippo Anello’s photographs accompany this exploration, drawing attention to masonry, passageways and the different levels of the houses, as well as the character of the neighbourhood and the traces of everyday life.'),
        ],
      },
      {
        title: l('La memoria contadina e l’associazione.', 'Rural heritage and the neighbourhood association.'),
        paragraphs: [
          l('La Pro Loco e I Borghi più belli d’Italia documentano nel quartiere una Casa Museo della civiltà contadina, con arredi, oggetti domestici e strumenti di lavoro. È una testimonianza della cultura materiale e delle abitudini delle generazioni precedenti, distinta dall’Ecomuseo di Cultura Materiale Silvestro Nasca.', 'Pro Loco and I Borghi più belli d’Italia document a house museum in the quarter displaying furniture, household objects and tools from rural life. It preserves the material culture and customs of earlier generations and is distinct from the Silvestro Nasca Museum of Material Culture.'),
          l('L’Associazione Quartiere Rocche contribuisce alla valorizzazione di questo patrimonio. La manifestazione Passeggiando lungo la nostra storia intreccia memoria, tradizioni e sapori: la Pro Loco ha annunciato la XXVII edizione per il 29 e 30 agosto 2026. Le date degli appuntamenti cambiano e non costituiscono un calendario fisso per gli anni successivi.', 'The Associazione Quartiere Rocche helps preserve and share this heritage. Its event Passeggiando lungo la nostra storia brings together local memory, traditions and food: Pro Loco announced the 27th edition for 29–30 August 2026. Event dates vary and do not establish a fixed calendar for subsequent years.'),
        ],
      },
    ],
    highlights: [
      { title: l('I percorsi', 'The routes'), text: l('Segui con lo sguardo il modo in cui vicoli, curve e scale collegano i diversi livelli del quartiere.', 'Notice how lanes, turns and steps connect the different levels of the quarter.') },
      { title: l('Le soglie', 'The thresholds'), text: l('Osserva gli ingressi rialzati e i piccoli spazi tra le abitazioni e la strada, rispettando gli ambienti privati.', 'Look at raised doorways and the small spaces between houses and streets, while respecting private property.') },
      { title: l('La memoria condivisa', 'Shared memory'), text: l('L’associazione e la Casa Museo raccontano il legame del quartiere con la cultura contadina di Agira.', 'The association and house museum tell the story of the quarter’s ties to Agira’s rural heritage.') },
    ],
    practical: [
      { title: l('Iniziare da via Diodorea', 'Start from Via Diodorea'), text: l('Usa via Diodorea come riferimento di accesso. La mappa indica questa strada, non un ingresso specifico della Casa Museo.', 'Use Via Diodorea as your access reference. The map points to the street, not to a specific house museum entrance.') },
      { title: l('Camminare nel quartiere', 'Walking through the quarter'), text: l('Indossa scarpe comode e considera la presenza di scale e dislivelli quando scegli il percorso. Per esigenze di mobilità, verifica sul posto un tragitto adatto.', 'Wear comfortable shoes and take steps and slopes into account when choosing your route. If you have mobility requirements, check locally for a suitable route.') },
      { title: l('Case e spazi privati', 'Homes and private spaces'), text: l('Il quartiere conserva spazi legati alla vita domestica. Non entrare nelle abitazioni o nei cortili privati senza invito e chiedi il permesso prima di fotografare le persone.', 'The neighbourhood includes spaces used for domestic life. Do not enter homes or private courtyards without an invitation, and ask permission before photographing people.') },
      { title: l('La Casa Museo', 'The house museum'), text: l('La presenza del museo è documentata dalle fonti locali. Non sono disponibili qui informazioni confermate su aperture, prenotazioni o contatti: la passeggiata nel quartiere non implica l’accesso agli interni.', 'Local sources document the museum. Confirmed opening hours, booking arrangements and contacts are not available here; a walk through the quarter does not imply access to its interiors.') },
    ],
    gallery: [
      { key: 'roccheAnelloLanes', title: l('Vicoli e ingressi tra le case', 'Lanes and doorways among the houses') },
      { key: 'roccheAnelloAssociation', title: l('L’insegna dell’Associazione Quartiere Rocche', 'The Associazione Quartiere Rocche sign') },
      { key: 'roccheAnelloSteps', title: l('Le scalinate e le murature del quartiere', 'Steps and masonry in the quarter') },
    ],
    sources: [
      { title: 'Pro Loco Agira · Quartiere Rocche', url: 'https://www.prolocoagira.it/wp/2017/06/22/quartiere-delle-rocche/' },
      { title: 'Agira città d’arte · Rita Loredana Foti e Salvatore Longo Minnolo', url: 'https://www.agira.org/Sintesi-storiche/agira-citta-darte.html' },
      { title: 'I Borghi più belli d’Italia · Agira', url: 'https://borghipiubelliditalia.it/borgo/agira/' },
      { title: 'Pro Loco Agira · Passeggiando lungo la nostra storia, XXVII edizione', url: 'https://www.prolocoagira.it/wp/2026/08/27/passeggiando-lungo-la-nostra-storia-xxvii-edizione/' },
    ],
  };
}
