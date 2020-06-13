import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
  },
  mutations: {

    changeLogin(state,isOK){
      state.isLogin = isOK;
    }

  },
  getters:{
    getIsLogin(state){
      //return '登录状态:'+state.isLogin;
      return state.isLogin;
    },

  },
  actions: {
  },
  modules: {
  }
})
