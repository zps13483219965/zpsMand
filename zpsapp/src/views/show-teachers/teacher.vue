<!--
 * @Author: your name
 * @Date: 2021-09-01 10:55:11
 * @LastEditTime: 2021-09-02 14:10:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \zps每时每刻\zpsMand\zpsapp\src\views\show-teachers\teacher.vue
-->

<template>
    <div>
        <van-card :title="real_name" :thumb="avatar"/>
        <van-tabs type="card">
            <van-tab title="讲师介绍">
                <div>
                    <p style="font-size:13px;color: #b7b7b7;">老师简介</p>
                    <p>{{introduction}}</p>
                </div>
            </van-tab>
            <van-tab title="主讲课程">
                <van-card
                    v-for="(item, index) in detailList"
                    :key="index"
                    :title="item.title"
                    :thumb="item.cover_img"
                     :thumb-link="`/courseInfo?basis_id=${item.id}`"
                >
                    <template #tags>
                        <van-tag plain type="danger" style="margin-top:50px;">{{item.sales_num}}已报名</van-tag>
                    </template>
                    <template #footer>
                        <van-button size="mini">{{item.browse_num}}</van-button>
                    </template>
                </van-card>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import { teacherDetail, teacherDetailMain } from "@/utils/api";
export default {
  components: {},
  props: {},
  data() {
    return {
      id: "",
      avatar: "", //照片
      introduction: "", //内容
      real_name: "", //标题
      limit: 10,
      page: 1,
      detailList: [] //列表
    };
  },
  watch: {},
  computed: {},
  methods: {
    async getTeacher() {
      const { data: res } = await teacherDetail(this.id);
      //   console.log(res);
      this.avatar = res.teacher.avatar; //图片
      this.introduction = res.teacher.introduction; //内容
      this.real_name = res.teacher.real_name; //标题
    },
    async getTeacherDetailMain() {
      const { data: res } = await teacherDetailMain({
        page: this.page,
        limit: this.limit,
        teacher_id: this.id
      });
      this.detailList = res.list;
      console.log(res);
    }
  },
  created() {
    this.id = this.$route.query.id;
    console.log(this.id);
    this.getTeacher();
    this.getTeacherDetailMain();
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
</style>