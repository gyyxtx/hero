// 程序的入口文件
// 加载Vue模块 CommonJS的模块化语法
// const Vue=require('Vue')
// ES6中的模块化的语法,导入模块
import Vue from 'vue'
import App from './App.vue'

// 导入vue-router
import VueRouter from 'vue-router'
// 注册VueRouter插件
Vue.use(VueRouter)
// 创建路由对象
const router = new VueRouter({
  // 配置路由规则
  route:[]
})

// 导入css样式
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
// 提示当前处在开发模式,false不提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 配置router
  router
}).$mount('#app')
