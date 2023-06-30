<template>
  <div class="create-view ">
    <p class="alert alert-success" v-if="notificationMes">{{ notificationMes }}</p>
    <form method="post" enctype="multipart/form-data" @submit.prevent="createProduct">

      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Enter name..."
               name="name" v-model="product.name">
        <span class="input-group-text">Product Name</span>
      </div>
      <p v-for="(err,index) in error.name" :key="index" class="alert alert-danger py-1">{{ err }}</p>

      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Enter code..."
               name="product_code" v-model="product.product_code">
        <span class="input-group-text">Product Code</span>
      </div>
      <p v-for="(err,index) in error.product_code" :key="index" class="alert alert-danger py-1">{{ err }}</p>

      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Enter price..."
               name="price" v-model="product.price">
        <span class="input-group-text">Product Price</span>
      </div>
      <p v-for="(err,index) in error.price" :key="index" class="alert alert-danger py-1">{{ err }}</p>

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
        <select class="form-select" name="brand_id" v-model="product.brand_id">
          <option v-for="(brand,index) in brands" :key="index" :value="brand.value">{{ brand.name }}</option>
        </select>
      </div>
      <p v-for="(err,index) in error.brand_id" :key="index" class="alert alert-danger py-1">{{ err }}</p>

      <div class="input-group mb-3">
        <label class="input-group-text" for="">Product Model</label>
        <select class="form-select" name="type_id" v-model="product.type_id">
          <option v-for="(type,index) in types" :key="index" :value="type.value">{{ type.name }}</option>
        </select>
      </div>
      <p v-for="(err,index) in error.type_id" :key="index" class="alert alert-danger py-1">{{ err }}</p>

      <div class="input-group mb-3">
        <label class="input-group-text" for="">Technical Details</label>
        <select class="form-select" name="technical_id" v-model="product.technical_id">
          <option v-for="(tech,index) in technicals" :key="index" :value="tech.value">{{ tech.name }}</option>
        </select>
      </div>
      <p v-for="(err,index) in error.technical_id" :key="index" class="alert alert-danger py-1">{{ err }}</p>

      <div class="input-group">
        <span class="input-group-text">Product Description</span>
        <textarea rows="9" class="form-control" name="description" v-model="product.description"></textarea>
      </div>
      <div class="input-group mt-3">
        <span class="input-group-text">Product About</span>
        <textarea rows="9" class="form-control" name="about" v-model="product.about"></textarea>
      </div>
      <button type="submit" class="btn-create text-white text-center py-2 mt-3 border-0 rounded-1"><i
          class="fa-solid fa-plus me-2 text-white"></i> Create Product
      </button>
    </form>
  </div>
</template>

<script setup>
import store from "@/store";
import {computed, ref} from "vue";

const product = ref({
  name: "",
  product_code: "",
  price: "",
  image: [],
  video: [],
  brand_id: "",
  type_id: "",
  technical_id: "",
  description: "",
  about: ""
})

const error = ref({})
const notificationMes = ref('')

const types = computed(() => store.state.types)
const brands = computed(() => store.state.brands)
const technicals = computed(() => store.state.technicals)

function changeFile(event,type) {
  const selectedFile = event.target.files
  if (!selectedFile.length) {
    return false
  }
  for (let i = 0; i < selectedFile.length; i++) {
    if (type === 'image'){
      product.value.image.push(selectedFile[i])
    }
    if (type === 'video'){
      product.value.video.push(selectedFile[i])
    }
  }
}

function createProduct() {
  store.dispatch('createProduct', product)
      .then((response) => {
        console.log(response)
        notificationMes.value = 'Product updated successfully!'
      })
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

.btn-create {
  background-color: #79DFC1;
  width: 300px;
  transition: 0.5s ease-in-out;
}

.btn-create:hover {
  color: white;
  background-color: #20C997;
  cursor: pointer;
}
</style>