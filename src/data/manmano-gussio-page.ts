import type { Locale } from '../lib/i18n';
import type { SightPage } from './sight-pages';

export function getManmanoGussioPage(lang: Locale): SightPage {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  return {
    id: 'manmanoGussio', name: 'Palazzo baronale Manmano Gussio',
    category: l('Una dimora, una storia ritrovata', 'A historic residence rediscovered'),
    title: l('Palazzo baronale Manmano Gussio ad Agira | Hello Agira', 'Palazzo baronale Manmano Gussio in Agira | Hello Agira'),
    description: l("Palazzo Manmano Gussio ad Agira, già Trigona dei Principi di Sant’Elia: Salone di Apollo e Dafne, sale storiche, cimeli di famiglia e visite su prenotazione.", "Palazzo Manmano Gussio in Agira, formerly Trigona dei Principi di Sant’Elia: the Apollo and Daphne Hall, historic rooms, family collections and visits by reservation."),
    introduction: l("Nel cuore monumentale di Agira, una dimora patrizia di fine Cinquecento custodisce il Salone di Apollo e Dafne, sale decorate e una preziosa esposizione di cimeli, abiti e documenti di famiglia.", "In Agira’s monumental heart, a late 16th-century patrician residence houses the Apollo and Daphne Hall, decorated rooms and a precious collection of family memorabilia, clothing and documents."),
    image: 'manmanoGussio', location: l('Via Norfo 2 · angolo via Diodorea 135 · Agira', 'Via Norfo 2 · corner of Via Diodorea 135 · Agira'),
    mapQuery: 'Palazzo Manmano Gussio Via Norfo 2 Agira',
    visitorNote: l('Il palazzo è visitabile previa prenotazione. Per concordare la visita, contatta Orazio La Delfa al +39 328 779 7235, anche su WhatsApp.', 'The palace can be visited by prior reservation. To arrange a visit, contact Orazio La Delfa on +39 328 779 7235, also available on WhatsApp.'),
    visitorContacts: [
      { label: l('Chiama Orazio La Delfa · +39 328 779 7235', 'Call Orazio La Delfa · +39 328 779 7235'), href: 'tel:+393287797235' },
      { label: l('Prenota su WhatsApp · Orazio La Delfa', 'Book via WhatsApp · Orazio La Delfa'), href: 'https://wa.me/393287797235' },
    ],
    facts: [
      { label: l("Origini", "Origins"), value: l("Fine del XVI secolo", "Late 16th century") },
      { label: l("Già", "Formerly"), value: l("Trigona dei Principi di Sant’Elia", "Trigona dei Principi di Sant’Elia") },
      { label: l("Restauro avviato nel", "Restoration begun in"), value: l("2006", "2006") },
      { label: l("Visita", "Visiting"), value: l("Previa prenotazione", "By prior reservation") },
    ],
    story: [
      { title: l("Una dimora nel cuore monumentale di Agira.", "A residence in Agira’s monumental heart."), paragraphs: [
        l("Palazzo Manmano Gussio, già Trigona dei Principi di Sant’Elia, rappresenta uno dei più insigni esempi di edilizia residenziale patrizia del territorio. Il complesso risale alla fine del XVI secolo e si trova in via Norfo 2, all’angolo con via Diodorea 135.", "Palazzo Manmano Gussio, formerly belonging to the Trigona Princes of Sant’Elia, is one of the area’s most distinguished examples of patrician residential architecture. The complex dates to the late 16th century and stands at Via Norfo 2, on the corner of Via Diodorea 135."),
        l("Superato indenne il grande sisma del 1693 grazie a solide soluzioni costruttive, conserva l’originario impianto planimetrico e la facciata d’impronta tardo-manierista e seicentesca, ritmata da paraste, cantonali e da un avancorpo a semicolonne.", "Having survived the great earthquake of 1693 unscathed thanks to its robust construction, the palace retains its original layout and a facade shaped by late Mannerist and 17th-century design, articulated by pilasters, corner masonry and a projecting section with engaged columns."),
      ] },
      { title: l("Il piano nobile e il Salone di Apollo e Dafne.", "The piano nobile and the Apollo and Daphne Hall."), paragraphs: [
        l("Nel piano nobile gli spazi si articolano simmetricamente intorno al grandioso Salone di Apollo e Dafne, capolavoro pittorico del tardo Settecento.", "On the principal floor, the piano nobile, the rooms are arranged symmetrically around the grand Apollo and Daphne Hall, a painted masterpiece of the late 18th century."),
        l("Al salone si affiancano sale neoclassiche ed eclettiche ottocentesche, una camera da letto con boiserie Luigi XVI e la cappella di famiglia. Ambienti diversi che raccontano il gusto e le trasformazioni della dimora nel tempo.", "Alongside the hall are 19th-century Neoclassical and Eclectic rooms, a bedroom with Louis XVI-style wood panelling and the family chapel. These different spaces reveal the tastes and transformations of the residence over time."),
      ] },
      { title: l("Il cortile, la cisterna e il restauro.", "The courtyard, cistern and restoration."), paragraphs: [
        l("Sul retro, un cortile a due livelli ospita una monumentale cisterna ipogea scavata nella roccia. È una parte del complesso che affianca agli ambienti di rappresentanza le strutture legate alla vita della dimora.", "At the rear, a two-level courtyard contains a monumental underground cistern carved into the rock. This part of the complex complements the reception rooms with structures serving the everyday life of the residence."),
        l("Un meticoloso restauro conservativo, avviato nel 2006, ha permesso la rifunzionalizzazione degli interni. Il recupero curato da Orazio La Delfa consente oggi di riscoprire gli ambienti del palazzo attraverso visite concordate in anticipo.", "A meticulous conservation restoration, begun in 2006, brought the interiors back into use. The restoration undertaken by Orazio La Delfa now allows visitors to rediscover the palace through visits arranged in advance."),
        l("Gli interni ospitano un’esposizione permanente di cimeli, abiti e documenti d’epoca della famiglia, dalla fine del XVI al XIX secolo: testimonianze che accompagnano il racconto dell’edificio e delle persone che lo hanno abitato.", "The interiors house a permanent exhibition of family memorabilia, historic clothing and documents dating from the late 16th to the 19th century, complementing the story of the building and the people who lived here."),
      ] },
      { title: l("I Trigona e la cometa a sette punte.", "The Trigona family and the seven-pointed comet."), paragraphs: [
        l("Le prime testimonianze documentarie dell’edificio si intrecciano con le vicende della famiglia Trigona, baroni di Bonfallura e futuri Principi di Sant’Elia, stabilitisi ad Agira per la gestione dei propri feudi e per vantaggiosi legami nuziali.", "The earliest documentary evidence of the building is intertwined with the history of the Trigona family, Barons of Bonfallura and future Princes of Sant’Elia, who settled in Agira to manage their estates and through advantageous marriage alliances."),
        l("Di questa stagione resta un prezioso sigillo araldico: il mosaico in ciottoli e laterizio che riproduce la cometa a sette punte della famiglia, tuttora visibile nell’androne.", "A precious heraldic emblem survives from this period: the pebble and brick mosaic depicting the family’s seven-pointed comet, still visible in the entrance hall."),
        l("Tra i membri più illustri del ramo si distinse il teologo gesuita Padre Vespasiano Trigona (1692–1761), Provinciale di Sicilia e stimato esaminatore dei vescovi a Roma per i pontefici Benedetto XIV e Clemente XIII.", "Among the branch’s most distinguished members was the Jesuit theologian Father Vespasiano Trigona (1692–1761), Provincial of Sicily and a respected examiner of bishops in Rome under Popes Benedict XIV and Clement XIII."),
      ] },
      { title: l("L’arrivo dei Manmano Gussio.", "The arrival of the Manmano Gussio family."), paragraphs: [
        l("A partire dal 1735 le vicende della dimora si uniscono a quelle della famiglia Manmano di Castel di Lucio. In quell’anno don Nicolao Manmano, discendente da parte materna dalla famiglia capitina dei baroni Larcan, sposò Agata Gussio di Nicosia e rilevò una prima porzione del palazzo.", "From 1735, the history of the residence became linked to the Manmano family of Castel di Lucio. That year, Don Nicolao Manmano, descended on his mother’s side from the Larcan barons of Capizzi, married Agata Gussio of Nicosia and acquired an initial portion of the palace."),
        l("L’acquisizione venne perfezionata nel 1751 con il definitivo rogito d’acquisto.", "The acquisition was completed in 1751 with the final deed of purchase."),
      ] },
      { title: l("I protagonisti della famiglia.", "Prominent members of the family."), paragraphs: [
        l("Mauro Manmano Gussio, Sindaco e Capitano di Giustizia, fu il mecenate che commissionò i cicli pittorici mitologici del piano nobile: opere ispirate alla riscoperta della classicità e al clima culturale del Grand Tour.", "Mauro Manmano Gussio, Mayor and Captain of Justice, was the patron who commissioned the mythological painted cycles of the piano nobile, works inspired by the rediscovery of classical antiquity and the cultural world of the Grand Tour."),
        l("Vincenzo Manmano Gussio, Governatore baronale del feudo di Mirabella per il Principe di Biscari, incarnò lo spirito dell’Illuminismo, giungendo a redigere un trattato politico basato sulle dottrine di Montesquieu.", "Vincenzo Manmano Gussio, baronial governor of the Mirabella estate for the Prince of Biscari, embodied the spirit of the Enlightenment and wrote a political treatise based on the doctrines of Montesquieu."),
        l("Filippo Manmano Gussio, vicario foraneo di Santa Margherita, commissionò la preziosa statua dell’Immacolata, capolavoro ligneo del napoletano Giuseppe Picano.", "Filippo Manmano Gussio, vicar forane of Santa Margherita, commissioned the precious statue of the Immaculate Conception, a wooden masterpiece by the Neapolitan sculptor Giuseppe Picano."),
        l("Giuseppe Manmano Occhipinti fu sindaco di Agira dal 1816 al 1830. Il suo ruolo contribuì a traghettare il patrimonio e l’influenza della famiglia attraverso la stagione dei moti liberali del 1848.", "Giuseppe Manmano Occhipinti was Mayor of Agira from 1816 to 1830. His role helped carry the family’s assets and influence through the period of the liberal uprisings of 1848."),
        l("Una delle ultime discendenti della famiglia, Vincenza Manmano, sposò Michele Luigi Maria Cutrona, conte di Cerami (1858–1938).", "One of the family’s last descendants, Vincenza Manmano, married Michele Luigi Maria Cutrona, Count of Cerami (1858–1938)."),
      ] },
    ],
    highlights: [
      { title: l("Il Salone di Apollo e Dafne", "The Apollo and Daphne Hall"), text: l("Il fulcro del piano nobile, con il ciclo pittorico mitologico del tardo Settecento.", "The heart of the piano nobile, with its late 18th-century mythological painted cycle.") },
      { title: l("La cometa dei Trigona", "The Trigona comet"), text: l("Nell’androne, il mosaico in ciottoli e laterizio conserva l’emblema a sette punte della famiglia.", "In the entrance hall, the pebble and brick mosaic preserves the family’s seven-pointed emblem.") },
      { title: l("La memoria di famiglia", "Family memories"), text: l("Abiti, cimeli e documenti nell’esposizione permanente, accanto alle sale e agli arredi storici.", "Clothing, memorabilia and documents in the permanent exhibition, alongside historic rooms and furnishings.") },
    ],
    practical: [
      { title: l('Prenotare la visita', 'Arranging a visit'), text: l('La visita richiede prenotazione. Contatta Orazio La Delfa al +39 328 779 7235, per telefono o WhatsApp, per concordare giorno, orario e condizioni di accesso.', 'Visits require prior reservation. Contact Orazio La Delfa on +39 328 779 7235 by phone or WhatsApp to agree on the date, time and access arrangements.') },
      { title: l('Dove si trova', 'Location'), text: l('L’indirizzo è via Norfo 2, angolo via Diodorea 135, ad Agira. Usa la mappa come aiuto per orientarti e verifica sul posto l’ingresso concordato.', 'The address is Via Norfo 2, on the corner of Via Diodorea 135, in Agira. Use the map to get your bearings and confirm the agreed entrance on arrival.') },
      { title: l('Durante la visita', 'During your visit'), text: l('Segui le indicazioni dei referenti della dimora e chiedi prima di fotografare gli ambienti. Evita di toccare decorazioni e arredi.', 'Follow the guidance of the residence’s representatives and ask before photographing the rooms. Avoid touching decorations and furnishings.') },
      { title: l('Accessibilità', 'Accessibility'), text: l('Se hai esigenze di mobilità, verifica al momento della prenotazione gli ingressi, le scale e gli ambienti accessibili.', 'If you have mobility requirements, check entrances, stairs and accessible rooms when arranging your visit.') },
    ],
    gallery: [
      { key: 'manmanoGussioEntrance', title: l('Il portale e l’ingresso illuminato', 'The portal and illuminated entrance') },
      { key: 'manmanoGussioDress', title: l('Ricami e decorazioni di un abito dell’esposizione', 'Embroidery and ornament on a garment in the exhibition') },
      { key: 'manmanoGussioPortrait', title: l('Un ritratto della collezione del palazzo', 'A portrait in the palace collection') },
      { key: 'manmanoGussio', title: l('Il soffitto decorato e il lampadario del palazzo', 'The palace’s decorated ceiling and chandelier') },
      { key: 'manmanoGussioFacade', title: l('La facciata del Palazzo baronale Manmano Gussio', 'The façade of Palazzo baronale Manmano Gussio') },
      { key: 'manmanoGussioMirror', title: l('Il soffitto e il lampadario riflessi nello specchio', 'The ceiling and chandelier reflected in the mirror') },
    ],
    sources: [{ title: 'Graziella Graziano — Palazzo Manmano Gussio, Nuove Edizioni Bohemien', url: 'https://www.nuoveedizionibohemien.it/index.php/27179/' }],
  };
}
