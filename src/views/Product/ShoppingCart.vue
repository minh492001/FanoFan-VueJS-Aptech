<template>
  <header>
    <TheHeader></TheHeader>
  </header>
  <main>
    <div id="main-cart" class="container-fluid p-3">
      <div class="cart-info row">
        <div class="col-xxl-10 col-12">
          <div class="cart-table d-lg-block d-none bg-white p-3">
            <table class="table">
              <thead>
              <tr>
                <td>
                  <div class="title-1">
                    <h3>Shopping Cart</h3>
                    <span v-if="checkboxArray === 0">No items to select</span>
                    <span v-if="checkboxArray > 0" id="selected-item"
                    >{{ checkboxArray }} Items selected</span>
                    <span><input class="form-check-input mx-2" type="checkbox"
                                 v-model="selectAll" name="select-all"
                                 @click="selectAllCheckbox()">Select all</span>
                  </div>
                </td>
                <td width="55%"></td>
                <td width="5%"><p>Price</p></td>
              </tr>
              </thead>
              <tbody id="cart-table-body">
              <tr v-for="(item,index) in cartProduct.products" :key="index">
                <td width="15%">
                  <input type="checkbox" class="form-check-input" v-model="selected" name="item-check[]"
                         :value="item.id">
                  <img class="cart-img w-100" :src="item.images[0].image" alt="">
                </td>
                <td width="55%">
                  <h3 class="text-black m-0 p-0 mb-2">{{ item.name }}</h3>
                  <h4 class="brand-name m-0 p-0 mb-2">{{ item.brands.Brand_name }}</h4>
                  <h5 class=" m-0 p-0 mb-2">{{ item.fan_type.type }}</h5>
                  <p class="text-black m-0 p-0">{{ item.product_code }}</p>
                  <div class="select-delete-save mt-4 d-flex flex-row align-items-center">
                    <div class="me-2">
                      <select name="quantity" v-model="cartProduct.products[index].carts.quantity"
                              @change="updateQty(item.id,index)"
                              class="form-select me-2 d-flex justify-content-center">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10+</option>
                      </select>
                    </div>
                    <div class="border-start px-2 me-2  d-flex align-items-center">
                      <a class="item-text text-decoration-none">Qty: {{
                          cartProduct.products[index].carts.quantity
                        }}</a>
                    </div>
                    <div class="border-start px-2 me-2  d-flex align-items-center">
                      <button class="item-text btn rounded-0 border-0 p-0" @click="deleteCartItem(item.id,index)">
                        delete
                      </button>
                    </div>
                    <div class="border-start px-2 me-2  d-flex align-items-center">
                      <button class="item-text btn rounded-0 border-0 p-0" @click="addToWishList(item.id)">save for
                        later
                      </button>
                    </div>
                    <div class="border-end border-start px-2 me-2  d-flex align-items-center">
                      <a class="item-text text-decoration-none">compare with similar items</a>
                    </div>
                  </div>

                </td>
                <td width="5%"><p class="cart-mini-price ms-auto mb-0 p-0 fw-bold">{{
                    formatter.format(item.price)
                  }}</p></td>
              </tr>
              </tbody>
            </table>
            <div class="total text-end">
              <span class="fs-4">Subtotal (<span>{{ cartQuantity }}</span> items): </span><span
                class="fw-bold fs-4">{{ formatter.format(total_price) }}</span>
            </div>
          </div>
          <div class="cart-table d-lg-none d-block bg-white p-3">
            <table class="table">
              <thead>
              <tr>
                <td>
                  <div class="title-1">
                    <h3>Shopping Cart</h3>
                    <span v-if="checkboxArray === 0">No items to select</span>
                    <span v-if="checkboxArray > 0" id="selected-item"
                    >{{ checkboxArray }} Items selected</span>
                    <span><input class="form-check-input mx-2" type="checkbox"
                                 v-model="selectAll" name="select-all"
                                 @click="selectAllCheckbox()">Select all</span>
                  </div>
                </td>
                <td width="40%"></td>
                <td width="5%"><p>Price</p></td>
              </tr>
              </thead>
              <tbody id="cart-table-body">
              <tr v-for="(item,index) in cartProduct.products" :key="index">
                <td width="25%">
                  <input type="checkbox" class="form-check-input" v-model="selected" name="item-check[]"
                         :value="item.id">
                  <img class="cart-img w-100" :src="item.images[0].image" alt="">
                </td>
                <td width="45%">
                  <h5 class="text-black m-0 p-0 mb-2">{{ item.name }}</h5>
                  <h5 class="brand-name m-0 p-0 mb-2">{{ item.brands.Brand_name }}</h5>
                  <p class=" m-0 p-0 mb-2">{{ item.fan_type.type }}</p>
                  <p class="text-black m-0 p-0">{{ item.product_code }}</p>
                  <div class="select-delete-save mt-4 d-flex flex-row align-items-center">
                    <div class="me-2">
                      <select name="quantity" v-model="cartProduct.products[index].carts.quantity"
                              @change="updateQty(item.id,index)"
                              class="form-select me-2 d-flex justify-content-center">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10+</option>
                      </select>
                    </div>
                    <div class="border-start px-2 me-2  d-flex align-items-center">
                      <a class="item-text text-decoration-none">Qty: {{
                          cartProduct.products[index].carts.quantity
                        }}</a>
                    </div>
                    <div class="border-start px-2 me-2  d-flex align-items-center">
                      <button class="item-text btn rounded-0 border-0 p-0" @click="deleteCartItem(item.id,index)">
                        delete
                      </button>
                    </div>
                    <div class="border-start px-2 me-2  d-flex align-items-center">
                      <button class="item-text btn rounded-0 border-0 p-0" @click="addToWishList(item.id)">save for
                        later
                      </button>
                    </div>
                    <div class="border-end border-start px-2 me-2  d-flex align-items-center">
                      <a class="item-text text-decoration-none">compare with similar items</a>
                    </div>
                  </div>

                </td>
                <td width="5%"><p class="cart-mini-price ms-auto mb-0 p-0 fw-bold">{{
                    formatter.format(item.price)
                  }}</p></td>
              </tr>
              </tbody>
            </table>
            <div class="total text-end">
              <span class="fs-4">Subtotal (<span>{{ cartQuantity }}</span> items): </span><span
                class="fw-bold fs-4">{{ formatter.format(total_price) }}</span>
            </div>
          </div>

          <div class="d-md-none d-block your-items bg-white mt-3 p-4">
            <h3>Your Items</h3>
            <ul class="nav nav-pills nav-fill">
              <li class="nav-item">
                <div class="">
                  <SaveForLater></SaveForLater>
                </div>
              </li>
              <li class="nav-item">
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xxl-2 col-12">
          <div class="your-cart bg-white px-3 py-4 justify-content-center">
            <div class="total text-start mb-1">
              <span class="subtotal">Subtotal (<span>{{ cartQuantity }}</span> items): </span><span
                class="fw-bold">{{ formatter.format(total_price) }}</span>
            </div>
            <div class="mb-2">
              <input type="text" class="form-check-input me-2"><span>This order contains a gift</span>
            </div>
            <form action="" method="post" @submit.prevent="checkout">
              <button id="checkout-link" type="submit" class="btn btn-checkout text-black rounded-1 w-100 mb-3"><span
                  class="subtotal">Process to checkout</span></button>
            </form>
          </div>

          <div class="recent-view">
            <p>Products related to items in your cart</p>
          </div>
        </div>
      </div>
      <div class="d-md-block d-none your-items bg-white mt-3 p-4">
        <h3>Your Items</h3>
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item">
            <div class="">
              <SaveForLater></SaveForLater>
            </div>
          </li>
          <li class="nav-item">
          </li>
        </ul>
      </div>

      <div class="d-lg-block d-none recommend bg-white mt-3 p-3">
        <h3>Recommended based on your shopping trends</h3>
        <carousel id="product-mini-slide " :autoplay="2000" :items-to-show="5" :wrap-around="true" :transition="500">
          <slide id="same-product-slide" class="d-flex flex-column " v-for="(slide, index) in SameProduct"
                 :key="index">
            <div class="img-slide-show">
              <div class="click-to-change" @click="$router.go()">
                <router-link class="btn-detail-link text-decoration-none text-white"
                             :to="{name:'fans.detail',params:{id:slide.id,type: slide.fan_type.type}}">
                  <img v-if="slide.type_id === 2" class="card-img-top" id="floor-width" :src="slide.images[0].image"
                       alt="Title"/>
                  <img v-else class="img-same-product" :src="slide.images[0].image"/>
                </router-link>
              </div>

              <div class="information bg-white p-3">
                <p class="same-product-name text-start mb-2">{{ textSlice(slide.name, 100) }}</p>
                <p class="text-start m-0">{{ slide.product_code }}</p>
                <div class="price-and-buy d-flex justify-content-between align-content-center">
                  <p id="price" class="text-start">{{ formatter.format(slide.price) }}</p>
                </div>
              </div>
            </div>
          </slide>
          <template #addons>
            <navigation/>
          </template>
        </carousel>

        <div class="notice-to-customer mt-3">
          <p class="notification">The price and availability of items at FanoFan.com are subject to change.
            The Cart is a temporary place to store a list of your items and reflects each item's most recent price.
            Shopping Cart
            <a class="item-text text-decoration-none" href="">Learn more</a>
          </p>
          <p class="notification">Do you have a gift card or promotional code? We'll ask you to enter your claim code
            when it's time to pay.</p>
        </div>
      </div>
      <div class="d-xl-none d-block recommend bg-white mt-3 p-3">
        <h3>Recommended based on your shopping trends</h3>
        <carousel id="product-mini-slide " :autoplay="2000" :items-to-show="2.5" :wrap-around="true" :transition="500">
          <slide id="same-product-slide" class="d-flex flex-column " v-for="(slide, index) in SameProduct"
                 :key="index">
            <div class="img-slide-show">
              <div class="click-to-change" @click="$router.go()">
                <router-link class="btn-detail-link text-decoration-none text-white"
                             :to="{name:'fans.detail',params:{id:slide.id,type: slide.fan_type.type}}">
                  <img v-if="slide.type_id === 2" class="card-img-top" id="floor-width" :src="slide.images[0].image"
                       alt="Title"/>
                  <img v-else class="img-same-product" :src="slide.images[0].image"/>
                </router-link>
              </div>

              <div class="information bg-white p-3">
                <p class="same-product-name text-start mb-2">{{ textSlice(slide.name, 100) }}</p>
                <p class="text-start m-0">{{ slide.product_code }}</p>
                <div class="price-and-buy d-flex justify-content-between align-content-center">
                  <p id="price" class="text-start">{{ formatter.format(slide.price) }}</p>
                </div>
              </div>
            </div>
          </slide>
          <template #addons>
            <navigation/>
          </template>
        </carousel>

        <div class="notice-to-customer mt-3">
          <p class="notification">The price and availability of items at FanoFan.com are subject to change.
            The Cart is a temporary place to store a list of your items and reflects each item's most recent price.
            Shopping Cart
            <a class="item-text text-decoration-none" href="">Learn more</a>
          </p>
          <p class="notification">Do you have a gift card or promotional code? We'll ask you to enter your claim code
            when it's time to pay.</p>
        </div>
      </div>
    </div>
  </main>

  <footer>
    <TheFooter></TheFooter>
  </footer>
