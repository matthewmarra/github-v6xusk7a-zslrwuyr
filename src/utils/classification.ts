export type UserLevel = 'Master' | 'Pro' | 'Regular' | 'Novice';

export function getUserLevel(score: number, totalQuestions: number): UserLevel {
  const percentage = (score / totalQuestions) * 100;
  
  if (percentage === 100) return 'Master';
  if (percentage >= 80) return 'Pro';
  if (percentage >= 50) return 'Regular';
  return 'Novice';
}

export function getLevelEmoji(level: UserLevel): string {
  switch (level) {
    case 'Master': return '👑';
    case 'Pro': return '⭐';
    case 'Regular': return '🎯';
    case 'Novice': return '🌱';
  }
}