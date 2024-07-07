import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  antd: {
    dark: false,
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
    locale: true,
  },
  routes,
  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },

  // 路由信息如果写了就是配置式路由，如果没写就是约定式路由
  // .umirc.ts 文件和 config.js文件二选一即可，如果项目较为简单使用 .umirc.ts ，稍微复杂，或是说想要又较好的拓展性。那么还是使用config.js文件
  npmClient: 'npm',
});
