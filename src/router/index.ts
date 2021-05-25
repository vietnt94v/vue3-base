import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LayoutDefault from '../layouts/LayoutDefault.vue'
import LayoutCompact from '../layouts/LayoutCompact.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {
      layout: LayoutDefault
    }
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('../views/Todo.vue'),
    meta: {
      layout: LayoutCompact
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: () => import('../views/PageNotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
