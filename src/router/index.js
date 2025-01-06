import { createRouter, createWebHistory } from "vue-router";

const path = process.env.NODE_ENV === "production" ? "/portfolio/" : "";

// 指定 URL 與對應的元件
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/index.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    // path: "/404",
    name: "404",
    component: () => import("../views/errorpage.vue"),
  },
];

// 建立 VueRouter 實體物件
const router = createRouter({
  history: createWebHistory(path),
  routes: routes,
});

export default router;
