import type { Locale } from '../lib/i18n';
import type { SightPage } from './sight-pages';
import audio from './abbey-audio.json';

export function getAbbeyPage(lang: Locale): SightPage {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  const seconds = Math.floor(audio.chapters.reduce((sum, chapter) => sum + chapter.durationSeconds, 0));
  const duration = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
  return {
    id: 'abbey', name: l('L’Abbazia di San Filippo', 'San Filippo Abbey'),
    category: l('Fede, arte e memoria', 'Faith, art and memory'),
    title: l('Abbazia di San Filippo ad Agira e audioguida | Hello Agira', 'San Filippo Abbey in Agira and audio guide | Hello Agira'),
    description: l('Visita l’Abbazia di San Filippo ad Agira: scopri il luogo e ascolta l’audioguida in inglese, con introduzione e sette capitoli dedicati.', 'Explore San Filippo Abbey in Agira with an English audio guide: an introduction and seven chapters, photographs and useful visiting information.'),
    introduction: l('Una scalinata, una facciata, un luogo legato alla memoria religiosa di Agira. Fermati all’Abbazia di San Filippo e lascia che il racconto accompagni il tuo sguardo.', 'A flight of steps, a façade, a place connected to Agira’s religious heritage. Stop at San Filippo Abbey and let the story guide your gaze.'),
    image: 'abbey', location: l('Abbazia di San Filippo · Agira, EN · Sicilia', 'San Filippo Abbey · Agira, EN · Sicily'),
    mapQuery: 'Abbazia di San Filippo, Agira, Sicilia',
    visitorNote: l('Per visitare gli interni, verifica gli orari direttamente con il parroco.', 'Check opening hours directly with the parish priest before visiting the interior.'),
    visitorContacts: [
      { label: '+39 0935 198 7171', href: 'tel:+3909351987171' },
      { label: 'chiesarealesanfilippo@gmail.com', href: 'mailto:chiesarealesanfilippo@gmail.com' },
    ],
    facts: [
      { label: l('Il luogo', 'The place'), value: l('Abbazia di San Filippo', 'San Filippo Abbey') },
      { label: l('Audioguida', 'Audio guide'), value: l('In inglese · introduzione e 7 capitoli', 'English · introduction and 7 chapters') },
      { label: l('Durata dell’ascolto', 'Listening time'), value: duration },
    ],
    story: [
      { title: l('Una storia da ascoltare.', 'A story to listen to.'), paragraphs: [
        l('L’Abbazia è uno dei luoghi legati al culto di San Filippo e alla memoria religiosa della città. La visita può iniziare all’esterno, osservando la facciata e la scalinata, e proseguire negli interni quando sono aperti.', 'The abbey is one of the places connected to Saint Philip and the town’s religious heritage. Begin outside with the façade and steps, then continue inside when the church is open.'),
        l('L’audioguida accompagna la scoperta attraverso le origini dell’Abbazia, le sue trasformazioni, la facciata, gli interni e il coro. I capitoli successivi sono dedicati ai dipinti, alle reliquie di San Filippo, alla sacrestia e all’archivio.', 'The audio guide explores the origins of the abbey, its transformations, the façade, the interior and the choir. Later chapters focus on paintings, the relics of Saint Philip, the sacristy and the archive.'),
      ] },
      { title: l('Il tuo passo, il tuo ascolto.', 'Explore at your own pace.'), paragraphs: [
        l('Puoi ascoltare dall’inizio oppure scegliere un singolo capitolo. Usa le cuffie e rispetta il silenzio e le celebrazioni: il racconto non richiede di accedere a tutti gli ambienti citati.', 'Listen from the beginning or choose an individual chapter. Use headphones and respect quiet moments and services: listening does not require access to every space mentioned.'),
      ] },
    ],
    highlights: [
      { title: l('La facciata e la scalinata', 'The façade and steps'), text: l('Inizia la visita dall’esterno: osserva l’insieme e poi soffermati sui dettagli, accompagnato dal capitolo dedicato alla facciata.', 'Begin outside: take in the whole building, then look at its details while listening to the chapter on the façade.') },
      { title: l('Gli interni e il coro', 'The interior and choir'), text: l('Se gli interni sono aperti, prosegui l’ascolto con il capitolo dedicato. Segui sempre le indicazioni presenti nel santuario.', 'If the interior is open, continue with the relevant chapter. Follow the guidance displayed in the sanctuary.') },
      { title: l('Arte e devozione', 'Art and devotion'), text: l('Dipinti e reliquie sono due temi del racconto audio. Scegli il capitolo che ti incuriosisce e prenditi il tempo per ascoltarlo.', 'Paintings and relics are two themes in the audio guide. Choose the chapter that interests you and take time to listen.') },
    ],
    practical: [
      { title: l('Accesso e orari', 'Access and opening hours'), text: l('Verifica gli orari con il santuario prima della visita. L’accesso agli ambienti citati nell’audioguida può essere limitato e dipende dalle condizioni del momento.', 'Check opening hours with the sanctuary before your visit. Access to spaces mentioned in the guide may be restricted and depends on current arrangements.') },
      { title: l('Durante le celebrazioni', 'During services'), text: l('Rispetta chi è in preghiera. Ascolta con le cuffie e rimanda la visita degli interni se è in corso una celebrazione.', 'Respect those at prayer. Use headphones and postpone exploring the interior if a service is taking place.') },
      { title: l('Scale e accessibilità', 'Steps and accessibility'), text: l('Prima di organizzare la visita, chiedi al santuario informazioni sugli ingressi e sui percorsi disponibili per le tue esigenze di mobilità.', 'Before planning your visit, ask the sanctuary about entrances and routes suitable for your mobility requirements.') },
      { title: l('Come usare l’audioguida', 'Using the audio guide'), text: l('Gli audio sono attualmente in inglese anche su questa pagina. Puoi mettere in pausa, cambiare capitolo e regolare la velocità. La riproduzione richiede una connessione internet.', 'The recordings are in English. You can pause, switch chapters and adjust playback speed. Playback requires an internet connection.') },
    ],
    gallery: [{ key: 'abbey', title: l('L’Abbazia di San Filippo', 'San Filippo Abbey') }],
    sources: [],
    audio: {
      language: audio.language as Locale,
      title: l('L’Abbazia, raccontata.', 'The abbey, narrated.'),
      introduction: l('Introduzione e sette capitoli, da ascoltare in sequenza o uno alla volta. L’audioguida è attualmente disponibile in inglese.', 'An introduction and seven chapters: listen in sequence or choose one at a time. This audio guide is in English.'),
      chapters: audio.chapters.map(chapter => ({ src: chapter.src, durationSeconds: chapter.durationSeconds, title: chapter.title[lang], transcript: chapter.transcript })),
    },
  };
}
