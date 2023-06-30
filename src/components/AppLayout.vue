<template>
  <div>
    <header id="header">
     <TheHeader></TheHeader>
    </header>
    <section class="app-layout-container">
      <main class="d-flex flex-row">
        <the-side-bar id="sidebar"></the-side-bar>
        <div class="view-container">
          <div class="view">
            <div class="bg-white">
              <type-header></type-header>
            </div>
            <div class="router-view-common bg-white">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </main>
    </section>

    <footer id="footer">
      <the-footer></the-footer>
    </footer>
  </div>
</template>

<script setup>
import TypeHeader from "@/components/TypeHeader";
import TheHeader from "@/components/TheHeader";
import TheSideBar from './TheSideBar.vue';
import TheFooter from './TheFooter.vue';
</script>

<style scoped>
.app-layout-container{
  background-color: #E3E6E6;
}
#header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 65px;
  z-index: 1100;
}

main {
  min-height: 100px;
  margin: 34px auto 0 auto;
  width: 100%;
  padding: 30px 0 0 0;
}

#sidebar {
  background-color: white;
  min-width: 12%;
  height: auto;
  position: relative;
}


.view-container {
  background-color: #fff;
  width: 88%;
  border-left: 1px solid #ececec;
}

.view {
  width: 97%;
  min-height: 100px;
  background-color: #DEE2E6;
}
@media screen and (max-width: 991px){
  main{
    padding: 16px 10px 0 10px;
  }
  .view-container{
    width: 100%;
  }
}
</style>