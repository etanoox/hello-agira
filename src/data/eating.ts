import type { Locale } from '../lib/i18n';

const mapSearch = (name: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} Agira`)}`;

export function getEatingPage(lang: Locale) {
  const l = (it: string, en: string) => lang === 'it' ? it : en;

  return {
    title: l('Dove mangiare ad Agira: ristoranti, pizzerie e cassatelle | Hello Agira', 'Where to eat in Agira: restaurants, pizzerias and cassatelle | Hello Agira'),
    description: l('Una prima mappa di ristoranti, pizzerie, caffè e pasticcerie ad Agira. Trova una sosta e verifica i dettagli direttamente con il locale.', 'A first guide to restaurants, pizzerias, cafés and pastry shops in Agira. Find a place to stop and confirm details directly with the venue.'),
    eyebrow: l('MANGIARE AD AGIRA / UNA MAPPA DA ASSAGGIARE', 'EAT IN AGIRA / A MAP TO TASTE'),
    heading: l('A tavola,\ncon Agira.', 'At the table,\nwith Agira.'),
    intro: l('Tra ristoranti, pizzerie, caffè e cassatelle: scegli la tua prossima sosta, al ritmo del viaggio.', 'From restaurants and pizzerias to cafés and cassatelle: find your next stop and take the journey at your own pace.'),
    action: l('Esplora i locali', 'Explore places'),
    sectionEyebrow: l('01 / UNA MAPPA IN CRESCITA', '01 / A GROWING GUIDE'),
    sectionTitle: l('La cassatella è solo l’inizio.', 'The cassatella is only the beginning.'),
    sectionText: l('Una prima ricognizione di luoghi dove mangiare e fare una pausa ad Agira. L’elenco crescerà con nuove informazioni e schede dedicate.', 'An initial selection of places to eat and pause in Agira. The list will grow with new information and dedicated venue pages.'),
    groups: [
      {
        id: 'ristoranti',
        number: '02',
        eyebrow: l('RISTORANTI, PIZZERIE, TRATTORIE', 'RESTAURANTS, PIZZERIAS, TRATTORIAS'),
        title: l('Sedersi a tavola.', 'Take a seat.'),
        intro: l('Per un pranzo, una pizza o una cena in paese.', 'For lunch, pizza or dinner in town.'),
        places: [
          { name: 'Ristorante Pizzeria Number One', category: l('Ristorante · pizzeria', 'Restaurant · pizzeria'), text: l('Una pizzeria con cucina siciliana e piatti di tradizione.', 'A pizzeria serving Sicilian and traditional dishes.'), href: 'https://etnaportal.it/number_one' },
          { name: 'Al Ritrovo', category: l('Pizzeria', 'Pizzeria'), text: l('Pizzeria in via Vittorio Emanuele, nel centro di Agira.', 'Pizzeria on Via Vittorio Emanuele, in the centre of Agira.'), href: 'https://restaurantguru.it/Andolina-Salvatrice-Agira' },
          { name: 'Belvedere Da Mario', category: l('Pizzeria', 'Pizzeria'), text: l('Un altro nome emerso tra le pizzerie agirine.', 'Another pizzeria listed in Agira.'), href: mapSearch('Belvedere Da Mario') },
          { name: 'Malucchiffari ristopub', category: l('Ristopub', 'Ristopub'), text: l('Un ristopub ad Agira.', 'A gastropub in Agira.'), href: mapSearch('Malucchiffari ristopub') },
        ],
      },
      {
        id: 'caffe-bar',
        number: '03',
        eyebrow: l('CAFFÈ, BAR', 'CAFÉS, BARS'),
        title: l('Una pausa, con calma.', 'Pause for a while.'),
        intro: l('Caffè e bar per una pausa ad Agira.', 'Cafés and bars for a break in Agira.'),
        places: [
          { name: 'Cafè de la Place', category: l('Caffè · bar', 'Café · bar'), text: l('Un caffè ad Agira per una pausa.', 'A café in Agira for a break.'), href: mapSearch('Biondi Luigi Cafe de la Place') },
          { name: 'Bar Jolly', category: l('Bar', 'Bar'), text: l('Un bar ad Agira.', 'A bar in Agira.'), href: mapSearch('Bar Jolly') },
          { name: 'Bar Etoile', category: l('Bar', 'Bar'), text: l('Un bar ad Agira.', 'A bar in Agira.'), href: mapSearch('Bar Etoile') },
          { name: 'Crystal pub', category: l('Pub', 'Pub'), text: l('Un pub ad Agira.', 'A pub in Agira.'), href: mapSearch('Crystal pub') },
          { name: 'Bar Scardilli (Don Cola)', category: l('Bar', 'Bar'), text: l('Un bar ad Agira.', 'A bar in Agira.'), href: mapSearch('Bar Scardilli Don Cola') },
          { name: 'pub nessun dorma', category: l('Pub', 'Pub'), text: l('Un pub ad Agira.', 'A pub in Agira.'), href: mapSearch('pub nessun dorma') },
          { name: 'Bar Europa', category: l('Bar', 'Bar'), text: l('Un bar ad Agira.', 'A bar in Agira.'), href: mapSearch('Bar Europa') },
          { name: 'Bar Moderno', category: l('Bar', 'Bar'), text: l('Un bar ad Agira.', 'A bar in Agira.'), href: mapSearch('Bar Moderno') },
          { name: "Bar L'altra Piazza", category: l('Bar', 'Bar'), text: l('Un bar ad Agira.', 'A bar in Agira.'), href: mapSearch("Bar L'altra Piazza") },
        ],
      },
      {
        id: 'cassatelle-dolci',
        number: '04',
        eyebrow: l('CASSATELLE E DOLCI', 'CASSATELLE AND SWEETS'),
        title: l('La dolcezza di Agira.', 'Agira’s sweet side.'),
        intro: l('Pasticcerie, dolci e luoghi legati alla cassatella agirina.', 'Pastry shops, sweets and places connected with Agira’s cassatella.'),
        places: [
          { name: 'Bottega delle Cassatelle', category: l('Cassatelle · pasticceria', 'Cassatelle · pastry shop'), text: l('Una sosta dedicata al dolce più riconoscibile di Agira.', 'A stop for Agira’s best-known sweet.'), href: 'https://bottegadellecassatelle.it' },
          { name: 'Dolc’è Agira · La Dolciaria', category: l('Pasticceria · produzione dolciaria', 'Pastry shop · confectionery'), text: l('La Dolciaria è una delle realtà legate alla produzione delle cassatelle agirine.', 'La Dolciaria is one of the local makers of Agira’s cassatelle.'), href: 'https://ladolciaria-agira.com' },
          { name: 'Bar Monte Teja', category: l('Caffetteria · pasticceria', 'Café · pastry shop'), text: l('Caffetteria e pasticceria in via Collegio.', 'A café and pastry shop on Via Collegio.'), href: 'https://restaurantguru.it/Bar-Monte-Teja-Agira' },
          { name: 'Antichi Sapori “’nto catoju”', category: l('Dolci · sapori locali', 'Sweets · local flavours'), text: l('Una tappa da esplorare tra i sapori di Agira.', 'A place to explore among the flavours of Agira.'), href: mapSearch('Antichi Sapori nto catoju') },
          { name: 'Panificio Giunta Angela', category: l('Panificio · dolci', 'Bakery · sweets'), text: l('Un panificio ad Agira.', 'A bakery in Agira.'), href: mapSearch('Panificio Giunta Angela') },
        ],
      },
    ],
    note: l('Questa è una prima ricognizione. Orari, servizi e disponibilità possono cambiare: verifica i dettagli direttamente con il locale.', 'This is an initial selection. Opening hours, services and availability can change, so confirm details directly with each venue.'),
    mapAction: l('Scopri il locale', 'Explore the place'),
    nextEyebrow: l('IL VIAGGIO CONTINUA', 'KEEP EXPLORING'),
    nextTitle: l('Dopo una sosta, c’è ancora Agira da scoprire.', 'After a good stop, there is still more Agira to discover.'),
    sightsAction: l('Cosa vedere', 'Things to see'),
    routesAction: l('Scegli un itinerario', 'Choose an itinerary'),
  };
}
