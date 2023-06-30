<template>
  <div>
    <TheHeader></TheHeader>
    <div id="container-detail" class="container-fluid">
      <div id="alert-notice" class="d-flex justify-content-center m-auto fade-in-up">
        <ToastNotification v-if="showToast" :danger="danger" :Class="Class" :title="title"></ToastNotification>
      </div>
      <div id="succeed-notice" class="d-flex justify-content-center m-auto fade-in-up">
        <ToastNotification v-if="showToast" :success="success" :Class="Class" :title="title"></ToastNotification>
      </div>
      <div id="item-detail" class="px-3" v-for="(item,index) in currentProductDetail[0]" :key="index">
        <div class="item-detail-row row bg-white m-0 pt-3">
          <div class="col-xxl-4 col-3 d-flex p-0 h-100">
            <div class="mini-image-container d-flex flex-column align-items-top mt-5 me-4">
              <div v-for="(image, index) in item.images" :key="index" class="mini-div-image me-2 border-1 border-dark">
                <img class="mini-img " :src="image.image" alt="" @click="changeImage($event)">
              </div>
            </div>

            <div class="img-slide-show-detail">
              <img id="big-img" class="img-fluid w-100 h-100 "
                   :src="item.images[0].image"/>
            </div>
            <div/>
          </div>
          <div class="col-xxl-5 col-4 py-0 px-4">
            <h4> {{ item.name }}</h4>
            <p class="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half"></i>
            </p>
            <hr>
            <h3 id="price-main">{{ formatter.format(item.price) }}</h3>
            <p>+30$ shipping & import fees to <a class="text-decoration-none" href="">Vietnam</a></p>
            <table class="table table-borderless">
              <tr>
                <td width="20%"><span class="detail-title mb-1">Brand: </span></td>
                <td><span id="info-span">{{ item.brands.Brand_name }}</span></td>
              </tr>
              <tr>
                <td width="20%"><span class="detail-title mb-1">Color: </span></td>
                <td><span id="info-span">{{ item.technicals[0].color }}</span></td>
              </tr>
              <tr>
                <td width="20%"><span class="detail-title mb-1">Material: </span></td>
                <td><span id="info-span">{{ item.technicals[0].fan_materials }}</span></td>
              </tr>
              <tr>
                <td width="20%"><span class="detail-title mb-1">Product code: </span></td>
                <td><span id="info-span">{{ item.product_code }}</span></td>
              </tr>
            </table>
            <hr>

            <p>About this item:</p>
            <p v-html="item.about"></p>
            <div class="row mt-4">
              <p class="item-note">Note: Products with electrical plugs are designed for use in the US. Outlets and
                voltage
                differ
                internationally and this product may require an adapter or converter for use in your destination. Please
                check compatibility before purchasing.</p>
            </div>
          </div>
          <div class="col-xxl-3 col-4 p-2 rounded-1" id="info-trans-pay">
            <div class="border-bottom">
              <h5 id="price-main">{{ formatter.format(item.price) }}</h5>
              <p>+30$ shipping & import fees to <a class="text-decoration-none" href="">Vietnam</a></p>
              <p>Delivery Monday, April 17</p>
              <p class="detail-title">In stock</p>
              <div class="qty-cart mb-2 d-flex flex-row align-items-center">
                <select name="quantity" v-model="quantity" id="qty" @change="updateQty(item.id)"
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

              <button class="btn add-to-cart" @click="addToCart(item.id)"><i
                  class="fa-solid fa-cart-shopping me-2"></i>Add to Cart
              </button>
              <div class="mb-2">
                <router-link :to="{name:'checkout'}">
                  <button class="btn-order btn text-white">Place Order</button>
                </router-link>
              </div>

              <p>Secure Transaction</p>
              <table class="table table-borderless" id="table-shipping">
                <tr>
                  <td width="40%" ceilpadding="0"><span class="detail-title mb-1">Shipping from: </span></td>
                  <td><a id="info-span">FanoFan.com</a></td>
                </tr>
                <tr>
                  <td width="40%" ceilpadding="0"><span class="detail-title mb-1">Sold by: </span></td>
                  <td><a id="info-span">FanoFan.com</a></td>
                </tr>
                <tr>
                  <td width="40%" ceilpadding="0"><span class="detail-title mb-1">Return: </span></td>
                  <td><span id="info-span">Eligible for Return,Refund</span></td>
                </tr>
                <tr>
                  <td width="40%" ceilpadding="0"><span class="detail-title mb-1">Support: </span></td>
                  <td><span id="info-span">Free FoF-tech Support</span></td>
                </tr>
                <tr>
                  <td width="40%" ceilpadding="0"><span class="detail-title mb-1">Package: </span></td>
                  <td><span id="info-span">Show what's inside</span></td>
                </tr>
                <tr>
                  <td width="40%" ceilpadding="0"><span class="detail-title mb-1">Gift options: </span></td>
                  <td><span id="info-span">Add at checkout </span></td>
                </tr>
                <tfoot>
                <tr>
                  <td><a class="detail-title text-decoration-none" href="">Details</a></td>
                </tr>
                </tfoot>
              </table>
            </div>
            <button @click="addToWishList(item.id)" class="btn-list py-2">Add to list</button>
          </div>
        </div>
        <hr>

        <DiscoverSimilarItem :sameProduct="SameProducts"
                             :currentProductDetail="currentProductDetail"></DiscoverSimilarItem>
        <hr>

        <SameProduct :sameProduct="SameProducts"></SameProduct>
        <hr>

        <div class="from-the-manu">
          <h4 class="mt-3 mb-3">From the manufacturer</h4>
          <div class="container-manu d-flex flex-column">
            <div><img class="w-100 h-100" src="/assets/images/fan/manufacturer/inspri7.jpg" alt=""></div>
            <div class="mini-inspri d-flex flex-row">
              <div class="card border-0 me-3" id="card-inspri">
                <img class="img-insp-card mb-3 border-0" src="/assets/images/fan/manufacturer/inspri9.jpg" alt="">
                <div class="card-body p-0">
                  <p class="m-0 inspri-text">Monte Carlo Fans create overall energy cost savings through efficient
                    engineering and design. Everything from the motor to the shape of the fan blades contributes to
                    moving
                    more cubic feet of air per minute (CFM) while using less energy. Consumes less energy than a
                    100-watt
                    light bulb, even at the fan's highest setting</p>
                </div>
              </div>
              <div class="card border-0 me-3" id="card-inspri">
                <img class="img-insp-card mb-3 border-0" src="/assets/images/fan/manufacturer/inspri10.jpg" alt="">
                <div class="card-body p-0">
                  <p class="m-0 inspri-text">Premium power energy-Efficient DC motor (direct current) and Precision
                    balanced blades for quiet and wobble-free Operation. Monte Carlo Fans offers select fans with the DC
                    motor (direct current), which generates more power and torque than regular motors while using 70%
                    less
                    energy and running with virtually no noise</p>
                </div>
              </div>
              <div class="card border-0 me-3" id="card-inspri">
                <img class="img-insp-card mb-3 border-0" src="/assets/images/fan/manufacturer/inspri11.jpg" alt="">
                <div class="card-body p-0">
                  <p class="m-0 inspri-text">From the large portfolio of minimalist, modern fans that integrate with
                    their
                    surroundings, to versatile transitional fans developed in partnership with acclaimed designers,
                    Monte
                    Carlo offer complete collections with beautiful, well-engineered fans so that you can outfit
                    multiple
                    rooms in a space with your chosen look.</p>
                </div>
              </div>
              <div class="card border-0" id="card-inspri">
                <img class="img-insp-card mb-3 border-0" src="/assets/images/fan/manufacturer/inspri12.jpg" alt="">
                <div class="card-body p-0">
                  <p class="m-0 inspri-text">Monte Carlo premium quality ceiling fans make a great addition to any home.
                    Adding a ceiling fan to a room can add both beauty and comfort to a room. They give a room character
                    and its own source of air movement. Adding ceiling fans to rooms like bedrooms, the living room, or
                    family room will add value to your home</p>
                </div>
              </div>
            </div>

            <div><img class="w-100 h-100" src="/assets/images/fan/manufacturer/inspri3.jpg" alt=""></div>
            <div><img class="w-100 h-100" src="/assets/images/fan/manufacturer/inspri1.jpg" alt=""></div>
            <div><img class="w-100 h-100" src="/assets/images/fan/manufacturer/inspri6.jpg" alt=""></div>
          </div>

        </div>
        <hr>

        <div class="item-description bg-white p-2 mb-3">
          <div class="container-fluid">
            <div class="row mb-3">
              <div class="des-title text-start d-flex flex-row align-items-start">
                <h4>Product Description</h4>
                <a id="downloadPDF" class="btn-download text-decoration-none ms-2 pt-1"
                   @click.prevent="downloadPdf">
                  <i class="me-2 fa-solid fa-file-arrow-down"></i>Download</a>
              </div>
            </div>
            <p v-html="item.description"></p>
          </div>
        </div>
        <div id="technical-detail" class="mt-3 bg-white px-3 py-4 col-12 rounded-3">
          <h4>Technical Detail</h4>
          <table class="table" id="table-tech">
            <tbody>
            <tr>
              <td><span>Brand</span></td>
              <td><span>{{ item.brands.Brand_name }}</span></td>
            </tr>
            <tr>
              <td><span>Type</span></td>
              <td><span>{{ item.fan_type.type }}</span></td>
            </tr>
            <tr>
              <td><span>Width</span></td>
              <td><span>{{ item.technicals[0].width }}</span></td>
            </tr>
            <tr>
              <td><span>Wind speed</span></td>
              <td><span>{{ item.technicals[0].wind_speed }}</span></td>
            </tr>
            <tr>
              <td><span>Wind flow</span></td>
              <td><span>{{ item.technicals[0].wind_flow }}</span></td>
            </tr>
            <tr>
              <td><span>Number of fans</span></td>
              <td><span>{{ item.technicals[0].number_of_fans }}</span></td>
            </tr>
            <tr>
              <td><span>Materials</span></td>
              <td><span>{{ item.technicals[0].fan_materials }}</span></td>
            </tr>
            <tr>
              <td><span>Weigh</span></td>
              <td><span>{{ item.technicals[0].weigh }}</span></td>
            </tr>
            <tr>
              <td><span>From</span></td>
              <td><span>{{ item.technicals[0].from }}</span></td>
            </tr>
            <tr>
              <td><span>Manufacturer</span></td>
              <td><span>{{ item.technicals[0].manufacturer }}</span></td>
            </tr>
            <tr>
              <td><span>Guarantee</span></td>
              <td><span>{{ item.technicals[0].guarantee }}</span></td>
            </tr>
            </tbody>
          </table>
        </div>
        <hr>

        <div class="common-product-image py-3">
          <div id="common-background"><img class="w-100 h-100" src="/assets/images/ads37.jpg" alt=""></div>
          <div id="common-product-slide">
            <carousel id="common-product-carousel" :items-to-show="2.5" :wrap-around="true" :transition="500">
              <slide class="d-flex flex-column " v-for="(slide, index) in item.images"
                     :key="index">
                <div class="common-img-slide">
                  <img class="common-product-img w-100 h-100" :src="slide.image"/>
                </div>
              </slide>
              <template #addons>
                <navigation/>
              </template>
            </carousel>
          </div>
        </div>
        <hr>

        <div class="product-video py-3">
          <h4 class="mb-3">Videos related to this product</h4>
          <div v-if="item.videos.length > 0" id="product-video-slide">
            <carousel id="product-video-carousel" :items-to-show="3" :wrap-around="true" :transition="500">
              <slide class="d-flex flex-column " v-for="(slide, index) in item.videos"
                     :key="index">
                <div class="video-img-slide">
                  <video controls class="product-video-img w-100 h-100" :src="slide.video" type="video/mp4"></video>
                </div>
              </slide>
              <template #addons>
                <navigation/>
              </template>
            </carousel>
          </div>
          <div class="text-center" v-else><p>This product has no video</p></div>
        </div>
        <hr>

        <div class="container-xxl container-fluid bg-white mb-5">
          <div class="row report-review p-3">
            <div class="col-4">
              <h2>Customer reviews</h2>
              <p class="rating p-0">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
              </p>
              <h5>4.7 out of 5</h5>
              <p class="p-0">3,336 global ratings</p>

              <div class="rating-range">
                <div id="range" class="d-flex align-content-center mb-2"><span>5 star</span><input type="range" min="0"
                                                                                                   max="100"></div>
                <div id="range" class="d-flex align-content-center mb-2"><span>4 star</span><input type="range" min="0"
                                                                                                   max="100"></div>
                <div id="range" class="d-flex align-content-center mb-2"><span>3 star</span><input type="range" min="0"
                                                                                                   max="100"></div>
                <div id="range" class="d-flex align-content-center mb-2"><span>2 star</span><input type="range" min="0"
                                                                                                   max="100"></div>
                <div id="range" class="d-flex align-content-center mb-2"><span>1 star</span><input type="range" min="0"
                                                                                                   max="100"></div>
              </div>

              <div class="rating-guide dropdown w-75 border-bottom">
                <button class="btn btn-rating-guide border-0 ps-0 dropdown-toggle" type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown">
                  How customer reviews and ratings work
                </button>

                <ul class="dropdown-menu border-0 p-3">
                  <li><p>
                    Customer Reviews, including Product Star Ratings help customers to learn more about the product and
                    decide whether it is the right product for them.
                  </p></li>
                  <li><p> To calculate the overall star rating and percentage breakdown by star, we don’t use a simple
                    average.
                    Instead, our system considers things like how recent a review is and if the reviewer bought the item
                    on
                    Amazon. It also analyzed reviews to verify trustworthiness.
                  </p></li>
                  <li><a href="" class="learn-more text-decoration-none">Learn more how customers reviews work on
                    Amazon</a></li>
                </ul>
              </div>

              <div class="by-feature">
                <table id="star-table" class="table-borderless">
                  <tr>
                    <td width="66%">Style</td>
                    <td>
                      <p class="rating p-0 m-0">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star-half-stroke"></i>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td width="66%">Easy to handle</td>
                    <td><p class="rating p-0 m-0">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star-half-stroke"></i>
                    </p></td>
                  </tr>
                  <tr>
                    <td width="66%">Easy to install</td>
                    <td><p class="rating p-0 m-0">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </p></td>
                  </tr>
                  <tr>
                    <td width="66%">Noise level</td>
                    <td><p class="rating p-0 m-0">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </p></td>
                  </tr>
                  <tr>
                    <td width="66%">Value for money</td>
                    <td><p class="rating p-0 m-0">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star-half-stroke"></i>
                    </p></td>
                  </tr>
                  <tr>
                    <td width="66%">Remote Control</td>
                    <td><p class="rating p-0 m-0">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star-half-stroke"></i>
                      <i class="fa-regular fa-star"></i>
                    </p></td>
                  </tr>
                </table>
              </div>
              <button class="btn btn-review shadow mt-3" @click="showReviewModal"> Write review</button>
              <button class="btn btn-report shadow mt-3" @click="showReportProductModal"> Report product</button>
            </div>

            <div class="col-8">
              <div class="comment-content">
                <div class="inside-content bg-white">
                  <p>Reviews with images</p>

                  <div id="comment-photo" class="d-flex flex-row" v-for="(img,index) in allReviewPhotos.allPhotos"
                       :key="img.id">
                    <img id="review-photo" v-if="index <= 4" :src="img.photo" alt="">
                  </div>

                  <a href="">See all customer review image</a>

                  <p>Top reviews</p>
                  <div class="review-content border-bottom pb-4" v-for="(user,index) in allUserComment" :key="index">
                    <div class="mt-3 d-flex flex-row align-items-center">
                      <img class="avatar me-3" src="/assets/images/avatar.jpg" alt="">
                      <span class="fw-bold">{{ user.users.name }}</span>
                    </div>
                    <div class="comment-text p-3 rounded-3 mt-3"><p>{{ user.content }}</p></div>
                    <div>
                      <p></p>
                    </div>
                    <div class="button-report d-flex flex-row">
                      <button class="item-text btn-helpful">Helpful</button>
                      <div class="border-start ms-3"></div>
                      <button class="btn border-0 item-text" @click="showReportCommentModal">report abuse</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Teleport to="#app">
      <report-comment-modal :showModalComment="showModalComment"
                            :closeReportCommentModal="closeReportCommentModal"></report-comment-modal>
      <report-product-modal :showModalProduct="showModalProduct" :fanID="props.id"
                            :closeReportProductModal="closeReportProductModal"></report-product-modal>
      <review-product-modal :showModalReview="showModalReview" :fanID="props.id"
                            :closeReviewProductModal="closeReviewProductModal"></review-product-modal>
    </Teleport>
    <TheFooter class="bg-white mt-2 rounded-top-3"></TheFooter>
  </div>

