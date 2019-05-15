import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Preview from './views/Preview.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/preview/:id',
      name: 'preview',
      component: Preview,
      props: true,
    },
  ],
});
