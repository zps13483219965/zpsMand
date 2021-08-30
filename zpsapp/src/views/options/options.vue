<!--
 * @Author: your name
 * @Date: 2021-08-30 15:55:43
 * @LastEditTime: 2021-08-30 21:13:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zps每时每刻\zpsMand\zpsapp\src\views\options\options.vue
-->
<template>
    <div class="optionsBox">
        <div class="cell-box">
            <van-cell title="设置密码" is-link to="./set-new-pass"/>
            <van-cell title="注销账号" is-link to="./remove-contract"/>
        </div>
        <div class="btn">
            <van-button type="danger" block @click="logout">退出登录</van-button>
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
  methods: {
    logout(){
      this.$store.commit("logout")
      this.$router.push("./Person") //跳转页面
      this.$toast.success("退出成功") //给出提示
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.optionsBox {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  .cell-box {
    height: 200px;
  }
  .btn {
    border-radius: 10px;
    height: 300px;
    line-height: 300px;
    display: flex;
    align-items: center;
  }
}
</style>