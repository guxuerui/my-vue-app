<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue'
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  background-color: deepskyblue;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
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