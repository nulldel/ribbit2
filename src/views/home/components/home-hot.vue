<template>
 <HomePanel title="人气推荐" sub-title="人气爆款 不容错过" ref="panel">
    <ul ref="pannel" class="goods-list">
      <li v-for="item in goods" :key="item.id">
        <RouterLink to="/">
          <img :src="item.picture" alt="">
          <p class="name">{{item.title}}</p>
          <p class="desc">{{item.alt}}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>

<script>
// export 和 export default 都可用于导出常量、函数、文件、模块等 ，
// 你可以在其它文件或模块中通过 import 将其导入，以便能够对其进行使用
// 在一个文件或模块中，export、import可以有多个，export default仅有一个
// 通过export方式导出，在导入时要加{ }，且不能自定义名字，export default不用加{ }，且可以自定义名字

import { findHot } from '@/api/home'
import HomePanel from './home-panel.vue'
import { useLazyData } from '@/hooks'
import { ref } from 'vue'
export default {
  name: 'HomeHot',
  components: {
    HomePanel
  },
  setup () {
    // const goods = ref([])
    // findHot().then(data => {
    //   goods.value = data.result
    // })
    const panel = ref(null)
    const result = useLazyData(panel, findHot)
    return { goods: result, panel }
  }
}
</script>

<style scoped lang='less'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
