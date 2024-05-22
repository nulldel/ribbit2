<template>
    <div class="sub-filter" v-if="filterData && !filterLoading">
    <div class="item">
      <div class="head">品牌：</div>
      <div class="body">
        <a :class="{active:filterData.selectedBrand===brand.id}" href="javasript:;" v-for="brand in filterData.brands" :key="brand.id">{{brand.name}}</a>
      </div>
    </div>
    <div class="item" v-for="p in filterData.saleProperties" :key="p.id">
      <div class="head">{{p.name}}</div>
      <div class="body">
        <a :class="{active:p.selectedProp===attr.id}" href="javasript:;" v-for="attr in p.properties" :key="attr.id">{{attr.name}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { findSubCategroyFilter } from '@/api/category'
import { useRoute } from 'vue-router'
import { watch, ref } from 'vue'
export default {
  name: 'subFilter',
  setup () {
    // route.params.id的变化，筛选区的数据也会变化用watch来监听route.params.id
    const route = useRoute()
    const filterData = ref(null)
    const filterLoading = ref(false)
    // 4. 分类发生变化的时候需要重新获取筛选数据，需要使用侦听器
    watch(() => route.params.id, (newVal, oldVal) => {
      // 当你从二级分类去顶级分类也会拿到ID，不能去加载数据因为它不是二级分类的ID
      if (newVal && route.path === ('/category/sub/' + newVal)) {
        filterLoading.value = true
        newVal && findSubCategroyFilter(route.params.id).then(({ result }) => {
        // 品牌全部
          result.selectedBrand = null
          result.brands.unshift({ id: null, name: '全部' })
          // 销售属性全部
          result.saleProperties.forEach(p => {
            p.selectedProp = undefined
            p.properties.unshift({ id: null, name: '全部' })
          })
          filterData.value = result
          console.log(filterData.value)
          filterLoading.value = false
        })
      }
    }, { immediate: true })
    return { filterData, filterLoading }
  }
}
</script>
<style scoped lang='less'>
  // 筛选区
  .sub-filter {
    background: #fff;
    padding: 25px;
    .item {
      display: flex;
      line-height: 40px;
      .head {
        width: 80px;
        color: #999;
      }
      .body {
        flex: 1;
        a {
          margin-right: 36px;
          transition: all .3s;
          display: inline-block;
          &.active,
          &:hover {
            color: @xtxColor;
          }
        }
      }
    }
  }
</style>
