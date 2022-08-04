import { login,userInfoApi } from "@/api/user"
import { setTokenTime } from "@/utils/auth"
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
      setTokenTime()
    },
    async getUserId(context, payload) {
      const { data} = await login(payload)
        context.commit('setUserId', data.userId)
    },
    async getUserInfo(context) { 
      const res = await userInfoApi(localStorage.getItem('userId'))
      context.commit('setUserInfo', res.data)
    },
    logout(context) {
      context.commit('setToken', '')
      context.commit('setUserInfo', {})
     }
  }
}

