<!--
 * @Author: your name
 * @Date: 2021-08-31 14:26:37
 * @LastEditTime: 2021-09-01 10:46:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zps每时每刻\zpsMand\zpsapp\src\views\person\sign.vue
-->
<template>
  <div class="sign-box">
    <!-- 上半部分 -->
    <div class="zps_top">
      <div class="header">
        <div>
          <img
            src="http://120.53.31.103:84/uploads/avatar.jpg"
            alt=""
            style="width:60px;height:60px;border-radius:50%"
          >
        </div>
        <div class="name">
          {{$store.state.nickname}}
          <span class="names">积分6</span>
        </div>
        <div class="qiAn" @click="showDialog">签到规则</div>
      </div>
      <div class="bottoms">
        <van-calendar
          :poppable="false"
          :show-confirm="false"
          :style="{ height: '500px' }"
          :formatter="formatter"
        />
      </div>
    </div>
    <!--单元格首页数据 -->
    <div class="zps_cell">
      <!-- <van-icon name="fail" color="#ff0000" /> -->
      <van-cell title="好课推荐" is-link value="更多"/>
    </div>
    <!-- 卡片 -->
    <div class="card-list">
      <van-card
        desc="1积分"
        title="论渣男的自我修养"
        thumb="http://120.53.31.103:84/uploads/image/2021-01-21/0iHDEF8fiqFAern6hLl0erzc1P1d94OAHUPkgNBw.jpeg"
      >
        <!-- <template #tags>
                    <van-tag plain type="danger">标签</van-tag>
                    <van-tag plain type="danger">标签</van-tag>
        </template>-->
        <template #footer>
          <van-button size="mini" class="dh">去兑换</van-button>
        </template>
      </van-card>
    </div>
    <!--单元格首页数据 -->
    <div class="zps_cell1">
      <!-- <van-icon name="fail" color="#ff0000" /> -->
      <van-cell title="热门图书" is-link value="更多"/>
    </div>
    <!-- 卡片 -->
    <div class="card-list">
      <van-card
        desc="WYL"
        title="Vue开发后台管理系统"
        thumb="http://120.53.31.103:84/uploads/image/2021-04-07/H2FyMmqIV87LZIUR0qG1AQziJsgVtgGcidQFoGZz.jpeg"
      >
        <!-- <template #tags>
                    <van-tag plain type="danger">标签</van-tag>
                    <van-tag plain type="danger">标签</van-tag>
        </template>-->
        <template #footer>
          <van-button size="mini" class="dh">去兑换</van-button>
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>
import { date } from "@/utils/api.js";
export default {
  components: {},
  props: {},
  data() {
    return {
      list: [],
      date: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    //   签到规则弹出框
    showDialog() {
      this.$dialog({
        confirmButtonText: "我知道了",
        confirmButtonColor: "#000",
        title: "签到规则",
        message: `<p style="font-size:14px">1.每日签到可获得日签奖励，在单个周期内连续签到可获得连签奖励，同1个周期内最多可领取一次；</p>
        <p style="font-size:14px">2.每日最多可签到1次，断签则会重新计算连签天数；</p>
        <p style="font-size:14px">3.活动以及奖励最终解释归机构所有；</p>
        `
      });
    },
    // 日期参数接口
    async dates() {
      const { data: res } = await date({
        date: this.date
      });
      console.log(res);
    },

    formatter(day) {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();
      const tady = new Date();
      const month_new = tady.getMonth() + 1;
      const date_new = tady.getDate();
      if (month == month_new && date_new == date) {
        day.bottomInfo = "+1";
        day.text = "√";
      }

      return day;
    }
  },

  created() {
    this.dates();
  },
  mounted() {
    // 创建年月日
    const year = new Date().getFullYear();
    const month1 = new Date().getMonth() + 1;
    const daty1 = new Date().getDate();
    const sum = `${year}-${month1}-${daty1}`;
    this.date = sum;
    // console.log(this.date);
  }
};
</script>
<style lang="scss" scoped>
.van-dialog__message {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  max-height: 60vh;
  padding: 26px 24px;
  overflow-y: auto;
  font-size: 14px;
  line-height: 20px;
  white-space: pre-wrap;
  text-align: center;
  word-wrap: break-word;
  /* padding: 2px; */
  line-height: 16px;
  width: 80%;
  -webkit-overflow-scrolling: touch;
}
.sign-box {
  width: 750px;
  padding-bottom: 50px;
  // 上半部分
  .zps_top {
    width: 750px;
    height: 600px;
    background: url("http://120.53.31.103:86/img/user_bg.7d633ee2.png")
      no-repeat top;

    padding-top: 100px;
    box-sizing: border-box;
    position: relative;
    // 登录状态的样式
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
        text-align: center;
        line-height: 80px;

        .names {
          font-size: 12px;
          float: left;
          margin-left: 10px;
          margin-top: -50px;
          box-sizing: border-box;
        }
      }
      .qiAn {
        display: block;
        background: transparent;
        width: 140px;
        height: 50px;
        color: #fff;
        border: #fff 1px solid;
        font-size: 15px;
        text-align: center;
        line-height: 50px;
        position: absolute;
        top: 50%;
        right: 0;
        border-radius: 25px;
      }
    }
    .bottoms {
      width: 90%;
      margin: auto;
      overflow: hidden;
      height: 700px;
      margin-top: 50px;
      border-radius: 30px;
      box-shadow: 0 2px 2px 0 rgb(83, 71, 71);
    }
  }
  // 单元格
  .zps_cell {
    width: 750px;
    margin-top: 400px;
    background: #f7f8fa;
  }
  .zps_cell1 {
    width: 750px;
    margin-top: 20px;
    background: #f7f8fa;
  }
  // 卡片区域
  .card-list {
    width: 750px;
    padding: 20px;
    box-sizing: border-box;
    // background: #b2b7c292;
    .van-card {
      box-shadow: 0 0 2.13333vw 0 rgb(238, 228, 228);
      border-radius: 10px;
      background: #fff;
    }
  }
}
.dh {
  border-radius: 20px;
  border: 1px solid #ddd;
}
.van-cell::before {
  content: "ㅣ";
  font-size: 25px;
  color: red;
  height: 5px !important;
  display: block;
  font-weight: 900;
}
</style>