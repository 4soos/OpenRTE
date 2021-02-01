import Vue from 'vue'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/global.css'
import './assets/iconfonts/iconfont.css'

import App from './App.vue'
import router from './router'
import API_URL from './api/index'

Vue.use(ElementUI);

axios.defaults.baseURL = API_URL
Vue.prototype.$api = axios


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
