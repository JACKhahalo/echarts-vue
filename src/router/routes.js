const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('../components/home/home.vue'),
  },
  {
    name: 'table1',
    path: '/tables-jack/table1',
    component: () => import('../components/tables-jack/table1.vue'),
  },
  {
    name: 'table2',
    path: '/tables-jack/table2',
    component: () => import('../components/tables-jack/table2.vue'),
  },
  {
    name: 'table3',
    path: '/tables-jack/table3',
    component: () => import('../components/tables-jack/table3.vue'),
  },
  {
    name: 'table4',
    path: '/tables-jack/table4',
    component: () => import('../components/tables-jack/table4.vue'),
  },
  {
    name: 'table5',
    path: '/tables-jack/table5',
    component: () => import('../components/tables-jack/table5.vue'),
  },
  {
    name: 'table6',
    path: '/tables-jack/table6',
    component: () => import('../components/tables-jack/table6.vue'),
  },
  {
    name: 'table7',
    path: '/tables-jack/table7',
    component: () => import('../components/tables-jack/table7.vue'),
  },
];

export default routes;
