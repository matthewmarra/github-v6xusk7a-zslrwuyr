import { motion } from 'framer-motion';
import { Question as QuestionType } from '../types/game';
import { ThemeConfig } from '../types/theme';

interface QuestionProps {
  question: QuestionType;
  onAnswer: (answer: boolean) => void;
  theme: ThemeConfig;
}

export function Question({ question, onAnswer, theme }: QuestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full flex flex-col items-center gap-4"
    >
      <div className={`${theme.boardBg} p-4 rounded-lg w-full text-center`}>
        <p className="text-white/70 text-sm mb-2">{question.prefix}</p>
        <p className="text-white text-xl font-bold">{question.statement}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 w-full">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onAnswer(true)}
          className={`${theme.buttonBg} ${theme.buttonHoverBg} py-3 px-6 rounded-lg text-white font-bold transition-all`}
        >
          True
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onAnswer(false)}
          className={`${theme.buttonBg} ${theme.buttonHoverBg} py-3 px-6 rounded-lg text-white font-bold transition-all`}
        >
          False
        </motion.button>
      </div>
    </motion.div>
  );
}