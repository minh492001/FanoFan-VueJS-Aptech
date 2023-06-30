<template>
  <div id="table-trash" class="pt-5 pb-5">
    <div id="alert-notice" class="d-flex justify-content-center m-auto fade-in-up">
      <ToastNotification v-if="showToast" :danger="danger" :Class="Class" :title="title"></ToastNotification>
    </div>
    <div id="succeed-notice" class="d-flex justify-content-center m-auto fade-in-up">
      <ToastNotification v-if="showToast" :success="success" :Class="Class" :title="title"></ToastNotification>
    </div>
    <div id="form-container" class="container ">
      <div class="header text-center mb-4">
        <div class="row-login ms-auto mb-4">
          <span>Already have an account?</span>
          <router-link :to="{name:'Login'}" class="text-decoration-none btn-login rounded-1 py-2 px-4 border-0 ms-2">Log
            in
          </router-link>
        </div>
        <div class="row">
          <h2>Get started on FanoFan today</h2>
        </div>
      </div>
      <div id="container" class="container">
        <div class="mb-5"><img id="logo" src="/assets/images/LLLL.png" alt=""></div>
        <div class="regis-form p-5 rounded-4">
          <p v-if="successRegis" class="alert alert-success">{{ successRegis }}</p>
          <form
              action=""
              @submit.prevent="Register"
              class="w-100 needs-validation"
          >
            <h3 id="title">Sign Up For Free</h3>
            <p class="mb-5">
              Or {{ "" }}
              <router-link :to="{ name: 'Login' }" class="router w-100">
                Login to continue
              </router-link>
            </p>

            <div class="label mb-4">
              <label for="">Full Name <span>*</span></label>
              <input
                  id="form-control"
                  class="form-control mb-3"
                  type="text"
                  name="name"
                  placeholder="Ex: Tulsi Tanti"
                  v-model="user.name"
              />

              <transition
                  name="fade"
                  v-for="(error, index) in errorMessages.name"
                  :key="index"
              >
                <p v-if="error" class="py-1">{{ error }}</p>
              </transition>
            </div>

            <div class="label mb-4">
              <label for="">Email Address <span>*</span></label>
              <input
                  id="form-control"
                  class="form-control mb-3"
                  type="email"
                  name="email"
                  placeholder="Ex: TulsiTanti@gmail.com"
                  v-model="user.email"
              />
              <transition
                  name="fade"
                  v-for="(error, index) in errorMessages.email"
                  :key="index"
              >
                <p v-show="error" class="py-1 text-red">{{ error }}</p>
              </transition>
            </div>

            <div class="label mb-4">
              <label for="">Password <span>*</span></label>
              <input id="form-control"
                     class="form-control mb-3"
                     type="password"
                     name="password"
                     placeholder="Create your password"
                     v-model="user.password"
              />

              <transition
                  name="fade"
                  v-for="(error, index) in errorMessages.password"
                  :key="index"
              >
                <p v-show="error" class="py-1 text-red">{{ error }}</p>
              </transition>
            </div>

            <div class="label mb-4">
              <label for="">Confirm Password <span>*</span></label>
              <input id="form-control"
                     class="form-control mb-3"
                     type="password"
                     name="password_confirmation"
                     placeholder="Confirm password above"
                     v-model="user.password_confirmation"
              />
            </div>

            <div class="d-flex flex-row  form-check">
              <input
                  class="input-check-control me-1 form-check-input"
                  id="CheckRobot"
                  type="checkbox"
                  name="Robot"
              />
              <label for="" class="me-auto">I'm not robot</label>

              <router-link :to="{ name: 'Forget' }" class="router">Help ?</router-link>
            </div>

            <div class="mt-4">
              <button class="btn"><i class="fas fa-spinner fa-pulse" v-if="loading"></i>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import store from "../../store";
import ToastNotification from "@/components/ToastNotification";
import router from "@/router";

let loading = ref(false)
const title = ref('')
const Class = ref('')
const success = ref(true)
const danger = ref(false)
const showToast = ref(false)
const user = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});
const successRegis = ref('')
const errorMessages = computed(() => store.state.error);

const Register = () => {
  loading.value = true
  store.dispatch("registerActions", user.value).then((response) => {
    console.log(response)
    if (response.user) {
      success.value = true
      showToast.value = true
      title.value = 'Your new account has been registered successfully!'
      Class.value = 'notification fade-in-down'
      setTimeout(() => {
        router.push({
          name: 'Login'
        })
        loading.value = false
        success.value = false
      }, 3000)
    }else{
      loading.value = false
      success.value = false
    }
  }).catch(() => {
    success.value = false
    if (errorMessages.value) {
      loading.value = false
      showToast.value = true
      danger.value = true
      title.value = 'Please check your account info'
      Class.value = 'Alert fade-in-down'
    }
    setTimeout(() => {
      danger.value = false
    }, 3000)
  })
};
</script>

<style scoped>
#table-trash {
  background-color: #F6F6F6;
  height: 100%;
}

.row-login {
  width: 750px;
}

.header h2 {
  color: #038494
}

#logo {
  width: 150px;
  height: 40px;
}

#succeed-notice, #alert-notice {
  position: absolute;
  top: 17%;
  left: 53%;
  width: 393px;
  height: 70px;
  z-index: 200;
}

#form-container {
  position: relative;
}

#container {
//background: linear-gradient(to right, #06a7ba, #46b4e6, #cacaca, #eae8e8); background: linear-gradient(to right, #06a7ba, #46b4e6, #c0bebe, #ededed);
//background: linear-gradient(to right, #00cade, #97d9f3, #cecece, #ffffff); height: 900px;
  width: 750px;
  overflow: hidden;
  border-bottom-left-radius: 13px;
  border-top-left-radius: 13px;
}

.regis-form {
  background-color: white;
  height: 800px;
  width: 450px;
  position: absolute;
  top: 17%;
  right: 15%;
  z-index: 500;
}

img {
  height: 100vh;
  width: 100%;
}

.btn {
  margin: 0 auto;
  color: white;
  border-radius: 5px;
  padding: 7px;
  width: 100%;
  background-color: #038494;
}

.btn-login {
  background-color: #06a7ba;
  width: 100px;
  color: white;
}

.btn:hover {
  background-color: var(--main-color-hover);
  color: white;
  border-radius: 5px;
  padding: 7px;
}

.label {
  text-align: left;
}

.label label {
  margin-bottom: 3px;
  margin-left: 3px;
}

.label span {
  color: red;
}

.label > p {
  color: red;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

#form-control:focus {
  border-color: var(--main-color);
  box-shadow: 0 0 0 0.25rem var(--color-checkbox);
}

.router {
  text-decoration: none;
  color: var(--main-color);
}

.router:hover {
  color: var(--main-color-hover);
  text-decoration: underline;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#CheckRobot:focus {
  box-shadow: 0 0 0 0.25rem var(--color-checkbox);
}

#CheckRobot:checked {
  background-color: var(--main-color);
  border-color: var(--main-color);
  box-shadow: 0 0 0 0.25rem var(--color-checkbox);
}

h3 {
  font-weight: bold;
  font-size: 40px;
}
</style>
