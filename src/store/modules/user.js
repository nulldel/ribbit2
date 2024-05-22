// 用户信息
export default {
  namespaced: true,
  state () {
    return {
      profile: {
        id: '',
        avatar: '',
        nickname: '刘德华',
        acount: '',
        mobile: '',
        token: ''
      }
    }
  },
  mutations: {
    // payload
    setUser (state, payload) {
      state.profile = payload
    }
  }
}
