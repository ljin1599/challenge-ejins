import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Create from '@/views/create.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
