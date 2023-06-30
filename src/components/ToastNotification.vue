<template>
  <p :class="Class" v-if="danger"><span><i class="fa-regular fa-circle-xmark text-white me-3"></i></span>{{
      props.title
    }}</p>
  <p :class="Class" v-if="success"><span><i class="fa-solid fa-check text-success me-3"></i></span>{{ props.title }}</p>
  <div v-if="props.Confirm" :class="Class">
    <p>{{ props.title }}</p>
    <div class="d-flex flex-row align-items-center justify-content-end">
      <button class="yes me-3" @click="emit('confirmation','yes',props.proId)"><i
          class="fa-solid fa-check text-success me-3"></i>Yes
      </button>
      <button class="no" @click="emit('confirmation','no')"><i class="fa-regular fa-circle-xmark text-danger me-3"></i>
        No
      </button>
    </div>
  </div>
</template>

<script setup>
import {defineProps, defineEmits} from "vue";

const props = defineProps({
  title: {type: String},
  icon: {type: String},
  Class: {type: String},
  success: {type: Boolean},
  danger: {type: Boolean},
  Confirm: {type: Boolean},
  proId: {type: Number}
})
const emit = defineEmits(['confirmation'])
console.log(props.proId)
</script>

<style scoped>
.notification {
  width: 400px;
  height: auto;
  background-color: #1a2635;
  color: white;
  padding: 15px 20px;
  text-align: center;
  border-radius: 10px;
}

.Alert {
  width: 400px;
  height: auto;
  background-color: #f64747;
  color: white;
  padding: 15px 20px;
  text-align: center;
  border-radius: 10px;
}

.Confirm {
  width: 400px;
  height: auto;
  background-color: #0b6987;
  color: white;
  padding: 15px 20px;
  text-align: center;
  border-radius: 10px;
}

.yes, .no {
  width: 100px;
  height: 40px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: white;
}

.fade-in-down {
  animation: fade-in-down 0.5s ease-in-out both;
}

.fade-in-up {
  animation: fade-in-up 0.5s ease-in-out both;
}

@keyframes fade-in-down {
  from {
    transform: translateY(-5.75rem);
    opacity: 0;
  }
  to {
    transform: translateY(0rem);
    opacity: 1;
  }
}

@keyframes fade-in-up {
  from {
    transform: translateY(7.75rem);
    opacity: 0;

  }
  to {
    transform: translateY(0rem);
    opacity: 1;
  }
}
</style>