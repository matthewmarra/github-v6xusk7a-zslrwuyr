import { motion } from 'framer-motion';
import { GameStats as GameStatsType } from '../../../types/game';
import { ThemeConfig } from '../../../types/theme';

interface GameStatsProps {
  stats: GameStatsType;
  theme: ThemeConfig;
}

export function GameStats({ stats, theme }: GameStatsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full grid grid-cols-3 gap-4 mb-6"
    >
      <StatCard label="Score" value={stats.currentScore} theme={theme} />
      <StatCard label="Total" value={stats.totalQuestions} theme={theme} />
      <StatCard label="Remaining" value={stats.questionsRemaining} theme={theme} />
    </motion.div>
  );
}

interface StatCardProps {
  label: string;
  value: number;
  theme: ThemeConfig;
}

function StatCard({ label, value, theme }: StatCardProps) {
  return (
    <div className={`${theme.accentBg} p-3 rounded-lg text-center shadow-md`}>
      <p className={`${theme.bodyText} text-sm`}>{label}</p>
      <p className={`${theme.headerText} font-bold text-lg`}>{value}</p>
    </div>
  );
}