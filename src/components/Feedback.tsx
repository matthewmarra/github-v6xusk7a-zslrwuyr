import { motion, AnimatePresence } from 'framer-motion';
import { ThemeConfig } from '../types/theme';

interface FeedbackProps {
  message: string;
  isCorrect: boolean;
  theme: ThemeConfig;
  onClose: () => void;
}

export function Feedback({ message, isCorrect, theme, onClose }: FeedbackProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="fixed inset-0 flex items-center justify-center z-50 p-4"
      >
        <div className="absolute inset-0 bg-[rgb(52,55,63)]/95" onClick={onClose} />
        <motion.div
          className={`${theme.boardBg} p-6 rounded-lg max-w-md w-full relative z-10 text-center`}
          initial={{ y: 50 }}
          animate={{ y: 0 }}
        >
          <div className={`text-4xl mb-4`}>
            {isCorrect ? '🎉' : '💡'}
          </div>
          <p className="text-white text-lg mb-6">{message}</p>
          <button
            onClick={onClose}
            className={`${theme.buttonBg} ${theme.buttonHoverBg} px-6 py-2 rounded-lg text-white font-semibold hover:opacity-90 transition-all`}
          >
            Continue
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}