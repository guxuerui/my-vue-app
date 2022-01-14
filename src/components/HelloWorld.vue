<template>
  <h1 class="my-4 text-green-500">{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank"
    >Vetur</a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>)
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button class="bg-blue-500 text-white h-16 rounded-lg px-6" @click="count++">count is: {{ count }}, 双倍值：{{ count2 }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>


  <div class="flex flex-row justify-center">
    <div class="w-20 h-20 m-4 text-white bg-green-500 pt-6 rounded-full">1</div>
    <div class="w-20 h-20 m-4 text-white bg-green-500 pt-6 rounded-full">2</div>
    <div class="w-20 h-20 m-4 text-white bg-green-500 pt-6 rounded-full">3</div>
  </div>

  <div>
    姓名：{{ name.value }}
    <!-- {{ test() }} -->
    <p ref="el">测试ref获取标签元素</p>
  </div>
  
  <!-- 实例方法定义组件 -->
  <comp></comp>
  <!-- v-model的使用 -->
  <VmodelTest v-model="counter" @handleClick="confirmClick"></VmodelTest>
</template>

<script lang="ts" setup>
  import { ref, computed, watch, reactive, onMounted, useAttrs, nextTick } from 'vue';
  import VmodelTest from '@c/VmodelTest.vue';
  // 定义props
  const props = defineProps({
    msg: {
      type: String,
      required: false,
      default: '这世界有那么多人...'
    }
  });

  const counter = ref(1);

  nextTick(() => {
    console.log('6766');
  })
  const ctx = useAttrs();
  console.log('ctx得值：', ctx);
  
  const count = ref(0)
  const count2 = computed(() => count.value * 2)
  
  let name = reactive({ value: '路飞' });
  function test () {
    name.value = 'abc';
  }
  
  let el = ref(null);
  onMounted (() => {
    console.log('获取到的：', el);
  });

  const confirmClick = (msg) => {
    console.log(msg);
  }
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
