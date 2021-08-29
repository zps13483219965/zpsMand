/*
 * @Author: your name
 * @Date: 2021-08-26 15:56:27
 * @LastEditTime: 2021-08-27 11:22:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zpsMand\zpsapp\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 移动端rem适配插件
import 'lib-flexible/flexible' 
import '@/plugins/vant.js'; //引入vant

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
