<script setup lang="ts">
import { useThrottleFn } from '@vueuse/core'
import { Configuration, OpenAIApi } from "openai"
import { onMounted } from 'vue'
import { parseOpenAIStream } from '@/utils/openAi'
import ProgressBar from '@/components/ProgressBar.vue'

const smoothToBottom = useThrottleFn(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }, 300, false, true)

let output = $ref('')

const baseUrl = 'https://service-ma7oxiau-1317244763.hk.apigw.tencentcs.com/'
const requestChat = async () => {
  const res: Response = await fetch(`${baseUrl}/v1/chat/completions`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
    },
    method: 'POST',
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{"role": "user", "content": "Hello!"}],
      // time: Date.now(),
      // pass: null,
      // sign: '60c3adbcb9bd44b98928861422fe6d4fd3029ff47578beb9c0c93ae39eb2c355',
      // temperature: 0.6,
      // stream: true,
    })
  })
  console.log('res: ', res)
  // console.log('response: ', new Response(parseOpenAIStream(res)))
  // const data = new Response(parseOpenAIStream(res)).body
  const data = res.body
  if (!data) {
    throw new Error('No Data!')
  }
  const reader = data?.getReader()
  console.log('[/Users/xueruigu/workspace/my-vue-app/src/views/openai.vue:34] reader: ', reader)
  const decoder = new TextDecoder('utf-8')
  let done = false
  reader.read().then(({done, value}) => {
    console.log(done, decoder.decode(value))
  })
}

onMounted(async () => {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.listModels();
  console.log('[/Users/xueruigu/workspace/my-vue-app/src/views/openai.vue:53] response: ', response)

})
</script>

<template>
  <el-button type="primary" style="margin: 1rem" @click="requestChat">send</el-button>
  <h2 style="color: green;width: 50rem;min-height: 20rem;background-color: #ccc;">{{ output }}</h2>
  <div class="wrapper">
    <ProgressBar progress="30%" />
  </div>
</template>

<style scoped>
.wrapper {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
}
</style>
