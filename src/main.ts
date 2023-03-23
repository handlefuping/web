import { createApp } from 'vue'

import store from './store'

import App from './App.vue'
import router from './router'
import { DatePicker, Form, Button, Input, Layout, Dropdown, Menu, Space, Row, Col, Avatar, Badge, Table, PageHeader, Tag } from 'ant-design-vue'

const app = createApp(App)
// useStore()内部使用inject()实现只能组件内使用
router.beforeEach(async (to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    if (!store?.state?.loginInfo?.token) {
      next({path: '/login'})
    }else {
      next()
    }
  }
})

app.use(store)
  .use(router)
  .use(DatePicker)
  .use(Form)
  .use(Button)
  .use(Input)
  .use(Layout)
  .use(Dropdown)
  .use(Menu)
  .use(Space)
  .use(Row)
  .use(Col)
  .use(Avatar)
  .use(Badge)
  .use(Table)
  .use(PageHeader)
  .use(Tag)
  .mount('#app')
