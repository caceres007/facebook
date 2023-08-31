import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/custom_styles.css'
import 'material-icons/iconfont/material-icons.css'

createApp(App).use(store).use(router).mount('#app')
