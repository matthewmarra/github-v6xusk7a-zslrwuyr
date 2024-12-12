export interface RacerQuestion {
  task: string;
  options: string[];
  feedback: {
    A: string;
    B: string;
    C: string;
  };
  correctAnswer: 'A' | 'B' | 'C';
}

export interface RacerState {
  currentQuestionIndex: number;
  score: number;
  questions: RacerQuestion[];
  gameStatus: 'ready' | 'playing' | 'finished';
  position: number;
  wrongAnswers: number;
  feedback: {
    show: boolean;
    message: string;
    isCorrect: boolean;
  };
}