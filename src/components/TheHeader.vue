<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary shadow p-0" :Search="Search">
    <div class="container-fluid p-sm-0 d-flex align-items-center" id="container">
      <router-link
          id="router"
          :to="{name:'app.home'}"
          class="nav-link"
          exact>
        <img src="/assets/images/LLLL.png" class="logo">
      </router-link>
      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse mt-sm-3 mt-lg-0 d-xxl-flex flex-row justify-content-between" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto m-sm-0 mb-2 mb-lg-0 p-sm-3 p-lg-0 ps-lg-3">
          <li class="nav-item">
            <a href="/home"
               id="router"
               class="nav-link"
               exact>Home
            </a>
          </li>
          <li class="nav-item">
            <a
                href="/event"
                id="router"
                class="nav-link"
            >Event
            </a>
          </li>
          <li class="nav-item">
            <a href="/about"
               id="router"
               class="nav-link">About
            </a>
          </li>
          <li class="nav-item">
            <a href="/gallery"
               id="router"
               class="nav-link"
            >Gallery
            </a>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <button class="dropbtn" @mouseenter="show = true">
                <a
                    href="/app/fans/all"
                    id="router"
                    class="nav-link"
                    role="button">
                  Product
                </a>
              </button>

              <Transition name="slide-fade">
                <div class="dropdown-content d-xxl-block d-none" v-if="show" @mouseleave="show=false">
                  <div class="container">
                    <div class="row">
                      <div class="col-3">
                        <a href="/app/fans/ceiling">

                          <img class="icon-1"
                               src="/assets/images/fan/ceiling/AUNEVN Ceiling Fans with Lamp Led Nordic Iron Crystal Ceiling Fan Led Lights Ceiling Lamp Chandelier Living Room Bedroom Indoor Lighting52 Inches/0.jpg">
                          Ceiling Fan
                        </a>
                        <a href="/app/fans/floor">
                          <img class="icon-1" src="/assets/images/fan/fanlistheader/box.jpg">
                          Pedestral
                        </a>
                        <a href="/app/fans/tower">
                          <img class="icon-1" src="/assets/images/fan/tower-fan/FANoFAN/t-1/61zwVZXd9sL._AC_SX679_.jpg">
                          Tower Fan
                        </a>
                        <a href="/app/fans/wall">
                          <img class="icon-1" src="/assets/images/fan/fans-ads/wall4.jpg">
                          Wallmonut Fan
                        </a>
                      </div>

                      <div class="col-3">
                        <a href="/app/fans/island">
                          <img class="icon-1" src="/assets/images/fan/CeilingIslandFans/Bifan-Dack.jpg">
                          Ceilingisland Fan
                        </a>
                        <a href="/app/fans/box">
                          <img class="icon-1" src="/assets/images/fan/box-fan/81AyuPhQ0aL._AC_SX679_.jpg">
                          Box Fan
                        </a>
                        <a href="/app/fans/steam">
                          <img class="icon-1" src="/assets/images/fan/SteamFans/DB-26CF08.jpg">
                          Steam Fan
                        </a>
                        <a href="/app/fans/industry">
                          <img class="icon-1" src="/assets/images/fan/fanlistheader/industry.jpg">
                          Industry Fan
                        </a>
                      </div>

                      <div class="col-3">
                        <a href="/app/fans/table">
                          <img class="icon-1"
                               src="/assets/images/fan/table/Vornado%20Silver%20Swan%20Alchemy%20Oscillating%20Vintage%20Fan,%20Gunmetal/0.jpg">
                          Table Fan
                        </a>
                        <a href="/app/fans/battery">
                          <img class="icon-1" src="/assets/images/fan/fanlistheader/battery.jpg">
                          Electric fan
                        </a>

                        <a href="/app/fans/solar">
                          <img class="icon-1" src="/assets/images/fan/SolarPowerFans/Suntek-KM-F0166.jpg">
                          Solar Fan
                        </a>
                        <a href="/app/fans/conditioner-fan">
                          <img class="icon-1" src="/assets/images/fan/fanlistheader/conditioner-fan.jpg">
                          Conditioner fan
                        </a>
                      </div>

                      <div class="col-3">
                        <a href="/app/fans/conditioner">
                          <img class="icon-1" src="/assets/images/fan/fans-ads/conditoner4.jpg">
                          Conditioner
                        </a>
                        <a href="/app/fans/cool-air">
                          <img class="icon-1" src="/assets/images/fan/fanlistheader/cool-air-system.jpg">
                          CoolAir System
                        </a>
                        <a href="/app/fans/ventilator">
                          <img class="icon-1"
                               src="/assets/images/fan/ventilator/quat-hut-am-tran-dung-voi-ong-dan-panasonic-fv-24cu8.jpg">
                          Ventilator
                        </a>
                        <a href="/app/fans/air-curtain">
                          <img class="icon-1" src="/assets/images/fan/fanlistheader/air-curtain.jpg">
                          Air Curtain
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </li>
          <li class="nav-item">
            <a href="/contact" class="nav-link">Contact</a>
          </li>
        </ul>

        <ul class="navbar-nav d-xxl-block d-none">
          <li class="nav-link">
            <form class="search" action="/search-result" @submit.prevent="searchQuery">
              <div class="search__wrapper">
                <input
                    type="text"
                    name="search"
                    placeholder="Search for..."
                    class="search__field"
                    v-model="Search"
                />
                <button
                    type="submit"
                    class="fa fa-search search__icon"
                ></button>
              </div>
            </form>
          </li>
        </ul>
        <ul class="navbar-nav d-xxl-none d-block px-3">
          <li class="nav-link">
            <form class="" action="/search-result" @submit.prevent="searchQuery">
              <div class="form-group">
                <input
                    type="text"
                    name="search"
                    placeholder="Search for..."
                    class="form-control"
                    v-model="Search"
                />
                <input class="d-none" type="submit"/>
              </div>
            </form>
          </li>
        </ul>

        <ul class="navbar-nav">
          <li class="nav-link">
            <div v-if="!currentUser.token">
              <router-link :to="{ name: 'Login' }" class="btn-login"
              >Login
              </router-link
              >
              <router-link :to="{ name: 'Registration' }" class="btn-signup"
              >Sign Up
              </router-link
              >
              <button class="btn dropdown-toggle ms-2" type="button" id="btn-shopping"
                      data-bs-toggle="dropdown" aria-expanded="false">
                <div v-if="!currentUser.token" class="badge">0</div>
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
            <div v-else>
              <div class="cart-user">
                <div class="row">
                  <div class="col d-flex align-items-center p-0" id="profile">
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
                          <li class="nav-item d-xl-none d-block">
                            <a class="dropdown-item border-0 h-100" @click="Logout"> Logout</a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item me-3 d-xl-block d-none">
                        <button class="btn-logout border-0 h-100" @click="Logout"> Logout</button>
                      </li>
                      <li class="nav-item">
                        <div class="shopping">
                          <div class="dropdown">
                            <button class="btn dropdown-toggle border-0 rounded-0 h-100" type="button" id="btn-shopping"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                              <div class="badge">{{ cartQuantity }}</div>
                              <i class="fa-solid fa-cart-shopping"></i>
                            </button>

                            <div class="dropdown-menu dropdown-menu-end" id="menu">
                              <div class="container-fluid">
                                <div class="row">
                                  <div class="col-12">
                                    <table class="table table-borderless">
                                      <tbody>
                                      <tr v-for="(item,index) in cart.products" :key="index">
                                        <td width="1%" class="quantity">
                                          {{ cart.cart_items[item.id].quantity }}
                                        </td>

                                        <td width="1%">
                                          <div @click="$router.go()">
                                            <router-link
                                                :to="{name:'fans.detail',params:{id:item.id,type:item.fan_type.type}}">
                                              <img class="cart-image p-0 me-2" :src="item.images[0].image">
                                            </router-link>
                                          </div>
                                        </td>

                                        <td>
                                          <p class="text-black m-0 p-0">{{ item.name }}</p>
                                          <p class="cart-mini-price ms-auto mb-0 p-0">{{
                                              formatter.format(item.price)
                                            }}</p>
                                        </td>
                                        <td width="1%">
                                          <div class="del-icon" @click="deleteCartItem(item.id,index)">
                                            <i class="fa-regular fa-circle-xmark"></i>
                                          </div>
                                        </td>

                                      </tr>
                                      </tbody>
                                    </table>

                                  </div>
                                </div>

                                <hr>
                                <div class="container-fluid">
                                  <div class="row">
                                    <div class="col-5">
                                      <p class="fw-bold m-0">Total : <span
                                          class="cart-mini-price">{{ formatter.format(totalPrice) }}</span>
                                      </p></div>
                                    <div class="col-3">
                                      <div>
                                        <router-link class="badge" :to="{name:'wishlist'}">Your list</router-link>
                                      </div>
                                    </div>
                                    <div class="col-3 text-end">
                                      <div>
                                        <router-link class="badge" :to="{name:'cart'}">Go to cart</router-link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<script setup>
