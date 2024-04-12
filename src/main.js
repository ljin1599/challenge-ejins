import { createApp } from 'vue'
// pinia storage 저장 plugin
import piniaPersist from 'pinia-plugin-persist'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { userUserStore } from 'stores/list'

createApp(App).use(router).use(createPinia()).use(piniaPersist()).mount('#app')

const userStore = userUserStore()
// createPinia.use(piniaPersist())

