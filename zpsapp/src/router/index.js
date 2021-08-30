/*
 * @Author: your name
 * @Date: 2021-08-26 15:56:27
 * @LastEditTime: 2021-08-30 20:47:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zpsMand\zpsapp\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/Index',
        name: 'Index',
        component: () => import('../views/index/index.vue'),
        meta: { title: "首页" }
      },
      {
        path: '/ShowTeachers',
        name: 'Show-teachers',
        component: () => import('../views/show-teachers/show-teachers.vue'),
        meta: { title: "课程" }
      },
      {
        path: '/News',
        name: 'News',
        component: () => import('../views/news/news.vue'),
        meta: { title: "资讯" }
      },
      {
        path: '/BookList',
        name: 'Book-list',
        component: () => import('../views/book-list/book-list.vue'),
        meta: { title: "图书" }
      },
      {
        path: '/Person',
        name: 'Person',
        component: () => import('../views/person/person.vue'),
        meta: { title: "我的" }
      },
    ]
  },
  // 登录页面
  {
    path: '/login',
    component: () => import('../views/login.vue'),
    meta: { title: "登录" }
  },
  // 设置密码 ， 注销账号  (设置页面)ll
  {
    path: '/options',
    component: () => import('../views/options/options.vue'),
    meta: { title: "设置" }
  },
  // 设置密码 ， 注销账号  (设置页面)ll
  {
    path: '/set-new-pass',
    component: () => import('../views/options/set-new-pass.vue'),
    meta: { title: "设置密码" }
  },

  // 设置密码 ， 注销账号  (设置页面)ll
  {
    path: '/remove-contract',
    component: () => import('../views/options/remove-contract.vue'),
    meta: { title: "注销账号" }
  },




  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },

]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 导航路由 修改标题  
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
// 要写在下面
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    next();
  }
  else {
    // alert('您还没有登录哦，请先登录');
    next();
  }
})

export default router
