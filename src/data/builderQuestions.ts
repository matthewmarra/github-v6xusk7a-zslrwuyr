import { BuilderQuestion } from '../types/builder';

const builderQuestions: BuilderQuestion[] = [
  {
    prompt: "Write a detailed report on market research findings, summarizing key insights, and practical recommendations for management.",
    missingPart: "Examples",
    completionText: "Provide examples of successful implementations.",
    seedType: "🌱"
  },
  {
    prompt: "Draft an engaging press release announcing our upcoming event, highlighting key details, speaker involvement, and ____.",
    missingPart: "Audience",
    completionText: "tailoring the message for industry professionals.",
    seedType: "🌱"
  },
  {
    prompt: "Create a comprehensive user manual for our new software, detailing key features, ____, and examples for users.",
    missingPart: "Usage instructions",
    completionText: "providing detailed usage instructions.",
    seedType: "🌱"
  },
  {
    prompt: "Write a detailed and engaging blog post about industry trends, highlighting ____, and examples for our readers.",
    missingPart: "Key points",
    completionText: "major trends shaping the industry.",
    seedType: "🌱"
  },
  {
    prompt: "Develop engaging content for an email marketing campaign, emphasizing ____, and providing examples for our audience.",
    missingPart: "Key benefits",
    completionText: "the unique benefits of our product.",
    seedType: "🌱"
  },
  {
    prompt: "Compose a comprehensive email to the project team with the meeting agenda, ____, and importance.",
    missingPart: "Time and location",
    completionText: "including the time, location, and importance.",
    seedType: "🌱"
  },
  {
    prompt: "Develop detailed training materials for new employees, covering key tasks, duties, and ____.",
    missingPart: "Examples",
    completionText: "incorporating real-life scenarios for clarity.",
    seedType: "🌱"
  },
  {
    prompt: "Write a policy update for all employees, outlining key changes, implications, and providing ____.",
    missingPart: "Examples",
    completionText: "specific examples of how the changes will be implemented.",
    seedType: "🌱"
  },
  {
    prompt: "Prepare a briefing document for the new project, outlining key objectives, tasks, and providing ____.",
    missingPart: "Examples for clarity",
    completionText: "examples to illustrate key points clearly.",
    seedType: "🌱"
  },
  {
    prompt: "Draft an informative email update for clients, explaining upcoming changes, ____, and examples.",
    missingPart: "Benefits",
    completionText: "highlighting the benefits to the client.",
    seedType: "🌱"
  }
];

export function getRandomBuilderQuestions(): BuilderQuestion[] {
  return [...builderQuestions].sort(() => Math.random() - 0.5);
}