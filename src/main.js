import {createApp} from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue"; // in Vue 3
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import AppModal from "./components/AppModal.vue";
import "./assets/style/global.css";

window.axios = require("axios");
const token = localStorage.getItem("token");
if (token !== null) {
    window.axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}

const app = createApp(App);
app.component("app-modal", AppModal);
app.use(store).use(router).use(bootstrap);
app.mount("#app");
