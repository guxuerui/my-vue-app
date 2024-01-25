import { createRouter, createWebHistory } from 'vue-router';
// 路由懒加载
const Home = () => import('@views/Home.vue');
const Example = () => import('@c/Example.vue');
const About = () => import('@views/About.vue');
const Team = () => import('@views/Team.vue');
const Blog = () => import('@views/Blog.vue');
const Connect = () => import('@views/Connect.vue');
const PageNotFound = () => import('@c/PageNotFound.vue');
const Todos = () => import('@c/Todos.vue');
const VmodelTest = () => import('@c/VmodelTest.vue');
const OpenAi = () => import('@views/openai.vue');
const Vue3API = () => import('@views/Vue3.3.vue')
const TestIframe = () => import('@views/TestIframe.vue')

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/openai',
      name: 'openai',
      component: OpenAi
    },
    {
      path: '/example',
      name: 'example',
      component: Example
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      // 动态路由参数
      path: '/team/:name',
      name: 'team',
      component: Team
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
      // 页面内嵌套路由
      children: [
        {
          path: '',
          component: Todos
        },
        {
          path: 'todos',
          name: 'todos',
          component: Todos
        },
        {
          path: 'vmodelTest',
          name: 'vmodelTest',
          component: VmodelTest
        }
      ]
    },
    {
      path: '/connect',
      name: 'connect',
      component: Connect
    },
    {
      path: '/vue3-api',
      name: 'Vue3.3',
      component: Vue3API
    },
    {
      path: '/test-iframe',
      name: 'TestIframe',
      component: TestIframe
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'pageNotFound',
      component: PageNotFound
    }
  ],
  linkActiveClass: 'mui-active',
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
});
/**
 * 路由错误回调
 */
router.onError((handler) => {
  console.log("error:", handler);
});
export default router;
