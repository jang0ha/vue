import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'






createApp(App).use(router).mount('#app')



import "bootstrap/dist/js/bootstrap.js";
