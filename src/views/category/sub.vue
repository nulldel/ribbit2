<template>
  <div class="sub-categroy">
    <div class="container">
      <!-- 面包屑 -->
      <subBread></subBread>
      <!-- 筛选区 -->
      <subFilterVue></subFilterVue>
    </div>
  </div>
</template>

<script>
import subBread from "./sub-bread.vue";
import subFilterVue from "./sub-filter.vue";
export default {
  name: "SubCategroy",
  components: {
    subBread,
    subFilterVue,
  },
};
</script>

  <style lang="less" scoped>
</style>
