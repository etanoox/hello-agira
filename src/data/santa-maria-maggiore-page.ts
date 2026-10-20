import type { Locale } from '../lib/i18n';
import type { SightPage } from './sight-pages';

export function getSantaMariaMaggiorePage(lang: Locale): SightPage {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  return {
    id: 'santaMariaMaggiore',
    name: l('La Collegiata di Santa Maria Maggiore', 'The Collegiate Church of Santa Maria Maggiore'),
    category: l('Due navate, secoli di storia', 'Two naves, centuries of history'),
    title: l('Collegiata di Santa Maria Maggiore ad Agira: storia e visita | Hello Agira', 'Santa Maria Maggiore Collegiate Church in Agira: history and visiting | Hello Agira'),
    description: l('Due navate asimmetriche, colonne romaniche, Madonna della Catena e croce bifronte: scopri la Collegiata di Santa Maria Maggiore ad Agira.', 'Discover Santa Maria Maggiore Collegiate Church in Agira: two asymmetrical naves, Romanesque capitals, the Madonna della Catena and a double-sided painted cross.'),
    introduction: l('Due navate asimmetriche, colonne romaniche e opere d’arte da scoprire in una delle chiese più antiche di Agira. Un luogo da osservare con calma, soffermandosi sui capitelli, sulla croce dipinta e sui dettagli della Madonna della Catena.', 'Two asymmetrical naves, Romanesque columns and artworks await in one of Agira’s oldest churches. Take time to look at the capitals, the painted cross and the details of the Madonna della Catena.'),
    image: 'santaMariaMaggioreAnello',
    location: l('Collegiata di Santa Maria Maggiore · Agira', 'Santa Maria Maggiore Collegiate Church · Agira'),
    mapQuery: 'Chiesa di Santa Maria Maggiore, Agira, Sicilia',
    visitorNote: l('Santa Maria Maggiore è un luogo di culto. Verifica in anticipo gli orari e le modalità di apertura e rispetta le eventuali celebrazioni in corso.', 'Santa Maria Maggiore is a place of worship. Check opening hours and access arrangements in advance, and respect any services taking place.'),
    facts: [
      { label: l('Origini', 'Origins'), value: l('Medievali · tradizione normanna', 'Medieval · traditionally Norman') },
      { label: l('Collegiata dal', 'Collegiate status since'), value: '1689' },
      { label: l('Interno', 'Interior'), value: l('Due navate asimmetriche', 'Two asymmetrical naves') },
      { label: l('Da osservare', 'Look out for'), value: l('Madonna della Catena e croce bifronte', 'Madonna della Catena and double-sided cross') },
    ],
    story: [
      {
        title: l('Una chiesa dalle origini medievali.', 'A church with medieval origins.'),
        paragraphs: [
          l('La Collegiata di Santa Maria Maggiore custodisce una parte importante della storia religiosa e artistica agirina. Le sue origini medievali, tradizionalmente ricondotte all’epoca normanna, si riconoscono nell’architettura dell’interno: due navate di dimensioni diverse, separate da colonne e archi.', 'Santa Maria Maggiore Collegiate Church preserves an important part of Agira’s religious and artistic history. Its medieval origins, traditionally associated with the Norman period, are reflected in its interior: two naves of different sizes, separated by columns and arches.'),
          l('La tradizione storica locale collega la costruzione di Santa Maria Maggiore all’interessamento della famiglia Parisio.', 'Local historical tradition associates the building of Santa Maria Maggiore with the involvement of the Parisio family.'),
          l('Nel 1689 la chiesa venne elevata al rango di collegiata. Questo titolo indicava la presenza di un collegio di canonici, sacerdoti incaricati della vita liturgica della chiesa. La sua importanza nella comunità si esprimeva anche attraverso un particolare privilegio: stabilire il punto di partenza e le modalità di svolgimento delle processioni straordinarie.', 'In 1689, the church was elevated to collegiate status. This title indicated the presence of a chapter of canons, priests responsible for its liturgical life. Its importance to the community was also expressed through a special privilege: determining the starting point and arrangements for extraordinary processions.'),
        ],
      },
      {
        title: l('L’interno: due navate asimmetriche.', 'Inside: two asymmetrical naves.'),
        paragraphs: [
          l('La caratteristica architettonica più riconoscibile è la divisione in due navate asimmetriche. Le colonne con capitelli romanici e gli archi a sesto acuto scandiscono lo spazio, offrendo una prima chiave di lettura della storia dell’edificio.', 'The most distinctive architectural feature is the division into two asymmetrical naves. Columns with Romanesque capitals and pointed arches define the space, offering an introduction to the building’s history.'),
          l('Prima di concentrarsi sulle singole opere, vale la pena osservare questo insieme: proporzioni, sostegni e passaggi tra le navate sono parte integrante della visita.', 'Before focusing on individual artworks, look at the interior as a whole: its proportions, supports and passages between the naves are an integral part of the visit.'),
        ],
      },
      {
        title: l('La Madonna della Catena.', 'The Madonna della Catena.'),
        paragraphs: [
          l('Tra le opere principali si trova la statua della Madonna della Catena, realizzata in alabastro policromo.', 'Among the main artworks is the statue of the Madonna della Catena, Our Lady of the Chain, made of polychrome alabaster.'),
          l('Il materiale storico locale segnala il particolare atteggiamento giocoso del Bambino e distingue dalla scultura originaria il manto in seta ricamata e le corone, aggiunti successivamente.', 'Local historical accounts note the Child’s playful pose and distinguish the original sculpture from the embroidered silk mantle and crowns, which were added later.'),
          l('Ai lati dell’altare si trovano due leoni stilofori, figure scolpite nate per sostenere colonne. L’arco che lo incornicia presenta decorazioni con foglie e grappoli d’uva, un richiamo alla simbologia eucaristica.', 'Two carved, column-bearing lions stand on either side of the altar. The arch framing it is decorated with leaves and bunches of grapes, evoking Eucharistic symbolism.'),
        ],
      },
      {
        title: l('La croce dipinta sulle due facce.', 'A cross painted on both sides.'),
        paragraphs: [
          l('Un’altra opera di particolare interesse è il Crocifisso bifronte, attribuito alla scuola del cosiddetto Maestro della Croce di Piazza Armerina.', 'Another particularly interesting work is the double-sided painted crucifix, attributed to the school of the artist known as the Master of the Cross of Piazza Armerina.'),
          l('La croce presenta immagini su entrambe le facce: la Crocifissione e la Resurrezione. Le due rappresentazioni invitano a leggere insieme il sacrificio di Cristo e la vittoria sulla morte.', 'The cross bears images on both sides: the Crucifixion and the Resurrection. Together, the two scenes invite visitors to consider Christ’s sacrifice and victory over death.'),
        ],
      },
      {
        title: l('Le altre opere da osservare.', 'Other artworks to discover.'),
        paragraphs: [
          l('Il patrimonio della chiesa comprende anche una tela raffigurante San Nicola, la statua di San Bartolomeo e una statua marmorea dell’Assunta.', 'The church’s collection also includes a painting of Saint Nicholas, a statue of Saint Bartholomew and a marble statue of the Virgin of the Assumption.'),
          l('Sono opere che arricchiscono la visita e raccontano, attraverso materiali e soggetti diversi, la devozione della comunità.', 'Through their different materials and subjects, these works enrich the visit and tell the story of the community’s devotion.'),
        ],
      },
    ],
    highlights: [
      { title: l('Le due navate', 'The two naves'), text: l('Osserva le diverse proporzioni, i capitelli romanici e gli archi a sesto acuto.', 'Notice their different proportions, the Romanesque capitals and the pointed arches.') },
      { title: l('La Madonna della Catena', 'The Madonna della Catena'), text: l('Soffermati sull’alabastro policromo, sul Bambino e sui dettagli che incorniciano l’altare.', 'Look closely at the polychrome alabaster, the Child and the details framing the altar.') },
      { title: l('Il Crocifisso bifronte', 'The double-sided crucifix'), text: l('Crocifissione e Resurrezione raccontano due momenti attraverso le facce della stessa croce.', 'The Crucifixion and Resurrection depict two moments on opposite sides of the same cross.') },
    ],
    practical: [
      { title: l('Prima della visita', 'Before your visit'), text: l('Per organizzare la visita agli interni, verifica in anticipo gli orari e le modalità di apertura.', 'To plan an indoor visit, check opening hours and access arrangements in advance.') },
      { title: l('Un luogo di culto', 'A place of worship'), text: l('Visita gli ambienti con discrezione e rispetta le eventuali celebrazioni in corso.', 'Visit quietly and respectfully, and be mindful of any services taking place.') },
    ],
    gallery: [
      { key: 'santaMariaMaggioreAnelloPanorama', title: l('La Collegiata, il campanile e il lago Pozzillo', 'The collegiate church, its bell tower and Lake Pozzillo') },
      { key: 'santaMariaMaggioreAnello', title: l('La facciata della Collegiata di Santa Maria Maggiore', 'The facade of Santa Maria Maggiore Collegiate Church') },
      { key: 'santaMariaMaggioreAnello1356', title: l("La Collegiata tra i tetti e il lago Pozzillo", "The collegiate church among the rooftops, with Lake Pozzillo beyond") },
      { key: 'santaMariaMaggioreAnello1370', title: l("Il campanile e la campana sullo sfondo del lago", "The bell tower and bell against the lake") },
    ],
    sources: [],
  };
}
