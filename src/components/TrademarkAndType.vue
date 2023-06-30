<template>
  <!-- Trademark -->
  <div class="trademark py-3 border-bottom">
    <p class="trade text-start" align="center">Trademark</p>

    <div class="item" v-for="trade in ListTrade()" :key="trade">
      <p><input type="checkbox" class="form-check-input me-2" :value="trade"> {{ trade }}</p>
    </div>
    <div class="item error" v-if="Search &&! ListTrade().length">
      <p>No results found!</p>
    </div>
  </div>

  <!-- Price Range -->
  <div class="price-range py-3 border-bottom">
    <p class="price text-start" align="center">Price Range</p>
    <div class="item-2" v-for="price in ListPrice()" :key="price">
      <p><input type="checkbox" class="form-check-input me-2"> {{ price }}</p>
    </div>
  </div>

  <!-- Type -->
  <div class="type">
    <p class="type text-start" align="center">Type</p>
    <div class="item-3" v-for="type in ListType()" :key="type">
      <p><input type="checkbox" class="form-check-input me-2"> {{ type }}</p>
    </div>
  </div>
</template>

<script setup>

import {ref} from "vue";

let Search = ref("");

const trade = ["Panasonic", "Fukata", "Haichi", "Koenic", "Kosmo", "Chika", "Ching Hai", "Dreamer", "Haiki", "Hasaki", "Toshiba", "Midea", "Hatari", "Nakami", "Steba"];

function ListTrade() {
  return trade.filter((trade) =>
      trade.toLowerCase().includes(Search.value.toLowerCase())
  );
}

const price = ["50$ - 100$", "100$ - 300$", "300$ - 500$", "500$ - 700$", "700$ - 1000$", "1000$ above"];

function ListPrice() {
  return price
}

const type = ["Fan without the propeller", "Tower Fan"];

function ListType() {
  return type
}
</script>

<style>
.trade, .price, .type {
  color: var(--main-color-hover);
  font-size: 18px;
  letter-spacing: 2px;
}

.trademark p:hover, .price-range p:hover, .type p:hover {
  color: var(--main-color-hover);
  cursor: pointer;
}

.trademark {
  background-color: white;
  width: 200px;
  height: 630px;
}

.price-range {
  background-color: white;
  height: 300px;
  width: 200px;
}

.type {
  background-color: white;
  width: 200px;
}

p {
  font-size: 14px;
}
@media screen and (min-width: 992px) and (max-width: 1366px) {
  .trademark {
    width: 161px;
  }

  .price-range {
    width: 161px;
  }

  .type {
    width: 161px;
  }
}
</style>