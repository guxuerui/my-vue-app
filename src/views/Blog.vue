<template>
  <div class="pt-6">
    我是Blog11111..
  </div>
  <div>
    <button class="rounded-lg mx-2 my-6 py-2 bg-blue-500 hover:bg-blue-600 text-white">
      <router-link to="/blog/todos" class="px-4 py-2 rounded-lg">Todos</router-link>
    </button>
    <button class="rounded-lg mx-2 my-6 py-2 bg-blue-500 hover:bg-blue-600 text-white">
      <router-link to="/blog/vmod elTest" class="px-4 py-2 rounded-lg">VmodelTest</router-link>
    </button>
    <button @click="plus">加一</button>
  </div>
  <router-view></router-view>
</template>
<script lang="ts">
import { useStore } from '@/store';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Blog',
  setup () {
    const store = useStore();
    console.log('ressd: ', store.state.count);

    const plus = () => {
      store.commit('plusOne');
      console.log(store.getters.getCount);
    }

    return {
      plus
    }
  }
})
</script>