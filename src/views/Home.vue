<template>
  <div class="pt-5">
    <span :class="home.title">我是一个标题, 使用v-bind.  平均值: {{ averageNum }}</span>
    <p class="my-4">
      <button class="bg-green-500 hover:bg-green-600 px-6 py-3 text-white border-none" @click="pushNum">push</button>
    </p>
    <p class="mt-4">
      <input :class="home.input" type="text" v-my-directive="averageNum" placeholder="测试自定义指令"/>
    </p>
    <div class="mt-4">
      <el-button type="primary">Primary</el-button>
      <el-button type="warning" :icon="Star" circle></el-button>
      <el-button type="text">TEXT BUTTON</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { Star } from '@element-plus/icons-vue'
  import { reactive, computed, toRefs } from 'vue';
  // 自定义指令
  const vMyDirective = {
    mounted: (el: { focus: () => void; }, binding: { value: number; }) => {
      console.log('binding: ', binding.value);
      el.focus();
    }
  }

  // 求平均值 function average
  function average (arr: number[]) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }

  // 定义响应式对象
  // 状态驱动的动态 CSS
  interface Theme {
    color?: string,
    numbers: number[],
    averageNum: number
  }
  const theme: Theme = reactive({
    color: '#e43282',
    numbers: [1, 2, 3, 4, 5],
    averageNum: computed(() => {
      return average(theme.numbers);
    })
  });

  // 更新numbers数组
  const pushNum = () => {
    theme.numbers.push(theme.numbers.length + 1);
  }

  const { averageNum } = toRefs(theme);

</script>

<style lang="scss" module="home">
  .input {
    border: 1px solid #000;
    border-radius: 5px;
    padding: 5px 10px;
  }
  .title {
    /* 状态驱动的 动态CSS */
    color: v-bind('theme.color');
  }
</style>

