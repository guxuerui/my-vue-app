<script setup lang="ts">
const { msg = 'hello vue3.3' } = defineProps<{ msg: string }>()
</script>

<template>
  <div class="py-2">
    The Newst msg is: <span class="text-purple-500 font-bold text-4xl">{{  msg }}</span>
  </div>
</template>

<style scoped>

</style>