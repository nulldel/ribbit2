<template>
  <div class="xtx-carousel" @mouseenter="stop()" @mouseleave="start()">
    <!-- 轮播图片 -->

    <ul class="carousel-body">
      <li
        class="carousel-item"
        v-for="(item, i) in sliders"
        :key="i"
        :class="{ fade: index === i }"
      >
        <RouterLink to="/">
          <img :src="item.imgUrl" alt="" />
        </RouterLink>
      </li>
    </ul>

    <!-- 轮播左右按钮 -->
    <a @click="toggle(-1)" href="javascript:;" class="carousel-btn prev"><i class="iconfont icon-angle-left"></i></a>
    <a @click="toggle(+1)" href="javascript:;" class="carousel-btn next"><i class="iconfont icon-angle-right"></i></a>

    <!-- 轮播底部5个点 -->
    <div class="carousel-indicator">
      <span
        @click="index = i"
        v-for="(item, i) in sliders"
        :key="i"
        :class="{ active: index === i }"
      ></span>
    </div>
  </div>
</template>

<script>
import { onUnmounted, ref, watch } from 'vue'
export default {
  name: 'xtxCarousel',
  props: {
    sliders: {
      type: Array,
      default: () => []
    },
    duration: {
      type: Number,
      default: 3000
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  setup (props) {
    const index = ref(0)
    let timer = null
    // 1自动播放 （添加定时器用来改变index的数值）
    const autoPlayFn = () => {
      clearInterval(timer)
      timer = setInterval(() => {
        index.value++ // index不能一直加呀，index的数值不能超过sliders数组的长度
        if (index.value >= props.sliders.length) {
          index.value = 0
        }
      }, props.duration)
    }
    // 2开启监听器，sliders有数据的时候，并且outoPlay为true的时候开启
    watch(
      () => props.sliders,
      (newVal) => {
        if (newVal.length && props.autoPlay) {
          index.value = 0
          autoPlayFn()
        }
      },
      { immediate: true }
    )
    // 3鼠标进入轮播停止，移开 开启轮播
    // 停止
    const stop = () => {
      if (timer) {
        clearInterval(timer)
      }
    }

    // 开启
    const start = () => {
      if (props.sliders.length && props.autoPlay) {
        autoPlayFn()
      }
    }
    // 4 左右两边图片的切换按钮
    // 上一张 下一张
    const toggle = (step) => {
      const newIndex = index.value + step
      if (newIndex >= props.sliders.length) {
        index.value = 0
        return
      }
      if (newIndex < 0) {
        index.value = props.sliders.length - 1
        return
      }
      index.value = newIndex
    }
    // 组件销毁时清理定时器 因为 不清除定时器，组件卸载时定时器依然运行
    onUnmounted(() => {
      clearInterval(timer)
    })

    return { index, stop, start, toggle }
  }
}
</script>

<style scoped lang="less">
.xtx-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        // z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      // z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background: #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      // z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev {
        left: 20px;
      }
      &.next {
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>