</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import {Carousel, Slide, Navigation} from "vue3-carousel";
import {computed, defineProps, onMounted, ref} from "vue";
import axiosClient from "axios";
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
import SameProduct from "@/components/SameProduct";
import store from "@/store";
import axios from "axios";
import {formatter, getCsrfCookie} from "@/helpers";
import {useRouter} from "vue-router";
import ReportCommentModal from "@/components/ReportCommentModal";
import ReportProductModal from "@/components/ReportProductModal";
import ReviewProductModal from "@/components/ReviewProductModal";
import ToastNotification from "@/components/ToastNotification";
import DiscoverSimilarItem from "@/components/DiscoverSimilarItem";

const router = useRouter()
const showModalComment = ref(false)
const showModalProduct = ref(false)
const showModalReview = ref(false)
const showToast = ref(false)
const success = ref(false)
const danger = ref(false)
const allReviewPhotos = ref({})
const title = ref('')
const Class = ref('')
const quantity = ref(1)
const props = defineProps({
  id: {type: Number},
  type: {type: String}
})

const currentProductDetail = ref({})
const allUserComment = ref({})
const SameProducts = computed(() => store.state.sameProduct.data.sameData)
onMounted(() => {
  currentProduct()
  theSameProduct()
  allReviewPhoto()
  getAllComments()
})
const theSameProduct = () => {
  store.dispatch('getSameProduct', {type: props.type})
}

