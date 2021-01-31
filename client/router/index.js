import LazyMoudle from './lazyMoudle';

const routerConfig = [
  {
    path: '/',
    component: LazyMoudle(() => ({
      entry: import(/* webpackChunkName: "pagesLayout" */ '@/views/layout'),
      models: [import(/* webpackChunkName: "pagesLayout" */ '@/views/layout/model'), import(/* webpackChunkName: "pagesLayout" */ '@/views/layout/modelTest')]
    })),
    breadcrumbName: 'layout',
    exact: true,
  },
];

export default routerConfig;