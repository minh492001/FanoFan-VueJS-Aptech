<template>
  <div class="home-layout-container">
    <header id="header">
      <TheHeader></TheHeader>
    </header>

    <main class="d-flex">
      <div class="container-home">
        <div class="bg-white d-lg-block d-none">
          <carousel :items-to-show="1" :autoplay="2000" :wrap-around="true" :transition="1000">
            <slide v-for="(slide, index) in slides" :key="index">
              <div class="img-slide-show w-100">
                <img class="img img-fluid w-100 h-100" :src="slide.img"/>
              </div>
            </slide>
            <template #addons>
              <navigation/>
            </template>
          </carousel>
        </div>
        <div class="space"></div>

        <div class="advertisement-fan-type mb-4">
          <div class="row">
            <div class="card ads-col bg-white text-center p-4 border-0 rounded-0 m-2">
              <div class="card-title">
                <h5>Battery Charge Fans List</h5>
              </div>
              <div class="card-body">
                <img class="img-ads img-fluid m-0" src="/assets/images/fan/fans-ads/battery5.jpg" alt="">
              </div>
              <div class="card-foot">
                <a class="item-text text-start p-0" href="">learn more</a>
              </div>
            </div>
            <div class="card ads-col bg-white text-center p-4 border-0 rounded-0 m-2">
              <div class="card-title">
                <h5>Our new model might suit for u</h5>
              </div>
              <div class="card-body">
                <img class="img-ads img-fluid m-0" src="/assets/images/fan/fans-ads/table1.png" alt="">
              </div>
              <div class="card-foot">
                <a class="item-text text-start p-0" href="">shop now</a>
              </div>
            </div>
            <div class="card ads-col bg-white text-center p-4 border-0 rounded-0 m-2">
              <div class="card-title">
                <h5>Discover 10 best tower fan</h5>
              </div>
              <div class="card-body">
                <img class="img-ads img-fluid m-0" src="/assets/images/fan/fans-ads/tower5.jpg" alt="">
              </div>
              <div class="card-foot">
                <a class="item-text text-start p-0" href="">learn more</a>
              </div>
            </div>
            <div class="card ads-col bg-white text-center p-4 border-0 rounded-0 m-2">
              <div class="card-title">
                <h5>May convenient for your house</h5>
              </div>
              <div class="card-body">
                <img class="img-ads img-fluid m-0" src="/assets/images/fan/fans-ads/wall5.jpg" alt="">
              </div>
              <div class="card-foot">
                <a class="item-text text-start p-0" href="">learn more</a>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="card ads-col bg-white text-center p-4 border-0 rounded-0 m-2">
              <div class="card-title">
                <h5>Fan for small space</h5>
              </div>
              <div class="card-body">
                <img class="img-ads img-fluid m-0" src="/assets/images/fan/fans-ads/volcano1.jpg" alt="">
              </div>
              <div class="card-foot">
                <a class="item-text text-start p-0" href="">learn more</a>
              </div>
            </div>
            <div class="card ads-col bg-white text-center p-4 border-0 rounded-0 m-2">
              <div class="card-title">
                <h5>Best seller this month</h5>
              </div>
              <div class="card-body">
                <img class="img-ads img-fluid m-0" src="/assets/images/fan/fans-ads/conditioner5.jpg" alt="">
              </div>
              <div class="card-foot">
                <a class="item-text text-start p-0" href="">shop now</a>
              </div>
            </div>
            <div class="card ads-col bg-white text-center p-4 border-0 rounded-0 m-2">
              <div class="card-title">
                <h5>Luxury Crystal in One</h5>
              </div>
              <div class="card-body">
                <img class="img-ads img-fluid m-0" src="/assets/images/fan/fans-ads/ceil2.jpg" alt="">
              </div>
              <div class="card-foot">
                <a class="item-text text-start p-0" href="">learn more</a>
              </div>
            </div>
            <div class="card ads-col bg-white text-center p-4 border-0 rounded-0 m-2">
              <div class="card-title">
                <h5>For every space</h5>
              </div>
              <div class="card-body">
                <img class="img-ads img-fluid m-0" src="/assets/images/fan/fans-ads/box16.jpg" alt="">
              </div>
              <div class="card-foot">
                <a class="item-text text-start p-0" href="">learn more</a>
              </div>
            </div>
          </div>

          <div class="item-consider bg-white p-2 mt-3 m-auto">
            <h5 class="mb-3 ms-3">Our mini & box fan you may concern</h5>
            <carousel id="consider" :items-to-show="5" :wrap-around="true" :transition="1000">
              <slide v-for="(slide, index) in miniBoxFan" :key="index">
                <div class="img-slide-consider">
                  <img class="img-consider" :src="slide.img"/>
                </div>
              </slide>
              <template #addons>
                <navigation/>
                <pagination/>
              </template>
            </carousel>
          </div>

          <div class="row bg-white mt-3">
            <div class="col-md-12 col-lg-6">
              <h3 class="ms-3 mt-3">The Best Pedestal Fans</h3>
              <div class="common-img mt-3">
                <img class="w-100 h-100" src="/assets/images/fan/fans-ads/pes1.jpg" alt="">
              </div>
            </div>
            <div class="col-md-12 col-lg-6 article-text">
              <div class="common-detail mt-3">
                <p class="text-start written-by">WRITTEN BY: SAMANTHA OHLSON AND OLIVIA HANSON </p>
                <p class="text-start">Updated August 23, 2022</p>
                <p class="text-start">
                  If it’s starting to feel a little stuffy inside the house, turning on a pedestal fan will add a
                  pleasant
                  breeze. With great features like timers for those who like to fall asleep to the white noise of a fan,
                  natural wind settings, and even voice control operation, a pedestal fan will make an efficient and
                  essential addition to your home.
                </p>
                <p class="text-start">
                  No matter which option you get, there will be some maintenance, as fans are great at collecting dust.
                  To
                  clean your fan, first make sure it’s unplugged. Then, grab a hair dryer on a low setting and use it to
                  blow the dust off the fan’s blades. Afterwards, take a vacuum to clean up the dust and the surface of
                  the fan. Once you’re done, grab a damp towel and wipe away any other smudges on the fan. If you want
                  to
                  clean the fan more thoroughly, disassemble the parts, get your preferred cleaning solution, and wipe
                  down each section with a towel.
                </p>
              </div>
            </div>
          </div>

          <div class="item-consider bg-white p-2 mt-3">
            <h5 class="mb-3 ms-3">More items to consider</h5>
            <carousel :items-to-show="5" :wrap-around="true" :transition="1000">
              <slide v-for="(slide, index) in itemConsider" :key="index">
                <div class="img-slide-consider">
                  <img class="img-consider" :src="slide.img"/>
                </div>
              </slide>
              <template #addons>
                <navigation/>
                <pagination/>
              </template>
            </carousel>
          </div>
          <div class="row-video bg-white p-0 mt-3 d-xl-none d-xxl-block d-flex flex-row">
            <div class="ads-video-price py-3 ps-4 col-xl-2 m-0 d-inline-block">
              <h4>Top Seller Of Month</h4>
              <h5 class="text-start p-0 big-ass">Big Ass Fans Haiku L Smart Ceiling Fan</h5>
              <p class="text-start p-0">Width: 52"</p>
              <p class="text-start p-0">Color: White</p>
              <p class="text-start p-0">$798.06
                <del>$849.00</del>
              </p>
              <p class="text-start p-0">Delivery Fri, Apr 14</p>
            </div>
            <div class="ads-video-img col-xl-3 m-0 d-inline-block">
              <img class="ads-fan p-0 w-100 h-100" src="/assets/images/fan/fans-ads/ceil3.jpg" alt="">
            </div>
            <div class="ads-video col-xl-7 m-0 d-inline-block">
              <video class="ceil-video w-100 h-100 p-0" controls autoplay muted>
                <source src="/assets/images/fan/video/home-ads1.mp4" type="video/mp4">
              </video>
            </div>
          </div>

          <div class="row-video bg-white p-0 mt-3 d-xl-block d-xxl-none d-flex flex-row">
            <div class="ads-video-img col-5 m-0 d-inline-block">
              <img class="ads-fan p-0 w-100 h-100" src="/assets/images/fan/fans-ads/ceil3.jpg" alt="">
            </div>
            <div class="ads-video col-7 m-0 d-inline-block">
              <video class="ceil-video w-100 h-100 p-0" controls autoplay muted>
                <source src="/assets/images/fan/video/home-ads1.mp4" type="video/mp4">
              </video>
            </div>
          </div>

          <div class="item-consider bg-white p-2 mt-3">
            <h5 class="mb-3 ms-3">If you love Vintage style</h5>
            <carousel :items-to-show="2.5" :autoplay="3500" :wrap-around="true" :transition="1000">
              <slide v-for="(slide, index) in vintageType" :key="index">
                <div class="img-slide-vintage">
                  <img class="img-vintage w-100 h-100" :src="slide.img"/>
                </div>
              </slide>
              <template #addons>
                <navigation/>
                <pagination/>
              </template>
            </carousel>
          </div>


          <div class=" lux-row row bg-white mt-3 text-center">
            <h4 class="lux-title mb-4 mt-4">Crystal Ceiling Light Fan for Your Luxury</h4>
            <div class="lux-description">
              <p class="m-0">Traditional ceiling fan and modern luxury crystal chandelier 2 in 1. Acrylic clear blades
                with polished golden gorgeous lamp body absolutely adds elegance to your bedroom, living room! From the
                SILJOY Lighting brand.</p>
              <p class="m-0"> Modern crystal fan lamp from SILJOY Lighting brand, innovative design, elegant petal
                lampshade shape, combining traditional ceiling fan and luxury crystal chandelier, easily embellish your
                home life, create a different atmosphere for your important moments.</p>
            </div>

            <div class="luxury-items ms-auto">
              <img class="w-100 lux-img" src="/assets/images/fan/fans-ads/lux25.jpg" alt="">
            </div>
            <div class="luxury-items">
              <img class="w-100 lux-img" src="/assets/images/fan/fans-ads/lux3.jpg" alt="">
            </div>
            <div class="luxury-items me-auto">
              <img class="w-100 lux-img" src="/assets/images/fan/fans-ads/lux11.jpg" alt="">
            </div>
          </div>
          <div class="item-consider bg-white d-lg-block d-none p-2 mt-3">
            <h5 class="mb-3 ms-3">Another feature products</h5>
            <carousel :items-to-show="3.5" :wrap-around="true" :transition="1000">
              <slide v-for="(slide, index) in anotherType" :key="index">
                <div class="img-slide-another">
                  <img class="img-another w-100 h-100" :src="slide.img"/>
                </div>
              </slide>
              <template #addons>
                <navigation/>
                <pagination/>
              </template>
            </carousel>
          </div>

          <div class="item-consider bg-white d-lg-none d-block p-2 mt-3">
            <h5 class="mb-3 ms-3">Another feature products</h5>
            <carousel :items-to-show="1.5" :wrap-around="true" :transition="1000">
              <slide v-for="(slide, index) in anotherType" :key="index">
                <div class="img-slide-another">
                  <img class="img-another w-100 h-100" :src="slide.img"/>
                </div>
              </slide>
              <template #addons>
                <navigation/>
                <pagination/>
              </template>
            </carousel>
          </div>

          <div class="history d-flex flex-row bg-white mt-3 mb-4">
            <div class="history-image">
              <img class="w-100 h-100" src="/assets/images/fan/fans-ads/history1.jpg" alt="">
            </div>

            <div class="history-content pt-3">
              <p class="fs-6">FANoFAN was founded in 1989 in Moskva Russia, as a manufacturer of electric motors and
                fans. Over
                the past 30-plus years, we have grown from a regional manufacturer into a global technology solutions
                powerhouse.</p>
              <ul>
                <li>
                  <span class="his-text"><span id="year">In 2015</span>, we unveiled the industry’s first Apple HomeKit enabled smart fans at the Consumer
                    Electronics Show (CES) with our SIMPLEconnect® WiFi® smart fan collection. </span>
                </li>
                <li>
                  <span class="his-text"><span id="year">In 2016</span>, We expanded from residential ceiling fans, building industrial
                    HVLS fans and commercial fans specifically engineered to help with safety and comfort in businesses.
                </span>
                </li>
                <li>
                  <span class="his-text"><span id="year">In 2019</span>, our engineers created an innovative,
                    precision blade and optimized motor to deliver our SureSpeed® Guarantee for 33% higher velocity than leading competitors*.
                  </span>
                </li>
                <li>
                  <span class="his-text"><span id="year">In 2020</span>, we introduced our WeatherMax® outdoor fans that are salt-air and corrosion resistant,
                    a step above industry standard wet-rated ceiling fans.
                  </span>
                </li>
                <li>
                  <span class="his-text"><span id="year">In 2021</span>, we launched Hunter Lighting™ releasing chandeliers, pendants, wall sconces, flush mounts, and bathroom vanity lights.
                  </span>
                </li>
                <li>
                  <span class="his-text"><span id="year">In 2012</span>, we also introduced HunterExpress® fans. With a 3-step install system,
                    it is the quickest fan install you'll ever do.
                  </span>
                </li>
              </ul>
              <img class="his-img2" src="/assets/images/fan/fans-ads/history15.jpeg" alt="">
            </div>
          </div>
        </div>
        <div class="history-content-2 bg-white">
          <router-link :to="{name:'about'}" class="text-decoration-none text-start his-link" href="">Read more about our
            History
          </router-link>
        </div>

      </div>
    </main>
  </div>
  <footer id="footer">
    <TheFooter></TheFooter>
  </footer>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import {Carousel, Slide, Pagination, Navigation} from "vue3-carousel";
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";


