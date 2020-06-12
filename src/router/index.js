import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import City from '@/components/city/city.vue'
import Detail from '@/components/details/detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
