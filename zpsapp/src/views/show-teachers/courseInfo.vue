<!--
 * @Author: your name
 * @Date: 2021-09-01 14:33:17
 * @LastEditTime: 2021-09-01 20:24:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zps每时每刻\zpsMand\zpsapp\src\views\show-teachers\courseInfo.vue
-->
<template>
    <div class="curDetail">
        <!-- 图片 -->
        <div style="height:200px;wight:100%;background: #f0f2f5;">
            <img :src="info.cover_img" alt="" style="height:200px;weight:200px;">
        </div>
        <!-- 内容 -->
        <div class="info">
            <ul>
                <li style="font-size:18px;color:#000;">{{info.title}}</li>
                <li>剩余名额：{{info.store_num}}</li>
                <li>报名截止时间：2021.07.15 00:00</li>
                <li>开课时间：2021/07/05 00:00 - 2021/07/06 00:00</li>
                <li>开课地点：北京东城区少林武馆</li>
                <li>
                    <s>22.00</s>&nbsp;
                    <span style="color:#ff0000;font-size:16px;">{{prices}}</span>
                </li>
            </ul>
        </div>
        <!-- 优惠 -->
        <div class="youhui">
            <van-cell value="领取" is-link @click="showss">
                <!-- 使用 title 插槽来自定义标题 -->
                <template #title>
                    <span class="custom-title" style="font-size:11px;color:grey;">优惠:</span>
                    <van-tag type="danger" style="font-size:11px;">
                        &nbsp;&nbsp;领取优惠券最多可减<span style="color:#ff0000;">80</span>
                    </van-tag>
                </template>
            </van-cell>
            <van-cell value="详情" is-link @click="show1ss">
                <!-- 使用 title 插槽来自定义标题 -->
                <template #title>
                    <span class="custom-title" style="font-size:11px;color:grey;">服务:</span>
                    <van-tag type="danger" style="font-size:11px;">
                        &nbsp;&nbsp;课程售后
                    </van-tag>
                </template>
            </van-cell>
        </div>
        <!-- 教学团队 -->
        <div class="tx">
            <p>教学团队</p>
            <ul style="display:flex;flex-wrap:wrap;padding:10px 0;">
                <li v-for="(item, index) in tx" :key="index">
                    <img
                        :src="item.teacher_avatar"
                        alt=""
                        style="width: 1.04rem;
    width: 10.4vw;
    height: 1.04rem;
    height: 10.4vw;
    border-radius: 50%;"
                    >
                    <p>{{item.teacher_name}}</p>
                </li>
            </ul>
        </div>
        <!-- 课程介绍 -->
        <div class="week">
            <van-tabs v-model="activeName" title-active-color="#ff0000">
  <van-tab title="课程介绍" name="a">

      <p>课程介绍</p>
     <div v-html="info.course_details"></div>
  </van-tab>
  <van-tab title="课程大纲" name="b"> 

       <p>课程大纲</p>
       <van-collapse v-model="activeNames">
  <van-collapse-item name="1">
      <template #title>
      <div>1.{{list.title}} </div>
    </template>
      
     <div><span style="font-size:10px;color:#ff0000;">      ●   </span>{{list.child[0].periods_title}}</div> 
     <p><span>{{list.child[0].teachers[0].teacher_name}}</span> ,        &nbsp;<span>{{list.child[0].teachers[1].teacher_name}}</span>
     <span>{{list.child[0].start_play}}</span>-<span>{{list.child[0].end_play}}</span>
     </p>
     </van-collapse-item>
 
</van-collapse>
       
       </van-tab>

  <van-tab title="课程评价" name="c"> 

       <p>课程评论</p>
       <van-empty class="custom-image" image="http://120.53.31.103:86/img/empty.0d284c2e.png"  description="暂无评论">
            <!-- <van-button type="danger" class="bottom-button">选择课程</van-button> -->
        </van-empty>
       
       </van-tab>
</van-tabs>
            
        </div>

            <van-button type="danger" block round @click="$router.push('/order')">立即报名</van-button>
            <!-- 领取弹出框 -->
            <van-popup
  v-model="show"
  closeable
  position="bottom"
  :style="{ height: '50%' }"
><div data-v-263d6a95="" class="van-action-sheet__header">优惠券</div>
<van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
>
 
</van-card>


</van-popup>
  <!-- 详情弹出框 -->
            <van-popup
  v-model="show1"
  closeable
  position="bottom"
  :style="{ height: '50%' }"
>
<div  style="padding: .33333rem .4rem;"><p style="font-size: .37333rem;
    font-size: 3.73333vw;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: #5b6066;
    line-height: .53333rem;
    line-height: 5.33333vw;">课程售后</p><p >多谢关注  新课程敬请期待</p></div>
</van-popup>
        
    </div>
</template>

<script>

import { courseInfo,courseChapter } from "@/utils/api.js";
export default {
  components: {},
  props: {},
  data() {
    return {
      basis_id: "",
      id:"",
      info: [], //上面内容
      prices: "", //价格
      tx: [] ,//头像
      activeName: 'a',
      activeNames: ['0'],
      list:[],
      show:false,//领取弹出框
      show1:false //详情弹出框
       
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 内容接口
    async getTeacher() {
      const { data: res } = await courseInfo("basis_id=" + this.basis_id);
      this.info = res.info;
      this.prices = (res.info.price / 100).toFixed(2);
      this.tx = res.teachers;
    },
    // 站马步接口
     async getTeacher1() {
      const { data: res } = await courseChapter({
          id:this.basis_id
      });
      this.list=res[0]
      console.log(res);
      console.log(this.list);
     
    },
    // 领取弹出框
    showss(){
      this.show=true;

    },
    show1ss(){
      this.show1=true;
    }

  },
  created() {
    this.basis_id = this.$route.query.basis_id;
    
    this.getTeacher();
    this.getTeacher1();
    
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.van-action-sheet__header {
    line-height: 1.2rem;
    line-height: 12vw;
    padding-left: .4rem;
    padding-left: 4vw;
    font-size: .45333rem;
    font-size: 4.53333vw;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #262626;
    text-align: left;
}
.curDetail {
  width: 100%;
  padding-bottom: 50px;
  background: #f0f2f5;
  .info {
    height: 400px;
    padding: 20px 20px;
    box-sizing: border-box;
    background-color: #fff;
    li {
      list-style: none;
      font-size: 0.37333rem;
      font-size: 3.73333vw;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.45);
      line-height: 0.8rem;
      line-height: 8vw;
    }
  }
  .youhui {
    width: 100%;
    height: 180px;
    margin-top: 20px;
    background-color: #fff;
    margin-bottom: 40px;
  }
  .tx {
    margin-top: 20px;
    background: #fff;
    padding: 0.13333rem 0.26667rem;
    padding: 1.33333vw 2.66667vw;
    box-sizing: border-box;
    li {
      padding: 0.26667rem 0;
      padding: 2.66667vw 0;
      width: 20%;
      height: 2.4rem;
      height: 24vw;
      display: flex;
      align-items: center;
      flex-direction: column;
      box-sizing: border-box;
    }
  }
  .week{
      width: 100%;
      height: 650px;
      margin-top: 20px;
      background-color: #fff;
  }
  .van-button {
    position: fixed !important;
    bottom: 0 !important;
    left: 0 !important;
    // margin: 10px;
    box-sizing: border-box;
  }
}
</style>
