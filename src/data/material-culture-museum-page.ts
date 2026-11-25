import type { Locale } from '../lib/i18n';
import type { SightPage } from './sight-pages';

const facebook = 'https://www.facebook.com/EcomuseoAgira';

export function getMaterialCultureMuseumPage(lang: Locale): SightPage {
  const l = (it: string, en: string) => lang === 'it' ? it : en;

  return {
    id: 'materialCultureMuseum',
    name: l('Il Museo della Cultura Materiale', 'The Museum of Material Culture'),
    category: l('Musei e memoria locale', 'Museums and local heritage'),
    title: l('Museo della Cultura Materiale ad Agira | Hello Agira', 'Museum of Material Culture in Agira | Hello Agira'),
    description: l('Scopri il Museo della Cultura Materiale “Sac. Silvestro Nasca” ad Agira: antichi mestieri, vita contadina e Agira in miniatura, nel quartiere Santa Maria.', 'Discover Agira’s Silvestro Nasca Museum of Material Culture: traditional crafts, rural life and a scale model of the town in the Santa Maria quarter.'),
    introduction: l('Nel quartiere Santa Maria, il museo intitolato a padre Silvestro Nasca racconta la vita quotidiana di Agira attraverso gli oggetti donati dalla comunità, gli ambienti della civiltà contadina e una riproduzione in miniatura del paese.', 'In the Santa Maria quarter, the museum named after Father Silvestro Nasca tells the story of everyday life in Agira through objects donated by the community, reconstructions of rural interiors and a scale model of the town.'),
    image: 'materialCultureMuseumMural',
    location: l('Via Quieto 2 · Quartiere Santa Maria · Agira', 'Via Quieto 2 · Santa Maria quarter · Agira'),
    mapQuery: 'Museo di Cultura Materiale Padre Silvestro Nasca, Via Quieto 2, Agira',
    visitorNote: l('Prima di partire, verifica direttamente con l’Ecomuseo giorni, orari e modalità di visita.', 'Before setting off, check opening days, hours and visiting arrangements directly with the museum.'),
    visitorContacts: [{ label: l('Pagina ufficiale dell’Ecomuseo su Facebook', 'The museum’s official Facebook page'), href: facebook }],
    facts: [
      { label: l('Indirizzo', 'Address'), value: 'Via Quieto 2, Agira' },
      { label: l('Quartiere', 'Quarter'), value: 'Santa Maria' },
      { label: l('Da vedere', 'Look out for'), value: l('Antichi mestieri, ambienti contadini e Agira in miniatura', 'Traditional crafts, rural interiors and Agira in miniature') },
    ],
    story: [
      { title: l('La memoria raccolta dalla comunità.', 'A community preserves its memory.'), paragraphs: [
        l('L’Ecomuseo nasce dall’impegno di volontari e dalla disponibilità di padre Silvestro Nasca, che mise a disposizione i locali. La raccolta è cresciuta grazie alle donazioni di chi ha scelto di affidare al museo oggetti conservati in casa o usati per il proprio lavoro.', 'The museum grew out of the efforts of volunteers and the generosity of Father Silvestro Nasca, who made the premises available. Its collection grew through donations from people who entrusted it with objects they had kept at home or used in their work.'),
        l('Questi oggetti raccontano come si viveva ad Agira: il lavoro necessario per mantenere una casa, i mestieri che sostenevano le famiglie e le risorse a disposizione delle generazioni precedenti.', 'These objects show how people lived in Agira: the work needed to run a home, the trades that supported families and the resources available to earlier generations.'),
      ] },
      { title: l('Che cosa significa cultura materiale?', 'What is material culture?'), paragraphs: [
        l('La cultura materiale è fatta delle cose che le persone costruiscono, usano e tramandano. Un utensile consumato dall’uso o un mobile di casa raccontano quali materiali si avevano a disposizione, come si imparava un mestiere e come ci si adattava alle necessità di ogni giorno.', 'Material culture is made up of the things people make, use and pass down. A worn tool or a piece of furniture can tell us what materials were available, how people learnt a trade and how they met everyday needs.'),
      ] },
      { title: l('Gli antichi mestieri.', 'Traditional trades.'), paragraphs: [
        l('Gli attrezzi del lavoro agricolo e artigiano aiutano a ricostruire i gesti di chi lavorava nei campi o in bottega. Osservare la forma di un attrezzo e i suoi segni d’uso è un modo per capire che cosa si faceva con le mani e quanta esperienza serviva per farlo bene.', 'Farm and craft tools help us picture the movements of people who worked in the fields or in workshops. Looking at a tool’s shape and traces of wear can reveal what people did by hand and how much skill it took to do it well.'),
      ] },
      { title: l('La casa e la vita contadina.', 'Home and rural life.'), paragraphs: [
        l('Le ricostruzioni della cucina, della camera da letto e della stalla mostrano quanto fossero vicini gli spazi della casa e quelli del lavoro. Arredi e utensili aiutano a immaginare i ritmi delle famiglie, dalla preparazione dei pasti alla cura degli animali.', 'Reconstructions of a kitchen, a bedroom and a stable show how closely home and work were connected. Furniture and utensils help visitors picture the rhythms of family life, from preparing meals to tending animals.'),
      ] },
      { title: l('Agira in miniatura.', 'Agira in miniature.'), paragraphs: [
        l('Nella riproduzione in scala di Orazio Lupo, scorci dell’Agira di ieri e di oggi si osservano da vicino. Cerca le strade che salgono tra le case e i cambi di livello: sono dettagli che aiutano a leggere la forma del paese anche dopo essere usciti dal museo.', 'Orazio Lupo’s scale model offers a close look at scenes from Agira past and present. Look for streets climbing between the houses and changes in level: details that help you read the shape of the town even after leaving the museum.'),
      ] },
      { title: l('Il murale: uno sguardo sulla vita del paese.', 'The mural: a glimpse of life in the town.'), paragraphs: [
        l('Nella fotografia condivisa dall’Ecomuseo, un murale riunisce case, scalinate, persone e animali, con l’Etna dipinto all’orizzonte. Come gli oggetti conservati nel museo, le scene richiamano i gesti quotidiani e il legame tra l’abitato e il paesaggio.', 'In a photograph shared by the museum, a mural brings together houses, steps, people and animals, with Mount Etna painted on the horizon. Like the objects in the collection, these scenes recall everyday life and the relationship between the town and its landscape.'),
      ] },
      { title: l('Il museo e il quartiere Santa Maria.', 'The museum and the Santa Maria quarter.'), paragraphs: [
        l('Il museo si trova in via Quieto, nel quartiere storico di Santa Maria. La visita si può abbinare a una passeggiata nei dintorni della Collegiata di Santa Maria Maggiore e del santuario della Madonna della Quiete, seguendo le vie del quartiere.', 'The museum is on Via Quieto in the historic Santa Maria quarter. You can combine a visit with a walk through the neighbourhood around the Collegiate Church of Santa Maria Maggiore and the Sanctuary of the Madonna della Quiete.'),
      ] },
    ],
    highlights: [
      { title: l('Gli attrezzi da lavoro', 'The tools of the trades'), text: l('Osserva come forma e materiali cambiano secondo il lavoro da svolgere.', 'Notice how form and materials vary with the work each tool was made for.') },
      { title: l('Gli ambienti di casa', 'The domestic interiors'), text: l('Guarda come sono disposti gli oggetti della cucina e della camera: la loro posizione aiuta a capirne l’uso.', 'Look at how the objects in the kitchen and bedroom are arranged: their placement offers clues to how they were used.') },
      { title: l('Il paese in scala', 'The town in miniature'), text: l('Confronta gli scorci della miniatura con le strade e le case che incontri nel centro storico.', 'Compare scenes from the model with the streets and houses you encounter in the historic centre.') },
    ],
    practical: [
      { title: l('Apertura e modalità di visita', 'Opening and visiting arrangements'), text: l('Consulta la pagina ufficiale dell’Ecomuseo prima della visita e chiedi se occorre concordare l’accesso.', 'Check the museum’s official page before visiting and ask whether you need to arrange access in advance.') },
      { title: l('Come arrivare', 'Getting there'), text: l('La sede è in Via Quieto 2, nel quartiere Santa Maria. Usa le indicazioni della mappa per raggiungere il museo.', 'The museum is at Via Quieto 2 in the Santa Maria quarter. Use the map directions to find it.') },
      { title: l('Accessibilità', 'Accessibility'), text: l('Se hai esigenze di mobilità, verifica con il museo il percorso di accesso e la praticabilità degli ambienti espositivi.', 'If you have mobility requirements, ask the museum about the route to the entrance and access to the exhibition rooms.') },
    ],
    gallery: [{ key: 'materialCultureMuseumMural', title: l('Il murale con scene di vita e l’Etna', 'The mural with scenes of everyday life and Mount Etna') }],
    sources: [
      { title: l('Ecomuseo di Agira · Pagina ufficiale', 'Agira Ecomuseum · Official page'), url: facebook },
      { title: l('Pro Loco Agira · Museo della Cultura Materiale', 'Pro Loco Agira · Museum of Material Culture'), url: 'https://www.prolocoagira.it/wp/2017/10/20/museo-agira/' },
      { title: 'I Borghi più belli d’Italia · Agira', url: 'https://borghipiubelliditalia.it/borgo/agira/' },
      { title: l('StoriEnogastronomiche · Una visita al museo', 'StoriEnogastronomiche · A visit to the museum'), url: 'https://www.storienogastronomiche.it/museo-di-cultura-materiale-nasca-di-agira-en-alle-radici-dellemozione/' },
    ],
  };
}
