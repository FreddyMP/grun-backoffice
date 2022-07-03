import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/puntos',
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
