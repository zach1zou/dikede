import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import zzlUI from '@/components/index'
Vue.use(zzlUI)
Vue.filter('transformDate', (value) => { 
  return value.replace('T',' ')
})



import '@/icons' // icon
import '@/permission' // permission control
import * as directives from '@/directives'
for (let key in directives) { 
  Vue.directive(key,directives[key]) ;
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
