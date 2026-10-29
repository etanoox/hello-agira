import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseCsv, loadQuiz, drawQuestions } from '../src/lib/quiz.ts';

const source = readFileSync(new URL('../src/data/quiz/questions.csv', import.meta.url), 'utf8');
const bank = loadQuiz(source);
assert.ok(bank.length >= 10);
assert.deepEqual(parseCsv('\uFEFFid;testo\r\n1;"Una frase; con ""virgolette""\ne due righe"\r\n'), [
  ['id', 'testo'], ['1', 'Una frase; con "virgolette"\ne due righe'],
]);
assert.deepEqual(parseCsv('a,b\n"<script>","x, y"\n\n'), [['a', 'b'], ['<script>', 'x, y']]);
assert.throws(() => parseCsv('a,b\n"non chiusa,x'), /non chiusa/);
assert.throws(() => parseCsv('a,b\n"chiusa"testo,x'), /testo dopo/);

const header = 'id,domanda,risposta_A,risposta_B,risposta_C,risposta_D,risposta_corretta,spiegazione,attiva';
const rows = Array.from({ length: 10 }, (_, i) => `T${i},Domanda ${i}?,Uno,Due,Tre,Quattro,A,Una spiegazione,true`);
const fixture = [header, ...rows].join('\n');
assert.equal(loadQuiz(fixture).length, 10);
assert.equal(loadQuiz(`${fixture}\nNUOVA,Nuova domanda?,Uno,Due,Tre,Quattro,B,,true`).length, 11, 'Appending a CSV row expands the pool without code changes');
assert.equal(loadQuiz(`${fixture}\nBOZZA,In attesa?,Uno,Due,Tre,Quattro,B,,false`).length, 10);
const reviewFixture = fixture.replace('attiva', 'stato_verifica,stato_verifica_giuseppe').replaceAll(',true', ',Verificata,');
assert.equal(loadQuiz(`${reviewFixture}\nREVIEW,Da rivedere?,Uno,Due,Tre,Quattro,B,,Verificata,Da rivedere`).length, 10);
assert.equal(loadQuiz(`${reviewFixture}\nAPPROVED,Confermata?,Uno,Due,Tre,Quattro,B,,Verificata,Verificata personalmente`).length, 11);
assert.throws(() => loadQuiz(fixture.replace('Quattro,A,', 'Quattro,Z,')), /non valide/);
assert.throws(() => loadQuiz(`${fixture}\n${rows[0]}`), /duplicato/);
assert.throws(() => loadQuiz(rows.join('\n')), /intestazione/);
assert.throws(() => loadQuiz([header, ...rows.slice(0, 9)].join('\n')), /almeno 10/);
assert.throws(() => loadQuiz(fixture.replace('Uno,Due,Tre', 'Uno,Uno,Tre')), /duplicate/);
assert.throws(() => loadQuiz(`${fixture}\nCOLONNE,solo due`), /numero di colonne/);

const originalOrder = bank.map(question => question.id);
for (let i = 0; i < 100; i++) {
  const game = drawQuestions(bank);
  assert.equal(game.length, 10);
  assert.equal(new Set(game.map(question => question.id)).size, 10);
  assert.ok(game.every(question => bank.includes(question)));
}
assert.deepEqual(bank.map(question => question.id), originalOrder, 'Sampling does not mutate the source bank');
assert.notDeepEqual(drawQuestions(bank, () => 0).map(q => q.id), drawQuestions(bank, () => .999).map(q => q.id));
assert.throws(() => drawQuestions(bank.slice(0, 9)), /almeno 10/);
console.log(`PASS: quiz CSV validation, review exclusions, appended rows and 100 ten-question games (${bank.length} active questions).`);
