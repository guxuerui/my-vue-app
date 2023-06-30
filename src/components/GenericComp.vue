<script lang="ts" setup generic="T">
import { GenericComp } from '@/types'

const props = defineProps<GenericComp<T>>()

function setActiveClass(item: T) {
  if (item === props.selected) {
    return 'text-5xl text-purple-600 font-bold'
  } else {
    return ''
  }
}
</script>

<template>
  <div>
    <h1>1. Generics and Importing Types</h1>
    <ul class="w-1/12 py-4 mx-auto border-2 border-purple-600">
      <li v-for="(item, idx) in items" :key="idx">
        <span :class="setActiveClass(item)">item: {{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>
