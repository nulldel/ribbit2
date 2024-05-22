<template>
  <header class="app-header">
    <div class="container">
      <h1 class="logo"><a href=""></a></h1>
      <!-- <ul class="navs">
        <li><a href="">首页</a></li>
        <li><a href="">居家</a></li>
        <li><a href="">美食</a></li>
        <li><a href="">服饰</a></li>
        <li><a href="">母婴</a></li>
        <li><a href="">个护</a></li>
        <li><a href="">严选</a></li>
        <li><a href="">数码</a></li>
        <li><a href="">运动</a></li>
        <li><a href="">杂项</a></li>
      </ul> -->
      <appHeaderNav></appHeaderNav>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜" />
      </div>
      <div class="cart">
        <a class="curr" href="#">
          <i class="iconfont icon-cart"></i><em>2</em>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import appHeaderNav from './app-header-nav.vue'
export default {
  name: 'appHeader',
  components: {
    appHeaderNav
  }
}
</script>

<style lang="less" scoped>
.app-header {
  background-color: #fff;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 200px;
      position: relative;
      top: 20px;

      a {
        display: block;
        height: 132px;
        text-indent: 10px;
        // background-color: aquamarine;
        background-image: url(@/assets/images/logo.0940ebb5.png);
        background-repeat: no-repeat;
        background-size: 100%;
        // background-position: center;
      }
    }
    // .navs {
    //   width: 820px;
    //   display: flex;
    //   justify-content: space-between;
    //   li {
    //     padding-left: 40px;
    //     a {
    //       font-size: 16px;
    //       color: #333;
    //     }
    //   }
    // }
    .search {
      width: 170px;
      height: 32px;
      border-bottom: 1px solid #e7e7e7;
      line-height: 32px;
      margin-left: 50px;
      .icon-search {
        font-size: 18px;
        margin-left: 5px;
      }
      input {
        width: 140px;
        padding-left: 10px;
        color: #666;
      }
    }
    .cart {
      margin-left: 12px;
      position: relative;
      .curr {
        .icon-cart {
          font-size: 22px;
        }
        em {
          position: absolute;
          top: -1px;
          left: 14px;
          padding-left: 6px;
          line-height: 12px;
          font-size: 10px;
          color: #fff;
          display: inline-block;
          width: 23px;
          height: 13px;
          background-color: #e26237;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>>
