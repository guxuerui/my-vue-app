<script setup lang="ts">
defineSlots<{
  default(props: { msg?: string }): string
  item(props: { id?: number }): number
}>()
</script>

<template>
  <div class="text-3xl text-purple-600 font-bold">
    <div>
      slot default: <slot msg="Hi slots"></slot>
    </div>
    <div>
      slot item: <slot name="item"></slot>
    </div>
  </div>
</template>

<style scoped>

</style>