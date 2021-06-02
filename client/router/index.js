import LazyMoudle from './lazyMoudle';

const routerConfig = [
  {
    path: '/',
    component: LazyMoudle(() => ({
      entry: import(/* webpackChunkName: "pagesHome" */ '@Client/views/home'),
      models: [import(/* webpackChunkName: "pagesHomeModel" */ '@Client/views/home/model'), import(/* webpackChunkName: "pagesHomeModel" */ '@Client/views/home/modelTest')],
    })),
    breadcrumbName: '首页',
    title: '首页',
    exact: true,
  },
  {
    path: '/main',
    component: LazyMoudle(() => ({
      entry: import(/* webpackChunkName: "pagesMain" */ '@Client/views/main'),
      models: [import(/* webpackChunkName: "pagesMainModel" */ '@Client/views/main/model')],
    })),
    breadcrumbName: 'main',
    title: 'main',
    exact: true, //为true时，则要求路径与location.pathname必须完全匹配
    strict: true, //为true时，有结尾斜线的路径只能匹配有斜线的location.pathname
  },
];

export default routerConfig;
