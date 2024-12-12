export type GameType = 'says' | 'racer' | 'builder';

export interface Game {
  id: GameType;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface GameHubState {
  selectedGame: GameType | null;
  previousScores: Record<GameType, number>;
}