<template>
  <div class="header-event">
    <div class="container-fluid">
      <div class="row">
        <div class="col-3">
          <img src="/assets/images/LLLL.png" alt="" class="logo">
        </div>
        <div class="col-6 content">
          <a href="/about">About Us</a>
          <a href="/home">Home</a>
          <a href="app/fans/all">Product</a>
        </div>
        <div class="col-3 content">
          <a href=""><i class="fa-solid fa-headset"></i> Support</a>
          <a href="/login">Sign In <i class="fa-solid fa-right-to-bracket"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div class="content-event">
    <div class="box-content pt-5">
      <div class="d-flex flex-row">
        <!-- <iframe class="vid" src="https://www.youtube.com/embed/W_WoGG-Zhf4" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe> -->
        <iframe class="vid" width="1280" height="720" src="https://www.youtube.com/embed/6Is6GLOCBgo"
                title="Panasonic Slide Pedestal Fan" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        <p>
          This Summer Big Event Of The Year
        </p>
        <p class="card-title">
          Buy 1 Get 1 Free
        </p>
        <div class="btn-event">
          <button class="btn">
            More Event <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <hr>
      <div class="more-event d-flex flex-row">
        <div class="box-1 rounded-3">
          <i class="fa-sharp fa-solid fa-location-dot icon"></i> <strong>Address:</strong><br>
          11 road Ha Noi city
        </div>
        <div class="box-1 rounded-3">
          <i class="fa-solid fa-phone"></i> <strong>Number:</strong><br>
          +84 011-234-987
        </div>
        <div class="box-1 rounded-3">
          <i class="fa-brands fa-facebook"></i> <strong>Fan page:</strong><br>
          FANoFAN.facebook.com
        </div>
        <div class="box-1 rounded-3">
          <i class="fa-solid fa-globe"></i> <strong>Website:</strong><br>
          FANoFAN.com
        </div>
      </div>
    </div>
    <div class="ads">
      <swiper
          :modules="modules"
          :slides-per-view="3"
          :space-between="50"
          navigation
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="carousel"
      >
        <swiper-slide><img src="/assets/images/ads-88.jpg"></swiper-slide>
        <swiper-slide><img src="/assets/images/ads-77.jpg"></swiper-slide>
        <swiper-slide><img src="/assets/images/ads-66.jpg"></swiper-slide>
        <swiper-slide><img src="/assets/images/ads-33.jpg"></swiper-slide>
        <swiper-slide><img src="/assets/images/ads-11.jpg"></swiper-slide>
      </swiper>
    </div>
  </div>
  <AuthFooter></AuthFooter>
</template>

<script setup>
import AuthFooter from "@/components/AuthFooter.vue";
</script>

<script>

import {Swiper, SwiperSlide} from 'swiper/vue';

import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<style scoped>
.header-event {
  background-color: #04485D;
}

/*.content-event{*/
/*  background-color: #1a2635;#017bc7*/
/*}*/

.box-content {
  background-color: #006f6b;
  width: 100%;
  margin: 0 auto;
  height: 750px;
}

.btn-event {
  margin-top: 390px;
}

img {
  width: 530px;
  height: 400px;
}

.btn {
  color: white;
  font-size: 19px;
  border: 2px solid white;
  border-radius: 0px;
  padding: 7px;
  margin-bottom: 70px;
}

.more-event {
  margin-bottom: 50px;
}

.card-title {
  margin-left: 120px;
  width: 250px;
}

.btn:hover {
  color: #83b0c1;
  font-size: 19px;
  padding: 7px;
}


.vid {
  height: 400px;
  width: 821px;
  margin-left: 30px;
  margin-top: 10px;
}

.ads {
  margin-bottom: 200px;
}

.logo {
  width: 160px;
  height: 50px;
}

.box-1 {
  width: 206px;
  border: 2px solid white;
  font-size: 18px;
  color: #006f6b;
  padding: 7px;
  background-color: white;
  margin: 0 auto;
  bottom: 30px;
}

.content {
  text-align: center;
  padding: 20px;
}

a {
  text-decoration: none;
  padding-left: 30px;
  font-size: 20px;
  color: white;
}

a:hover {
  text-decoration: none;
  padding-left: 30px;
  font-size: 20px;
  color: var(--main-color);
}

p {
  font-size: 37px;
  width: 50px;
  margin-left: 90px;
  font-family: fantasy;
  color: white;
}

.carousel {
  margin-top: 50px;
}

@media screen and (max-width: 1366px) {
  .ads[data-v-08f9f74e] {
    margin-bottom: 100px;
    margin-left: 0;
  }
}
</style>