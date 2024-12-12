import { useState, useCallback } from 'react';
import { BuilderState } from '../../../types/builder';
import { getRandomBuilderQuestions } from '../../../data/builderQuestions';
import { CurrentPrompt } from './CurrentPrompt';
import { SeedBank } from './SeedBank';
import { Garden } from './Garden';
import { GameLayout } from './GameLayout';
import { Feedback } from '../../feedback/Feedback';
import { themes } from '../../../config/themes';

interface GameProps {
  onExit: (score: number) => void;
}

function createInitialState(): BuilderState {
  const questions = getRandomBuilderQuestions();
  return {
    currentQuestionIndex: 0,
    score: 0,
    questions,
    gameStatus: 'ready',
    feedback: {
      show: false,
      message: '',
      isCorrect: false,
    },
    garden: {
      plantedSeeds: [],
      maxPlants: 10,
    },
  };
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function Game({ onExit }: GameProps) {
  const [state, setState] = useState<BuilderState>(createInitialState());
  const theme = themes[0];

  const handleGameExit = useCallback(() => {
    onExit(state.score);
  }, [onExit, state.score]);

  const handleSeedDrop = useCallback((completionText: string) => {
    const currentQuestion = state.questions[state.currentQuestionIndex];
    const isCorrect = completionText === currentQuestion.completionText;

    setState(prev => ({
      ...prev,
      feedback: {
        show: true,
        message: isCorrect ? '🌸 Perfect! A new flower blooms in your garden!' : '🥀 Not quite right. Try again!',
        isCorrect,
      },
    }));
  }, [state.questions, state.currentQuestionIndex]);

  const handleFeedbackClose = useCallback(() => {
    setState(prev => {
      // Always close the feedback
      const baseFeedback = { show: false, message: '', isCorrect: false };

      // If the answer was incorrect, just close the feedback
      if (!prev.feedback.isCorrect) {
        return {
          ...prev,
          feedback: baseFeedback,
        };
      }

      // If the answer was correct, update the game state
      const newPlantedSeeds = [...prev.garden.plantedSeeds, prev.questions[prev.currentQuestionIndex].completionText];
      const isGameOver = newPlantedSeeds.length >= prev.garden.maxPlants;

      return {
        ...prev,
        score: prev.score + 1,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        garden: {
          ...prev.garden,
          plantedSeeds: newPlantedSeeds,
        },
        gameStatus: isGameOver ? 'finished' : 'playing',
        feedback: baseFeedback,
      };
    });
  }, []);

  const currentQuestion = state.questions[state.currentQuestionIndex];
  const availableSeeds = shuffleArray(
    state.questions.filter(q => !state.garden.plantedSeeds.includes(q.completionText))
  );

  return (
    <GameLayout theme={theme} onExit={handleGameExit}>
      <div className="space-y-8">
        <Garden 
          plantedSeeds={state.garden.plantedSeeds}
          maxPlants={state.garden.maxPlants}
          theme={theme}
          onSeedDrop={handleSeedDrop}
        />
        
        {state.gameStatus !== 'finished' && (
          <>
            <CurrentPrompt 
              question={currentQuestion}
              theme={theme}
            />
            
            <SeedBank 
              availableSeeds={availableSeeds}
              theme={theme}
            />
          </>
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