<template>
  <div class="page-content">
     <div class="card-box" v-for="item in cards" :key="item.id">
      <div class="card__face card__face--front">
        <img :src="item.src" alt="背景图片" />
      </div>
      <div class="card__face card__face--back">
        <img :src="item.src" alt="背景图片" />
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
    padding-bottom: 5rem;
    max-width: 1350px;
    margin: 0 auto;
    perspective: 800px;
    
    @media (min-width: $bp-md) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: $bp-lg) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  .card-box {
    position: relative;
    width: 280px;
    height: 330px;
    color: white;
    cursor: pointer;
    transition: 1s ease-in-out;
    transform-style: preserve-3d;

    &:hover {
      transform: rotateY(0.5turn);
    }

    .card__face {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      transition: 1s ease-in-out;
      // 展示出图片倒影部分
      // -webkit-box-reflect: below 0
      //   linear-gradient(transparent, transparent, rgba(0, 0, 0, 1));
      .content {
        position: absolute;
        width: 100%;
        height: 106%;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        box-shadow: 0 0.3px 0.7px rgba(0, 0, 0, 0.126),
        0 0.9px 1.7px rgba(0, 0, 0, 0.179), 0 1.8px 3.5px rgba(0, 0, 0, 0.224),
        0 3.7px 7.3px rgba(0, 0, 0, 0.277), 0 10px 20px rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(10px);
        .details {
          color: #bef264;
          font-weight: bold;
          .title {
            font-size: 1.2rem;
            text-shadow: 0 -2px 2px #bef264, 0 2px 2px #bef264;
          }
          .desc {
            font-size: 0.875rem;
            margin-bottom: 160px;
            text-shadow: 0 -2px 2px #bef264, 0 2px 2px #bef264;
          }
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
      img {
        width: 280px;
        height: 350px;
        object-fit: cover;
      }

      &--back {
        transform: rotateY(0.5turn);
      }
    }
  }
</style>