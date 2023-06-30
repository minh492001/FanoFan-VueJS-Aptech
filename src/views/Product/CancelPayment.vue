<template>
  <AuthHeader></AuthHeader>
  <main class="">
    <div class="container">
      <div
        class="success-noti m-auto d-flex flex-column align-items-center justify-content-center rounded-5"
      >
        <h5 class="text-white">
         <i class="fa-regular fa-face-frown text-white fs-4 me-3"></i>Your Order Has Been Canceled
        </h5>
        <p class="text-white">
          We are sorry to hear that your order has been canceled.If you have any questions about the payment don't hesitate to contact us via email!
        </p>
      </div>
    </div>
  </main>
  <AuthFooter></AuthFooter>
</template>

<script setup>

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
  background-color: rgb(238, 59, 59);
  width: 700px;
  height: 200px;
}
h5,
p {
  letter-spacing: 1.4px;
}
</style>
