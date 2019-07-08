import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//导入样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/index.css'

import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/'

Vue.prototype.axios = axios

import router from './router'


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
