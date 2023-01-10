import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from "./plugins/vuetify.js";
import VueMq from 'vue-mq'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
 

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    mobile: 500,
    tablet: 1100,
    desktop: Infinity,
  },
  defaultBreakpoint: 'sm' // customize this for SSR
})