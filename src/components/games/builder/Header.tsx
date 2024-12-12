import { motion } from 'framer-motion';
import { ThemeConfig } from '../../../types/theme';

interface HeaderProps {
  theme: ThemeConfig;
}

export function Header({ theme }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-8"
    >
      <h1 className={`text-3xl sm:text-4xl font-bold ${theme.headerText}`}>
        Prompt Builder
      </h1>
      <p className={`mt-2 ${theme.bodyText}`}>
        Build your prompt garden, one flower at a time
      </p>
    </motion.header>
  );
}