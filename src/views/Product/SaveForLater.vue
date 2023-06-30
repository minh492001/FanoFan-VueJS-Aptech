<template>
  <div v-if="wishList.wishlistItems" class="d-flex flex-row">
    <div class="container-fluid">
      <div class="row d-flex flex-row">
          <div class="card text-start me-3" v-for="(item,index) in wishList.wishlistItems" :key="index">
            <router-link class="btn-detail-link text-decoration-none text-white"
                         :to="{name:'fans.detail',params:{id:item.id,type: item.fan_type.type}}"
            >
              <img class="card-img-top img-fluid w-100" :src="item.images[0].image">
            </router-link>
            <div class="card-body">
              <p class="name">{{textSlice(item.name,50)}}</p>
              <p class="price m-0">{{ formatter.format(item.price) }}</p>
              <p class="brand m-0">{{ item.brands.Brand_name }}</p>
              <p class="color m-0">{{ item.technicals[0].color }}</p>
              <p class="stock m-0">In stock</p>
              <button class="btn shadow mt-3 btn-move-to-cart" @click="moveToCart(item.id)">Move to cart</button>
            </div>
            <div class="card-footer d-flex flex-column">
              <button href="" class="btn rounded-0 border-0 item-text mt-2 p-0 text-start" @click="deleteWishlist(item.id)">Delete</button>
              <a href="" class="item-text text-decoration-none mt-2">Add to list</a>
              <a href="" class="item-text text-decoration-none mt-2">Compare with similar items</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  <div v-else>
    <h5>No items in your list</h5>
  </div>
</template>

<script setup>
import axios from "axios";
import {onMounted, ref} from "vue";
import {formatter, getCsrfCookie} from "@/helpers";
import {useRouter} from "vue-router";
import {textSlice} from "@/helpers";

const wishList = ref([])
const router = useRouter()
onMounted(() => getWishlist())

const getWishlist = async () => {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await getCsrfCookie()
  return await axiosInstance.get(process.env.VUE_APP_API_URL + "wishlist/").then((res) => {
    wishList.value = res.data
    console.log(wishList.value)
  })
}

const deleteWishlist = async (id) => {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await getCsrfCookie()
  return await axiosInstance.delete(process.env.VUE_APP_API_URL + "wishlist/remove/" + id).then(() => {
    wishList.value.wishlistItems = wishList.value.wishlistItems.filter((item)=> item.id !== id)
  })
}

const moveToCart = async (id) => {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await getCsrfCookie()
  return await axiosInstance.post(process.env.VUE_APP_API_URL + "wishlist/move-to-cart", {
    'fan_id': id
  }).then(() => {
    wishList.value.wishlistItems = wishList.value.wishlistItems.filter((item) => item.id !== id)
    router.go(0)
  })
}

</script>

<style scoped>
.card {
  height: 540px;
  width: 270px;
  padding: 10px;
}

.card-img-top {
  height: 220px;
}

.item-text, .stock {
  color: #388b82;
  font-size: 10px;
  cursor: pointer;
}

.name {
  font-size: 12px;
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

.card-footer{
  padding: 7px;
}

</style>