import { difficulty, GridInterface, Difficultes, Gameplay, GridCols } from '@/model/grid';
import { RootState } from '@/model/rootState';
import { gameStatus } from '@/model/game';

const setBombToGrid = (state: GridInterface, clickedIndex: { col: number; row: number }): void => {
  const { grids, rows: rowLength, columns: colLength } = state;
  const currentGrids = [...grids];
  let bombs = state.bombs;

  while (bombs) {
    const randomCol = Math.round(Math.random() * (colLength - 1));
    // somehow zero index in array has value
    const randomRow = Math.round(Math.random() * (rowLength - 1)) || 1;

    if (
      randomCol !== clickedIndex.col && 
      randomRow !== clickedIndex.row && 
      typeof currentGrids[randomRow][randomCol].value !== 'string') {
      currentGrids[randomRow][randomCol].value = 'X';
      if (currentGrids[randomRow - 1]) {
        // top row
        if (currentGrids[randomRow - 1][randomCol - 1] && typeof currentGrids[randomRow - 1][randomCol - 1].value === 'number') {
          // update top left cell
          currentGrids[randomRow - 1][randomCol - 1].value = Number(currentGrids[randomRow - 1][randomCol - 1].value) + 1;
        } 
        if (currentGrids[randomRow - 1][randomCol] && typeof currentGrids[randomRow - 1][randomCol].value === 'number') {
          // update top cell
          currentGrids[randomRow - 1][randomCol].value = Number(currentGrids[randomRow - 1][randomCol].value) + 1;
        } 
        if (currentGrids[randomRow - 1][randomCol + 1] && typeof currentGrids[randomRow - 1][randomCol + 1].value === 'number') {
          // update top right cell
          currentGrids[randomRow - 1][randomCol + 1].value = Number(currentGrids[randomRow - 1][randomCol + 1].value) + 1;
        }
      } 
      if (currentGrids[randomRow + 1]) {
        // update bottom row
        if (currentGrids[randomRow + 1][randomCol - 1] && typeof currentGrids[randomRow + 1][randomCol - 1].value === 'number') {
          // update bottom left cell
          currentGrids[randomRow + 1][randomCol - 1].value = Number(currentGrids[randomRow + 1][randomCol - 1].value) + 1;
        } 
        if (currentGrids[randomRow + 1][randomCol] && typeof currentGrids[randomRow + 1][randomCol].value === 'number') {
          // update bottom cell
          currentGrids[randomRow + 1][randomCol].value = Number(currentGrids[randomRow + 1][randomCol].value) + 1
        } 
        if (currentGrids[randomRow + 1][randomCol + 1] && typeof currentGrids[randomRow + 1][randomCol + 1].value === 'number') {
          // update bottom right cell
          currentGrids[randomRow + 1][randomCol + 1].value = Number(currentGrids[randomRow + 1][randomCol + 1].value) + 1;
        }
      }
      // update current row
      if (currentGrids[randomRow][randomCol - 1] && typeof currentGrids[randomRow][randomCol - 1].value === 'number') {
        // update left cell
        currentGrids[randomRow][randomCol - 1].value = Number(currentGrids[randomRow][randomCol - 1].value) + 1;
      } 
      if (currentGrids[randomRow][randomCol + 1] && typeof currentGrids[randomRow][randomCol + 1].value === 'number') {
        // update right cell
        currentGrids[randomRow][randomCol + 1].value = Number(currentGrids[randomRow][randomCol + 1].value) + 1;
      }
      bombs--;
    }
  }
}

const getIndexAroundCell = (clickedIndex: { col: number; row: number }) => {
  return {
    topRow: clickedIndex.row - 1,
    bottomRow: clickedIndex.row + 1,
    currentRow: clickedIndex.row,
    currentCol: clickedIndex.col,
    leftCol: clickedIndex.col - 1,
    rightCol: clickedIndex.col + 1
  }
}

