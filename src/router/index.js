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
  {path: '/xzd/tool/rili', name: 'xzdToolRili', component: () => import('../views/xzd/tool/Rili.vue')},
  {path: '/xzd/tool/choujiang', name: 'xzdToolChoujiang', component: () => import('../views/xzd/tool/Choujiang.vue')},


  {path: '/test/xys/test1', name: 'testXysTest1', component: () => import('../views/test/xys/test1.vue')},
  {path: '/test/xys/test2', name: 'testXysTest2', component: () => import('../views/test/xys/test2.vue')},
  {path: '/test/xys/test3', name: 'testXysTest3', component: () => import('../views/test/xys/test3.vue')},
]

const router = new VueRouter({
  // mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
