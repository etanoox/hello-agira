import type { Locale } from '../lib/i18n';
export function getThanks(lang: Locale) {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  return {
    title: l('Ringraziamenti | Hello Agira', 'Acknowledgements | Hello Agira'),
    description: l('Le persone e le realtà che contribuiscono a Hello Agira con fotografie, conoscenze, materiali e cura del territorio.', 'The people and organisations contributing to Hello Agira through photographs, knowledge, research materials and care for local heritage.'),
    heading: l('Ringraziamenti.', 'Acknowledgements.'),
    eyebrow: l('LE PERSONE DI HELLO AGIRA', 'THE PEOPLE BEHIND HELLO AGIRA'),
    lead: l('Un progetto personale, tante persone da ringraziare.', 'A personal project, with many people to thank.'),
    introduction: [
      l('Hello Agira nasce dal desiderio di raccontare il mio paese e di renderlo più facile da scoprire, per chi lo visita e per chi lo vive ogni giorno.', 'Hello Agira grew out of a wish to tell the story of my hometown and make it easier to discover, both for visitors and for those who live here.'),
      l('È un progetto indipendente e gratuito, che realizzo e curo personalmente. A farlo crescere contribuiscono anche le persone che condividono fotografie, conoscenze, ricordi e suggerimenti, oppure dedicano il proprio tempo a verificare un’informazione e ad aprire una porta.', 'It is an independent, free project that I build and maintain myself. It also grows through the people who share photographs, knowledge, memories and suggestions, or give their time to check a fact or open a door.'),
      l('Questa pagina è un modo per ringraziarle e riconoscere il valore di ciò che hanno messo a disposizione. Continuerà ad aggiornarsi insieme al progetto.', 'This page thanks them and recognises the value of what they have shared. It will continue to grow alongside the project.'),
    ],
    groups: [
      { id: 'conoscenza', label: l('01 / LA STORIA E LA CONOSCENZA', '01 / HISTORY AND KNOWLEDGE'), title: l('Le parole che ci guidano.', 'The words that guide us.'), people: [
        { name: l('Maestro Salvatore Rocca', 'Maestro Salvatore Rocca'), text: l('Un ringraziamento speciale al maestro Salvatore Rocca, dal cui lavoro abbiamo attinto molto per preparare i testi delle audioguide. La ricchezza del materiale raccolto e tramandato è una parte importante di ciò che rende possibile questo progetto. Il suo contributo alla conoscenza di Agira continua così ad accompagnare chi desidera scoprirne la storia.', 'Special thanks to maestro Salvatore Rocca, whose work has provided much of the material used to prepare our audio guide scripts. The wealth of knowledge he has collected and passed on is an important part of what makes this project possible. His contribution to the understanding of Agira continues to guide those wishing to discover its history.') },
      ] },
      { id: 'fotografie', label: l('02 / LE FOTOGRAFIE', '02 / PHOTOGRAPHY'), title: l('Gli sguardi su Agira.', 'Views of Agira.'), people: [
        { name: 'Filippo Anello', text: l('Per le fotografie che accompagnano la scoperta dei monumenti, dei quartieri e del paesaggio di Agira, mostrando tanto i luoghi più riconoscibili quanto i dettagli della vita quotidiana.', 'For the photographs accompanying the discovery of Agira’s monuments, neighbourhoods and landscape, showing its best-known places as well as the details of everyday life.') },
        { name: 'Omero Mugavero', text: l('Per le immagini condivise con il progetto, per il supporto pratico e morale e per le ricerche effettuate.', 'For the images shared with the project, for his practical and moral support, and for the research carried out.') },
        { name: 'Angelo Lambusta', text: l('Per le fotografie del paesaggio, dei panorami e della luce di Agira, che accompagnano i visitatori tra le pagine e gli itinerari.', 'For the photographs of Agira’s landscape, views and light that accompany visitors through these pages and itineraries.') },
        { name: 'Filippo Sanfilippo', text: l('Per le fotografie del Presepe Vivente, che raccontano i figuranti, gli antichi mestieri e i momenti della rappresentazione nella notte di Natale.', 'For the Living Nativity photographs portraying its performers, traditional crafts and scenes from the Christmas Eve performance.') },
      ] },
      { id: 'luoghi', label: l('03 / LA CURA DEI LUOGHI', '03 / CARING FOR PLACES'), title: l('La storia torna a vivere.', 'Bringing history to life.'), people: [
        { name: 'Orazio La Delfa', text: l('Per il materiale condiviso sul Palazzo baronale Manmano Gussio e, prima ancora, per averne curato il recupero e la ristrutturazione. Un impegno concreto che ha restituito valore a un luogo della storia di Agira e ci permette oggi di raccontarlo.', 'For sharing material about Palazzo baronale Manmano Gussio and, before that, for undertaking its restoration and renovation. His practical commitment has brought renewed value to a place in Agira’s history and allows us to tell its story today.') },
        { name: 'Giuseppe Manno', text: l('Per le idee e l’aiuto nella realizzazione e nella cura degli itinerari.', 'For his ideas and help in creating and curating the itineraries.') },
      ] },
      { id: 'territorio', label: l('04 / LA PROMOZIONE DEL TERRITORIO', '04 / PROMOTING LOCAL HERITAGE'), title: l('Far conoscere Agira.', 'Sharing Agira with others.'), people: [
        { name: 'Pro Loco Agira', text: l('Un ringraziamento alla Pro Loco Agira per l’impegno nella promozione del turismo e della cultura del paese. Un’attività che contribuisce a far conoscere i luoghi, le tradizioni e le iniziative della comunità agirina.', 'Thanks to Pro Loco Agira for their commitment to promoting tourism and culture in the town. Their work helps introduce others to the places, traditions and initiatives of Agira’s community.') },
        { name: 'Agira.org', href: 'https://www.agira.org/', text: l('Per la raccolta di studi, testi e approfondimenti dedicati alla storia, ai monumenti e alle tradizioni di Agira. Un patrimonio di conoscenze che abbiamo consultato e richiamato in numerose pagine di Hello Agira, contribuendo alla ricchezza dei suoi contenuti.', 'For the collection of studies, texts and articles about Agira’s history, monuments and traditions. We have consulted and linked to this valuable resource throughout Hello Agira, helping enrich the content of the project.') },
      ] },
    ],
  };
}
