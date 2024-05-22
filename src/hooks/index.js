// 提供复用逻辑函数

import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
// 添加参数的解释输入“/** ”
/**
 * 数据懒加载
 * @param {element} target -dom 对象
 * @param {*function} apiFn api函数
 */
export const useLazyData = (target, apiFn) => {
  const result = ref([])

  const { stop } = useIntersectionObserver(
    // target 是观察的目标dom容器，必须是dom容器，而且是vue3.0方式绑定的dom对象
    target,
    // isIntersecting 是否进入可视区域，true是进入 false是移出
    // observerElement 被观察的dom
    ([{ isIntersecting }], observerElement) => {
      // 在此处可根据isIntersecting来判断，然后做业务
      if (isIntersecting) {
        stop()
        // 调用api函数获取数据
        apiFn().then((data) => {
          result.value = data.result
        })
      }
    }
  )
  return result
}
