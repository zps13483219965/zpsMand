<!--
 * @Author: your name
 * @Date: 2021-09-02 20:29:52
 * @LastEditTime: 2021-09-02 21:29:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zps每时每刻\zpsMand\zpsapp\src\views\news\news-detail.vue
-->
<template>
    <div class="New-detail">
        <img :src="newsAllListDetail.thumb_img" alt="" style="height:400px;width:100%;">
        <div class="bottom">
            <p style="font-size:25px;">{{newsAllListDetail.title}}</p>
            <div class="spans">
                <span>{{newsAllListDetail.click_rate}}次预览</span>
                <span>{{newsAllListDetail.created_at}}</span>
            </div>
            <div class="gao">{{newsAllListDetail.description}}</div>
           <div v-html="newsAllListDetail.content" style="font-size:18px;"></div>
        </div>
         
        
    </div>
</template>

<script>
import { newDetail } from "@/utils/api";
export default {
  components: {},
  props: {},
  data() {
    return {
      id: "",
      newsAllListDetail: []
    };
  },
  
  watch: {},
  computed: {},
  methods: {
    // 单个数据
    async getNewsAllList1() {
      const { data: res } = await newDetail({
        information_id: this.id
      });
      console.log(res);
      this.newsAllListDetail = res; //赋值
    }


  },
  created() {
    this.id = this.$route.query.id; //传过来的id
    console.log(this.$route.query.id);
    this.getNewsAllList1();
    
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.New-detail {
  width: 100%;
  .bottom {
    width: 100%;
    min-height: 600px;
    padding: 10px 30px;
    box-sizing: border-box;
    .spans {
      display: flex;
      justify-content: space-between;
      color: rgb(230, 167, 167);
    }
    .gao {
        position: relative;
        height: 150px;
        line-height: 150px;
        text-align: center;
      margin: 0 auto;
      font-size: 28px;
      color: rgb(199, 153, 153);
    }
    .gao::after {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 2.6rem;
      width: 26vw;
      height: 0.04rem;
      height: 0.4vw;
      background-color: #ededed;
      content: "";
    }
  }
}
</style>