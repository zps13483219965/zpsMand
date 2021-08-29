<!--
 * @Author: your name
 * @Date: 2021-08-27 19:18:34
 * @LastEditTime: 2021-08-28 16:25:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zps每时每刻\zpsMand\zpsapp\src\views\index\index.vue
-->
<template>
  <div class="zps_index">
    <!-- 搜索框 -->
    <div class="header">
      <img
        src="http://120.53.31.103:86/img/icon-sign.96f11c58.png"
        alt=""
        style="width:28px;height:27px;"
      >
      <van-search shape="round" v-model="value" placeholder="请输入搜索关键词"></van-search>
      <van-icon name="envelop-o" class="icon-msg"/>
    </div>
    <!-- 轮播图区域 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banner" :key="index">
        <img :src="item.img" alt="" style="width:100%;height:183px;">
      </van-swipe-item>
    </van-swipe>
    <!-- 九宫格区域 -->
    <van-grid square>
      <van-grid-item v-for="(item,index) in Gird" :key="index" :text="item.name">
        <img :src="item.img" alt="" style="width:80%;height:80%">
        <p>{{item.name}}</p>
      </van-grid-item>
    </van-grid>
    <!--单元格首页数据 -->
    <div class="zps_cell">
      <!-- <van-icon name="fail" color="#ff0000" /> -->
      <van-cell title="资深讲师" icon="fail" is-link value="更多"/>
    </div>
    <!-- 卡片 -->
    <div class="card-list">
      <van-card
        v-for="(item, index) in teachers"
        :key="index"
        price="2.00"
        :desc="item.introduction"
        :title="item.teacher_name"
        :thumb="item.teacher_avatar"
      />
    </div>
    <!--单元格首页数据 -->
    <div class="zps_cell">
      <!-- <van-icon name="fail" color="#ff0000" /> -->
      <van-cell title="推荐课程" icon="fail" is-link value="更多"/>
    </div>
    <!-- 卡片 -->
    <div class="card-list">
      <van-card
        v-for="(item, index) in weekList"
        :num="item.sales_num"
        :key="index"
        :price="item.price"
        :origin-price="item.sales_base"
        :desc="item.introduction"
        :title="item.title"
        :thumb="item.cover_img"
      />
    </div>
    <!--单元格首页数据 -->
    <div class="zps_cell">
      <!-- <van-icon name="fail" color="#ff0000" /> -->
      <van-cell title="名师" icon="fail" is-link value="更多"/>
    </div>
    <!-- 卡片 -->
    <div class="card-list">
      <van-card
        v-for="(item, index) in firstTeachers"
        :key="index"
        :desc="item.introduction"
        :title="item.teacher_name"
        :thumb="item.teacher_avatar"
      />
    </div>
  </div>
</template>

<script>
import { banNer, appIndex } from "@/utils/api.js";

export default {
  components: {},
  props: {},
  data() {
    return {
      value: "", //输入框内容
      // 轮播图数据
      banner: [
        {
          img:
            "https://dayidata2.jiandan100.cn/M00/07/08/CgEB7mDANdOAKDbaAAJi57ZKqmg614.gif"
        },

        {
          img: "https://img.mukewang.com/6073aee3090056da18000600.png"
        },
        {
          img:
            "http://www.kaoyan365.cn/uploadfile/2021/0527/20210527115058621.jpg"
        },
        {
          img:
            "http://www.kaoyan365.cn/uploadfile/2021/0813/20210813050310943.jpg"
        },
        {
          img: "http://www.usian.cn/jyimg/banner1.cdbd7070.png"
        }
      ],
      // 九宫格数据
      Gird: [
        {
          name: "微专业",
          img:
            "https://edu-image.nosdn.127.net/55329cd44f7142c7b2eaaca1a68e2430.png?imageView&quality=100&thumbnail=103y103"
        },
        {
          name: "职场提升",
          img:
            "https://edu-image.nosdn.127.net/23444883-fc1a-4972-8a22-591e5b790ee0.png?imageView&quality=100&thumbnail=103y103"
        },
        {
          name: "编程开发",
          img:
            "https://edu-image.nosdn.127.net/b216231d-4b93-4d5c-8e7c-e22389f194b8.png?imageView&quality=100&thumbnail=103y103"
        },
        {
          name: "人工智能",
          img:
            "https://edu-image.nosdn.127.net/55329cd44f7142c7b2eaaca1a68e2430.png?imageView&quality=100&thumbnail=103y103"
        },
        {
          name: "产品与运营",
          img:
            "https://edu-image.nosdn.127.net/8f2db166988542c2b720f418e6330500.png?imageView&quality=100&thumbnail=103y103"
        },
        {
          name: "设计创意",
          img:
            "https://edu-image.nosdn.127.net/dd3fdff7aeea4b37af8d623be3695331.png?imageView&quality=100&thumbnail=103y103"
        },
        {
          name: "电子商务",
          img:
            "https://edu-image.nosdn.127.net/c0c090e1872748ff8cec40ed03b3e476.png?imageView&quality=100&thumbnail=103y103"
        },
        {
          name: "语言学习",
          img:
            "https://edu-image.nosdn.127.net/fd322af24d8947a8961b99c42b8261e8.png?imageView&quality=100&thumbnail=103y103"
        }
      ],
      teachers: [], //资深讲师
      weekList: [], //推荐课程
      firstTeachers: [] //名师
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 请求首页数据
    async getAppIndex() {
      const { data: res } = await appIndex();
      this.teachers = res[0].list; //资深讲师
      this.weekList = res[1].list; //推荐课程
      this.firstTeachers = res[2].list; //名师
      console.log(this.teachers);
    }
  },
  created() {
    this.getAppIndex(); //首页数据
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.zps_index {
  width: 750px;
  padding-bottom: 100px;
  box-sizing: border-box;
  // 搜索框
  .header {
    width: 750px;
    height: 80px;
    line-height: 50px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    text-align: center;
    justify-content: space-around;
    .icon-msg {
      width: 40px;
      height: 40px;
      font-size: 50px;
    }
    .van-search {
      width: 300px;
      background: #fff !important;
    }
  }
  // 单元格
  .zps_cell {
    width: 750px;
    background: #f7f8fa;
  }
  // 卡片区域
  .card-list {
    width: 750px;
    padding: 20px;
    box-sizing: border-box;
    background: #b2b7c292;
    .van-card {
      border-radius: 10px;
      background: #fff;
    }
  }
}
</style>