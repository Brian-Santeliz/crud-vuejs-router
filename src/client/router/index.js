import Vue from "vue";
import VueRouter from "vue-router";
//router
Vue.use(VueRouter);

//componentes
import ListarRegistro from "../components/ListarRegistro.vue";
import CrearRegistro from "../components/CrearRegistro.vue";
import EditarRegistro from "../components/EditarRegistro.vue";

const routes = [
  {
    path: "/",
    name: "inicio",
    component: CrearRegistro,
  },
  {
    path: "/listar",
    name: "listar",
    component: ListarRegistro,
  },
  {
    path: "/editar/:id",
    name: "editar",
    component: EditarRegistro,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
