<template>
  <div class="h-96">
    <drag :shows="show" :url="imgUrl"></drag>
  </div>
</template>
<script lang="ts" setup>
  import { ref, reactive, toRefs, onMounted } from 'vue';
  import drag from '@c/drag.vue';
  import { useRouter, useRoute } from 'vue-router';
  const router = useRouter();
  const route = useRoute();

  const data = reactive({
    show: true,
    imgUrl: 'https://images.unsplash.com/photo-1612142186636-3e65d8a446fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80'
  });

  onMounted(() => {
    console.log('useRouter: ', router);
    console.log('useRoute: ', route.params);
  })

  const { show, imgUrl } = toRefs(data);
</script>