const currentProduct = async () => {
  return await axiosClient.get(process.env.VUE_APP_API_URL + `fans/detail/${props.id}`).then((res) => {
    currentProductDetail.value = res.data
  })
}

async function getAllComments() {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await axios.get("http://localhost:8000/sanctum/csrf-cookie");
  await axiosInstance.post(process.env.VUE_APP_API_URL + "comment/get-all", {
    fans_id: props.id
  })
      .then((res) => {
        console.log(res)
        allUserComment.value = res.data.allComments
        console.log(allUserComment.value)
      })
}

const addToCart = async (id) => {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await getCsrfCookie()
  return await axiosInstance.post(process.env.VUE_APP_API_URL + 'cart/add', {
    'fan_id': id,
    'quantity': quantity.value
  }).then((res) => {
    router.go(0)
    store.dispatch('getCartItem', res)
  })
}

const allReviewPhoto = async () => {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await getCsrfCookie()
  await axiosInstance.get(process.env.VUE_APP_API_URL + 'all-review-photos/' + props.id).then((res) => {
    console.log(res.data)
    allReviewPhotos.value = res.data
  })
}

const addToWishList = async (id) => {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await getCsrfCookie()
  return await axiosInstance.post(process.env.VUE_APP_API_URL + "wishlist/store", {
    'fan_id': id
  }).then((response) => {
    showToast.value = true
    title.value = response.data.message
    Class.value = 'notification fade-in-down'
    success.value = true
    setTimeout(() => {
      showToast.value = false
    }, 5000)
  }).catch(({response}) => {
    showToast.value = true
    title.value = response.data.message
    Class.value = 'Alert fade-in-down'
    danger.value = true
    setTimeout(() => {
      showToast.value = false
    }, 5000)
  })
}

