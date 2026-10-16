import type { Locale } from '../lib/i18n';

export function getNativityFestival(lang: Locale) {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  return {
    title: l('Presepe Vivente di Agira 2026: la notte di Natale | Hello Agira', 'Agira Living Nativity 2026: Christmas Eve | Hello Agira'),
    description: l('Il Presepe Vivente di Agira torna il 24 dicembre 2026 per la 36ª edizione: tradizione, mestieri e Natività al Castello, con le foto di Filippo Sanfilippo.', 'Agira’s Living Nativity returns on 24 December 2026 for its 36th edition: traditional crafts and the Nativity at the castle, photographed by Filippo Sanfilippo.'),
    eyebrow: l('AGIRA · LA NOTTE DI NATALE', 'AGIRA · CHRISTMAS EVE'),
    heading: l('Il Presepe\nVivente di Agira.', 'Agira’s\nLiving Nativity.'),
    intro: l('Una notte in cui le strade diventano racconto. Tra i vicoli del centro storico e i ruderi del Castello, i figuranti danno vita alla Natività e ai gesti della tradizione siciliana.', 'One night when the streets become a story. Between the historic centre’s lanes and the castle ruins, costumed performers bring the Nativity and Sicilian rural traditions to life.'),
    editionTitle: l('Il 24 dicembre, ad Agira.', 'In Agira, on 24 December.'),
    editionText: l('Il prossimo appuntamento è giovedì 24 dicembre 2026, per la 36ª edizione organizzata dall’Associazione Amici del Presepe. La rappresentazione attraversa la parte alta del centro storico e trova il suo momento conclusivo nello scenario del Castello.', 'The next event is Thursday 24 December 2026: the 36th edition, organised by the Amici del Presepe association. The performance winds through the upper historic centre and reaches its conclusion in the setting of the castle.'),
    programmeTitle: l('Il programma della prossima notte.', 'The programme for Christmas Eve.'),
    programmeText: l('La data è annunciata; gli orari delle singole scene, gli accessi e gli eventuali servizi saranno aggiornati con il programma 2026. Le precedenti edizioni hanno animato il paese dalla sera fino alla Natività nella notte di Natale.', 'The date has been announced. Times for individual scenes, access arrangements and any services will be updated with the 2026 programme. Previous editions have animated the town from the evening through to the Nativity on Christmas night.'),
    sections: [
      {
        id: 'racconto', label: l('01 / UNA NOTTE, UN RACCONTO', '01 / ONE NIGHT, ONE STORY'),
        title: l('Il borgo diventa scena.', 'The town becomes the setting.'),
        paragraphs: [
          l('Il Presepe Vivente si svolge il 24 dicembre, nella notte che accompagna Agira al Natale. Il percorso lega il racconto della nascita di Gesù ai luoghi della città: passaggi, cortili e strade della parte alta conducono verso il Castello medievale.', 'The Living Nativity takes place on 24 December, as Agira welcomes Christmas. The route connects the story of Jesus’s birth with the town itself: passages, courtyards and streets in the upper centre lead towards the medieval castle.'),
          l('Maria e Giuseppe, i figuranti e la scena della Natività sono i protagonisti di una rappresentazione che si incontra camminando. Le fotografie raccontano momenti di edizioni precedenti, dalle ambientazioni lungo le vie al raccoglimento della scena finale.', 'Mary and Joseph, the costumed performers and the Nativity scene are at the heart of a performance encountered on foot. The photographs show moments from previous editions, from street settings to the quiet of the final scene.'),
        ],
      },
      {
        id: 'mestieri', label: l('02 / GESTI E TRADIZIONI', '02 / CRAFTS AND TRADITIONS'),
        title: l('Le mani raccontano.', 'Hands tell stories.'),
        paragraphs: [
          l('Accanto al racconto biblico, il Presepe rievoca il lavoro e gli ambienti della tradizione contadina e pastorale. Botteghe, utensili, ceste e oggetti domestici aiutano a ricostruire scene di vita e mestieri del passato.', 'Alongside the biblical story, the Living Nativity evokes the work and settings of rural and pastoral life. Workshops, tools, baskets and household objects help recreate scenes of everyday life and traditional crafts.'),
          l('Nelle immagini di Filippo Sanfilippo, un vasaio lavora l’argilla e il fabbro alza il martello; altre scene mostrano incontri, ambienti domestici e personaggi della rappresentazione. Sono dettagli che danno volto al lavoro dei figuranti.', 'In Filippo Sanfilippo’s images, a potter shapes clay and a blacksmith raises his hammer. Other scenes show encounters, domestic settings and characters from the performance, revealing the people behind it.'),
        ],
      },
      {
        id: 'comunita', label: l('03 / UNA TRADIZIONE CONDIVISA', '03 / A SHARED TRADITION'),
        title: l('Il lavoro di una comunità.', 'A community’s work.'),
        paragraphs: [
          l('L’Associazione Amici del Presepe porta avanti questa tradizione dal 1989. Preparare le ambientazioni e interpretare i personaggi è un lavoro collettivo, che coinvolge chi costruisce, allestisce e mette il proprio tempo a disposizione della manifestazione.', 'The Amici del Presepe association has sustained this tradition since 1989. Building the settings and portraying its characters is a collective effort, involving people who construct, prepare and give their time to the event.'),
          l('Nel 2026 è stato annunciato il riconoscimento di “Miglior Presepe Vivente d’Italia” per il 2025/2026, assegnato all’associazione nell’ambito del 33° Geraci Eventus Praesepium Meeting. Il premio valorizza il lavoro artistico e scenografico della rappresentazione.', 'In 2026, the association announced its “Best Living Nativity in Italy” award for 2025/2026, received at the 33rd Geraci Eventus Praesepium Meeting. The award recognises the artistic and scenic work of the performance.'),
        ],
      },
    ],
    faqs: [
      { q: l('Quando si svolge?', 'When does it take place?'), a: l('Il prossimo appuntamento è il 24 dicembre 2026, 36ª edizione. Gli orari delle scene saranno aggiunti appena sarà disponibile il programma dettagliato del 2026.', 'The next event is on 24 December 2026, its 36th edition. Scene times will be added when the detailed 2026 programme is available.') },
      { q: l('Da dove inizia il percorso?', 'Where does the route begin?'), a: l('La rappresentazione interessa la parte alta del centro storico e il Castello. Il punto di accesso, i percorsi e le indicazioni per il 2026 saranno aggiornati con il programma degli organizzatori.', 'The performance takes place in the upper historic centre and at the castle. Entry points, routes and directions for 2026 will be updated with the organisers’ programme.') },
      { q: l('Ingresso e navette', 'Admission and shuttle buses'), a: l('L’ingresso è tradizionalmente libero. Per le modalità dell’edizione 2026 e l’eventuale servizio navetta, attendi le indicazioni specifiche degli organizzatori.', 'Admission has traditionally been free. Arrangements for the 2026 edition and any shuttle service should be checked against the organisers’ specific announcements.') },
      { q: l('Come prepararsi alla visita?', 'How should I prepare?'), a: l('La visita si svolge di sera, all’aperto e lungo strade in salita e scalinate. Scegli abbigliamento caldo e scarpe comode; per esigenze di mobilità verifica preventivamente i percorsi dell’edizione.', 'The visit takes place outdoors at night, along sloping streets and steps. Wear warm clothing and comfortable shoes; if you have mobility requirements, check the edition’s routes in advance.') },
    ],
  };
}
