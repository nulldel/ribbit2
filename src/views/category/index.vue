<template>
  <div class="top-category">
    <div class="container">
      <!-- 面包屑 -->
      <subBread></subBread>
      <!-- 轮播图 -->
      <xtxCarousel :sliders="sliders" style="height:500px" />
      <!-- 所有二级分类 -->
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="item in subList" :key="item.id">
            <a href="javascript:;">
              <img :src="item.picture" >
              <p>{{item.name}}</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 分类关联产品 -->
      <div class="ref-goods" v-for="item1 in subList" :key="item1.id">
        <div class="head">
          <h3>- {{item1.name}} -</h3>
          <p class="tag">温暖柔软，品质之选</p>
          <XtxMore />
        </div>
        <div class="body">
          <goodsItem v-for="g in item1.goods" :key="g.id"  :goods="g"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, watch } from 'vue'
import { findBanner } from '@/api/home'
import goodsItem from './components/goods-item.vue'
import { findTopCategory } from '@/api/category'
import { useRoute } from 'vue-router'
import subBread from './sub-bread.vue'
export default {
  name: 'TopCategory',
  components: {
    goodsItem,
    subBread
  },
  setup () {
    // 轮播图
    const sliders = ref([])
    findBanner().then(data => {
      sliders.value = data.result
    })

    // 商品推荐
    const subList = ref([])
    const route = useRoute()
    const getSubList = () => {
      findTopCategory(route.params.id).then(data => {
        // console.log(data.result.children)
        subList.value = data.result.children
      })
    }
    watch(() => route.params.id, (newVal) => {
      if (newVal && `/category/${newVal}` === route.path) getSubList()
    }, { immediate: true })

    return { sliders, subList }
  }
}
</script>
<style scoped lang="less">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .sub-list {
    margin-top: 20px;
    background-color: #fff;
    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;
      li {
        width: 168px;
        height: 160px;
        a {
          text-align: center;
          display: block;
          font-size: 16px;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            line-height: 40px;
          }
          &:hover {
            color: @xtxColor;
          }
        }
      }
    }
  }
}
.ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;
    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }
    .body {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 0 65px 30px;
    }
  }
</style>
