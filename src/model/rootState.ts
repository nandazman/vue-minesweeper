import { Game } from '@/model/game';
import { GridInterface } from '@/model/grid';
import { Display } from '@/model/setting';

export interface RootState {
  game: Game;
  gridInterface: GridInterface;
  display: Display;
}