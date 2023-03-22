import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import { DatePicker, Form, Button, Input, Layout } from 'ant-design-vue'

const app = createApp(App)


app.use(router).use(store).use(DatePicker).use(Form).use(Button).use(Input).use(Layout).mount('#app')
