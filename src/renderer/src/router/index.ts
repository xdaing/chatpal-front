/*
 * @Date: 2023-09-30 16:35:39
 * @LastEditors: 咩咩
 * @LastEditTime: 2023-10-01 09:07:41
 * @Description: 初始化路由
 */
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
