import { createRouter, createWebHistory } from 'vue-router'
import IntroduccionView from '@/views/IntroduccionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'intro',
      component: IntroduccionView,
    },
    {
      path: '/Inicio',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/nuevaDeclaracionJurada',
      name: 'nueva1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/NuevaDeclaracion1.vue'),
    },
    {
      path: '/nuevaDeclaracionJurada/nueva',
      name: 'nueva2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/NuevaDeclaracion2.vue'),
    },

    {
      path: '/nuevaDeclaracionJurada/nueva/escritura',
      name: 'escritura',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/NuevaEscritura.vue'),
    },

    {
      path: '/nuevaDeclaracionJurada/nueva/escritura/operaciones',
      name: 'operaciones',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/OperacionesInvolucradas.vue'),
    },

    {
      path: '/nuevaDeclaracionJurada/nueva/escritura/operaciones/compraVenta',
      name: 'compraVenta',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/CompraVenta.vue'),
    },
  ],
})

export default router
