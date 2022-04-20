<template>
  <div class="contents">
    <div class="group">
      <div class="group_img">
        <!-- 放大图片 -->
        <Transition name="fade">
          <big-img class="pointer-style" v-if="showImg" @enlargeImg="viewImg" :imgSrc="imgSrc"></big-img>
        </Transition>
        <div class="text">点击放大图片</div>
        <img id="smallImg" class="pointer-style" :src="imageSrc" @click="clickImg($event)">
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import BigImg from '@c/BigImg.vue';

  const imageSrc = 'https://images.unsplash.com/photo-1612142186636-3e65d8a446fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80';
  const showImg = ref<boolean>(false);
  const imgSrc = ref<string>('');

  const viewImg = () => {
    showImg.value = false;
    imgSrc.value = '';
  }
  const clickImg = (e: any) => {
    showImg.value = true;
    imgSrc.value = e.currentTarget.src;
  }

</script>
<style scoped>
  .contents {
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #smallImg {
    width: 500px;
    height: 400px;
  }

  .pointer-style {
    cursor: pointer;
  }
  /* 动画 */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>