import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewsView from "../views/NewsView.vue";
import DashView from "../views/DashView.vue";
import UserView from "../views/UserView.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "homeview",
  //   component: HomeView,
  // },
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
  
  // {
  //   path:"/",
  //   name:'user',
  //   component:UserView,
  // }


  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
