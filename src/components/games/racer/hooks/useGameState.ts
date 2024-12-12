import { useState, useCallback } from 'react';
import { RacerState } from '../../../../types/racer';
import { getRandomRacerQuestions } from '../../../../data/racerQuestions';

const TOTAL_QUESTIONS = 10;
const LAPS_TO_WIN = 10;
const MAX_WRONG_ANSWERS = 3;

function createInitialState(): RacerState {
  return {
    currentQuestionIndex: 0,
    score: 0,
    questions: getRandomRacerQuestions(TOTAL_QUESTIONS),
    gameStatus: 'ready',
    position: 0,
    wrongAnswers: 0,
    feedback: {
      show: false,
      message: '',
      isCorrect: false,
    },
  };
}

export function useGameState() {
  const [state, setState] = useState<RacerState>(createInitialState());

  const handleAnswer = useCallback((answer: 'A' | 'B' | 'C') => {
    const currentQuestion = state.questions[state.currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;
    
    setState(prev => ({
      ...prev,
      feedback: {
        show: true,
        message: currentQuestion.feedback[answer],
        isCorrect,
      },
    }));
  }, [state.currentQuestionIndex, state.questions]);

  const handleFeedbackClose = useCallback(() => {
    setState(prev => {
      const isCorrect = prev.feedback.isCorrect;
      const newPosition = isCorrect ? prev.position + 1 : prev.position;
      const newWrongAnswers = isCorrect ? prev.wrongAnswers : prev.wrongAnswers + 1;
      const newIndex = isCorrect ? prev.currentQuestionIndex + 1 : prev.currentQuestionIndex;
      
      const isGameOver = 
        newPosition >= LAPS_TO_WIN || 
        newWrongAnswers >= MAX_WRONG_ANSWERS;
      
      return {
        ...prev,
        score: isCorrect ? prev.score + 1 : prev.score,
        position: newPosition,
        wrongAnswers: newWrongAnswers,
        currentQuestionIndex: newIndex,
        gameStatus: isGameOver ? 'finished' : 'playing',
        feedback: { show: false, message: '', isCorrect: false },
      };
    });
  }, []);

  const handleRestart = useCallback(() => {
    setState(createInitialState());
  }, []);

  return {
    state,
    handleAnswer,
    handleFeedbackClose,
    handleRestart
  };
}