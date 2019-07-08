

//引入vue实例
import Vue from 'vue'
// 导入vue-router
import VueRouter from 'vue-router'
// 注册VueRouter插件
Vue.use(VueRouter)


// 导入HeroList组件
import HeroList from './view/hero/HeroList.vue'
import WeaponList from './view/weapon/WeaponList.vue' 
import EquipList from './view/equip/EquipList.vue'
// 创建路由对象
const router = new VueRouter({
  // 配置路由规则
  routes:[
    // 配置路由信息
    // 路由重定向
    {path:'',redirect:'/hero'},
    {name:'hero',path:'/hero',component:HeroList},
    {name:"weapon",path:'/weapon',component:WeaponList},
    {name:'equip',path:'/equip',component:EquipList}
  ]
})

// 导出router
export default router