<template>
  <header>
    <TheHeader></TheHeader>
  </header>

  <main>
    <div class="library-container">
      <div class="main-background">
        <img class="w-100 h-100" src="/assets/images/ads65.jpg" alt="">
        <div class="library-header">
          <div class="">
            <carousel :items-to-show="1.5" :autoplay="2000" :wrap-around="true" :transition="1000">
              <slide v-for="(slide, index) in libraryHeader" :key="index">
                <div class="library-header-slide rounded-2">
                  <img class="img img-fluid w-100 h-100 rounded-2" :src="slide.img"/>
                </div>
              </slide>
              <template #addons>
                <navigation/>
              </template>
            </carousel>
          </div>
        </div>
      </div>

      <div class="feature-title">
        <h1 id="library-feature-text">The Antiquity</h1>
      </div>
      <div class="middle-top-library">
        <div id="container-middle-top">
          <div class="big-img p-0 fade-in-1">
            <img class="img-fluid w-100 h-100" src="/assets/images/ads61.jpg">
          </div>

          <div class="small-img p-0 d-flex">
            <div class="small-intro-1">
              <div class="intro-1 p-0 ">
                <div>
                  <h4>Snow White</h4>
                  <a class="common-a-text text-decoration-none" href="">Discover</a>
                </div>

              </div>
              <div class="intro-2 p-0 fade-in-2"><img class="img-intro w-100 h-100" src="/assets/images/ads59.jpg"></div>
            </div>
            <div class="small-intro-2">
              <div class="intro-3 p-0 fade-in-3"><img class="img-intro w-100 h-100" src="/assets/images/ads60.jpg"></div>
              <div class="intro-4 p-0">
                <div>
                  <h4>Chronos</h4>
                  <a class="common-a-text text-decoration-none" href="">Discover</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="container-middle-top">
          <div class="small-img-1 p-0 d-flex">
            <div class="intro-1 p-0">
              <div>
                <h4>Deep Ocean</h4>
                <a class="common-a-text text-decoration-none" href="">Discover</a>
              </div>
            </div>
            <div class="intro-2 p-0 fade-in-4"><img class="img-intro w-100 h-100" src="/assets/images/ads47.jpg" alt=""></div>

            <div class="intro-4 p-0">
              <div>
                <h4>Black Rose</h4>
                <a class="common-a-text text-decoration-none" href="">Discover</a>
              </div>
            </div>
            <div class="intro-3 p-0 fade-in-5"><img class="img-intro w-100 h-100" src="/assets/images/ads55.jpg" alt=""></div>
          </div>
        </div>
      </div>

      <div class="feature-title">
        <h1 id="library-feature-text">The Elegance</h1>
      </div>
      <div id="middle-bottom library" class=" container-fluid p-0">
        <div class="first-row d-flex flex-row">
          <div class="middle-b-img"><img class="w-100 h-100" src="/assets/images/ads76.jpg" alt=""></div>
          <div class="middle-b-img"><img class="w-100 h-100" src="/assets/images/ads80.jpeg" alt=""></div>
          <div class="middle-b-img"><img class="w-100 h-100" src="/assets/images/ads71.jpg" alt=""></div>
          <div class="middle-b-img"><img class="w-100 h-100" src="/assets/images/ads86.jpeg" alt=""></div>
          <div class="middle-b-img"><img class="w-100 h-100" src="/assets/images/ads79.jpeg" alt=""></div>
        </div>
        <div class="second-row d-flex flex-row">
          <div class="middle-b-img"><img class="w-100 h-100" src="/assets/images/ads81.jpeg" alt=""></div>
          <div class="middle-b-img"><img class="w-100 h-100" src="/assets/images/ads82.jpeg" alt=""></div>
          <div class="middle-b-img"><img class="w-100 h-100" src="/assets/images/ads83.jpg" alt=""></div>
          <div class="middle-b-img"><img class="w-100 h-100" src="/assets/images/ads78.jpeg" alt=""></div>
          <div class="middle-b-img"><img class="w-100 h-100" src="/assets/images/ads85.jpg" alt=""></div>
        </div>
      </div>

      <div class="feature-title">
        <h1 id="library-feature-text">New generation</h1>
      </div>
      <div class="middle-middle-library">
        <div id="container-middle-middle">
          <div class="middle-col-img fade-in-down">
            <img class="h-100 w-100" src="/assets/images/ads52.jpg" alt="">
          </div>
          <div class="middle-col d-flex flex-column align-items-center justify-content-center fade-in-up">
            <p class="fw-bold">The</p>
            <p class="fw-bold">Best</p>
            <p class="fw-bold">Fan</p>
            <p class="fw-bold">Of</p>
            <p class="fw-bold">The</p>
            <p class="fw-bold">Year</p>
          </div>
          <div class="middle-col-img fade-in-down">
            <img class="h-100 w-100" src="/assets/images/ads70.jpg" alt="">
          </div>
          <div class="middle-col d-flex flex-column align-items-center justify-content-center fade-in-up">
            <p class="fw-bold">Top</p>
            <p class="fw-bold">Seller</p>
            <p class="fw-bold">On</p>
            <p class="fw-bold">Amazon</p>
            <p class="fw-bold">in</p>
            <p class="fw-bold">2015</p>
          </div>
          <div class="middle-col-img fade-in-down animation-delay-1s" >
            <img class="w-100 h-100" src="/assets/images/ads69.jpg" alt="">
          </div>
        </div>
      </div>

      <div class="feature-title">
        <h1 id="library-feature-text">The Luxury</h1>
      </div>
      <div class="library-luxury container-fluid p-0 m-0">
        <div class="first-row d-flex flex-row p-0 m-0">
          <div class="lux-img"><img class="w-100 h-100 m-0" src="/assets/images/ads99.jpg" alt=""></div>
          <div class="lux-img d-flex flex-column justify-content-center align-items-end pe-5">
            <h4 class="">G</h4><h4 class="">R</h4><h4 class="">A</h4><h4 class="">Y</h4>
            <p></p>
            <h4 class="">A</h4><h4 class="">S</h4><h4 class="">H</h4><h4 class="">E</h4><h4 class="">S</h4>
          </div>
          <div class="lux-img"><img class="w-100 h-100 m-0" src="/assets/images/ads98.jpg" alt=""></div>
        </div>
        <div class="second-row d-flex flex-row">
          <div class="lux-img d-flex justify-content-center align-items-start pt-5">
            <h4 class="ms-3">D</h4><h4 class="ms-3">A</h4><h4 class="ms-3">R</h4><h4 class="ms-3">K</h4>
            <h4 class="ms-5">C</h4><h4 class="ms-3">L</h4><h4 class="ms-3">O</h4><h4 class="ms-3">U</h4><h4 class="ms-3">D</h4>

          </div>
          <div class="lux-img m-0"><img class="w-100 h-100 m-0" src="/assets/images/ads93.jpg" alt=""></div>
          <div class="lux-img d-flex justify-content-center align-items-end pb-5">
            <h4 class="me-3">S</h4><h4 class="me-3">I</h4><h4 class="me-3">L</h4><h4 class="me-3">V</h4><h4 class="me-3">E</h4><h4 class="me-5">R</h4>
            <h4 class="me-3">H</h4><h4 class="me-3">E</h4><h4 class="me-3">A</h4><h4 class="me-3">R</h4><h4 class="">T</h4>
          </div>
        </div>
        <div class="third-row d-flex flex-row">
          <div class="lux-img"><img class="w-100 h-100 m-0" src="/assets/images/ads102.jpg" alt=""></div>
          <div class="lux-img d-flex flex-column justify-content-center align-items-start ps-5">
            <h4 class="third-row-text">R</h4><h4 class="third-row-text">E</h4><h4 class="third-row-text">D</h4>
            <p></p>
            <h4 class="">W</h4><h4 class="third-row-text ps-1">I</h4><h4 class="">N</h4><h4 class="">G</h4>
          </div>
          <div class="lux-img"><img class="w-100 h-100 m-0" src="/assets/images/ads101.jpg" alt=""></div>
        </div>
      </div>

      <div class="feature-title">
        <h1 id="library-feature-text"></h1>
      </div>
    </div>
  </main>


  <footer>
    <AuthFooter></AuthFooter>
  </footer>

