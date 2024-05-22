import { createRouter, createWebHashHistory } from 'vue-router'
const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home')
const TopCategory = () => import('@/views/category')
// const TopCategory = () => import('@/views/category/index.vue')
const SubCategory = () => import('@/views/category/sub')
const Login = () => import('@/views/login')

// 路由规则
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home },
      { path: '/category/:id', component: TopCategory },
      { path: '/category/sub/:id', component: SubCategory }
    ]
  },
  {
    path: '/login',
    component: Login,
  }
]

const router = createRouter({
  history: createWebHashHistory(), // 使用的是什么模式  现在用的是哈希的路由模式
  routes,
  // 每次切换路由时滚动到顶部
  scrollBehavior () {
    return { left: 0, top: 0 }
  }
})

export default router
