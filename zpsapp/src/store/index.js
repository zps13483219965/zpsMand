/*
 * @Author: your name
 * @Date: 2021-08-29 17:11:47
 * @LastEditTime: 2021-08-30 11:31:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Ed
 * @FilePath: \zps每时每刻\zpsMand\zpsapp\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key:"zps"
})

export default new Vuex.Store({
  state: {
    toKen:""
  },
  mutations: {
    setToken(state,arg){
      state.toKen=arg; //存到本地存储

    }
  },
  actions: {
  },
  modules: {
  },
  getters:{

  },
  plugins: [vuexLocal.plugin]
})
