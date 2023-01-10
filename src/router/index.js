import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/personalData",
    name: "personalData",

    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/PersonalData/PersonalData.vue"
      ),
  },
  {
    path: "/contactData",
    name: "contactData",

    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/ContactData/ContactData.vue"
      ),
  },
  {
    path: "/conclusionData",
    name: "conclusionData",

    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/ConclusionData/ConclusionData.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
