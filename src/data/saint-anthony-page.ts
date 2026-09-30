import type { Locale } from '../lib/i18n';
import type { SightPage } from './sight-pages';
import audio from './saint-anthony-audio.json';
export function getSaintAnthonyPage(lang: Locale): SightPage {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  const seconds = Math.floor(audio.chapters.reduce((sum, chapter) => sum + chapter.durationSeconds, 0));
  return {
    id: 'saintAnthony', name: l('Chiesa di Sant’Antonio di Padova', 'Church of Saint Anthony of Padua'),
    category: l('Arte, silenzio e devozione', 'Art, quiet and devotion'),
    title: l('Chiesa di Sant’Antonio di Padova ad Agira | Hello Agira', 'Church of Saint Anthony of Padua, Agira | Hello Agira'),
    description: l('Scopri la Chiesa di Sant’Antonio di Padova ad Agira: fotografie della facciata e degli interni, informazioni per la visita e audioguida in inglese in sette tracce.', 'Discover the Church of Saint Anthony of Padua in Agira: photographs of its façade and interior, visiting information and a seven-track English audio guide.'),
    introduction: l('Un invito a fermarsi e alzare lo sguardo. Nella Chiesa di Sant’Antonio di Padova, accompagna l’osservazione degli interni con un racconto da ascoltare al tuo passo.', 'An invitation to pause and look up. In the Church of Saint Anthony of Padua, explore the interior with a story you can listen to at your own pace.'),
    image: 'saintAnthonyFacade', location: l('Sant’Antonio di Padova · Agira, EN · Sicilia', 'Saint Anthony of Padua · Agira, EN · Sicily'),
    mapQuery: 'Chiesa Sant Antonio di Padova Agira Sicilia',
    visitorNote: l('Verifica gli orari e le condizioni di accesso direttamente con la chiesa.', 'Check opening hours and access arrangements directly with the church.'),
    facts: [
      {label:l('Il luogo','The place'),value:l('Chiesa di Sant’Antonio di Padova','Church of Saint Anthony of Padua')},
      {label:l('Audioguida','Audio guide'),value:l('In inglese · 7 tracce','English · 7 tracks')},
      {label:l('Durata dell’ascolto','Listening time'),value:`${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')}`},
    ],
    story: [{title:l('Fermati sui dettagli.','Pause over the details.'),paragraphs:[
      l('La fotografia degli interni mostra l’altare, il crocifisso e le canne dell’organo, tra decorazioni e luce. È un punto di partenza per osservare il luogo, passando dalla visione d’insieme ai particolari.', 'The interior photograph shows the altar, crucifix and organ pipes among decorations and light. It offers a starting point for exploring the space, moving from the overall view to individual details.'),
      l('L’audioguida comprende un’introduzione, cinque capitoli e una conclusione. Puoi ascoltarla in sequenza oppure scegliere le singole tracce, lasciando spazio alle pause.', 'The audio guide includes an introduction, five chapters and a closing track. Listen in sequence or choose individual recordings, allowing time for pauses.'),
    ]},{title:l('Un luogo da vivere con rispetto.','A place to explore respectfully.'),paragraphs:[l('Se la chiesa è aperta, dedica tempo alla visita senza interferire con la preghiera o le celebrazioni. Usa le cuffie e segui le indicazioni presenti.', 'When the church is open, take time to explore without disturbing prayer or services. Use headphones and follow the guidance displayed on site.')]}],
    highlights: [
      {title:l('L’altare e il crocifisso','The altar and crucifix'),text:l('Osserva come scandiscono lo spazio centrale e guidano lo sguardo lungo la navata.', 'Notice how they define the central space and draw the eye along the nave.')},
      {title:l('L’organo','The organ'),text:l('Alza lo sguardo verso le canne e la struttura decorata che le incornicia, visibili nella fotografia.', 'Look up towards the pipes and the decorated structure framing them, visible in the photograph.')},
      {title:l('Decorazioni e luce','Decoration and light'),text:l('Soffermati sui motivi ornamentali e sui contrasti di luce degli interni.', 'Take time to notice the ornamental details and contrasts of light inside.')},
    ],
    practical: [
      {title:l('Accesso e orari','Access and opening hours'),text:l('Prima di partire, verifica con la chiesa gli orari di apertura e le eventuali limitazioni alla visita.', 'Before setting off, check opening hours and any visiting restrictions with the church.')},
      {title:l('Durante le celebrazioni','During services'),text:l('Rispetta chi è in preghiera e rimanda la visita se è in corso una celebrazione. Ascolta gli audio con le cuffie.', 'Respect those at prayer and postpone exploring if a service is taking place. Listen with headphones.')},
      {title:l('Accessibilità','Accessibility'),text:l('Per esigenze di mobilità, chiedi informazioni sugli ingressi e sui percorsi disponibili prima della visita.', 'If you have mobility requirements, ask about entrances and available routes before visiting.')},
      {title:l('Ascoltare la guida','Listening to the guide'),text:l('Gli audio sono in inglese anche nella pagina italiana. Puoi cambiare traccia, mettere in pausa e regolare la velocità. Serve una connessione internet.', 'The recordings are in English on both language versions. Switch tracks, pause and adjust playback speed. An internet connection is required.')},
    ],
    gallery:[
      {key:'saintAnthonyFacade',title:l('La facciata della Chiesa di Sant’Antonio di Padova','The façade of the Church of Saint Anthony of Padua')},
      {key:'saintAnthony',title:l('Gli interni della Chiesa di Sant’Antonio di Padova','Inside the Church of Saint Anthony of Padua')},
    ],
    sources:[],
    audio:{language:audio.language as Locale,title:l('La chiesa, raccontata.','The church, narrated.'),introduction:l('Introduzione, cinque capitoli e ringraziamenti finali. L’audioguida è attualmente disponibile in inglese.', 'An introduction, five chapters and closing thanks. The audio guide is currently available in English.'),chapters:audio.chapters.map(chapter=>({src:chapter.src,durationSeconds:chapter.durationSeconds,title:chapter.title[lang],transcript:chapter.transcript}))},
  };
}
