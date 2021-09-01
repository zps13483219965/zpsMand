<!--
 * @Author: your name
 * @Date: 2021-09-01 20:20:51
 * @LastEditTime: 2021-09-01 20:53:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zps每时每刻\zpsMand\zpsapp\src\views\show-teachers\order.vue
-->
<template>
    <div class="order">
        <div class="order-radius">
            <img
                src="http://120.53.31.103:86/img/address.b8ed73bc.png"
                alt=""
                style="width:30px;height:30px;"
            >
            <van-button type="danger" round size="mini">+请添加收货地址</van-button>
        </div>
        <van-panel title="少林功夫" desc="共1课时" status="100.00">
       
           
        </van-panel>
        <van-submit-bar :price="10000" button-text="实付价格" @submit="onSubmit"/>
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
.order {
  width: 100%;
  padding: 10px 10px;
  box-sizing: border-box;
  background: #f0f2f5;
  min-height: 100vh;
  .van-panel{
      margin-top: 10px;
      border-radius: 20px;
  }
  .order-radius {
    width: 95%;
    height: 150px;
    border-radius: 20px;
    background-color: #fff;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: flex-start;
  }
}
</style>