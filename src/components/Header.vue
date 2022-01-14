<template>
  <div id="header" class="w-full flex flex-row justify-center align-center bg-gray-800">
    <div class="text-white font-black mr-12 text-xl my-4">
      欢迎来到我的世界 {{ title }}!
    </div>
    <button class="text-white rounded-lg mx-2 my-4 hover:bg-gray-700">
      <router-link to="/" class="p-2 font-black rounded-lg">DashBoard</router-link>
    </button>
    <button class="text-white rounded-lg mx-2 my-4 hover:bg-gray-700">
      <router-link to="/team/front" class="p-2 font-black rounded-lg">Team</router-link>
    </button>
    <button class="text-white rounded-lg mx-2 my-4 hover:bg-gray-700">
      <router-link to="/blog" class="p-2 font-black rounded-lg">博客</router-link>
    </button>
    <button class="text-white rounded-lg mx-2 my-4 hover:bg-gray-700">
      <router-link to="/connect" class="p-2 font-black rounded-lg">联系我</router-link>
    </button>
    <button class="text-white rounded-lg mx-2 my-4 hover:bg-gray-700">
      <router-link to="/hello" class="p-2 font-black rounded-lg">你好</router-link>
    </button>
    <button class="text-white rounded-lg mx-2 my-4 hover:bg-gray-700">
      <router-link to="/about" class="p-2 font-black rounded-lg">关于我</router-link>
    </button>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';

  const title = ref ('塞尔达');
</script>
<style scoped>
  #header {
    position: sticky;
    top: 0;
    z-index: 99;
  }
</style>