</template>

<script setup>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
import {computed, onMounted, ref} from "vue";
import {formatter, textSlice, getCsrfCookie} from "@/helpers";
import store from "@/store";
import {useRouter} from "vue-router";
import "vue3-carousel/dist/carousel.css";
import {Carousel, Slide, Navigation} from "vue3-carousel";
import axios from "axios";
import SaveForLater from "@/views/Product/SaveForLater";

onMounted(() => {
  getItemFromCart()
  theSameProduct()
})

const router = useRouter()
const quantity = ref(1)
const checkboxArray = ref(0)
const selectAll = ref(false)
let selected = []
const cartProduct = ref([])
let total_price = ref(0)

const cart = computed(() => store.state.cart)
const cartQuantity = computed(() => store.getters.getNumberOfCartItem)
const SameProduct = computed(() => store.state.sameProduct.data.sameData)
const inputCheckArr = document.getElementsByName('item-check[]')

const theSameProduct = () => {
  store.dispatch('getSameProduct', {type: ''})
}

async function getItemFromCart() {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await getCsrfCookie()
  await axiosInstance.get(process.env.VUE_APP_API_URL + "cart").then((response) => {
    cartProduct.value = response.data
    cartProduct.value.products.forEach((item) => {
      total_price.value += item.price * item.carts.quantity
    })
  })
}

