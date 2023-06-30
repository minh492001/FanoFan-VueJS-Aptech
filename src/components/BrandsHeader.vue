<template>
  <div class="brands-list d-flex flex-row row">
    <div class="brands p-0" v-for="(brand,index) in brands" :key="index">
      <span @click="emit('changeBrand',brand.name)" class="brand-title">{{ brand.name }}</span>
    </div>
  </div>

</template>

<script setup>
import {computed, defineEmits} from "vue";
import store from "@/store";

const emit = defineEmits(['changeBrand'])

const brands = computed(() => store.state.brands)
</script>

<style scoped>
.brands-list{
  border-top: 1px solid #ececec;
  padding: 18px;
}
.brands {
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 33px;
  border: 1px solid #CED4DA;
  border-radius: 3px;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 6px;
}

.brand-title{
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 3px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  color: #22534e;
  cursor: pointer;
}
.brand-title:hover{
  background-color: rgb(241, 239, 239);
  border: none;
}
@media screen and (min-width: 1167px) and (max-width: 1366px) {
  .brands {
    width: 69px;
  }
  .brand-title{
    font-size: 14px;
  }
}
@media screen and (max-width: 1168px) {
  .brands-list {
    border-top: 1px solid #ececec;
    padding: 30px 0 18px 0;
    width: 1012px;
  }
  .brands {
    width: 62px;
  }
  .brand-title{
    font-size: 12px;
  }
}
@media screen and (max-width: 990px) {
  .brands-list {
    border-top: 1px solid #ececec;
    padding: 30px 0 18px 0;
  }
  .brands {
    width: 92px;
    height: 29px;
  }
}
</style>