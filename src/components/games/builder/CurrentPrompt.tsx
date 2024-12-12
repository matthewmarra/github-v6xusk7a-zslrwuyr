import { motion } from 'framer-motion';
import { BuilderQuestion } from '../../../types/builder';
import { ThemeConfig } from '../../../types/theme';

interface CurrentPromptProps {
  question: BuilderQuestion;
  theme: ThemeConfig;
}

export function CurrentPrompt({ question, theme }: CurrentPromptProps) {
  if (!question) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${theme.boardBg} p-6 rounded-lg shadow-lg`}
    >
      <h3 className={`${theme.headerText} text-xl font-bold mb-4`}>
        Complete the Prompt
      </h3>
      <p className={`${theme.bodyText} text-lg mb-4`}>
        {question.prompt}
      </p>
      <div className={`${theme.accentBg} p-3 rounded-lg inline-block`}>
        <p className={`${theme.bodyText} text-sm`}>
          Missing: <span className="font-bold">{question.missingPart}</span>
        </p>
      </div>
    </motion.div>
  );
}