import zzlButton from './Button/index.vue'
import zzlInput from './Input/index.vue'
export default {
    install(Vue) { 
        Vue.component('zzl-Button', zzlButton)
        Vue.component('zzl-Input', zzlInput)
    }
}
