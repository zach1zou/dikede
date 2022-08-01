// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器

import axios from 'axios'
import store from '@/store'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
}) // 创建一个axios的实例
service.interceptors.request.use(
    (config) => { 
        const token = store.state.user.token
        if (token) { 
            config.headers.Authorization =`Bearer ${token}`
        }
        return config
    }, (error)=>{ 
        return Promise.reject(error)
    }
) // 请求拦截器
service.interceptors.response.use() // 响应拦截器
export default service // 导出axios实例
