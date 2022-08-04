import Layout from '@/layout'
export default {
  path: '/task',
  component: Layout,
 meta: { title: '工单管理', icon: 'tree-table' },
  children: [
    { 
         path: '/task/business',
          component: () => import('@/views/task/business'),
           meta: { title: '运营工单' },
        },
         {
          path: '/task/operation',
          component: () => import('@/views/task/operation'),
           meta: { title: '运维工单' },
        }     
  ]
}
