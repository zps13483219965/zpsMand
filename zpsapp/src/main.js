/*
 * @Author: your name
 * @Date: 2021-08-26 15:56:27
 * @LastEditTime: 2021-08-26 16:30:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \zpsMand\zpsapp\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 移动端rem适配插件
import 'lib-flexible/flexible' 


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
