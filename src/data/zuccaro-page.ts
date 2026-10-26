import type { Locale } from '../lib/i18n';
import type { SightPage } from './sight-pages';

export function getZuccaroPage(lang: Locale): SightPage {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  return {
    id: 'zuccaro',
    name: l("Palazzo baronale Zuccaro", "Palazzo baronale Zuccaro"),
    category: l("Una dimora, secoli di memorie", "A residence, centuries of memories"),
    title: l("Palazzo baronale Zuccaro ad Agira: storia e visita | Hello Agira", "Palazzo baronale Zuccaro in Agira: history and visiting | Hello Agira"),
    description: l("Scopri Palazzo Zuccaro ad Agira, accanto a Piazza Garibaldi: il balcone di Garibaldi, il salone decorato e le fotografie della mostra del 2024.", "Discover Palazzo Zuccaro in Agira, beside Piazza Garibaldi: Garibaldi’s balcony, the decorated reception room and photographs of the 2024 exhibition."),
    introduction: l("Una dimora baronale nel cuore di Agira, tra architettura barocca, decorazioni neoclassiche e memorie che attraversano i secoli.", "A baronial residence in the heart of Agira, with Baroque architecture, Neoclassical decoration and memories spanning the centuries."),
    location: l("Via Vittorio Emanuele · Piazza Garibaldi · Agira", "Via Vittorio Emanuele · Piazza Garibaldi · Agira"),
    visitorNote: l("La facciata è visibile dalla strada. Verifica in anticipo le possibilità di accesso agli interni e le aperture in occasione di eventi.", "The facade is visible from the street. Check indoor access arrangements and openings during events in advance."),
    image: 'zuccaroAnello9643',
    mapQuery: 'Palazzo Zuccaro, Via Vittorio Emanuele, Piazza Garibaldi, Agira, Sicilia',
    facts: [
      { label: l("Dove", "Location"), value: l("Accanto a Piazza Garibaldi", "Beside Piazza Garibaldi") },
      { label: l("Origini", "Origins"), value: l("Fine del Quattrocento · ricostruzione del 1677", "Late 15th century · rebuilding project in 1677") },
      { label: l("Da osservare", "Look out for"), value: l("Balcone, lapide e salone di rappresentanza", "Balcony, plaque and reception room") },
      { label: l("Interni", "Interior"), value: l("Aperture da verificare", "Check opening arrangements") },
    ],
    story: [
      { title: l("Le origini della dimora.", "The origins of the residence."), paragraphs: [
        l("Accanto a piazza Garibaldi, lungo via Vittorio Emanuele, Palazzo Zuccaro racconta una parte importante della storia civile di Agira.", "Beside Piazza Garibaldi, on Via Vittorio Emanuele, Palazzo Zuccaro tells an important part of Agira’s civic history."),
        l("Antica residenza degli Zuccaro, baroni di Cuticchi e di Sant’Andrea, il palazzo ha accolto ospiti, incontri e occasioni di vita culturale. Il prospetto, il balcone centrale e il salone di rappresentanza conservano tracce delle trasformazioni della dimora e del ruolo della famiglia nella storia del paese.", "The former residence of the Zuccaro barons of Cuticchi and Sant’Andrea, the palace has welcomed guests, gatherings and cultural occasions. Its facade, central balcony and reception room preserve traces of the residence’s transformations and the family’s role in the town’s history."),
        l("Le informazioni storiche locali riconducono le origini del palazzo a una costruzione della fine del Quattrocento, successivamente ampliata e trasformata.", "Local historical accounts trace the palace’s origins to a building of the late 15th century, later enlarged and remodelled."),
        l("La ricostruzione è collegata ad un progetto del 1677, voluto da Francesco Zuccaro. Nel 1658 questi aveva acquistato il feudo di Cuticchi, dando avvio al ramo baronale della famiglia.", "The rebuilding is associated with a project commissioned by Francesco Zuccaro in 1677. In 1658 he had purchased the Cuticchi estate, establishing the family’s baronial branch."),
        l("La nuova residenza doveva rappresentare il prestigio raggiunto dal casato: un’abitazione capace di accogliere la vita familiare e, insieme, gli incontri e le occasioni pubbliche dell’aristocrazia locale.", "The new residence was intended to express the family’s prestige: a home for family life as well as gatherings and public occasions of the local aristocracy."),
      ] },
      { title: l("Gli Zuccaro e Agira.", "The Zuccaro family and Agira."), paragraphs: [
        l("La storia della famiglia si intreccia con quella del centro urbano e delle sue istituzioni.", "The family’s history is intertwined with that of the town and its institutions."),
        l("Un legame significativo riguarda la vicina chiesa di Sant’Antonio di Padova: le fonti locali ricordano la donazione di un terreno degli Zuccaro di Cuticchi per i lavori del 1567.", "One significant connection concerns the nearby Church of Saint Anthony of Padua: local sources record a donation of land by the Zuccaro of Cuticchi for the works of 1567."),
        l("Palazzo e chiesa permettono così di leggere, nello spazio di una breve passeggiata, il rapporto tra dimore nobiliari, luoghi di culto e trasformazioni della città.", "A short walk between palace and church reveals the relationship between noble residences, places of worship and changes in the town."),
      ] },
      { title: l("Il prospetto e il balcone centrale.", "The facade and central balcony."), paragraphs: [
        l("Il prospetto del palazzo risente del gusto barocco della ricostruzione e contribuisce al carattere monumentale di questa parte di Agira.", "The palace facade reflects the Baroque taste of the rebuilding and contributes to the monumental character of this part of Agira."),
        l("Durante la passeggiata, vale la pena fermarsi a osservare la composizione della facciata e il balcone centrale. Quest’ultimo è legato a uno degli episodi più ricordati della storia dell’edificio: il saluto di Giuseppe Garibaldi alla popolazione nel 1862.", "During your walk, stop to look at the facade’s composition and central balcony. The latter is linked to one of the building’s best-remembered episodes: Giuseppe Garibaldi’s address to the people in 1862."),
        l("La lapide commemorativa conserva sulla facciata la memoria di quella visita.", "A commemorative plaque on the facade preserves the memory of that visit."),
      ] },
      { title: l("Il salone di rappresentanza.", "The reception room."), paragraphs: [
        l("Uno degli ambienti principali è il grande salone di rappresentanza, destinato agli incontri e alle occasioni di ricevimento.", "One of the principal rooms is the grand reception room, intended for gatherings and formal occasions."),
        l("La decorazione della volta appartiene a una fase successiva rispetto alla ricostruzione seicentesca e presenta un gusto neoclassico.", "The decoration of the ceiling belongs to a later phase than the 17th-century rebuilding and reflects Neoclassical taste."),
        l("Il soggetto è stato interpretato in relazione alla ricchezza agricola della famiglia: Demetra, dea delle messi, richiamerebbe la fertilità dei possedimenti, mentre la figura fluviale ai suoi piedi potrebbe rappresentare il Dittaino.", "The subject has been interpreted in relation to the family’s agricultural wealth: Demeter, goddess of the harvest, may evoke the fertility of the estates, while the river figure at her feet could represent the Dittaino."),
        l("È una lettura iconografica suggestiva, che collega la decorazione della dimora al paesaggio e alla storia delle campagne agirine.", "This evocative iconographic interpretation connects the residence’s decoration with the landscape and history of Agira’s countryside."),
      ] },
      { title: l("Gli ospiti e le memorie storiche.", "Guests and historical memories."), paragraphs: [
        l("Le ricostruzioni storiche locali ricordano il soggiorno di Vittorio Amedeo II di Savoia, re di Sicilia, nel 1714, durante il suo viaggio nell’isola.", "Local historical accounts record a stay by Victor Amadeus II of Savoy, King of Sicily, in 1714 during his journey around the island."),
        l("Più di un secolo dopo, il 16 agosto 1862, il palazzo ospitò Giuseppe Garibaldi, accolto dal barone Mauro Zuccaro. Dal balcone Garibaldi si rivolse agli agirini: un episodio ancora oggi ricordato dalla lapide.", "More than a century later, on 16 August 1862, the palace hosted Giuseppe Garibaldi, welcomed by Baron Mauro Zuccaro. Garibaldi addressed the people of Agira from the balcony, an episode still commemorated by the plaque."),
        l("Queste presenze testimoniano il ruolo della dimora come luogo di ospitalità e incontro nella storia del paese.", "These visits reflect the residence’s role as a place of hospitality and encounter in the town’s history."),
      ] },
      { title: l("Il restauro e la vita culturale.", "Restoration and cultural life."), paragraphs: [
        l("Tra il 2001 e il 2003 il palazzo è stato interessato da un intervento di restauro, consolidamento e riuso. I lavori hanno riguardato anche il recupero delle decorazioni del salone di rappresentanza.", "Between 2001 and 2003 the palace underwent restoration, structural consolidation and adaptation for reuse. The work also included the recovery of the reception room’s decorations."),
        l("Negli anni successivi gli ambienti hanno accolto iniziative culturali. Il 30 dicembre 2023 Palazzo Zuccaro ha ospitato la cerimonia di consegna della bandiera dei Borghi più belli d’Italia.", "In subsequent years, the rooms have hosted cultural initiatives. On 30 December 2023 Palazzo Zuccaro hosted the flag presentation ceremony of I Borghi più belli d’Italia."),
        l("Nel 2024 il salone delle feste ha accolto la mostra “La moda agirina nel tempo”, dedicata al lavoro delle sarte del paese. Sono occasioni che aggiungono nuovi capitoli alla storia della dimora.", "In 2024 the reception room hosted “La moda agirina nel tempo”, an exhibition devoted to the work of the town’s dressmakers. Such occasions add new chapters to the residence’s history."),
      ] },
      { title: l("Palazzo Zuccaro nella tua visita.", "Including Palazzo Zuccaro in your visit."), paragraphs: [
        l("Il palazzo si trova in via Vittorio Emanuele, accanto alla centralissima piazza Garibaldi. Puoi inserirlo in una passeggiata che comprende la chiesa di Sant’Antonio di Padova e prosegue verso gli altri luoghi del centro storico.", "The palace stands on Via Vittorio Emanuele, beside the central Piazza Garibaldi. Include it in a walk taking in the Church of Saint Anthony of Padua and other places in the historic centre."),
        l("La facciata e la lapide si possono osservare dalla strada. Per visitare gli ambienti interni, verifica preventivamente le possibilità di accesso o le aperture previste in occasione di eventi.", "The facade and plaque can be viewed from the street. To visit the interior, check access arrangements or openings scheduled for events in advance."),
      ] },
    ],
    highlights: [
      { title: l("Il balcone e la lapide", "The balcony and plaque"), text: l("Dalla strada osserva il balcone legato alla visita di Garibaldi del 1862 e la lapide commemorativa.", "From the street, look at the balcony linked to Garibaldi’s 1862 visit and the commemorative plaque.") },
      { title: l("La volta del salone", "The reception room ceiling"), text: l("Se gli interni sono aperti, alza lo sguardo verso le decorazioni neoclassiche.", "If the interior is open, look up at the Neoclassical decoration.") },
      { title: l("La memoria delle sarte", "The dressmakers’ legacy"), text: l("Le fotografie della mostra del 2024 raccontano gli abiti e le persone che hanno animato il salone.", "Photographs of the 2024 exhibition document the garments and people who brought the room to life.") },
    ],
    practical: [
      { title: l("Prima della visita", "Before your visit"), text: l("La facciata è visibile dalla strada. Verifica in anticipo le possibilità di accesso agli interni e le aperture in occasione di eventi.", "The facade is visible from the street. Check indoor access arrangements and openings during events in advance.") },
      { title: l("Le fotografie", "The photographs"), text: l("Gli otto scatti di Filippo Anello documentano la mostra “La moda agirina nel tempo” del 2024. L’allestimento non indica una mostra permanente.", "The eight photographs by Filippo Anello document the 2024 exhibition “La moda agirina nel tempo”. The display shown is not presented as a permanent exhibition.") },
    ],
    gallery: [
      { key: "zuccaroAnello9643", title: l("Il salone e la volta decorata durante la mostra del 2024", "The reception room and decorated ceiling during the 2024 exhibition") },
      { key: "zuccaroAnello9613", title: l("Gli abiti esposti nel salone di rappresentanza", "Garments displayed in the reception room") },
      { key: "zuccaroAnello9615", title: l("Dettagli degli abiti della mostra “La moda agirina nel tempo”", "Garment details at the “La moda agirina nel tempo” exhibition") },
      { key: "zuccaroAnello9050", title: l("La scala illuminata in occasione della mostra", "The illuminated staircase during the exhibition") },
      { key: "zuccaroAnello9053", title: l("L’ingresso allestito per la mostra del 2024", "The entrance arranged for the 2024 exhibition") },
      { key: "zuccaroAnello2975", title: l("Un momento di incontro durante la mostra", "A gathering during the exhibition") },
      { key: "zuccaroAnello3505", title: l("Un intervento nel salone durante la mostra", "A talk in the reception room during the exhibition") },
      { key: "zuccaroAnello9556", title: l("Una fotografia di gruppo nel salone della mostra", "A group photograph in the exhibition room") },
    ],
    sources: [],
  };
}
