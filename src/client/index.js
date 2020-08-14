import Vue from "vue";
import Main from "./Main.vue";
import router from "./router/index";

import "./public/css/bootstrap.min.css";

new Vue({
  router,
  render: (h) => h(Main),
}).$mount("#root");
