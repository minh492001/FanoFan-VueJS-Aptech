<template>
  <div class="customer-recent-view" v-for="(item,index) in props.currentProductDetail[0]" :key="index">
    <h4 class="mt-3 mb-3">Discover similar items</h4>
    <div class="row border-bottom pb-3 mb-3">
      <div class="d-flex flex-row">
        <button class="btn-filter py-1 px-2 me-2">Control Method:remote</button>
        <button class="btn-filter py-1 px-2 me-2">Power source type:Corded Electric</button>
        <button class="btn-filter py-1 px-2 me-2">Number of blade:{{ item.technicals[0].number_of_fans }}</button>
        <button class="btn-filter py-1 px-2 me-2">Price:$50 - $100</button>
        <button class="btn-filter py-1 px-2 me-2">Mounting type:Plush Mount</button>
        <button class="btn-filter py-1 px-2 me-2">Brand:{{ item.brands.Brand_name }}</button>
        <div class="border-start ps-3 ms-2">
          <a class="item-note" href="">More Filter</a>
        </div>

      </div>
    </div>
    <div class="row">
      <div @click="$router.go()" class="card-similar rounded-2 me-3" v-for="(item, index) in props.sameProduct"
           :key="index">
        <router-link class="text-decoration-none"
                     :to="{name:'fans.detail',params:{id:item.id,type: item.fan_type.type}}">
          <img v-if="item.type_id === 2" class="similar-img h-75 m-auto" id="floor-width" :src="item.images[0].image" alt="Title"/>
          <img v-else :src="item.images[0].image" class="similar-img w-100 h-75">
        </router-link>
        <div class="see-more">
          <p class="rating m-0 text-start">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half"></i>
          </p>
          <p id="price-same" class="text-start m-0">{{ formatter.format(item.price) }}</p>
          <div @click="$router.go()" class="m-0 p-0">
            <router-link class="text-decoration-none"
                         :to="{name:'fans.detail',params:{id:item.id,type: item.fan_type.type}}">
              <button class="btn-see-more py-1">See more like this</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from "vue";
import {formatter} from "@/helpers";

const props = defineProps({
  sameProduct: {
    type: Array,
  },
  currentProductDetail: {
    type: Object
  }
})
</script>

<style scoped>
#floor-width{
  height: 250px;
  width: 40%;
}
.card-similar {
  text-align: center;
  width: 280px;
  height: 310px;
  padding: 15px;
  border: 1px solid rgb(227, 227, 227);
}
.rating i {
  color: #FFB909;
}
.see-more {
  width: 100%;
}

.btn-filter {
  border-radius: 7px;
  border: none;
  background-color: rgb(227, 227, 227);
}

.btn-see-more {
  border-radius: 7px;
  width: 100%;
  border: none;
  background-color: rgb(227, 227, 227);
}
#price-same {
  color: #B12704;
  font-size: 17px;
  font-weight: bold;
}
@media screen and (max-width: 1366px) {
  .card-similar {
    text-align: center;
    width: 250px;
    height: 310px;
    padding: 15px;
    border: 1px solid rgb(227, 227, 227);
  }

}
</style>