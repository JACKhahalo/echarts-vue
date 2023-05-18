const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('../components/home/home.vue'),
  },
  {
    name: 'table1',
    path: '/table1',
    component: () => import('../components/tables/table1.vue'),
  },
  {
    name: 'table2',
    path: '/table2',
    component: () => import('../components/tables/table2.vue'),
  },
  {
    name: 'table3',
    path: '/table3',
    component: () => import('../components/tables/table3.vue'),
  },
  {
    name: 'table4',
    path: '/table4',
    component: () => import('../components/tables/table4.vue'),
  },
  {
    name: 'table5',
    path: '/table5',
    component: () => import('../components/tables/table5.vue'),
  },
  {
    name: 'table6',
    path: '/table6',
    component: () => import('../components/tables/table6.vue'),
  },
];

export default routes;
