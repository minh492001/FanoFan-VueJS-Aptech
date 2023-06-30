<template>
  <div class="container-fluid article p-0">
    <h2 class="ms-3">Article related to your items</h2>
    <div class="article-row row">
      <div class="col-xxl-8 col-7">
        <carousel class="mb-4" :items-to-show="3" :wrap-around="true" :transition="500">
          <slide id="article-slide" class="d-flex flex-column " v-for="(item, index) in props.article.article"
                 :key="index">
            <div class="article-slide-show">
              <div class="card" id="article-card">
                <img :src="item.image" class="img-article h-100" alt="">
                <div class="card-body">
                  <span class="text-start">Written by: </span><span id="written-by">{{ item.written_by }}</span>
                  <p id="article-content" class="text-start">{{ textSlice(item.content, 80) }}</p>
                  <a class="article-link text-decoration-none" href="">Read full article</a>
                </div>
              </div>
            </div>
          </slide>
          <template #addons={slidesCount}>
            <navigation v-if="slidesCount >= 3"/>
          </template>
        </carousel>
      </div>
      <div class="col-xxl-4 col-5 p-xxl-3 me-xxl-3 m-0" id="article-text-col">
        <div class="article-div" v-for="(item, index) in article.article"
             :key="index">
          <p id="article-text" v-if="index <=1">{{ item['content'] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import {Carousel, Slide, Navigation} from "vue3-carousel";
import {textSlice} from "@/helpers";
import {defineProps} from "vue";

const props = defineProps({
  article: {
    type: Array
  }
})
</script>

<style scoped>

h2 {
  color: #00766a;
}

.article {
  margin-left: 39px;
}
.article-link{
  font-size: 13px;
  color: #00766a;
}
#article-text-col {
  background-color: #F1EFEF;
  width: 500px;
  height: 350px;
  text-align: justify;
}

#article-text {
  font-size: 13px;
}

#article-card {
  width: 300px;
  height: 350px;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
}

#article-content {
  font-size: 14px;
}

#written-by {
  font-size: 14px;
}

.img-article {
  width: 100%;
}
.carousel {
  width: 1000px;
}
@media screen and (min-width: 1366px) {

}
@media screen and (max-width: 1366px) {
  .carousel {
    width: 600px;
  }
  #written-by {
    font-size: 13px;
  }
  .article-div{
    padding: 20px 10px 0 20px;
  }
  #article-text-col {
    width: 458px;
  }
  #article-card {
    width: 215px;
  }
  .carousel{
    width: 660px;
  }
  .carousel__slide{
    width: 410px;
  }
}
</style>