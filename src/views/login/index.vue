<template>
  <div class="login">
    <!-- <loginHeader></loginHeader> -->
    <loginCenter></loginCenter>
    <!-- <loginFooter></loginFooter> -->
  </div>
</template>

<script>
// import loginHeader from "@/views/login/components/login-header.vue";
import loginCenter from "@/views/login/components/login-center.vue";
// import loginFooter from "@/views/login/components/login-footer.vue";

export default {
  name: "Log-in",
  components: {
    loginCenter,
  },
};
</script>

<style>
</style>
