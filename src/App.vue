<template>
  <!-- <el-container> -->
  <!--   <el-header> -->
  <!--     <Header :title-info="{value: 'EMO', color: '#fba'}"/> -->
  <!--   </el-header> -->
  <!--   <el-main> -->
  <!--     <router-view /> -->
  <!--   </el-main> -->
  <!-- </el-container> -->
  <router-view />
</template>

<script lang="ts" setup>
import Header from './components/Header.vue'
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Cardo:400i|Rubik:400,700&display=swap');
:root {
  --d: 700ms;
  --e: cubic-bezier(0.19, 1, 0.22, 1);
  --font-sans: 'Rubik', sans-serif;
  --font-serif: 'Cardo', serif;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html, body {
  /* background-color: deepskyblue; */
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  width: 100%;
  min-height: 100vh;
  /* background-color: #fff; */
}
/* router-link激活时样式 */
.mui-active {
  background-color: black;
}
/* 设置选中后文本的背景颜色和文字颜色 */
::selection {
  background:#78BB7A; 
  color:#fff;
}

::-moz-selection {
  background:#78BB7A; 
  color:#fff;
}

::-webkit-selection {
  background:#78BB7A; 
  color:#fff;
}
.el-header, .el-main {
  padding: 0 !important;
}
</style>
