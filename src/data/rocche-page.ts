import type { Locale } from '../lib/i18n';
import type { SightPage } from './sight-pages';

export function getRocchePage(lang: Locale): SightPage {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  return {
    id: 'rocche',
    name: l('Il Quartiere delle Rocche', 'The Rocche Quarter'),
    category: l("Vicoli, catoja e memoria di Agira", "Lanes, catoja and Agira’s heritage"),
    title: l('Quartiere delle Rocche ad Agira: vicoli e storia | Hello Agira', 'The Rocche Quarter in Agira: lanes and history | Hello Agira'),
    description: l("Scopri il Quartiere delle Rocche di Agira: vicoli, catoja, casa museo, eventi dell’associazione e contatti per prenotare una visita.", "Discover Agira’s Rocche Quarter: lanes, catoja, the house museum, association events and contacts for booking a visit."),
    introduction: l("Nella parte alta di Agira, il Quartiere delle Rocche si scopre a piedi, tra vicoli, scalinate e ambienti che custodiscono la memoria della vita quotidiana. Un luogo da attraversare con calma, dove il lavoro dell’Associazione Quartiere Rocche mantiene vivo il legame tra gli spazi del passato e la comunità di oggi.", "In the upper part of Agira, the Rocche Quarter is best explored on foot, among lanes, steps and spaces preserving memories of everyday life. Take your time: the Associazione Quartiere Rocche keeps the connection between these historic places and today’s community alive."),
    image: 'roccheAnelloLanes',
    location: l("Quartiere delle Rocche · Agira", "Rocche Quarter · Agira"),
    mapQuery: 'Via Diodorea, Agira, Enna, Sicilia',
    visitorNote: l("La casa museo è aperta durante gli eventi oppure su prenotazione. Concorda giorno e orario con le referenti.", "The house museum opens during events or by appointment. Arrange the day and time with the contacts below."),
    visitorContacts: [
      { label: l('Signora Naselli · Presidente · +39 327 5352712', 'Ms Naselli · President · +39 327 5352712'), href: 'tel:+393275352712' },
      { label: 'Pina Minnicino · +39 389 9805464', href: 'tel:+393899805464' },
    ],
    facts: [
      { label: l('Accessi', 'Access'), value: 'Via Peschiera · Via Diodorea · Discesa Rosselli · Via Raddusa' },
      { label: l('Parcheggio', 'Parking'), value: l('Piccolo parcheggio in Discesa Rosselli', 'Small car park on Discesa Rosselli') },
      { label: l('Casa museo', 'House museum'), value: l('Durante gli eventi o su prenotazione', 'During events or by appointment') },
      { label: l('Come visitarlo', 'Getting around'), value: l('A piedi, con salite e scale', 'On foot, with slopes and steps') },
    ],
    story: [
      { title: l("La storia, nelle cose di ogni giorno.", "History in everyday life."), paragraphs: [
        l("Visitare le Rocche significa avvicinarsi alla dimensione quotidiana di Agira: le case, i passaggi tra le vie e i catoja, gli ambienti al piano basso delle abitazioni che fanno parte del patrimonio del quartiere.", "Visiting the Rocche brings you closer to everyday life in Agira: houses, passageways and catoja, the ground-level rooms that form part of the quarter’s heritage."),
        l("Durante le manifestazioni, alcuni di questi spazi si aprono ai visitatori e diventano luoghi di incontro, allestimento e racconto. Il quartiere si anima attraverso le persone che lo abitano e che ne curano la memoria.", "During events, some of these spaces open to visitors, becoming settings for displays, stories and encounters. The quarter comes alive through the people who live here and care for its heritage."),
      ] },
      { title: l("Un’associazione, tante storie da tramandare.", "An association with many stories to share."), paragraphs: [
        l("Salvatore Anello fondò l’Associazione Quartiere Rocche, contribuendo alla valorizzazione delle tradizioni e della memoria del quartiere. Oggi l’associazione è presieduta dalla signora Naselli e prosegue la propria attività attraverso appuntamenti che riuniscono abitanti e visitatori.", "Salvatore Anello founded the Associazione Quartiere Rocche, helping preserve and share the quarter’s traditions and memories. Today, Ms Naselli is its president, and the association continues its work through events bringing residents and visitors together."),
        l("Sulla sede dell’associazione si trova una targa che ricorda Salvatore Anello. La sede e la casa museo sono due luoghi distinti: quest’ultima si trova poco più sotto.", "A plaque on the association’s premises commemorates Salvatore Anello. The premises and the house museum are separate places: the museum is a little further downhill."),
      ] },
      { title: l("La casa museo: un incontro con la memoria del quartiere.", "The house museum: discovering the quarter’s memories."), paragraphs: [
        l("La casa museo è una tappa per chi desidera approfondire la conoscenza delle Rocche e della sua storia quotidiana.", "The house museum is a stop for visitors wishing to learn more about the Rocche and its everyday history."),
        l("È aperta durante le giornate degli eventi organizzati dall’associazione. Per visitarla in altri momenti è possibile prenotare, concordando direttamente giorno e orario con la presidente, signora Naselli (+39 327 5352712), oppure con Pina Minnicino (+39 389 9805464).", "It opens during the association’s events. At other times, book a visit by arranging the day and time directly with the president, Ms Naselli (+39 327 5352712), or Pina Minnicino (+39 389 9805464)."),
      ] },
      { title: l("Due appuntamenti per vivere le Rocche.", "Two events to experience the Rocche."), paragraphs: [
        l("Passaggiando lungo la nostra storia è la manifestazione principale dell’Associazione Quartiere Rocche e si svolge solitamente il 1° agosto. È un’occasione per scoprire il quartiere attraverso le iniziative dedicate alla sua storia e alla sua memoria.", "Passaggiando lungo la nostra storia is the Associazione Quartiere Rocche’s main event, usually held on 1 August. It offers an opportunity to discover the neighbourhood through activities celebrating its history and memories."),
        l("Natale al quartiere Rocche si svolge intorno al 12 e 13 dicembre. Nei catoja si aprono i presepi allestiti per l’occasione ed è possibile gustare street food della tradizione.", "Natale al quartiere Rocche takes place around 12–13 December. Nativity displays open in the catoja, and visitors can enjoy traditional street food."),
        l("Durante entrambi gli appuntamenti è aperta anche la casa museo. Le date e i programmi delle singole edizioni vanno verificati con l’associazione.", "The house museum also opens during both events. Check each edition’s dates and programme with the association."),
      ] },
    ],
    highlights: [
      { title: l('I percorsi', 'The routes'), text: l('Segui con lo sguardo il modo in cui vicoli, curve e scale collegano i diversi livelli del quartiere.', 'Notice how lanes, turns and steps connect the different levels of the quarter.') },
      { title: l('Le soglie', 'The thresholds'), text: l('Osserva gli ingressi rialzati e i piccoli spazi tra le abitazioni e la strada, rispettando gli ambienti privati.', 'Look at raised doorways and the small spaces between houses and streets, while respecting private property.') },
      { title: l('La memoria condivisa', 'Shared memory'), text: l('L’associazione e la Casa Museo raccontano il legame del quartiere con la cultura contadina di Agira.', 'The association and house museum tell the story of the quarter’s ties to Agira’s rural heritage.') },
    ],
    practical: [
      { title: l("Da dove si accede al quartiere?", "How do I reach the quarter?"), text: l("Gli accessi sono Via Peschiera, Via Diodorea, Discesa Rosselli e Via Raddusa. Da questi punti si può proseguire a piedi. La mappa indica Via Diodorea come riferimento, non l’ingresso della casa museo.", "Access is from Via Peschiera, Via Diodorea, Discesa Rosselli and Via Raddusa. Continue on foot from these points. The map marks Via Diodorea as a reference, rather than the house museum entrance.") },
      { title: l("Dove si può parcheggiare?", "Where can I park?"), text: l("In Discesa Rosselli si trova un piccolo parcheggio. I posti sono limitati, soprattutto durante le manifestazioni.", "There is a small car park on Discesa Rosselli. Spaces are limited, particularly during events.") },
      { title: l("Quando si può visitare la casa museo?", "When can I visit the house museum?"), text: l("Durante gli eventi dell’associazione oppure su prenotazione: signora Naselli, presidente, +39 327 5352712; Pina Minnicino, +39 389 9805464.", "During the association’s events or by appointment: Ms Naselli, president, +39 327 5352712; Pina Minnicino, +39 389 9805464.") },
      { title: l("Come prepararsi alla passeggiata?", "How should I prepare for the walk?"), text: l("Il percorso attraversa vicoli, dislivelli e scalinate. Sono consigliate scarpe comode; per esigenze di mobilità è preferibile concordare prima il percorso con le referenti.", "The walk includes lanes, slopes and steps. Wear comfortable shoes; if you have mobility requirements, discuss a suitable route with the contacts before visiting.") },
    ],
    gallery: [
      { key: 'roccheAnelloLanes', title: l('Vicoli e ingressi tra le case', 'Lanes and doorways among the houses') },
      { key: 'roccheAnelloAssociation', title: l('La sede dell’Associazione Quartiere Rocche', 'The Associazione Quartiere Rocche premises') },
      { key: 'roccheAnelloSteps', title: l('Le scalinate e le murature del quartiere', 'Steps and masonry in the quarter') },
      { key: 'roccheAnelloCourtyard', title: l("Tra le case e i vicoli delle Rocche, in bianco e nero", "Houses and lanes in the Rocche Quarter, in black and white") },
      { key: 'roccheAnelloLandscape', title: l("Le case sulla roccia e il paesaggio", "Houses on the rock and the surrounding landscape") },
    ],
    sources: [
      { title: 'Pro Loco Agira · Quartiere Rocche', url: 'https://www.prolocoagira.it/wp/2017/06/22/quartiere-delle-rocche/' },
      { title: 'Agira città d’arte · Rita Loredana Foti e Salvatore Longo Minnolo', url: 'https://www.agira.org/Sintesi-storiche/agira-citta-darte.html' },
      { title: 'I Borghi più belli d’Italia · Agira', url: 'https://borghipiubelliditalia.it/borgo/agira/' },
    ],
  };
}
