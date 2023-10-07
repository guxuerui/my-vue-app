<template>
  <div class="drag">
    <div v-show="show" v-drag class="content" style="width:500px;z-index: 20">
      <img
        id="target"
        ref="element"
        class="target"
        style="width: 100%;"
        :style="{ transform: 'scale(' + multiples + ')' + 'rotate(' + current + 'deg)' }"
        :src="src"
      >
    </div>
    <div v-show="show" class="button">
      <button class="bg-green-500 text-white border-none px-4 py-2 mr-2" @click="handleClose">关闭</button>
      <button class="bg-green-500 text-white border-none px-4 py-2 mr-2" @click="handlerotate">旋转</button>
      <button class="bg-green-500 text-white border-none px-4 py-2 mr-2" @click="handlebig">放大</button>
      <button class="bg-green-500 text-white border-none px-4 py-2 mr-2" @click="handleReduce">缩小</button>
    </div>
  </div>
</template>
<script>
export default {
  directives: {
    drag(el) {
      const oDiv = el
      oDiv.onmousedown = function(e) {
        const disX = e.clientX - oDiv.offsetLeft
        const disY = e.clientY - oDiv.offsetTop
        document.onmousemove = function(e) {
          const l = e.clientX - disX
          const t = e.clientY - disY
          oDiv.style.left = l + 'px'
          oDiv.style.top = t + 'px'
        }
        document.onmouseup = function() {
          document.onmousemove = null
          document.onmouseup = null
        }
        return false
      }
    }
  },
  props: {
    shows: {
      type: Boolean,
      default: true
    },
    url: {
      type: String || Number,
      default: null
    }
  },
  data() {
    return {
      show: '',
      current: 0,
      name: '',
      src: '',
      multiples: 1
    }
  },
  watch: {
    shows: {
      handler: function (newVal, oldVal) {
        if (newVal) {
          this.show = this.shows
          if (this.show) {
            this.src = this.url
            this.$nextTick(() => {
              if (this.$refs.element.offsetHeight > 600) {
                this.multiples = '0.2'
              }
            })
          }
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    handlerotate() {
      this.current = (this.current + 90) % 360
    },
    handlebig() {
      this.multiples = Number(this.multiples) + 0.2
    },
    handleReduce() {
      this.multiples = Number(this.multiples) - 0.2
    },
    handleClose() {
      this.$emit('update:shows', false)
    }
  }
}
</script>
<style scoped>
  .drag {
    position: relative;
    height: 100%;
  }
  .content {
    position: fixed;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 30%;
    cursor: pointer;
  }
  .target {
    -moz-box-shadow: #666 0px 0px 10px;
    -webkit-box-shadow: #666 0px 0px 10px;
    background: #EEFF99;
    box-shadow: #666 0px 0px 10px;
    display: inline-block;
    text-align: center;
  }
  .button {
    position: fixed;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 95%;
    z-index: 200;
  }
  .btn-loading {
    position: relative;
    margin: auto;
    width: 200px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    overflow: hidden;
  }
  .btn-loading::after {
    content: "Hover Me";
    position: absolute;
    top: 4px;
    bottom: 4px;
    right: 4px;
    left: 4px;
    line-height: 92px;
    font-size: 24px;
    background: #fff;
    border: 2px solid yellowgreen;
    cursor: pointer;
    color: yellowgreen;
  }
    
  .btn-loading::before {
    content: "";
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: -20px;
    left: 0px;
    background: #fff;
    transform: rotateZ(-90deg) translate(-100%, -100%);
    transform-origin: top left;
    transition: transform linear 0.3s;
  }
    
  .btn-loading:hover::before {
    transform: rotateZ(0deg) translate(0%, -0%);
  }
</style>
