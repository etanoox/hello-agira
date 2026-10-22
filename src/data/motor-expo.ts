import type { Locale } from '../lib/i18n';

export const motorExpo = {
  edition: 27, year: 2027, month: 3,
  venue: 'Padiglione Fieristico di Agira',
  organizer: 'Club Motori d’Epoca Agira',
  sourceUrl: 'https://www.facebook.com/agiraclub',
  image: 'motorExpoHall',
} as const;

export function getMotorExpo(lang: Locale) {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  return {
    title: l('Motor Expo Agira 2027: mostra-scambio di auto e moto d’epoca | Hello Agira', 'Motor Expo Agira 2027: classic car and motorcycle swap meet | Hello Agira'),
    description: l('La 27ª edizione del Motor Expo Agira è prevista a marzo 2027 al Padiglione Fieristico: auto, moto e memorabilia d’epoca. Ingresso gratuito, date da confermare.', 'The 27th Motor Expo Agira is planned for March 2027 at the Exhibition Pavilion: classic cars, motorcycles and vintage memorabilia. Free admission; exact dates to be confirmed.'),
    heading: 'Motor Expo\nAgira 2027.',
    intro: l('Auto e moto d’epoca, oggetti da collezione e storie da ritrovare. Il Motor Expo riunisce ad Agira appassionati, collezionisti e curiosi per una mostra-scambio dedicata al mondo dei motori e alla memoria del passato.', 'Classic cars and motorcycles, collectable objects and stories to rediscover. Motor Expo brings enthusiasts, collectors and curious visitors together in Agira for a swap meet celebrating motoring and memories of the past.'),
    editionTitle: l('A marzo, la passione si ritrova.', 'A shared passion returns in March.'),
    editionText: l('La 27ª edizione del Motor Expo Agira è prevista a marzo 2027 al Padiglione Fieristico di Agira, con ingresso gratuito. L’organizzazione è del Club Motori d’Epoca Agira.', 'The 27th Motor Expo Agira is planned for March 2027 at Agira’s Exhibition Pavilion, with free admission. The event is organised by the Club Motori d’Epoca Agira.'),
    programmeTitle: l('Le date e il programma.', 'Dates and programme.'),
    programmeText: l('Il mese è confermato; le giornate esatte, gli orari e il programma saranno aggiornati non appena disponibili. Prima di organizzare la visita, verifica le comunicazioni del Club.', 'The month is confirmed; exact dates, opening hours and the programme will be updated as soon as available. Check the club’s announcements before planning your visit.'),
    sections: [
      {
        id: 'mostra-scambio', label: l('01 / MOTORI E MEMORIA', '01 / MOTORING AND MEMORIES'), title: l('Una passione,\ntante storie.', 'One passion.\nMany stories.'),
        paragraphs: [
          l('Il Motor Expo Agira è una mostra-scambio di auto, moto, oggettistica e memorabilia d’epoca. Un appuntamento per avvicinarsi ai veicoli del passato e al mondo del collezionismo, anche senza essere esperti.', 'Motor Expo Agira is a swap meet featuring classic cars, motorcycles, vintage objects and memorabilia. It is a chance to discover vehicles from the past and the world of collecting, whether or not you are an expert.'),
          l('Le fotografie delle precedenti edizioni raccontano auto esposte nel Padiglione Fieristico, stand e incontri nell’area esterna. Sono immagini della manifestazione negli anni passati: i veicoli e gli allestimenti dell’edizione 2027 dipenderanno dalle partecipazioni e dal programma.', 'Photographs from previous editions show cars displayed inside the Exhibition Pavilion, stands and visitors in the outdoor area. These images document past events: vehicles and displays at the 2027 edition will depend on participation and the programme.'),
        ],
      },
      {
        id: 'club', label: l('02 / CHI ORGANIZZA', '02 / THE ORGANISER'), title: l('Il Club Motori\nd’Epoca Agira.', 'Club Motori\nd’Epoca Agira.'),
        paragraphs: [
          l('Il Club Motori d’Epoca Agira organizza la manifestazione e riunisce la passione per i veicoli storici. La sua pagina Facebook è il riferimento per seguire gli aggiornamenti sul Motor Expo.', 'The Club Motori d’Epoca Agira organises the event and brings together a passion for historic vehicles. Its Facebook page is the reference for Motor Expo updates.'),
          l('Per informazioni sulla partecipazione alla mostra-scambio e sulle modalità di esposizione, rivolgiti direttamente al Club. Hello Agira racconta l’evento e raccoglie le informazioni utili per la visita.', 'For information about taking part in the swap meet and exhibiting, contact the club directly. Hello Agira presents the event and gathers practical information for visitors.'),
        ],
      },
    ],
    faqs: [
      { q: l('Quando si svolge?', 'When does it take place?'), a: l('Il Motor Expo Agira 2027 è previsto a marzo. I giorni esatti e gli orari non sono ancora confermati.', 'Motor Expo Agira 2027 is planned for March. Exact dates and opening hours have not yet been confirmed.') },
      { q: l('Dove si svolge?', 'Where does it take place?'), a: l('La sede confermata è il Padiglione Fieristico di Agira. Controlla le indicazioni degli organizzatori per gli accessi e le informazioni pratiche.', 'The confirmed venue is Agira’s Exhibition Pavilion. Check the organisers’ directions for access and practical information.') },
      { q: l('L’ingresso è gratuito?', 'Is admission free?'), a: l('Sì, l’ingresso per i visitatori è gratuito. Per esporre o partecipare come operatore alla mostra-scambio, chiedi direttamente al Club le modalità previste.', 'Yes, visitor admission is free. To exhibit or take part as a trader, ask the club directly about participation arrangements.') },
      { q: l('Le foto mostrano l’edizione 2027?', 'Do the photographs show the 2027 edition?'), a: l('No, le fotografie documentano un’edizione precedente e provengono dalla pagina Facebook del Club Motori d’Epoca Agira.', 'No. The photographs document a previous edition and come from the Club Motori d’Epoca Agira Facebook page.') },
    ],
  };
}
