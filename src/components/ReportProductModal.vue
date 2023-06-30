<template>
  <div v-if="showModalProduct" class="modal" @click="handleClose">
    <div class="modal__container " @click.stop v-if="!active">
      <div class="modal__header border-bottom py-2">
        <h1 class="modal__title">Report products</h1>
        <i class="fa-solid fa-x" @click="handleClose"></i>
      </div>
      <div class="modal__body">
        <div class="first">
          <h2>Please select your problem</h2>
          <p class="rp-content">{{reportContent}}</p>
          <form action="" method="post" @submit.prevent="submitReport">
            <div class="main">
              <label class="reasonReport" v-for="(reason, index) in reasonReport" :key="index">
                <input type="radio" name="reportContent" v-model="reportContent" :value="reason.value">
                {{ reason.text }}
              </label>
            </div>
            <button type="submit" class="border-0 rounded-2 mt-3 btn-send-report">Send Report</button>
          </form>
        </div>
      </div>
      <div class="modal__footer"></div>
    </div>

    <div class="modal__container__thank bg-white m-auto " @click.stop v-if="active">
      <div class="modal__header border-bottom py-2">
        <h1 class="modal__title__thank">Thank you for reporting</h1>
        <i class="fa-solid fa-x" @click="handleClose"></i>
      </div>
      <div class="modal__body">
        <div class="second">
          <div class="main">
            <div class="reason-selected"><i class="fa-solid fa-check"></i> {{ selectedReason }}</div>
            We will review the report and inform you of our decision.
          </div>
          <button class="done"  @click="handleClose">Done</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    showModalProduct: {
      type: Boolean
    },
    closeReportProductModal: {
      type: Function,
    },
    fanID: {type: Number}
  },
  data() {
    return {
      active: false,
      show: false,
      reasonReport: [
        {
          text: "Prohibited products (wild animals, 18+,...)",
          value: "Prohibited products"
        },
        {
          text: "Counterfeit products",
          value: "Counterfeit products"
        },
        {
          text: "Unidentified products",
          value: "Unidentified products"
        },
        {
          text: "Product's image is not clear",
          value: "Product's image is not clear"
        },
        {
          text: "Products with offensive or objectionable images or content",
          value: "Offensive or objectionable"
        },
        {
          text: "Products with signs of fraud",
          value: "Signs of fraud"
        },
        {
          text: "The product name does not match the product image",
          value: "The product name does not match the product image"
        },
      ],
      selectedReason: null,
      reportContent: ""
    }
  },
  methods: {
    async submitReport() {
      const axiosInstance = axios.create({
        baseURL: process.env.VUE_APP_API_URL,
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
      })
      await axios.get("http://localhost:8000/sanctum/csrf-cookie");
      await axiosInstance.post(process.env.VUE_APP_API_URL + "report/receive-report", {
        content: this.reportContent,
        fans_id: this.fanID
      }).then((response) => {
        console.log(response)
        this.active = true
      })
    },
    handleClose() {
      this.closeReportProductModal();
    },
    showReport() {
      this.show = true
    },

    deactivate() {
      this.show = false
      this.active = false
    }

  },
  deactivate() {
    this.active = false
    this.activeSmall = false
    console.log(this.activate)
  },
}
</script>

<style lang="css" scoped>
.btn-send-report{
  width: 100%;
  padding: 7px 0;
  background-color: rgba(216, 216, 216, 0.733);
}
.modal {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.modal__container {
  border-radius: 15px;
  width: 800px;
  height: 53vh;
  padding: 10px 20px;
}

.modal__container__thank{
  border-radius: 15px;
  width: 800px;
  height: 27vh;
  padding: 10px 20px;
}

.modal__container::-webkit-scrollbar {
  width: 1px;
}

.modal__container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.modal__container::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal__body {
  height: 75%;
  margin-bottom: 15px;
}

.modal__title {
  font-size: 20px;
  color: var(--error-color);
}
.modal__title {
  font-size: 20px;
  color: #388b82;
}

.rp-content {
  font-size: 14px;
  color: #388b82
}

.modal__header i {
  background-color: rgba(216, 216, 216, 0.733);
  padding: 6px 8px;
  margin-right: 5px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
  font-size: 15px;
}

input[type="radio"] {
  display: none;
}

.header h1 {
  font-size: 30px;
}

.header i {
  background-color: rgba(216, 216, 216, 0.733);
  padding: 6px 8px;
  margin-right: 5px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
  font-size: 15px;
  position: absolute;
  top: 10px;
  right: 10px;
}

.header i:hover {
  background-color: rgba(193, 193, 193, 0.733);
  box-shadow: 0 0 3px black;
}

h2 {
  font-size: 23px;
  margin: 5px 0 10px;
}

.main {
  display: flex;
  flex-direction: column;
}

.main .reasonReport {
  padding: 3px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: 0.2s;
  border-radius: 5px;
  padding: 10px 5px;

}

.main .reasonReport:hover {
  color: var(--error-color);
  background-color: rgba(216, 216, 216, 0.733);
  cursor: pointer;
}

.second .reason-selected {
  background-color: var(--main-color);
  color: #fff;
  margin: 0 auto 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px 15px;
  max-width: 75%;
  border-radius: 30px;
}

.second .reason-selected i {
  margin-right: 5px;
}

.done {
  width: 100%;
  background-color: #388b82;
  color: white;
  padding: 3px;
  border-radius: 5px;
  border: none;
  outline: none;
}

.done:hover {
  background-color: var(--main-color-hover);
}

</style>






