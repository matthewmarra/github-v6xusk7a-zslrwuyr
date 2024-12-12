import { RacerQuestion } from '../types/racer';

const questionData = [
  {
    task: "Write an email to a colleague summarizing a project meeting.",
    options: [
      "Summarize the project meeting for John with key takeaways and detailed points, making it concise and formal.",
      "Summarize the project meeting. Provide key takeaways for John. Make it concise and formal.",
      "John needs a summary of our project meeting with key takeaways and detailed points. Making it concise and formal."
    ],
    correctIndex: 0,
    feedback: {
      correct: "Perfect! Your prompt is clear and detailed! 🎯",
      incorrect: "Try being more specific and structured! 📝"
    }
  },
  {
    task: "Create a blog post about artificial intelligence trends.",
    options: [
      "Write a comprehensive blog post about the latest AI trends, focusing on real-world applications and future implications.",
      "Write about AI trends. Talk about applications. Mention future implications.",
      "Blog post needed about AI trends and what they mean for the future."
    ],
    correctIndex: 0,
    feedback: {
      correct: "Excellent structure and detail! 🌟",
      incorrect: "Add more specific direction to your prompt! 🎯"
    }
  },
  {
    task: "Design a social media post for a new product launch.",
    options: [
      "Create an engaging social media post announcing our new product, highlighting key features and target audience benefits.",
      "Make a social post about our new product launch.",
      "Post about new product on social media with features."
    ],
    correctIndex: 0,
    feedback: {
      correct: "Perfect balance of detail and clarity! ⭐",
      incorrect: "Be more specific about what you want! 📝"
    }
  },
  {
    task: "Write a customer service response to a product complaint.",
    options: [
      "Draft a professional and empathetic response addressing the customer's concerns about product quality, offering a solution.",
      "Reply to the customer complaint.",
      "Write back to customer about their product issue."
    ],
    correctIndex: 0,
    feedback: {
      correct: "Great empathetic and solution-focused approach! 🎯",
      incorrect: "Add more detail and emotional context! 💭"
    }
  },
  {
    task: "Create a product description for an e-commerce website.",
    options: [
      "Write a compelling product description highlighting key features, benefits, and specifications for our target audience.",
      "Write about the product for the website.",
      "Describe the product and its features."
    ],
    correctIndex: 0,
    feedback: {
      correct: "Excellent detail and audience focus! 🌟",
      incorrect: "Include more specific details and benefits! 📝"
    }
  },
  {
    task: "Draft a press release about a company milestone.",
    options: [
      "Create a newsworthy press release announcing our company milestone, including quotes, facts, and industry impact.",
      "Write about our company milestone.",
      "Make a press release about the milestone."
    ],
    correctIndex: 0,
    feedback: {
      correct: "Perfect newsworthy structure! 🎯",
      incorrect: "Add more specific details and context! 📰"
    }
  },
  {
    task: "Write a technical tutorial for a new software feature.",
    options: [
      "Create a step-by-step tutorial explaining the new feature's functionality, benefits, and implementation details.",
      "Write how to use the new feature.",
      "Make a tutorial about the feature."
    ],
    correctIndex: 0,
    feedback: {
      correct: "Excellent technical detail and structure! ⚙️",
      incorrect: "Include more specific steps and context! 🔧"
    }
  },
  {
    task: "Create an employee onboarding document.",
    options: [
      "Develop a comprehensive onboarding guide covering company policies, procedures, and first-week expectations.",
      "Write about onboarding process.",
      "Make a document for new employees."
    ],
    correctIndex: 0,
    feedback: {
      correct: "Perfect organizational structure! 📚",
      incorrect: "Add more specific details and guidance! 📋"
    }
  },
  {
    task: "Write a research report summary.",
    options: [
      "Summarize the research findings, methodology, and key conclusions in a clear, academic format.",
      "Write about the research results.",
      "Summarize what we found."
    ],
    correctIndex: 0,
    feedback: {
      correct: "Excellent academic structure! 🎓",
      incorrect: "Include more specific research details! 📊"
    }
  },
  {
    task: "Create a marketing campaign brief.",
    options: [
      "Develop a detailed campaign brief outlining objectives, target audience, messaging, and success metrics.",
      "Write about the marketing campaign.",
      "Make a brief for the campaign."
    ],
    correctIndex: 0,
    feedback: {
      correct: "Perfect strategic approach! 🎯",
      incorrect: "Add more campaign specifics! 📈"
    }
  }
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function createQuestion(
  task: string,
  options: string[],
  correctIndex: number,
  feedbackMessages: { correct: string; incorrect: string }
): RacerQuestion {
  const { shuffledOptions, newCorrectAnswer } = shuffleOptions(options, correctIndex);
  
  return {
    task,
    options: shuffledOptions,
    feedback: {
      A: newCorrectAnswer === 'A' ? feedbackMessages.correct : feedbackMessages.incorrect,
      B: newCorrectAnswer === 'B' ? feedbackMessages.correct : feedbackMessages.incorrect,
      C: newCorrectAnswer === 'C' ? feedbackMessages.correct : feedbackMessages.incorrect
    },
    correctAnswer: newCorrectAnswer
  };
}

function shuffleOptions(options: string[], correctIndex: number): {
  shuffledOptions: string[];
  newCorrectAnswer: 'A' | 'B' | 'C';
} {
  const indexedOptions = options.map((option, index) => ({
    text: option,
    wasCorrect: index === correctIndex
  }));
  
  const shuffled = [...indexedOptions].sort(() => Math.random() - 0.5);
  const newCorrectIndex = shuffled.findIndex(option => option.wasCorrect);
  
  return {
    shuffledOptions: shuffled.map(option => option.text),
    newCorrectAnswer: String.fromCharCode(65 + newCorrectIndex) as 'A' | 'B' | 'C'
  };
}

export function getRandomRacerQuestions(count: number = 10): RacerQuestion[] {
  return shuffleArray(questionData)
    .slice(0, count)
    .map(q => createQuestion(q.task, q.options, q.correctIndex, q.feedback));
}