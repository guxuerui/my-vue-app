import { createApp, h } from 'vue';
import router from './router';
import App from './App.vue';
import './index.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { store, key } from '@/store';
// import { Vue3StatusIndicator } from 'vue3-status-indicator'
import 'vue3-status-indicator/dist/style.css'

const app = createApp(App);
// app.component('vue3-status-indicator', Vue3StatusIndicator);
app.use(router).use(store, key).use(ElementPlus);
app.mount('#app');

// 自定义全局组件 -> JSX
app.component('comp', {
  render() {
    return h(
      'div',
      Array.from({ length: 10 }).map(() => {
        return h('p', 'Hi,I am a comp, 通过实例方法自定义组件完成!!!')
      })
    );
  }
})

// 自定义指令, API如下
// const MyDirective = {
//   created(el, binding, vnode, prevVnode) {}, // 新增
//   beforeMount() {},
//   mounted() {},
//   beforeUpdate() {}, // 新增
//   updated() {},
//   beforeUnmount() {}, // 新增
//   unmounted() {}
// }

app.directive('colorizer', {
  beforeMount(el, binding, vnode) {
    // el.style.background = binding.value;
    console.log('组件实例：', binding.instance, binding.value, vnode);
    el.style.color = binding.value;
  }
})

