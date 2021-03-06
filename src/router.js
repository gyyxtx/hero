

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
// 导入heroadd组件
import HeroAdd from './view/hero/HeroAdd.vue'
import HeroEdit from './view/hero/HeroEdit.vue'
// 创建路由对象
const router = new VueRouter({
    // 当浏览器中地址栏的地址和routerlinka标签精确匹配,会添加 
    // 当浏览器地址栏中的路由地址 #/hero 和 router-link生成的a标签的href 精确匹配的时候，添加类样式
  // linkExactActiveClass: 'active',
  // linkActiveClass当浏览器地址栏中的路由地址 #/hero/add 包含router-link生成的a标签的href地址，添加类样式

    linkActiveClass:'active',
  // 配置路由规则
  routes:[
    // 配置路由信息
    // 路由重定向
    {path:'',redirect:'/hero'},
    {name:'hero',path:'/hero',component:HeroList},
    {name:"weapon",path:'/weapon',component:WeaponList},
    {name:'equip',path:'/equip',component:EquipList},
    {name:'heroadd',path:'/hero/add',component:HeroAdd},
    {name:'heroedit',path:'/hero/edit/:id',component:HeroEdit,props:true}
  ]
})

// 导出router
export default router