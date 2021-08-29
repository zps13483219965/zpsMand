<!--
 * @Author: your name
 * @Date: 2021-08-26 15:56:27
 * @LastEditTime: 2021-08-28 16:30:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zps每时每刻\zpsMand\zpsapp\src\views\Home.vue
-->

<template>
  <div>
    <router-view></router-view>
    <div class="zps_home">
      <div v-for="(item, index) in tarBar_list" :key="index" @click="actives(index,item)">
        <router-link :to="item.url">
          <img :src="active==index ? item.nav_img_checked : item.nav_img" alt="">
          <p :class="active== index ?'active':''">{{item.name}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { tarBar } from "@/utils/api.js";
export default {
  components: {},
  props: {},
  data() {
    return {
      tarBar_list: [], //taBar空列表
      active: 0
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 高亮
    actives(index, item) {
      // console.log(index);
      this.active = index;
      // this.$router.push(item.url)
    },
    // 请求数据
    async getLIst() {
      const {
        data: { index }
      } = await tarBar();
      this.tarBar_list = index;
      // console.log(index);
    }
  },
  created() {
    this.getLIst();
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.active {
  color: #ff0000 !important;
}
.zps_home {
  background: #fff;
  width: 750px;
  height: 80px;
  position: fixed;
  text-align: center;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
   p{
      color: gray;
    }
  .router-link {
    flex: 1;
    border: 1px solid #ddd;
    text-align: center;
    display: block;
   
  }
  img {
    width: 75%;
    height: 55%;
  }
}
</style>