import Vue from 'vue';
import VueRouter from 'vue-router';
import VueFilter from 'vue-filter';
import routes from './router.js';
import Toast from 'src/components/toast';
import './index.scss';

Vue.use(VueRouter);
Vue.use(VueFilter);

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render(h) {
    return h('main', [h('router-view'), h(Toast, { ref: 'toast'})]);
  },
  methods: {
    Toast(headerText, contentText, cancelText, isCall) {
      this.$refs.toast.show(headerText, contentText, cancelText, isCall);
    }
  }
}).$mount(document.querySelector('app'));