const updateQty = async (id) => {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  await getCsrfCookie()
  await axiosInstance.put(process.env.VUE_APP_API_URL + "cart/update-quantity", {
    'fan_id': id,
    'quantity': quantity.value
  }).then((res) => {
    store.dispatch('getCount', res.data.count)
  });
}

async function downloadPdf() {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`, responseType: 'blob'},
  })
  await getCsrfCookie()
  await axiosInstance.get('download/' + props.id)
      .then((response) => {
        const fileURL = window.URL.createObjectURL(new Blob([response.data], {type: 'application/pdf'}));
        const fileLink = document.getElementById('downloadPDF');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', 'description-about.pdf');
        document.body.appendChild(fileLink);
        fileLink.click();
      });
}

function changeImage(event) {
  document.getElementById('big-img').src = event.target.src
}

function showReportCommentModal() {
  showModalComment.value = true
}

function showReviewModal() {
  showModalReview.value = true
}

function showReportProductModal() {
  showModalProduct.value = true
}

function closeReportCommentModal() {
  showModalComment.value = false
}

function closeReportProductModal() {
  showModalProduct.value = false
}

function closeReviewProductModal() {
  showModalReview.value = false
}
</script>

<style scoped>
.item-text {
  color: #388b82;
  font-size: 12px;
  cursor: pointer;
}

#container-detail {
  position: relative;
  width: 100%;
}

#succeed-notice, #alert-notice {
  position: absolute;
  top: 0%;
  left: 40%;
}

.item-detail-row {
  width: 1610px;
}

.btn-download {
  color: #00c8bb;
}

.btn-download:hover {
  color: #00766a;
  background-color: white;
  cursor: pointer;
}

.col-8 {
  width: 64%;
}

.col-5 {
  width: 685px;
}

.avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}

#item-detail {
  width: 1560px;
  margin: auto;
}

#info-trans-pay {
  width: 300px;
  height: 600px;
  border: 1px solid rgb(222, 219, 219);
}

table tr td span, .item-description p {
  color: #686868;
}

#info-span {
  font-size: 13px;
  width: 100%;
}

.item-note, .detail-title {
  font-size: 13px;
  color: #388b82
}

.mini-image-container {
  width: 40px;
}

.mini-img, .mini-div-image {
  width: 40px;
  height: 40px;
  cursor: pointer;
}

#qty {
  width: 70px;
  outline: none;
  border-radius: 25px 25px 25px 25px;
}

.add-to-cart {
  border-radius: 25px 25px 25px 25px;
  background-color: #37475A;
  color: white;
  width: 100%;
  margin-bottom: 15px;
}

.add-to-cart:hover {
  background-color: #1a2635;
  color: white;
}

.add-to-cart i {
  color: white;
}

.btn-order {
  border-radius: 25px 25px 25px 25px;
  width: 100%;
  background-color: #FA8900;
}

.btn-order:hover {
  background-color: #F7CA00;
}

.rating i {
  color: #FFB909;
}

.img-slide-show-detail {
  width: 520px;
  height: 490px;
  cursor: pointer;
}

.btn-helpful {
  border-radius: 7px;
  width: 10%;
  border: none;
  background-color: rgb(227, 227, 227);
  color: black
}

.container-manu {
  width: 1000px;
  margin: auto;
}

.inspri-text {
  font-size: 11px;
  text-align: justify;
}

#card-inspri {
  width: 250px;
  height: 450px;
}

.img-insp-card {
  width: 100%;
  height: 250px;
}

.common-product-image {
  position: relative;
}

#common-background {
  height: 750px;
}

#common-product-carousel {
  width: 1100px;
}

#common-product-slide {
  position: absolute;
  top: 37%;
  left: 2%;
}

.common-img-slide {
  width: 400px;
  height: 450px;
}

#product-video-carousel {
  width: 1000px;
  margin: auto;
}

.product-video-img {
  border-radius: 15px;
  width: 315px;
  height: 260px;
}

.video-img-slide {
  width: 300px;
  height: 260px;
}

#table-tech td:nth-child(odd) {
  background-color: rgb(246, 246, 246);
}

span {
  font-weight: normal;
  font-size: 15px;
}

h3, h4, h5, .same-product-name, #range span, .btn-rating-guide, .learn-more {
  color: #036964;
}

#price-main {
  font-weight: bold;
  font-size: 20px;
  color: black
}

#range:hover input[type="range"] {
  border: 1px solid #FA8900;
}

input[type="range"] {
  -webkit-appearance: none !important;
  background: rgb(227, 227, 227);
  height: 24px;
  width: 220px;
  border-radius: 3px;
  margin-left: 10px;
}

input[type='range']::-webkit-slider-thumb {
  display: none;
}

input[type='range']::-moz-range-thumb {
  border-radius: 20px;
  border: none;
  height: 20px;
  box-shadow: 3px 2px 3px #000;
  width: 20px;
}

#star-table tr {
  background-color: transparent;
}

.comment-content {
  background-color: rgb(227, 227, 227);
}

.comment-text {
  background-color: rgb(227, 227, 227);
}

#comment-photo {
  width: 40px;
  height: 50px;
}

.btn-review, .btn-report, .btn-list {
  border: none;
  width: 70%;
  border-radius: 10px;
  background-color: rgb(227, 227, 227);
}

.btn-list {
  width: 100%;
  margin: 10px 0;
}

.btn-review:hover, .btn-report:hover, .btn-helpful:hover {
  background-color: #F7FAFA;
}

@media screen and (min-width: 1367px) and (max-width: 1514px) {
  #container-detail {
    width: 100%;
  }

  .item-detail-row {
    width: 1514px;
  }

  .col-5[data-v-9c32a1d4] {
    width: 585px;
  }

  #info-trans-pay .social-network, table tr td span, .item-description p {
    color: #686868;
    max-width: 1514px;
  }

  #table-tech td:nth-child(odd) {
    background-color: rgb(246, 246, 246);
    width: 600px
  }

  .table {
    width: 700px;
    margin: 0 auto;
    width: 500px
  }

  .table {
    width: 100%;
  }

  #table-shipping {
    width: 300px;
  }

  #review-photo {
    width: 40px;
    height: 50px;
  }

  .common-product-image {
    position: relative;
    width: 1414px;
  }

  #product-video-slide {
    width: 1414px;
  }

  #item-detail {
    width: 1444px;
  }
}

@media screen and (min-width: 992px) and (max-width: 1366px) {
  .img-slide-show-detail {
    width: 400px;
    height: 430px;
  }

  .from-the-manu, .item-description, #technical-detail,#common-background,.product-video,.report-review {
    width: 1300px;
  }
}
</style>