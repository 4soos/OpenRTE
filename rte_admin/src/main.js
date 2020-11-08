import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(axios);

// Vue.config.lang = 'zh-cn'
// Vue.locale('zh-cn', zhLocale)
// Vue.locale('en', enLocale)

new Vue({
  el: '#app',
  render: h => h(App)
});