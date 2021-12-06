import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/lists'
  },
  {
    path: '/lists',
    name: 'Lists',
    component: () => import('@/views/lists/lists.vue')
  },
  {
    path: '/lists/:id',
    name: 'List detail',
    component: () => import('@/views/list-detail/list-detail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
