import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueDragDrop from "vue-drag-drop";
import "@/assets/styles/main.scss";

Vue.use(VueDragDrop);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
