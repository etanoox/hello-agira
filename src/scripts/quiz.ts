import { ANSWER_KEYS, QUESTIONS_PER_GAME, drawQuestions, type AnswerKey, type QuizQuestion } from '../lib/quiz';

const root = document.querySelector<HTMLElement>('[data-quiz]');
if (root) setupQuiz(root);

function setupQuiz(root: HTMLElement) {
  function get<T extends HTMLElement>(selector: string): T {
    const element = root.querySelector<T>(selector);
    if (!element) throw new Error(`Quiz: elemento mancante ${selector}`);
    return element;
  }
  const welcome = get('[data-quiz-welcome]');
  const play = get('[data-quiz-play]');
  const result = get('[data-quiz-result]');
  const start = get<HTMLButtonElement>('[data-quiz-start]');
  const next = get<HTMLButtonElement>('[data-quiz-next]');
  const questionTitle = get<HTMLHeadingElement>('[data-quiz-question]');
  const answers = get('[data-quiz-answers]');
  const feedback = get('[data-quiz-feedback]');
  const progress = get<HTMLProgressElement>('[data-quiz-progress]');
  const counter = get('[data-quiz-counter]');
  const score = get('[data-quiz-score]');
  const resultTitle = get('[data-quiz-result-title]');
  const review = get<HTMLOListElement>('[data-quiz-review]');
  const bank = JSON.parse(get('[data-quiz-data]').textContent || '[]') as QuizQuestion[];
  let questions: QuizQuestion[] = [];
  let choices: AnswerKey[] = [];
  let index = 0;
  let correctCount = 0;
  let answered = false;

  function focusHeading(heading: HTMLElement) {
    heading.focus({ preventScroll: true });
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    root.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'start' });
  }

  function renderQuestion() {
    answered = false;
    next.hidden = true;
    feedback.replaceChildren();
    answers.replaceChildren();
    const current = questions[index];
    counter.textContent = `Domanda ${index + 1} di ${QUESTIONS_PER_GAME}`;
    score.textContent = String(correctCount);
    progress.value = index;
    progress.textContent = `${index} su ${QUESTIONS_PER_GAME}`;
    get('[data-quiz-category]').textContent = current.category;
    questionTitle.textContent = current.question;
    for (const key of ANSWER_KEYS) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'quiz-answer';
      button.dataset.answer = key;
      const letter = document.createElement('span');
      letter.className = 'quiz-answer-letter';
      letter.textContent = key;
      const text = document.createElement('span');
      text.className = 'quiz-answer-text';
      text.textContent = current.answers[key];
      button.append(letter, text);
      button.addEventListener('click', () => selectAnswer(key));
      answers.append(button);
    }
    // Replace only the text node, retaining the shared arrow icon.
    next.firstChild!.textContent = index === QUESTIONS_PER_GAME - 1 ? 'Scopri il risultato' : 'Continua';
    focusHeading(questionTitle);
  }

  function selectAnswer(selected: AnswerKey) {
    if (answered) return;
    answered = true;
    const current = questions[index];
    const isCorrect = selected === current.correct;
    choices.push(selected);
    if (isCorrect) correctCount++;
    score.textContent = String(correctCount);
    progress.value = index + 1;
    progress.textContent = `${index + 1} su ${QUESTIONS_PER_GAME}`;
    for (const button of answers.querySelectorAll<HTMLButtonElement>('button')) {
      button.disabled = true;
      const key = button.dataset.answer;
      if (key === current.correct || key === selected) {
        button.dataset.state = key === current.correct ? 'correct' : 'incorrect';
        const state = document.createElement('span');
        state.className = 'quiz-answer-state';
        state.textContent = key === current.correct ? (isCorrect ? 'La tua risposta · Corretta' : 'Risposta corretta') : 'La tua risposta · Non corretta';
        button.querySelector('.quiz-answer-text')!.append(state);
      }
    }
    const verdict = document.createElement('strong');
    verdict.textContent = isCorrect ? 'Esatto!' : `La risposta corretta è ${current.correct}: ${current.answers[current.correct]}.`;
    feedback.append(verdict);
    if (current.explanation) {
      const explanation = document.createElement('p');
      explanation.textContent = current.explanation;
      feedback.append(explanation);
    }
    next.hidden = false;
  }

  function showResults() {
    play.hidden = true;
    result.hidden = false;
    get('[data-quiz-total]').textContent = String(correctCount);
    const [title, message] = correctCount === 10
      ? ['Agira non ha segreti per te!', 'Dieci risposte corrette. Ora porta qualcuno a scoprire i tuoi luoghi preferiti.']
      : correctCount >= 7
        ? ['Conosci bene queste storie.', 'Hai riconosciuto tanti dettagli di Agira. C’è sempre una nuova curiosità da scoprire.']
        : correctCount >= 4
          ? ['La curiosità è sulla strada giusta.', 'Alcune storie le conoscevi già, altre le hai incontrate oggi. È un buon motivo per continuare.']
          : ['Ogni scoperta è un inizio.', 'Hai appena incontrato dieci storie di Agira. La prossima passeggiata avrà già un sapore diverso.'];
    resultTitle.textContent = title;
    get('[data-quiz-result-message]').textContent = message;
    review.replaceChildren();
    questions.forEach((question, i) => {
      const item = document.createElement('li');
      const title = document.createElement('strong');
      title.textContent = question.question;
      const choice = document.createElement('span');
      choice.textContent = `La tua risposta: ${question.answers[choices[i]]} · ${choices[i] === question.correct ? 'Corretta' : 'Non corretta'}`;
      item.append(title, choice);
      if (choices[i] !== question.correct) {
        const answer = document.createElement('span');
        answer.textContent = `Risposta corretta: ${question.answers[question.correct]}`;
        item.append(answer);
      }
      if (question.explanation) {
        const explanation = document.createElement('span');
        explanation.textContent = question.explanation;
        item.append(explanation);
      }
      review.append(item);
    });
    focusHeading(resultTitle);
  }

  function newGame() {
    questions = drawQuestions(bank);
    choices = [];
    index = 0;
    correctCount = 0;
    welcome.hidden = true;
    result.hidden = true;
    get<HTMLDetailsElement>('.quiz-review').open = false;
    play.hidden = false;
    renderQuestion();
  }
  start.hidden = false;
  start.addEventListener('click', newGame);
  get('[data-quiz-restart]').addEventListener('click', newGame);
  next.addEventListener('click', () => {
    if (!answered) return;
    if (index === QUESTIONS_PER_GAME - 1) showResults();
    else { index++; renderQuestion(); }
  });
}
