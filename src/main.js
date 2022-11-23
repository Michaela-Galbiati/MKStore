import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

createApp(App).mount('#app')