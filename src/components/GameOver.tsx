import { motion } from 'framer-motion';
import { ThemeConfig } from '../types/theme';
import { getUserLevel, getLevelEmoji } from '../utils/classification';

interface GameOverProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  onExit: () => void;
  theme: ThemeConfig;
}

export function GameOver({ score, totalQuestions, onRestart, onExit, theme }: GameOverProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const level = getUserLevel(score, totalQuestions);
  const emoji = getLevelEmoji(level);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center"
    >
      <h2 className="text-2xl font-bold text-white mb-4">Game Over!</h2>
      <div className={`${theme.boardBg} p-4 rounded-lg mb-4`}>
        <p className="text-white text-lg">
          You scored {score} out of {totalQuestions}
        </p>
        <p className="text-white/90 text-xl font-bold">{percentage}%</p>
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-white/90 text-sm mb-1">Achievement Unlocked</p>
          <p className="text-white text-xl font-bold">
            {emoji} myAibou {level}
          </p>
        </div>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRestart}
        className={`${theme.buttonBg} ${theme.buttonHoverBg} py-3 px-6 rounded-lg text-white font-bold transition-all`}
      >
        Play Again
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onExit}
        className={`${theme.buttonBg} ${theme.buttonHoverBg} py-3 px-6 rounded-lg text-white font-bold ml-4 transition-all`}
      >
        Exit Game
      </motion.button>
    </motion.div>
  );
}