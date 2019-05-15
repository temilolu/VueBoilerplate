import Vue from 'vue';
import SequentialEntrance from 'vue-sequential-entrance';
import App from './App.vue';
import router from './router';
import store from './store';

import 'vue-sequential-entrance/vue-sequential-entrance.css';

Vue.use(SequentialEntrance);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
