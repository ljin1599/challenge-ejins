import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// pinia storage 저장 plugin
// import piniaPersist from 'pinia-plugin-persist'
// import { createPinia } from 'pinia'
// import { userUserStore } from '/stores/list'

const app = createApp(App);

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
// const userStore = userUserStore()

app.use(router);
app.use(pinia);
app.mount('#app');
// app.use(createPinia())
// userStore.use(piniaPersist())

// // createPinia.use(piniaPersist())

