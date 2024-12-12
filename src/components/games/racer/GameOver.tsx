import { motion } from 'framer-motion';
import { ThemeConfig } from '../../../types/theme';
import { getUserLevel, getLevelEmoji } from '../../../utils/classification';

interface GameOverProps {
  score: number;
  totalQuestions: number;
  position: number;
  wrongAnswers: number;
  onRestart: () => void;
  onExit: () => void;
  theme: ThemeConfig;
}

export function GameOver({ 
  score, 
  totalQuestions, 
  position,
  wrongAnswers,
  onRestart, 
  onExit, 
  theme 
}: GameOverProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const reachedFinish = position >= 10;
  const outOfGas = wrongAnswers >= 3;
  const level = getUserLevel(score, totalQuestions);
  const emoji = getLevelEmoji(level);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center max-w-md mx-auto"
    >
      <h2 className={`text-2xl font-bold ${theme.headerText} mb-4`}>
        Race Complete!
      </h2>
      
      <div className={`${theme.accentBg} p-6 rounded-lg mb-6 shadow-lg`}>
        <div className="text-4xl mb-4">
          {reachedFinish ? '🏆' : outOfGas ? '⛽' : '🏁'}
        </div>
        <p className={theme.headerText}>
          {reachedFinish ? 'You reached the finish line!' :
           outOfGas ? 'Out of gas!' :
           'Time ran out!'}
        </p>
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className={theme.bodyText}>
            Score: {score} out of {totalQuestions}
          </p>
          <p className={`${theme.headerText} text-2xl font-bold mt-2`}>
            {percentage}%
          </p>
          <p className={`${theme.headerText} text-xl font-bold mt-4`}>
            {emoji} myAibou {level}
          </p>
        </div>
      </div>
      
      <div className="space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRestart}
          className={`${theme.buttonBg} ${theme.buttonHoverBg} py-3 px-8 rounded-lg text-white font-semibold transition-colors shadow-md`}
        >
          Race Again
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onExit}
          className={`${theme.buttonBg} ${theme.buttonHoverBg} py-3 px-8 rounded-lg text-white font-semibold transition-colors shadow-md`}
        >
          Exit Race
        </motion.button>
      </div>
    </motion.div>
  );
}