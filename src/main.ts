import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import 'font-awesome/css/font-awesome.min.css'
import '/@/styles/index.scss'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import { registerIcons } from '/@/utils/common'
const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
registerIcons(app) // icons
app.mount('#app')