const revealZeroValueNearCell = (currentGrids: GridCols[][], clickedIndex: { col: number; row: number }): void => {
  const { topRow, bottomRow, currentRow, leftCol, currentCol, rightCol } = getIndexAroundCell(clickedIndex);
  if (!currentGrids[currentRow] || !currentGrids[currentRow][currentCol]) return;
  if (currentGrids[currentRow][currentCol].reveal) return;
  if (typeof currentGrids[currentRow][currentCol].value === 'string') return;

  currentGrids[currentRow][currentCol].reveal = true;
  if (currentGrids[currentRow][currentCol].value !== 0) return;

  revealZeroValueNearCell(currentGrids, { row: topRow, col: currentCol });
  revealZeroValueNearCell(currentGrids, { row: bottomRow, col: currentCol });
  revealZeroValueNearCell(currentGrids, { row: currentRow, col: leftCol });
  revealZeroValueNearCell(currentGrids, { row: currentRow, col: rightCol });
  revealZeroValueNearCell(currentGrids, { row: topRow, col: leftCol });
  revealZeroValueNearCell(currentGrids, { row: topRow, col: rightCol });
  revealZeroValueNearCell(currentGrids, { row: bottomRow, col: rightCol });
  revealZeroValueNearCell(currentGrids, { row: bottomRow, col: leftCol });
  return;
}

const revealAllBomb = (currentGrids: GridCols[][]): void => {
  for(let i = 0; i < currentGrids.length; i++) {
    for(let j = 0; j < currentGrids[i].length; j++) {
      if (currentGrids[i][j].value === 'X') {
        currentGrids[i][j].reveal = true;
      }
    }
  }
}

const hideAllCell = (currentGrids: GridCols[][]): void => {
  for(let i = 0; i < currentGrids.length; i++) {
    for(let j = 0; j < currentGrids[i].length; j++) {
      currentGrids[i][j].reveal = false;
    }
  }
}

const state: GridInterface = {
  grids: [[]],
  difficulty: 'easy',
  ...difficulty.easy
};

const actions = {
  setEmptyGrid({ commit, state }: {commit: Function; state: GridInterface}) {
    const rowsLength = state.rows;
    const colsLength = state.columns;
    const grids: GridCols[][] = [[]];
    for(let i = 0; i < rowsLength; i++) {
      const cols: GridCols[] = [];
      for(let j = 0; j < colsLength; j++) {
        cols.push({ reveal: false, value: 0 });
      }
      grids.push(cols)
    }
    commit('setEmptyGrid', grids);
  },
  setDifficulty({ commit, dispatch }: {commit: Function; state: GridInterface; dispatch: Function}, {difficultyType, updatedGameplay}: {difficultyType: Difficultes; updatedGameplay: Gameplay}) {
    const updateGameplay = difficultyType === 'custom' ? updatedGameplay : difficulty[difficultyType];
    commit('setDifficulty', difficultyType);
    commit('setRowsLength', updateGameplay.columns);
    commit('setColumnsLength', updateGameplay.rows);
    commit('setBombs', updateGameplay.bombs);
    dispatch('setEmptyGrid');
  },
  revealGrid({ commit, rootState, state, }: {commit: Function; state: GridInterface; rootState: RootState}, { col, row}: { col: number; row: number}) {
    if (rootState.game.status) {
      if(typeof state.grids[row][col].value !== 'string') {
        commit('revealCell', { col, row });
      } else {
        commit('revealAllBomb');
        commit('loseGame', rootState);
      }
    } else {
      commit('updateGridWithBombAndNumber', { col, row });
      commit('revealCell', { col, row });
    }
  },
  hideAllCell({ commit }: {commit: Function}): void {
    commit('hideAllCell');
  },
  checkWin({ commit, state, rootState }: {commit: Function; state: GridInterface; rootState: RootState}): void {
    const currentGrid = [...state.grids];
    let bombs = state.bombs;
    for (let i = 0; i < currentGrid.length; i++) {
      for (let j = 0; j < currentGrid[i].length; j++) {
          if (!currentGrid[i][j].reveal) {
            bombs--;
          }
      }
    }

    if (!bombs) {
      commit('winGame', rootState);
    }
  }
};

const mutations = {
  setEmptyGrid(state: GridInterface, grids: GridCols[][]): void {
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
  },
  revealCell(state: GridInterface, { col, row}: { col: number; row: number}): void {
    revealZeroValueNearCell([...state.grids], { col, row });
  },
  updateGridWithBombAndNumber(state: GridInterface, { col, row}: { col: number; row: number}): void {
    setBombToGrid(state, { col, row });
  },
  revealAllBomb(state: GridInterface): void {
    revealAllBomb([...state.grids]);
  },
  loseGame(_: GridInterface, rootState: RootState): void {
    rootState.game.status = gameStatus.LOSE;
  },
  winGame(_: GridInterface, rootState: RootState): void {
    rootState.game.status = gameStatus.WIN;
  },
  hideAllCell(state: GridInterface): void {
    hideAllCell([...state.grids]);
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