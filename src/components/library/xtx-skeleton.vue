<template>
  <div class="xtx-skeleton" :style="{width,height}" :class="{shan:animated}">
    <div class="block" :style="{backgroundColor:bg}"></div>
  </div>
</template>

<script>
export default {
  name: 'xtxSkeleton',
  props: {
    bg: {
      type: String,
      default: '#efefef'
    },
    width: {
      type: String,
      default: '100px'
    },
    height: {
      type: String,
      default: '100px'
    },
    animated: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less" scoped>
.xtx-skeleton {
  display: inline-block;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  .block {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
}
.shan {
  &::after {
    content: "";
    position: absolute;
    // 调用动画
    animation: shan 1.5s ease 0s infinite;
    top: 0;
    width: 50px;
    height: 100px;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-45deg);
  }
}
//定义动画
@keyframes shan {
  0% {
    left: -100%;
  }
  100% {
    left: 120%;
  }
}
</style>>
