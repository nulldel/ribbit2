<template>
<div class="home-banner">
<xtx-carousel :sliders="sliders"></xtx-carousel>
</div>
</template>

<script>
import { ref } from 'vue'
import { findBanner } from '@/api/home'
export default {
  name: 'homeBanner',
  setup () {
    const sliders = ref([])
    // console.log(findBanner())
    findBanner().then((data) => {
      // console.log(data)
      sliders.value = data.result
    })

    return { sliders }
  }
}
</script>

<style lang="less" scoped>
.home-banner {
  width: 1240px;
  height: 500px;
  // position: absolute;
  // left: 0;
  // top: 0;
  // z-index: 98
}
.xtx-carousel {
  ::v-deep .carousel-btn.prev {
    left: 270px;
  }
  ::v-deep .carousel-indicator {
    padding-left: 250px;
  }
}
</style>
