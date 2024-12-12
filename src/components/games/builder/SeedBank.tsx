import { ThemeConfig } from '../../../types/theme';
import { BuilderQuestion } from '../../../types/builder';

interface SeedBankProps {
  availableSeeds: BuilderQuestion[];
  theme: ThemeConfig;
}

export function SeedBank({ availableSeeds, theme }: SeedBankProps) {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, completionText: string) => {
    e.dataTransfer.setData('text/plain', completionText);
    e.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div>
      <h3 className={`${theme.headerText} text-lg font-bold mb-4`}>Available Seeds</h3>
      <div className="grid grid-cols-2 gap-4">
        {availableSeeds.map((seed, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, seed.completionText)}
            className={`${theme.boardBg} p-4 rounded-lg text-left cursor-grab active:cursor-grabbing hover:shadow-lg transition-shadow`}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl select-none">🌱</span>
              <p className={theme.headerText}>
                {seed.completionText}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}