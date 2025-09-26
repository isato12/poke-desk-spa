import { createRouter, createWebHistory,  } from "vue-router";
import HomePage from "@/modules/landing/pages/HomePage.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
     {
      path: "/features",
      name: "features",
      component: () => import("@/modules/landing/pages/FeaturesPage.vue") // Lazy load, o forma perezosa
    },
    {
      path: "/pricing",
      name: "pricing",
      component: () => import("@/modules/landing/pages/PricingPage.vue") // Lazy load, o forma perezosa
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/modules/landing/pages/ContactPage.vue") // Lazy load, o forma perezosa
    },
  ]
})
export default router;
