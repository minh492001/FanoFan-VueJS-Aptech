<template>
  <div id="dashboard-view" class="container-fluid d-flex flex-row">
    <div class="sidebar">
      <div id="Sidebar" :class="{ 'margin-left':!sidebarOpened,'no-margin':sidebarOpened}"
           class="d-flex flex-column px-3 py-5">
        <div class="mb-3 sidebar-router d-flex flex-row">
          <span id="navbar-icon"><i class="fa-solid fa-house-user text-white fs-4 me-3"></i></span>
          <router-link
              id="router-dashboard"
              :to="{ name: 'app.home'}">Home
          </router-link>
        </div>

        <div class="mb-3 sidebar-router d-flex flex-row">
          <span id="navbar-icon"><i class="fa-solid fa-table-list text-white fs-4 me-3"></i></span>
          <router-link
              id="router-dashboard"
              :to="{ name: 'dashboard.list'}">Products List
          </router-link>
        </div>

        <div class="mb-3 sidebar-router d-flex flex-row">
          <span id="navbar-icon"><i class="fa-solid fa-square-plus text-white fs-4 me-3"></i></span>
          <router-link
              id="router-dashboard"
              :to="{ name: 'dashboard.create'}">Create Product
          </router-link>
        </div>

        <div class="mb-3 sidebar-router d-flex flex-row">
          <span id="navbar-icon"><i class="fa-regular fa-newspaper text-white fs-4 me-3"></i></span>
          <router-link
              id="router-dashboard"
              :to="{ name: 'dashboard.article'}">Post Article
          </router-link>
        </div>
        <div class="mb-3 sidebar-router d-flex flex-row">
          <span id="navbar-icon"><i class="fa-regular fa-file-excel text-white fs-4 me-3"></i></span>
          <router-link
              id="router-dashboard"
              :to="{ name: 'dashboard.excel'}">Import Excel
          </router-link>
        </div>
        <div class="mb-3 sidebar-router d-flex flex-row">
          <span id="navbar-icon"><i class="fa-solid fa-ranking-star text-white"></i></span>
          <router-link
              id="router-dashboard"
              :to="{ name: 'dashboard.report'}">Report
          </router-link>
        </div>
        <div class="mb-3 sidebar-router d-flex flex-row">
           <span id="navbar-icon"><i class="fa-solid fa-trash text-white"></i></span>
          <router-link
              id="router-dashboard"
              :to="{ name: 'dashboard.trash'}">Trash
          </router-link>
        </div>
      </div>
    </div>
    <div class="dashboard-table-content w-100">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">

        <div class="container-fluid ">
          <div id="fan-o-fan" class="d-flex align-items-center">
            <button class="btn-sidebar p-2 rounded-1 border-0 me-3" type="button" data-bs-toggle="collapse"
                    data-bs-target="" @click="toggleSideBar"><span class="navbar-toggler-icon"></span>
            </button>
            <router-link :to="{name: 'app.home'}" class="logo">
              <img class="w-100 h-100" src="/assets/images/LLLL.png" alt="">
            </router-link>
          </div>
          <ul class="navbar-nav me-5 mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                <img class="avatar" src="https://randomuser.me/api/portraits/men/1.jpg" alt="">
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li>
                  <form method="post"><a type="submit" @click="Logout" class="dropdown-item" href="#">Logout</a></form>
                </li>
              </ul>
            </li>
            <li class="nav-item d-flex align-items-center ms-4">
              <div class="user-name">
                <p class="m-0">{{ currentUser.name }}</p>
                <p class="m-0">{{ currentUser.email }}</p>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div class="table-content p-5">
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script setup>
import store from "@/store";
import {computed, onBeforeMount,ref} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";

const sidebarOpened = ref(true)
const router = useRouter()

const currentUser = computed(() => store.state.user)

onBeforeMount(() => {
  checkUser()
})

async function checkUser() {
  if (localStorage.getItem('token') !== null) {
    await getUser()
  }
}
function toggleSideBar() {
  sidebarOpened.value = !sidebarOpened.value
}

async function getUser() {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await axios.get("http://localhost:8000/sanctum/csrf-cookie");
  await axiosInstance.get(process.env.VUE_APP_API_URL + "user")
      .then((res) => {
        store.dispatch('setCurrentUser', res.data)
      })
}

const Logout = () => {
  store.dispatch("logoutActions")
      .then(() => {
        router.push({
          name: "Login",
        });
      });
};
</script>

<style>
#dashboard-view{
  height: 100vh;
}
.table-content{
  height: 100vh;
  overflow: auto;
}
#fan-o-fan, .logo {
  width: 180px;
  height: 40px;
}

.margin-left {
  margin-left: -300px;
  transition: all 1s ease-in-out;
}

.no-margin {
  margin-left: 0;
  transition: all 1s ease-in-out;
}
#navbar-icon{
  width: 45px;
  height: 30px;
}
#router-dashboard {
  color: #dadada;
  text-decoration: none;
  letter-spacing: 2px;
  font-size: 17px;
}

.btn-sidebar:hover {
  background-color: #d1d1d1;
}

#Sidebar {
  background-color: #036964;
  width: 300px;
  height: 100%;
}

#Sidebar > .sidebar-router:hover #router-dashboard {
  color: white;
}

.sidebar-router i {
  font-size: 24px;
}

#dashboard-view {
  padding: 0;
  height: 100%;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>