import {computed, onBeforeMount, onMounted, onUpdated, ref} from "vue";
import store from "@/store";
import {useRouter} from "vue-router";
import axios from "axios";
import {formatter, getCsrfCookie} from "@/helpers";

const router = useRouter();
let Search = ref('')
let show = ref(false)
const cartQuantity = computed(() => store.getters.getNumberOfCartItem)
let totalPrice = computed(() => store.getters.getPrice)
const currentUser = computed(() => store.state.user)
const cart = computed(() => store.state.cart)
onBeforeMount(() => checkUser())

onMounted(() => {
  // getUser()
  // getItemFromCart()
  checkUser()
})

onUpdated(() => {
  totalPrice.value
})

function searchQuery() {
  router.push({name: 'search-result', params: {search: Search.value}})
  setTimeout(() => {
    router.go(0)
  }, 500)
  // window.location.reload()
}

async function checkUser() {
  if (localStorage.getItem('token') !== null) {
    await getUser()
    await getItemFromCart()
  }
}

async function getUser() {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await getCsrfCookie()
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
  await getCsrfCookie()
  await axiosInstance.get(process.env.VUE_APP_API_URL + "cart").then((response) => {
    store.dispatch('getCartItem', response.data)
  })
}

const deleteCartItem = async (id, index) => {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await getCsrfCookie()
  await axiosInstance.delete(process.env.VUE_APP_API_URL + "cart/remove/" + id,).then((res) => {
    cart.value.products.splice(index, 1)
    store.dispatch('getCount', res.data.count)
  })
}

