import store from "../store";
import axios from "axios";
import router from "../router";

const axiosClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosClient.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axiosClient.defaults.withCredentials = true;
axiosClient.interceptors.request.use((config) => {
  config.headers["Authorization"] = `Bearer ${store.state.user.token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      store.commit("setToken", null);
      router.push({ name: "Login" });
    } else if (error.response.status === 404) {
      router.push({ name: "NotFound" });
    }
    throw error;
  }
);

export default axiosClient;
