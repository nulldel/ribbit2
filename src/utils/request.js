// 创建一个新的axios 实例
// 请求拦截器，token头部携带
// 响应拦截器：1剥离无效数据2：处理token 的实效
// 导出一个函数调用当前的axios对象返回promisse的值
import router from '@/router'
import axios from 'axios'
import store from '@/store'
export const baseURL = 'https://apipc-xiaotuxian-front.itheima.net'
const instance = axios.create({
  // axios的一些配置
  baseURL,
  timeout: 5000
})
// 请求拦截器头部注入token
instance.interceptors.request.use(config => {
  // 如果本地有token 就在头携带
  const { profile } = store.state.user
  // console.log(profile.token)
  if (profile.token) {
    config.headers.Authorization = `Bearer ${profile.token}`
  }

  return config
}, err => {
  return Promise.reject(err)
})
// 相应拦截器 剥离数据
instance.interceptors.response.use(res => res.data, err => {
  if (err.response && err.response.status === 401) {
    // 完成的需求 比如说用户正在结算  但是没有登入  这个时候就需要用户回到登入页面 ，然后再回到结算的页面
    //  1：清空无效的用户信息（把之前的用户信息清楚）
    //  2.跳转到登录页面(路由负责跳转就引入路由)
    //  3.跳转需要传参（当前路由的地址）给登录页面，登录成功再回到结算的页面
    store.commit('user/setUser', {})

    // 当前路由地址怎么获取
    // 组件里： 如果地址是`/user?a=10`  用$router.path   只能拿到/user  用 $router.fullPath  才能拿到 /user?a=10
    // js模块：route.currentRoute.value.fullPath  就是当前路由地址
    // const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    console.log(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + fullPath)
  }
  return Promise.reject(err)
})

// 请求工具

export default (url, method, submitData) => {
  return instance({
    url,
    method,
    // get请求用params传参
    // post用data传参  可以写if判断
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
