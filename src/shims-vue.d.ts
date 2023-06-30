/// <reference types="vue/macros-global" />
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'tinycolor2'
declare module 'marked';
declare module 'vue3-status-indicator'
declare module 'nprogress'
