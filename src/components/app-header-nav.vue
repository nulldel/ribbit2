<template>
  <ul class="navs">
    <!-- <li><a href="">首页</a></li> -->
    <li> <RouterLink to="/">首页</RouterLink></li>

    <li v-for="item in list" :key="item.id"   @mousemove="show(item)" @mouseenter="show(item)" @mouseleave="hide(item)">
      <!-- 点击这个来到一级类目 -->
        <RouterLink :to="`/category/${item.id}`" @click="hide(item)">{{item.name}}</RouterLink>
      <!-- <a href="">{{item.name}}</a> -->
      <div class="layer" :class="{open:item.open}">
        <ul>
          <li v-for="item1 in item.children" :key="item1.id">
            <RouterLink :to="`/category/sub/${item1.id}`" @click="hide(item)">
              <img
                :src="item1.picture"
                alt=""
              />
              <!-- 点击后来到二级类目 -->
              <p>{{item1.name}}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
    </li>
    <!-- <li><a href="">美食</a></li>
    <li><a href="">服饰</a></li>
    <li><a href="">母婴</a></li>
    <li><a href="">个护</a></li>
    <li><a href="">严选</a></li>
    <li><a href="">数码</a></li>
    <li><a href="">运动</a></li>
    <li><a href="">杂项</a></li> -->
  </ul>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'appHeaderNav',
  // 在头部组件中进行渲染数据
  // 拿到数据  从vuex中
  setup () {
    // 从vuex中获取分类数据
    const store = useStore()
    // console.log(store.state.category.list)
    const list = computed(() => {
      return store.state.category.list
    })
    // 点击一级类目 二级类目的时候 二级类目不会关闭 通过数据来进行控制  数据再vuex 中管理
    // 1.给每个分类加上open 数据
    // 2.定义显示隐藏的方法
    // 3.再组件中使用vuex的方法
    // 定义显示
    const show = (item) => {
      store.commit('category/show', item.id)
    }
    // 定义隐藏
    const hide = (item) => {
      store.commit('category/hide', item.id)
    }
    return { list, show, hide }
  }

}
</script>

<style lang="less" scoped>
.navs {
  width: 820px;
  display: flex;
  justify-content: space-between;
  position: relative;
 > li {
    padding-left: 40px;
    > a {
      font-size: 16px;
      color: #333;
    }
    &:hover {
     > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
    //  > .layer{
    //     height: 132px;
    //     opacity: 1;
    //   }
    }
  }
}

.layer {
  &.open{
    height: 132px;
    opacity: 1;
  }
    z-index: 1;
    height: 0;
    width: 1240px;
    background-color: #fff;
    position: absolute;
    left: -200px;
    top: 56px;
    box-shadow: 0 0 5px #ccc;
    opacity: 0;
    overflow: hidden;
    transition: all .2s .1s;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    // justify-content: space-around;
    li {
      widows: 110px;
      text-align: center;
      padding-top: 15px;
      margin: 0 30px;

      img {
        width: 60px;
        height: 60px;
      }
      p {
        padding-top: 10px;
      }
      &:hover{
        p{
            color: @xtxColor;
        }
      }
    }
  }
}
</style>
