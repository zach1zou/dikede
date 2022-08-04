import Layout from '@/layout'
export default {
  path: '/node',
  component: Layout,
   meta: { title: '点位管理', icon: 'tree-table' },
  children: [
    { 
         path: '/node/region',
          component: () => import('@/views/node/region'),
           meta: { title: '区域管理' },
        },
         {
          path: '/node/node',
          component: () => import('@/views/node/node'),
           meta: { title: '点位管理' },
        }  ,
         {
          path: '/node/partner',
          component: () => import('@/views/node/partner'),
           meta: { title: '合作商管理'},
        }      
  ]
}
