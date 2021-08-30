<!--
 * @Author: your name
 * @Date: 2021-08-26 17:11:17
 * @LastEditTime: 2021-08-30 11:34:36
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
        <input type="number" placeholder="请输入手机号" v-model="mobile">
        <button class="btn" @click="btn">{{msgss}}</button>
      </div>
      <div class="lists">
        <img src="../../public/A1_06.jpg" alt="" style="width:30px;height:40px;">
        <!-- <span>请输入验证码</span> -->
        <input type="text" placeholder="请输入验证码" v-model="msg">
      </div>
    </div>
    <!-- 按钮 -->
    <div class="login-btn">
      <button @click="login">登 录</button>
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
import { smsCode, login } from "@/utils/api.js";
export default {
  components: {},
  props: {},
  data() {
    return {
      mobile: "", //手机号
      msg: "", //验证码
      msgss: "获取验证码"
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 登录
    login() {
      let reg = /^1[345678]\d{9}$/; //手机号正则
      if (this.mobile == "" && this.msg == "") {
        this.$toast.fail("内容不能为空");
      } else if (!reg.test(this.mobile)) {
        this.$toast.fail("请输入正确的手机号");
      } else {
        this.logins(); //调用登录接口
        this.$router.push("/index");
      }
    },
    // 登录接口
    async logins() {
      const { data: res } = await login({
        mobile: this.mobile,
        sms_code: this.msg,
        type: 2,
        client: "1"
      });
      console.log(res);

      this.$store.commit("setToken", res.remember_token);
    },

    //  验证码
    btn() {
      this.getMsg();
      //倒计时
      let time = 60;
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);
          this.msgss = "获取验证码";
        } else {
          this.msgss = time + "秒后重试";
          time--;
        }
      }, 1000);
    },
    // 验证码接口
    async getMsg() {
      const data = await smsCode({
        mobile: this.mobile,
        sms_type: "login"
      });
      console.log(data);
    }
  },
  // // 登录
  created() {
    // this.getMsg();
    // this.logins();
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.zps_login {
  width: 750px;
  //   导航栏
  .header {
    width: 750px;
    height: 80px;
    line-height: 80px;
    padding-left: 10px;
    font-size: 40px;
    box-sizing: border-box;
    margin-bottom: 125px;
  }
  //   头像部分
  .imgLogin {
    width: 750px;
    height: 163px;
    img {
      width: 100%;
      height: 163px;
    }
  }
  // 输入框部分
  .list {
    width: 750px;
    height: 195px;
    padding: 0 40px;
    box-sizing: border-box;
    // text-align: center;
    margin-top: 100px;
    .lists {
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