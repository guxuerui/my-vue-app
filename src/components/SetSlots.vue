<script setup lang="ts">
import { ref } from 'vue'

defineSlots<{
  default(props: { msg?: string }): string
  item(props: { id?: number }): number
}>()

const msg = ref('Hi there~')
const id = ref(11)
</script>

<template>
  <div class="text-3xl text-purple-600 font-bold">
    <div>
      slot default: <slot :msg="msg"></slot>
    </div>
    <div>
      slot item: <slot name="item" :id="id"></slot>
    </div>
  </div>
</template>

<style scoped>

</style>
