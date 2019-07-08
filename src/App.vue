<template>
  <div id="app">
    <!-- AppHeader -->
    <app-header></app-header>

    <div class="container-fluid">
      <div class="row">
        
        <!-- AppSidebar -->
        <app-sidebar></app-sidebar>

        <!-- 路由对应组件显示的位置 -->
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
//导入AppHeader组件
import AppHeader from './components/AppHeader'
//导入AppSidebar组件
import AppSidebar from './components/AppSidebar'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppSidebar,
  }
}
</script>

<style>

</style>
