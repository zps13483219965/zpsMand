<!--
 * @Author: your name
 * @Date: 2021-08-27 19:55:46
 * @LastEditTime: 2021-08-28 18:02:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zps每时每刻\zpsMand\zpsapp\src\views\person\person.vue
-->
<template>
  <div class="zps_person">
    <div class="zps_top">
      <div class="header">
        <div>
          <img
            src="http://120.53.31.103:84/uploads/avatar.jpg"
            alt=""
            style="width:60px;height:60px;border-radius:50%"
          >
        </div>
        <div class="name">134****9965</div>
        <div class="qiAn">已签到</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.zps_person {
  width: 750px;
  background: #f7f8fa;
  box-sizing: border-box;
  overflow: hidden;
  padding-bottom: 2rem;
  padding-bottom: 20vw;
  .zps_top {
    width: 750px;
    height: 500px;
    background: url("http://120.53.31.103:86/img/user_bg.7d633ee2.png")
      no-repeat top;
    background-size: 100%;
    box-sizing: border-box;
    padding-top: 100px;
    .header {
      width: 750px;
      height: 100px;
      box-sizing: border-box;
      box-sizing: border-box;
      display: flex;
      padding: 3px;
      position: relative;
      justify-content: space-evenly;
      margin-left: -100px;
      .name {
        display: block;
        line-height: 100px;
        width: 200px;
        height: 100%;
        color: #fff;
        font-size: 35px;
        margin-left: -100px;
      }
      .qiAn {
        display: block;
        background: #5994ed;
        width: 140px;
        height: 50px;
        color: #fff;
        font-size: 15px;
        text-align: center;
        line-height: 50px;
        position: absolute;
        top: 50%;
        right: -100px;
        border-radius: 35% 0px 0px 35%;
      }
    }
  }
}
</style>