export default {
  components: {
    TheFooter,
    TheHeader,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: [
        {id: 1, img: "/assets/images/ads16.jpg"},
        {id: 2, img: "/assets/images/ads63.jpg"},
        {id: 3, img: "/assets/images/ads40.jpg"},
        {id: 4, img: "/assets/images/ads41.jpg"},
        {id: 5, img: "/assets/images/ads72.jpg"},
        {id: 6, img: "/assets/images/ads13.jpg"},
        {id: 7, img: "/assets/images/ads65.jpg"},
        {id: 8, img: "/assets/images/ads33.jpg"},
        {id: 9, img: "/assets/images/ads35.jpg"},
      ],
      itemConsider: [
        {id: 1, img: "/assets/images/fan/amazon-ceiling/amazon-ceiling1.jpg"},
        {id: 2, img: "/assets/images/fan/amazon-ceiling/amazon-ceiling2.jpg"},
        {id: 3, img: "/assets/images/fan/amazon-ceiling/amazon-ceiling3.jpg"},
        {id: 4, img: "/assets/images/fan/amazon-ceiling/amazon-ceiling4.jpg"},
        {id: 5, img: "/assets/images/fan/amazon-ceiling/amazon-ceiling5.jpg"},
        {id: 6, img: "/assets/images/fan/amazon-ceiling/amazon-ceiling6.jpg"},
        {id: 7, img: "/assets/images/fan/amazon-ceiling/amazon-ceiling7.jpg"},
        {id: 8, img: "/assets/images/fan/amazon-ceiling/amazon-ceiling8.jpg"},
        {id: 9, img: "/assets/images/fan/amazon-ceiling/amazon-ceiling9.jpg"},
        {id: 10, img: "/assets/images/fan/amazon-ceiling/amazon-ceiling10.jpg"},
        {id: 11, img: "/assets/images/fan/amazon-ceiling/amazon-ceiling11.jpg"},
        {id: 12, img: "/assets/images/fan/amazon-ceiling/amazon-ceiling12.jpg"},
        {id: 13, img: "/assets/images/fan/amazon-ceiling/amazon-ceiling13.jpg"},
        {id: 14, img: "/assets/images/fan/amazon-ceiling/amazon-ceiling14.jpg"},
        {id: 15, img: "/assets/images/fan/amazon-ceiling/amazon-ceiling15.jpg"},
        {id: 16, img: "/assets/images/fan/amazon-ceiling/amazon-ceiling16.jpg"},
        {id: 17, img: "/assets/images/fan/amazon-ceiling/amazon-ceiling17.jpg"},
        {id: 18, img: "/assets/images/fan/amazon-ceiling/amazon-ceiling18.jpg"},
        {id: 19, img: "/assets/images/fan/amazon-ceiling/amazon-ceiling19.jpg"},
      ],

      miniBoxFan: [
        {id: 1, img: "/assets/images/fan/fans-ads/box2.jpg"},
        {id: 2, img: "/assets/images/fan/fans-ads/box3.jpg"},
        {id: 3, img: "/assets/images/fan/fans-ads/box5.jpg"},
        {id: 4, img: "/assets/images/fan/fans-ads/box6.jpg"},
        {id: 5, img: "/assets/images/fan/fans-ads/box11.jpg"},
        {id: 6, img: "/assets/images/fan/fans-ads/box14.jpg"},
        {id: 7, img: "/assets/images/fan/fans-ads/box17.jpg"},
        {id: 8, img: "/assets/images/fan/fans-ads/box18.jpg"},
        {id: 9, img: "/assets/images/fan/fans-ads/box20.jpg"},
        {id: 10, img: "/assets/images/fan/fans-ads/box21.jpg"},
        {id: 11, img: "/assets/images/fan/fans-ads/box24.jpg"},
        {id: 12, img: "/assets/images/fan/fans-ads/box25.jpg"},
        {id: 13, img: "/assets/images/fan/fans-ads/box27.jpg"},
        {id: 14, img: "/assets/images/fan/fans-ads/box29.jpg"},
        {id: 15, img: "/assets/images/fan/fans-ads/box30.jpg"},
      ],
      vintageType: [
        {id: 1, img: "/assets/images/ads44.jpg"},
        {id: 2, img: "/assets/images/ads45.jpg"},
        {id: 3, img: "/assets/images/ads47.jpg"},
        {id: 4, img: "/assets/images/ads46.jpg"},
        {id: 5, img: "/assets/images/ads48.jpg"},
        {id: 6, img: "/assets/images/ads49.jpg"},
        {id: 7, img: "/assets/images/ads50.jpg"},
        {id: 8, img: "/assets/images/ads53.jpg"},
        {id: 9, img: "/assets/images/ads54.jpeg"},
        {id: 10, img: "/assets/images/ads55.jpg"},
        {id: 11, img: "/assets/images/ads59.jpg"},
        {id: 12, img: "/assets/images/ads60.jpg"},
        {id: 13, img: "/assets/images/ads61.jpg"},
        {id: 14, img: "/assets/images/ads62.jpg"},
        {id: 15, img: "/assets/images/ads63.jpg"},
        {id: 16, img: "/assets/images/ads64.jpg"},
      ],
      anotherType: [
        {id: 1, img: "/assets/images/fan/fans-ads/box15.jpg"},
        {id: 2, img: "/assets/images/fan/fans-ads/ads17.jpg"},
        {id: 3, img: "/assets/images/fan/fans-ads/conditioner1.jpg"},
        {id: 4, img: "/assets/images/fan/fans-ads/tower2.jpg"},
        {id: 5, img: "/assets/images/fan/fans-ads/wall2.jpg"},
        {id: 6, img: "/assets/images/fan/fans-ads/wall7.jpg"},
        {id: 7, img: "/assets/images/fan/fans-ads/wall1.jpg"},
        {id: 8, img: "/assets/images/fan/fans-ads/wall3.jpg"},
        {id: 9, img: "/assets/images/fan/fans-ads/box8.jpg"},
        {id: 10, img: "/assets/images/fan/fans-ads/box9.jpg"},
        {id: 11, img: "/assets/images/fan/fans-ads/box10.jpg"},
        {id: 12, img: "/assets/images/fan/fans-ads/wall6.jpg"},
        {id: 13, img: "/assets/images/fan/fans-ads/wall8.jpg"},
        {id: 14, img: "/assets/images/fan/fans-ads/wall9.jpg"},
        {id: 15, img: "/assets/images/fan/fans-ads/conditioner3.jpg"},
      ]
    }
  }
}

