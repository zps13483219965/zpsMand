<!--
 * @Author: your name
 * @Date: 2021-08-30 18:32:13
 * @LastEditTime: 2021-08-30 19:58:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zps每时每刻\zpsMand\zpsapp\src\views\options\remove-contract.vue
-->
<template>
    <div class="remove-contract">
        <!-- <van-divider>注销当前账号</van-divider> -->
        <!-- 注销当前账号 -->
        <div class="title">
            <i class="lf"></i>
            <p>注销当前账号</p>
            <i class="rf"></i>
        </div>
        <!-- 注销提示内容 -->
        <div class="notice">
            <img
                data-v-49b94d5e=""
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAkCAYAAAAKNyObAAAAAXNSR0IArs4c6QAABGNJREFUWAnFWF1oHFUU/u7smtmu0hTFUm1jW4lUQqtRUB/0JZaqAR9UUBGkaAUrVvTVH3zQF1NJC4pIRVCKPvkgPmhSQZtnH0QFlf5EQ2PVWrQYTHZnNrNz/c6Uyc6dvTM7s6FkINx7zvnOd77cuffMZRVW+WiNij+NZ0mzHxrboTDH+RF3HO8qhXA19Go1yXoGVb+JTyjwwTQPiT9163hUjSFIx4raTlGgDec18apNmGA18JDEbXlFfX2vnDeNHVTwI8VVs4rxtQaqgl3uvTiRhcnz979yGpN5wqSoxHWAyTwBebG+Vq45jd3c6l/lESdjXL09tfuK4+Pc0ivH1XCUxuGYoNAY4pDkFcImQKUTvCnsY6GbEhw9p4LnHn2qJzAFKPVa2Tqu8Bo4TY5NJk8Fla0H4Gy4DeHCt2ifeYcbrquDnKvVcQNby6KZm21lnjRbClvDi/SnhAHVXe+jOvRklFLZ/DicwVux/MPeNMUm5r9E5yvpQJZdeOX0lxjyA5xk/1pnkLmb4d79GxT7Rvxovkd/5jrAOxu7opGIpjuAG9UezBuBDKPwnvPamOgSRlJ1+bAhTOqIUKc+3FVS8r1lvNEVyHAUEtc6htv5Xz9m5Wj9bXXr5QtWv/AInzWYchYS1w5xmG+q894SJLoxy2bbTnik+WropVnDFxvCI3yxnTf2FMcbx8P8TN2ZSRL60I1fzbDstbBh+pIW+fxjeCTpss1zxekpuDrEQVti0qcXf06aCJdOGrbN4GJPCL8tFvtyxbWAF7iJt8fgrFEvmmL0krTC/Ed4hT8PlSmO/9XVJHg5LzmO6YYpRvZhkUf4pU4WNlOcD7zGzTuYlZj0h4unkiYPgynWCCYM4Zc6CZcxtYrzpzDCQ/C0gcwxdNM8EF0HJCdX6kT1LBirOC73JP8qFrzd5f1ptBOd+jLYky56pY7Us2G6xPHWcQ+Xe9wGzvaxz/nnorAO/gOChWyoJSL1pG46ZHz4CapwiQ+lQUXs4Jc3oWrXQLfsX4aeHDq6843yy7fS0Y2uzzvXfva1Iz2JLhFAOXimNo73YvoVcTzS6z3wrqaxMQ6WGZ1reVXacAfCf79B+MfHZVI7WIXztfUYVneBewOdq7OnedfqU1h15C0MjH6E6rbnLo4jb3cKlpmxvrfQ6a3RyumvsdX3cYJ7rlaGK8LWtsAdmzeuTdF97vgQD8nvpem45zzX5Z1vN85Ep9XzcbAvYSyt1vEXCDImH7FV/fqkq/BcdFDPhCQo3q1ubrfxfeHsNHBgI2/CZ6Gcy1YiOgzgH98CtP5a8ZWdVCoYdXg6ny+baOBb5xGcft1wBbO0VyFMyESXYvOb41JuM9j7MJwrx6AGb4Fe+A7hhZk+GMwUbpQ55X2BJX4+6mZo7S2Ka8iBmF97KVYF8w4P1ofW0Fo7HXyguN/kl8nPON6/1nri+lywz/nL6ANRg6IwORhP0LmX850crxJfDL7UIwuFWuEfjj9xPMpfpI5Sg/4f/zSDNv9SPccAAAAASUVORK5CYII="
                style="width:20px;height:20px;"
            >
            注销账号为不可恢复操作，注销账号后您将无法找回本账号，以及本账号相关的内容与信息；
        </div>
        <!-- 注销按钮 -->
        <van-button class="offBtn" type="info" plain block>我理解并同意，仍要注销</van-button>
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
.remove-contract {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  //   注销当前账号 样式
  .title {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      width: 2.13333rem;
      width: 21.33333vw;
      height: 0.02667rem;
      height: 0.26667vw;
      border-radius: 1px;
      opacity: 0.49;
    }
    .lf {
      background: linear-gradient(90deg, transparent, #000);
    }
    .rf {
      background: linear-gradient(90deg, #000, transparent);
    }
    p {
      font-size: 0.34667rem;
      font-size: 3.46667vw;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #8c8c8c;
      padding: 0 0.13333rem;
      padding: 0 1.33333vw;
    }
  }
  //   注销提示内容
  .notice {
    margin-top: 30px;
    height: 150px;
    background-color: #f5f5f5;
    line-height: 70px;
    font-size: 25px;
    font-weight: 400;
    padding: 5px 6px;
    box-sizing: border-box;
    color: #5b6066;
  }
  //   注销按钮
  .offBtn {
    //   width: 700px;
    width: 90%;
    position: fixed;
    bottom: 10px;
    left: 10px;
    right: 10px;
    margin: auto;
    text-align: center;
    border-radius: 50px;
  }
}
</style>