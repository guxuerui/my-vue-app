<template>
  <div class="mt-4">
    <new-cards></new-cards>
  </div>
</template>

<script lang="ts" setup>
  import NewCards from '@c/NewCards.vue';
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
