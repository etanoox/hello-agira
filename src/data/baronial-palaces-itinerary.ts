import type { Itinerary } from './itineraries';
import { sightUrl, type Locale } from '../lib/i18n';

export function getBaronialPalacesItinerary(lang: Locale): Itinerary {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  return {
    id: 'baronialPalaces',
    title: l('I palazzi baronali.', 'The baronial palaces.'),
    description: l('Un itinerario tra i palazzi baronali di Agira: Palazzo Zuccaro, Palazzo Manmano Gussio e Palazzo Giunta. Storia, interni e consigli per organizzare la visita.', 'Explore Agira’s baronial palaces: Palazzo Zuccaro, Palazzo Manmano Gussio and Palazzo Giunta. History, interiors and practical advice for your visit.'),
    intro: l('Tre dimore nel centro storico, tra memoria delle famiglie nobiliari, ambienti ritrovati e nuovi usi culturali. Un altro modo di conoscere Agira, una strada alla volta.', 'Three historic residences, from the memory of noble families to restored rooms and new cultural uses. Discover another side of Agira, one street at a time.'),
    photo: 'manmanoGussio',
    duration: l('Visita a ritmo libero', 'Explore at your own pace'),
    pace: l('Tre palazzi · centro storico', 'Three palaces · historic centre'),
    heading: l('Tre palazzi.\nStorie da scoprire.', 'Three palaces.\nStories to discover.'),
    routeTitle: l('Le dimore, una tappa alla volta.', 'Discover the residences, one by one.'),
    routeIntro: l('Da Piazza Garibaldi alle vie del centro storico, i palazzi raccontano una parte della storia civile di Agira. Comincia da Palazzo Zuccaro e prosegui verso le altre dimore, adattando l’ordine delle soste agli appuntamenti e alle aperture.', 'From Piazza Garibaldi to the streets of the historic centre, these palaces tell part of Agira’s civic history. Begin at Palazzo Zuccaro and continue to the other residences, adjusting the order to suit appointments and opening arrangements.'),
    walking: l('Le tappe si trovano nel centro storico, tra via Vittorio Emanuele e via Diodorea. Considera le pendenze delle strade e verifica scale e accessi agli interni con i referenti dei palazzi.', 'The stops are in the historic centre, around Via Vittorio Emanuele and Via Diodorea. Allow for sloping streets and check stairs and indoor access with the palaces’ representatives.'),
    steps: [
      {
        label: l('La dimora e la piazza', 'The residence and the square'),
        title: 'Palazzo Zuccaro',
        text: l('Accanto a Piazza Garibaldi, in via Vittorio Emanuele 329, Palazzo Zuccaro è la storica dimora dei baroni Zuccaro di Cuticchi e di Sant’Andrea. È una prima sosta per avvicinarsi alla storia delle famiglie nobiliari di Agira.', 'Beside Piazza Garibaldi, at Via Vittorio Emanuele 329, Palazzo Zuccaro is the historic residence of the Zuccaro barons of Cuticchi and Sant’Andrea. It offers an introduction to the history of Agira’s noble families.'),
        paragraphs: [l('Il palazzo ospitò Giuseppe Garibaldi nel 1862: dal balcone si rivolse alla popolazione agirina. Il suo salone di rappresentanza, con gli affreschi recuperati attraverso il restauro, racconta anche il ruolo della dimora nella vita culturale del paese.', 'The palace hosted Giuseppe Garibaldi in 1862, when he addressed the people of Agira from its balcony. Its reception room, with frescoes recovered through restoration, also reflects the residence’s place in the town’s cultural life.')],
        time: l('Via Vittorio Emanuele 329 · Piazza Garibaldi', 'Via Vittorio Emanuele 329 · Piazza Garibaldi'),
        tip: l('Puoi osservare il palazzo dalla piazza. Per visitare il salone, verifica le occasioni di apertura e le iniziative culturali con la Pro Loco.', 'View the palace from the square. To visit the reception room, ask Pro Loco about opening arrangements and cultural events.'),
      },
      {
        label: l('Una dimora ritrovata', 'A residence rediscovered'),
        title: 'Palazzo Manmano Gussio',
        text: l('Già Trigona di S. Elia, il Palazzo baronale Manmano Gussio attraversa i secoli XVI–XVIII e conserva interni ricchi di decorazioni. Si trova in via Norfo 2, all’angolo con via Diodorea 135.', 'Formerly Trigona di S. Elia, Palazzo baronale Manmano Gussio dates from the 16th–18th centuries and preserves richly decorated interiors. It stands at Via Norfo 2, on the corner of Via Diodorea 135.'),
        paragraphs: [l('Il recupero curato da Orazio La Delfa permette di riscoprire i suoi ambienti attraverso una visita concordata. Alza lo sguardo verso il soffitto: scene dipinte, medaglioni, motivi floreali e un grande lampadario invitano a soffermarsi sui dettagli.', 'Restoration by Orazio La Delfa offers the chance to rediscover its rooms through a visit arranged in advance. Look up at the ceiling: painted scenes, medallions, floral motifs and a large chandelier reward a closer look.')],
        time: l('Via Norfo 2 · angolo via Diodorea 135', 'Via Norfo 2 · corner of Via Diodorea 135'),
        tip: l('La visita è su prenotazione. Nella pagina del palazzo trovi i contatti di Orazio La Delfa per concordare giorno, orario e accesso.', 'Visits are by prior reservation. The palace page has Orazio La Delfa’s contact details to arrange the date, time and access.'),
        link: { href: sightUrl('manmanoGussio', lang), label: l('Scopri il palazzo e organizza la visita', 'Explore the palace and arrange a visit') },
      },
      {
        label: l('Dalla dimora al museo', 'From residence to museum'),
        title: 'Palazzo Giunta',
        text: l('In via Diodorea 31, Palazzo Giunta unisce il patrimonio delle dimore storiche alla conoscenza del territorio. Al primo piano ospita il Museo Diodoro Siculo, realizzato dall’Università di Catania con il Comune e il Circolo Legambiente di Agira.', 'At Via Diodorea 31, Palazzo Giunta connects the heritage of historic residences with the surrounding landscape. Its first floor houses the Diodoro Siculo Museum, created by the University of Catania with the municipality and Agira’s Legambiente group.'),
        paragraphs: [l('Le collezioni raccontano gli Erei e la Riserva Naturale di Vallone di Piano della Corte attraverso rocce, minerali, fossili e testimonianze della flora e della fauna. La sosta apre così lo sguardo dalla storia del palazzo all’ambiente che circonda Agira.', 'Its collections explore the Erei and the Vallone di Piano della Corte Nature Reserve through rocks, minerals, fossils, plants and wildlife. This stop extends the journey from the palace’s history to the landscape around Agira.')],
        time: l('Via Diodorea 31 · Museo Diodoro Siculo', 'Via Diodorea 31 · Diodoro Siculo Museum'),
        tip: l('Prima di organizzare la visita agli interni, verifica le modalità di accesso al museo con i suoi referenti.', 'Before planning an indoor visit, check access arrangements with the museum’s representatives.'),
        link: { href: 'https://www.unict.it/it/node/20689', label: l('Informazioni sul Museo Diodoro Siculo', 'Information about the Diodoro Siculo Museum') },
      },
    ],
    tips: [
      { title: l('Organizza gli interni', 'Arrange indoor visits'), text: l('Prenota Manmano Gussio e verifica le aperture di Palazzo Zuccaro e del museo di Palazzo Giunta. Scegli l’ordine delle tappe in base alle disponibilità.', 'Book Manmano Gussio and check opening arrangements for Palazzo Zuccaro and the museum at Palazzo Giunta. Choose the order to fit availability.') },
      { title: l('Cammina con calma', 'Take your time walking'), text: l('Scegli scarpe comode per le strade del centro storico. Se hai esigenze di mobilità, chiedi informazioni su ingressi, scale e ambienti accessibili prima della visita.', 'Wear comfortable shoes for the historic centre’s streets. If you have mobility requirements, ask about entrances, stairs and accessible rooms before visiting.') },
      { title: l('Fermati sui dettagli', 'Notice the details'), text: l('Dedica tempo alle facciate e, dove la visita è possibile, alle decorazioni degli interni. Chiedi ai referenti prima di fotografare gli ambienti.', 'Allow time for the facades and, where visits are possible, the interior decoration. Ask the representatives before photographing the rooms.') },
    ],
  };
}
