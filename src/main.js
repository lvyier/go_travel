import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/styles/reset.css'
import '../src/assets/styles/border.css'
import '../src/assets/styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import fastClick from 'fastclick'
import axios from 'axios'
import '../mock/mock'
import '../mock/city'
import store from './store'
Vue.use(VueAwesomeSwiper)
Vue.prototype.$http = axios

Vue.config.productionTip = false
fastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
