import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Create from '@/views/create.vue'

// import { userUserStore } from 'stores/list'
// import routes from '@/router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/create',
    name: 'create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Create
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})


export default router
