import type { Itinerary } from './itineraries';
import { sightUrl, type Locale } from '../lib/i18n';

export function getBaronialPalacesItinerary(lang: Locale): Itinerary {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  return {
    id: 'baronialPalaces',
    title: l('I palazzi baronali.', 'The baronial palaces.'),
    description: l('Un itinerario tra i palazzi baronali di Agira: Palazzo Zuccaro, Palazzo Trigona Manmano, Palazzo Zuccaro il piccolo e Palazzo Scavone. Storia, interni e consigli per organizzare la visita.', 'Explore Agira’s baronial palaces: Palazzo Zuccaro, Palazzo Trigona Manmano, Palazzo Zuccaro il piccolo and Palazzo Scavone. History, interiors and practical advice for your visit.'),
    intro: l('Quattro dimore nel centro storico, tra memoria delle famiglie nobiliari, facciate da osservare e ambienti ritrovati. Un altro modo di conoscere Agira, una strada alla volta.', 'Four historic residences, from the memory of noble families to distinctive facades and restored rooms. Discover another side of Agira, one street at a time.'),
    photo: 'manmanoGussio',
    duration: l('Visita a ritmo libero', 'Explore at your own pace'),
    pace: l('Quattro palazzi · centro storico', 'Four palaces · historic centre'),
    heading: l('Quattro palazzi.\nStorie da scoprire.', 'Four palaces.\nStories to discover.'),
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
        title: 'Palazzo Trigona Manmano',
        text: l('Il Palazzo Trigona Manmano, conosciuto anche come Palazzo baronale Manmano Gussio, già Trigona di S. Elia, conserva interni ricchi di decorazioni. Una ricostruzione pubblicata in occasione della sua riapertura lo fa risalire ai primi del Seicento e ricorda il passaggio a Nicola Manmano nel 1751. Si trova in via Norfo 2, all’angolo con via Diodorea 135.', 'Palazzo Trigona Manmano, also known as Palazzo baronale Manmano Gussio and formerly Trigona di S. Elia, preserves richly decorated interiors. An account published on its reopening dates it to the early 17th century and records its purchase by Nicola Manmano in 1751. It stands at Via Norfo 2, on the corner of Via Diodorea 135.'),
        paragraphs: [l('Il recupero curato da Orazio La Delfa permette di riscoprire i suoi ambienti attraverso una visita concordata. Alza lo sguardo verso il soffitto: scene dipinte, medaglioni, motivi floreali e un grande lampadario invitano a soffermarsi sui dettagli.', 'Restoration by Orazio La Delfa offers the chance to rediscover its rooms through a visit arranged in advance. Look up at the ceiling: painted scenes, medallions, floral motifs and a large chandelier reward a closer look.')],
        time: l('Via Norfo 2 · angolo via Diodorea 135', 'Via Norfo 2 · corner of Via Diodorea 135'),
        tip: l('La visita è su prenotazione. Nella pagina del palazzo trovi i contatti di Orazio La Delfa per concordare giorno, orario e accesso.', 'Visits are by prior reservation. The palace page has Orazio La Delfa’s contact details to arrange the date, time and access.'),
        link: { href: sightUrl('manmanoGussio', lang), label: l('Scopri il palazzo e organizza la visita', 'Explore the palace and arrange a visit') },
      },
      {
        label: l('Un’altra dimora degli Zuccaro', 'Another Zuccaro residence'),
        title: l('Palazzo Zuccaro II · il piccolo', 'Palazzo Zuccaro II · the smaller palace'),
        text: l('In via Diodorea si incontra un secondo palazzo legato alla famiglia Zuccaro, distinto dalla dimora accanto a Piazza Garibaldi. Conosciuto localmente come Palazzo Zuccaro il piccolo, nel volume di Filippo Maria Provitina è indicato come Zuccaro “secondo”, detto anche “del baronetto”.', 'Via Diodorea is home to a second palace associated with the Zuccaro family, separate from the residence beside Piazza Garibaldi. Known locally as Palazzo Zuccaro il piccolo, it is listed in Filippo Maria Provitina’s volume as Zuccaro “secondo”, also called “del baronetto”.'),
        paragraphs: [l('La descrizione storica richiama il dislivello tra via Diodorea e la strada sottostante, dal quale emerge lo sviluppo dell’edificio sul retro. Questa sosta invita a riconoscere una seconda presenza della famiglia nel tessuto del centro storico.', 'The historical description notes the difference in level between Via Diodorea and the street below, revealing the building’s scale at the rear. This stop introduces another trace of the family within the historic centre.')],
        time: l('Via Diodorea · visita dall’esterno', 'Via Diodorea · view from outside'),
        tip: l('È un edificio diverso dal Palazzo Zuccaro di Piazza Garibaldi. La sosta proposta riguarda l’esterno, osservabile dalle strade pubbliche.', 'This is a different building from Palazzo Zuccaro beside Piazza Garibaldi. This stop is an exterior visit from public streets.'),
      },
      {
        label: l('La dimora e Santa Chiara', 'The residence and Santa Chiara'),
        title: 'Palazzo Scavone',
        text: l('Palazzo Scavone, noto anche come Scavone-Fiorenza, si affaccia su Piazza Fortunato Fedele, di fronte al monumento ai caduti e vicino alla chiesa di Santa Chiara. È un’altra testimonianza delle dimore delle famiglie titolate di Agira.', 'Palazzo Scavone, also known as Scavone-Fiorenza, faces Piazza Fortunato Fedele, opposite the war memorial and near Santa Chiara Church. It is another reminder of the residences of Agira’s titled families.'),
        paragraphs: [l('Provitina ricorda gli affreschi sulla volta del salone centrale e il contributo dell’edificio al carattere monumentale della piazza. Durante la passeggiata, osserva il rapporto tra la facciata del palazzo e gli altri elementi di questo spazio cittadino.', 'Provitina records frescoes on the central reception room’s vaulted ceiling and the building’s contribution to the square’s monumental character. During your walk, notice how the palace facade relates to the other features of this public space.')],
        time: l('Piazza Fortunato Fedele · visita dall’esterno', 'Piazza Fortunato Fedele · view from outside'),
        tip: l('La sosta proposta è all’esterno. Gli affreschi sono ricordati dalle fonti storiche; non è prevista in questo itinerario una visita agli interni.', 'This stop is an exterior visit. The frescoes are recorded in historical sources; this itinerary does not include an indoor visit.'),
      },
    ],
    tips: [
      { title: l('Organizza gli interni', 'Arrange indoor visits'), text: l('Prenota Manmano Gussio e verifica le aperture del Palazzo Zuccaro accanto a Piazza Garibaldi. Per Zuccaro il piccolo e Scavone sono proposte soste all’esterno. Adatta l’ordine delle tappe agli appuntamenti.', 'Book Manmano Gussio and check opening arrangements for Palazzo Zuccaro beside Piazza Garibaldi. Zuccaro il piccolo and Scavone are exterior stops. Adjust the order to suit your appointments.') },
      { title: l('Cammina con calma', 'Take your time walking'), text: l('Scegli scarpe comode per le strade del centro storico. Se hai esigenze di mobilità, chiedi informazioni su ingressi, scale e ambienti accessibili prima della visita.', 'Wear comfortable shoes for the historic centre’s streets. If you have mobility requirements, ask about entrances, stairs and accessible rooms before visiting.') },
      { title: l('Fermati sui dettagli', 'Notice the details'), text: l('Dedica tempo alle facciate e, dove la visita è possibile, alle decorazioni degli interni. Chiedi ai referenti prima di fotografare gli ambienti.', 'Allow time for the facades and, where visits are possible, the interior decoration. Ask the representatives before photographing the rooms.') },
    ],
  };
}
