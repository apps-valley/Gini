import Vue from 'vue'
import Vuex from 'vuex'

// import BlogModule from './modules/BlogModule'
// import HomeModule from './modules/HomeModule'

Vue.use(Vuex)

export const state = () => ({
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}
