<template>
  <!-- <div class="mt-4"> -->
  <!--   <el-button type="primary" @click="plus">测试 加一</el-button> -->
  <!-- </div> -->
  <div class="my-6 text-center">
    COMBOBOX
    <div class="mx-auto w-44 relative">
      <input
        type="text"
        v-model="mod"
        placeholder="please..."
        autocomplete="off"
        class="mt-6 pl-2 input"
        @focus="getFocus"
        @keydown.esc="hideList"
      />
      <i class="icon"></i>
      <ul class="box mt-4 w-full text-left" v-if="show">
        <li v-for="item in filterdData" :key="item.id" class="item w-full py-2 pl-2" @click.stop="confrim(item.value)">
          <p class="w-full">{{ item.name }}</p>
        </li> 
        <li v-if="!filterdData.length" class="py-2 pl-2">暂无匹配数据</li>
      </ul>
    </div>
  </div>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-gray-200 p-4">
        <h2 class="text-xl font-bold">Section 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="bg-gray-200 p-4">
        <h2 class="text-xl font-bold">Section 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { toRefs, reactive, watchEffect } from 'vue';
  import { useStore } from '@/store';
  const store = useStore();

  const plus = () => {
    store.commit('plusOne');
    console.log(store.getters.getCount);
  }
  // select data
  type Obj = {
    id: number,
    name: string,
    value: string
  }
  interface Data {
    show: boolean,
    mod: string,
    emojiData: Obj[],
    filterdData: Obj[],
  }
  const data: Data = reactive({
    show: false,
    mod: '',
    emojiData: [
      {
        id: 1,
        name: 'Argentina',
        value: '🇦🇷'
      },
      {
        id: 2,
        name: 'Hong Kong',
        value: '🇭🇰'
      },
      {
        id: 3,
        name: 'United States',
        value: '🇺🇸'
      },
      {
        id: 4,
        name: 'United Kingdom',
        value: '🇬🇧'
      },
      {
        id: 5,
        name: 'China',
        value: '🇨🇳'
      }
    ],
    filterdData: []
  });
  const getFocus = () => {
    data.show = true;
  }
  const hideList = () => {
    if (!data.mod) {
      data.show = false;
    }
  }
  const confrim = (val: string) => {
    data.mod = val;
    data.filterdData = data.emojiData;
    data.show = false;
  }
  watchEffect(() => {
    if (!data.mod) {
      data.filterdData = data.emojiData;
      return;
    }
    data.filterdData = data.emojiData.filter((item) => {
      return item.name.toLowerCase().includes(data.mod.toLowerCase()) || item.value === data.mod;
    });
  });
  const { show, mod, filterdData } = toRefs(data);
</script>
<style scoped>
  select {
    border: 1px solid #000;
    border-radius: 5px;
  }
  .input {
    border: 1px solid #000;
    border-radius: 5px;
    height: 40px;
    line-height: 40px;
  }
  .box {
    border: 1px solid #000;
    border-radius: 5px;
    display: block;
  }
  .item:hover {
    color: #fff;
    background-color: #316CD6;
    cursor: pointer;
  }
  .icon {
    width: 0;
    height: 0;
    border: 10px solid #000;
    border-right-color: transparent;
    border-left-color: transparent;
    border-bottom-color: transparent;
    position: absolute;
    top: 40px;
    right: 5px;
  }
  .icon::after {
    content: '';
    position: absolute;
    top: -13px;
    left: -10px;
    border: 10px solid #fff;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
</style>
