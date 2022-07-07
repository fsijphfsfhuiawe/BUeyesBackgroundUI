import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import NewsView from "../views/NewsView.vue";
// import UserView from "../views/UserView.vue";

const routes = [
  {
    path: "/",
    name: "homeview",
    component: HomeView,
  },
  {
    path:"/",
    name:'NewsView',
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NewsView.vue"),
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
