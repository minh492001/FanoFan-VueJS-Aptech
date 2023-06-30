<template>
  <AuthHeader></AuthHeader>
  <main class="">
    <div class="container">
      <div
        class="success-noti m-auto d-flex flex-column align-items-center justify-content-center rounded-5"
      >
        <h5 class="text-white">
          <i class="fa-solid fa-check text-white fs-4 me-3"></i>Thank you for
          your payment
        </h5>
        <p class="text-white">
          We will send you an email after we receive your order.please feel free
          waiting for us!
        </p>
      </div>
    </div>
  </main>
  <AuthFooter></AuthFooter>
</template>

<script setup>
import AuthFooter from "@/components/AuthFooter";
import AuthHeader from "@/components/AuthHeader";
import { getCsrfCookie } from "@/helpers";
import axios from "axios";
import { onMounted } from "vue";
// import store from "@/store";
import { useRouter } from "vue-router";
const router = useRouter();
const session_id = router.currentRoute.value.query.session_id;

onMounted(() => {
  sendSessionId();
});

async function sendSessionId() {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  await getCsrfCookie();
  await axiosInstance
    .get(process.env.VUE_APP_API_URL + "checkout/success", {
      session_id: session_id,
    })
    .then((res) => {
      console.log(res);
    });
}
</script>

<style scoped>
main {
  position: relative;
  width: 100%;
  height: 700px;
}

.success-noti {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(0, 150, 136);
  width: 700px;
  height: 200px;
}
h5,
p {
  letter-spacing: 1.4px;
}
</style>
