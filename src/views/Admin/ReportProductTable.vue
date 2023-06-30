<template>
  <div id="table-trash">
  <div id="alert-notice" class="d-flex justify-content-center m-auto fade-in-up">
    <ToastNotification v-if="Confirm" :Class="Class" :title="title" :proId="proId" :Confirm="Confirm" @confirmation="confirmDelete"></ToastNotification>
  </div>
  <div class="table-facility d-flex justify-content-between">
    <div class="input-group mb-3 w-25">
      <label class="input-group-text" for="">Per Page</label>
      <select class="form-select" name="brand" @change="getReportsList(null)" v-model="perPage">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
    </div>

    <div class="title">
      <h2>Products Report</h2>
    </div>

    <div class="search-group w-25">
      <input class="form-control me-2" type="search" placeholder="Search" v-model="search"
             @change="getReportsList(null)">
    </div>

  </div>
  <table class="table table-hover mt-4">
    <thead id="thead">
    <tr>
      <td width="3%">User ID</td>
      <td width="3%">Product ID</td>
      <td width="50%">Product name</td>
      <td width="30%">Report Content</td>
      <td width="15%">Sent Date</td>
      <td width="3%">Trash</td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(report,index) in reportsList.data" :key="index" class="fade-in-down"
        :style="{'animation-delay': `${index*0.2}s`}">
      <td>{{ report.user_id }}</td>
      <td>{{ report.fans_id }}</td>
      <td>{{ report.fans.name }}</td>
      <td>{{ report.content }}</td>
      <td>{{ report.created_at }}</td>
      <td width="3%">
        <button @click="showToast(report.id)" class="border-0 btn-delete"><span><i
            class="ms-auto me-auto fa-solid fa-trash"></i></span></button>
      </td>
    </tr>
    </tbody>
  </table>
  <div class="table-paginate d-flex justify-content-between">
    <span>Showing from <span class="showing-number">{{ reportsList.from }}</span> to <span
        class="showing-number">{{ reportsList.to }}</span></span>
    <nav>
      <ul class="pagination">
        <li class="page-item d-flex ">
          <a class="page-link" href="#"
             :disabled="!link.url"
             v-for="(link,index) of reportsList.links"
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
onMounted(() => getReportsList())

function getReportsList(url = null) {
  store.dispatch('getReportsList', {
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
  getReportsList(link.url)
}

const reportsList = computed(() => store.state.reports)
console.log(reportsList.value)
function showToast(id) {
  proId.value = id
  Confirm.value = true
  title.value = 'Are you sure to move this product into Trash?'
  Class.value = 'Confirm fade-in-down'
}

function confirmDelete(answer,id) {
  if (answer === 'yes') {
    deleteReport(id)
    Confirm.value = false
  }else {
    Confirm.value = false
    return
  }
}

async function deleteReport(id) {
    await axiosClient.delete(`report/delete/${id}`).then(() => {
    })
}

</script>

<style scoped>
#table-trash {
  position: relative;
}

#alert-notice {
  position: absolute;
  top: -18%;
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