function selectAllCheckbox() {
  selected = []
  checkboxArray.value = inputCheckArr.length
  if (!selectAll.value) {
    for (let i = 0; i < cartProduct.value.products.length; i++) {
      selected.push(cartProduct.value.products[i].id)
    }
    if (selected.length === 0) {
      checkboxArray.value = 0
    }
  }
}

const deleteCartItem = async (id, index) => {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await getCsrfCookie()
  await axiosInstance.delete(process.env.VUE_APP_API_URL + "cart/remove/" + id).then((res) => {
    total_price.value -= cartProduct.value.products[index].price * cartProduct.value.products[index].carts.quantity
    cart.value.total_price -= cartProduct.value.products[index].price * cartProduct.value.products[index].carts.quantity
    cart.value.products = cartProduct.value.products.filter((item) => item.id === id)
    cartProduct.value.products.splice(index, 1)
    store.dispatch('deleteCartItem', index)
    store.dispatch('getCartItem', res.data)
    store.dispatch('getCount', res.data.count)
    store.dispatch('changeTotalPrice', total_price.value)
  })
}

const addToWishList = async (id) => {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await getCsrfCookie()
  return await axiosInstance.post(process.env.VUE_APP_API_URL + "wishlist/add", {
    'fan_id': id
  }).then(() => {
    router.go(0)

  })
}

