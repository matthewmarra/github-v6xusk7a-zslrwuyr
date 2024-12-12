import { allQuestions } from './allQuestions';
import { getRandomQuestions } from '../utils/questionUtils';

export const QUESTIONS_PER_GAME = 10;

export function getGameQuestions() {
  return getRandomQuestions(allQuestions, QUESTIONS_PER_GAME);
}