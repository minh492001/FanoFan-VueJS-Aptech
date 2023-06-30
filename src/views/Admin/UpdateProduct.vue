<template>
  <div class="create-view ">
    <p class="alert alert-success" v-if="notificationMes">{{ notificationMes }}</p>

    <form enctype="multipart/form-data" @submit.prevent="updateProduct">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Enter name..."
               name="name" v-model="productUpdate.name">
        <span class="input-group-text">Product Name</span>
      </div>
      <ul v-if="error">
        <li class="alert alert-danger" v-for="(err,index) in error.name" :key="index">{{ err }}</li>
      </ul>

      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Enter code..."
               name="product_code" v-model="productUpdate.product_code">
        <span class="input-group-text">Product Code</span>
      </div>
      <ul v-if="error">
        <li class="alert alert-danger" v-for="(err,index) in error.product_code" :key="index">{{ err }}</li>
      </ul>

      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Enter price..."
               name="price" v-model="productUpdate.price">
        <span class="input-group-text">Product Price</span>
      </div>
      <ul v-if="error">
        <li class="alert alert-danger" v-for="(err,index) in error.price" :key="index">{{ err }}</li>
      </ul>

      <div class="input-group mb-3">
        <input type="file" class="form-control"
               name="image[]" @change="changeFile($event,'image')" multiple>
        <span class="input-group-text">Product Image</span>
      </div>
      <div class="input-group mb-3">
        <input type="file" class="form-control"
               name="video[]" @change="changeFile($event,'video')" multiple>
        <span class="input-group-text">Product Video</span>
      </div>
      <div class="input-group mb-3">
        <label class="input-group-text" for="">Brand</label>
        <select class="form-select" name="brand_id" v-model="productUpdate.brand_id">
          <option v-for="(brand,index) in brands" :key="index" :value="brand.value">{{ brand.name }}</option>
        </select>
      </div>
      <ul v-if="error">
        <li class="alert alert-danger" v-for="(err,index) in error.brand_id" :key="index">{{ err }}</li>
      </ul>

      <div class="input-group mb-3">
        <label class="input-group-text" for="">Product Model</label>
        <select class="form-select" name="type_id" v-model="productUpdate.type_id">
          <option v-for="(type,index) in types" :key="index" :value="type.value">{{ type.name }}</option>
        </select>
      </div>
      <ul v-if="error">
        <li class="alert alert-danger" v-for="(err,index) in error.type_id" :key="index">{{ err }}</li>
      </ul>

      <div class="input-group mb-3">
        <label class="input-group-text" for="">Technical Details</label>
        <select class="form-select" name="technical_id" v-model="productUpdate.technical_id">
          <option v-for="(tech,index) in technicals" :key="index" :value="tech.value">{{ tech.name }}</option>
        </select>
      </div>
      <ul v-if="error">
        <li class="alert alert-danger" v-for="(err,index) in error.technical_id" :key="index">{{ err }}</li>
      </ul>

      <div class="input-group">
        <span class="input-group-text">Product Description</span>
        <textarea rows="9" class="form-control" name="description" v-model="productUpdate.description"></textarea>
      </div>
      <div class="input-group mt-3">
        <span class="input-group-text">Product About</span>
        <textarea rows="9" class="form-control" name="about" v-model="productUpdate.about"></textarea>
      </div>
      <ul v-if="error">
        <li class="alert alert-danger" v-for="(err,index) in error.description" :key="index">{{ err }}</li>
      </ul>

      <button type="submit" class="btn-update text-center py-2 mt-3 border-0 rounded-1"><i
          class="fa-solid fa-arrows-rotate me-3"></i>Update Product
      </button>
    </form>
  </div>
</template>

<script setup>
import store from "@/store";
import axiosClient from "axios";
import {computed, onMounted, defineProps, ref} from "vue";

const productUpdate = ref({
  id: '',
  name: '',
  product_code: '',
  price: '',
  image: [],
  video:[],
  brand_id: '',
  type_id: '',
  technical_id: '',
  description: '',
  about: ''
})
const error = ref({})
const notificationMes = ref('')
const props = defineProps({
  id: {type: Number}
})

onMounted(() => currentProductDetail())

const types = computed(() => store.state.types)
const brands = computed(() => store.state.brands)
const technicals = computed(() => store.state.technicals)

function changeFile(event) {
  const selectedFile = event.target.files
  if (!selectedFile.length) {
    return false
  }
  for (let i = 0; i < selectedFile.length; i++) {
    productUpdate.value.image.push(selectedFile[i])
  }
}

async function currentProductDetail() {
  await axiosClient.get(process.env.VUE_APP_API_URL + `products/${props.id}`).then((response) => {
    productUpdate.value =
        {
         id: response.data[0].id,
          name: response.data[0].name,
          product_code: response.data[0].product_code,
          price: response.data[0].price,
          image: [],
          video:[],
          brand_id: response.data[0].brand_id,
          type_id: response.data[0].type_id,
          technical_id: response.data[0].technical_id,
          description: response.data[0].description,
          about: response.data[0].about
        }
  })
}

function updateProduct() {
  store.dispatch('updateProduct', productUpdate)
      .then((response) => {
        console.log(response)
        notificationMes.value = response.data.message
      })
  // .catch((err) => {
  //   error.value = err.response.data.errors
  //   console.log(err)
  // })
}
</script>

<style>
.create-view {
  background-color: #f3f7f8;
  padding: 40px;
}

.create-view input[type="text"], .create-view select, .create-view textarea {
  outline: none;
}

.btn-update {
  background-color: #FA8900;
  width: 300px;
  color: white;
  transition: 0.5s ease-in-out;
}

.btn-update:hover {
  color: white;
  background-color: #fba63f;
  cursor: pointer;
}
</style>