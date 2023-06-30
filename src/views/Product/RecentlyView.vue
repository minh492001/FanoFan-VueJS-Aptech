<template>
  <div class="container-fluid">
    <div id="same-product" class="col-12 mt-3 bg-white py-3 px-3">
      <h2 class="same-title mb-3">Customers recently viewed</h2>
      <div class="col-12">
        <carousel id="product-mini-slide" :items-to-show="5.5" :wrap-around="true" :transition="500">
          <slide id="same-product-slide" class="d-flex flex-column " v-for="(slide, index) in props.recentList"
                 :key="index">
            <div class="img-slide-show">
              <div class="click-to-change" @click="$router.go()">
                <router-link class="btn-detail-link text-decoration-none text-white"
                             :to="{name:'fans.detail',params:{id:slide.id,type: slide.fan_type.type}}">
                  <img v-if="slide.type_id === 2" class="card-img-top" id="floor-width" :src="slide.images[0].image" alt="Title"/>
                  <img v-else class="img-same-product" :src="slide.images[0].image"/>
                </router-link>
              </div>

              <div class="information bg-white p-3">
                <p class="same-product-name text-start mb-1">{{ slide.name }}</p>
                <p class="text-start m-0">{{ slide.product_code }}</p>
                <div class="price-and-buy d-flex justify-content-between align-content-center">
                  <p id="price-same" class="text-start m-0">{{ formatter.format(slide.price) }}</p>
                </div>
              </div>
            </div>
          </slide>
          <template #addons>
            <navigation/>
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import {Carousel, Slide, Navigation} from "vue3-carousel";
import {formatter} from "@/helpers";
import {defineProps} from "vue";

const props = defineProps({
  recentList: {
    type: Array
  },
  typeKey:{type:Number}
})

</script>

<style scoped>
#floor-width{
  height: 250px;
  width: 40%;
}
#price-same {
  color: #B12704;
  font-size: 17px;
  font-weight: bold;
}

.same-title {
  color: #22534e
}
#same-product{
  width: 1550px;
  margin-left: 24px;
}
.img-slide-show {
  width: 255px;
  height: 440px;
}

.same-product-name {
  font-size: 13px;
}

.img-same-product {
  width: 255px;
  height: 255px;
  cursor: pointer;
}
#product-mini-slide,#same-product-slide{
  width: 100%;
}
@media screen and (max-width: 1366px) {
  #same-product{
    width: 100%;
    margin-left: 24px;
  }
}
</style>