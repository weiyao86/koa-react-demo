import LazyMoudle from './lazyMoudle';

const routerConfig = [
  {
    path: '/',
    component: LazyMoudle(() => ({
      entry: import(/* webpackChunkName: "pagesHome" */ '@/views/home'),
      models: [import(/* webpackChunkName: "pagesHomeModel" */ '@/views/home/model'), import(/* webpackChunkName: "pagesHomeModel" */ '@/views/home/modelTest')]
    })),
    breadcrumbName: 'home',
    exact: true,
  }, 
  {
    path: '/main',
    component: LazyMoudle(() => ({
      entry: import(/* webpackChunkName: "pagesMain" */ '@/views/main'),
      models: [import(/* webpackChunkName: "pagesMainModel" */ '@/views/main/model')]
    })),
    breadcrumbName: 'main',
    exact: true,
  },
];

export default routerConfig;