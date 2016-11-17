import Vue from 'vue';
import VueRouter from 'vue-router';
import VueFilter from 'vue-filter';

// import App from './app.vue';
import routes from './router.js';
import './index.scss';

Vue.use(VueRouter);
Vue.use(VueFilter);

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h('router-view')
}).$mount(document.querySelector('app'));
