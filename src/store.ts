import { createStore } from 'vuex'


interface LoginInfo {
  token?: string,
  user?: { [key: string]: any }
}


interface AppStore {
  loginInfo: LoginInfo
}

const store = createStore<AppStore>({
  state() {
    return {
      loginInfo: {}
    }
  },
  mutations: {
    resetLoginInfo(state) {
      state.loginInfo = {}
    },
    setLoginInfo(state, info: LoginInfo) {
      state.loginInfo = info
    }
  }
})


export default store