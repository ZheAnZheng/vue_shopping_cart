import Vue from 'vue'
import Vuex from 'vuex'
import checkoutModule from './checkout/index.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    checkout:checkoutModule,
  },
  state(){
    return{
      theme:'light'
    }
  },
  getters:{
    currentTheme(state){
      return state.theme;
    }
  },
  mutations:{
    setTheme(state,payload){
      state.theme=payload;
    }
  },
  actions:{
    setTheme(context,payload){
      context.commit('setTheme',payload)
    }
  }

});
