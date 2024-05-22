// 商品分类
import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'
export default {
  namespaced: true,
  state () {
    return {
      // 防止白屏的数据
      list: topCategory.map(item => ({ name: item }))
    }
  },
  mutations: {
    setList (state, payload) {
      state.list = payload
    },
    // 设定方法  此时的方法 不是异步操作  就在这里修改 修改二级分类的显示与隐藏
    // 设定显示方法
    show (state, id) {
      // 得找到当前分类 然后再显示当前分类下的二级类目
      const currCategory = state.list.find(item => item.id === id)
      currCategory.open = true
    },
    // 设定隐藏方法
    hide (state, id) {
      const currCategory = state.list.find(item => item.id === id)
      currCategory.open = false
    }

  },
  // 获取分类数据
  actions: {
    async getList ({ commit }) {
      // 向后端请求分类的数据
      const { result } = await findAllCategory()
      // 给每个分类加上控制二级分类显示与隐藏的数据
      result.forEach(top => {
        top.open = false
      })
      commit('setList', result)
    }
  }

}