</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import {Carousel, Slide, Navigation} from "vue3-carousel";
import TheHeader from "@/components/TheHeader";
import AuthFooter from "@/components/AuthFooter";

const libraryHeader = [
  {id: 1, img: "/assets/images/ads66.jpg"},
  {id: 2, img: "/assets/images/ads68.jpg"},
  {id: 3, img: "/assets/images/ads45.jpg"},
  {id: 4, img: "/assets/images/ads67.jpg"},
  {id: 5, img: "/assets/images/ads72.jpg"},
  {id: 6, img: "/assets/images/ads73.jpg"},
  {id: 7, img: "/assets/images/ads74.jpg"},
  {id: 8, img: "/assets/images/ads75.jpg"},
]

</script>

<style scoped>
.main-background {
  position: relative;
  width: 100%;
  height: 800px;
}

.library-header {
  position: absolute;
  top: 32%;
  left: 11%;
  height: 500px;
  margin: auto;
  width: 1500px;
  overflow: hidden;
}

.library-header-slide {
  height: 500px;
  width: 850px;
}

#container-middle-top, #container-middle-middle {
  width: 1370px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
}
.common-a-text{
  font-size: 13px;
  color: #00766a;
}
.middle-top-library, .middle-middle-library {
  background-color: rgba(219, 215, 215, 0.2);
  margin: 50px 0;
  height: 1020px;
}
.middle-middle-library{
  background-color: rgba(219, 215, 215, 0.2);
  margin: 50px 0;
  height: 600px;
}
.library-luxury{
  background-color: rgba(219, 215, 215, 0.2);
}
.big-img, .small-img {
  width: 680px;
  height: 680px;
}

