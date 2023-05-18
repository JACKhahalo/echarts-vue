const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('../components/home/home.vue'),
  },
  {
    name: 'tables-jack-table1',
    path: '/tables-jack/table1',
    component: () => import('../components/tables-jack/table1.vue'),
  },
  {
    name: 'tables-jack-table2',
    path: '/tables-jack/table2',
    component: () => import('../components/tables-jack/table2.vue'),
  },
  {
    name: 'tables-jack-table3',
    path: '/tables-jack/table3',
    component: () => import('../components/tables-jack/table3.vue'),
  },
  {
    name: 'tables-jack-table4',
    path: '/tables-jack/table4',
    component: () => import('../components/tables-jack/table4.vue'),
  },
  {
    name: 'tables-jack-table5',
    path: '/tables-jack/table5',
    component: () => import('../components/tables-jack/table5.vue'),
  },
  {
    name: 'tables-jack-table6',
    path: '/tables-jack/table6',
    component: () => import('../components/tables-jack/table6.vue'),
  },

  {
    name: 'tables-kevin-table1',
    path: '/tables-kevin/table1',
    component: () => import('../components/tables-kevin/table1.vue'),
  },
  {
    name: 'tables-kevin-table2',
    path: '/tables-kevin/table2',
    component: () => import('../components/tables-kevin/table2.vue'),
  },
  {
    name: 'tables-kevin-table3',
    path: '/tables-kevin/table3',
    component: () => import('../components/tables-kevin/table3.vue'),
  },
  {
    name: 'tables-kevin-table4',
    path: '/tables-kevin/table4',
    component: () => import('../components/tables-kevin/table4.vue'),
  },

  {
    name: 'tables-kevin-table5',
    path: '/tables-kevin/table5',
    component: () => import('../components/tables-kevin/table5.vue'),
  },
  //
  {
    name: 'table7',
    path: '/tables-jack/table7',
    component: () => import('../components/tables-jack/table7.vue'),
  },
];

export default routes;
