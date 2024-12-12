import { motion } from 'framer-motion';
import { GameStats as GameStatsType } from '../types/game';
import { ThemeConfig } from '../types/theme';

interface GameStatsProps {
  stats: GameStatsType;
  theme: ThemeConfig;
}

export function GameStats({ stats, theme }: GameStatsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full grid grid-cols-3 gap-2 mb-4"
    >
      <div className={`${theme.boardBg} p-2 rounded-lg text-center`}>
        <p className="text-white/90 text-xs">Score</p>
        <p className="text-white font-bold">{stats.currentScore}</p>
      </div>
      <div className={`${theme.boardBg} p-2 rounded-lg text-center`}>
        <p className="text-white/90 text-xs">Total</p>
        <p className="text-white font-bold">{stats.totalQuestions}</p>
      </div>
      <div className={`${theme.boardBg} p-2 rounded-lg text-center`}>
        <p className="text-white/90 text-xs">Remaining</p>
        <p className="text-white font-bold">{stats.questionsRemaining}</p>
      </div>
    </motion.div>
  );
}