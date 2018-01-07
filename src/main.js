// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'

import './element-variables.scss'
import App from './App'
import router from './router'
import initRouter from './router/router-actions'
import store from './store'
import './scss/element-cover.scss'
import './assets/iconfont/iconfont.css'

//initRouter(router)

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
