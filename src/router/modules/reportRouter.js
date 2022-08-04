import Layout from '@/layout'
export default {
  path: '/report',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/report'),
      meta: { title: '对账管理', icon: 'skill' }
    }
  ]
}
