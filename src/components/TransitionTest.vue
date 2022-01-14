<template>
  <div id="demo">
    <button class="bg-pink-500 hover:bg-pink-600 px-6 py-3 text-white border-none my-4" @click="show = !show">Toggle</button>

    <transition name="fade">
      <p v-if="show">Hello me!</p>
    </transition>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  
  const show = ref(false);


</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  /* 起始点和结束点 */
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>