</script>

<style scoped>
.item-text {
  color: #388b82;
  font-size: 12px;
  cursor: pointer;
}

.his-text {
  color: #388b82;
  font-size: 14px;
}

.his-link {
  color: #388b82;
  font-size: 18px;
  letter-spacing: 2px;
}

.history-content-2 {
  padding: 80px 20px 0 0;
}

.container-home {
  margin: auto;
  width: 1500px;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.space {
  border: 5px solid #E0E0E0;
}

a {
  padding-left: 100px;
  text-decoration: none;
  color: var(--main-color);
}

p {
  text-align: center;
  font-size: 15px;
  margin-right: 100px;
  padding-left: 70px;
}

.img {
  width: 100%;
  height: 590px;
}

#header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 65px;
  z-index: 1;
}

.ads-col {
  width: 364px;
  height: 450px;
}

.card-body {
  width: 320px;
  height: 320px;
}

.img-ads {
  width: 300px;
  height: 300px;
}

.common-img, .common-detail {
  height: 500px;
}
.article-text{
  padding-top: 50px;
}
.row-video{
  position: relative;
  height: 415px;
}
.ads-video {
  position: absolute;
  right: 0;
  width: 50%;
  height: 415px;
}

.ads-video-price {
  position: absolute;
  left: 0;
  width: 20%;
  height: 415px;
}

