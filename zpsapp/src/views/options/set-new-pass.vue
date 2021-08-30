<!--
 * @Author: your name
 * @Date: 2021-08-30 18:30:09
 * @LastEditTime: 2021-08-30 19:07:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zps每时每刻\zpsMand\zpsapp\src\views\options\set-new-pass.vue
-->
<template>
    <div class="setPassBox">
        <van-form @submit="onSubmit">
            <van-field
                v-model="mobile"
                placeholder="请输入手机号"
                :rules="[{ required: true, message: '请填写用户名' }]"
            >
                <template #button>
                    <span class="buttonMsg" @click="btn">获取验证码</span>
                </template>
            </van-field>
            <van-field
                v-model="sms_code"
                placeholder="请输入验证码"
                :rules="[{ required: true, message: '请填写验证码' }]"
            />
            <van-field
                v-model="password"
                type="password"
                placeholder="请输入密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button block type="danger" native-type="submit" @click="editPassword">确定</van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
import { smsCode, password } from "@/utils/api.js";
export default {
  components: {},
  props: {},
  data() {
    return {
      mobile: "", //手机号
      password: "", //密码
      sms_code: "" //验证码
    };
  },
  watch: {},
  computed: {},
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    // 获取验证码
    async btn() {
      const data = await smsCode({
        mobile: this.mobile,
        sms_type: "login"
      });
      console.log(data);
    },
    // 修改密码
    async editPassword() {
      const { data: res } = await password({
        mobile: this.mobile,
        password: this.password,
        sms_code: this.sms_code
      });
      this.$toast.success("修改成功")
      console.log(res);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.setPassBox {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  .buttonMsg {
    color: #e60012;
    font-size: 12px;
  }
  .van-button {
    width: 280px;
    height: 45px;
    margin: auto;
    border-radius: 5px;
  }
}
</style>