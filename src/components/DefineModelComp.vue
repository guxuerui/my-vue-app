<script lang="ts" setup>
const modelValue = defineModel<number>({default: 0})
</script>

<template>
  <div>
    <button
      @click="modelValue++"
      class="border-2 border-dashed border-purple-600 px-6 py-3 text-purple-600"
    >Press Me : {{ modelValue }}</button>
  </div>
</template>
