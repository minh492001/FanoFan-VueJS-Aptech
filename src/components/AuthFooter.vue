<template>
  <footer>
    <h6 align="center"><a href="home">Back To FANoFAN</a></h6>
    <div class="container-fluid" id="bg">
      <div class="row">
        <div class="col-2">
          <img src="/assets/images/LLLL.png" class="logo-2">
        </div>
        <div class="col-2">
          <ul>
            <li><a href="#" class="txt-0">FANoFAN News</a></li>
            <li><a href="#" class="txt-0">FANoFAN.com</a></li>
            <li><a href="#" class="txt-0">Careers</a></li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <li><a href="#" class="txt-0">Press Center</a></li>
            <li><a href="#" class="txt-0">Investor Resources</a></li>
            <li><a href="#" class="txt-0">Facts about Amazon</a></li>
          </ul>
        </div>
      </div>
      <div class="icon-mxh">
        <a href="" class="txt-6"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="" class="txt-6"><i class="fa-brands fa-instagram"></i></a>
        <a href="" class="txt-6"><i class="fa-solid fa-inbox"></i></a>
        <a href="" class="txt-6"><i class="fa-brands fa-twitter"></i></a>
        <a href="" class="txt-6"><i class="fa-brands fa-youtube"></i></a>
        <br>
        <br>
        <p><a href="" class="txt-0">FANoFAN.com</a> | <a href="" class="txt-0">Conditions of Use</a> | © 1996-2023 FANoFAN.com, Inc. or its affiliates</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default{
  name: 'BackToTop',
    data (){
        return {
            isTop: false
        }
    },
    methods: {
        scrollToTop() {
          window.scrollTo(top);
        },
    },
    mounted(){
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if(scrollPos >= 100){
                that.isTop = true
            } else {
                that.isTop = false
            }
        })
    }
}
</script>

<style scoped>

#bg{
  background-color: #04485D !important;
  width: 100%;
  height: 45vh;
  padding-left: 50px;
}

.icon-mxh{
  margin-top: 90px;
  color: white;
  padding: 20px;
}

.txt-0{
  color:white;
}

.txt-6{
  color:white;
  padding: 20px;
}

.txt-0:hover{
  color: white;
  text-decoration-line: underline;
}

.txt-6:hover{
  color: white;
  text-decoration-line: underline;
}

ul li {
  margin-top: 30px;
  list-style: none;
}

p{
  color: silver;
  font-size: 17px;
}


.logo-2{
  width: 100px;
  height: 30px;
  margin-top: 30px;
}



h5{
  color: var(--main-color);
  padding-left: 30px;
  font-size: 30px;
}



a{
  color: black;
  text-decoration: none;
}

a:hover{
  color: black;
  text-decoration-line: underline;
}

img{
  width: 100%;
  height: 300px;
}


.dropdown-content a {
  color: black;
  padding: 0 auto;
  width: 300px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: white; text-decoration-line: underline; width: 200px;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: white; text-decoration-line: underline;}

</style>