.ads-video-img {
  position: absolute;
  left: 18%;
  width: 30%;
  height: 415px;
}

.ceil-video {
  width: 100%;
  height: 100px;
}

.img-slide-vintage {
  width: 570px;
  height: 350px;
}

.lux-row {
  height: 500px;
  margin-bottom: 110px;
}

.luxury-items {
  width: 30%;
  height: 400px;
}

.lux-img {
  height: 400px;
}

.lux-description {
  width: 80%;
  margin: auto;
  text-align: justify;
  margin-bottom: 20px;
}

.img-slide-another {
  width: 400px;
  height: 500px;
}

.history {
  height: 500px;
}

.history-image {
  width: 30%;
  height: 500px;
  display: inline-block;
}

.his-img2 {
  width: 80%;
  height: 380px;
  margin-left: 123px;
}

.history-content {
  width: 67%;
  display: inline-block;
}

.history-content-2 {
  height: 200px;
  margin-bottom: 20px;
}

.written-by, .big-ass, .lux-title {
  color: #388b82;
}

main {
  margin-top: 50px;
  padding: 16px 0 0 0;
  overflow: auto;
  min-height: 100px;
}

.img-slide-show {
  height: 660px;
}

.home-layout-container {
  background-color: #E3E6E6;
}

.img-slide-consider {
  width: 260px;
  height: 220px;
}

