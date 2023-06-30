<template>
  <section class="page_404">
    <div class="container">

      <div class="four_zero_four_bg">
        <h1 class="text-center">404</h1>
      </div>
      <div class="contant_box_404">
        <h3>
          Looks like you're lost
        </h3>
        <p>the page you are looking for not avaible!</p>
        <router-link :to="{ name: 'app.home' }" class="router">Home Page</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
*{
    letter-spacing: 0.5px;
}
.page_404 {
  letter-spacing: 1px;
  background: #fff;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
}

.text-center {
  font-size: 100px;
  letter-spacing: 5px;
  /* color: var(--main-color); */
  font-weight: bold;
  text-shadow: 0 0 3px var(--main-color-hover);
}

.four_zero_four_bg {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 500px;
  background-position: center;
  margin-top: 20px;
}

.contant_box_404 h3 {
  font-size: 55px;
  margin-top: -90px;
  font-weight: bold;
  text-shadow: 0 0 3px var(--main-color-hover);
}

.contant_box_404 p {
  font-size: 25px;
  text-shadow: 0 0 1px var(--main-color-hover);
  margin-top: 10px;
  margin-bottom: 20px;

}

.router {
  color: white;
  background-color: var(--main-color);
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 20px;
  text-decoration: none;
  font-weight: bold;
}
.router:hover{
  background-color: var(--main-color-hover);
  box-shadow: 0 0 3px black;
}

</style>
