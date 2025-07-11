import { createRouter, createWebHistory } from "vue-router";
import BaseLayout from "@/views/Layouts/BaseLayout.vue";
import BaseView from "../views/BaseView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: BaseLayout,
      children: [
        {
          path: "",
          name: "Base",
          component: BaseView,
          meta: {
            title: "Tomi Andrean",
            metaTags: [
              {
                name: "description",
                content: "The home page of our example app.",
              },
              {
                property: "og:description",
                content: "The home page of our example app.",
              },
            ],
          },
        },
        {
          path: "/about",
          name: "about",
          component: BaseView,
          meta: {
            title: "About Page - Example App",
            metaTags: [
              {
                name: "description",
                content: "The home page of our example app.",
              },
              {
                property: "og:description",
                content: "The home page of our example app.",
              },
            ],
          },
        },
      ],
    },
  ],
});

export default router;
