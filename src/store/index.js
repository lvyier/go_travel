import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let defaultCity = '福建'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}
export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  mutations: {
    changeCity(state, city) {
      state.city = city
      try {
        localStorage.city = state.city
      } catch (e) {}
    }
  }
})
