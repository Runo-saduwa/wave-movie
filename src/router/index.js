import { createRouter, createWebHistory } from "vue-router";

import { Home } from "@/views";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
