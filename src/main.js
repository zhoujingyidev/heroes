import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//导入样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/index.css'


//加载路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入英雄列表的组件
import HeroList from './views/heroes/HeroList.vue'
import EquipsList from './views/equips/EquipsList.vue'
import WeaponList from './views/weapons/WeaponList.vue'

//配置路由模块
const appRouter = new VueRouter({
  routes:[
    { name:'home', path:'/', redirect:'/heroes'},
    { name:'heroes', path:'/heroes',component:HeroList},
    { name:'equips', path:'/equips',component:EquipsList},
    { name:'weapons', path:'/weapons',component:WeaponList},
  ]
})


new Vue({
  render: h => h(App),
  router: appRouter,
}).$mount('#app')
