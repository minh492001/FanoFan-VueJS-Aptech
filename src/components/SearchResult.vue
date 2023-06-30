<template>
  <header>
    <TheHeader></TheHeader>
  </header>
  <main>

    <div class="container-fluid p-0 d-flex" id="search-result">
      <TheSideBar></TheSideBar>
      <div class="container-fluid border-start ps-5">
        <div v-if="loading" class="loading w-100 h-100 text-center">
          <fingerprint-spinner
              :animation-duration="1500"
              :size="64"
              class="load"
              color="#82c2a9"
          />
        </div>

        <h3 v-else class="mt-5 mb-4">({{ results.data.length }}) Result founded...</h3>
        <div class="row wish-list-content d-flex flex-row">
          <div class="card text-start me-3" v-for="(item,index) in results.data" :key="index">
            <img class="card-img-top img-fluid w-100" :src="item.images[0].image" alt="">
            <div class="card-body">
              <p class="name">{{ textSlice(item.name, 50) }}</p>
              <p class="price m-0">{{ formatter.format(item.price) }}</p>
              <p class="brand m-0">{{ item.brands.Brand_name }}</p>
              <p class="color m-0">{{ item.technicals[0].color }}</p>
              <p class="stock m-0">In stock</p>
              <button class="btn shadow mt-3 btn-move-to-cart" @click="moveToCart(item.fan_id)">Move to cart</button>
            </div>
            <div class="card-footer d-flex flex-column">
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
import {onMounted, ref, defineProps} from "vue";
import {formatter, textSlice, getCsrfCookie} from "@/helpers";
import axios from "axios";


onMounted(() => searchByAll())
const props = defineProps({search: {type: String}})
const loading = ref(false)
const results = ref({
  data: [],
  links: [],
  from: null,
  to: null,
  limit: null,
  total: null,
  page: 1,
})

async function searchByAll() {
  loading.value = true
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await getCsrfCookie()
  await axiosInstance.get(process.env.VUE_APP_API_URL + `fans/searching/?search=${props.search}`)
      .then(({data}) => {
        loading.value = false
        results.value = {
          data: data[0].data,
          links: data[0].links,
          from: data[0].from,
          to: data[0].to,
          limit: data[0].per_page,
          total: data[0].total,
          page: 1,
        }
        console.log(results.value.data)
      })
}
</script>

<script>
    import { FingerprintSpinner } from 'epic-spinners'
</script>

<style scoped>
#search-result{
  position: relative;
}
.loading{
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
}
h3{
  color: #388b82;
}
.card {
  height: 540px;
  width: 270px;
  margin: 30px 20px;
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

.load{
  margin: 25% auto;
}
</style>