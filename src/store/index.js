import Vue from 'vue'
import Vuex from 'vuex'
import checkoutModule from './checkout/index.js';
import basketModule from './basket/index.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    checkout: checkoutModule,
    basket: basketModule,
  },
  state() {
    return {
      theme: "light",
      modalSwitch: false,
    };
  },
  getters: {
    currentTheme(state) {
      return state.theme;
    },
    modalSwitch(state) {
      return state.modalSwitch;
    },
  },
  mutations: {
    setTheme(state, payload) {
      state.theme = payload;
    },
    toggleModal(state) {
      state.modalSwitch = !state.modalSwitch;
    },
  },
  actions: {
    setTheme(context, payload) {
      context.commit("setTheme", payload);
    },
    toggleModal(context) {
      context.commit("toggleModal");
    },
  },
});
