import type { Locale } from '../lib/i18n';
import type { SightPage } from './sight-pages';
import audio from './aron-audio.json';

export function getAronPage(lang: Locale): SightPage {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  const seconds = Math.floor(audio.chapters.reduce((sum, chapter) => sum + chapter.durationSeconds, 0));
  return {
    id: 'aron', name: l('L’Aron e la memoria ebraica', 'The Aron and Jewish heritage'),
    category: l('Pietra, parole e memoria', 'Stone, words and memory'),
    title: l('Aron ebraico di Agira: storia e audioguida | Hello Agira', 'Agira’s Jewish Aron: history and audio guide | Hello Agira'),
    description: l('Scopri l’Aron in pietra di Agira, datato 1454 e conservato nella Collegiata del SS. Salvatore, con un’audioguida in inglese in tre capitoli.', 'Discover Agira’s stone Aron, dated to 1454 and preserved in the Collegiate Church of SS. Salvatore, with a three-chapter English audio guide.'),
    introduction: l('Una testimonianza in pietra della storia ebraica di Agira. L’Aron invita a fermarsi sulle parole incise e sulla memoria della comunità a cui apparteneva.', 'A stone witness to Agira’s Jewish history. The Aron invites you to pause over its carved words and the memory of the community to which it belonged.'),
    image: 'ssalvatore', location: l('Collegiata del SS. Salvatore · Agira', 'Collegiate Church of SS. Salvatore · Agira'),
    mapQuery: 'Collegiata Santissimo Salvatore Agira',
    visitorNote: l('La fotografia mostra la Collegiata che conserva l’Aron. Verifica apertura e accesso al monumento prima della visita.', 'The photograph shows the Collegiate Church where the Aron is preserved. Check opening hours and access to the monument before visiting.'),
    facts: [
      { label: l('Datazione', 'Date'), value: '1454' },
      { label: l('Conservato nella', 'Preserved in'), value: l('Collegiata del SS. Salvatore', 'Collegiate Church of SS. Salvatore') },
      { label: l('Audioguida', 'Audio guide'), value: l('In inglese · 3 capitoli', 'English · 3 chapters') },
      { label: l('Durata', 'Duration'), value: `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}` },
    ],
    story: [
      { title: l('Un’arca sacra in pietra.', 'A sacred ark in stone.'), paragraphs: [l('L’Aron ha-qodesh è l’arca destinata a custodire i rotoli della Torah nella sinagoga. Quello di Agira è realizzato in pietra e proviene dall’antica sinagoga della città.', 'The Aron ha-qodesh is the ark used to hold Torah scrolls in a synagogue. Agira’s example is made of stone and comes from the town’s former synagogue.')] },
      { title: l('Le parole e la data.', 'The words and the date.'), paragraphs: [l('Il Corpus delle iscrizioni ebraiche pubblicato sul portale Sicilia Semitica dell’Università di Messina registra il manufatto con la data 1454 e collega l’iscrizione a Isaia 2:5. La scheda indica come luogo di conservazione la Collegiata del SS. Salvatore.', 'The corpus of Hebrew inscriptions published on the University of Messina’s Sicilia Semitica portal records the object as dating to 1454 and connects its inscription with Isaiah 2:5. It lists the Collegiate Church of SS. Salvatore as its place of preservation.')] },
      { title: l('La memoria di una comunità.', 'The memory of a community.'), paragraphs: [l('L’Aron conserva una traccia materiale della presenza ebraica ad Agira. L’audioguida accompagna la scoperta in tre tappe: l’arca sacra, le parole scolpite e il ricordo della comunità.', 'The Aron preserves material evidence of Jewish life in Agira. The audio guide explores it in three stages: the sacred ark, its carved words and the memory of the community.')] },
    ],
    highlights: [
      { title: l('La pietra', 'The stone'), text: l('Osserva il manufatto nel suo insieme e i dettagli della sua struttura.', 'Observe the object as a whole and the details of its structure.') },
      { title: l('L’iscrizione', 'The inscription'), text: l('Le lettere ebraiche sono parte essenziale della storia del monumento.', 'The Hebrew letters are an essential part of the monument’s history.') },
    ],
    practical: [
      { title: l('Organizzare la visita', 'Planning your visit'), text: l('Verifica direttamente con la chiesa gli orari e la possibilità di osservare l’Aron.', 'Check opening hours and arrangements for viewing the Aron directly with the church.') },
      { title: l('Ascoltare sul posto', 'Listening on site'), text: l('Usa le cuffie e rispetta preghiere e celebrazioni. Gli audio sono in inglese su entrambe le versioni del sito; serve una connessione internet.', 'Use headphones and respect prayer and services. The recordings are in English on both versions of the site; an internet connection is required.') },
      { title: l('Accessibilità', 'Accessibility'), text: l('Per esigenze di mobilità, chiedi informazioni aggiornate sugli ingressi e sull’accesso al monumento prima della visita.', 'If you have mobility requirements, ask for current information about entrances and access to the monument before visiting.') },
    ],
    gallery: [{ key: 'ssalvatore', title: l('La Collegiata del SS. Salvatore, che conserva l’Aron', 'The Collegiate Church of SS. Salvatore, where the Aron is preserved') }],
    sources: [
      { title: 'Università di Messina · Sicilia Semitica — Corpus delle iscrizioni ebraiche', url: 'https://siciliasemitica.unime.it/wp-content/uploads/sites/27/2024/12/2-Corpus-delle-iscrizioni-ebraiche-in-Sicilia.pdf' },
      { title: 'Agira città d’arte — Rita Loredana Foti e Salvatore Longo Minnolo', url: 'https://www.agira.org/Sintesi-storiche/agira-citta-darte.html' },
    ],
    audio: {
      language: 'en', title: l('L’Aron, raccontato.', 'The Aron, narrated.'),
      introduction: l('Tre capitoli in inglese, da ascoltare in sequenza o singolarmente: l’arca sacra, l’iscrizione e la memoria ebraica di Agira.', 'Three chapters in English to listen to in sequence or individually: the sacred ark, the inscription and Agira’s Jewish heritage.'),
      chapters: audio.chapters.map(chapter => ({ src: chapter.src, durationSeconds: chapter.durationSeconds, title: chapter.title[lang], transcript: chapter.transcript })),
    },
  };
}
