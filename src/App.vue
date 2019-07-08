<template>
  <div id="app">
    <!-- 3.使用组件 -->
    <hero-header></hero-header>
    <hero-sildebar></hero-sildebar>
  </div>
</template>

<script>

// 1.导入heroHeader组件
import heroHeader from './components/heroHeader.vue'
// 导入heroSildebar组件
import heroSildebar from './components/heroSildebar.vue'
export default {
  name: 'app',
  components: {
    //2.注册局部组件
    heroHeader,
    heroSildebar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
