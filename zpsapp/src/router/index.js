/*
 * @Author: your name
 * @Date: 2021-08-26 15:56:27
 * @LastEditTime: 2021-08-28 16:22:06
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
        component: () => import('../views/index/index.vue')
      },
      {
        path: '/ShowTeachers',
        name: 'Show-teachers',
        component: () => import('../views/show-teachers/show-teachers.vue')
      },
      {
        path: '/News',
        name: 'News',
        component: () => import('../views/news/news.vue')
      },
      {
        path: '/BookList',
        name: 'Book-list',
        component: () => import('../views/book-list/book-list.vue')
      },
      {
        path: '/Person',
        name: 'Person',
        component: () => import('../views/person/person.vue')
      },
    ]
  },
  // 登录页面
  {
    path: '/login',
    component: () => import('../views/login.vue'),
    meta: { title: "登录" }
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
