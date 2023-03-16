import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../pages/login/login.vue';
import Handbook from '../pages/handbook/handbook.vue';
import News from '../pages/news/news.vue';
import Index2 from '../pages/index2/index2.vue';
import Index from '../pages/index/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/handbook',
    name: 'handbook',
    component: Handbook,
  },
  {
    path: '/news',
    name: 'news',
    component: News,
  },
  {
    path: '/index2',
    name: 'index2',
    component: Index2,
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;