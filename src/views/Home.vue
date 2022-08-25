<template>
  <div class="pt-5 home-container">
    <span :class="home.title">我是一个标题, 使用v-bind.  平均值: {{ averageNum }}</span>
    <p class="my-4">
      <button class="bg-green-500 hover:bg-green-600 px-6 py-3 text-white border-none" @click="pushNum">push</button>
    </p>
    <p class="mt-4">
      <input :class="home.input" type="text" v-my-directive="averageNum" placeholder="测试自定义指令"/>
    </p>
    <div class="mt-4">
      <el-button type="primary" @click="getLogin">点击登录</el-button>
      <el-button type="warning" :icon="Star" circle></el-button>
      <el-button type="text">TEXT BUTTON</el-button>
    </div>
    <article class="mt-4 article" v-highlight v-html="markdownhtml"></article>
    <comp v-colorizer="'green'"></comp>
  </div>
</template>

<script lang="ts" setup>
  import { Star } from '@element-plus/icons-vue'
  import { reactive, computed, toRefs, ref, isRef } from 'vue';
  import http from '@/http/request';
  import { html } from '@/markdown/test.md';
  import hljs from "highlight.js"; // 添加转换高亮标签插件
  // import "vue-hljs/dist/style.css"; // 添加hljs默认样式
  // 引入转换color颜色库, github地址: https://github.com/bgrins/TinyColor
  import tinycolor from 'tinycolor2';
  console.log('转换的color: ', tinycolor("#326cd6").lighten(40).toHexString());
  // 需要从 import.meta中获取环境变量, 比如 import.meta.env.VITE_TOKEN
  // 自定义指令
  const vMyDirective = {
    mounted: (el: { focus: () => void; }, binding: { value: number; }) => {
      console.log('binding: ', binding.value);
      el.focus();
    }
  }
  // 在vue3内，通过自定义指令来锁定高亮渲染标签的范围
  const vHighlight = {
    mounted(el: any) {
      const blocks = el.querySelectorAll('pre code'); // 匹配pre标签，code标签
      blocks.forEach((block: any) => {
        hljs.highlightBlock(block);
      });
    }
  };
  const markdownhtml = ref(html)
  console.log('是ref吗: ', isRef(markdownhtml))

  // 求平均值 function average
  function average (arr: number[]) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }
  console.log('是ref吗: ', isRef(average))

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
  // 模拟登录接口
  const getLogin = () => {
    http.post('/login').then((res: any) => {
      console.log(res);
    });
  }

  const { averageNum } = toRefs(theme);

  // const mstr = ref(`# Marked in **Node.js**`);
  // const markdownHtml = computed(() => {
    // return marked.parse(mstr.value);
  // })
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

