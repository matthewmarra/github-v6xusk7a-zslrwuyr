export interface BuilderQuestion {
  prompt: string;
  missingPart: string;
  completionText: string;
  seedType: string;
}

export interface BuilderState {
  currentQuestionIndex: number;
  score: number;
  questions: BuilderQuestion[];
  gameStatus: 'ready' | 'playing' | 'finished';
  feedback: {
    show: boolean;
    message: string;
    isCorrect: boolean;
  };
  garden: {
    plantedSeeds: string[];
    maxPlants: number;
  };
}

export interface GardenStats {
  plantedCount: number;
  totalPlants: number;
  remainingSeeds: number;
}