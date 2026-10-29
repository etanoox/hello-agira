import source from './quiz/questions.csv?raw';
import { loadQuiz } from '../lib/quiz';

// Read and validate the CSV during the Astro build, never a separately maintained JSON copy.
export const quizQuestions = loadQuiz(source);