.img-consider {
  width: 100%;
  height: 220px;
}

@media screen and (max-width: 1514px) {
  .container-home {
    margin: auto;
    width: 1400px;
    height: 100%;
  }

  .ads-col {
    width: 304px;
    height: 370px;
  }

  .img-ads {
    width: 220px;
    height: 220px;
  }

  .card-body {
    width: 252px;
    height: 320px;
  }

  h5 {
    font-size: 14px;
  }

  .row {
    width: 1280px;
    margin: 0 auto;
  }

  .lux-row {
    height: 500px;
    margin-bottom: 110px;
  }

  .ceil-video {
    width: 100%;
    height: 100vh;
  }

  .ads-video {
    width: 50%;
    height: 100%;
  }

  .ads-fan {
    height: 87%;
    width: 100%;
  }
}

@media screen and (min-width: 1367px) and (max-width: 1514px) {
  .container-home {
    margin: auto;
    width: 1200px;
  }

  .ads-col {
    width: 283px;
    height: 320px;
  }

  .img-ads {
    width: 200px;
    height: 200px;
  }

  .card-body {
    width: 230px;
    height: 320px;
  }

  #consider, .item-consider {
    width: 1180px;
  }
  .img-consider {
    width: 200px;
  }
}
@media screen and (max-width: 1366px) {
  .container-home,.row,#consider, .item-consider {
    width: 100%;
  }

  .ads-col {
    width: 320px;
    height: 320px;
  }

  .img-ads {
    width: 250px;
    height: 200px;
  }

  .card-body {
    width: 278px;
    height: 228px;
  }
  .common-detail{
    height: auto;
    padding-top: 50px;
  }

  .img-consider {
    width: 200px;
  }
  .row-video{
    position: relative;
    height: 460px;
  }
  .ads-video {
    width: 60%;
    height: 460px;
  }

  .ads-video-img {
    position: absolute;
    left: 0;
    width: 40%;
  }
  .ads-fan {
    height: 87%;
    width: 100%;
  }
  .ceil-video {
    width: 100%;
    height: 100px;
  }
  .his-img2[data-v-9ea40744] {
    height: 364px;
  }
}
@media screen and (max-width: 990px){
  .row{
    width: auto;
  }
  .container-home {
    margin: auto;
    width: 970px;
  }

  .ads-col {
    width: 460px;
    height: 346px;
  }
  .img-ads {
    width: 100%;
    height: 222px;
  }
  .card-body {
    width: 424px;
    height: 261px;
  }
  .common-detail{
    height: auto;
  }
  .common-detail p {
    margin: 0;
    padding: 0 7px 10px 7px;
  }
  .common-img,.common-detail{
    width: 944px;
  }
  .img-slide-another {
    width: 585px;
    height: 435px;
  }
  .luxury-items {
    width: 30%;
    height: 320px;
  }
  .lux-img{
    height: 320px;
  }
  .lux-row{
    height: 500px;
    margin-bottom: 70px;}
  .history {
    height: 430px;
  }
  .history-image{
    width: 30%;
    height: 430px;
  }
  .history-content-2 {
    height: 260px;
  }
  .his-img2 {
    width: 80%;
    height: 260px;
    margin-left: 160px;
    margin-top: 22px;
  }
}
</style>