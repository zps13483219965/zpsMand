<!--
 * @Author: your name
 * @Date: 2021-08-27 19:54:23
 * @LastEditTime: 2021-09-02 21:13:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zps每时每刻\zpsMand\zpsapp\src\views\news\news.vue
-->
<template>
  <div class="box">
    <van-tabs @change="changes">
      <van-tab :title="'全部' " name="0">
        <!-- 第一个单个内容 -->
        <div class="all-box">
          <div class="item" v-for="(item, index) in newsAllList" :key="index">
            <img :src="item.thumb_img" alt="" style="width:130px;height:80px;" @click="go(item.id)">
            <div class="item-list">
              <p style="font-size:16px;">{{item.title}}</p>
              <p style="font-size:12px;color:grey">{{item.description}}</p>
              <div class="item-lists">
                <span>
                  <van-icon name="eye"/>
                  {{item.click_rate}}
                </span>
                <span>
                  <van-icon name="clock-o"/>
                  {{item.created_at}}
                </span>
              </div>
            </div>
          </div>
          <div class="van-list__finished-text">没有更多了</div>
        </div>
      </van-tab>
      <van-tab v-for="(item,index) in newsList" :title="item.name" :name="item.id" :key="index">
        <!-- 其他内容 有数据-->
        <template v-if="newsAllList.length">
          <div class="all-box">
            <div class="item" v-for="(item, index) in newsAllList" :key="index">
              <img :src="item.thumb_img" alt="" style="width:130px;height:80px;" @click="go(item.id)">
              <div class="item-list">
                <p style="font-size:16px;">{{item.title}}</p>
                <p style="font-size:12px;color:grey">{{item.description}}</p>
                <div class="item-lists">
                  <span>
                    <van-icon name="eye"/>
                    {{item.click_rate}}
                  </span>
                  <span>
                    <van-icon name="clock-o"/>
                    {{item.created_at}}
                  </span>
                </div>
              </div>
            </div>
            <div class="van-list__finished-text">没有更多了</div>
          </div>
        </template>
        <!-- 没有数据 -->
        <div v-else>
          <van-empty
            class="custom-image"
            image="http://120.53.31.103:86/img/empty.0d284c2e.png"
            description="暂无资讯"
          ></van-empty>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { news, newsAll } from "@/utils/api";
export default {
  components: {},
  props: {},
  data() {
    return {
      newsList: [], //导航栏区域
      newsAllList: [], //全部区域
      classify_id: 0,
      limit: 10,
      page: 1
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 到处每个导航栏传递的id
    changes(e) {
      this.classify_id = e;
      this.getNewsAllList();
      console.log(e);
    },
    // 导航区域
    async getNews() {
      const { data: res } = await news();
      this.newsList = res;
    },
    // 单个数据
    async getNewsAllList() {
      const { data: res } = await newsAll({
        page: this.page,
        limit: this.limit,
        classify_id: this.classify_id
      });
      this.newsAllList = res.list;
    },
    go(item){
      this.$router.push({path:`/news-detail?id=${item}`})

    }
  },
  created() {
    this.getNews(); //导航栏数据
    this.getNewsAllList(); //每个单个的数据
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  .all-box {
    width: 100%;
    height: 100%;
    padding: 10px 10px;
    box-sizing: border-box;
    background-color: rgba(251, 251, 251, 0.925);
    min-height: 1200px;
    .item {
      width: 90%;
      height: 150px;
      background-color: #fff;
      border-radius: 10px;
      margin: 10px auto;
      display: flex;
      margin-top: 20px;
      padding: 10px 10px;
      box-shadow: 0 0 0.42667rem 0 #dddddd;
      .item-list {
        width: 70%;
        padding: 10px 10px;
        box-sizing: border-box;
        .item-lists {
          width: 100%;
          margin-top: 15px;
          color: rgb(216, 200, 200);
          display: flex;
          justify-content: space-between;
          font-size: 13px;
        }
      }
    }
  }
}
</style>