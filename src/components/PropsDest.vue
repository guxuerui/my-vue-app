<script setup lang="ts">
const { msg = 'hello vue3.3', name = 'qishi', age } = defineProps<{ msg: string, name: string, age?: number }>()
</script>

<template>
  <div class="py-2">
    The Newst msg is: <span class="text-purple-500 font-bold text-4xl">{{  msg }}, {{ name }} -- {{ age }}</span>
  </div>
</template>
