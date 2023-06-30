<template>
  <div class="fan-list-container py-xl-4 px-3 py-0 d-flex flex-row">
    <div class="fan-list-item d-flex flex-column d-inline-block align-items-center justify-content-center"
         v-for="(item,index) in FansListHeader" :key="index">
      <div class="img mb-4">
        <router-link :to="item.to">
          <img class="img-fluid list-item-img" :src="item.image" alt="">
        </router-link>
      </div>
      <div class="list-item-name">
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

import {computed} from "vue";
import store from "@/store";

const FansListHeader = computed(() => store.state.fansListHeader)
</script>

<style scoped>
.fan-list-container {
  height: 170px;
  padding-left: 24px;
  width: 100%;
}

.fan-list-item {
  width: 94px;
  cursor: pointer;
  margin-right: 5px;
}

.fan-list-item:hover .list-item-name > p {
  color: rgb(26, 161, 121);
}

.list-item-img {
  width: 55px;
  height: 60px;
}

.fan-list-item:first-child .list-item-img {
  width: 60px;
  height: 60px;
}

.fan-list-item:nth-child(8) .list-item-img {
  width: 25px;
}

.fan-list-item:nth-child(7) .list-item-img {
  width: 43px;
  height: 60px;
}

.fan-list-item:nth-child(14) .list-item-img {
  width: 40px;
  height: 60px;
}

.fan-list-item:nth-child(16) .list-item-img {
  width: 70px;
  height: 60px;
}

.list-item-name p {
  white-space: nowrap;
  font-size: 13px;
}

@media screen and (max-width: 1514px) {
  .fan-list-container {
    height: 110px;
    width: 1300px;
    margin: 20px 0 0 0;
  }

  .fan-list-item {
    width: 57px;
    cursor: pointer;
    margin-left: 15px;
  }

  .fan-list-item:first-child .list-item-img {
    width: 51px;
    height: 40px;
  }

  .fan-list-item:nth-child(8) .list-item-img {
    width: 20px;
  }

  .list-item-img {
    width: 55px;
    height: 40px;
  }

  .fan-list-item:hover .list-item-name > p {
    color: rgb(26, 161, 121);
    font-size: 10px;
  }

  .list-item-name > p {
    font-size: 10px;
  }

  .fan-list-item:nth-child(7) .list-item-img {
    width: 40px;
    height: 40px;
  }

  .fan-list-item:nth-child(14) .list-item-img {
    width: 55px;
    height: 40px;
  }

  .fan-list-item:nth-child(16) .list-item-img {
    width: 200px;
    height: 40px;
  }
}
@media screen and (min-width: 1367px) and (max-width: 1514px){
  .fan-list-container {
    margin-top: 20px;
    height: 100px;
    width: 1110px;
  }
  .fan-list-item {
    width: 80px;
  }
  .list-item-name p{
    white-space: nowrap;
  }
}

@media screen and (min-width: 991px) and (max-width: 1366px){
  .fan-list-container {
    width: 1170px;
  }
  .fan-list-item {
    width: 53px;
  }
  .list-item-name p{
    white-space: normal;
  }
}
@media screen and (max-width: 990px) {
  .fan-list-container {
    margin-top: 33px;
    height: 100px;
    width: 940px;
  }
  .fan-list-item {
    width: 38px;
  }
  .list-item-name p{
    white-space: normal;
  }
}
</style>