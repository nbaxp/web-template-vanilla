import { createRouter, createWebHashHistory } from 'vue-router';
import layout from '../layouts/default.js';
import home from '../views/home.js';
import login from '../views/login.js';

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: layout,
    children: [
      {
        path: 'home',
        component: home,
      },
    ],
  },
  {
    path: '/login',
    component: login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { routes };
export default router;
