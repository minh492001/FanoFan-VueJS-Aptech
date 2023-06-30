<template>
  <div id="loading-container w-100 h-100">
    <div v-if="loading" class="loading w-100 h-100 text-center">
      <fingerprint-spinner
          :animation-duration="1500"
          :size="64"
          class="load"
          color="#82c2a9"
      />
    </div>
    <div v-else>
      <div v-if="!searchFanAttribute && !nameOfBrand && !orderByType">
        <BrandsHeader @changeBrand="getCeilingFans"></BrandsHeader>
        <OrderSaleSearch @sortDescAsc="getListOfAllFansByPrice" @search="searchByName"></OrderSaleSearch>
        <ArticleRelated :article="article"></ArticleRelated>
        <hr>
        <div class="container-feature-product m-auto" v-for="(item,index) in feature" :key="index">
          <h2 class="m-0">New Feature Product</h2>
          <div class="feature-row row bg-white p-0 mt-3 me-0">
            <div class="ads-video-price py-3 ps-4">
              <h5 class="text-start p-0 big-ass">{{ item.name }}</h5>
              <p class="text-start p-0 m-0">Width: {{ item.technicals[0].width }}</p>
              <p class="text-start p-0 m-0">Color : {{ item.technicals[0].color }}</p>
              <p class="text-start p-0 m-0">{{ formatter.format(item.price) }}
                <del>$1849.00</del>
              </p>
              <p class="text-start p-0 m-0">Brand: {{ item.brands.Brand_name }}</p>
              <p class="text-start p-0 m-0">Material: {{ item.technicals[0].fan_materials }}</p>
              <p class="text-start p-0 m-0"> Room Type : Lobby, Kitchen, Bedroom, Living Room, Home Office, Dining
                Room</p>
            </div>
            <div class="ads-video-img p-0">
              <img class="w-100 h-100" :src="item.images[0].image" alt="">
            </div>
            <div class="ads-video">
              <video class="ceil-video" controls autoplay muted>
                <source :src="item.videos[0].video" type="video/mp4">
              </video>
            </div>
          </div>
        </div>
        <hr>
        <RecentlyView :recentList="ceilingFansList"></RecentlyView>
        <hr>
        <div class="container-fluid">
          <div class="title ms-5">
            <h2>Ceiling Fans</h2>
            <p>Shop ceiling fan from many brands over the world and more</p>
          </div>
          <FanRenderLayout :FansList="ceilingFansList"></FanRenderLayout>
        </div>
        <hr>
      </div>
      <div v-else-if="nameOfBrand || orderByType || searchFanAttribute">
        <BrandsHeader @changeBrand="getCeilingFans"></BrandsHeader>
        <OrderSaleSearch @sortDescAsc="getListOfAllFansByPrice" @search="searchByName"></OrderSaleSearch>
        <div class="container-fluid">
          <div v-if="!searchFanAttribute">
            <div class="title ms-5">
              <h2 class="mt-3 mb-4">( {{ ceilingFansList.length }} ) results founded...</h2>
            </div>
            <FanRenderLayout :FansList="ceilingFansList"></FanRenderLayout>
          </div>
          <div v-else>
            <div class="title ms-5">
              <h2 class="mt-3 mb-4">( {{ searchResult.length }} ) results founded...</h2>
            </div>
            <FanRenderLayout :searchResult="searchResult"></FanRenderLayout>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FingerprintSpinner } from 'epic-spinners'
import {formatter} from "@/helpers";
import BrandsHeader from "@/components/BrandsHeader";
import store from "@/store";
import {computed, onMounted, ref} from "vue";
import axios from "axios";
import OrderSaleSearch from "@/components/OrderSaleSearch";
import ArticleRelated from "@/views/Product/ArticleRelated";
import RecentlyView from "@/views/Product/RecentlyView";
import FanRenderLayout from "@/components/FanRenderLayout";
import axiosClient from "@/services/http-common";

const loading = ref(false)
let nameOfBrand = ref('')
let orderByType = ref('')
let searchFanAttribute = ref('')
const article = ref({})

onMounted(() => {
  getCeilingFans()
  getArticle()
  featureProduct()
})

const searchResult = ref({})
const ceilingFansList = computed(() => store.state.ceilingFans.data.ceilingFan);
const feature = ref({})

function getCeilingFans(brandName) {
  nameOfBrand.value = brandName
  store.dispatch('getCeilingF', {
    brand: nameOfBrand.value,
  })
}

async function searchByName(searchValue) {
  nameOfBrand.value = ''
  orderByType.value = ''
  loading.value = true
  searchFanAttribute.value = searchValue
  await axiosClient.post(process.env.VUE_APP_API_URL + 'fans/searching-specific-type', {
    search: searchValue,
    type_id: 1,
  }).then((res) => {
    searchResult.value = res.data.searchingData
    console.log(searchResult.value)
    setTimeout(() => {
      loading.value = false
    }, 1500)
  });
}

async function featureProduct() {
  return await axiosClient.get(process.env.VUE_APP_API_URL + 'fans/feature/18').then((res) => {
    feature.value = res.data.feature
    console.log( feature.value)
  })
}

function getListOfAllFansByPrice(orderBy) {
  orderByType.value = orderBy
  store.dispatch('getCeilingF', {
    order_by_type: orderByType.value
  })
}

const getArticle = async () => {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await axios.get("http://localhost:8000/sanctum/csrf-cookie");
  await axiosInstance.get(process.env.VUE_APP_API_URL + "article/ceiling").then((res) => {
    article.value = res.data
    console.log(article.value)
  })
}

</script>

<style scoped>
#loading-container {
  position: relative;
}

.loading {
  z-index: 500;
  height: 4000px;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
}

h2 {
  color: #00766a;
}

.container-feature-product, .feature-row {
  width: 1490px;
}

.ads-video {
  width: 55%;
  height: 400px;
}

.ads-video-price {
  background-color: #F1EFEF;
  width: 20%;
  height: 400px;
}

.ads-video-img {
  background-color: #f6f6f6;
  width: 25%;
  height: 400px;
}

.ceil-video {
  width: 89%;
  height: 400px;
}

hr {
  color: #c7c6c6
}

img {
  height: 250px;
  width: 100%;
}

@media screen and (max-width: 1514px) {
  .container-feature-product, .feature-row {
    width: 1214px;
    margin-left: 60px;
  }
}
@media screen and (max-width: 1366px) {
  .container-feature-product, .feature-row {
    width: 1080px;
    margin-left: 60px;
  }
  .ads-video-price {
    width: 25%;
  }
  .ads-video-img {
    width: 15%;
  }
  .ads-video {
    width: 50%;
    height: auto;
  }
  .ceil-video {
    width: 103%;
  }
}

</style>
