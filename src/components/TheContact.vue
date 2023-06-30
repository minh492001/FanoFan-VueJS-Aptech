<template>
  <div class="header">
    <div class="shadow p-3 mb-5 bg-body rounded">
      <div class="container-fluid">
        <div class="row">
          <div class="col-2">
            <router-link :to="{name:'app.home'}"> <img src="/assets/images/LLLL.png" alt=""></router-link>
          </div>
          <div class="col-8 main-hed">
              <a href="">Product</a>
              <a href="">Use cases</a>
              <a href="">Devoloper</a>
              <a href="">Company</a>
              <a href="">Pricing</a>
          </div>
          <div class="col-2 main-hed">
            <a href="">Sign in <i class="fa-solid fa-right-to-bracket"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="font">
      <div class="content ">
      <h1>Contact Us</h1>
      <form action="">
        <div class="container-fluid mb-5">
          <div class="row">
            <div class="col-6">
              <table class="form">
                <tr>
                  <td>
                    <label class="mb-2" for=""><strong>FULL NAME</strong></label>
                    <input type="text" class="w-100" placeholder="Full Name">
                  </td>
                  <td>
                    <label class="mb-2" for=""><strong>EMAIL ADDRESS</strong></label>
                    <input type="text" class="w-100" placeholder="Email Address">
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <label class="mb-2"><strong>SUBJECT</strong></label><br>
                    <input type="text" class="w-100" placeholder="Subject">
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <label class="mb-2"><strong>PHONE NUMBER</strong></label><br>
                    <input type="text" class="w-100" placeholder="Phone number">
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <label class="mb-2"><strong>MESSAGE</strong></label><br>
                    <textarea class="w-100" placeholder="Tell us more about Project"></textarea>
                  </td>
                </tr>
                <tr>
                  <td colspan="2"><button class="btn-send">Send</button></td>
                </tr>
              </table>
            </div>
              <div class="col-6">
                <p class="contact-text"><strong>Wish Stripe you can:</strong></p>
                <ul>
                  <li><i class="fa-regular fa-circle-check"></i> Focus critical developer new source on your code business</li>
                  <li><i class="fa-regular fa-circle-check"></i> Launch new product with less payments code</li>
                  <li><i class="fa-regular fa-circle-check"></i> Imposible comention form international customer</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577317.9718771386!2d37.3855235!3d55.58202595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2zTcOhdC14Y8ahLXZhLCBOZ2E!5e0!3m2!1svi!2s!4v1680082652232!5m2!1svi!2s" class="w-100 map-2" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </form>
      </div>
    </div>
    <br>
    <AuthFooter></AuthFooter>
  </div>
</template>

<script>
import AuthFooter from "@/components/AuthFooter";
export default {
  name: "TheContact",
  components:{AuthFooter}
}
</script>

<style  scoped>
.header{
  background-color: #f3f3f3;
}
img{
  height: 50px;
  width: 200px;
}
.btn-send{
  width: 100%;
  padding: 10px 0;
  border: none;
  background-color: #0b6987;
  color:white;
}
.contact-text{
  font-size: 29px;
  color: #0b6987;
  margin-left: 50px;
}

ul li{
  list-style: none;
  padding: 20px;
  font-size: 18px;
  color: #006f6b;
}

h1{
  margin-bottom: 30px;
  text-align: center;
  padding: 20px;
}

td{
  padding: 10px;
}

#contact{
  padding: 0px;
}

.main-hed{
  text-align: center;
  padding: 20px;

}

.map-2{
  height: 400px;
}

a{
  padding: 20px;
  cursor: pointer;
  font-size: 19px;
  text-decoration: none;
  color: black;

}

a:hover{
  padding: 20px;
  cursor: pointer;
  font-size: 19px;
  color: #00c8bb;
}

.label{
  color: black;
  padding: 10px;
}

input{
  outline: none;
  padding: 10px;
  border: 0px;
  font-size: 18px;
  background-color:  #f3f3f3
}

textarea{
  outline: none;
  padding: 10px;
  border: 0px;
  font-size: 18px;
  background-color: #e8ebf0;
  height: 150px;
}

.form{
  width: 100%;
  margin-left: 30px;
}

.font{
  padding: 20px;
  background-color: white;
  margin: 0 200px;
}

</style>