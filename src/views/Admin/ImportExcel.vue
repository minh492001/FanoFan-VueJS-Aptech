<template>
  <div class="create-view">
    <p class="alert alert-success" v-if="notificationMes">{{ notificationMes }}</p>
    <form action="/action" method="post" enctype="multipart/form-data" @submit.prevent="importProductExcel">
      <div class="input-group mb-3">
        <input type="file" class="form-control"
               name="excel" @change="changeFile($event)"
               accept=".xlsx, .xls, .csv"
        >
        <span class="input-group-text">Excel File</span>
      </div>
      <button type="submit" class="btn-create text-center py-2 mt-3 border-0 rounded-1 text-white"><i
          class="fa-solid fa-plus me-2"></i>Import Excel
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    id: {type: Number}
  },
  data() {
    return {
      productExcel: {
        excel: ""
      },
      notificationMes: "",
      error: [],
    }
  },

  methods: {
    changeFile(event) {
      this.productExcel.excel = event.target.files[0]
    },

    async importProductExcel() {
      const formData = new FormData();
      formData.append("excel", this.productExcel.excel);
      const axiosInstance = axios.create({
        baseURL: process.env.VUE_APP_API_URL,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      await axiosInstance.post(process.env.VUE_APP_API_URL + "excel/import-excel-csv-file", formData).then((response) => {
        console.log(response)
        this.notificationMes = response.data.message
      }).catch((err) => {
        this.error = err.response.data.errors
      })
    },
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