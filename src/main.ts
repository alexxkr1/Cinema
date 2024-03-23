import { createApp } from "vue";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import { primevueConfig } from "@/config/primevue.config";
import queryClient from "@/config/vue-query.config";

import { VueQueryPlugin } from "@tanstack/vue-query";


import App from "./App.vue";
import router from "@/router";
const app = createApp(App);

app.use(router);

app.use(VueQueryPlugin, { queryClient });
app.use(primevueConfig);

// import "./assets/main.scss";
// import "./assets/utilities.scss";

app.mount("#app");
