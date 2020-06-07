import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/styles/reset.css'
import '../src/assets/styles/border.css'
import '../src/assets/styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import fastClick from 'fastclick'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
fastClick.attach(document.body)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
