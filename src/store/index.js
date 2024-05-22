import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import cart from './modules/cart'
import category from './modules/category'
import user from './modules/user'

// A模块
// const moduleA = {}
// const moduleB = {}
// B模块

export default createStore({
  modules: {
    // namespaced: true,
    cart,
    category,
    user
  },
  // 配置插件
  plugins: [
    createPersistedState({
    // 本地存储名字
      key: 'erabbit-pc-store',
      // 指定需要缓存的模块
      paths: ['user', 'cart']
    })
  ]
})
