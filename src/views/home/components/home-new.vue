<template>
  <div ref="target" class="home-new">
    <homePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
        <template #right><XtxMore path="/" /></template>
          <!-- 面板内容 -->
      <ul class="goods-list">
        <li v-for="item in goods" :key="item.id">
          <RouterLink :to="`/product/${item.id}`">
            <img :src="item.picture" alt="">
            <p class="name ellipsis">{{item.name}}</p>
            <p class="price">&yen;{{item.price}}</p>
          </RouterLink>
        </li>
      </ul>
    </homePanel>
  </div>
</template>

<script>
import homePanel from './home-panel.vue'
import { findNew } from '@/api/home'
import { useLazyData } from '@/hooks'
import { ref } from 'vue'
export default {
  name: 'HomeNew',
  components: { homePanel },
  setup () {
    // findNew().then(data => {
    //   goods.value = data.result
    // })

    // 懒加载的方式拿数据
    // const goods = ref([])
    const target = ref(null)
    const result = useLazyData(target, findNew)
    // console.log(goods)
    return { goods: result, target }
  }

}
</script>

<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: @priceColor;
    }
  }
}
</style>
