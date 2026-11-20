import { pageUrl, type Locale } from '../lib/i18n';
import { imageReference } from '../lib/schema';

export const breadForLifeHero = 'breadForLifeOven';

export function getBreadForLife(lang: Locale) {
 const l = (it: string, en: string) => lang === 'it' ? it : en;
 return {
 title: l('Un Pane per la Vita 2027 ad Agira | Hello Agira', 'Un Pane per la Vita 2027 in Agira | Hello Agira'),
 name: 'Un Pane per la Vita 2027',
 heading: l('Un Pane\nper la Vita.', 'Un Pane\nper la Vita.'),
 description: l('Il 5 gennaio 2027, la 35ª edizione di Un Pane per la Vita nei quartieri alti di Agira: tradizioni, sapori e solidarietà per l’UNICEF. Ingresso gratuito.', 'On 5 January 2027, the 35th Un Pane per la Vita in Agira’s upper historic quarters brings together local food, traditions and fundraising for UNICEF. Free admission.'),
 intro: l('Il 5 gennaio Agira si ritrova tra i suoi quartieri alti: forni a legna, sapori della tradizione e il piacere di stare insieme diventano un aiuto concreto per i bambini, attraverso una raccolta fondi interamente destinata all’UNICEF.', 'On 5 January, Agira gathers in its upper historic quarters: wood-fired ovens, traditional food and the pleasure of being together become practical support for children, through fundraising entirely devoted to UNICEF.'),
 sections: [
 {id:'comunita',label:l('01 / UNA FESTA DI COMUNITÀ','01 / A COMMUNITY CELEBRATION'),title:l('Mani al lavoro,\nporte aperte.','Working together,\nopening doors.'),paragraphs:[
 l('Un Pane per la Vita è organizzata dall’Associazione Amici del Presepe e si rinnova ogni anno il 5 gennaio. I preparativi iniziano subito dopo la conclusione del Presepe Vivente: i soci dedicano tempo ed energie all’organizzazione e realizzano e allestiscono a mano gli stand.', 'Organised by the Associazione Amici del Presepe, Un Pane per la Vita returns every year on 5 January. Preparations begin as soon as the Living Nativity ends: members give their time and energy to organising the event and building and decorating the stands by hand.'),
 l('Anche gli abitanti della zona partecipano, mettendo a disposizione i propri forni a legna per preparare le tradizionali fruate. È un lavoro condiviso che racconta la disponibilità delle persone e il calore del paese.', 'Local residents also take part, making their wood-fired ovens available to prepare traditional fruate. This shared effort reflects the generosity of the people and the warmth of the town.') ]},
 {id:'sapori',label:l('02 / SAPORI E SOLIDARIETÀ','02 / FOOD AND SOLIDARITY'),title:l('Le cose semplici.\nUn gesto che conta.','Simple pleasures.\nA gesture that matters.'),paragraphs:[
 l('Durante la serata si possono gustare fruate, pane casereccio, legumi, panini con salsiccia, dolci tipici e altre semplici specialità della tradizione, accompagnate da vino e bevande.', 'During the evening, visitors can enjoy fruate, homemade bread, pulses, sausage sandwiches, local sweets and other simple traditional specialities, accompanied by wine and other drinks.'),
 l('Il cuore della manifestazione è ritrovarsi, condividere qualche ora di festa e riscoprire il valore delle cose semplici. I fondi raccolti vengono destinati interamente all’UNICEF, a sostegno dei bambini. Nella precedente edizione sono stati donati 3.000 €', 'At the heart of the event is the opportunity to come together, share a few hours of celebration and rediscover the value of simple things. All funds raised are donated to UNICEF to support children. At the previous edition, €3,000 was donated.') ]},
 {id:'programma',label:l('03 / EDIZIONE 2027','03 / THE 2027 EDITION'),title:l('Una tradizione\nche guarda avanti.','A tradition\nlooking ahead.'),paragraphs:[
 l('L’appuntamento è martedì 5 gennaio 2027 nei quartieri alti del centro storico di Agira. Il programma della 35ª edizione è ancora in fase di definizione; gli orari saranno comunicati quando confermati.', 'The event takes place on Tuesday 5 January 2027 in the upper quarters of Agira’s historic centre. The programme for the 35th edition is still being finalised; times will be published once confirmed.'),
 l('Tradizionalmente la serata è accompagnata dalla fanfara dei Bersaglieri e dalla Befana con le calze per i più piccoli. La loro presenza nel 2027 non è ancora confermata: gli organizzatori stanno lavorando per custodire queste tradizioni e introdurre novità e sorprese dedicate soprattutto ai bambini.', 'Traditionally, the evening features a Bersaglieri brass band and the Befana bringing stockings for children. Their participation in 2027 is not yet confirmed: the organisers are working to preserve these traditions while introducing new surprises, especially for children.') ]},
 ],
 faqs:[
 {q:l('L’ingresso è gratuito? Serve prenotare?','Is admission free? Do I need to book?'),a:l('L’ingresso alla manifestazione è gratuito e non è richiesta la prenotazione.', 'Admission to the event is free and no booking is required.')},
 {q:l('Sono previste navette?','Will shuttle buses be available?'),a:l('Gli organizzatori confermano navette gratuite anche per Un Pane per la Vita. Fermate, orari e modalità del servizio restano da comunicare.', 'The organisers confirm that free shuttle buses will also run for Un Pane per la Vita. Stops, times and service details have yet to be announced.')},
 {q:l('A chi sono destinati i fondi raccolti?','Who benefits from the fundraising?'),a:l('I fondi raccolti sono destinati interamente all’UNICEF, a sostegno dei bambini. Nella precedente edizione sono stati donati 3.000 €', 'All funds raised are donated to UNICEF to support children. At the previous edition, €3,000 was donated.')},
 ]
 };
}
export function getBreadForLifeGraph(origin: URL, lang: Locale) {
 const c=getBreadForLife(lang), root=origin.origin;
 const page=new URL(pageUrl('breadForLife',lang),root).href;
 const id=new URL(pageUrl('breadForLife','it')+'#edizione-2027',root).href;
 return {'@context':'https://schema.org','@graph':[
 {'@type':'Event','@id':id,name:c.name,description:c.description,url:page,startDate:'2027-01-05',eventStatus:'https://schema.org/EventScheduled',eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode',isAccessibleForFree:true,image:imageReference(origin, breadForLifeHero),organizer:{'@type':'Organization',name:'Associazione Amici del Presepe'},location:{'@type':'Place',name:lang==='it'?'Quartieri alti del centro storico di Agira':'Upper quarters of Agira’s historic centre',address:{'@type':'PostalAddress',addressLocality:'Agira',addressRegion:'Sicilia',postalCode:'94011',addressCountry:'IT'}},mainEntityOfPage:{'@id':page+'#page'}},
 {'@type':'BreadcrumbList','@id':page+'#breadcrumb',itemListElement:[{'@type':'ListItem',position:1,name:'Hello Agira',item:root+'/'+lang+'/'},{'@type':'ListItem',position:2,name:lang==='it'?'Eventi':'Events',item:new URL(pageUrl('events',lang),root).href},{'@type':'ListItem',position:3,name:c.name,item:page}]},
 {'@type':'WebPage','@id':page+'#page',mainEntity:{'@id':id},breadcrumb:{'@id':page+'#breadcrumb'},primaryImageOfPage:imageReference(origin, breadForLifeHero)}
 ]};
}
