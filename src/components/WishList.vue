<template>
  <header>
    <TheHeader></TheHeader>
  </header>
  <main>
    <div class="container-fluid p-0 d-flex">
      <TheSideBar></TheSideBar>
      <div class="container-fluid border-start ps-5">
        <h1 class="mt-3 mb-3">Wish List</h1>
        <div v-if="loading" class="loading w-100 h-100 text-center">
          <fingerprint-spinner
              :animation-duration="1500"
              :size="64"
              class="load"
              color="#82c2a9"
          />
        </div>

        <div v-else class=" row wish-list-content d-flex flex-row">
          <div class="card text-start me-3" v-for="(item,index) in wishList.wishlistItems" :key="index">
            <router-link class="btn-detail-link text-decoration-none text-white"
                         :to="{name:'fans.detail',params:{id:item.id,type: item.fan_type.type}}"
            >
              <img class="card-img-top img-fluid w-100" :src="item.images[0].image">
            </router-link>
            <div class="card-body">
              <p class="name">{{ textSlice(item.name, 50) }}</p>
              <p class="price m-0">{{ formatter.format(item.price) }}</p>
              <p class="brand m-0">{{ item.brands.Brand_name }}</p>
              <p class="color m-0">{{ item.technicals[0].color }}</p>
              <p class="stock m-0">In stock</p>
              <button class="btn shadow mt-3 btn-move-to-cart" @click="moveToCart(item.id,item)">Move to cart</button>
            </div>
            <div class="card-footer d-flex flex-column">
              <button href="" class="btn rounded-0 border-0 item-text mt-2 p-0 text-start"
                      @click="deleteWishlist(item.id)">Delete
              </button>
              <a href="" class="item-text text-decoration-none mt-2">Add to list</a>
              <a href="" class="item-text text-decoration-none mt-2">Compare with similar items</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <AuthFooter></AuthFooter>
  </footer>
</template>

<script setup>
import TheHeader from "@/components/TheHeader";
import AuthFooter from "@/components/AuthFooter";
import TheSideBar from "@/components/TheSideBar";
import axios from "axios";
import {computed, onMounted, ref} from "vue";
import {formatter, getCsrfCookie} from "@/helpers";
import {textSlice} from "@/helpers";
import store from "@/store";

const wishList = ref([])
const cart = computed(() => store.state.cart)
onMounted(() => getWishlist())
const loading = ref(false)


const getWishlist = async () => {
  loading.value = true
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await getCsrfCookie()
  return await axiosInstance.get(process.env.VUE_APP_API_URL + "wishlist/").then((res) => {
    wishList.value = res.data
    loading.value = false
  })
}
const moveToCart = async (id, product) => {
  console.log(wishList.value)
  console.log(id)
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await getCsrfCookie()
  await axiosInstance.post(process.env.VUE_APP_API_URL + "wishlist/move-to-cart", {
    'fan_id': id
  }).then(() => {
    wishList.value.wishlistItems = wishList.value.wishlistItems.filter((item) => item.id !== id)
    cart.value.products = [...cart.value.products, product]
    // cart.value.cart_items[id].quantity += 1
  })
}

const deleteWishlist = async (id) => {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await getCsrfCookie()
  await axiosInstance.delete(process.env.VUE_APP_API_URL + "wishlist/remove/" + id).then(() => {
    wishList.value.wishlistItems = wishList.value.wishlistItems.filter((item) => item.id !== id)
    console.log(wishList.value.wishlistItems)
  })
}
</script>

<script>
import {FingerprintSpinner} from 'epic-spinners'
</script>

<style scoped>
.card {
  height: 570px;
  width: 270px;
  margin: 30px;
}

.card-img-top {
  height: 220px;
}

.item-text, .stock {
  color: #388b82;
  font-size: 12px;
  cursor: pointer;
}

.name {
  font-size: 15px;
}

.load {
  margin: 25% auto;
}

.price {
  color: sandybrown;
}

.brand, .color {
  font-size: 12px;
}

.btn-move-to-cart {
  width: 95%;
  border-radius: 10px;
  border: 1px solid #F7FAFA;
  background-color: #F7FAFA;
}
</style>