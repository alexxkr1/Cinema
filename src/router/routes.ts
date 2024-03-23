import { ROUTE_PATHS } from "@/router/paths";
import type { RouteLocationNormalized, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: ROUTE_PATHS.HOME,
    name: ROUTE_PATHS.HOME,
    component: () => import("@/views/HomeView.vue"),
  },
];

export default routes;
