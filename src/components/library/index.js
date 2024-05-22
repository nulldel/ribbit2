// 扩张vue原有的功能：全局注册组件，自定义指令，挂载原型方法，，注意全局没有过滤器
// 插件
// vue2.0插件写法要素：导出一个对象，有install函数，默认传入了Vue构造函数，Vue基础之上扩展
// vue3.0插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，app基础之上扩展

// 好多的文件  将来可能会引入成白的文件  太多 给简化一下 用到es6里的东西
// 自动的批量注册组件

// 首先解决文件加载的问题 require提供的context这个函数可以加载所有的什么位置的vue文件
// require.context("目录","是否加载子目录","正则匹配文件")
import defaultImg from '@/assets/images/200.jpg'
const importFn = require.context('./', false, /\.vue$/)
// console.log(importFn.keys())// 返回值是：内容为文件名的数组

// import xtxSkeleton from './xtx-skeleton.vue'
// import xtxCarousel from './xtx-caruosel.vue'
// import xtxMore from './xtx-more.vue'
// import xtxBread from './xtx-bread.vue'
// import xtxBreadItem from './xtx-bread-item.vue'

export default {
  install (app) {
    // app.component(xtxSkeleton.name, xtxSkeleton)
    // app.component(xtxCarousel.name, xtxCarousel)
    // app.component(xtxMore.name, xtxMore)
    // app.component(xtxBread.name, xtxBread)
    // app.component(xtxBreadItem.name, xtxBreadItem)
    importFn.keys().forEach(key => {
      // console.log(importFn(key).default)
      // 导入组件
      const component = importFn(key).default
      // 注册组件
      app.component(component.name, component)
    })
    defineDirective(app)
  }
}

// 注册一个自己的指令 你们也用用
const defineDirective = (app) => {
  // 图片懒加载的指令
  app.directive('lazyload', {
    mounted (el, binding) {
      // console.log(el)

      // console.log('我的自定义指令注册上了')
      // 注册上之后我要做的 就是监听 这个图片

      const observer = new IntersectionObserver(isIntersecting => { // 当被监听的dom元素进入可视区 执行的函数
        // console.log('监听到了元素')
        if (isIntersecting) {
          observer.unobserve(el)
          el.onerror = () => {
            // Image 对象的属性 onerror 声明了一个事件句柄函数，当装载图像的过程中发生了错误时就会调用这个句柄。

            el.src = defaultImg
          }
          // 进来之后没有值 img渲染不上去  我就设置一个默认的
          // 进入可视区后把src属性设置上去
          el.src = binding.value
        }
      }, { threshold: 0.9 })

      observer.observe(el)
    }

  })
}
