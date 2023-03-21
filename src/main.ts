import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { DatePicker, Form} from 'ant-design-vue'

const app = createApp(App)

app.use(router).use(DatePicker).use(Form).mount('#app')
