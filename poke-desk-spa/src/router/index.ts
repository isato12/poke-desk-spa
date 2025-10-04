import { createRouter, createWebHistory,  } from "vue-router";
import HomePage from "@/modules/landing/pages/HomePage.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/',
      name: 'landing',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
      path: "/",
      name: "home",
      component: HomePage,
      //agregando meta para definir imagen de fondo especifica a esta ruta
       meta: {
        // Define la imagen de fondo para esta ruta específica
        backgroundImage: 'url(https://th.bing.com/th/id/R.bac98fd7567e0c7fdf1fcefd163baa07?rik=7PvZFDS%2bkZ5Hug&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fUTEF6XR.png&ehk=SPyKu8oVxWzlO5EJmj3POysDnpny4ZElNZqKKdxSIOE%3d&risl=&pid=ImgRaw&r=0)'
      }
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
    },
    //Auth

    {
      path: "/auth",
      name: "auth-layout",
      component: () => import("@/modules/auth/pages/LoginPages.vue"),

    }
  ]
})
export default router;
