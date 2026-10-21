import type { Locale } from '../lib/i18n';
import type { SightPage } from './sight-pages';

export function getSaintPhilipCavePage(lang: Locale): SightPage {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  return {
    id: 'saintPhilipCave',
    name: l("La Grotta di San Filippo", "The Cave of San Filippo"),
    category: l("Tra la roccia e la memoria", "Between rock and memory"),
    title: l("Grotta di San Filippo ad Agira: storia e visita | Hello Agira", "Cave of San Filippo in Agira: history and visiting | Hello Agira"),
    description: l("Scopri la Grotta di San Filippo in via Grotte ad Agira: un antico ipogeo funerario, la tradizione del santo e le informazioni per la visita.", "Discover the Cave of San Filippo on Via Grotte in Agira: an ancient underground burial chamber, traditions of the saint and visiting advice."),
    introduction: l("Un antico ambiente scavato nella roccia, dove la memoria del luogo incontra i racconti e la devozione per il patrono di Agira.", "An ancient chamber carved into the rock, where the memory of the place meets stories and devotion to Agira’s patron saint."),
    location: l("Via Grotte · Agira", "Via Grotte · Agira"),
    visitorNote: l("Prima di raggiungerla, verifica le modalità di apertura e la possibilità di accedere all’interno. Rispetta gli ambienti e gli eventuali momenti di preghiera.", "Before visiting, check opening arrangements and whether access inside is possible. Respect the surroundings and any moments of prayer."),
    image: 'saintPhilipCaveAnello',
    mapQuery: '37.6559555,14.5178434',
    facts: [
      { label: l("Dove", "Location"), value: l("Via Grotte", "Via Grotte") },
      { label: l("Lettura archeologica", "Archaeological interpretation"), value: l("Ipogeo funerario tardoromano", "Late Roman underground burial chamber") },
      { label: l("Tradizione", "Tradition"), value: l("Prima dimora di San Filippo", "Saint Philip’s first dwelling") },
    ],
    story: [
      { title: l("Un luogo antico, prima del culto.", "An ancient place, before its worship."), paragraphs: [
        l("La tradizione agirina riconosce nella Grotta di San Filippo la prima dimora del santo al suo arrivo in città: un rifugio di preghiera e meditazione, ma anche lo scenario delle lotte contro il demonio tramandate nei racconti popolari.", "Local tradition identifies the Cave of San Filippo as the saint’s first dwelling on arriving in Agira: a refuge for prayer and meditation, and the setting of struggles against the devil passed down in popular stories."),
        l("La lettura archeologica suggerisce una storia ancora precedente. L’ambiente viene infatti interpretato come un ipogeo funerario di età tardoromana, che nel tempo ha conosciuto usi diversi ed è diventato un luogo di devozione.", "The archaeological interpretation suggests an earlier history. The chamber is understood as a late Roman underground burial place, which served different purposes over time and became a place of devotion."),
        l("La grotta conserva elementi riconducibili alla sua funzione funeraria. Tra questi vi sono gli arcosoli: nicchie sormontate da un arco, destinate ad accogliere sepolture.", "The cave retains features associated with its funerary purpose, including arcosolia: arched recesses intended for burials."),
        l("Il materiale storico locale ricorda anche un successivo utilizzo dell’ambiente come stalla, durante il quale le antiche nicchie sarebbero state impiegate come mangiatoie.", "Local historical accounts also describe a later use as a stable, when the ancient recesses are said to have served as feeding troughs."),
        l("Queste tracce raccontano le trasformazioni del luogo: uno spazio che, attraverso i secoli, ha assunto significati e funzioni differenti.", "These traces reveal the transformations of a space that has acquired different meanings and functions over the centuries."),
      ] },
      { title: l("La dimora di San Filippo nella tradizione.", "Saint Philip’s dwelling in tradition."), paragraphs: [
        l("Secondo la tradizione, Filippo avrebbe abitato qui dedicandosi alla preghiera e alla sua missione religiosa. Nei racconti locali compare anche Eusebio, suo compagno.", "According to tradition, Philip lived here, devoting himself to prayer and his religious mission. Local accounts also mention his companion Eusebius."),
        l("Le cavità laterali, interpretate in ambito archeologico come sepolture, sono state riconosciute dalla devozione popolare come i giacigli dei due religiosi.", "The side recesses, interpreted archaeologically as burial places, have been identified in popular devotion as the sleeping places of the two religious men."),
        l("Sono due letture da distinguere, entrambe importanti per comprendere il luogo: una riguarda la struttura antica, l’altra il modo in cui la comunità l’ha ricordata e vissuta.", "These are distinct interpretations, both important to understanding the place: one concerns its ancient structure, the other how the community has remembered and experienced it."),
      ] },
      { title: l("I racconti delle lotte con il demonio.", "Stories of struggles with the devil."), paragraphs: [
        l("La grotta è uno degli scenari delle narrazioni che presentano San Filippo come vincitore delle forze del male.", "The cave is one of the settings of stories portraying Saint Philip as the conqueror of the forces of evil."),
        l("Le lotte con il demonio appartengono alla tradizione religiosa popolare e contribuiscono a spiegare il profondo legame tra gli agirini e il loro patrono. In questi racconti, il santo protegge la comunità e affronta le presenze ostili attraverso la fede.", "The struggles against the devil belong to popular religious tradition and help explain the deep bond between the people of Agira and their patron. In these accounts, the saint protects the community and confronts hostile presences through faith."),
        l("Anche i segni sulle pareti sono entrati in questa memoria: la devozione vi ha riconosciuto testimonianze della presenza e delle gesta di Filippo.", "Marks on the walls have also become part of this memory: devotion has interpreted them as evidence of Philip’s presence and deeds."),
      ] },
      { title: l("L’interno e l’immagine sulla parete.", "The interior and the image on the wall."), paragraphs: [
        l("Le descrizioni del luogo ricordano un ingresso stretto, affiancato dalle cavità funerarie, e uno spazio che si amplia verso il fondo, dove si trova un altare ligneo dipinto.", "Descriptions mention a narrow entrance flanked by burial recesses and a space that widens towards the back, where a painted wooden altar stands."),
        l("Sulla parete a destra dell’altare sono segnalate tracce di una pittura murale, tradizionalmente identificata con San Filippo. Il materiale locale riferisce che alcuni devoti vi riconoscevano invece un’impronta lasciata dal santo durante uno scontro con il demonio.", "Traces of a wall painting, traditionally identified as Saint Philip, are recorded on the wall to the right of the altar. Local accounts report that some worshippers instead recognised an imprint left by the saint during a struggle with the devil."),
        l("La pittura e la sua interpretazione devozionale costituiscono aspetti diversi della storia della grotta. La datazione dell’immagine resta da chiarire.", "The painting and its devotional interpretation are different aspects of the cave’s history. The date of the image remains uncertain."),
      ] },
      { title: l("Un luogo della devozione agirina.", "A place of devotion in Agira."), paragraphs: [
        l("Le testimonianze sul culto ricordano nella grotta la pratica dei sette mercoledì dedicati a San Filippo, in preparazione alla festa del 12 maggio.", "Accounts of worship recall the observance in the cave of the seven Wednesdays dedicated to Saint Philip in preparation for the feast on 12 May."),
        l("Questa consuetudine racconta una dimensione raccolta della devozione: incontri di preghiera in uno spazio appartato, accanto alle celebrazioni pubbliche che coinvolgono la città.", "This custom reveals an intimate aspect of devotion: prayer gatherings in a secluded space, alongside the public celebrations involving the town."),
      ] },
      { title: l("Continua la scoperta di San Filippo.", "Continue discovering Saint Philip."), paragraphs: [
        l("La visita alla grotta può essere affiancata a quella dell’Abbazia di San Filippo, per approfondire la storia del culto e il suo ruolo nella vita di Agira.", "Combine a visit to the cave with San Filippo Abbey to explore the history of the saint’s worship and its role in Agira’s life."),
        l("La grotta e la cripta dell’Abbazia, conosciuta come cateva, sono luoghi distinti: la prima è ricordata come dimora del santo, mentre la seconda è legata alla tradizione della sua sepoltura e al culto delle reliquie.", "The cave and the abbey crypt, known as the cateva, are distinct places: the former is remembered as the saint’s dwelling, while the latter is associated with his traditional burial place and the veneration of relics."),
      ] },
    ],
    highlights: [
      { title: l("Gli arcosoli", "The arcosolia"), text: l("Le nicchie ad arco raccontano l’antica funzione funeraria dell’ambiente.", "The arched recesses reveal the chamber’s ancient funerary purpose.") },
      { title: l("La pittura murale", "The wall painting"), text: l("Le tracce sulla parete a destra dell’altare e la loro interpretazione devozionale.", "Traces on the wall to the right of the altar and their devotional interpretation.") },
      { title: l("La memoria del culto", "Memories of worship"), text: l("I racconti del santo e la pratica dei sette mercoledì in preparazione al 12 maggio.", "Stories of the saint and the observance of the seven Wednesdays before 12 May.") },
    ],
    practical: [
      { title: l("Prima della visita", "Before your visit"), text: l("La grotta si trova in via Grotte. Prima di raggiungerla, verifica le modalità di apertura e la possibilità di accedere all’interno.", "The cave is on Via Grotte. Before visiting, check opening arrangements and whether access inside is possible.") },
      { title: l("Un luogo di devozione", "A place of devotion"), text: l("È un luogo raccolto di devozione: durante la visita rispetta gli ambienti e gli eventuali momenti di preghiera.", "This is an intimate place of devotion: respect the surroundings and any moments of prayer during your visit.") },
    ],
    gallery: [{ key: 'saintPhilipCaveAnello', title: l('L’ingresso della Grotta di San Filippo', 'The entrance to the Cave of San Filippo') }],
    sources: [],
  };
}
