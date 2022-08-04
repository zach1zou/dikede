// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { getTokenTime } from './auth'
// import { Message }  from 'element-ui'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
}) // 创建一个axios的实例
service.interceptors.request.use(
  async  (config) => { 
        
        const token = store.state.user.token
        // console.log(config);
                if (token) { 
                        const CurrentTime = Date.now()
                        const tokenTime = getTokenTime()
                        const timeout = 2 * 60 * 60 * 1000
                        if ((CurrentTime - tokenTime) > timeout) {
                                await store.dispatch('user/logout');
                                router.push('/login')
                                return Promise.reject(new Error('登录过期'))
                        } else { 
                          config.headers.Authorization =`${token}`
                        }
        }
        return config
    }, (error)=>{ 
        return Promise.reject(error)
    }
) // 请求拦截器
// service.interceptors.response.use((res) => {
//     console.log(res);
//     if (!res.request.responseURL.includes('imageCode')) { 
//           const { success, msg  } = res
//         if (success) { 
//             return res
//         }
//         Message.error(msg)
//     }
//     return res
// }),
//   function (error) {
//     return Promise.reject(error)
//   } // 响应拦截器
export default service // 导出axios实例
