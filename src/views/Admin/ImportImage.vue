<template>
  <div class="create-view">
    <p class="alert alert-success" v-if="notificationMes">{{ notificationMes }}</p>
    <form method="post" enctype="multipart/form-data" @submit.prevent="importProductImage">

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
        <label class="input-group-text" for="">Fans Details</label>
        <select class="form-select" name="fans_id" v-model="productImage.fans_id">
          <option v-for="(fan,index) in fanSelectList" :key="index" :value="fan.id">{{ fan.name }}</option>
        </select>
      </div>
      <p v-for="(err,index) in error.technical_id" :key="index" class="alert alert-danger py-1">{{ err }}</p>
      <button type="submit" class="btn-create text-center py-2 mt-3 border-0 rounded-1 text-white"><i
          class="fa-solid fa-plus me-2"></i>Import Media
      </button>
    </form>
  </div>
</template>

<script>
import axiosClient from "axios";
import axios from "axios";

export default {
  props: {
    id: {type: Number}
  },
  data() {
    return {
      productImage: {
        fans_id: '',
        image: [],
        video:[]
      },
      notificationMes: "",
      error: [],
      fanSelectList: [],
    }
  },
  mounted() {
    this.getSelectList()
    this.getOne()
  },
  methods: {
    changeFile(event, type) {
      const selectedFile = event.target.files
      if (!selectedFile.length) {
        return false
      }
      for (let i = 0; i < selectedFile.length; i++) {
        if (type === 'image') {
          this.productImage.image.push(selectedFile[i])
        }
        if (type === 'video') {
          this.productImage.video.push(selectedFile[i])
        }
      }
    },

    async getOne() {
      await axiosClient.get(process.env.VUE_APP_API_URL + `products/${this.id}`).then((response) => {
        this.fanSelectList = response.data
      }).catch((err) => {
        this.error = err.response.data.errors
      })
    },
    async getSelectList() {
      await axiosClient.get(process.env.VUE_APP_API_URL + "fans/all").then((response) => {
        this.fanSelectList = response.data.all_fan
      }).catch((err) => {
        this.error = err.response.data.errors
      })
    },

    async importProductImage() {
      const formData = new FormData();
      for (let i = 0; i < this.productImage.image.length; i++) {
        formData.append("image[]", this.productImage.image[i]);
      }
      for (let i = 0; i < this.productImage.video.length; i++) {
        formData.append("video[]", this.productImage.video[i]);
      }
      formData.append("fans_id", this.productImage.fans_id);
      const axiosInstance = axios.create({
        baseURL: process.env.VUE_APP_API_URL,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      await axiosInstance.post(process.env.VUE_APP_API_URL + "product/insert", formData).then((response) => {
        this.notificationMes = response.data.message
      }).catch((err) => {
        this.error = err.response.data.errors
      })
    }
  },
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
  background-color: #37475A;
  width: 300px;
  transition: 0.5s ease-in-out;
}

.btn-create:hover {
  color: white;
  background-color: #1a2635;
  cursor: pointer;
}
</style>