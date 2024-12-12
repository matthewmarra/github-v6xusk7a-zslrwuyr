import { motion } from 'framer-motion';
import { ThemeConfig } from '../../../types/theme';

interface GardenProps {
  plantedSeeds: string[];
  maxPlants: number;
  theme: ThemeConfig;
  onSeedDrop?: (completionText: string) => void;
}

const FLOWER_TYPES = ['🌸', '🌺', '🌹', '🌷', '🌻', '🌼', '💐'];

export function Garden({ plantedSeeds, maxPlants, theme, onSeedDrop }: GardenProps) {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const completionText = e.dataTransfer.getData('text/plain');
    if (completionText && onSeedDrop) {
      onSeedDrop(completionText);
    }
  };

  return (
    <div 
      className={`${theme.accentBg} p-6 rounded-lg shadow-lg text-center`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="mb-4">
        <p className={`${theme.bodyText} text-sm`}>
          Garden Progress: {plantedSeeds.length} / {maxPlants} flowers
        </p>
      </div>
      
      <div className="grid grid-cols-5 gap-4 justify-items-center">
        {Array.from({ length: maxPlants }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ 
              scale: index < plantedSeeds.length ? 1 : 0.5,
              opacity: index < plantedSeeds.length ? 1 : 0.3,
            }}
            className={`text-2xl ${
              index >= plantedSeeds.length 
                ? 'border-2 border-dashed border-white/30 rounded-full w-12 h-12 flex items-center justify-center' 
                : ''
            }`}
          >
            {index < plantedSeeds.length ? 
              FLOWER_TYPES[index % FLOWER_TYPES.length] : 
              '🌱'
            }
          </motion.div>
        ))}
      </div>
    </div>
  );
}