import { createRouter, createWebHashHistory } from "vue-router";
import NewsView from "../views/NewsView.vue";
import DashView from "../views/DashView.vue";
import UserView from "../views/UserView.vue";

const routes = [
  
  {
    path: "/",
    name: "DashView",
    component: DashView,
  },
  {
    path:"/NewsView",
    name:'NewsView',
    // component: NewsView,
    component: () =>
      import(/* webpackChunkName: "NewsView" */ "../views/NewsView.vue"),
  },
  {
    path: "/UserView",
    name: "UserView",
    component: UserView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
