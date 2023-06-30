<template>
  <AuthHeader></AuthHeader>
  <div class="bg">
    <div id="container" class="container">
      <div class="row">
        <img src="/assets/images/forgot.png" alt="">
        <p class="alert alert-danger mt-3" v-if="Alert">{{ Alert }}</p>
        <p class="alert alert-success mt-3" v-if="notification">{{ notification }}</p>
        <form
            method="post"
            @submit.prevent="sendEmailForResetPassword"
            class="w-100"
        >
          <div id="title">
            <h3>Forgot Password?</h3>
            <h4>Enter your registered email ID to reset the password</h4>
          </div>
          <p class="mb-5">
            Or {{ "" }}
            <router-link :to="{ name: 'Login' }" class="router">
              Remembered your password?
            </router-link>
          </p>
          <div class="label Email">
            <label for="">Email Address</label>
            <input
                id="form-control"
                class="form-control mb-3"
                type="email"
                name="email"
                placeholder="Enter your registered email"
                v-model="email"
            />
          </div>
          <div class="mt-5">
            <button type="submit" class="btn-router"> Email Password Reset Link <i class="fa-solid fa-lock"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <AuthFooter></AuthFooter>
</template>

<script setup>
import { ref } from "vue";
import AuthHeader from "@/components/AuthHeader";
import AuthFooter from "@/components/AuthFooter";
import axios from "axios";
import {getCsrfCookie} from "@/helpers";

let email = ref('')
let notification = ref('');
let Alert = ref('')
const sendEmailForResetPassword = async () => {
  console.log(email.value)
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await getCsrfCookie()
  await axiosInstance.post(process.env.VUE_APP_API_URL + "forgot-password", {email: email.value}).then(() => {
    notification.value = 'The reset link was sent to your email!'
  }).catch(({response}) => {
    Alert.value = response.message
  })
};

</script>


<style scoped>
* {
  letter-spacing: 0.5px;
}

.bg {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#container {
  height: 500px;
  width: 480px;
  padding: 50px;
  text-align: center;
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

#form-control:focus {
  border-color: var(--main-color);
  box-shadow: 0 0 0 0.25rem var(--color-checkbox);
}

.label {
  text-align: left;
}

.label label {
  margin-bottom: 3px;
  margin-left: 3px;
}

.btn-router {
  background-color: var(--main-color);
  color: white;
  border: 2px solid var(--main-color);
  border-radius: 5px;
  padding: 5px 20px;
  text-decoration: none;
  font-size: 18px;
}

.btn-router:hover {
  background-color: white;
  border: 2px solid var(--main-color-hover);
  color: var(--main-color-hover);
}

img {
  margin: 0 auto;
  height: 70px;
  width: 100px;
}

#title h3 {
  font-weight: bold;
  font-size: 35px;
}

#title h4 {
  font-size: 15px;
}

h1 {
  text-align: center;
}
</style>
