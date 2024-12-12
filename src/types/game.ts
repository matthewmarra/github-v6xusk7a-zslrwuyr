export interface Question {
  statement: string;
  correctAnswer: boolean;
  prefix: "myAibou says..." | "...";
  correctFeedback: string;
  incorrectFeedback: string;
}

export interface GameState {
  currentQuestionIndex: number;
  score: number;
  questions: Question[];
  gameStatus: 'ready' | 'playing' | 'finished';
  userAnswers: boolean[];
  feedback: {
    show: boolean;
    message: string;
    isCorrect: boolean;
  };
}

export interface GameStats {
  currentScore: number;
  totalQuestions: number;
  questionsRemaining: number;
}