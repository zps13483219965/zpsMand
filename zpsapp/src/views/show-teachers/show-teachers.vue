<!--
 * @Author: your name
 * @Date: 2021-08-27 19:53:44
 * @LastEditTime: 2021-09-01 11:18:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zps每时每刻\zpsMand\zpsapp\src\views\shou-teachers\shou-trachers.vue
-->
<template>
  <div style="padding-bottom:50px;">
      
    <!-- 卡片 -->
    <div class="card-list">
      <van-card
        v-for="(item, index) in teachers"
        :key="index"
        price="2.00"
        :desc="item.introduction"
        :title="item.real_name"
        :thumb="item.avatar"
        :thumb-link="`/teacher?id=${item.id}`"
      
      />
      <div class="van-list__finished-text">没有更多了</div>
    </div>
</div>
</template>

<script>
import { showTeachers } from "@/utils/api.js";
export default {
  components: {},
  props: {},
  data() {
    return {
      teachers:[]
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 请求首页数据
    async getAppIndex() {
      const { data: res } = await showTeachers();
      this.teachers = res.list; //资深讲师
      // this.weekList = res[1].list; //推荐课程
      // this.firstTeachers = res[2].list; //名师
      console.log(this.teachers);
    }
  },
  created() {
    this.getAppIndex(); //首页数据

  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
 // 卡片区域
  .card-list {
    width: 750px;
    padding: 20px;
    box-sizing: border-box;
    background: #b2b7c292;
    .van-card {
      border-radius: 10px;
      background: #fff;
    }
  }
</style>