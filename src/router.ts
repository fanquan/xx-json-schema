import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from './index.vue'
import Home from './components/HelloWorld.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ './test.vue'),
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
