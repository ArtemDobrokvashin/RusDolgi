import Vue from 'vue'
import App from './App.vue'
import Requestblock from './components/requestblock'
import YmapPlugin from 'vue-yandex-maps'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'normalize-scss'

// Install BootstrapVue
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.component('requestblock', Requestblock)
Vue.use(YmapPlugin, YmapPlugin)



Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')