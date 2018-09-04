import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import i18n from './i18n';
import './assets/scss/app.scss';

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
