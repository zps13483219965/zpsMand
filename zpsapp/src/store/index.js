/*
 * @Author: your name
 * @Date: 2021-08-29 17:11:47
 * @LastEditTime: 2021-08-31 15:35:56
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
  key: "zps"
})

export default new Vuex.Store({
  state: {
    token: "",
    nickname: ""
  },
  mutations: {
    // 登录  存入token
    setToken(state, arg) {
      state.token = arg.remember_token; //存到本地存储
      state.nickname = arg.nickname
    },
    //退出  清除token
    logout(state) {
      state.token = ""
      // localStorage.removeItem(state.toKen);

    }
  },
  actions: {
  },
  modules: {
  },
  getters: {

  },
  plugins: [vuexLocal.plugin]
})
