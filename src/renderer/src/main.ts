/*
 * @Date: 2023-09-30 15:22:31
 * @LastEditors: 咩咩
 * @LastEditTime: 2023-10-01 08:59:35
 */
import { createApp } from 'vue'
import App from '@renderer/App.vue'
import 'virtual:uno.css'
import 'virtual:svg-icons-register'
import '@unocss/reset/eric-meyer.css'
import stores from '@renderer/stores'
import router from '@renderer/router'
import i18n from '@renderer/i18n'

const app = createApp(App)
app.use(router)
app.use(stores)
app.use(i18n)
app.mount('#app')
