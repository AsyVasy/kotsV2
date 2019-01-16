import Vue from "vue";
import App from './App.vue'
import router from './router'
import store from './store/store'
import axiosConfig from "./axios.config";

Vue.config.productionTip = false

Vue.prototype.$ebus = new Vue();
Vue.prototype.$backendURL = "http://dd6694207e094518a1d100f5b2317a08.testmyurl.ws";

// Window.prototype.log =  (...args) => {
//   if (!args.length) return console.warn("attention, votre log est vide...");
//   console.log(args.length > 1 ? args : args[0]);
// };

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
