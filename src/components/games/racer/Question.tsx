import { motion } from 'framer-motion';
import { RacerQuestion } from '../../../types/racer';
import { ThemeConfig } from '../../../types/theme';

interface QuestionProps {
  question: RacerQuestion;
  onAnswer: (answer: 'A' | 'B' | 'C') => void;
  theme: ThemeConfig;
}

export function Question({ question, onAnswer, theme }: QuestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className={`${theme.boardBg} p-6 rounded-lg mb-6 shadow-lg`}>
        <h3 className={`${theme.headerText} text-xl font-bold mb-4`}>
          Task
        </h3>
        <p className={`${theme.bodyText} text-lg`}>
          {question.task}
        </p>
      </div>

      <div className="space-y-4">
        {question.options.map((option, index) => {
          const letter = String.fromCharCode(65 + index) as 'A' | 'B' | 'C';
          
          return (
            <motion.button
              key={letter}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onAnswer(letter)}
              className={`${theme.boardBg} w-full p-6 rounded-lg text-left hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-start gap-4">
                <span className={`${theme.headerText} font-bold`}>
                  {letter}.
                </span>
                <p className={theme.bodyText}>
                  {option}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}