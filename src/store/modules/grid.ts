import { difficulty, GridInterface, Difficultes, Gameplay } from '@/model/grid';

const state: GridInterface = {
  grids: [[]],
  difficulty: 'easy',
  ...difficulty.easy
};

const actions = {
  setGrid({ commit, state }: {commit: Function; state: GridInterface}) {
    const rowsLength = state.rows;
    const colsLength = state.columns;
    const grids: string[][] = [[]];
    for(let i = 0; i < rowsLength; i++) {
      const cols: string[] = [];
      for(let j = 0; j < colsLength; j++) {
        cols.push('');
      }
      grids.push(cols)
    }
    commit('setGrid', grids);
  },
  setDifficulty({ commit, dispatch }: {commit: Function; state: GridInterface; dispatch: Function}, {difficultyType, updatedGameplay}: {difficultyType: Difficultes; updatedGameplay: Gameplay}) {
    const updateGameplay = difficultyType === 'custom' ? updatedGameplay : difficulty[difficultyType];
    commit('setDifficulty', difficultyType);
    commit('setRowsLength', updateGameplay.columns);
    commit('setColumnsLength', updateGameplay.rows);
    commit('setBombs', updateGameplay.bombs);
    dispatch('setGrid');
  }
};

const mutations = {
  setGrid(state: GridInterface, grids: string[][]): void {
    state.grids = grids;
  },
  setRowsLength(state: GridInterface, colsLength: number): void {
    state.columns = colsLength;
  },
  setColumnsLength(state: GridInterface, rowsLength: number): void {
    state.rows = rowsLength;
  },
  setBombs(state: GridInterface, bombs: number): void {
    state.bombs = bombs;
  },
  setDifficulty(state: GridInterface, difficultyType: Difficultes): void {
    state.difficulty = difficultyType;
  }
};

const getters = {
  getGrids(state: GridInterface) {
    return state.grids;
  },
  getColumnLength(state: GridInterface) {
    return state.columns;
  },
  getRowLength(state: GridInterface) {
    return state.rows;
  },
  getBombs(state: GridInterface) {
    return state.bombs;
  },
  getDifficulty(state: GridInterface) {
    return state.difficulty;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}