.small-img-1 {
  width: 1370px;
  height: 300px;
}

.intro-1, .intro-2, .intro-3, .intro-4 {
  width: 340px;
  height: 340px;
}

.intro-1, .intro-4 {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #fff9f9;
}

#library-feature-text {
  margin: 100px 0;
  text-align: center;
  font-family: "Source Code Pro", serif;
  font-size: 40px;
  letter-spacing: 2px;
}
.middle-col{
  width: 12%;
  height: 600px;
}
.middle-col-img{
  width: 27%;
  height: 600px;
}
.middle-b-img{
  width: 20%;
}
.lux-img{
  width: 33.33%;
  height: 450px;
}
.lux-img h4{
  width: 18px;
}

.fade-in-down {
  animation: fade-in-down 1s ease-in-out both;
}
.fade-in-up {
  animation: fade-in-up 2s ease-in-out both;
}
.fade-in-1 {
  animation: fade-in 3.5s ease-in-out both;
}
.fade-in-2 {
  animation: fade-in 4.5s ease-in-out both;
}
.fade-in-3 {
  animation: fade-in 5.5s ease-in-out both;
}
.fade-in-4 {
  animation: fade-in 6.5s ease-in-out both;
}
.fade-in-5 {
  animation: fade-in 7.5s ease-in-out both;
}
@keyframes fade-in-down {
  from {
    transform: translateY(-7.75rem);
    opacity: 0;
  }
  to {
    transform: translateY(0rem);
    opacity: 1;
  }
}
@keyframes fade-in-up {
  from {
    transform: translateY(7.75rem);
    opacity: 0;

  }
  to {
    transform: translateY(0rem);
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>