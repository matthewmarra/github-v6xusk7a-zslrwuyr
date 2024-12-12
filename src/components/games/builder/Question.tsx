import { motion } from 'framer-motion';
import { BuilderQuestion } from '../../../types/builder';
import { ThemeConfig } from '../../../types/theme';

interface QuestionProps {
  question: BuilderQuestion;
  theme: ThemeConfig;
}

export function Question({ question, theme }: QuestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      <div className={`${theme.boardBg} p-6 rounded-lg shadow-lg`}>
        <h3 className={`${theme.headerText} text-xl font-bold mb-4`}>
          Complete the Prompt
        </h3>
        <p className={`${theme.bodyText} text-lg mb-4`}>
          {question.prompt}
        </p>
        <p className={`${theme.bodyText} mt-4 text-sm`}>
          Missing: <span className="font-bold">{question.missingPart}</span>
        </p>
      </div>
    </motion.div>
  );
}