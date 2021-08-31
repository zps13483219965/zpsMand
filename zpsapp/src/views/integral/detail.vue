<!--
 * @Author: your name
 * @Date: 2021-08-31 19:34:53
 * @LastEditTime: 2021-08-31 20:23:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zps每时每刻\zpsMand\zpsapp\src\views\integral\detail.vue
-->
<template>
    <div class="integral">
        <!-- 红色卡片 -->
        <div class="detail">
            <div class="rules">
                <p>积分规则</p>
            </div>
            <div class="num">
                <p style="font-size:40px;">7</p>
                <p style="font-size:18px;">积分</p>
            </div>
            <div class="btn">
                <p>积分兑换</p>
                <p>积分赚取</p>
            </div>
        </div>
        <!-- 切换 -->
        <van-tabs type="card" style="height:50px;margin-top: 30px; border-radius:40px">
            <van-tab style="border-radius:40px;" title="积分收入">内容 1</van-tab>
            <van-tab style="border-radius:40px;" title="积分支出">
                <van-empty
                    class="custom-image"
                    image="http://120.53.31.103:86/img/empty.0d284c2e.png"
                    description="暂无记录"
                />
            </van-tab>
        </van-tabs>
        <!-- 内容 -->
        
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
.van-tab {
  border-radius: 40px !important;
}
.van-tabs--card > .van-tabs__wrap {
  height: 50px !important;
  margin-top: 30px !important;
}
.van-tabs__nav--card {
  box-sizing: border-box;
  height: 40px !important;
  margin: 0 16px;
  border: 1px solid #ee0a24;
}
.integral {
  width: 100%;
  padding: 20px 2px;
  box-sizing: border-box;
  //   红色卡片
  .detail {
    width: 90%;
    margin: 0 auto;
    height: 400px;
    background: url(http://120.53.31.103:86/img/detail-bg.44c05d5b.png);
    background-size: 100% 100%;
    .rules {
      display: flex;
      // flex-direction: row-reverse;
      justify-content: flex-end;
      padding-top: 0.48rem;
      p {
        width: 1.97333rem;
        width: 19.73333vw;
        height: 0.66667rem;
        height: 6.66667vw;
        background: hsla(0, 0%, 100%, 0.2);
        border-radius: 0.33333rem 0 0 0.33333rem;
        border-radius: 3.33333vw 0 0 3.33333vw;
        font-size: 0.32rem;
        font-size: 3.2vw;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #fff;
        line-height: 0.66667rem;
        line-height: 6.66667vw;
        text-align: center;
      }
    }
    .num {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 1.25333rem;
      height: 12.53333vw;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #fff;
    }
    .btn {
      display: flex;
      justify-content: space-between;
      padding: 0.8rem 1.2rem 0;
      p {
        width: 2.50667rem;
        width: 25.06667vw;
        height: 0.77333rem;
        height: 7.73333vw;
        border-radius: 0.38667rem;
        border-radius: 3.86667vw;
        border: 0.02667rem solid #fff;
        border: 0.26667vw solid #fff;
        font-size: 0.4rem;
        font-size: 4vw;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #fff;
        line-height: 0.77333rem;
        line-height: 7.73333vw;
        text-align: center;
      }
    }
  }
}
</style>