<script lang="ts" setup>
import { ref } from 'vue'
import GenericComp from '@/components/GenericComp.vue'
import DefineModelComp from '@/components/DefineModelComp.vue'

const count = ref(0)
</script>

<template>
  <div class="text-center pt-6 font-bold text-3xl">
    <h1>Test New Vue3.3 API</h1>
    <GenericComp :items="['a', 'b', 'c', 'd']" selected="c" />

    <h1 class="mt-4">2. defimeModel</h1>
    <h2>defineModel count: {{ count }}</h2>
    <DefineModelComp v-model="count" />
  </div>
</template>
