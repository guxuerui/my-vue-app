<template>
  <el-container>
    <el-header>
      <Header :title-info="{value: 'QiShi', color: '#fba'}"/>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { useThrottleFn } from '@vueuse/core'
import Header from './components/Header.vue'
import { onMounted } from 'vue'
import { parseOpenAIStream } from '@/utils/openAi'
import { Configuration, OpenAIApi } from "openai";
import NProgress from 'nprogress'
import "nprogress/nprogress.css"
import { useRouter } from 'vue-router'

const router = useRouter()
router.beforeEach((to, from, next) => {
  NProgress.start()  
  next()
})
router.afterEach((to, from) => {
  NProgress.done()
})
// function readStream() {
//   const decoder = new TextDecoder('utf-8')
//   const fileReader: any = requestChat()
//   let done = false
//   fileReader.read().then(({done, value }) => {
//     if (done) {
//       console.log('stream finished')
//       return
//     }
//     const decoderValue = decoder.decode(value)
//     output += decoderValue
//
//     readStream()
//   })
// }

onMounted(async () => {
  // const configuration = new Configuration({
  //     organization: "org-pHFGMiraZCJOYx1x9LILtaII",
  //     apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  // });
  // const openai = new OpenAIApi(configuration) as any;
  // const response = await openai.listEngines();
  // console.log('[src/App.vue:23] response: ', response)
  // requestChat()
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Cardo:400i|Rubik:400,700&display=swap');
:root {
  --d: 700ms;
  --e: cubic-bezier(0.19, 1, 0.22, 1);
  --font-sans: 'Rubik', sans-serif;
  --font-serif: 'Cardo', serif;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html, body {
  background-color: deepskyblue;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
}
/* router-link激活时样式 */
.mui-active {
  background-color: black;
}
/* 设置选中后文本的背景颜色和文字颜色 */
::selection {
  background:#78BB7A; 
  color:#fff;
}

::-moz-selection {
  background:#78BB7A; 
  color:#fff;
}

::-webkit-selection {
  background:#78BB7A; 
  color:#fff;
}
.el-header, .el-main {
  padding: 0 !important;
}
</style>
