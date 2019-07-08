//加载路由模块
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入英雄列表的组件
import HeroList from './views/heroes/HeroList.vue'
import EquipsList from './views/equips/EquipsList.vue'
import WeaponList from './views/weapons/WeaponList.vue'

//导入添加英雄的组件
import HeroAdd from './views/heroes/HeroAdd.vue'

//配置路由模块
const router = new VueRouter({

    //精确的配置高亮显示的类样式
    // linkActiveClass: 'active',
    linkExactActiveClass:'active',

    routes: [{
            name: 'home',
            path: '/',
            redirect: '/heroes'
        },
        {
            name: 'heroes',
            path: '/heroes',
            component: HeroList
        },
        {
            name: 'equips',
            path: '/equips',
            component: EquipsList
        },
        {
            name: 'weapons',
            path: '/weapons',
            component: WeaponList
        },
        {
            name: 'heroesadd',
            path: '/heroes/add',
            component: HeroAdd
        }
    ]
})

//导出路由对象
export default router