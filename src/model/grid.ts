export type Difficultes = 'easy' | 'medium' | 'hard' | 'custom';

export interface GridInterface {
  grids: string[][];
  difficulty: Difficultes;
  rows: number;
  columns: number;
  bombs: number;
}

export interface Gameplay {
  rows: number;
  columns: number;
  bombs: number;
}

export interface DifficultyGamePlay {
  easy: Gameplay;
  medium: Gameplay;
  hard: Gameplay;
}

export const difficulty: DifficultyGamePlay = {
  easy: {
    rows: 9,
    columns: 9,
    bombs: 10
  },
  medium: {
    rows: 16,
    columns: 16,
    bombs: 40
  },
  hard: {
    rows: 16,
    columns: 30,
    bombs: 99
  }
}