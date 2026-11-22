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
    programmeText: l('Dalle 20:00 gli antichi mestieri animano la parte alta di Agira. Alle 22:00 si celebra la Messa nella chiesa del SS. Salvatore; alle 23:00 le scene sono rappresentate a Largo Raccomandata. A mezzanotte, al Castello, prende vita la Natività.', 'From 8 pm, traditional crafts bring upper Agira to life. Christmas Night Mass takes place at the Church of SS. Salvatore at 10 pm; the scenes are performed at Largo Raccomandata at 11 pm. At midnight, the Nativity is staged at the castle.'),
    programme: [
      { time: '20:00', datetime: '2026-12-24T20:00:00+01:00', title: l('Gli antichi mestieri', 'Traditional crafts'), place: l('Zona alta di Agira', 'Upper Agira'), text: l('Rievocazione degli antichi mestieri.', 'Re-enactment of traditional crafts.') },
      { time: '22:00', datetime: '2026-12-24T22:00:00+01:00', title: l('Santa Messa della notte di Natale', 'Christmas Night Mass'), place: l('Chiesa del SS. Salvatore', 'Church of SS. Salvatore'), text: l('La celebrazione religiosa nella chiesa di piazza Roma.', 'The religious service at the church in Piazza Roma.') },
      { time: '23:00', datetime: '2026-12-24T23:00:00+01:00', title: l('Le scene del racconto', 'Scenes from the story'), place: 'Largo Raccomandata', text: l('Michea, Annunciazione, Erode e Censimento.', 'Micah, the Annunciation, Herod and the Census.') },
      { time: '00:00', datetime: '2026-12-25T00:00:00+01:00', title: l('La Natività', 'The Nativity'), place: l('Castello di Agira', 'Agira Castle'), text: l('Nella notte tra il 24 e il 25 dicembre, la rappresentazione della nascita di Gesù.', 'On the night of 24–25 December, the performance of the birth of Jesus.') },
    ],
    contacts: ['338 4411865', '335 1330161', '328 1389446', '338 1185764'],
    scenes: [
      { title: l('Michea · Le profezie', 'Micah · The prophecies'), text: l('La novità del 2026 introduce il profeta Michea e l’annuncio legato a Betlemme: un piccolo villaggio al centro dell’attesa della nascita di Gesù.', 'New for 2026, the prophet Micah introduces the prophecy concerning Bethlehem: a small village at the heart of the anticipation of Jesus’s birth.') },
      { title: l('Erode · Il potere', 'Herod · Power'), text: l('Alla corte di Erode giunge un’antica profezia, mentre il sovrano cerca di lasciare il proprio nome nella storia attraverso palazzi e fortezze.', 'An ancient prophecy reaches Herod’s court as the ruler seeks to secure his legacy through palaces and fortresses.') },
      { title: l('L’Annunciazione', 'The Annunciation'), text: l('L’angelo Gabriele visita Maria e annuncia la nascita di Gesù.', 'The angel Gabriel visits Mary and announces the birth of Jesus.') },
      { title: l('Il Censimento', 'The Census'), text: l('Il decreto di Cesare Augusto chiama la popolazione a registrarsi nei luoghi d’origine.', 'Caesar Augustus’s decree calls on the population to register in their places of origin.') },
      { title: l('La Natività', 'The Nativity'), text: l('Maria e Giuseppe trovano riparo in una capanna, dove nasce Gesù.', 'Mary and Joseph find shelter in a hut, where Jesus is born.') },
    ],
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
      {
        id: 'figuranti', label: l('04 / I VOLTI DEL PRESEPE', '04 / THE FACES OF THE NATIVITY'),
        title: l('Come si scelgono i figuranti.', 'How the cast is chosen.'),
        paragraphs: [
          l('A ricreare la Betlemme di un tempo sono le persone della comunità. Chi desidera prendere parte alla rappresentazione può dare la propria disponibilità, senza candidarsi per un personaggio preciso. Il gruppo che si occupa dei figuranti assegna poi i ruoli, tenendo conto delle caratteristiche e delle qualità di ciascuno. C’è chi interpreta un Re Magio, un viandante, Erode, un soldato o un pastore, e chi dà vita a uno degli antichi mestieri.', 'It is the people of Agira who bring the Bethlehem of long ago to life. Anyone who wishes to take part can let the organisers know they are available without applying for a specific part. The casting group then assigns roles, taking each person’s qualities into account. Participants might play one of the Magi, a traveller, Herod, a soldier or a shepherd, or demonstrate a traditional craft.'),
          l('A ogni figurante si chiede serietà, rispetto e partecipazione: il Presepe è una rappresentazione religiosa che racconta la nascita di Gesù e il suo significato. Ogni ruolo, anche il più discreto, contribuisce al racconto.', 'Every participant is asked to approach the performance with care, respect and commitment. The Living Nativity is a religious re-enactment that tells the story of Jesus’s birth and its meaning. Every role, however small, helps tell that story.'),
          l('Per Maria e Giuseppe si segue una tradizione a parte. Non ci sono candidature: un piccolo gruppo sceglie direttamente, tra le persone che conosce nella comunità, una giovane non sposata per interpretare Maria e un uomo più maturo per il ruolo di Giuseppe.', 'Mary and Joseph are chosen according to a separate tradition. There are no applications: a small group selects people it knows in the community, choosing a young unmarried woman to play Mary and an older man to play Joseph.'),
          l('Il gruppo va a casa della ragazza scelta per il ruolo di Maria e le comunica la notizia alla presenza di entrambi i genitori. Chi interpreta Giuseppe viene avvisato solo pochi giorni prima della rappresentazione. A entrambi si chiede di tenere la notizia per sé fino alla sera del 24 dicembre, quando i loro nomi vengono svelati alla comunità.', 'The group visits the young woman chosen to play Mary at home and tells her in the presence of both her parents. The person chosen to play Joseph is told only a few days before the performance. Both are asked to keep the news to themselves until Christmas Eve, when their names are revealed to the community.'),
        ],
      },
    ],
    faqs: [
      { q: l('Quando si svolge?', 'When does it take place?'), a: l('Giovedì 24 dicembre 2026, dalle 20:00. La Natività è in programma a mezzanotte, cioè alle 00:00 del 25 dicembre.', 'Thursday 24 December 2026, from 8 pm. The Nativity is scheduled for midnight, at 00:00 on 25 December.') },
      { q: l('Dove si svolgono le scene?', 'Where are the scenes performed?'), a: l('Gli antichi mestieri sono nella zona alta dalle 20:00. Alle 23:00 Michea, Annunciazione, Erode e Censimento sono a Largo Raccomandata; a mezzanotte la Natività è al Castello.', 'Traditional crafts take place in the upper town from 8 pm. At 11 pm, Micah, the Annunciation, Herod and the Census are performed at Largo Raccomandata; at midnight, the Nativity takes place at the castle.') },
      { q: l('Dove parcheggiare? Ci sono navette?', 'Where can I park? Are there shuttle buses?'), a: l('Si consiglia di parcheggiare nella zona bassa del paese o, comunque, all’ingresso di Agira. Da lì sarà possibile usufruire del servizio gratuito di navette, che accompagneranno i visitatori nella zona dell’evento e, al termine della visita, li riaccompagneranno al punto di partenza. Saranno presenti diverse fermate delle navette: sarà sufficiente attendere in corrispondenza degli appositi cartelli.', 'Visitors are advised to park in the lower part of town or near the entrances to Agira. A free shuttle service will take visitors to the event area and bring them back to their starting point at the end of their visit. Several shuttle stops will be available: simply wait at one of the designated signs.') },      
      { q: l('Ingresso e prenotazioni', 'Admission and booking'), a: l('L’evento è completamente gratuito e non è necessaria alcuna prenotazione.', 'Admission to the event is completely free and no advance booking is required.') },      { q: l('Come raggiungere Agira?', 'How do I reach Agira?'), a: l('Dall’autostrada A19 Palermo–Catania, prendi lo svincolo di Agira e prosegui per circa 15 km.', 'From the A19 Palermo–Catania motorway, take the Agira exit and continue for approximately 15 km.') },
      { q: l('Come prepararsi alla visita?', 'How should I prepare?'), a: l('La visita si svolge di sera, all’aperto e lungo strade in salita e scalinate. Scegli abbigliamento caldo e scarpe comode; per esigenze di mobilità verifica preventivamente i percorsi dell’edizione.', 'The visit takes place outdoors at night, along sloping streets and steps. Wear warm clothing and comfortable shoes; if you have mobility requirements, check the edition’s routes in advance.') },
    ],
  };
}
