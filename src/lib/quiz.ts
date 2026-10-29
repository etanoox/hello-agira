export const QUESTIONS_PER_GAME = 10;
export const ANSWER_KEYS = ['A', 'B', 'C', 'D'] as const;
export type AnswerKey = typeof ANSWER_KEYS[number];
export interface QuizQuestion {
  id: string;
  category: string;
  question: string;
  answers: Record<AnswerKey, string>;
  correct: AnswerKey;
  explanation: string;
}

/** CSV with comma/semicolon delimiters, BOM, quoted commas, escaped quotes and multiline cells. */
export function parseCsv(source: string): string[][] {
  const text = source.replace(/^\uFEFF/, '');
  const header = text.split(/\r?\n/, 1)[0];
  const delimiter = header.includes(';') && !header.includes(',') ? ';' : ',';
  const rows: string[][] = [];
  let row: string[] = [], cell = '', quoted = false, closed = false;
  const pushCell = () => { row.push(cell.trim()); cell = ''; closed = false; };
  const pushRow = () => { pushCell(); if (row.some(value => value !== '')) rows.push(row); row = []; };
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (quoted) {
      if (char === '"') {
        if (text[i + 1] === '"') { cell += '"'; i++; }
        else { quoted = false; closed = true; }
      } else cell += char;
    } else if (char === delimiter) pushCell();
    else if (char === '\n' || char === '\r') {
      if (char === '\r' && text[i + 1] === '\n') i++;
      pushRow();
    } else if (char === '"') {
      if (cell.trim() || closed) throw new Error('Quiz CSV: virgolette non valide.');
      cell = ''; quoted = true;
    } else {
      if (closed && char.trim()) throw new Error('Quiz CSV: testo dopo una cella tra virgolette.');
      if (!closed) cell += char;
    }
  }
  if (quoted) throw new Error('Quiz CSV: cella tra virgolette non chiusa.');
  if (row.length || cell || closed) pushRow();
  return rows;
}

export function loadQuiz(source: string): QuizQuestion[] {
  const [headers, ...rows] = parseCsv(source);
  const required = ['id', 'domanda', 'risposta_A', 'risposta_B', 'risposta_C', 'risposta_D', 'risposta_corretta'];
  if (!headers || new Set(headers).size !== headers.length || required.some(key => !headers.includes(key))) {
    throw new Error(`Quiz CSV: intestazione non valida. Colonne richieste: ${required.join(', ')}.`);
  }
  const ids = new Set<string>();
  const questions: QuizQuestion[] = [];
  const normalize = (value: string) => value.trim().toLocaleLowerCase('it');
  for (const [index, cells] of rows.entries()) {
    if (cells.length !== headers.length) throw new Error(`Quiz CSV: numero di colonne errato alla riga ${index + 2}.`);
    const row = Object.fromEntries(headers.map((key, i) => [key, cells[i]]));
    if (!row.id || ids.has(row.id)) throw new Error(`Quiz CSV: ID vuoto o duplicato alla riga ${index + 2}.`);
    ids.add(row.id);
    // Personal review takes precedence over the earlier source-verification flag.
    const statuses = [row.stato_verifica, row.stato_verifica_giuseppe, row.attiva].filter(Boolean).map(normalize);
    if (statuses.some(status => ['da rivedere', 'bozza', 'da verificare', 'non verificata', 'false', 'no', '0'].includes(status))) continue;
    const correct = row.risposta_corretta.toUpperCase();
    const answers = Object.fromEntries(ANSWER_KEYS.map(key => [key, row[`risposta_${key}`]])) as Record<AnswerKey, string>;
    if (!row.domanda || ANSWER_KEYS.some(key => !answers[key]) || !ANSWER_KEYS.includes(correct as AnswerKey)) {
      throw new Error(`Quiz CSV: domanda o risposte non valide per ${row.id}.`);
    }
    if (new Set(Object.values(answers).map(normalize)).size !== 4) throw new Error(`Quiz CSV: risposte duplicate per ${row.id}.`);
    if (row.risposta_corretta_testo && normalize(row.risposta_corretta_testo) !== normalize(answers[correct as AnswerKey])) {
      throw new Error(`Quiz CSV: lettera e testo della risposta corretta non corrispondono per ${row.id}.`);
    }
    questions.push({ id: row.id, category: row.categoria || 'Agira', question: row.domanda, answers, correct: correct as AnswerKey, explanation: row.spiegazione || '' });
  }
  if (questions.length < QUESTIONS_PER_GAME) throw new Error(`Quiz CSV: servono almeno ${QUESTIONS_PER_GAME} domande attive e valide.`);
  return questions;
}

/** Fisher–Yates: sample without replacement, leaving the source bank intact. */
export function drawQuestions(bank: readonly QuizQuestion[], random = Math.random): QuizQuestion[] {
  if (bank.length < QUESTIONS_PER_GAME) throw new Error('Il quiz richiede almeno 10 domande.');
  const shuffled = [...bank];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, QUESTIONS_PER_GAME);
}
