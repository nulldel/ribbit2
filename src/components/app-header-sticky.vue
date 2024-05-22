<template>
  <div class="app-header-sticky " :class="{show:y>=78}" >
    <div class="container" v-if="(y>=78)">
      <RouterLink to="/" class="logo"></RouterLink>
      <!-- 使用header-nav -->
      <appHeaderNav></appHeaderNav>
      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
// import { onMounted, ref } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import appHeaderNav from './app-header-nav.vue'
export default {
  name: 'AppHeaderSticky',
  components: {
    appHeaderNav
  },
  setup () {
    // const y = ref(0)
    // 监听滚动事件 滑动78px 就显示吸顶组件
    // onMounted(() => { // 组件挂载完成后执行
    //   window.onscroll = () => {
    //     y.value = document.documentElement.scrollTop
    //   }
    //   console.log(useWindowScroll())
    // })
    const { y } = useWindowScroll()
    return { y }
  }
}
</script>

<style lang="less" scoped>
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 999;
  opacity: 0;
  &.show{
    opacity: 1;
    transition: all 0.3s linear;
    transform: none;
  }
  .container {
    display: flex;
    align-items: center;
    // text-align: center;

    .logo {
      display: block;
      width: 200px;
      height: 80px;
      // background-image: url("../assets/images/logo.0940ebb5.png ");
      // background-repeat:no-repeat;
      // background-size:160px auto;
      // background-position:left;
      //图片地址 平铺repeat 水平重复吗 水平  垂直
      background: url("../assets/images/logo.0940ebb5.png") no-repeat right 2px;
      background-size: 160px auto;
    }
    .right{
        width: 220px;
        display: flex;
        text-align: center;
        padding-left: 40px;
        border-left: 2px solid @xtxColor;
        margin-left: 60px;
        a{
            width: 38px;
            font-size: 16px;
            margin-left: 20px;
            &:hover{
                color: @xtxColor;
            }
        }
    }
  }

}
</style>>
