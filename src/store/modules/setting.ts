import { Display, SHOW } from '@/model/setting';

const state: Display = {
  show: SHOW
};

const actions = {
  toggleSetting({ commit }: {commit: Function}) {
    commit('toggleSetting');
  }
};

const mutations = {
  toggleSetting(state: Display) {
    state.show = !state.show;
  }
};

const getters = {
  getDisplayStatus(state: Display) {
    return state.show;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}