import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/index' // 引入路由
import { store, key } from '@/store/index'

// createApp(App).mount('#app')
const app = createApp(App)

// 使用路由
app.use(router)

// 使用store

app.use(store, key);

// 挂载
app.mount('#app')