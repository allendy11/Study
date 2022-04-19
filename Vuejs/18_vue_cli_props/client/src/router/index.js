import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/page1",
    name: "Page1",
    component: () => import("../views/Page1View.vue"),
  },
  {
    path: "/page2",
    name: "Page2",
    component: () => import("../views/Page2View.vue"),
  },
  {
    path: "/page3",
    name: "Page3",
    component: () => import("../views/Page3View.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
