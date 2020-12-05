import { Game, gameStatus } from '@/model/game';

const state: Game = {
  status: gameStatus.FINISH
};

const actions = {
  startGame({ commit }: {commit: Function}) {
    commit("startGame", gameStatus.START);
  }
};

const mutations = {
  startGame(state: Game, status: number) {
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