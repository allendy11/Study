import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/page1",
    name: "page1",
    component: () => import("../views/Page1View.vue"),
  },
  {
    path: "/page2",
    name: "page2",
    component: () => import("../views/Page2View.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
