import type { Itinerary } from './itineraries';
import { sightUrl, type Locale } from '../lib/i18n';

export function getSaintPhilipItinerary(lang: Locale): Itinerary {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  return {
    id: 'saintPhilip', title: l('Sui passi di San Filippo.', 'In Saint Philip’s footsteps.'),
    description: l('Quattro luoghi di San Filippo ad Agira: Abbazia, Grotta, Pietra e Fontana di Maimone. Mappa con posizione facoltativa e consigli per la visita.', 'Four places associated with Saint Philip in Agira: the abbey, cave, stone chapel and Maimone Fountain. A map with optional location and visiting advice.'),
    intro: l('Quattro luoghi, tra devozione e racconto popolare. Abbazia, Grotta e Pietra nel centro abitato; una sosta alla Fontana di Maimone, da raggiungere preferibilmente in auto.', 'Four places shaped by devotion and local storytelling. Explore the abbey, cave and stone chapel in town, with a separate stop at Maimone Fountain, best reached by car.'),
    photo: 'abbeyAnelloPanorama', duration: l('Visita a ritmo libero', 'Explore at your own pace'),
    pace: l('Tre tappe in paese + una sosta in auto', 'Three town stops + a stop by car'),
    heading: l('Luoghi di fede.\nStorie da incontrare.', 'Places of faith.\nStories to discover.'),
    routeTitle: l('Quattro luoghi, un racconto.', 'Four places, one story.'),
    routeIntro: l('Ad Agira, la memoria di San Filippo attraversa le strade e accompagna la vita del paese. Questo itinerario unisce patrimonio religioso e tradizione orale: i racconti di prodigi e scontri con il demonio appartengono alla devozione e al folklore della comunità. Le tappe sono un invito alla scoperta: scegli l’ordine in base al punto di partenza e alle aperture.', 'In Agira, memories of Saint Philip run through the streets and everyday life. This itinerary brings together religious heritage and oral tradition: accounts of miracles and struggles with the devil belong to the community’s devotion and folklore. Choose the order of your stops according to your starting point and opening hours.'),
    walking: l('Abbazia, Grotta e Pietra si visitano nel centro abitato, con pendenze e possibili scalinate. Per la Fontana, in contrada Urselluzzo, è consigliata l’auto. Tempi e distanze del percorso pedonale non sono stati rilevati.', 'The abbey, cave and stone chapel are in town, with slopes and possible steps. Driving is recommended for the fountain in contrada Urselluzzo. Walking times and distances have not been measured.'),
    steps: [
      { label: l('Il cuore della devozione agirina', 'At the heart of Agira’s devotion'), title: l('Abbazia di San Filippo', 'San Filippo Abbey'),
        text: l('L’Abbazia è una tappa centrale per comprendere il legame tra Agira e San Filippo. La chiesa conserva opere e testimonianze che raccontano la lunga storia del suo culto.', 'The abbey is central to understanding Agira’s connection with Saint Philip. Its artworks and religious heritage tell the long story of his worship.'),
        paragraphs: [
          l('Osserva la facciata: al centro, il santo è raffigurato mentre sconfigge il demonio, un’immagine che ritroverai nei racconti degli altri luoghi dell’itinerario. All’interno, il coro ligneo narra attraverso scene intagliate gli episodi della sua vita.', 'Look at the facade: at its centre, the saint is shown defeating the devil, an image echoed in stories about the other stops. Inside, the wooden choir recounts episodes from his life in carved scenes.'),
          l('Alla chiesa appartiene anche la Cateva, l’ambiente sotterraneo che la tradizione identifica con il luogo della sepoltura del santo. La sua visita permette di avvicinarsi a una delle espressioni più intime della devozione agirina.', 'The church also includes the Cateva, the underground chamber traditionally identified as the saint’s burial place. A visit offers an insight into one of the most intimate expressions of local devotion.'),
        ], time: l('In paese · visita secondo le aperture', 'In town · subject to opening hours'),
        tip: l('Verifica l’accesso alla chiesa e alla Cateva. Nella pagina dedicata trovi i contatti della parrocchia e le audioguide in italiano e inglese.', 'Check access to the church and Cateva. The dedicated page has parish contacts and audio guides in Italian and English.'),
        link: { href: sightUrl('abbey', lang), label: l('Scopri l’Abbazia e le audioguide', 'Explore the abbey and audio guides') } },
      { label: l('Tra la roccia e la memoria', 'Between rock and memory'), title: l('Grotta di San Filippo', 'Cave of San Filippo'),
        text: l('La tradizione locale riconosce nella Grotta di San Filippo la dimora del santo: uno spazio di preghiera e meditazione, ma anche lo scenario dei suoi leggendari scontri con il demonio.', 'Local tradition identifies this cave as the saint’s dwelling: a place of prayer and meditation, and the setting of his legendary struggles with the devil.'),
        paragraphs: [
          l('Il luogo custodisce una storia più complessa. La descrizione pubblicata dalla Pro Loco, firmata dal maestro Salvatore Rocca, lo interpreta come un ipogeo funerario di età tardoromana, successivamente riutilizzato. Le cavità sepolcrali e le tracce del culto raccontano così usi differenti dello stesso ambiente.', 'The site has a more complex history. The account published by Pro Loco and written by maestro Salvatore Rocca interprets it as a late Roman underground burial chamber, later reused. The burial recesses and traces of worship reveal different uses of the same space.'),
          l('Sulla parete a destra dell’altare si conservano tracce di un’immagine del santo. La devozione popolare vi ha riconosciuto l’impronta lasciata da San Filippo durante una lotta con i diavoli: un esempio di come la comunità abbia letto la roccia attraverso il proprio patrimonio di racconti.', 'Traces of an image of the saint survive on the wall to the right of the altar. Popular devotion has interpreted it as an imprint left during a struggle with devils: an example of how the community has understood the rock through its stories.'),
        ], time: l('In paese · accesso da verificare', 'In town · check access in advance'),
        tip: l('Verifica sul posto le modalità di apertura. Il segnaposto individua il luogo, senza garantire l’accesso agli interni.', 'Check opening arrangements locally. The marker identifies the place and does not guarantee access inside.'),
        link: { href: sightUrl('saintPhilipCave', lang), label: l('Scopri la grotta', 'Explore the cave') } },
      { label: 'A petra i San Fulippu', title: l('Pietra di San Filippo', 'Stone of San Filippo'),
        text: l('In via Roma 55, un piccolo luogo di culto conserva una delle memorie più particolari del patrono di Agira.', 'At Via Roma 55, a small place of worship preserves one of the most distinctive memories of Agira’s patron saint.'),
        paragraphs: [
          l('Secondo una leggenda, San Filippo sfidò il demonio a far giungere più lontano un masso. La pietra del santo avrebbe percorso la discesa, vincendo la sfida e legando questo tratto del paese al suo nome.', 'According to legend, Saint Philip challenged the devil to send a boulder further downhill. The saint’s stone is said to have won the contest, linking this part of town to his name.'),
          l('Accanto alla leggenda c’è una testimonianza della devozione degli zolfatari. La ricostruzione storica locale riferisce che nel 1867 furono loro a realizzare la cappella e a collocarvi un masso proveniente dalla miniera, sotto l’altare, come segno di affidamento alla protezione del santo.', 'Alongside the legend is a record of the sulphur miners’ devotion. The local historical account states that in 1867 they built the chapel and placed a boulder from the mine beneath its altar, entrusting themselves to the saint’s protection.'),
          l('Fermarsi qui significa incontrare anche la memoria del lavoro e delle persone che hanno affidato a San Filippo le proprie speranze.', 'A stop here also brings you closer to the history of work and the people who placed their hopes in Saint Philip.'),
        ], time: l('In paese · via Roma 55', 'In town · Via Roma 55'),
        tip: l( 'La cappella viene aperta durante la festa di San Filippo e in altre occasioni legate al Santo.', 'The chapel is opened during the Feast of Saint Philip and on other occasions connected with the Saint.' ) },
      { label: l('La fontana dei diavoli', 'The fountain of the devils'), title: l('Fontana di Maimone', 'Maimone Fountain'),
        text: l('In contrada Urselluzzo, la Fontana di Maimone, conosciuta anche come Fontana dei diavoli, è un’altra tappa del racconto popolare di San Filippo.', 'In contrada Urselluzzo, Maimone Fountain, also known as the Fountain of the Devils, is another setting in the local stories of Saint Philip.'),
        paragraphs: [
          l('Secondo la leggenda, presso la fonte e una grotta vicina si trovava il demonio Maimone, sconfitto e incatenato dal santo. Il nome della fontana conserva la memoria di questo racconto, tramandato anche con varianti nel nome del demonio.', 'According to legend, the devil Maimone lived near the spring and an adjacent cave, where the saint defeated and chained him. The fountain’s name preserves this story, told with variations in the devil’s name.'),
          l('La fonte, legata all’abbeverata degli animali, diventa così il punto d’incontro tra un luogo della vita quotidiana e l’immaginario religioso della comunità.', 'The spring, used for watering animals, brings together a place of everyday life and the community’s religious imagination.'),
        ], time: l('Contrada Urselluzzo · auto consigliata', 'Contrada Urselluzzo · driving recommended'),
        tip: l('Consigliamo di raggiungerla in auto, considerando la distanza dal centro abitato. Puoi dedicarle una sosta prima o dopo la visita agli altri luoghi di San Filippo.', 'We recommend driving here because of its distance from the town centre. Stop before or after visiting the other places associated with Saint Philip.') },
    ],
    mapStops: [
      { id: 'abbey', coordinates: [14.5186459, 37.6570842], mode: 'walking', summary: l('Il cuore della devozione agirina. Visita la chiesa e, secondo le aperture, la Cateva.', 'At the heart of local devotion. Visit the church and, subject to access, the Cateva.'), detailUrl: sightUrl('abbey', lang), audioUrl: sightUrl('abbey', lang) + '#audioguida' },
      { id: 'cave', coordinates: [14.5178434, 37.6559555], mode: 'walking', summary: l('La dimora del santo secondo la tradizione. Verifica l’apertura prima della visita.', 'Traditionally the saint’s dwelling. Check opening arrangements before visiting.'), detailUrl: sightUrl('saintPhilipCave', lang) },
      { id: 'stone', coordinates: [14.5210552, 37.6567854], mode: 'walking', summary: l('A petra i San Fulippu, in via Roma 55. La cappella unisce racconto popolare e devozione degli zolfatari.', 'A petra i San Fulippu, at Via Roma 55. The chapel connects local storytelling and the sulphur miners’ devotion.') },
      { id: 'fountain', coordinates: [14.5085550, 37.6545727], mode: 'driving', summary: l('La fontana dei diavoli, in contrada Urselluzzo. Una sosta da raggiungere preferibilmente in auto.', 'The Fountain of the Devils, in contrada Urselluzzo. A separate stop, best reached by car.') },
    ],
    tips: [
      { title: l('Scarpe comode e pause', 'Comfortable shoes and breaks'), text: l('Il percorso nel paese presenta pendenze e possibili scalinate. Scegli le strade in base alle tue esigenze e lascia tempo alle soste.', 'Town streets include slopes and possible steps. Choose streets that suit your needs and allow time for breaks.') },
      { title: l('Verifica gli accessi', 'Check access'), text: l('La visita agli interni dell’Abbazia, alla Cateva e alla Grotta va verificata prima di partire. Rispetta le celebrazioni e il raccoglimento delle persone presenti.', 'Check access to the abbey, Cateva and cave before setting off. Respect services and people at prayer.') },
      { title: l('Una sosta in auto', 'A stop by car'), text: l('La Fontana di Maimone è una tappa distinta dalla passeggiata nel centro. La mappa mostra i luoghi; le indicazioni per raggiungerli si aprono in Google Maps.', 'Maimone Fountain is separate from the walk in town. The map shows the places; directions open in Google Maps.') },
    ],
    sources: [
      { title: 'Pro Loco Agira · Abbazia di San Filippo · Salvatore Rocca', url: 'https://www.prolocoagira.it/wp/2017/06/21/abbazia-di-s-filippo/' },
      { title: 'Pro Loco Agira · Grotta di San Filippo · Salvatore Rocca', url: 'https://www.prolocoagira.it/wp/2017/06/22/grotta-di-san-filippo/' },
      { title: 'Agira.org · La vita di San Filippo d’Agira · Luoghi di culto', url: 'https://www.agira.org/Pubblicazioni/la-vita-di-san-filippo-dagira/Luoghi-di-culto.html' },
    ],
  };
}
