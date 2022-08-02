import { login,userInfoApi } from "@/api/user"
export default {
  namespaced: true,
  state: {
    token:JSON.parse(localStorage.getItem('token')) || '',
    userId:JSON.parse(localStorage.getItem('userId')) || '',
    userInfo: {}
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
      localStorage.setItem('token', JSON.stringify(payload))
    },
    setUserId(state, payload) {
      state.userId = payload
      localStorage.setItem('userId', JSON.stringify(payload))
    }
    ,
    setUserInfo(state, payload) { 
      state.userInfo = payload
    }
  },
  actions: {
    async getToken(context, payload) {
      const { data} = await login(payload)
        context.commit('setToken', data.token)
    },
    async getUserId(context, payload) {
      const { data} = await login(payload)
        context.commit('setUserId', data.userId)
    },
    async getUserInfo(context) { 
      const res = await userInfoApi(localStorage.getItem('userId'))
      context.commit('setUserInfo', res.data)
    }
  }
}

