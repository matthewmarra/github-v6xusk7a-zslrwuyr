import { useState, useCallback } from 'react';
import { GameState } from '../../../types/game';
import { getGameQuestions } from '../../../data/questions';
import { Question } from './Question';
import { GameStats } from './GameStats';
import { GameOver } from './GameOver';
import { Feedback } from '../../feedback/Feedback';
import { GameLayout } from './GameLayout';
import { themes } from '../../../config/themes';

interface GameProps {
  onExit: (score: number) => void;
}

function createInitialGameState(): GameState {
  return {
    currentQuestionIndex: 0,
    score: 0,
    questions: getGameQuestions(),
    gameStatus: 'ready',
    userAnswers: [],
    feedback: {
      show: false,
      message: '',
      isCorrect: false,
    },
  };
}

export function Game({ onExit }: GameProps) {
  const [gameState, setGameState] = useState<GameState>(createInitialGameState());
  const theme = themes[0];

  const handleAnswer = useCallback((answer: boolean) => {
    const currentQuestion = gameState.questions[gameState.currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;
    
    setGameState(prev => ({
      ...prev,
      feedback: {
        show: true,
        message: isCorrect ? currentQuestion.correctFeedback : currentQuestion.incorrectFeedback,
        isCorrect,
      },
    }));
  }, [gameState.currentQuestionIndex, gameState.questions]);

  const handleFeedbackClose = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      score: prev.feedback.isCorrect ? prev.score + 1 : prev.score,
      currentQuestionIndex: prev.currentQuestionIndex + 1,
      gameStatus: prev.currentQuestionIndex === prev.questions.length - 1 ? 'finished' : 'playing',
      userAnswers: [...prev.userAnswers, prev.feedback.isCorrect],
      feedback: { show: false, message: '', isCorrect: false },
    }));
  }, []);

  const handleRestart = useCallback(() => {
    setGameState(createInitialGameState());
  }, []);

  const handleGameExit = useCallback(() => {
    onExit(gameState.score);
  }, [onExit, gameState.score]);

  const currentQuestion = gameState.questions[gameState.currentQuestionIndex];
  const stats = {
    currentScore: gameState.score,
    totalQuestions: gameState.questions.length,
    questionsRemaining: gameState.questions.length - gameState.currentQuestionIndex,
  };

  return (
    <GameLayout theme={theme} onExit={handleGameExit}>
      <div className="space-y-8">
        {gameState.gameStatus !== 'finished' && <GameStats stats={stats} theme={theme} />}
        
        {gameState.gameStatus === 'finished' ? (
          <GameOver
            score={gameState.score}
            totalQuestions={gameState.questions.length}
            onRestart={handleRestart}
            onExit={handleGameExit}
            theme={theme}
          />
        ) : (
          <Question
            question={currentQuestion}
            onAnswer={handleAnswer}
            theme={theme}
          />
        )}

        {gameState.feedback.show && (
          <Feedback
            message={gameState.feedback.message}
            isCorrect={gameState.feedback.isCorrect}
            theme={theme}
            onClose={handleFeedbackClose}
          />
        )}
      </div>
    </GameLayout>
  );
}