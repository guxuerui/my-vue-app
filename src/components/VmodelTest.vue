<template>
  <div @click="$emit('update:modelValue', modelValue + 1)">
    counter: {{ modelValue }}
  </div>

  <!-- defineEmits -->
  <button class="bg-green-500 text-white px-6 py-4" @click="handleClick">test defineEmits</button>
</template>

<script setup lang="ts">
  // 定义props
  const props = defineProps({
    modelValue: {
      type: Number,
      default: 0
    }
  });

  const emit = defineEmits(['handleClick']);
  const handleClick = () => {
    emit('handleClick', 'testtest');
  }
</script>

<style scoped>

</style>