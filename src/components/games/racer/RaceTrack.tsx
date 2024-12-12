import { motion } from 'framer-motion';
import { ThemeConfig } from '../../../types/theme';

interface RaceTrackProps {
  position: number;
  wrongAnswers: number;
  theme: ThemeConfig;
}

export function RaceTrack({ position, wrongAnswers, theme }: RaceTrackProps) {
  // Calculate progress as percentage
  // Start at 10% and end at 90% (80% total travel distance)
  const startPosition = 10;
  const travelDistance = 80;
  const progress = startPosition + ((position / 10) * travelDistance);

  return (
    <div className={`${theme.accentBg} p-6 rounded-lg shadow-lg`}>
      <div className="relative h-16 bg-white/10 rounded-full overflow-hidden">
        {/* Progress Track */}
        <div 
          className="absolute top-1/2 left-0 right-0 h-1 bg-white/30 -translate-y-1/2"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.2) 20px, rgba(255,255,255,0.2) 40px)'
          }}
        />

        {/* Start Line */}
        <div className="absolute top-0 left-4 h-full flex items-center">
          <span className="text-2xl">🚦</span>
        </div>

        {/* Finish Line */}
        <div className="absolute top-0 right-4 h-full flex items-center">
          <span className="text-2xl">🏁</span>
        </div>

        {/* Race Car */}
        <motion.div
          className="absolute top-0 h-full flex items-center"
          animate={{ 
            left: `${progress}%`,
          }}
          transition={{ 
            type: 'spring',
            stiffness: 100,
            damping: 20
          }}
        >
          <span className="text-3xl transform scale-x-[-1]">🏎️</span>
        </motion.div>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <p className={`${theme.bodyText} text-sm`}>
          Progress: {position} / 10 laps
        </p>
        <p className={`${theme.bodyText} text-sm`}>
          {wrongAnswers === 3 ? (
            <span>Out of gas! ⛽</span>
          ) : (
            <span>Gas: {'⛽'.repeat(3 - wrongAnswers)}{'🪫'.repeat(wrongAnswers)}</span>
          )}
        </p>
      </div>
    </div>
  );
}