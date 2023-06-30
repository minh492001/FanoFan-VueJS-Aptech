<template>
  <nav id="auth-nav" class="navbar navbar-expand-lg bg-body-tertiary shadow">
    <div class="container-fluid" id="container">
      <a class="navbar-brand" href="#">
        <img src="/assets/images/LLLL.png" class="logo">
      </a>
      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{name:'app.home'}" class="nav-link"
                        :class="[this.$router.name === 'app.home' ? 'text-danger': '']">Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'about'}" class="nav-link">About</router-link>
          </li>
        </ul>

      </div>
      <div class="d-flex flex-row" v-if="!currentUser.token">
        <div>
          <router-link :to="{ name: 'Login' }" class="btn-login"
          >Login
          </router-link
          >
        </div>
        <div @click="router.go(0)">
          <router-link  :to="{ name: 'Registration' }" class="btn-signup"
          >Sign Up
          </router-link
          >
        </div>
      </div>

      <div v-else>
        <ul class="navbar-nav d-flex justify-content-between">
          <li class="nav-item dropdown me-3">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              <span>Hello</span><span class="username fw-bold ms-2">{{ currentUser.name }}</span>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li v-if="currentUser.is_Admin === 1">
                <router-link class="dropdown-item" :to="{name:'dashboard.list'}">Dashboard</router-link>
              </li>
              <li><a class="dropdown-item" @click="Logout"> Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<script setup>
import {computed, onBeforeMount, onMounted, onUpdated} from "vue";
import store from "@/store";
import axios from "axios";
import {useRouter} from "vue-router";
import {getCsrfCookie} from "@/helpers";
const router = useRouter()
let totalPrice = computed(() => store.getters.getPrice)
const currentUser = computed(() => store.state.user)

onBeforeMount(() => getUser())

onMounted(() => {
  currentUser.value
  getItemFromCart()
})

onUpdated(() => {
  totalPrice.value
})

async function getUser() {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await axios.get("http://localhost:8000/sanctum/csrf-cookie");
  await axiosInstance.get(process.env.VUE_APP_API_URL + "user").then((res) => {
    store.dispatch('setCurrentUser', res.data)
  })
}
async function Logout() {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await getCsrfCookie()
  await axiosInstance.post(process.env.VUE_APP_API_URL + "logout").then(() => {
    store.dispatch('logoutActions').then(() => {
      router.push({
        name: "Login",
      });
    })
  })
}
async function getItemFromCart() {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await axios.get("http://localhost:8000/sanctum/csrf-cookie");
  await axiosInstance.get(process.env.VUE_APP_API_URL + "cart").then((response) => {
    store.dispatch('getCartItem', response.data)
  })
}

</script>

<style scoped>
#auth-nav{
  background-color: #04485D !important;
}

ul li .nav-link{
  color:white;
  letter-spacing: 2px;
}
h1 {
  color: black;
}
.dropdown-item{
  cursor:pointer;
}
.logo{
  height: 38px;
  width: 100px;
}

.btn-login {
  margin-right: 7px;
  padding: 7px;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  width: 60px;
  text-align: center;
}

.btn-signup {
  padding: 7px;
  border-radius: 5px;
  text-decoration: none;
  background-color: white;
  color: #04485D;
  width: 80px;
  text-align: center;
}

.btn-login:hover {
  color: white;
}

.btn-signup:hover {
  background-color: var(--main-color-hover);
  width: 80px;
  text-align: center;
  color: white;
}

</style>
