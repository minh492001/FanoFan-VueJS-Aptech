<template>
  <div id="table-trash">
  <div id="alert-notice" class="d-flex justify-content-center m-auto fade-in-up">
    <ToastNotification v-if="Confirm" :Class="Class" :title="title" :proId="proId" :Confirm="Confirm" @confirmation="confirmDelete"></ToastNotification>
  </div>
  <div class="table-facility d-flex justify-content-between">
    <div class="input-group mb-3 w-25">
      <label class="input-group-text" for="">Per Page</label>
      <select class="form-select" name="brand" @change="getProductsList(null)" v-model="perPage">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
    </div>

    <div class="title">
      <h2>Products Data</h2>
    </div>

    <div class="search-group w-25">
      <input class="form-control me-2" type="search" placeholder="Search" v-model="search"
             @change="getProductsList(null)">
    </div>

  </div>
  <table class="table table-hover mt-4">
    <thead id="thead">
    <tr>
      <td width="3%">ID.</td>
      <td>Image</td>
      <td>Name</td>
      <td width="5%">Code</td>
      <td>Price</td>
      <td>Brand</td>
      <td>Type</td>
      <td>Media</td>
      <td width="3%">Update</td>
      <td width="3%">Trash</td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(product,index) in productsList.data" :key="index" class="fade-in-down"
        :style="{'animation-delay': `${index*0.2}s`}">
      <td>{{ product.id }}</td>
      <td v-if="product.images[0]"><img id="img-dashboard-admin" :src="product.images[0].image" alt=""></td>
      <td v-else><img id="img-dashboard-admin" src="" alt=""></td>
      <td>{{ product.name }}</td>
      <td>{{ product.product_code }}</td>
      <td>{{ product.price }}</td>
      <td>{{ product.brands.Brand_name }}</td>
      <td>{{ product.fan_type.type }}</td>
      <td width="3%">
        <button class="btn-image border-0">
          <router-link :to="{name:'dashboard.image', params:{id:product.id}}">
            <i class="fa-regular fa-images"></i>
          </router-link>
        </button>
      </td>
      <td width="3%">
        <button class="btn-update border-0">
          <router-link :to="{name:'dashboard.update', params:{id:product.id}}">
            <i class="fa-solid fa-pen-to-square"></i>
          </router-link>
        </button>
      </td>
      <td width="3%">
        <button @click="showToast(product.id)" class="border-0 btn-delete"><span><i
            class="ms-auto me-auto fa-solid fa-trash"></i></span></button>
      </td>
    </tr>
    </tbody>
  </table>
  <div class="table-paginate d-flex justify-content-between">
    <span>Showing from <span class="showing-number">{{ productsList.from }}</span> to <span
        class="showing-number">{{ productsList.to }}</span></span>
    <nav>
      <ul class="pagination">
        <li class="page-item d-flex ">
          <a class="page-link" href="#"
             :disabled="!link.url"
             v-for="(link,index) of productsList.links"
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
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import store from "@/store";
import axiosClient from "axios";
import ToastNotification from "@/components/ToastNotification";

let perPage = ref(10)
let search = ref('')
let Confirm = ref(false)
const title = ref('')
const Class = ref('')
let proId = ref('')
onMounted(() => getProductsList())

function getProductsList(url = null) {
  store.dispatch('getProduct', {
    url,
    search: search.value,
    perPage: perPage.value
  })
}

function getForPage(ev, link) {
  ev.preventDefault();
  if (!link.url || link.active) {
    return;
  }
  getProductsList(link.url)
}

const productsList = computed(() => store.state.products)

function showToast(id) {
  proId.value = id
  Confirm.value = true
  title.value = 'Are you sure to move this product into Trash?'
  Class.value = 'Confirm fade-in-down'
}

function confirmDelete(answer,id) {
  if (answer === 'yes') {
    deleteProduct(id)
    Confirm.value = false
  }else {
    Confirm.value = false
    return
  }
}

async function deleteProduct(id) {
    await axiosClient.get(process.env.VUE_APP_API_URL + `product/delete/${id}`).then(() => {
      store.dispatch('getProduct', {
        url: null,
        search: search.value,
        perPage: perPage.value
      })
    })
}

</script>

<style scoped>
#table-trash {
  position: relative;
}

#alert-notice {
  position: absolute;
  top: 0%;
  left: 37%;
}
#thead > tr {
  color: rgb(26, 161, 121);
}
tbody tr td{
  font-size: 14px;
}
#img-dashboard-admin {
  width: 50px;
  height: 50px;
}

.title, .showing-number, .page-link {
  color: rgb(26, 161, 121);
}

.btn-delete, .btn-update,.btn-image {
  width: 50px;
  background-color: transparent;
  text-align: center;
}

.btn-delete i {
  color: rgba(216, 64, 64, 0.96);
}

.btn-update i {
  color: #3793fa;
}
.btn-image i{
  color: #F7CA00
}
.slide-up-fade-in {
  animation: slide-up-fade-in ease 1s;
  animation-iteration-count: 1;
}

.fade-in-down {
  animation: fade-in-down 0.5s ease-in-out both;
}

@keyframes slide-up-fade-in {
  0% {
    opacity: 0;
    transform: translate(0px, 40px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}

@keyframes fade-in-down {
  from {
    transform: translateY(-0.75rem);
    opacity: 0;
  }
  to {
    transform: translateY(0rem);
    opacity: 1;
  }
}
</style>