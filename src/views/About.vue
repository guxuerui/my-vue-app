<template>
  <div class="about">
    <h1 class="my-4 text-green-500 text-2xl">{{  state.aboutMsg }}</h1>
    <div>
      <button class="bg-green-500 hover:bg-green-600 px-6 py-3 text-white border-none" @click="increment">
        Count is: {{ state.count }}, double is: {{ state.double }}
      </button>
    </div>
    <p class="my-3">我今年{{ only.age }}岁, 永远不变</p>

    <!-- 函数式组件 -->
    <Functional :level="state.level" :class="`text-${state.level}xl`">这是一个动态的h元素: h{{ state.level }}</Functional>

    <!-- 异步组件 -->
    <suspense>
      <template #default>
        <AsyncComp></AsyncComp>
      </template>
      <template #fallback>
        <p>loading...</p>
      </template>
    </suspense>
    <h1>ddd</h1>
    <!-- 自定义组件白名单, 在vite.config.ts中配置 -->
    <piechart>自定义组件白名单</piechart>

    <!-- 自定义指令 -->
    <p v-highlight="'orange'">这是自定义指令的使用</p>

    <!-- transition动画 -->
    <transition-test></transition-test>
    
    <button class="btn-loading">Hover Me</button>
  </div>
</template>
<script setup lang="ts">
  import { reactive, computed, readonly, isReactive, isReadonly, defineAsyncComponent } from 'vue';
  import TransitionTest from '@c/TransitionTest.vue';
  import Functional from '@c/Functional.vue';
  // const AsyncComp = defineAsyncComponent(() => import('@c/NextPage.vue'));
  // defineAsyncComponent 还可接受返回一个对象
  const AsyncComp = defineAsyncComponent({
    loader: () => import('@c/NextPage.vue'),
    delay: 200,
    timeout: 3000
  });
  
  interface State {
    count: number;
    double: number;
    aboutMsg: string;
    level: number;
  }
  // 定义响应式对象
  const state: State = reactive({
    count: 0,
    double: computed(() => state.count * 3),
    aboutMsg: 'This is an about page',
    level: 6
  })
  function increment () {
    state.count++;
    // only.age++; 报错: 无法分配到 "age" ，因为它是只读属性。 
  }

  const test = reactive({
    name: 'llllfei'
  });
  // 只读属性不可改
  const only = readonly({
    age: 18
  });
  console.log('是否由reactive创建：', isReactive(test));
  console.log('是否由readonly创建：', isReadonly(only));
  console.log('是否由readonly创建：', isReadonly(test));


</script>
<style scoped>
  .btn-loading {
    position: relative;
    margin: auto;
    width: 200px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    overflow: hidden;
  }
  .btn-loading::after {
    content: "Hover Me";
    position: absolute;
    top: 4px;
    bottom: 4px;
    right: 4px;
    left: 4px;
    line-height: 92px;
    font-size: 24px;
    background: #fff;
    border: 2px solid yellowgreen;
    cursor: pointer;
    color: yellowgreen;
  }
    
  .btn-loading::before {
    content: "";
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: -20px;
    left: 0px;
    background: yellowgreen;
    transform: rotateZ(-90deg) translate(-100%, -100%);
    transform-origin: top left;
    transition: transform linear 0.3s;
  }
    
  .btn-loading:hover::before {
    transform: rotateZ(0deg) translate(0%, -0%);
  }
</style>