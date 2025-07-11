import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { updateHeadMeta } from "@/utils/metaHelper.js";
const app = createApp(App);
router.afterEach((to) => {
  updateHeadMeta(to);
});
app.use(createPinia());
app.use(router);

app.mount("#app");
