import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//导入样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/index.css'


//加载路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//配置路由模块
const appRouter = new VueRouter({
  router:[

  ]
})


new Vue({
  render: h => h(App),
  router: appRouter,
}).$mount('#app')
