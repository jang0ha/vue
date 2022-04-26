// import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

use(BootstrapVue)

createApp(App).use(router).mount('#app')



// import "bootstrap/dist/js/bootstrap.js";
