<!--
 * @Author: your name
 * @Date: 2021-08-31 19:15:52
 * @LastEditTime: 2021-08-31 20:17:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zps每时每刻\zpsMand\zpsapp\src\views\person\my-study.vue
-->
<template>
    <div>
        <!-- <img src="http://120.53.31.103:86/img/empty.0d284c2e.png" alt=""> -->
        <!-- <van-empty description="还没有课程，快去选择课程学习吧">
            <van-button type="danger" class="bottom-button">选择课程</van-button>
        </van-empty>-->
        <van-empty class="custom-image" image="http://120.53.31.103:86/img/empty.0d284c2e.png">
            <van-button type="danger" class="bottom-button">选择课程</van-button>
        </van-empty>
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
.bottom-button {
  width: 200px;
  height: 60px;
}
</style>