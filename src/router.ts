import * as VueRouter from 'vue-router'
import Login from './page/Login.vue'
import Layout from './page/Layout.vue'
import Home from './page/Home.vue'
const routes = [
  { path: '/login', component: Login },
  {
    path: '/', 
    component: Layout, 
    children: [
      { path: 'home', component: Home },
    ],
  },

]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})
router.beforeEach(async (to, from, next) => {
  next()
})
export default router