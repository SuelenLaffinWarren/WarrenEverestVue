import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import VMask from "v-mask";
// import Vuelidate from "vuelidate";
// Vue.use(Vuelidate);
Vue.use(VMask);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
