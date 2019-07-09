// 程序的入口文件
// 加载Vue模块 CommonJS的模块化语法
// const Vue=require('Vue')
// ES6中的模块化的语法,导入模块
import Vue from 'vue'
import App from './App.vue'

import router from './router.js'
// 让所有的vue实例都有一个axios属性,给Vue函数的原型增加成员
import axios from 'axios'
Vue.prototype.axios=axios


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
