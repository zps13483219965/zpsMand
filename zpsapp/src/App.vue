<!--
 * @Author: your name
 * @Date: 2021-08-26 15:56:27
 * @LastEditTime: 2021-08-27 21:05:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zpsMand\zpsapp\src\App.vue
-->
<template>
  <div id="app">
    <transition name="v" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

/* v-enter 【进入之前，元素的起始状态】 */
/* v-leave-to 【动画离开之后，离开的终止状态】 */
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(150px);
}
/* v-enter-active 【入场动画的时间段】 */
/* v-leave-active 【离场动画的时间段】 */
.v-enter-active,
.v-leave-active {
  transition: all 0.8s ease;
}
</style>
