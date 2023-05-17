import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Beranda from "../components/LandingPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomeView,
    children: [
      {
        path: "/",
        name: "Beranda",
        component: Beranda,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
