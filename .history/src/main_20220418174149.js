import { createApp } from 'vue'
// import Vue from 'vue'
import Header from './.layout'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'



createApp(Header).use(router).mount('header')



import "bootstrap/dist/js/bootstrap.js";