const updateQty = async (id, index) => {
  quantity.value = cartProduct.value.products[index].carts.quantity
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await getCsrfCookie()
  await axiosInstance.put(process.env.VUE_APP_API_URL + "cart/update-quantity", {
    'fan_id': id,
    'quantity': quantity.value
  }).then((res) => {
    total_price.value = 0
    cartProduct.value.cart_items[id].quantity = cartProduct.value.products[index].carts.quantity
    cartProduct.value.products.forEach((item) => {
      total_price.value += item.price * item.carts.quantity
    })
    store.dispatch('getCount', res.data.count)
    store.dispatch('changeTotalPrice', total_price.value)
    store.dispatch('changeEachItemQty', {id, quantity: cartProduct.value.products[index].carts.quantity})
  });
}

async function checkout() {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await getCsrfCookie()
  await axiosInstance.post(process.env.VUE_APP_API_URL + "checkout").then(({data}) => {
    window.location.href = data
  });
}

</script>

<style scoped>
#main-cart {
  background-color: #EAEDED;
}

#floor-width {
  height: 250px;
  width: 40%;
}

.rating i {
  color: #FFB909;
}

.cart-img {
  width: 250px;
  height: 250px;
}

.form-select {
  width: 70px;
  height: 32px;
}

.border-end, .btn {
  height: 25px;
}

.item-text {
  color: #388b82;
  font-size: 12px;
  cursor: pointer;
}

.brand-name, #selected-item {
  color: #388b82;
}

.your-items {
  width: 100%;
}

.btn-checkout {
  background-color: #F7CA00;
  height: 36px;
}

.btn-checkout:hover {
  background-color: #e8be01;
}

.subtotal {
  font-size: 15px;
}

.recommend {
  height: 730px;
}
.img-slide-show {
  width: 300px;
  height: 400px;
  border: 1px solid #eee;
  border-radius: 3px;
  box-shadow: 0 3px 10px 5px rgb(0 0 0 / 10%);
}

.img-slide-show:hover {
  border: 1px solid #eee;
  border-radius: 3px;
  box-shadow: 0 3px 10px 5px rgb(0 0 0 / 10%);
}

.img-same-product {
  width: 300px;
  height: 230px;
  cursor: pointer;
}

.same-product-name {
  font-size: 13px;
}

#price {
  color: sandybrown;
  font-weight: bold;
  font-size: 17px;
}

input [type="checkbox"] {
  position: absolute;
  top: 50%;
  left: 0;
}

.notification {
  font-size: 13px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  height: 550px;
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
@media screen and (min-width: 1366px) and (max-width: 1515px){
  #floor-width {
    height: 180px;
    width: 28%;
  }
  .img-slide-show {
    width: 250px;
    height: 330px;
  }
  .img-same-product {
    width: 250px;
    height: 180px;
    cursor: pointer;
  }
  .same-product-name {
    font-size: 12px;
  }
  .carousel__slide {
    height: 450px;
  }
  .recommend {
    height: 630px;
  }
}

@media screen and (max-width: 991px){
  ul li {
    width: 274px;
    margin: 0 5px 10px 10px;
  }
  img {
    height: 180px;
  }
  #floor-width {
    height: 180px;
    width: 28%;
  }
  .card {
    height: 470px;
    width: 260px;
  }
  .card-img-top{
    height: 160px;
  }
  .name {
    margin-bottom: 0;
  }
}
</style>