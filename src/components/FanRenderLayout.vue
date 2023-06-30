<template>

  <div v-if="props.searchResult">
    <ul v-for="(Fan, index) in props.searchResult" :key="index" class="mb-5">
      <li class="fade-in-down" :style="{'animation-delay': `${index*0.2}s`}">
        <div class="card ">
          <router-link :to="{name:'fans.detail',params:{id:Fan.id,type: Fan.fan_type.type}}">
            <img v-if="Fan.type_id === 2" class="card-img-top" id="floor-width" :src="Fan.images[0].image" alt="Title"/>
            <img class="card-img-top" :src="Fan.images[0].image" alt="Title"/>
          </router-link>
          <p id="card-title" class=" text-start ps-1 mt-2 ms-3">{{ textSlice(Fan.name, 80) }}</p>
          <p class="rating ms-3 text-start">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half"></i>
            4.7 of 5
          </p>
          <div class="card-body">
            <p class="item-brand text-start m-0">{{ Fan.brands.Brand_name }}</p>
            <p class="text-start m-0">{{ Fan.technicals[0].color }}</p>
            <p class="text-start m-0">{{ Fan.technicals[0].width }}</p>
            <div class="cart d-flex justify-content-between align-items-center">
              <p class="item-price text-start d-inline-block fw-bold m-0">{{ formatter.format(Fan.price) }}</p>
              <button class="btn-addToCart border-0 d-inline-block" @click="addToCart(Fan.id)">Add to cart
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div v-else-if="props.allFan">
    <ul v-for="(Fan, index) in props.allFan.all_fan" :key="index" class="mb-5">
      <li class="fade-in-down" :style="{'animation-delay': `${index*0.2}s`}">
        <div class="card ">
          <router-link :to="{name:'fans.detail',params:{id:Fan.id,type: Fan.fan_type.type}}">
            <img v-if="Fan.type_id === 2" class="card-img-top" id="floor-width" :src="Fan.images[0].image" alt="Title"/>
            <img v-else class="card-img-top" :src="Fan.images[0].image" alt="Title"/>
          </router-link>
          <p id="card-title" class=" text-start ps-1 mt-2 ms-3">{{ textSlice(Fan.name, 80) }}</p>
          <p class="rating ms-3 text-start">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half"></i>
            4.7 of 5
          </p>
          <div class="card-body">
            <p class="item-brand text-start m-0">{{ Fan.brands.Brand_name }}</p>
            <p class="text-start m-0">{{ Fan.technicals[0].color }}</p>
            <p class="text-start m-0">{{ Fan.technicals[0].width }}</p>
            <div class="cart d-flex justify-content-between align-items-center">
              <p class="item-price text-start d-inline-block fw-bold m-0">{{ formatter.format(Fan.price) }}</p>
              <button class="btn-addToCart border-0 d-inline-block" @click="addToCart(Fan.id)">Add to cart
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div v-else>
    <ul v-for="(Fan, index) in props.FansList" :key="index" class="mb-5">
      <li class="fade-in-down" :style="{'animation-delay': `${index*0.2}s`}">
        <div class="card ">
          <router-link :to="{name:'fans.detail',params:{id:Fan.id,type: Fan.fan_type.type}}">
            <img v-if="Fan.type_id === 2" class="card-img-top" id="floor-width" :src="Fan.images[0].image" alt="Title"/>
            <img v-else class="card-img-top" :src="Fan.images[0].image" alt="Title"/>
          </router-link>
          <p id="card-title" class=" text-start ps-1 mt-2 ms-3">{{ textSlice(Fan.name, 80) }}</p>
          <p class="rating ms-3 text-start">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half"></i>
            4.7 of 5
          </p>
          <div class="card-body">
            <p class="item-brand text-start m-0">{{ Fan.brands.Brand_name }}</p>
            <p class="text-start m-0">{{ Fan.technicals[0].color }}</p>
            <p class="text-start m-0">{{ Fan.technicals[0].width }}</p>
            <div class="cart d-flex justify-content-between align-items-center">
              <p class="item-price text-start d-inline-block fw-bold m-0">{{ formatter.format(Fan.price) }}</p>
              <button class="btn-addToCart border-0 d-inline-block" @click="addToCart(Fan.id)">Add to cart
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script setup>
import {formatter, textSlice} from "@/helpers";
import {defineProps} from "vue";
import axios from "axios";
import store from "@/store";
// import {useRouter} from "vue-router";

// const router = useRouter()
const props = defineProps({
  FansList: {type: Object},
  searchResult: {type: Object},
  allFan: {type: Object}
})

const addToCart = async (id) => {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await axios.get("http://localhost:8000/sanctum/csrf-cookie");
  return await axiosInstance.post(process.env.VUE_APP_API_URL + 'cart/add', {
    'fan_id': id,
    'quantity': 1
  }).then((res) => {
    store.dispatch('getCartItem', res)
    // router.go(0)
  })
}
</script>

<style scoped>
ul li {
  list-style: none;
  float: left;
  text-align: center;
  border-radius: 7px;
  width: 290px;
  margin: 0 5px 10px 10px;
}

img {
  height: 250px;
  width: 100%;
}

#floor-width {
  height: 250px;
  width: 40%;
}

.card {
  height: 490px;
  width: 300px;
  border: 1px solid #eee;
  border-radius: 3px;
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 8%);
}

.btn-addToCart {
  padding: 5px 10px;
  background: #dedede;
  border-radius: 10px;
  font-size: 14px;
}

#card-title {
  color: #388b82;
  font-size: 14px;
}

.rating i {
  color: #FFB909;
}

.item-price {
  color: #B12704;
  width: 166px;
}

.item-brand {
  font-size: 18px;
}

.fade-in-down {
  animation: fade-in-down 0.5s ease-in-out both;
}

@media screen and (min-width: 992px) and (max-width: 1366px) {
  ul li {
    width: 258px;
    margin: 0 5px 10px 10px;
  }

  .card {
    height: 425px;
    width: 258px;
  }

  img {
    height: 160px;
  }

  .item-brand {
    font-size: 14px;
  }

  .btn-addToCart {
    padding: 5px 10px;
    background: #dedede;
    border-radius: 10px;
    font-size: 12px;
    width: 100px;
  }

  #floor-width {
    height: 160px;
    width: 26%;
  }
}

@media screen and (max-width: 991px) {
  ul li {
    width: 274px;
    margin: 0 5px 10px 10px;
  }

  .card {
    height: 425px;
    width: 286px;
  }

  img {
    height: 180px;
  }

  .item-brand {
    font-size: 14px;
  }

  .btn-addToCart {
    padding: 5px 10px;
    background: #dedede;
    border-radius: 10px;
    font-size: 12px;
  }

  #floor-width {
    height: 180px;
    width: 28%;
  }
}

@keyframes fade-in-down {
  from {
    transform: translateY(-0.75rem);
    opacity: 0;
  }
  to {
    transform: translateY(0rem);
    opacity: 1;
  }
}
</style>