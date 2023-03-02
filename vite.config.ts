import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import { viteMockServe } from 'vite-plugin-mock';
const mdPlugin = require('vite-plugin-markdown') // 需要通过commenJs方式引用

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
      template: {
        compilerOptions: {
          // 自定义组件白名单, 如下例: piechart 标签不会报出警告信息
          isCustomElement: tag => tag === 'piechart'
        }
      }
    }),
    mdPlugin.plugin({
      mode: ['html'],
    }),
    // mock配置
    viteMockServe({
      mockPath: "/src/http/mock",
      localEnabled: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@c': path.resolve(__dirname, './src/components'),
      '@views': path.resolve(__dirname, './src/views'),
      '@utils': path.resolve(__dirname, './src/utils'),
      // '@/styles': path.resolve(__dirname, './src/styles'),
      // '@/assets': path.resolve(__dirname, './src/assets'),
      // '@/pages': path.resolve(__dirname, './src/pages'),
      // '@/routes': path.resolve(__dirname, './src/routes'),
      // '@/hooks': path.resolve(__dirname, './src/hooks'),
      // '@/store': path.resolve(__dirname, './src/store')
    }
  }
  // server:{
  //   host:'localhost',        //设置本地服务器   选填
  //   port:8080,				//设置本地默认端口  选填
  //   proxy:{                 //设置代理，必须填
  //     '/api':{              //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
  //       target:'http://api.vikingship.xyz/api',     //代理的目标地址，这是豆瓣接口地址网址
  //       changeOrigin:true,              //是否设置同源，输入是的
  //       rewrite: path => path.replace(/^\/api/, '')
  //     }
  //   }
  // },
  // css: {
  // 	//css预处理 -> 设置全局的scss文件
  // 	preprocessorOptions: {
  // 		scss: {
  // 			/*
  // 			引入var.scss全局预定义变量，
  // 			如果引入多个文件，
  // 			可以使用
  // 			'@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
  // 			这种格式
  // 			 */
  // 			additionalData: '@import "@/assets/scss/globalVariable.scss";'
  // 		}
  // 	}
  // }
})
