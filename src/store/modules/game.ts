import { Game, gameStatus } from '@/model/game';

const state: Game = {
  status: gameStatus.STOP
};

const actions = {
  startGame({ commit }: {commit: Function}) {
    commit("updateGameStatus", gameStatus.START);
  },
  stopGame({ commit }: {commit: Function}) {
    commit("updateGameStatus", gameStatus.STOP);
  },
  loseGame({ commit }: {commit: Function}) {
    commit("updateGameStatus", gameStatus.LOSE);
  }
};

const mutations = {
  updateGameStatus(state: Game, status: number) {
    state.status = status;
  }
};

const getters = {
  getGameState(state: Game) {
    return state.status
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}