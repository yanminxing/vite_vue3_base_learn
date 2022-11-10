import { createRouter, createMemoryHistory, RouteRecordRaw  } from 'vue-router';
import Home from '@/view/home/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

// 创建路由
const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

// 暴露路由
export default router