import Vue from 'vue'
import VueRouter from 'vue-router'
import Hem from '../views/Hem.vue'
import Fakta from '../views/Fakta.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Hem',
    component: Hem
  },
  {
    path: '/fakta',
    name: 'Fakta',
    component: Fakta
  }
]

const router = new VueRouter({
  routes
})

export default router
