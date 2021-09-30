import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/demo1', component: '@/pages/demo1' },
    { path: '/demo2', component: '@/pages/demo2' },
  ],
  extraBabelPlugins: ["jotai/babel/plugin-debug-label"],
  fastRefresh: {},
});
