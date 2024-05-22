<template>
  <div class="home-category">
    <ul class="menu">
      <li
        v-for="item in meuns"
        :key="item.id"
        @mouseenter="categoryId = item.id"
        @mouseleave="categoryId = null"
      >
        <RouterLink to="/">{{ item.name }}</RouterLink>
        <template v-if="item.children">
        <RouterLink to="/" v-for="sub in item.children" :key="sub.id">{{
          sub.name
        }}</RouterLink>
        </template>
        <!-- <RouterLink to="/">水具杯壶</RouterLink> -->
        <span v-else>
          <xtx-skeleton width="60px" height="18px" style="margin-right:5px" bg="rgba(255,255,255,0.2)" ></xtx-skeleton>
          <xtx-skeleton width="50px" height="18px" bg="rgba(255,255,255,0.2)"></xtx-skeleton>
        </span>
      </li>
    </ul>
  </div>

  <!-- 分类弹层 -->
  <div class="layer" :class="{weight:currCategory}">
    <h4 v-if="currCategory">
      {{ currCategory.id === "brand" ? "品牌" : "分类" }}推荐
      <small>根据您的购买或浏览记录推荐</small>
    </h4>
    <ul v-if="currCategory && currCategory.goods && currCategory.goods.length">
      <li v-for="item1 in currCategory.goods" :key="item1.id">
        <RouterLink to="/">
          <img :src="item1.picture" alt="" />
          <div class="info">
            <p class="name ellipsis-2">{{ item1.name }}</p>
            <p class="desc ellipsis">{{ item1.desc }}</p>
            <p class="price"><i>¥</i>{{ item1.price }}</p>
          </div>
        </RouterLink>
      </li>
    </ul>
    <!-- 品牌处理 -->
    <ul
      v-if="currCategory && currCategory.brands && currCategory.brands.length"
    >
      <li class="brand" v-for="item3 in currCategory.brands" :key="item3.id">
        <RouterLink to="/">
          <img :src="item3.picture" alt="" />
          <div class="info">
            <p class="place">
              <i class="iconfont icon-dingwei"></i>{{ item3.place }}
            </p>
            <p class="name ellipsis">{{ item3.name }}</p>
            <p class="desc ellipsis-2">{{ item3.desc }}</p>
          </div>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { findBrand } from '@/api/home'
export default {
  name: 'homeCategory',
  setup () {
    // 实例创建前执行的函数  在这里没有this.
    // 一.整理透明区里的分类
    // 最后一个分类品牌 品牌推荐  list里没有自己造一个
    // 在vuex中拿数据
    const store = useStore()
    const brand = reactive({
      id: 'brand',
      name: '品牌',
      children: [{ id: 'brand-chilren', name: '品牌推荐' }],
      brands: []
    })

    const meuns = computed(() => {
      const list = store.state.category.list.map((item) => {
        return {
          id: item.id,
          name: item.name,
          children: item.children && item.children.slice(0, 2),
          goods: item.goods
        }
      })
      list.push(brand)
      return list
    })
    // console.log(store.state.category)
    // 进行整理
    // const list = store.state.category.list.map(item => {
    //   return {
    //     id: item.id,
    //     name: item.name,
    //     children: item.children && item.children.slice(0, 2)
    //   }
    // })
    // // 把品牌放到最后一项
    // list.push(bands)

    // console.log(list)
    // setup 的return

    // 二.9个小方块的数据渲染
    // 1.定义一个数据ID来记录鼠标经过左侧的哪个分类
    // 2.通过ID来查找到对应的数据
    // 3.渲染数据
    // console.log(meuns)
    const categoryId = ref(null)
    const currCategory = computed(() => {
      // 在meuns 里面找对应的数据
      return meuns.value.find((item) => item.id === categoryId.value)
    })

    // 三.处理品牌数据
    findBrand().then(({ result }) => {
      // console.log(result)
      brand.brands = result
    })

    // console.log(currCategory)
    return { meuns, categoryId, currCategory }
  }
}
</script>

<style lang="less" scoped>
.home-category {
  z-index: 999;
    position: absolute;
    left: 0;
    top: 0;

  width: 250px;
  // height: 500px;
  background: rgba(0, 0, 0, 0.8);
  .menu {
    li {
      height: 50px;
      text-align: left;
      line-height: 50px;
      padding-left: 40px;
      &:hover {
        background-color: @xtxColor;
      }
      a {
        color: #fff;
        margin-right: 4px;
        &:first-child {
          font-size: 16px;
        }
      }
    }
  }
}
.layer {
  width: 990px;
  height: 500px;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  left: 250px;
  top: 0;
  // display: none;
  // padding: 0 10px;ma
  // margin-left: 15px;
  h4 {
    font-size: 20px;
    font-weight: normal;
    line-height: 80px;
    small {
      font-size: 16px;
      color: #666;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 310px;
      height: 120px;
      text-align: center;
      margin-right: 15px;
      margin-bottom: 15px;
      background-color: #fff;

      a {
        display: flex;
        img {
          width: 95px;
          height: 95px;
        }
        .info {
          padding-left: 10px;
          line-height: 24px;
          width: 190px;
          .name {
            font-size: 16px;
            color: #666;
          }
          .desc {
            color: #999;
          }
          .price {
            font-size: 22px;
            color: @priceColor;
            i {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
  li.brand {
    height: 180px;
    a {
      align-items: flex-start;
      img {
        width: 120px;
        height: 160px;
      }
      .info {
        p {
          margin-top: 8px;
        }
        .place {
          color: #999;
        }
      }
    }
  }
}

// 控制权重
.weight{
  z-index: 999;
}

</style>>
