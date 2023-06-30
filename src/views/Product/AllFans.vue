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
        <div class="container-fluid mb-3">
          <BrandsHeader @changeBrand="getListByBrand"></BrandsHeader>
          <OrderSaleSearch @sortDescAsc="getListByOrder" @search="searchByName"></OrderSaleSearch>
        </div>
        <RecentlyView :recent-list="listOfAllFans"></RecentlyView>
        <div class="container-fluid d-flex flex-column">
          <div class="title ms-5">
            <h1>All Fans</h1>
            <p>Shop all fan from many brands over the world and more</p>
          </div>
          <div>
            <FanRenderLayout :FansList="listOfAllFans"></FanRenderLayout>
          </div>

          <div class="table-paginate d-flex justify-content-between mt-5">
    <span>Showing from <span class="showing-number">{{ pagination.from }}</span> to <span
        class="showing-number">{{ pagination.to }}</span></span>
            <nav>
              <ul class="pagination">
                <li class="page-item d-flex ">
                  <a class="page-link" href="#"
                     :disabled="!link.url"
                     v-for="(link,index) of pagination.links"
                     :key="index"
                     @click="getForPage($event, link)"
                     v-html="link.label"
                     :class="[link.active ? 'bs-info-bg-subtle' : '']">
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

      </div>
      <div v-else-if="nameOfBrand || orderByType || searchFanAttribute">
        <div class="container-fluid">
          <BrandsHeader @changeBrand="getListByBrand"></BrandsHeader>
          <OrderSaleSearch @sortDescAsc="getListByOrder" @search="searchByName"></OrderSaleSearch>
          <div v-if="!searchFanAttribute">
            <div class="title ms-5">
              <h2 v-if="allFanByBrandOrder.all_fan" class="mt-3 mb-4">( {{ allFanByBrandOrder.all_fan.length }} )
                results founded...</h2>
            </div>
            <FanRenderLayout :allFan="allFanByBrandOrder"></FanRenderLayout>
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
import {FingerprintSpinner} from 'epic-spinners'
import BrandsHeader from "@/components/BrandsHeader";
import store from "@/store";
import {computed, onMounted, ref} from "vue";
import axios from "axios";
import OrderSaleSearch from "@/components/OrderSaleSearch";
import FanRenderLayout from "@/components/FanRenderLayout";
import RecentlyView from "@/views/Product/RecentlyView";
import axiosClient from "@/services/http-common";

const loading = ref(false)
let nameOfBrand = ref('')
let orderByType = ref('')
const article = ref({})
const allFanByBrandOrder = ref({})
let searchFanAttribute = ref('')
onMounted(() => {
  getListOfAllFans()
  getArticle()
})
const listOfAllFans = computed(() => store.state.allFansList.data)
const pagination = computed(() => store.state.allFansList)
const searchResult = ref({})


async function searchByName(searchValue) {
  loading.value = true
  searchFanAttribute.value = searchValue
  await axiosClient.post(process.env.VUE_APP_API_URL + 'fans/searching-specific-type', {
    search: searchValue,
    type_id: '',
  }).then((res) => {
    searchResult.value = res.data.searchingData
    console.log(searchResult.value)
    setTimeout(() => {
      loading.value = false
    }, 1500)
  });
}

function getForPage(ev, link) {
  ev.preventDefault();
  if (!link.url || link.active) {
    return;
  }
  getListOfAllFans(link.url)
}

function getListOfAllFans(url = null) {
  store.dispatch('getAllF', {
    url,
  })
}

function getListByBrand(brandName) {
  nameOfBrand.value = brandName
  store.dispatch('getListByBrandAndOrder', {
    brand: nameOfBrand.value,
  }).then((data) => {
    allFanByBrandOrder.value = data
  })
}

function getListByOrder(orderBy) {
  console.log(orderBy);
  orderByType.value = orderBy
  store.dispatch('getListByBrandAndOrder', {
    order_by_type: orderByType.value
  }).then((data) => {
    allFanByBrandOrder.value = data
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
  })
}
</script>


<style scoped>
#loading-container {
  position: relative;
}

.title, .showing-number, .page-link {
  color: rgb(26, 161, 121);
}

.loading {
  z-index: 500;
  height: 4000px;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
}

.load {
  margin: 25% auto;
}

h1 {
  color: #00766a;
}

hr {
  color: #c7c6c6
}

h2 {
  color: #00766a;
}

.rating i {
  color: #FFB909;
}

</style>