import type { Locale } from '../lib/i18n';

export const saintPhilipFestival = (lang: Locale) => lang === 'it' ? {
  title: 'Festa di San Filippo ad Agira: 12 maggio e 12 agosto | Hello Agira',
  description: 'La Festa di Primavera e A festa ranni: scopri le feste di San Filippo ad Agira, le tradizioni e il legame con Żebbuġ, a Malta.',
  eyebrow: 'AGIRA · FEDE, TRADIZIONI E RITORNI',
  heading: 'San Filippo.\nUn paese si ritrova.',
  intro: 'Il 12 maggio e, negli ultimi anni, il 12 agosto: due momenti per incontrare Agira attraverso la devozione al suo patrono, i riti e il piacere di ritrovarsi.',
  action: 'Scopri le due feste',
  caption: 'L’Abbazia di San Filippo, nel cuore della devozione agirina.',
  dates: [{ month: 'MAGGIO', name: 'La Festa di Primavera', note: 'Ogni anno il 12 maggio, con celebrazioni nei giorni vicini.' }, { month: 'AGOSTO', name: 'A festa ranni', note: 'Negli ultimi anni il 12 agosto. Il calendario completo varia secondo l’edizione.' }],
  sections: [
    { id: 'primavera', label: '01 / LA FESTA DI PRIMAVERA', title: 'Maggio, una devozione che si rinnova.', paragraphs: [
      'Il 12 maggio Agira celebra San Filippo, il proprio patrono. È un appuntamento che appartiene alla storia religiosa e alla memoria del paese, accompagnato da celebrazioni e tradizioni che precedono e seguono la giornata principale.',
      'Il culto ha radici documentate da secoli: già nel Cinquecento Tommaso Fazello raccontava la festa agirina. Altri autori, tra cui Brandi e Pitrè, ne hanno descritto nel tempo la partecipazione popolare e i riti.',
      'La preparazione liturgica, la venerazione delle reliquie e le processioni sono tra le espressioni più riconoscibili della festa. L’Abbazia di San Filippo è il riferimento per avvicinarsi a questa tradizione e comprenderne il significato per la comunità.'
    ] },
    { id: 'estate', label: '02 / LA FESTA D’ESTATE', title: 'A festa ranni. Il tempo del ritorno.', paragraphs: [
      'La festa estiva porta con sé l’attesa di un incontro. Negli ultimi anni la giornata principale è stata celebrata il 12 agosto, accompagnata da appuntamenti religiosi e momenti di festa nei giorni vicini.',
      'Le origini della ricorrenza estiva sono legate al mondo contadino: dopo il raccolto si trovavano il tempo e le risorse per festeggiare e ringraziare, prima di riprendere il lavoro con la vendemmia.',
      'Con il tempo, agosto è diventato anche il mese degli agirini che tornano a casa. Chi vive lontano ritrova familiari, amici e luoghi della propria storia. La festa del patrono diventa così un’occasione per rinnovare il legame con il paese.',
      'La preparazione religiosa e le celebrazioni dei giorni precedenti conducono alla giornata principale. Il calendario del triduo, le processioni e gli eventuali spettacoli vanno consultati nel programma della singola edizione.'
    ] },
    { id: 'tradizioni', label: '03 / I GESTI DELLA DEVOZIONE', title: 'Una tradizione da incontrare.', paragraphs: [
      'Nelle descrizioni delle feste ricorrono il simulacro del santo, l’urna delle reliquie e il braccio reliquiario. Sono elementi distinti del patrimonio religioso agirino, intorno ai quali si raccolgono preghiere, processioni e gesti di venerazione.',
      'Le fonti raccontano anche i ceri votivi e il bacio della reliquia: gesti che esprimono affidamento e ringraziamento. Per conoscere quali riti si svolgeranno, i luoghi coinvolti e i percorsi, il riferimento resta il programma annuale.'
    ] },
    { id: 'malta', label: '04 / DALLA SICILIA A MALTA', title: 'Due isole, una devozione condivisa.', paragraphs: [
      'San Filippo d’Agira è venerato anche in altre località della Sicilia. A Limina, nel Messinese, celebrazioni e tradizioni popolari testimoniano quanto il suo culto sia radicato anche oltre i confini agirini.',
      'La stessa devozione attraversa il mare e raggiunge Ħaż-Żebbuġ, sull’isola di Malta, di cui San Filippo d’Agira è patrono. Il rapporto tra le due comunità è stato sancito dal gemellaggio del 1997.',
      'Da molti anni il legame si è rafforzato anche attraverso i due club di Żebbuġ dedicati alla festa del santo: il San Filep Band Club, i verdi, e il 12th May Band & Social Club, i rossi. Realtà musicali e sociali che contribuiscono alla vita della festa e all’amicizia con Agira.',
      'Ogni anno molti maltesi vengono ad Agira per i festeggiamenti e molti agirini raggiungono Malta in occasione della festa di Żebbuġ. Visite, ospitalità e amicizie hanno consolidato uno scambio che continua a rinnovarsi: il gemellaggio vive anche nelle persone che si ritrovano.'
    ] }
  ],
  visitLabel: '05 / VIVERE LA FESTA', visitTitle: 'Vieni per la festa. Fermati per Agira.',
  visitText: 'Consulta il programma prima di partire: orari, percorsi e disposizioni sulla viabilità possono cambiare. Nel centro storico scegli scarpe comode e lascia spazio ai partecipanti durante le processioni. La visita continua tra chiese, vicoli, panorami e sapori locali.',
  abbey: 'Scopri l’Abbazia di San Filippo', food: 'Dove mangiare', stay: 'Dove dormire',
  programmeTitle: 'Il programma di ogni edizione', programmeText: 'Questa pagina racconta le feste e le loro tradizioni. Per le date definitive della festa estiva, il calendario religioso, gli orari e gli appuntamenti civili consulta le comunicazioni della parrocchia, della Pro Loco e del Comune.',
  faqTitle: 'Prima della visita',
  faqs: [
    { q: 'Quando si festeggia San Filippo ad Agira?', a: 'La Festa di Primavera si celebra il 12 maggio. La Festa d’Estate, A festa ranni, negli ultimi anni ha avuto la giornata principale il 12 agosto. Le celebrazioni si estendono anche ai giorni vicini.' },
    { q: 'Il programma estivo è sempre uguale?', a: 'No. La distribuzione delle celebrazioni, il triduo preparatorio, gli orari e gli appuntamenti civili possono variare. Controlla sempre il programma dell’edizione.' },
    { q: 'Qual è il legame con Malta?', a: 'Agira e Ħaż-Żebbuġ sono gemellate dal 1997 e condividono la devozione a San Filippo. I rapporti tra le comunità e i club maltesi si rinnovano anche attraverso la partecipazione reciproca alle feste.' }
  ], sources: 'Fonti e approfondimenti', events: 'Tutti gli eventi di Agira',
} : {
  title: 'Saint Philip Festival in Agira: May and August | Hello Agira',
  description: 'Discover Agira’s spring and summer celebrations of Saint Philip, their traditions and the friendship with the Maltese town of Ħaż-Żebbuġ.',
  eyebrow: 'AGIRA · FAITH, TRADITION AND HOMECOMING',
  heading: 'Saint Philip.\nA town comes together.',
  intro: '12 May and, in recent years, 12 August: two occasions to discover Agira through devotion to its patron saint, local rituals and the joy of coming together.',
  action: 'Discover the celebrations', caption: 'San Filippo Abbey, at the heart of Agira’s devotion.',
  dates: [{ month: 'MAY', name: 'The Spring Festival', note: 'Every year on 12 May, with celebrations on surrounding days.' }, { month: 'AUGUST', name: 'A festa ranni', note: 'Held on 12 August in recent years. The full schedule varies by edition.' }],
  sections: [
    { id: 'primavera', label: '01 / THE SPRING FESTIVAL', title: 'May, a devotion renewed.', paragraphs: [
      'On 12 May, Agira celebrates Saint Philip, its patron saint. Rooted in the town’s religious history and collective memory, the festival includes services and traditions on the days around the main celebration.',
      'The devotion has been documented for centuries: Tommaso Fazello described the festival in the sixteenth century. Other writers, including Brandi and Pitrè, later recorded its rituals and popular participation.',
      'Religious preparation, veneration of the relics and processions are among the festival’s defining features. San Filippo Abbey is a starting point for understanding this tradition and its meaning for the community.'
    ] },
    { id: 'estate', label: '02 / THE SUMMER FESTIVAL', title: 'A festa ranni. A time to return.', paragraphs: [
      'The summer festival brings the anticipation of a reunion. In recent years its main celebration has taken place on 12 August, alongside religious services and festivities on surrounding days.',
      'Its origins are connected to agricultural life: after the harvest, people had time and resources to celebrate and give thanks before returning to work for the grape harvest.',
      'Over time, August also became the season when people from Agira living elsewhere returned home. Families, friends and familiar places come together again, making the patron saint’s festival a chance to renew a connection to the town.',
      'Religious preparation and services lead up to the main day. The schedule for the preparatory triduum, processions and any entertainment should be checked in each edition’s programme.'
    ] },
    { id: 'tradizioni', label: '03 / EXPRESSIONS OF DEVOTION', title: 'Encounter a living tradition.', paragraphs: [
      'Accounts of the festivals describe the saint’s statue, the reliquary casket and the arm-shaped reliquary. These are distinct elements of Agira’s religious heritage, around which prayers, processions and acts of veneration take place.',
      'Sources also record votive candles and the kissing of the relic, gestures expressing trust and thanksgiving. Check the annual programme for the rituals, locations and procession routes of each edition.'
    ] },
    { id: 'malta', label: '04 / FROM SICILY TO MALTA', title: 'Two islands, a shared devotion.', paragraphs: [
      'Saint Philip of Agira is also venerated in other Sicilian towns. In Limina, in the province of Messina, celebrations and popular traditions show how deeply his devotion is rooted beyond Agira itself.',
      'This shared devotion crosses the sea to Ħaż-Żebbuġ, on the island of Malta, whose patron saint is Saint Philip of Agira. The relationship between the two communities was formalised through their twinning in 1997.',
      'Over many years, ties have also grown through two Żebbuġ clubs associated with the saint’s festival: San Filep Band Club, the greens, and 12th May Band & Social Club, the reds. These musical and social organisations contribute both to the celebrations and to the friendship with Agira.',
      'Every year many Maltese visitors travel to Agira for the festivities, while people from Agira visit Malta for Żebbuġ’s celebration. Visits, hospitality and friendships have strengthened an exchange that continues to bring the communities together.'
    ] }
  ],
  visitLabel: '05 / EXPERIENCE THE FESTIVAL', visitTitle: 'Come for the festival. Stay for Agira.',
  visitText: 'Check the programme before travelling: times, routes and traffic arrangements may change. Wear comfortable shoes in the historic centre and leave space for participants during processions. Continue your visit among churches, lanes, views and local flavours.',
  abbey: 'Discover San Filippo Abbey', food: 'Where to eat', stay: 'Where to stay',
  programmeTitle: 'Each edition’s programme', programmeText: 'This page introduces the festivals and their traditions. For confirmed summer dates, religious services, times and public entertainment, consult announcements from the parish, Pro Loco and municipality.',
  faqTitle: 'Before your visit',
  faqs: [
    { q: 'When does Agira celebrate Saint Philip?', a: 'The Spring Festival is celebrated on 12 May. In recent years the Summer Festival, A festa ranni, has had its main celebration on 12 August. Services and festivities also take place on surrounding days.' },
    { q: 'Is the summer programme always the same?', a: 'No. The services, preparatory triduum, times and entertainment can vary. Always check the programme for the relevant edition.' },
    { q: 'What is the connection with Malta?', a: 'Agira and Ħaż-Żebbuġ have been twinned since 1997 and share devotion to Saint Philip. Ties between the communities and Maltese clubs are renewed through visits to each other’s festivals.' }
  ], sources: 'Sources and further reading', events: 'All events in Agira',
};
