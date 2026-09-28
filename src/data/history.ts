import { pageUrl, type Locale } from '../lib/i18n';

const sources = {
  treccani: 'https://www.treccani.it/enciclopedia/agira_(Enciclopedia-Italiana)/',
  proloco: 'https://www.prolocoagira.it/wp/storia-e-cultura/',
  cityHistory: 'https://www.agira.org/Sintesi-storiche/agira-citta-darte.html',
  abbey: 'https://www.agira.org/Sintesi-storiche/abbazia-di-san-filippo-santa-maria-latina-di-agira.html',
  saint: 'https://www.agira.org/Pubblicazioni/la-vita-di-san-filippo-dagira/All-Pages.html',
  salvator: 'https://www.agira.org/Sintesi-storiche/la-chiesa-del-ss-salvatore-di-agira.html',
};

export function getHistoryPage(lang: Locale) {
  const l = (it: string, en: string) => lang === 'it' ? it : en;

  return {
    title: l('Storia di Agira: da Agyrion a oggi | Hello Agira', 'The history of Agira: from Agyrion to today | Hello Agira'),
    description: l('Scopri la storia di Agira attraverso l’antica Agyrion, Diodoro Siculo, l’Abbazia di San Filippo e le memorie custodite nelle chiese.', 'Explore Agira’s history through ancient Agyrion, Diodorus Siculus, San Filippo Abbey and the memories held in its churches.'),
    eyebrow: l('STORIA / UNA CITTÀ, MOLTE EPOCHE', 'HISTORY / A TOWN, MANY ERAS'),
    heading: l('Le storie che\nabitano Agira.', 'Stories that\nshape Agira.'),
    intro: l('Per capire Agira, seguiamo alcune tracce: la città antica di Agyrion, lo sguardo di Diodoro Siculo, la lunga vicenda dell’Abbazia di San Filippo e le memorie custodite nelle chiese. Le fonti non raccontano sempre le stesse cose: dove la storia lascia spazio alla tradizione, lo diciamo apertamente.', 'To understand Agira, follow a few traces: the ancient city of Agyrion, the perspective of Diodorus Siculus, the long history of San Filippo Abbey and the memories held in local churches. Sources do not always agree; where history meets tradition, we make that distinction clear.'),
    readingText: l('Nessun luogo racconta tutto da solo. Mettiamo accanto reperti, fonti scritte e tradizioni: una traccia per orientarsi, non una cronologia definitiva.', 'No single place tells the whole story. We bring archaeological finds, written sources and traditions together: a guide to reading the past, not a definitive chronology.'),
    action: l('Segui le tracce', 'Follow the traces'),
    sectionEyebrow: l('01 / QUATTRO TRACCE', '01 / FOUR TRACES'),
    sectionTitle: l('Una città si legge a strati.', 'A town read in layers.'),
    chapters: [
      {
        id: 'agyrion', number: '01', eyebrow: l('LA CITTÀ ANTICA', 'THE ANCIENT CITY'), image: 'castleDaylight',
        title: l('Agyrion, prima di Agira.', 'Agyrion, before Agira.'),
        text: l('Le fonti collegano l’Agira di oggi all’antica Agyrion. Nell’area del castello, scavi riferiti dalla Pro Loco hanno individuato resti di abitato e di una zecca greca datati tra il V e il IV secolo a.C. Le ricostruzioni storiche collocano la città nelle vicende della Sicilia greca e nell’età di Timoleonte.', 'Historical sources connect present-day Agira with ancient Agyrion. In the castle area, excavations reported by the Pro Loco identified settlement remains and a Greek mint dated to the fifth and fourth centuries BCE. Historical accounts place the city within the story of Greek Sicily and the age of Timoleon.'),
        sourceLinks: [
          { label: l('Scavi e storia antica · Pro Loco Agira', 'Excavations and ancient history · Pro Loco Agira'), href: sources.proloco },
          { label: l('Agira · Enciclopedia Italiana Treccani', 'Agira · Treccani Italian Encyclopaedia'), href: sources.treccani },
        ],
      },
      {
        id: 'diodoro', number: '02', eyebrow: l('UNA VOCE DALLA CITTÀ', 'A VOICE FROM THE CITY'), image: null,
        title: l('Diodoro Siculo guarda il Mediterraneo.', 'Diodorus Siculus looks to the Mediterranean.'),
        text: l('Diodoro Siculo, storico del I secolo a.C. ricordato come nato ad Agira, raccontò le vicende della Sicilia e del mondo antico nella Biblioteca storica. Nelle sue pagine Agyrion entra in un racconto più ampio, fatto di città, culti e relazioni mediterranee.', 'Diodorus Siculus, a first-century BCE historian remembered as a native of Agira, wrote about Sicily and the ancient world in his Bibliotheca historica. In his work, Agyrion appears within a wider story of cities, cults and Mediterranean connections.'),
        sourceLinks: [
          { label: l('Diodoro e la storia di Agira · Materiali storici', 'Diodorus and Agira’s history · Historical materials'), href: sources.cityHistory },
          { label: l('Agira · Enciclopedia Italiana Treccani', 'Agira · Treccani Italian Encyclopaedia'), href: sources.treccani },
        ],
      },
      {
        id: 'san-filippo', number: '03', eyebrow: l('IL MONASTERO E LA MEMORIA', 'MONASTERY AND MEMORY'), image: 'abbey',
        title: l('San Filippo, una storia ancora viva.', 'San Filippo, a history still alive.'),
        text: l('L’Abbazia di San Filippo, nota anche come Santa Maria Latina, sorge sui resti di un antico monastero greco di regola basiliana. Gli storici Rita Loredana Foti e Salvatore Longo Minnolo ne collocano le origini tra il VII e l’VIII secolo e descrivono la successiva rifondazione normanna e benedettina.', 'San Filippo Abbey, also known as Santa Maria Latina, stands on the remains of an ancient Greek monastery following the Basilian rule. Historians Rita Loredana Foti and Salvatore Longo Minnolo place its origins between the seventh and eighth centuries and describe its later Norman and Benedictine chapter.'),
        sourceLinks: [
          { label: l('La storia dell’Abbazia · Foti e Longo Minnolo', 'The Abbey’s history · Foti and Longo Minnolo'), href: sources.abbey },
        ],
      },
      {
        id: 'memorie', number: '04', eyebrow: l('LE MEMORIE DEL CENTRO', 'MEMORIES IN THE TOWN'), image: 'ssalvatore',
        title: l('Più memorie, nello stesso luogo.', 'Many memories, held in one place.'),
        text: l('La Collegiata del SS. Salvatore conserva l’Aron in pietra, legato alla storia della comunità ebraica agirina. Il monumento invita a leggere la città attraverso le comunità che l’hanno abitata e le interpretazioni storiche che ancora si confrontano.', 'The Collegiate Church of SS. Salvatore holds the stone Aron, connected with Agira’s Jewish community. It offers a way to read the town through the communities who lived here and the historical interpretations that continue to be discussed.'),
        sourceLinks: [
          { label: l('La chiesa del SS. Salvatore · Materiali storici', 'The church of SS. Salvatore · Historical materials'), href: sources.salvator },
          { label: l('Visita la Collegiata · Pro Loco Agira', 'Visit the Collegiate Church · Pro Loco Agira'), href: 'https://www.prolocoagira.it/wp/2017/06/22/collegiata-del-ss-salvatore/' },
        ],
      },
    ],
    timelineEyebrow: l('02 / DATE DA TENERE A MENTE', '02 / DATES TO KEEP IN MIND'),
    timelineTitle: l('Alcuni passaggi, non tutta la storia.', 'A few milestones, not the whole story.'),
    timeline: [
      { date: l('339 a.C.', '339 BCE'), text: l('Nell’età di Timoleonte, le fonti ricordano una fase di ricostruzione e crescita per Agyrion.', 'In the age of Timoleon, sources describe a period of rebuilding and growth for Agyrion.'), href: sources.treccani },
      { date: l('I sec. a.C.', '1st century BCE'), text: l('Diodoro Siculo, storico nato ad Agira, racconta la città nella sua Biblioteca storica.', 'Diodorus Siculus, a historian born in Agira, writes about the city in his Bibliotheca historica.'), href: sources.cityHistory },
      { date: l('1095–1101', '1095–1101'), text: l('In età normanna il monastero viene restaurato e affidato ai Benedettini, secondo la ricostruzione di Foti e Longo Minnolo.', 'In the Norman period, the monastery was restored and entrusted to the Benedictines, according to Foti and Longo Minnolo.'), href: sources.abbey },
      { date: l('1537', '1537'), text: l('Una ricostruzione storica locale attribuisce a Carlo V il conferimento del titolo di città ad Agira.', 'A local historical account attributes Agira’s city title to Charles V in 1537.'), href: sources.cityHistory },
    ],
    traditionTitle: l('Storia e tradizione non sono la stessa cosa.', 'History and tradition are not the same thing.'),
    traditionText: l('Le agiografie di San Filippo propongono cronologie diverse: una lo colloca nel V secolo, un’altra nel I secolo. La tradizione agirina ha accolto soprattutto quest’ultima. Per questo distinguiamo la storia del monastero dalle narrazioni sulla vita del santo.', 'The hagiographies of San Filippo give different chronologies: one places him in the fifth century, another in the first. Agira’s local tradition has mostly followed the latter. We therefore distinguish the history of the monastery from the stories told about the saint’s life.'),
    traditionSource: l('Leggi lo studio sulle agiografie', 'Read the study of the hagiographies'),
    nextEyebrow: l('IL VIAGGIO CONTINUA', 'KEEP EXPLORING'),
    nextTitle: l('Ora puoi leggere queste storie nei luoghi di Agira.', 'Now see these stories in the places of Agira.'),
    sightsLink: l('Scopri i luoghi', 'Explore the sights'),
    routesLink: l('Scegli un itinerario', 'Choose an itinerary'),
    sightsHref: pageUrl('sights', lang),
    routesHref: pageUrl('routes', lang),
    sources,
  };
}
