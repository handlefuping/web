import * as VueRouter from 'vue-router'
import Home from './page/Home.vue'
import Login from './page/Login.vue'
const routes = [
  { path: '/login', component: Login },
  { path: '/', component: Home }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router