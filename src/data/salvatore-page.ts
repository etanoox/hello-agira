import type { Locale } from '../lib/i18n';
import type { SightPage } from './sight-pages';

export function getSalvatorePage(lang: Locale): SightPage {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  return {
    id: 'salvatore',
    name: l('La Collegiata del SS. Salvatore', 'The Collegiate Church of SS. Salvatore'),
    category: l('Architettura, arte e memoria', 'Architecture, art and memory'),
    title: l('Collegiata del SS. Salvatore ad Agira: storia e visita | Hello Agira', 'Collegiate Church of SS. Salvatore in Agira: history and visiting | Hello Agira'),
    description: l('Scopri la Collegiata del SS. Salvatore di Agira: origini normanne, capitelli scolpiti, tesoro sacro e Aron in pietra del 1454. Foto di Filippo Anello.', 'Discover Agira’s Collegiate Church of SS. Salvatore: Norman origins, carved capitals, sacred treasures and the stone Aron of 1454. Photos by Filippo Anello.'),
    introduction: l('Ai piedi dell’altura del Castello, il Santissimo Salvatore custodisce secoli di storia religiosa e artistica. Tra colonne, cappelle e memorie della comunità ebraica, la visita invita a riconoscere le diverse epoche di Agira.', 'At the foot of the castle hill, the church of the Most Holy Saviour preserves centuries of religious and artistic history. Columns, chapels and traces of the Jewish community reveal different chapters in Agira’s past.'),
    image: 'salvatoreAnelloAltar',
    location: l('Collegiata del SS. Salvatore · Piazza Roma · Agira', 'Collegiate Church of SS. Salvatore · Piazza Roma · Agira'),
    mapQuery: 'Collegiata Santissimo Salvatore, Piazza Roma, Agira',
    visitorNote: l('Verifica con la chiesa l’apertura e la possibilità di osservare le singole opere. Le celebrazioni e le esigenze di culto possono condizionare la visita.', 'Check opening hours and arrangements for viewing individual works with the church. Services and worship may affect your visit.'),
    facts: [
      { label: l('Origini', 'Origins'), value: l('Epoca normanna · XII secolo', 'Norman period · 12th century') },
      { label: l('Collegiata dal', 'Collegiate status since'), value: '1689' },
      { label: l('Interno', 'Interior'), value: l('Tre navate · pianta quasi quadrata', 'Three naves · almost square plan') },
      { label: l('Da non perdere', 'Look out for'), value: l('Capitelli, cappelle e Aron del 1454', 'Capitals, chapels and the Aron of 1454') },
    ],
    story: [
      {
        title: l('Una chiesa, molte epoche.', 'One church, many periods.'),
        paragraphs: [
          l('Tra le chiese più antiche di Agira, il Santissimo Salvatore sorge nel centro storico, sotto l’altura del Castello. L’impianto originario risale almeno al XII secolo, in epoca normanna. Per secoli la sua storia fu legata all’Abbazia di San Filippo, già Santa Maria Latina di Gerusalemme.', 'Among Agira’s oldest churches, SS. Salvatore stands in the historic centre below the castle hill. Its original layout dates back at least to the 12th century, during the Norman period. For centuries, its history was closely tied to San Filippo Abbey, formerly Santa Maria Latina of Jerusalem.'),
          l('La facciata tardo-rinascimentale, con elementi barocchi, assunse il suo aspetto soprattutto a metà Seicento, come documenta l’iscrizione sul portale. Anche il campanile conserva tracce di epoche diverse e dei rifacimenti seguiti al terremoto del 1693.', 'The late Renaissance façade, with Baroque elements, largely took shape in the mid-17th century, as recorded by the inscription on its portal. The bell tower also retains traces of different periods and rebuilding after the earthquake of 1693.'),
        ],
      },
      {
        title: l('Tre navate e capitelli diversi.', 'Three naves and varied capitals.'),
        paragraphs: [
          l('L’interno ha una pianta insolita, pressoché quadrata. Due file di colonne sorreggono le arcate e dividono lo spazio in tre navate, sotto una copertura lignea con capriate nella navata centrale.', 'The interior has an unusual, almost square plan. Two rows of columns support the arches and divide the space into three naves, beneath a wooden roof with exposed trusses in the central nave.'),
          l('I capitelli scolpiti, diversi l’uno dall’altro, sono tra i dettagli da osservare con maggiore attenzione: volute, motivi vegetali e figure testimoniano la varietà del linguaggio decorativo della chiesa.', 'The carved capitals, each different from the others, reward a closer look: scrolls, plant motifs and figures reveal the variety of the church’s decorative vocabulary.'),
        ],
      },
      {
        title: l('La cappella di San Filippo Diacono.', 'The chapel of Saint Philip the Deacon.'),
        paragraphs: [
          l('La navata sinistra fu per secoli di pertinenza dell’Abbazia di San Filippo e destinata al culto di San Filippo Diacono, chiamato localmente San Filippu u nicu o San Fulippuzzu. Si tratta di una figura distinta da San Filippo d’Agira, patrono della città.', 'For centuries, the left nave belonged to San Filippo Abbey and was dedicated to Saint Philip the Deacon, locally known as San Filippu u nicu or San Fulippuzzu. He is distinct from Saint Philip of Agira, the town’s patron saint.'),
          l('Alla fine del Cinquecento l’altare venne arricchito da una raffinata cornice scolpita. L’antico cancello in ferro delimitava lo spazio che custodiva l’arca delle reliquie cittadine. Reliquie e oggetti devozionali, alcuni tradizionalmente collegati ai Luoghi Santi della Palestina, raccontano la storia religiosa della comunità.', 'In the late 16th century, the altar was embellished with an elaborate carved frame. An old iron gate enclosed the area where the town’s reliquary chest was kept. Relics and devotional objects, some traditionally associated with the Holy Places of Palestine, tell the story of the community’s religious life.'),
        ],
      },
      {
        title: l('La mitria e il pastorale.', 'The mitre and the crozier.'),
        paragraphs: [
          l('Tra gli oggetti preziosi legati alla chiesa figurano una mitria e un pastorale degli abati di Santa Maria Latina e San Filippo. Le attribuzioni e le datazioni sono state discusse nel tempo: è opportuno distinguere le tradizioni devozionali dalle interpretazioni degli studi.', 'The precious objects associated with the church include a mitre and a crozier linked to the abbots of Santa Maria Latina and San Filippo. Their attribution and dating have been debated over time, and devotional traditions should be distinguished from scholarly interpretations.'),
          l('Secondo gli studi richiamati dalla sintesi storica locale, la mitria nella forma attuale sarebbe stata realizzata tra il 1552 e il 1557, riutilizzando smalti, gemme, perle e ricami più antichi. Il bacolo del pastorale è generalmente riferito al XIV secolo. Entrambi testimoniano la raffinatezza dell’arte suntuaria siciliana.', 'According to the studies discussed in the local historical account, the mitre in its present form was made between 1552 and 1557, reusing older enamels, gems, pearls and embroidery. The crook of the crozier is generally dated to the 14th century. Both attest to the refinement of Sicilian luxury craftsmanship.'),
        ],
      },
      {
        title: l('San Filippo e il demonio.', 'Saint Philip and the demon.'),
        paragraphs: [
          l('Una preziosa tavola dipinta raffigura San Filippo d’Agira in abiti religiosi, con un libro e il demonio incatenato sotto i piedi. L’immagine richiama la tradizione agiografica del santo liberatore dalle presenze demoniache.', 'A precious painted panel shows Saint Philip of Agira in religious robes, holding a book, with a chained demon beneath his feet. The image evokes the hagiographic tradition of the saint as a deliverer from demonic forces.'),
          l('La tavola è considerata parte superstite di un antico polittico: autore e datazione non sono certi, ma è stata proposta una collocazione alla fine del Trecento. Nella navata destra, l’altare della Madonna del Rosario conserva invece una tela settecentesca dedicata alla Vergine e ai santi della tradizione domenicana.', 'The panel is considered a surviving part of an old polyptych. Its artist and date are uncertain, although a late-14th-century date has been proposed. In the right nave, the altar of Our Lady of the Rosary holds an 18th-century painting of the Virgin and saints of the Dominican tradition.'),
        ],
      },
      {
        title: l('Da parrocchia a collegiata.', 'From parish to collegiate church.'),
        paragraphs: [
          l('La documentazione storica locale colloca nel 1689 l’elevazione a collegiata per volontà del vescovo di Catania Francesco Carafa. Lo stesso anno è ricordato da un’iscrizione su un capitello della chiesa.', 'Local historical documentation dates the elevation to collegiate status to 1689, under Francesco Carafa, Bishop of Catania. The same year is recorded in an inscription on one of the church’s capitals.'),
          l('Il Santissimo Salvatore è legato anche alle tradizioni della Settimana Santa. Nella domenica di Pasqua, l’incontro tra Cristo Risorto e la Madonna rinnova un momento particolarmente sentito della vita religiosa agirina.', 'SS. Salvatore is also connected with Holy Week traditions. On Easter Sunday, the meeting between the Risen Christ and the Madonna renews a particularly meaningful moment in Agira’s religious life.'),
        ],
      },
      {
        title: l('L’Aron ha-Qodesh, una memoria in pietra.', 'The Aron ha-Qodesh: memory in stone.'),
        paragraphs: [
          l('Nella navata sinistra è ricomposto l’Aron ha-Qodesh, l’arca destinata a custodire i rotoli della Torah, proveniente dall’antica sinagoga di via Santa Croce. È datato all’anno ebraico 5214, corrispondente al 1454, e conserva la memoria della comunità ebraica medievale di Agira.', 'Reassembled in the left nave is the Aron ha-Qodesh, the ark for Torah scrolls from the former synagogue in Via Santa Croce. Dated to the Hebrew year 5214, corresponding to 1454, it preserves the memory of Agira’s medieval Jewish community.'),
          l('Realizzato in pietra, è indicato dalla Fondazione per i Beni Culturali Ebraici in Italia fra le tre arche sinagogali lapidee più antiche d’Europa. L’iscrizione ebraica, oggi molto deteriorata, richiamava il versetto di Isaia 2,5: un invito alla casa di Giacobbe a camminare nella luce del Signore.', 'Made of stone, it is listed by the Foundation for Jewish Cultural Heritage in Italy among Europe’s three oldest stone synagogue arks. Its now badly worn Hebrew inscription referred to Isaiah 2:5, inviting the house of Jacob to walk in the light of the Lord.'),
          l('L’Aron non apparteneva originariamente alla chiesa. Dopo l’espulsione degli ebrei dalla Sicilia, fra il provvedimento del 1492 e le partenze protratte sino al 1493, l’edificio di Santa Croce fu destinato al culto cristiano. In seguito al suo deterioramento, l’Aron venne recuperato e ricomposto al Santissimo Salvatore. La pagina dedicata approfondisce questa storia e propone le audioguide dell’Aron già disponibili.', 'The Aron was not originally part of the church. After the expulsion of the Jews from Sicily, following the decree of 1492 and departures continuing into 1493, the Santa Croce building was converted to Christian worship. As that building deteriorated, the Aron was recovered and reassembled in SS. Salvatore. Its dedicated page explores this history and offers the existing Aron audio guides.'),
        ],
      },
    ],
    highlights: [
      { title: l('I capitelli', 'The capitals'), text: l('Confronta volute, figure e motivi vegetali: ogni capitello presenta dettagli differenti.', 'Compare scrolls, figures and plant motifs: each capital has different details.') },
      { title: l('La navata sinistra', 'The left nave'), text: l('Riconosci lo spazio della cappella di San Filippo Diacono e il suo legame con l’Abbazia.', 'Identify the chapel of Saint Philip the Deacon and its connection with the abbey.') },
      { title: l('L’Aron', 'The Aron'), text: l('Una struttura in pietra del 1454 restituisce una testimonianza della storia ebraica di Agira.', 'A stone structure from 1454 preserves evidence of Agira’s Jewish history.') },
    ],
    practical: [
      { title: l('Organizzare la visita', 'Planning your visit'), text: l('Verifica gli orari direttamente con la chiesa. La visibilità delle opere e degli oggetti del tesoro può dipendere dalle modalità di accesso.', 'Check opening hours directly with the church. Access arrangements may affect which artworks and treasury objects can be viewed.') },
      { title: l('Durante le celebrazioni', 'During services'), text: l('Mantieni un tono di voce basso e rispetta gli spazi di preghiera. Chiedi prima di fotografare durante le funzioni.', 'Keep your voice low and respect areas used for prayer. Ask before taking photographs during services.') },
      { title: l('Accessibilità', 'Accessibility'), text: l('In presenza di esigenze di mobilità, verifica preventivamente gli ingressi e i percorsi interni con la chiesa.', 'If you have mobility requirements, check entrances and routes through the interior with the church before visiting.') },
    ],
    gallery: [
      { key: 'salvatoreAnelloAltar', title: l('La navata centrale verso l’altare', 'The central nave towards the altar') },
      { key: 'salvatoreAnelloColumns', title: l('Le colonne e la cappella laterale', 'The columns and side chapel') },
      { key: 'salvatoreAnelloEntrance', title: l('La navata verso l’ingresso', 'The nave towards the entrance') },
      { key: 'ssalvatore', title: l('La facciata della Collegiata', 'The collegiate church façade') },
    ],
    sources: [
      { title: 'La chiesa del SS. Salvatore di Agira · Rita Loredana Foti e Salvatore Longo Minnolo', url: 'https://www.agira.org/Sintesi-storiche/la-chiesa-del-ss-salvatore-di-agira.html' },
      { title: 'Fondazione per i Beni Culturali Ebraici in Italia · L’Aron di Agira', url: 'https://www.visitjewishitaly.it/listing/laron-di-agira/' },
      { title: 'Ministero per i beni culturali e ambientali · Italia Judaica, Gli ebrei in Sicilia sino all’espulsione del 1492', url: 'https://dgagaeta.cultura.gov.it/public/uploads/documents/Saggi/Saggi_32.pdf' },
    ],
  };
}
