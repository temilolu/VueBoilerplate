import Vue from 'vue';
import SequentialEntrance from 'vue-sequential-entrance';
import VueWait from 'vue-wait';
import App from './App.vue';
import router from './router';
import store from './store';

import 'vue-sequential-entrance/vue-sequential-entrance.css';

Vue.use(SequentialEntrance);
Vue.use(VueWait);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  wait: new VueWait(),
  render: h => h(App),
}).$mount('#app');
