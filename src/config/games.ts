import { Game } from '../types/games';
import { colors } from './colors';

export const games: Game[] = [
  {
    id: 'says',
    title: 'myAibou Says',
    description: 'Test your knowledge about AI capabilities',
    icon: '🎯',
    color: colors.primary.red,
  },
  {
    id: 'racer',
    title: 'Prompt Racer',
    description: 'Race to create the perfect prompt',
    icon: '🏎️',
    color: colors.primary.darkRed,
  },
  {
    id: 'builder',
    title: 'Prompt Builder',
    description: 'Build powerful prompts block by block',
    icon: '🏗️',
    color: colors.primary.slate,
  },
];