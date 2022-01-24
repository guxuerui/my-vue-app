<template>
  <div id="header" class="w-full flex flex-row justify-center align-center bg-gray-800">
    <div class="text-white font-black mr-12 text-xl my-4 pointer-style" @click="toHome">
      <span :style="{color: titleInfo.color}">{{ titleInfo.value }}</span>
    </div>
    <button
      class="text-white rounded-lg mx-2 my-4 hover:bg-gray-700"
      v-for="(item, index) in routerData" :key="index"
    >
      <router-link :to="item.path" class="p-2 font-black rounded-lg">{{ item.name }}</router-link>
    </button>
  </div>
</template>
<script lang="ts" setup>
  import { reactive, PropType } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { TitleInfo, Router } from '@/types/header';
  const router = useRouter();
  const route = useRoute();
  // 标题内容, 定义Props数据
  defineProps({
    titleInfo: {
      type: Object as PropType<TitleInfo>, // vue定义好的泛型 -> PropType<T>
      required: true,
      default: () => ({
        value: '前端小菜鸟',
        color: '#fff',
      })
    }
  });
  // 路由数据
  const routerData = reactive<Router[]>(
    [
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
  )
  // 回首页
  const toHome = () => {
    router.push('/');
  }

</script>
<style scoped lang="scss">
  #header {
    // position: sticky;
    position: fixed;
    top: 0;
    z-index: 99;
  }
</style>
