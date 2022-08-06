import { createApp } from 'vue'
// @ts-ignore
import App from "./App.vue";
import router from './router'
import "uno.css";
import './assets/fa.css'

createApp(App).use(router).mount('#app')
