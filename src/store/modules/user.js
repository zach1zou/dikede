import { login } from "@/api/user"
import router from "@/router"

export default {
  namespaced: true,
  state: {
    token:localStorage.getItem('token')||'',
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
      localStorage.setItem('token', payload)
     
     }
  },
  actions: {
    async getToken(context, payload) {
         const {data} = await login(payload)
      console.log(data.msg);
      if (data.msg === '验证码错误') {
        return
      } else { 
       router.push('/')
      }

        context.commit('setToken', data.token)
     }
  }
}

