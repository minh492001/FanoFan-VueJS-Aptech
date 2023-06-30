<template>
  <div class="create-view ">
    <p class="alert alert-success" v-if="notificationMes">{{ notificationMes }}</p>
    <form method="post" enctype="multipart/form-data" @submit.prevent="createArticle">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Enter title..."
               name="title" v-model="Article.title">
        <span class="input-group-text">Article Title</span>
      </div>

      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Written by..."
               name="written_by" v-model="Article.written_by">
        <span class="input-group-text">Article written by</span>
      </div>

      <div class="input-group mb-3">
        <input type="file" class="form-control"
               name="image" @change="changeFile($event)">
        <span class="input-group-text">Article Image</span>
      </div>


      <div class="input-group mb-3">
        <label class="input-group-text" for="">Product Model</label>
        <select class="form-select" name="fan_types_id" v-model="Article.fan_types_id">
          <option v-for="(type,index) in types" :key="index" :value="type.value">{{ type.name }}</option>
        </select>
      </div>

      <div class="input-group">
        <span class="input-group-text">Article Content</span>
        <textarea rows="9" class="form-control" name="content" v-model="Article.content"></textarea>
      </div>

      <button type="submit" class="btn-article text-center py-2 mt-3 border-0 rounded-1"><i
          class="fa-solid fa-plus me-2"></i> Post Article
      </button>
    </form>
  </div>
</template>

<script>
import store from "@/store";
import axios from "axios";

export default {
  data() {
    return {
      Article: {
        title: "",
        written_by: "",
        image: "",
        fan_types_id: "",
        content: ""
      },
      notificationMes: "",
    }
  },
  computed: {
    types: () => store.state.types,
  },
  methods: {
    changeFile(event) {
      this.Article.image = event.target.files[0]
    },

    async createArticle() {
      const formData = new FormData();
      formData.append("title", this.Article.title);
      formData.append("image", this.Article.image);
      formData.append('written_by', this.Article.written_by)
      formData.append("content", this.Article.content);
      formData.append("fan_types_id", this.Article.fan_types_id);
      const axiosInstance = axios.create({
        baseURL: process.env.VUE_APP_API_URL,
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
      })
      await axios.get("http://localhost:8000/sanctum/csrf-cookie");
      await axiosInstance.post(process.env.VUE_APP_API_URL + "article/store", formData).then((response) => {
        console.log(response)
        if (response.status === 200){
          this.notificationMes = 'Article was posted...'
        }

      }).catch((err) => {
        console.log(err)
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

.btn-article {
  background-color: #065772;
  width: 300px;
  color:white;
  transition: 0.5s ease-in-out;
}

.btn-article:hover {
  color: white;
  background-color: #0b6987;
  cursor: pointer;
}
</style>