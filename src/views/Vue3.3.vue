<template>
  <div class="text-center pt-6 font-bold text-3xl">
    <h1>Test New Vue3.3 API</h1>
    <GenericComp :items="['a', 'b', 'c', 'd']" selected="c" />
  </div>
</template>

<script lang="ts" setup>
import GenericComp from '@/components/GenericComp.vue'
</script>

<style lang="scss" scoped>

</style>
