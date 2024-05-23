                            <template>
                <div class="home">
                  <div class="container">
                    <!-- 左侧分类 -->
                    <HomeCategory />
                    <!-- 轮播图 -->
                    <HomeBanner />
                    <!-- 新鲜好物 -->
                    <HomeNew />
                    <!-- 人气推荐 -->
                    <HomeHot />
                    <!-- 热门品牌 -->
                    <HomeBrand />
                    <!-- 学习一下vue动画 -->
                    <button @click="show = true">显示</button>
                    <button @click="show = false">隐藏</button>
                    <Transition>
                      <div v-show="show" class="box"></div>
                    </Transition>
                  </div>
                </div>
              </template>

                            <script>
              import HomeCategory from "./components/home-category.vue";
              import HomeBanner from "./components/home-banner.vue";
              import HomeNew from "./components/home-new.vue";
              import HomeHot from "./components/home-hot.vue";
              import HomeBrand from "./components/home-brand.vue";
              import { ref } from "vue";
              export default {
                name: "Ho-me",
                components: {
                  HomeCategory,
                  HomeBanner,
                  HomeNew,
                  HomeHot,
                  HomeBrand,
                },
                setup() {
                  const show = ref(true);
                  return { show };
                },
              };
              </script>

                            <style lang="less" scoped>
              // .home {
              //   // height: 500px;
              // }
              ::v-deep.home-category {
                float: left;
              }
              // ---------------------------
              // vue动画：使用transition vue内置组件

              // 进入前v-enter  （v-enter-from   vue3.0）
              // 进入中v-ernter-active
              // 进入后v-enter-to

              // 离开前v-leave  （v-leave-from）
              // 离开中v-leave-active
              // 离开后v-leave-to
              .box {
                width: 300px;
                height: 300px;
                background-color: red;
              }
              .v-enter-from {
                opacity: 0;
              }
              .v-enter-active {
                transition: all 3s;
              }
              .v-enter-to {
                opacity: 1;
              }
              </style>>
