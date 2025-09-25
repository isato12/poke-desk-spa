import { createRouter, createMemoryHistory } from "vue-router";
import HomePage from "@/modules/landing/pages/HomePage.vue";

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    }
  ]
})
export default router;
