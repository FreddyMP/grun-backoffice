import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Puntos',
    component: () => import('../views/Puntos.vue')
  },
  {
    path: '/update/:id',
    name: 'UpdatePunto',
    component: () => import('../views/updatePunto.vue')
  },
  {
    path: '/new',
    name: 'newPunto',
    component: () => import('../views/newPunto.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
