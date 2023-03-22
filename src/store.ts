import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      userInfo: {}
    }
  },
  mutations: {
    setUserInfo(state, info) {
      state.userInfo = info
    }
  }
})


export default store