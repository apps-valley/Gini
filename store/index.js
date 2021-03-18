import Vue from 'vue'
import Vuex from 'vuex'

import BlogModule from './modules/BlogModule'
import HomeModule from './modules/HomeModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    blog: BlogModule,
    home: HomeModule
  }
})
