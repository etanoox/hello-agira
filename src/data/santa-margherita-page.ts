import type { Locale } from '../lib/i18n';
import type { SightPage } from './sight-pages';

export function getSantaMargheritaPage(lang: Locale): SightPage {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  return {
    id: 'santaMargherita',
    name: l('La Chiesa di Santa Margherita', 'The Church of Santa Margherita'),
    category: l('Architettura e arte sacra', 'Architecture and sacred art'),
    title: l('Chiesa di Santa Margherita ad Agira: storia e visita | Hello Agira', 'Santa Margherita Church in Agira: history and visiting | Hello Agira'),
    description: l('Scopri Santa Margherita ad Agira: tre navate, la cupola, l’Immacolata di Giuseppe Picano, gli altari e il legno intagliato. Foto di Filippo Anello.', 'Discover Santa Margherita in Agira: three naves, its dome, the Immaculate Virgin by Giuseppe Picano, altars and carved wood. Photos by Filippo Anello.'),
    introduction: l('Tre navate, una grande cupola e un patrimonio di sculture, dipinti e legni intagliati: una delle tappe principali per scoprire l’arte sacra di Agira.', 'Three naves, a great dome and a collection of sculptures, paintings and carved wood: one of the main stops for discovering Agira’s sacred art.'),
    image: 'santaMargheritaAnelloInterior',
    location: l('Chiesa di Santa Margherita · Agira', 'Santa Margherita Church · Agira'),
    mapQuery: 'Chiesa di Santa Margherita, Agira, Sicilia',
    visitorNote: l('Santa Margherita è un luogo di culto: visita gli ambienti con discrezione e rispetta le celebrazioni. Prima di organizzare la visita agli interni, verifica gli orari di apertura e la possibilità di accedere alla sacrestia.', 'Santa Margherita is a place of worship: visit quietly and respect services. Before planning an indoor visit, check opening hours and whether the sacristy can be accessed.'),
    facts: [
      { label: l('Impianto medievale', 'Medieval layout'), value: l('Prima metà del XIII secolo', 'First half of the 13th century') },
      { label: l('Pianta', 'Plan'), value: l('Croce latina · tre navate', 'Latin cross · three naves') },
      { label: l('Prospetto', 'Facade'), value: l('Neoclassico · XIX secolo', 'Neoclassical · 19th century') },
      { label: l('Da non perdere', 'Look out for'), value: l('Immacolata, altari e legni intagliati', 'Immaculate Virgin, altars and carved wood') },
    ],
    story: [
      {
        title: l('Oltre il prospetto neoclassico.', 'Beyond the neoclassical facade.'),
        paragraphs: [
          l('Santa Margherita colpisce prima di tutto per l’ampiezza dello spazio. Oltre il prospetto neoclassico, l’interno si apre in tre navate, scandite da colonne con capitelli corinzi e attraversate dalla luce.', 'Santa Margherita first impresses through the scale of its space. Beyond the neoclassical facade, the interior opens into three naves, defined by columns with Corinthian capitals and filled with light.'),
          l('La sua storia unisce origini medievali, ricostruzioni e secoli di devozione. Per conoscerla, vale la pena soffermarsi tanto sull’architettura quanto sulle opere: l’Immacolata di Giuseppe Picano, l’altare maggiore decorato in oro su vetro, il coro e il pulpito lignei.', 'Its history brings together medieval origins, rebuilding and centuries of devotion. Explore both the architecture and the artworks: the Immaculate Virgin by Giuseppe Picano, the high altar decorated in gold on glass, the wooden choir and the pulpit.'),
        ],
      },
      {
        title: l("Le origini, tra storia e tradizione.", "Origins: history and tradition."),
        paragraphs: [
          l("L’impianto medievale della chiesa viene ricondotto alla prima metà del XIII secolo. Le ricostruzioni locali ricordano una precedente dedicazione a San Sebastiano e la possibile presenza, in epoca bizantina, di un luogo di culto dedicato a Santa Sofia.", "The church’s medieval layout is dated to the first half of the 13th century. Local accounts recall an earlier dedication to Saint Sebastian and the possible existence of a Byzantine place of worship dedicated to Saint Sophia."),
          l("Ancora più antica è la tradizione che colloca qui un tempio di Ercole, figura profondamente legata alla memoria dell’Agira antica. È una suggestione da distinguere dalle testimonianze documentate: la continuità tra quel tempio e la chiesa non è accertata.", "An older tradition places a temple of Hercules here, a figure deeply connected with the memory of ancient Agira. This tradition should be distinguished from documented evidence: continuity between that temple and the church has not been established."),
        ],
      },
      {
        title: l("Il terremoto e la ricostruzione.", "The earthquake and rebuilding."),
        paragraphs: [
          l("Il terremoto dell’11 gennaio 1693 segnò profondamente la storia dell’edificio. Secondo le descrizioni storiche locali, tra le strutture crollate vi furono il campanile e il soffitto ligneo a cassettoni.", "The earthquake of 11 January 1693 profoundly affected the building. According to local historical descriptions, the bell tower and wooden coffered ceiling were among the structures that collapsed."),
          l("La ricostruzione, sostenuta anche dal contributo della popolazione, proseguì attraverso più fasi. Alla nuova copertura seguirono il campanile e gli interventi che definirono il transetto e le absidi.", "Rebuilding, supported in part by contributions from local people, continued through several phases. The new roof was followed by the bell tower and work that shaped the transept and apses."),
          l("Le fonti locali collegano questa lunga trasformazione ai nomi di Giovanni Battista Vaccarini e Stefano Ittar, protagonisti dell’architettura settecentesca in Sicilia. Il prospetto neoclassico appartiene invece alla fase ottocentesca.", "Local sources associate this long transformation with Giovanni Battista Vaccarini and Stefano Ittar, leading figures in 18th-century Sicilian architecture. The neoclassical facade belongs to the 19th-century phase."),
        ],
      },
      {
        title: l("Uno spazio da osservare con calma.", "A space to explore slowly."),
        paragraphs: [
          l("La pianta è a croce latina, con tre navate separate da quattordici colonne con capitelli corinzi.", "The church has a Latin-cross plan, with three naves separated by fourteen columns with Corinthian capitals."),
          l("Entrando, lo sguardo segue la navata centrale verso il presbiterio e si alza verso le volte e la cupola. È questo insieme di profondità e slancio verticale a rendere riconoscibile l’interno di Santa Margherita.", "On entering, your gaze follows the central nave towards the sanctuary and rises towards the vaults and dome. This combination of depth and upward movement gives Santa Margherita’s interior its distinctive character."),
          l("Prima di avvicinarsi agli altari, vale la pena fermarsi e osservare il ritmo delle colonne, le proporzioni degli ambienti e il rapporto tra architettura e decorazione.", "Before approaching the altars, pause to notice the rhythm of the columns, the proportions of the spaces and the relationship between architecture and decoration."),
        ],
      },
      {
        title: l("L’Immacolata di Giuseppe Picano.", "The Immaculate Virgin by Giuseppe Picano."),
        paragraphs: [
          l("Tra le opere principali della chiesa spicca l’Immacolata dello scultore napoletano Giuseppe Picano, realizzata alla fine del Settecento.", "One of the church’s principal works is the Immaculate Virgin by the Neapolitan sculptor Giuseppe Picano, made in the late 18th century."),
          l("La scultura è custodita in una monumentale edicola lignea, opera di Ignazio Leone datata 1810. Statua e cornice architettonica formano uno dei punti su cui soffermarsi durante la visita, osservando il movimento delle vesti e la composizione dell’insieme.", "The sculpture stands in a monumental wooden shrine made by Ignazio Leone in 1810. Statue and architectural frame form one of the highlights of a visit: look at the movement of the drapery and the composition as a whole."),
        ],
      },
      {
        title: l("L’altare maggiore e l’altare del Sacramento.", "The high altar and the Blessed Sacrament altar."),
        paragraphs: [
          l("L’altare maggiore, seicentesco, si distingue per la decorazione con miniature in oro su vetro: un dettaglio prezioso, da cercare avvicinandosi e osservandone le singole parti.", "The 17th-century high altar is distinguished by miniature decorations in gold on glass: precious details that reward a closer look at its individual parts."),
          l("L’altare del Sacramento presenta invece un tempietto sorretto da sei colonnine. Le descrizioni storiche segnalano l’impiego di marmo di Sicilia, granito d’Egitto e agata, materiali diversi riuniti in una composizione di particolare ricchezza.", "The Blessed Sacrament altar features a small temple supported by six slender columns. Historical descriptions record the use of Sicilian marble, Egyptian granite and agate, bringing different materials together in a richly varied composition."),
        ],
      },
      {
        title: l("Il legno intagliato e i dipinti.", "Carved wood and paintings."),
        paragraphs: [
          l("Il patrimonio della chiesa comprende un coro ligneo attribuito a Giovanni Battista Li Volsi e al figlio Stefano.", "The church’s artworks include a wooden choir attributed to Giovanni Battista Li Volsi and his son Stefano."),
          l("Anche il pulpito merita attenzione: tra gli intagli compaiono figure dei santi protettori delle parrocchie agirine, che legano l’opera alla storia religiosa della città.", "The pulpit also deserves attention: its carvings include the patron saints of Agira’s parishes, linking the work to the town’s religious history."),
          l("Tra i dipinti ricordati dalle fonti locali figurano la Misericordia, Santa Maria Maddalena e l’Addolorata con i quattro Evangelisti, quest’ultima attribuita a Ovidio Sozzi.", "Paintings recorded in local sources include the Misericordia, Saint Mary Magdalene and Our Lady of Sorrows with the Four Evangelists, the last attributed to Ovidio Sozzi."),
          l("Un portale settecentesco di gusto barocco introduce alla sacrestia, dove sono segnalati gli armadi intagliati da Paolo Guglielmazzi di Enna nella seconda metà del XVIII secolo.", "An 18th-century Baroque-style doorway leads to the sacristy, where accounts record cabinets carved by Paolo Guglielmazzi of Enna in the second half of the 18th century."),
        ],
      },
      {
        title: l("Le iscrizioni raccontano.", "Stories in the inscriptions."),
        paragraphs: [
          l("Anche le lapidi conservano frammenti della storia della chiesa.", "The commemorative inscriptions also preserve fragments of the church’s history."),
          l("Una ricorda la solenne dedicazione a Santa Margherita, celebrata il 20 settembre 1894 dal vescovo di Nicosia Bernardo Cozzucli. Un’altra, datata 1800 e collocata accanto all’altare di San Sebastiano, ricorda Mauro Manmano e Gussio e la sepoltura scelta per sé e per la propria famiglia.", "One records the solemn dedication to Saint Margaret on 20 September 1894 by Bernardo Cozzucli, Bishop of Nicosia. Another, dated 1800 and placed beside the altar of Saint Sebastian, commemorates Mauro Manmano e Gussio and the burial place he chose for himself and his family."),
          l("Sono testimonianze che affiancano alle grandi opere d’arte i nomi e le vicende delle persone legate a questo luogo.", "Alongside the major artworks, these inscriptions preserve the names and stories of people connected with this place."),
        ],
      },
    ],
    highlights: [
      { title: l('Le tre navate e la cupola', 'The three naves and dome'), text: l('Osserva il ritmo delle quattordici colonne e il rapporto tra profondità e slancio verticale.', 'Notice the rhythm of the fourteen columns and the balance between depth and upward movement.') },
      { title: l('L’Immacolata', 'The Immaculate Virgin'), text: l('La scultura di Giuseppe Picano è custodita nell’edicola lignea di Ignazio Leone del 1810.', 'Giuseppe Picano’s sculpture stands in the wooden shrine made by Ignazio Leone in 1810.') },
      { title: l('Gli altari e il legno', 'Altars and carved wood'), text: l('Soffermati sulle miniature in oro su vetro, sul coro e sugli intagli del pulpito.', 'Look closely at the gold-on-glass miniatures, the choir and the pulpit carvings.') },
    ],
    practical: [
      { title: l('Prima della visita', 'Before your visit'), text: l('Prima di organizzare la visita agli interni, verifica gli orari di apertura e la possibilità di accedere alla sacrestia.', 'Before planning an indoor visit, check opening hours and whether the sacristy can be accessed.') },
      { title: l('Un luogo di culto', 'A place of worship'), text: l('Visita gli ambienti con discrezione e rispetta le celebrazioni.', 'Visit quietly and respectfully, and be mindful of services.') },
    ],
    gallery: [
      { key: 'santaMargheritaAnelloExterior', title: l('La facciata e la scalinata di Santa Margherita', 'Santa Margherita’s facade and steps') },
      { key: 'santaMargheritaAnelloInterior', title: l('La navata centrale verso il presbiterio', 'The central nave towards the sanctuary') },
    ],
    sources: [],
  };
}
