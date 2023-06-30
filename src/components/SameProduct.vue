<template>
  <div id="row same-product" class="col-12 mt-3 bg-white py-3 px-3">
    <h4 class="same-title">Products Related to this item</h4>
    <div class="col-12">
      <carousel id="product-mini-slide" :items-to-show="5.5" :wrap-around="true" :transition="500">
        <slide id="same-product-slide" class="d-flex flex-column " v-for="(item, index) in props.sameProduct"
               :key="index">
          <div class="img-slide-show">
            <div class="click-to-change" @click="$router.go()">
              <router-link class="btn-detail-link text-decoration-none text-white"
                           :to="{name:'fans.detail',params:{id:item.id,type: item.fan_type.type}}">
                <img v-if="item.type_id === 2" class="card-img-top" id="floor-width" :src="item.images[0].image" alt="Title"/>
                <img v-else class="img-same-product" :src="item.images[0].image" alt=""/>
              </router-link>
            </div>

            <div class="information bg-white p-3">
              <p class="same-product-name text-start mb-1">{{ textSlice(item.name,70)}}</p>
              <p class="text-start m-0">{{ item.product_code }}</p>
              <div class="price-and-buy d-flex justify-content-between align-content-center">
                <p id="price-same" class="text-start m-0">{{ formatter.format(item.price) }}</p>
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
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import {Carousel, Slide, Navigation} from "vue3-carousel";
import {defineProps} from "vue";
import {formatter,textSlice} from "@/helpers";
const props = defineProps({
  sameProduct: {type: Array},
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
  color: #22534e;
}

.img-slide-show {
  width: 255px;
  height: 400px;
}

.same-product-name {
  font-size: 13px;
}

.img-same-product {
  width: 255px;
  height: 255px;
  cursor: pointer;
}
</style>