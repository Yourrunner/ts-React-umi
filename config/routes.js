export default [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: './login',
    layout: false,
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
    wrappers: ['@/wrappers/test.jsx'],
  },
  {
    name: '权限演示',
    path: '/access/:id',
    component: './Access',
    wrappers: ['@/wrappers/test.jsx'],
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table',
    wrappers: ['@/wrappers/test.jsx'],
  },
  {
    name: '测试',
    path: '/test',
    component: './Test',
    wrappers: ['@/wrappers/test.jsx'],
  },
  {
    name: '生命周期',
    path: '/lifeCycle',
    component: './lifeCycle',
  },
  {
    name: '类组件',
    path: '/classcomponent',
    component: './ClassComponent',
    routes: [
      {
        path: '/classcomponent/son',
        component: '@/pages/ClassComponent/sonComponent',
      },
      {
        path: '/classcomponent/other',
        component: '@/pages/ClassComponent/other',
      },
      {
        path: '/classcomponent/',
        redirect: '/classcomponent/son',
      },
    ],
    wrappers: ['@/wrappers/test.jsx'],
  },
  {
    name: '可拖拽的table',
    path: '/draggableTable',
    component: './dragTable',
  },
  {
    name: 'Class + TS',
    path: '/classTS',
    component: './TS_ReactClass',
  },
  {
    name: 'Func + TS',
    path: '/FuncTs',
    component: './TS_ReactFunc',
  },
];
