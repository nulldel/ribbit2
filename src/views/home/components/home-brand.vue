<template>
<HomePanel title="热门品牌" sub-title="品牌经典，品质保证">
    <template v-slot:right>
      <a href="javascript:;" class="iconfont icon-angle-left prev"></a>
      <a href="javascript:;" class="iconfont icon-angle-right next"></a>
    </template>
    <div class="box" ref="box">
      <ul class="list" ref="target">
        <li v-for="item in brands" :key="item.id">
            <RouterLink to="/">
              <img v-lazyload="item.picture"  alt="">
            </RouterLink>
        </li>
     </ul>
    </div>
</HomePanel>
</template>

<script>
import HomePanel from './home-panel.vue'
import { findBrand } from '@/api/home'
import { useLazyData } from '@/hooks'
import { ref } from 'vue'
export default {
  name: 'HomeBrand',
  components: {
    HomePanel
  },
  setup () {
    const target = ref(null)
    // const brands = ref([])
    // useLazyData(target, () => {
    //   findBrand(10).then(data => {
    //     brands.value = data.result
    //   })
    // })
    const result = useLazyData(target, () => findBrand(10))
    return { brands: result, target }
  }

}
</script>

<style scoped lang='less'>
.home-panel {
  background:#f5f5f5
}
.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background: @xtxColor;
  &::before {
    font-size: 12px;
    position: relative;
    top: -2px
  }
  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}
.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;
  .list {
    width: 200%;
    display: flex;
    transition: all 1s;
    li {
      margin-right: 10px;
      width: 240px;
      &:nth-child(5n) {
        margin-right: 0;
      }
      img {
        width: 240px;
        height: 305px;
      }
    }
  }
}
</style>
