<template>
  <div class="img-view" @click="bigImg" v-if="!!imgSrc">
    <!-- 遮罩层 -->
    <div class="img-layer"></div>
      <div class="img">
        <img :src="imgSrc">
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    imgSrc: {
      type: String,
      required: true,
      default: ''
    }
  });
  const emits = defineEmits<{
    (e: 'enlargeImg'): void;
  }>();
  const bigImg = () => {
    emits('enlargeImg');
  }
</script>

<style scoped>
  /* 放大图片 */
  .img-view {
    position: inherit;
    width: 100%;
    height: 100%;
  }
  /* 遮罩层样式 */
  .img-view .img-layer {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  /* 设置图片大小，实现居中 */
  .img-view .img img {
    max-width: 60%;
    max-height: 60%;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1000;
  }
</style>