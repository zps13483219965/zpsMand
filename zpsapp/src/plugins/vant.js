/*
 * @Author: your name
 * @Date: 2021-08-26 16:49:15
 * @LastEditTime: 2021-08-31 19:59:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zpsMand\zpsapp\src\plugins\vant.js
 */
// 按需全局引入 vant组件
import Vue from 'vue'
import {Tab, Tabs,Empty,Dialog ,Calendar ,Divider, Form ,Field ,Button, List, Tabbar, TabbarItem, Search, Icon, Swipe, SwipeItem, Grid, GridItem, Cell, CellGroup,Card } from 'vant'
Vue.use(Button)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Search);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Card);
Vue.use(Form);
Vue.use(Field);
Vue.use(Divider);
Vue.use(Calendar);
Vue.use(Dialog);
Vue.use(Empty);
Vue.use(Tab);
Vue.use(Tabs);