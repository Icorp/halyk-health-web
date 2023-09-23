import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
import bottomNavigationVue from "bottom-navigation-vue";
import "bottom-navigation-vue/dist/style.css";


const app = createApp(App)

try {
    app.use(router)
    console.log("Router loaded");
} catch (error) {
    console.error("Route navigation error:", error);
}
app.use(bottomNavigationVue);
app.use(createPinia())

app.mount('#app')
