import LazyMoudle from './lazyMoudle';

const routerConfig = [
  {
    path: '/',
    component: LazyMoudle(() => ({
      entry: import(/* webpackChunkName: "pagesHome" */ '@/views/home'),
      models: [import(/* webpackChunkName: "pagesHomeModel" */ '@/views/home/model'), import(/* webpackChunkName: "pagesHomeModel" */ '@/views/home/modelTest')],
    })),
    breadcrumbName: 'home',
    exact: true,
  },
  {
    path: '/main',
    component: LazyMoudle(() => ({
      entry: import(/* webpackChunkName: "pagesMain" */ '@/views/main'),
      models: [import(/* webpackChunkName: "pagesMainModel" */ '@/views/main/model')],
    })),
    breadcrumbName: 'main',
    exact: true, //为true时，则要求路径与location.pathname必须完全匹配
    strict: true, //为true时，有结尾斜线的路径只能匹配有斜线的location.pathname
  },
];

export default routerConfig;
