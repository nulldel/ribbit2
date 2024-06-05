                                <template>
  <!-- 顶部通栏 -->
  <AppNavbar />

  <!-- 吸顶头部组件 -->
  <!-- <appHeaderStickyVue></appHeaderStickyVue> -->

  <!-- 头部组件 -->
  <appHeaderVue> </appHeaderVue>

  <!-- 内容容器 -->
  <div class="main">
    <!-- 二级路由 -->
    <RouterView />
  </div>

  <!-- 底部组件 -->
  <appFooterVue></appFooterVue>
</template>

                                <script>
import AppNavbar from "@/components/app-navbar.vue";
import appHeaderVue from "@/components/app-header.vue";
import appFooterVue from "@/components/app-footer.vue";
import appHeaderStickyVue from "@/components/app-header-sticky.vue";
import { useStore } from "vuex";
export default {
  name: "Lay-out",
  components: {
    AppNavbar,
    appHeaderVue,
    appFooterVue,
    appHeaderStickyVue,
  },
  // 获取分类数据
  setup() {
    // console.log(useStore())
    const store = useStore();
    store.dispatch("category/getList");
  },
};
</script>

                                <style lang="less" scoped>
.main {
  height: 100%;
}
</style>
