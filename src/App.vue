<template>
  <div id="app">
    <!-- 3.使用组件 -->

    <hero-header></hero-header>
    <div class="container-fluid">
      <div class="row">
        <!-- 侧边栏 -->
        <hero-sildebar></hero-sildebar>

        <!-- 主内容区域 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// 1.导入heroHeader组件
import heroHeader from "./components/heroHeader.vue";
// 导入heroSildebar组件
import heroSildebar from "./components/heroSildebar.vue";
export default {
  name: "app",
  components: {
    //2.注册局部组件
    heroHeader,
    heroSildebar
  }
};
</script>

<style>

</style>
