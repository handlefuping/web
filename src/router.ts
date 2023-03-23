import * as VueRouter from 'vue-router'
import Login from './page/Login.vue'
import Layout from './page/Layout.vue'
import Home from './page/Home.vue'
import Media from './page/Media.vue'
const routes = [
  { path: '/login', component: Login },
  {
    path: '/', 
    component: Layout, 
    children: [
      { path: 'home', component: Home },
      { path: 'media', component: Media },
    ],
    redirect: '/home'
  },
] as Readonly<VueRouter.RouteRecordRaw[]>

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

export default router