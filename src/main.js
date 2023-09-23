import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import bottomNavigationVue from "bottom-navigation-vue";
import "bottom-navigation-vue/dist/style.css";

const app = createApp(App)
app.use(bottomNavigationVue);
app.use(createPinia())
app.use(router)

app.mount('#app')
