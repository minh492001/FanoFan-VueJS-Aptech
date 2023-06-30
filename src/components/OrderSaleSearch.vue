<template>
  <div class="container-fluid mb-4 mt-2">
    <div class="row row-order">
      <div class="col-xxl-7 col-xl-8 col-lg-8 col-12 d-flex align-items-center p-lg-0 p-3" id="orderby">
        <div class="pb-2">
          <button class="btn me-2">Best Seller<i class="ms-2 fa-solid fa-bolt"></i></button>
          <button class="btn me-2" @click="emit('sortDescAsc','desc')">Price desc<i
              class="ms-2 fa-solid fa-arrow-down-short-wide"></i></button>
          <button class="btn me-2" @click="emit('sortDescAsc','asc')">Price asc<i
              class="ms-2 fa-solid fa-arrow-up-wide-short"></i></button>
          <button class="btn me-2">Newest<i class="ms-2 fa-solid fa-flag"></i></button>
          <button class="btn me-2">Discount<i class="ms-2 fa-solid fa-minus"></i></button>
          <button class="btn me-2 d-xl-inline d-none"><i class="fa-regular fa-star me-2"></i>Suggest to you</button>
        </div>
      </div>

      <div class="col-xxl-5 col-xl-4 col-lg-4 col-12 p-lg-0 p-3">
        <form class="search pb-2">
          <div class="search__wrapper">
            <form @submit.prevent="emit('search',searchValue)">
              <input type="text" v-model="searchValue" name="search"
                     placeholder="Search for..." class="search__field">
            </form>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineEmits,ref} from "vue";
let searchValue = ref('')
const emit = defineEmits(['sortDescAsc', 'search'])
</script>


<style scoped>
.btn {
  border-radius: 7px;
  border: none;
  background-color: rgb(227, 227, 227);
  color: #22534e
}

.row-order {
  border-bottom: 1px solid #ececec;
}

.btn:hover {
  background-color: white;
  border: 1px solid #22534e;
  transition: all 0.5s ease-in-out;
}

.btn i {
  color: #22534e;
}

.search__field {
  margin-left: 30px;
  border-radius: 7px;
  border: none;
  height: 47px;
  width: 98%;
  background-color: rgb(241, 239, 239);
  padding: 0 10px;
  outline: none;
}

button {
  border: 0px solid white;
  background: white;
}

@media screen and (min-width: 992px) and (max-width: 1366px) {
  .search__field[data-v-15623e3d] {
    margin: 0;
    height: 40px;
    width: 100%;
  }
  button:last-of-type{
    width: 122px;
    font-size: 13px;
    padding: 10px 5px;
  }
  button{
    font-size: 13px;
    padding: 10px 5px;
  }
}
@media screen and (max-width: 991px) {
  .search__field[data-v-15623e3d] {
    margin: 0;
    height: 40px;
    width: 100%;
  }
}
</style>