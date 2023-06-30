import axiosClient from "axios";
import axios from "axios";

export const register = async (user) => {
  return await axiosClient.post(process.env.VUE_APP_API_URL + "register", user);
};

export const login = async (user) => {
  await axios.get("http://localhost:8000/sanctum/csrf-cookie");
  return await axiosClient.post(process.env.VUE_APP_API_URL + "login", user, {
    withCredentials: true,
  });
};

export const forgotPassword = async (email) => {
  return await axiosClient.post(
    process.env.VUE_APP_API_URL + "forgot-password",
    email
  );
};

export const resetPassword = async (token) => {
  return await axiosClient.put(
    process.env.VUE_APP_API_URL + `reset-password/${token}`
  );
};