</script>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>

<style lang="scss" scoped>
#container,.navbar{
  height: 65px;
}
#navbarSupportedContent{
  background-color: #F8F9FA;

}
h1 {
  color: black;
}

.cart-image {
  width: 40px;
  height: 40px;
}

.cart-mini-price {
  color: sandybrown;
}

.logo {
  height: 38px;
  width: 150px;
}

.icon-1 {
  height: 40px;
  width: 40px;
  cursor: pointer;
}

#router {
  color: black;
  text-decoration: none;

  &.active {
    color: var(--main-color);
  }
}

.btn-login {
  margin-right: 7px;
  padding: 7px;
  border-radius: 5px;
  text-decoration: none;
  color: var(--main-color);
  width: 60px;
  text-align: center;
}

.btn-signup {
  padding: 7px;
  text-decoration: none;
  color: white;
  background-color: var(--main-color);
  width: 80px;
  text-align: center;
}

.username {
  color: var(--main-color-hover);
}

.btn-login:hover {
  color: var(--main-color-hover);
}

.btn-signup:hover {
  background-color: var(--main-color-hover);
  width: 80px;
  text-align: center;
  color: white;
}

.btn-logout {
  background-color: var(--main-color);
  color: white;
  padding: 5px;
  width: 80px;
}

.btn-logout:hover {
  background-color: var(--main-color-hover);
  color: white;
}

a {
  text-decoration: none;
}

.del-icon {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
}

.del-icon:hover {
  background-color: rgb(227, 227, 227);
  cursor: pointer;
}

.cart-user {
  margin-right: 170px;
}

#btn-shopping {
  background-color: white;
  color: var(--main-color);
  padding: 5px 7px;
}

#btn-shopping:hover {
  color: var(--main-color-hover);
}

#menu {
  width: 400px;
  height: fit-content;
  right: -33px;
  top: 133%;
}

.shopping {
  width: 85px;
}

.badge {
  background-color: white;
  color: var(--main-color);
  font-size: 16px;
  text-align: right;
}

.search {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

}

.search * {
  outline: none;
  box-sizing: border-box;
}

.search__wrapper {
  position: relative;
}

.search__field {
  width: 50px;
  height: 50px;
  color: transparent;
  font-family: Lato, sans-serif;
  font-size: 1.35em;
  padding: 0.35em 50px 0.35em 0;
  border: 1px solid transparent;
  border-radius: 27px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.search__field:focus {
  border-bottom-color: #f5f5f5;
  width: 30vw;
  color: #2b2b2b;
  cursor: default;
}

.search__field:focus ~ .search__icon {
  background-color: transparent;
  cursor: pointer;
  pointer-events: auto;
}

.search__icon {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #e9f1f4;
  width: 50px;
  height: 50px;
  font-size: 1.35em;
  text-align: center;
  border-color: transparent;
  border-radius: 50%;
  pointer-events: none;
  display: inline-block;
  transition: background-color 0.2s ease-in-out;
}

.search__field::-webkit-input-placeholder {
  position: relative;
  top: 0;
  left: 0;
  transition-property: top, color;
  transition-duration: 0.1s;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
}

.search__field:-moz-placeholder {
  position: relative;
  top: 0;
  left: 0;
  transition-property: top, color;
  transition-duration: 0.1s;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
}

.search__field::-webkit-input-placeholder[style*="hidden"] {
  color: #83b0c1;
  font-size: 0.65em;
  font-weight: normal;
  top: -20px;
  opacity: 1;
  visibility: visible !important;
}

.search__field:-moz-placeholder[style*="hidden"] {
  color: #83b0c1;
  font-size: 0.65em;
  font-weight: normal;
  top: -20px;
  opacity: 1;
  visibility: visible !important;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  width: 1500px;
  height: 300px;
  justify-content: center;
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  width: 197px;
  display: block;
}

.dropbtn {
  background-color: transparent;
  border: none;
}

.dropdown:hover .dropdown-content {
  display: block;
}


.dropdown:hover .dropbtn {
  background-color: white;
}

.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

//.slide-fade-leave-active {
//  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
//}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@media screen and (min-width: 992px) and (min-width: 1514px) {
  .search {
    position: absolute;
    top: 50%;
    left: 55%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }

  #profile {
    width: 140px;
    margin-right: 55px;
  }
}
@media screen and (min-width: 1199px)and (max-width: 1513px){
  .cart-user {
    margin-right: 0;
  }
}
@media screen and (max-width: 1199px){
  .cart-user {
    margin-right: 0;
  }
}
@media screen and (max-width: 991px){
  #container{
    height: 65px;
  }
}
</style>
