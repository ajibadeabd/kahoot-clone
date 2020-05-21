// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store  from './store'
import axios from 'axios'
import materializeCss from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

Vue.use(materializeCss)
Vue.config.productionTip = false

//setting up default vue's http modules for api calls
Vue.prototype.$http = axios
// load token from local storage
const token = localStorage.getItem("token")
// setting axios authorization header
if(token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
  // Vue.prototype.$http.defaults.headers.common['Authorization']=token
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
