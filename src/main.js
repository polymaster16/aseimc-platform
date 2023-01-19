import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import PrimeVue from 'primevue/config';
import Vue3Transitions from 'vue3-transitions'


const app = createApp(App);
app.use(PrimeVue);
app.use(Vue3Transitions);
app.use(router);
app.mount('#app');
