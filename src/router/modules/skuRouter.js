import Layout from '@/layout'
export default {
  path: '/sku',
  component: Layout,
        meta: { title: '商品管理', icon: 'money' },
  children: [
    {
      path: '/sku/sku',
      component: () => import('@/views/sku/sku'),
      meta: { title: '商品管理' }
    },
     {
      path: '/sku/sku-class',
      component: () => import('@/views/sku/sku-class'),
      meta: { title: '商品类型' }
    }
  ]
}
