<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue'
</script>

<style>
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
</style>