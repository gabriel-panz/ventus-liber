import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import vueAxios from 'vue-axios'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./assets/main.css"

createApp(App)
    .use(vueAxios, axios)
    .mount('#app')
