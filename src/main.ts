import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/index' // 引入路由
import { store, key } from '@/store/index'
import '@/assets/css/common.scss'; // 引入全局样式
import { useVanComps } from '@/components/vantComponentRegistry';
import 'vant/lib/index.css';

// createApp(App).mount('#app')
const app = createApp(App)

// 使用路由
app.use(router)

// 使用store

app.use(store, key);

// 使用vant
useVanComps(app);

// 挂载
app.mount('#app')