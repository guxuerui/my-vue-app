<template>
  <div>
    <button @click="modelOpen = true">弹出一个模态框</button>

    <teleport to='body'>
      <div v-if="modelOpen" class="model">
        <div>
          这是一个弹窗，我的父元素是body
          <button @click="modelOpen = false">关闭</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
export default {
  data () {
    return {
      modelOpen: false
    }
  }
}
</script>

<style scoped>
  button {
    border: 1px solid #000;
    padding: 10px;
    margin-top: 20px;
    background-color: cyan;
    color: #000;
  }
  .model {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.5);
  }
  .model div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 300px;
    height: 300px;
    padding: 5px;
  }
</style>