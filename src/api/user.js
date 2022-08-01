import request from '@/utils/request'
// 登录
export const login = (data) => {
  return request({
    method: 'post',
    url: '/user-service/user/login',
    data
  })
}
// 图片验证码
export const imageCodeApi = (clientToken) => {
  return request({
   method: 'get',
    url: `/user-service/user/imageCode/${clientToken}`,
    responseType:'blob'
  })
}