import { motion } from 'framer-motion';
import { Question as QuestionType } from '../../types/game';
import { ThemeConfig } from '../../types/theme';

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
      <div className={`${theme.boardBg} p-6 rounded-lg w-full text-center shadow-lg`}>
        <p className={`${theme.bodyText} text-sm mb-2`}>{question.prefix}</p>
        <p className={`${theme.headerText} text-xl font-bold`}>{question.statement}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 w-full">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onAnswer(true)}
          className={`${theme.buttonBg} ${theme.buttonHoverBg} py-3 px-6 rounded-lg text-white font-semibold transition-colors shadow-md`}
        >
          True
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onAnswer(false)}
          className={`${theme.buttonBg} ${theme.buttonHoverBg} py-3 px-6 rounded-lg text-white font-semibold transition-colors shadow-md`}
        >
          False
        </motion.button>
      </div>
    </motion.div>
  );
}