<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <!-- <li class="active">
        <a href="#">
          Overview
          <span class="sr-only">(current)</span> 为残疾人设置读取
        </a>
      </li> -->
      <!-- <li class="active">
        <a href="#">英雄列表</a>
      </li>
      <li>
        <a href="#">武器列表</a>
      </li>
      <li>
        <a href="#">装备列表</a>
      </li> -->
      <router-link to="/hero" tag="li"><a>英雄列表</a></router-link>
      <router-link to="/weapon" tag="li"><a>武器列表</a></router-link>
      <router-link to="/equip"  tag="li"><a>装备列表</a></router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
