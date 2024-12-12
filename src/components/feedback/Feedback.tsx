import { motion, AnimatePresence } from 'framer-motion';
import { ThemeConfig } from '../../types/theme';

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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 p-4"
      >
        <div 
          className="fixed top-0 left-0 right-0 bottom-0 bg-[rgb(52,55,63)]/95" 
          onClick={onClose} 
        />
        <motion.div
          className="bg-[rgb(237,242,244)] p-8 rounded-lg max-w-md w-full relative z-10 text-center shadow-xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="text-5xl mb-4">
            {isCorrect ? '🎉' : '💡'}
          </div>
          <p className="text-xl mb-6 text-[rgb(52,55,63)] font-bold">
            {message}
          </p>
          <button
            onClick={onClose}
            className={`${theme.buttonBg} ${theme.buttonHoverBg} px-8 py-3 rounded-lg text-white font-semibold transition-colors shadow-md`}
          >
            Continue
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}