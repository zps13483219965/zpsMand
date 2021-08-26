<!--
 * @Author: your name
 * @Date: 2021-08-26 17:11:17
 * @LastEditTime: 2021-08-26 23:59:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zpsMand\zpsapp\src\views\login.vue
-->
<template>
  <div class="zps_login">
    <!-- 头部 -->
    <div class="header">
      <span>＜</span>
    </div>
    <!-- 头像 部分 (照片) -->
    <div class="imgLogin">
      <img src="../../public/A_02.jpg" alt="">
    </div>
    <!-- 输入框部分 -->
    <div class="list">
      <div class="lists">
        <img src="../../public/A1_03.jpg" alt="" style="width:30px;height:40px;">
        <!-- <span>请输入手机号</span> -->
        <input type="text" placeholder="请输入手机号" v-model="mobile">
        <button class="btn" @click="msgs">获取验证码</button>
      </div>
      <div class="lists">
        <img src="../../public/A1_06.jpg" alt="" style="width:30px;height:40px;">
        <!-- <span>请输入验证码</span> -->
        <input type="text" placeholder="请输入验证码" v-model="msg">
      </div>
    </div>
    <!-- 按钮 -->
    <div class="login-btn">
      <button>登 录</button>
    </div>
    <!-- 登录的汉字 -->
    <div class="login-span">
      <span>*未注册的手机号将自动注册</span>
      <span>密码登录</span>
    </div>
    <!-- 第三方登录 -->
    <div class="info">—————第三方登录—————</div>
    <!-- qq微信登录 -->
    <div class="login-wei">
      <div class="wei">
        <img src="../../public/A_05.jpg" alt="">
        <p>微信登录</p>
      </div>
      <div class="wei">
        <img src="../../public/A_07.jpg" alt="">
        <p>QQ登录</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
    mobile:"", //手机号
      msg:""  //验证码
    };
  },
  watch: {},
  computed: {},
  methods: {
   async msgs(){
     const {data:res} = await this.$axios.post("/smsCode")
     console.log(res);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.zps_login {
  width: 100%;
  height: 100%;
  //   导航栏
  .header {
    width: 100%;
    height: 80px;
    line-height: 80px;
    padding-left: 10px;
    font-size: 40px;
    box-sizing: border-box;
    margin-bottom: 125px;
  }
  //   头像部分
  .imgLogin {
    width: 100%;
    height: 163px;
    img {
      width: 100%;
      height: 163px;
    }
  }
  // 输入框部分
  .list {
    width: 100%;
    height: 195px;
    padding: 0 40px;
    box-sizing: border-box;
    // text-align: center;
    margin-top: 100px;
    .lists {
      width: 100%;
      height: 75px;
      display: flex;
      // justify-content: space-around;
      img {
        margin-right: 20px;
        text-align: center;
        line-height: 75px;
      }
      input {
        width: 550px;
        height: 75px;
        font-size: 25px;
        color: #ddd;
        // padding: 5px;
        line-height: 75px;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
      }
      .btn {
        width: 160px;
        height: 50px;
        background: #eb6100;
        color: white;
        text-align: center;
        line-height: 50px;
        font-size: 20px;
        border: none;
      }
    }
  }
  // 登录按钮
  .login-btn {
    width: 750px;
    height: 100px;
    margin-top: 120px;
    box-sizing: border-box;
    text-align: center;
    button {
      width: 620px;
      height: 90px;
      background: #eb6100;
      color: white;
      text-align: center;
      line-height: 90px;
      font-size: 30px;
      border: none;
      border-radius: 5px;
    }
  }
  // 登录的文字
  .login-span {
    width: 750px;
    height: 60px;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-size: 20px;
    color: #bdbdbd;
  }
  // 第三方登录
  .info {
    width: 750px;
    height: 30px;
    text-align: center;
    margin-top: 200px;
    font-size: 20px;
    color: #bdbdbd;
  }
  // 双方登录
  .login-wei {
    width: 750px;
    height: 170px;
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    text-align: center;
    .wei {
      width: 100px;
      height: 125px;
      font-size: 20px;
      color: #bdbdbd;
    }
  }
}
</style>