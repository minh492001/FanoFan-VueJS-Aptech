<template>
<AuthHeader></AuthHeader>
  <div class="bg">
    <div id="container" class="container">
      <div class="row">
        <img src="/assets/images/reset-password.png" alt="">
        <div class="">
          <form action="" @submit.prevent="resetPassword" class="w-100">
            <h3 id="title">Reset Password</h3>
            <div class="label Password1">
              <label for="">Password</label>
              <input id="form-control" class="form-control mb-3" type="password" name="password" placeholder="Password"
                     v-model="passResetRequest.password" required/>
            </div>

            <div class="label Password2">
              <label for="">Confirm Password</label>
              <input id="form-control" class="form-control mb-3" type="password" name="password_confirmation"
                     placeholder="Confirm Password" v-model="passResetRequest.password_confirmation" required/>
            </div>
            <div class="mt-3">
              <button class="btn">
                Reset
                <i class="fa-sharp fa-solid fa-arrow-right-to-bracket"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <AuthFooter></AuthFooter>
</template>

<script setup>
import {useRouter,useRoute} from "vue-router";
import axios from "axios";
import {getCsrfCookie} from "@/helpers";
import AuthHeader from "@/components/AuthHeader";
import AuthFooter from "@/components/AuthFooter";
const router = useRouter();
const route = useRoute()
const passResetRequest = {
  email: route.query.email,
  token: route.query.token,
  password: "",
  password_confirmation: ''
};

async function resetPassword() {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await getCsrfCookie()
  await axiosInstance.post(process.env.VUE_APP_API_URL + `reset-password/${passResetRequest.token}`, passResetRequest)
      .then(() => {
        router.push({
          name: "Login",
        });
      })
}

</script>

<style scoped>
* {
  letter-spacing: 0.5px;
}

.bg {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#title {
  font-weight: bold;
  font-size: 40px;
}

#container {
  width: 500px;
  height: 570px;
  padding: 70px;
  background-color: white;
  border-radius: 7px;
}

.router {
  text-decoration: none;
  color: var(--main-color);
}

.router:hover {
  color: var(--main-color-hover);
  text-decoration: underline;
}

.label label {
  text-align: left;
  margin-bottom: 3px;
  margin-left: 3px;
}

#form-control:focus {
  border-color: var(--main-color);
  box-shadow: 0 0 0 0.25rem var(--color-checkbox);
}

.btn {
  border: 2px solid var(--main-color);
  background-color: var(--main-color);
  border-radius: 5px;
  color: white;
  font-size: 20px;
}

.btn:hover {
  border: 2px solid var(--main-color-hover);
  background-color: var(--main-color-hover);
  color: #036964;
}

img {
  margin: 0 auto 20px;
  height: 100px;
  width: 130px;
}
</style>