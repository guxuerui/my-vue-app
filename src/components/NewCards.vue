<template>
  <div class="page-content">
    <div class="card" v-for="item in cards" :key="item.id">
      <div class="imgBox">
        <img :src="item.src" alt="背景图片">
      </div>
      <div class="content">
        <div class="details">
          <h2 class="title">{{ item.title }}</h2>
          <h4 class="desc">{{ item.desc }}</h4>
          <div class="mt-4">
            <a class="btn mr-2" :href="getPagePath(item)" target="_blank">预览</a>
            <a class="btn" :href="item.codeSrc" target="_blank">源码</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive, toRefs, toRaw, onMounted } from 'vue';
  import http from '@/http/request';

  type Obj = {
    title: string,
    name: string,
    desc: string,
    button?: string,
    id: number,
    src: string,
    codeSrc: string
  }
  interface Data {
    cards: Obj[]
  }
  const data: Data = reactive({
    cards: []
  });
  // 初始化mounted, 加载卡片数据
  onMounted(async () => {
    const resData = await http.get('/getCardsData');
    data.cards = resData.data.list;
  });

  const getPagePath = (item: any) => {
    // http://htmlpreview.github.io:  可生成动态预览页面
    // 通过vue中的响应式对象, 即proxy对象，可使用 toRaw() 方法获取原始对象
    const res = toRaw(item);
    return `http://htmlpreview.github.io/?https://github.com/guxuerui/example-html-css/main/${res.name}/index.html`;
  }

  const { cards } = toRefs(data);
</script>

<style lang="scss" scoped>
  $bp-md: 600px;
  $bp-lg: 800px;
  .page-content {
    display: grid;
    grid-gap: 2rem;
    padding: 1rem;
    max-width: 1350px;
    margin: 0 auto;
    
    @media (min-width: $bp-md) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: $bp-lg) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  .card {
    position: relative;
    width: 300px;
    height: 400px;
    // background: rgba(255, 255, 255, .1);
    background: linear-gradient(to bottom, #25a0f5,#203c52);
    // 背景模糊度
    border-radius: 10px;
    border-top: 1px solid rgba(255, 255, 255, 1);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
  }
  .imgBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    transition: all ease 0.5s;
  }
  .card:hover .imgBox {
    transform: translateY(30px) scale(0.5);
    transform-origin: top;
    border-radius: 20px;
  }
  .imgBox img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    overflow: hidden;
    .details {
      position: absolute;
      bottom: 0;
      color: #fff;
      font-weight: bold;
      transform: translateY(100px);
      transition: all ease 0.5s;
      .title {
        font-size: 1.5rem;
      }
    }
  }
  .card:hover {
    .details {
      transform: translateY(-60px);
    }
  }
  .btn {
    cursor: pointer;
    margin-top: 1.5rem;
    padding: 0.75rem 1.5rem;
    font-size: 0.65rem;
    font-weight: bold;
    letter-spacing: 0.025rem;
    text-transform: uppercase;
    color: white;
    background-color: rgba(0, 155, 251, 0.5);
    border: none;
    transition: all linear 0.5s;
    
    &:hover {
      background-color: rgba(0, 155, 251, 1);
    }
    
    &:focus {
      outline: 1px dashed yellow;
      outline-offset: 3px;
    }
  }
</style>