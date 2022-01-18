<template>
  <div id="header" class="w-full flex flex-row justify-center align-center bg-gray-800">
    <div class="text-white font-black mr-12 text-xl my-4 pointer-style" @click="toHome">
      {{ title }}
    </div>
    <button
      class="text-white rounded-lg mx-2 my-4 hover:bg-gray-700"
      v-for="(item, index) in datas" :key="index"
    >
      <router-link :to="item.path" class="p-2 font-black rounded-lg">{{ item.name }}</router-link>
    </button>
  </div>
</template>
<script lang="ts" setup>
  import { reactive, toRefs } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  const router = useRouter();
  const route = useRoute();
  
  interface Router {
    title: string,
    datas: {
      [key: string]: any
    }
  }
  const routerData: Router = reactive({
    title: '下饭达人',
    datas: [
      {
        name: 'DashBoard',
        path: '/'
      },
      {
        name: 'Team',
        path: '/team/front'
      },
      {
        name: '博客',
        path: '/blog'
      },
      {
        name: '联系我',
        path: '/connect'
      },
      {
        name: '示例',
        path: '/example'
      },
      {
        name: '关于我',
        path: '/about'
      }
    ]
  })
  // 回首页
  const toHome = () => {
    router.push('/');
  }

  const { title, datas } = toRefs(routerData);
</script>
<style scoped lang="scss">
  #header {
    position: sticky;
    top: 0;
    z-index: 99;
  }
</style>
