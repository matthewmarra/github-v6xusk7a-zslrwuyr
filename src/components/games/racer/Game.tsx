import { useCallback } from 'react';
import { useGameState } from './hooks/useGameState';
import { GameLayout } from './GameLayout';
import { Question } from './Question';
import { RaceTrack } from './RaceTrack';
import { GameOver } from './GameOver';
import { Feedback } from '../../feedback/Feedback';
import { themes } from '../../../config/themes';

interface GameProps {
  onExit: (score: number) => void;
}

export function Game({ onExit }: GameProps) {
  const {
    state,
    handleAnswer,
    handleFeedbackClose,
    handleRestart
  } = useGameState();

  const theme = themes[0];
  const currentQuestion = state.questions[state.currentQuestionIndex];

  const handleGameExit = useCallback(() => {
    onExit(state.score);
  }, [onExit, state.score]);

  return (
    <GameLayout theme={theme} onExit={handleGameExit}>
      <div className="space-y-8">
        <RaceTrack 
          position={state.position}
          wrongAnswers={state.wrongAnswers}
          theme={theme}
        />
        
        {state.gameStatus === 'finished' ? (
          <GameOver
            score={state.score}
            totalQuestions={state.questions.length}
            position={state.position}
            wrongAnswers={state.wrongAnswers}
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

        {state.feedback.show && (
          <Feedback
            message={state.feedback.message}
            isCorrect={state.feedback.isCorrect}
            theme={theme}
            onClose={handleFeedbackClose}
          />
        )}
      </div>
    </GameLayout>
  );
}