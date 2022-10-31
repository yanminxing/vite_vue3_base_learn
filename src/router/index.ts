import { createRouter, createMemoryHistory, RouteRecordRaw  } from 'vue-router';
import Demo from '@/view/demo/Demo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Demo',
    component: Demo,
  },
]

// 创建路由
const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

// 暴露路由
export default router