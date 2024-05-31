import { createApp } from 'vue'
import App from './App.vue'

// bootstrap settings
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// bootstrap icons settings
import 'bootstrap-icons/font/bootstrap-icons.css';

import router from "@/router";
import store from '@/store';
import i18n from "@/i18n/index.js";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18n);

app.mount('#app');
