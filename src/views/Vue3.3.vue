<script lang="ts" setup>
import { ref } from 'vue'
import GenericComp from '@/components/GenericComp.vue'
import DefineModelComp from '@/components/DefineModelComp.vue'
import PropsDest from '@/components/PropsDest.vue'
import SetSlots from '@/components/SetSlots.vue'

const count = ref(0)
const msg = ref('Hi there xixi~')
const name = ref('gxr')
const age = ref(18)

// function handleChange(count: number) {
//   console.log('changed count is: ', count)
// }
</script>

<template>
  <div class="text-center pt-6 font-bold text-3xl">
    <h1>Test New Vue3.3 API</h1>
    <GenericComp :items="['a', 'b', 'c', 'd']" selected="c" />

    <h1 class="mt-4">2. defimeModel</h1>
    <h2>defineModel count: {{ count }}</h2>
    <DefineModelComp v-model="count" />

    <h1 class="mt-4">3. Props Destructure</h1>
    <button
      @click="msg = 'new'"
      class="border-2 border-dashed border-purple-600 px-6 py-3 text-purple-600"
    >Reset Msg</button>
    <PropsDest :msg="msg" :name="name" :age="age" />

    <h1 class="mt-4">4. Set Slots</h1>
    <SetSlots>
      <template #default>default slot value</template>
      <template #item="{ id }">接收从插槽传递过来的值 -> {{ id }}</template>
    </SetSlots>
  </div>
</template>
