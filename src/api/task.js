import request from '@/utils/request'
/**
 * 工单搜索
 * @param {*} params 
 * @returns 
 */
export const taskListApi = (data) => {
  return request({
    method: 'GET',
      url: '/task-service/task/search',
    params:data
  })
}