<template>
  <div id="table-trash">
    <div id="alert-notice" class="d-flex justify-content-center m-auto fade-in-up">
      <ToastNotification v-if="showToast" :danger="danger" :Class="Class" :title="title"></ToastNotification>
    </div>
    <div id="succeed-notice" class="d-flex justify-content-center m-auto fade-in-up">
      <ToastNotification v-if="showToast" :success="success" :Class="Class" :title="title"></ToastNotification>
    </div>

    <div id="container" class="container p-0">
      <div class="row mb-4">
        <img class="logo-login m-auto" src="/assets/images/LLLL.png" alt="">
      </div>
      <div class="login-form bg-white rounded-3 p-5">
        <form action="" @submit.prevent="Login" class="w-100">
          <h3 id="title">Login to continue</h3>
          <p class="mb-5">
            Or {{ "" }}
            <router-link :to="{ name: 'Registration' }" class="router">
              Register for free
            </router-link>
          </p>
          <div class="label Email">
            <label for="">Email Address</label>
            <input
                id="form-control"
                class="form-control mb-3"
                type="email"
                name="email"
                placeholder="Enter your email"
                v-model="user.email"
            />
            <p class="text text-danger" v-for="(error,index) in errorMessages.email" :key="index">{{ error }}</p>
          </div>

          <div class="label Password">
            <label for="">Password</label>
            <input
                id="form-control"
                class="form-control mb-3"
                type="password"
                name="password"
                placeholder="Enter your password"
                v-model="user.password"
            />
            <p class="text text-danger" v-for="(error,index) in errorMessages.password" :key="index">{{ error }}</p>
          </div>

          <div class="d-flex flex-row align-items-center form-check form-switch">
            <input
                class="input-check-control me-1 form-check-input"
                id="remember"
                type="checkbox"
                name="remember"
                v-model="user.remember"
            />
            <label for="" class="me-auto">Remember me</label>

            <router-link :to="{ name: 'Forget' }" class="router">Forgot password?</router-link>
          </div>
          <div class="mt-3">
            <button class="btn" :disabled="loading" :class="{disable:loading}">
              <i class="fas fa-spinner fa-pulse" v-if="loading"></i>
              Sign In
              <i class="fa-sharp fa-solid fa-arrow-right-to-bracket"></i>
            </button>
          </div>
        </form>
      </div>
      <div class="login-social mt-3 mb-5">
        <div class="login-via d-flex">
          <router-link class="text-white ms-auto me-3" to="">Login via Facebook</router-link>
          <router-link class="text-white me-auto ms-3" to="">Or Google Account</router-link>
        </div>
      </div>
      <div class="footer-login text-center mt-5">
        <hr class="bg-white line">
        <div class="row">
          <div class="col-12 mb-2">
            <span class="text-footer">FanoFan is a </span><span class="text-footer">SalesForce Company</span>
          </div>
          <div class="col-12 d-flex justify-content-around mb-2">
            <a class="text-footer text-decoration-none" href="">Terms of Service</a>
            <a class="text-footer text-decoration-none" href="">Privacy</a>
            <a class="text-footer text-decoration-none" href="">Cookies</a>
            <a class="text-footer text-decoration-none" href="">Cookie Preferences
            </a>
          </div>
          <div class="col-12">
            <p class="text-footer">&copy;2023 FanoFan.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import {computed} from "vue";
import {useRouter} from "vue-router";
import store from "../../store";
import {ref} from "vue"
import ToastNotification from "@/components/ToastNotification";

const title = ref('')
const Class = ref('')
const success = ref(false)
const danger = ref(false)
let loading = ref(false)
const showToast = ref(true)
const router = useRouter();
const user = {
  email: "",
  password: "",
  remember: false,
};

const errorMessages = computed(() => store.state.error);

const Login = () => {
  loading.value = true
  store.dispatch("loginActions", user)
      .then((response) => {
        console.log(response)
        if (response.user) {
          showToast.value = true
          success.value = true
          title.value = 'Login successfully...'
          Class.value = 'notification fade-in-down'
          setTimeout(() => {
            router.push({
              name: "app.home",
            });
            loading.value = false;
            success.value = false
          }, 2500)
        } else {
          showToast.value = true
          title.value = 'Password or Email incorrect!'
          Class.value = 'Alert fade-in-down'
          danger.value = true
          loading.value = false;
          success.value = false
          setTimeout(() => {
            danger.value = false
          }, 4500)
        }
      })
      .catch(() => {
        success.value = false
        if (errorMessages.value) {
          showToast.value = true
          title.value = 'Password or Email incorrect!'
          Class.value = 'Alert fade-in-down'
          danger.value = true
          loading.value = false;
        }
        setTimeout(() => {
          danger.value = false
        }, 4500)
      });
};
</script>

<style scoped>
#succeed-notice, #alert-notice {
  position: absolute;
  top: 8%;
  left: 40%;
  z-index: 100
}

.logo-login {
  width: 200px;
  height: 60px;
}

#table-trash {
  position: relative;
  background-color: #02636f;
  height: 100vh;
}

* {
  letter-spacing: 0.5px;
}

#container {
  position: absolute;
  top: 53%;
  left: 50%;
  margin: auto;
  transform: translate(-50%, -50%);
  height: auto;
  width: 500px;
  overflow: hidden;
}

.line {
  height: 2px;
}

.text-footer {
  color: rgb(241, 201, 160)
}

img {
  height: 100vh;
  width: 100%;
}

.btn {
  margin: 0 auto;
  color: white;
  background-color: #038494;
  padding: 7px;
  width: 100%;
}

.btn:hover {
  background-color: var(--main-color-hover);
  color: white;
  border-radius: 5px;
  padding: 7px;
}

.disable {
  background-color: var(--main-color-hover);
  color: white;
}

h3 {
  font-weight: bold;
  font-size: 38px;
  white-space: nowrap;

}

.me-auto {
  margin-left: 5px;
}

.form-check-input:focus {
  border-color: var(--main-color);
  box-shadow: 0 0 0 0.25rem var(--color-checkbox);
}

.form-check-input:checked {
  background-color: var(--main-color);
  border-color: var(--main-color);
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

.label {
  text-align: left;
}

.label label {
  margin-bottom: 3px;
  margin-left: 3px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

