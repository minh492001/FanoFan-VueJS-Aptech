<template>
  <div id="sidebar border-bottom" class="d-lg-block d-none">
    <ul class="navbar-nav">
      <li id="sidebar-li" class="nav-item">
        <div class="sidebar-router ms-2">
          <router-link
              id="router"
              class="nav-link"
              :to="{ name: 'app.fans.ceiling'}"
              >
<!--            <img src="../../public/assets/images/ceiling-fan.png" alt=""/>-->
            Ceiling Fan
          </router-link>
        </div>
      </li>

      <li id="sidebar-li" class="nav-item">
        <div class="sidebar-router ms-2">
          <router-link
              id="router"
              class="nav-link"
              :to="{ name: 'app.fans.table'}">
<!--<img src="../../public/assets/images/fan.png">-->
            Table Fan
          </router-link>
        </div>
      </li>

      <li id="sidebar-li" class="nav-item">
        <div class="sidebar-router ms-2">
          <router-link
              id="router"
              class="nav-link"
              :to="{ name: 'app.fans.floor'}">
<!--            <img src="../../public/assets/images/floor-fan.png" alt=""/>-->
            Floor Fan
          </router-link>
        </div>
      </li>

      <li id="sidebar-li" class="nav-item">
        <div class="sidebar-router ms-2">
          <router-link
              id="router"
              class="nav-link"
              :to="{ name: 'app.fans.box'}">
<!--            <img src="../../public/assets/images/box-fan.png" alt=""/>-->
            Box Fan
          </router-link>
        </div>
      </li>

      <li id="sidebar-li" class="nav-item">
        <div class="sidebar-router ms-2">
          <router-link
              id="router"
              class="nav-link"
              :to="{ name: 'app.fans.tower'}">
<!--            <img src="../../public/assets/images/bladeless-tower-fan.png" alt=""/>-->
              Tower Fan
          </router-link>
        </div>
      </li>

      <li id="sidebar-li" class="nav-item">
        <div class="sidebar-router ms-2">
          <router-link
              id="router"
              class="nav-link"
              :to="{ name: 'app.fans.ceilingisland'}">
<!--            <img src="../../public/assets/images/ceiling-island-fan.png" alt=""/>-->
              Ceiling Island Fan
          </router-link>
        </div>
      </li>

      <li id="sidebar-li" class="nav-item">
        <div class="sidebar-router ms-2">
          <router-link
              id="router"
              class="nav-link"
              :to="{ name: 'app.fans.batterycharge'}">
<!--            <img src="../../public/assets/images/charging.png" alt=""/>-->
              Battery Charge Fan
          </router-link>
        </div>
      </li>

      <li id="sidebar-li" class="nav-item">
        <div class="sidebar-router ms-2">
          <router-link
              id="router"
              class="nav-link"
              :to="{ name: 'app.fans.wall'}">
<!--            <img src="../../public/assets/images/wall-fan.png" alt=""/>-->
              <a>wall Fan</a>
          </router-link>
        </div>
      </li>

      <li id="sidebar-li" class="nav-item">
        <div class="sidebar-router ms-2">
          <router-link
              id="router"
              class="nav-link"
              :to="{ name: 'app.fans.industry'}">
<!--            <img src="../../public/assets/images/industry-fan.png" alt=""/>-->
              Industry Fan
          </router-link>
        </div>
      </li>

      <li id="sidebar-li" class="nav-item">
        <div class="sidebar-router ms-2">
          <router-link
              id="router"
              class="nav-link"
              :to="{ name: 'app.fans.solar'}">
<!--            <img src="../../public/assets/images/sun.png" alt=""/>-->
              Solar Power Fan
          </router-link>
        </div>
      </li>

      <li id="sidebar-li" class="nav-item">
        <div class="sidebar-router ms-2">
          <router-link
              id="router"
              class="nav-link"
              :to="{ name: 'app.fans.steam'}">
<!--            <img src="../../public/assets/images/steam-fan.png" alt=""/>-->
              Steam Fan
          </router-link>
        </div>
      </li>

      <li id="sidebar-li" class="nav-item">
        <div class="sidebar-router ms-2">
          <router-link
              id="router"
              class="nav-link"
              :to="{ name: 'app.fans.coolair'}">
<!--       <img src="../../public/assets/images/steam-fan.png" alt=""/>-->
              Air Cooler System
          </router-link>
        </div>
      </li>

      <li id="sidebar-li" class="nav-item">
        <div class="sidebar-router ms-2">
          <router-link
              id="router"
              class="nav-link"
              :to="{ name: 'app.fans.conditioner'}">
<!--            <img src="../../public/assets/images/steam-fan.png" alt=""/>-->
              Air Conditioner
          </router-link>
        </div>
      </li>

      <li id="sidebar-li" class="nav-item">
        <div class="sidebar-router ms-2">
          <router-link
              id="router"
              class="nav-link"
              :to="{ name: 'app.fans.conditionerfan'}">
<!--            <img src="../../public/assets/images/steam-fan.png" alt=""/>-->
            Conditioner Fan
          </router-link>
        </div>
      </li>

      <li id="sidebar-li" class="nav-item">
        <div class="sidebar-router ms-2">
          <router-link
              id="router"
              class="nav-link"
              :to="{ name: 'app.fans.ventilator'}">
<!--            <img src="../../public/assets/images/steam-fan.png" alt=""/>-->
              Ventilator
          </router-link>
        </div>
      </li>

      <li id="sidebar-li" class="nav-item">
        <div class="sidebar-router ms-2">
          <router-link
              id="router"
              class="nav-link"
              :to="{ name: 'app.fans.aircurtain'}">
<!--            <img src="../../public/assets/images/steam-fan.png" alt=""/>-->
              Curtain
          </router-link>
        </div>
      </li>
    </ul>
    <TrademarkAndType></TrademarkAndType>
  </div>

</template>

<script setup>
import TrademarkAndType from "@/components/TrademarkAndType";
</script>

<!-- <script>
    export default {
        data() {
            return {
                isActive: false
            }
        }
    }
</script> -->

<style lang="scss" scoped>
.sidebar-router {
  font-size: 26px;
}

#router {
  color: black;
  text-decoration: none;
  font-size: 14px;
  &.active {
    color: var(--main-color);
  }
}

p {
  padding-left: 7px;
}

ul li {
  list-style: none;
}

img {
  height: 20px;
  width: 20px;
}

#sidebar {
  background-color: white;
  width: 200px;
  height: 600px;
}

img {
  margin-right: 4px;
}

#router {
  display: block;
  width: 100%;
  padding: 5px;
  color:black
}

#router-logo {
  color: var(--main-color)
}

#sidebar-li:hover {
  background-color: var(--main-color-hover);
  /*border: 2px solid var(--main-color-hover);*/
  border-radius: 2px;
}

#sidebar-li:hover #router{
  color: white;
}
</style>
