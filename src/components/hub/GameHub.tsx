import { useState } from 'react';
import { motion } from 'framer-motion';
import { GameType, GameHubState } from '../../types/games';
import { games } from '../../config/games';
import { Logo } from '../layout/Logo';
import { GameCard } from './GameCard';
import { Game as SaysGame } from '../games/says/Game';
import { Game as RacerGame } from '../games/racer/Game';
import { Game as BuilderGame } from '../games/builder/Game';
import { themes } from '../../config/themes';

const theme = themes[0];

export function GameHub() {
  const [state, setState] = useState<GameHubState>({
    selectedGame: null,
    previousScores: {
      says: 0,
      racer: 0,
      builder: 0,
    },
  });

  const handleGameSelect = (gameId: GameType) => {
    setState(prev => ({ ...prev, selectedGame: gameId }));
  };

  const handleGameExit = (score: number) => {
    setState(prev => ({
      selectedGame: null,
      previousScores: {
        ...prev.previousScores,
        [prev.selectedGame!]: Math.max(score, prev.previousScores[prev.selectedGame!]),
      },
    }));
  };

  if (state.selectedGame) {
    const GameComponent = {
      says: SaysGame,
      racer: RacerGame,
      builder: BuilderGame,
    }[state.selectedGame];

    return <GameComponent onExit={handleGameExit} />;
  }

  return (
    <div className={`min-h-screen ${theme.background} p-6`}>
      <div className="max-w-4xl mx-auto">
        <Logo />
        
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl sm:text-5xl font-bold ${theme.headerText} mb-4`}>
            myAibou Activity Center
          </h1>
          <p className={`text-xl ${theme.bodyText}`}>
            Choose your challenge
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {games.map(game => (
            <GameCard
              key={game.id}
              game={game}
              score={state.previousScores[game.id]}
              onSelect={() => handleGameSelect(game.id)}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </div>
  );
}