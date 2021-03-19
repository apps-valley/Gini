import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import vueSmoothScroll from 'vue2-smooth-scroll'
import VueFacebookPixel from 'vue-facebook-pixel'
import VueAgile from 'vue-agile'
import VuePhoneNumberInput from 'vue-phone-number-input'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase'

import './sass/app.scss'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'

import {
  Quasar,
  Meta
} from 'quasar'


Vue.config.productionTip = false

Vue.component('vue-phone-number-input', VuePhoneNumberInput)
Vue.use(VueAgile)
Vue.use(vueSmoothScroll)
Vue.use(VueMeta, {refreshOnceOnNavigation: true})
Vue.use(VueFacebookPixel)
Vue.use(VueRouter)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Quasar, {
  plugins: {
    Meta
  }
})


let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
// new Vue({
//     render: h => h(App),
//     router,
//     store
// }).$mount('#app')
