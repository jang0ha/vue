import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'

import './app.scss'

Vue.use(BootstrapVue)

createApp(App).use(router).mount('#app')



import "bootstrap/dist/js/bootstrap.js";
