<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="profile.token">
          <li>
            <a href=""
              ><i class="iconfont icon-user"></i>{{ profile.nickname }}</a
            >
          </li>
          <li><a href="">退出登录</a></li>
        </template>
        <template v-else>
          <li><RouterLink to="/login">请先登录</RouterLink></li>
          <li><a href="/login">免费注册</a></li>
        </template>
        <li><a href="">我的订单</a></li>
        <li><a href="">会员中心</a></li>
        <li><a href="">帮助中心</a></li>
        <li><a href="">关于我们</a></li>
        <li>
          <a href=""><i class="iconfont icon-phone"></i>手机版</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "App-nav",
  setup() {
    const store = useStore();

    const profile = computed(() => {
      return store.state.user.profile;
    });
    return { profile };
  },
};
</script>

<style scoped lang="less">
.app-topnav {
  background-color: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;

    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: @xtxColor;
        }
      }
      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
