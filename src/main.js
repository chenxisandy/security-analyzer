// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 反向代理
var axios = require('axios')
axios.default.baseURL = 'http://localhost:8443/api'

// 全局注册
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
