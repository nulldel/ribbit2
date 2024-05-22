<template>
  <xtxBread>
    <xtxBreadItem to="/">首页</xtxBreadItem>
    <xtxBreadItem v-if="category.top" :to="`/category/${category.top.id}`">{{category.top.name}}</xtxBreadItem>
    <xtxBreadItem v-if="category.sub" :key="category.sub.id">{{category.sub.name}}</xtxBreadItem>
  </xtxBread>
</template>

<script>
import { computed } from 'vue-demi'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  name: 'subBread',
  // 面包屑里的数据在app-header-nav这个组件里  数据不好拿  就在vuex中拿
  // 需求 router的id变了 我就让面包屑变
  setup () {
    const route = useRoute()
    const store = useStore()
    const category = computed(() => {
      const obj = {}
      store.state.category.list.forEach(top => {
        if (top.id === route.params.id) {
          obj.top = { id: top.id, name: top.name }
        }
        if (top.children) {
          const sub = top.children.find(sub => sub.id === route.params.id)
          if (sub) {
            obj.top = { id: top.id, name: top.name }

            obj.sub = { id: sub.id, name: sub.name }
          }
        }
      })
      // store.state.category.list.forEach(top => {
      //   top.children && top.children.forEach(sub => {
      //     if (sub.id === route.params.id) {
      //       //    设置二级类目
      //       obj.sub = { id: sub.id, name: sub.name }
      //       console.log(sub.name)
      //       //    设置一级类目
      //       obj.top = { id: top.id, name: top.name }
      //       console.log(obj.top)
      //     }
      //   })
      // })
      return obj
    })
    return { category }
  }
}
</script>

<style>
</style>
