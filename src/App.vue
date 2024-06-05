<template>
  <!-- 一级路由 -->
  <RouterView />
</template>

<script>
import request from "./utils/request";
export default {
  sex: "男",
  name: "App",
  age: "90",
  setup() {
    const fn = () => {
      request("/member/profile", "get");
    };
    return { fn };
  },
};
</script>

<style lang="less">
@import "./assets/styles/mixins.less";
</style>
