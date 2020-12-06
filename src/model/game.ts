export interface Game {
  status: number;
}

export interface GameStatus {
  STOP: number;
  START: number;
  WIN: number;
  LOSE: number;
}


export const gameStatus: GameStatus = {
  STOP: 0,
  START: 1,
  WIN: 2,
  LOSE: 3
};