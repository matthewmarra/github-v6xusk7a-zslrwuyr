import { motion } from 'framer-motion';
import { ThemeConfig } from '../../types/theme';

interface BackLinkProps {
  onClick: () => void;
  theme: ThemeConfig;
}

export function BackLink({ onClick, theme }: BackLinkProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${theme.buttonBg} ${theme.buttonHoverBg} px-4 py-2 rounded-lg text-white text-sm font-semibold transition-colors absolute top-4 left-4`}
    >
      ← Back to Activity Center
    </motion.button>
  );
}