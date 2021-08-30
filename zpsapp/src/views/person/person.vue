<!--
 * @Author: your name
 * @Date: 2021-08-27 19:55:46
 * @LastEditTime: 2021-08-30 21:09:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zps每时每刻\zpsMand\zpsapp\src\views\person\person.vue
-->
<template>
  <div class="zps_person">
    <!-- 上半部分  登录的时候的状态 -->
    <div class="zps_top" v-if="$store.state.toKen">
      <div class="header">
        <div>
          <img
            src="http://120.53.31.103:84/uploads/avatar.jpg"
            alt=""
            style="width:60px;height:60px;border-radius:50%"
          >
        </div>
        <div class="name">134****9965</div>
        <div class="qiAn">已签到</div>
      </div>
      <van-grid :column-num="3" style="margin-top:160px;">
        <van-grid-item v-for="value in 1" :key="value">
          <p style="color: #5bb8f5;font-size:20px;">0</p>
          <p>我的学习</p>
        </van-grid-item>
        <van-grid-item v-for="value in 1" :key="value">
          <p style="color: #e60012;font-size:20px;">0</p>
          <p>本课课时</p>
        </van-grid-item>
        <van-grid-item v-for="value in 1" :key="value">
          <p style="color: #e74d3d;font-size:20px;">4</p>
          <p>我的积分</p>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 上半部分  未登录的时候的状态 -->
    <div class="zps_top" v-else>
      <div class="header1" style="text-align:center;">
        <div>
          <img
            src="http://120.53.31.103:86/img/avatar.71c6d2b4.png"
            alt=""
            style="width:60px;height:60px;border-radius:50%"
          >
          <p
            style="font-size: 4.53333vw;
    color: #fff;
    margin-top: .48rem;
    margin-top: 4.8vw;"
            @click="$router.push('login')"
          >登录/注册</p>
        </div>
      </div>
      <van-grid :column-num="3" style="margin-top:160px;">
        <van-grid-item v-for="value in 1" :key="value">
          <p style="color: #5bb8f5;font-size:20px;">0</p>
          <p>我的学习</p>
        </van-grid-item>
        <van-grid-item v-for="value in 1" :key="value">
          <p style="color: #e60012;font-size:20px;">0</p>
          <p>本课课时</p>
        </van-grid-item>
        <van-grid-item v-for="value in 1" :key="value">
          <p style="color: #e74d3d;font-size:20px;">0</p>
          <p>我的积分</p>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 单元格 -->
    <div class="zps_list">
      <!-- 单元格 -->
      <van-cell
        title="我的作业"
        icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAAAXNSR0IArs4c6QAABFZJREFUWAnNWF1Ik1EYbt823WKrZMSgUghCg64lia68sZxGSQjbLPwZVoKC0U0XgXfdWFYjC1lac9OwQsm0H4gKo7C8CKFIDSEd/pCglbZG6nre9Z2xtrN5apt64Ox85z3veZ7ne8+7853vU2wIKWVlZVt9Pt9Zv99vUigUGWg1IcNxXQLvJ/DG0Pakpqaeb2lp+bISoII5lJSUmJaWlm6gb2S2JLbTSqWywuVy9cTiCIiThT0IcZzAHb7Fnc6F2OK6BN4W4GUDZBsDgsCCWAIV5eXleq/X+x4T0lG9kiSddrvd1xlAolur1XpyeXn5InC1qONarXZPc3Pzdx6PhBw7gwESRqUmmcKIQMavoWuUdJn/Ty/sV8JdFJINYf/Y3t7uCBtPSpd4iI/AGT+PSILTLhpAPvTzHJJlY3yMn8cjwUlPA8g1D88hWTbGx/h5PBLPuF5sKhEhFovFjjs8BV+liH8Un76srKzcurq6xSjjEWbRyOVjZjzCiHifx+MxRCiIYRCKHPIjD5ErAM5/C0Tiv3Y4HNMxtEQMCYnDLv4JMy9FzE6yQXRZkyyDDy8UOf7U+KxY5pdA8KNSyy1rJg6p8gi7wE6dTjcRrgzP3xwcCkbWTBwJamtr+xwqDNuMNDw87MAjrQx/wA9C4sxm8wksQwWAYv5bATgJvxqQjoaSilzLwm4C4xj5ox0TEgffc3DeLkICcc/gd0HEl/l0dHQoOzs7W9E3y7YB4FiExGH9bTglWzExZuQAOJmSkuJkpCItIqaCMDd8i2X/fr1en9fU1PRVSBwlLyZSTWiprKxUI8duA7RIBn6FDf8ghH2j/prtc4hYyvz8/B2kCxPWl5aWlofDaEAYiROKHDkmslRXV6cODQ3dA6ZJxn2uUqkKGhsbF0J5Vj1ypaWlmpmZmS4mDHn6FDlmam1t/UsYiVxVcbW1tVq8M9wH7wEih7AnRqOxEDn2g/rhRWhZsZPT25LIeY72uaPIm7fhREj+jVNTU92w59IY/HoNBkNRQ0ODL9yX9UUjdxiJq0FVr1AzAJzDwFlbVVWlQ/L3os+EdWdmZh6x2+1RhdFcochBUD7+4ofgH3Ofg9+kWq2mrSFYSNjc3NxDjO0nIyLWhedpMf6tv4JOUS6ExOFVjl7jqP5zmZ2dpXQICEN7FxEzQ9iizWYzLiws1OOmHyMNXDxg0WXlzRW1vUG0PKjX8A4REEYTIew4mhJE9Go0IKHIRZssYkfUX8CPfVEITkHENuP0QQ/4TUFj2MVqRC6MUrxLb/yBjyi4ix3i0+L3ZHyMn4dIb/z08kL/or08h2TZGB/j5/Fg6SXaGGntd2OzreA5JdqGw6uN+AiX8fM4JHwCrcfAuDx4hU69PMdE2eRT9WUZb1zm58Jzv2wi5B54D6Am7MsmsNiXzeCJesUvm0zyevwmHHwcDQ4OjmRnZ9/CcZz2PvqmoUNN5D5Iz9FRrIpTo9FYnE7nO/Rjlt8YzLRse16RTQAAAABJRU5ErkJggg=="
        is-link
      />
      <van-cell
        title="我的社区"
        icon="data:image/png;base64,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"
        is-link
      />
    </div>
    <!-- 单元格 -->
    <div class="zps_list1">
      <!-- 单元格 -->
      <van-cell
        title="课程订单"
        icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAnCAYAAABnlOo2AAADzklEQVRYR+2YT2gcVRzHv7+3mezSZLuo3Yv/EKOkSNVKRMQi5CKYaqIHh8zMrhYPBvXSXNVLDlItePAgIqn20CTzZlyEWj0pPdiDglAPgqWCtbREwarxT6DddHfeV16alW1J3XF3Igb6YGF483vf3+d93868Nz9BW3Ndt79QKDj1el1WVlakVCqZoaGhCzMzM6YV5nne/SIyD+BOAKp9fOuaJEXkdC6Xe35+fv7T9pjR0dFCuVzus32FQoH1er1Rq9UutmLEXlQqla0knzTG7BKRMklHKQWSDWOMjuO41hoQBMEXJB9cD+TKPhH5NgzD7W1jd5KcBnD9JWZpiMhPJI81m83DtVrtgoyPj28ZGBh4Q0QqALauk+iA1nqq1e/7/ikAt6cBArCktb6hbeyLAN4CsGpEm6N/AHgnSZJXpVqtjiZJ8gkAa+OvInIWwG9rwRdzudz+ubm5z9pmuZfkDACnA1SD5NtRFL3SiltbiX0AhtegriN5C4BtAM6TfEJ83/8YwGMicsIYsyeKouMAeLVkU1NTzvLy8kMky0qpy2baGpMkCURkKUmSz+0y/AO4BEFwL4BDJO8GcMQCLQK4CcDLWuvXUi5FpmFBEFjX3wSwaIFW3RARPwzDKNNMKcU8z7MrZFcK14DWM21zO+R53o0A7K/nppT6OQzDM1cKpXaoWq3ekSTJAQBDPdNcEjgHYI/W+pt2vdRAnuc9LCKHANiXV8+N5JLdEbTWl+1vqYHGxsbypVJpd1YOicgPrT2rK4d6tiSlQGqHUur1HLa5gSYnJ3cope7q2QYAxpjv4jj+quvHPgiCncaYD0Xk1iyA1o43u8Mw/LKrP7Xv+9tJvquUuicLIJKnATyttf66KyB7ZnZd9+a+vr5iFkDNZvM8gLO1Wi3pFigLjo4am/sp6zi9DAL+lUMTExPFfD5fyCAv+vv7VxYWFv7s+rH3PO82EdkPYEcWQCLyfZIk03Ec20+pv1tqhyqVyi5jzPtZnYcA/E7yqSiKjnYF5LpuznEczxjzQEYOnSgWiwdnZ2cbXQFlAZFGI/WSpRHLIuYaUCcX//cO2Y3OFp4CrbXuNJuNuF+pVB43xnxkj0y2+nCGpD3vvKS1fn0jEnbS9H3/WQAHAfxov+2PABgXkUWSj2itT3YSyPL+yMiIMzw8fMxW5UgetUCPkjwsInkAywDeA3DclvOyTHwVrW1KqWdI2hevLR/uXS3pDQ4O7iP5nIhs+Q8g1kthJx87jjO9WgFzXbfkOM4YgBdI3kdy0FYkNxjOVnbPkTyplPqAZKS1/uUvWPozq8KNOasAAAAASUVORK5CYII="
        is-link
      />
      <van-cell
        title="图书订单"
        icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAnCAYAAAAYRfjHAAAAAXNSR0IArs4c6QAAAgpJREFUWAntWL1Lw0AUb9IERBzESRTExeIkCo7Ojk4KppS6+AW6iOgiYgdHxUUREfyAthH8+At0EOvmP9C4OEstuogQk/h7xStH29BLTerQHLy+39179373XpK7pJKmaXuRSGQZokCa0b5Bsi9LkrQE0CxSSkwhTsVxHJV6aC+QJwK/bZKBBvSVy5xRjPcTZzlTrOI2m83OsQm4BA7DsiyPQZ5Zv1Lbtj0AybFxXdenGOZ1PB4/BuksjZWJeYdKjKBvmUzmtXKc9bHILoZFtSzq6LdfSOx3RV3jhaV2LY3fhtYrtdDOxcqcSqXkfD6/iP4Gtlg6ZVawzd4wuxctXOpkMjlkGMYjgh9AerDn9kGusf8eRaPRdi+k5CuUMbLbMk2TTqsqf5DPW5Y14ZVYKGMEn2akWIQJ2YHccWTdHBaCQsQsEshyqqqO4LquxWKxcfQ3YbOY3YuuKh2bjKDvyLST+sAF4HUcjWfApXMaN5oN03YikbhHqXXgXgj5fpKu11wzRoBVTDagDxVFGcThfspI+aDpdPoB/WHYLqA/ILu83Q27ZozsTjCJpG7Dogpw0uo6cg6uGXM+gcCQOJCy1graeqWWuBd3Om2+apXFx7E2xCo9wvRThNALOeEOSDNaUcGnyQK2wxmwsW+ooInpkDkPmiSM38IVoOf48j/yp2f3L385NLzmf9urfwBdZYri/H8G3wAAAABJRU5ErkJggg=="
        is-link
      />
    </div>
    <!-- 单元格 -->
    <div class="zps_list1">
      <!-- 单元格 -->
      <van-cell
        title="优惠券"
        icon="data:image/png;base64,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"
        is-link
      />
      <van-cell
        title="学习卡"
        icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAeCAYAAABaKIzgAAAC4UlEQVRYR+2YPWgUQRTH/29uOfyIgkjQUhIQNII2gmATEYW0h7uzQRQJGhALo4LBDyyUKEkTo4Wohd8mc8MmvemsRC1E0UaiaKWIRBGSyDrvyR5JjJKYy+0eEclUCzvv/X/zn9l9M0P41VShUFiTz+f3A9gGoIaIZMr7qj+KCInIKBENxnF8M4qiIQCcCNO4ugqCYFcul7sAoK7qRGUIiMhbETlpjDEApASqtV6nlLIAGsZzfBGRJwBGpgymjPSpuggRLRKRTUS0KskkIkNxHDdFUfS6BBoEQYtSqgfAUgAvReSAMeZRKtkKg7XW9Uqp+yKyGcCoiLQaY+4loBQEwVGlVEeyJpm5zRhzfWJtVKiXJozCMGwhom4Ai5j5uDGm50/QMWYOjDEP0iiljdVa71RK3QGwwjl3olgsdv8GCmCMiPze3t7BtGJp4pubm3cAuLsAmsbFqbEVO+r7/nql1Nnkt0E08etNhyVSqiUfnHMd1tpnmYCGYXiOiE6nQ5s+mpm7jDHtmYBqrTcS0RkAKykjS5lLlfETgE5jTFJcJlvFU18NJ/+WcwE0a8f/f0d9388ppeqZecl07jnnhvv7+99l5WzFjmqtC0TUCSA/A8xIHMd7oih6mgVsGtAuIjpCRGoGEMfMh40xV+YVtFAo1OXz+d0Alk8Hwswf4zi+MTAw8HleQRPxxsZGr7a2dlpHrbU/sty/Vjz1Wbg0lxwLoHNxq5y+ZTkqIvN+FJkRNAzDNiI6n4yWmY8x81VrrStn9NXoo7Xeq5S6DGCxiLT39fVdLO2CwzDcR0SXRKQGwHPnXKu19nE1IGbL6fv+as/zbgPYDuC7c+5gsVi8NXEBsYGIIiJamyQSkWEAyQHva1b7z9kAx3WTEr2FiEq3NSLy3jnXZK19NXml4/u+73leMv3/xJUOgDfMfMoYU0xW5OQBKNl4eJ7XICKHAGwFsKwcF6rQ5xuAh865a9baFwBK38pPYl0bZ/t4Eu8AAAAASUVORK5CYII="
        is-link
      />
      <van-cell
        title="分销中心"
        icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAeCAYAAABaKIzgAAAC4UlEQVRYR+2YPWgUQRTH/29uOfyIgkjQUhIQNII2gmATEYW0h7uzQRQJGhALo4LBDyyUKEkTo4Wohd8mc8MmvemsRC1E0UaiaKWIRBGSyDrvyR5JjJKYy+0eEclUCzvv/X/zn9l9M0P41VShUFiTz+f3A9gGoIaIZMr7qj+KCInIKBENxnF8M4qiIQCcCNO4ugqCYFcul7sAoK7qRGUIiMhbETlpjDEApASqtV6nlLIAGsZzfBGRJwBGpgymjPSpuggRLRKRTUS0KskkIkNxHDdFUfS6BBoEQYtSqgfAUgAvReSAMeZRKtkKg7XW9Uqp+yKyGcCoiLQaY+4loBQEwVGlVEeyJpm5zRhzfWJtVKiXJozCMGwhom4Ai5j5uDGm50/QMWYOjDEP0iiljdVa71RK3QGwwjl3olgsdv8GCmCMiPze3t7BtGJp4pubm3cAuLsAmsbFqbEVO+r7/nql1Nnkt0E08etNhyVSqiUfnHMd1tpnmYCGYXiOiE6nQ5s+mpm7jDHtmYBqrTcS0RkAKykjS5lLlfETgE5jTFJcJlvFU18NJ/+WcwE0a8f/f0d9388ppeqZecl07jnnhvv7+99l5WzFjmqtC0TUCSA/A8xIHMd7oih6mgVsGtAuIjpCRGoGEMfMh40xV+YVtFAo1OXz+d0Alk8Hwswf4zi+MTAw8HleQRPxxsZGr7a2dlpHrbU/sty/Vjz1Wbg0lxwLoHNxq5y+ZTkqIvN+FJkRNAzDNiI6n4yWmY8x81VrrStn9NXoo7Xeq5S6DGCxiLT39fVdLO2CwzDcR0SXRKQGwHPnXKu19nE1IGbL6fv+as/zbgPYDuC7c+5gsVi8NXEBsYGIIiJamyQSkWEAyQHva1b7z9kAx3WTEr2FiEq3NSLy3jnXZK19NXml4/u+73leMv3/xJUOgDfMfMoYU0xW5OQBKNl4eJ7XICKHAGwFsKwcF6rQ5xuAh865a9baFwBK38pPYl0bZ/t4Eu8AAAAASUVORK5CYII="
        is-link
      />
    </div>
    <!-- 单元格 -->
    <div class="zps_list1">
      <!-- 单元格 -->
      <van-cell
        title="消息中心"
        icon="data:image/png;base64,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"
        is-link
      />
      <van-cell title="地址管理" icon="location-o" is-link/>
      <van-cell title="关于我们" icon="friends-o" is-link/>
      <van-cell
        title="意见反馈"
        icon="data:image/png;base64,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"
        is-link
      />
      <van-cell title="设置" icon="setting-o" is-link to="/options"/>
    </div>
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
.zps_person {
  width: 750px;
  background: #f7f8fa;
  box-sizing: border-box;
  overflow: hidden;
  padding-bottom: 2rem;
  padding-bottom: 20vw;
  // 上半部分
  .zps_top {
    width: 750px;
    height: 500px;
    background: url("http://120.53.31.103:86/img/user_bg.7d633ee2.png")
      no-repeat top;
    background-size: 100%;
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
      }
      .qiAn {
        display: block;
        background: #5994ed;
        width: 140px;
        height: 50px;
        color: #fff;
        font-size: 15px;
        text-align: center;
        line-height: 50px;
        position: absolute;
        top: 50%;
        right: -100px;
        border-radius: 35% 0px 0px 35%;
      }
    }
    // 未登录状态的样式
    .header1 {
      width: 750px;
      height: 100px;
      box-sizing: border-box;
      box-sizing: border-box;
      display: flex;
      padding: 3px;
      position: relative;
      justify-content: space-evenly;

      .name {
        display: block;
        line-height: 100px;
        width: 200px;
        height: 100%;
        color: #fff;
        font-size: 35px;
        margin-left: -100px;
      }
      .qiAn {
        display: block;
        background: #5994ed;
        width: 140px;
        height: 50px;
        color: #fff;
        font-size: 15px;
        text-align: center;
        line-height: 50px;
        position: absolute;
        top: 50%;
        right: -100px;
        border-radius: 35% 0px 0px 35%;
      }
    }
  }
  // 单元格
  .zps_list {
    width: 750px;
    margin-top: 180px;
  }
  // 单元格
  .zps_list1 {
    width: 750px;
    margin-top: 20px;
  }
}
</style>