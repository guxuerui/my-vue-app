<script lang="ts" setup>
import { watchEffect } from 'vue';

const modelValue = defineModel<number>({default: 0})

const emit = defineEmits<{
  change: [count: number] // 具名元组语法
}>()

watchEffect(() => {
  modelValue.value > 0 && emit('change', modelValue.value)
})
</script>

<template>
  <div>
    <button
      @click="modelValue++"
      class="border-2 border-dashed border-purple-600 px-6 py-3 text-purple-600"
    >Press Me : {{ modelValue }}</button>
  </div>
</template>
