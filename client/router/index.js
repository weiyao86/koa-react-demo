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
];

export default routerConfig;