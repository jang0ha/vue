import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
@import 'node_modules/bootstrap/scss/bootstrap.scss';
@import 'node_modules/bootstrap-vue/src/index.scss';

import './app.scss'

Vue.use(BootstrapVue)

createApp(App).use(router).mount('#app')



import "bootstrap/dist/js/bootstrap.js";
