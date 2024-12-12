import { motion } from 'framer-motion';
import { Game } from '../../types/games';
import { ThemeConfig } from '../../types/theme';

interface GameCardProps {
  game: Game;
  score: number;
  onSelect: () => void;
  theme: ThemeConfig;
}

export function GameCard({ game, score, onSelect, theme }: GameCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className={`${theme.boardBg} p-6 rounded-xl text-left w-full transition-shadow hover:shadow-xl`}
    >
      <div className="text-4xl mb-4">{game.icon}</div>
      <h2 className={`text-xl font-bold ${theme.headerText} mb-2`}>
        {game.title}
      </h2>
      <p className={`${theme.bodyText} mb-4`}>
        {game.description}
      </p>
      {score > 0 && (
        <p className={`text-sm ${theme.bodyText}`}>
          Best Score: {score}
        </p>
      )}
    </motion.button>
  );
}