<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
    <div class="container">
      <router-link :to="{name:'app.home'}">
        <img src="/assets/images/LLLL.png" class="logo" alt="">
      </router-link>

      <form class="search-h">
        <button class="btn-s"><i class="fa-solid fa-magnifying-glass"></i></button>
        <input class="search-s" type="search" placeholder="Search">
      </form>
      <div class="content-head">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="d-flex justify-content-center">
            <li class="nav-item dropdown">
              <div class="dropdown">
                <button class="dropbtn">Who We Are</button>
                <div class="dropdown-content">
                  <a href="#"><h4>Who We Are</h4></a>
                  <hr>
                  <a href="#">Leadership Principles</a>
                  <a href="#">Our Positions</a>
                  <a href="">Public Policy</a>
                  <a href="">Awards and Recognition</a>
                  <a href="">Facts About FANoFAn</a>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <div class="dropdown">
                <button class="dropbtn">What We Do</button>
                <div class="dropdown-content">
                  <a href="#"><h4>What We Do</h4></a>
                  <hr>
                  <a href="#">FANoFAN Store</a>
                  <a href="#">Delivery and Logistics</a>
                  <a href="">Devices and Services</a>
                  <a href="">FANoFAN Web Services</a>
                  <a href="">Entertainment</a>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <div class="dropdown">
                <button class="dropbtn">Our Workplace</button>
                <div class="dropdown-content">
                  <a href="#"><h4>Our Workplace</h4></a>
                  <hr>
                  <a href="#">Our Employees</a>
                  <a href="#">Employee Benefits</a>
                  <a href="">Diversity, Equity, and Inclusion</a>
                  <a href="">Upskilling and Training</a>
                  <a href="#">Safety at Amazon</a>
                  <a href="">Facilities</a>
                  <a href="">Corporate Offices</a>
                  <a href="">FANoFAN Fulfillment Center Tours</a>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <div class="dropdown">
                <button class="dropbtn">Our Planet</button>
                <div class="dropdown-content">
                  <a href="#"><h4>Our Workplace</h4></a>
                  <hr>
                  <a href="#">The Climate Pledge</a>
                  <a href="#">Sustainable Operations</a>
                  <a href="">Improving Packaging</a>
                  <a href="">Our Supply Chain</a>
                  <a href="">Sustainability Website</a>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <div class="dropdown">
                <button class="dropbtn"><i class="fa-solid fa-envelope"></i> Subscribe</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div class="container mt-4">
    <div class="row">
      <div class="col-3">
        <p>NEWSFEED</p>
        <hr>
        <a href="">
          FANoFAN completed its acquisition of One Medical
        </a>
        <hr>
        <a href="">
          FANoFAN ranks No.1 in the American Customer Satisfaction Index
        </a>
        <hr>
        <a href="">
          FANoFAn teams up with Virginia students to inspire climate careers
        </a>
        <hr>
        <a href="">
          FANoFAN commits $25 million to housing fund across Washington state
        </a>
        <hr>
        <a href="">
          FANoFAN helps communities impacted by the earthquake in Türkiye and Syria
        </a>
        <hr>
        <a href="">
          <strong>More news releases</strong>
        </a>
      </div>

      <div class="col-6">
        <img src="/assets/images/sip.png" alt="">
        <div class="txt">
          <a href="" class="title">
            <strong>3 ways FANoFAN supports its customers every day</strong>
          </a>
          <br>
          <a href="">
            FANoFAN has always focused on creating a trusted shopping experience for its customers. Learn how our
            mission to become Earth’s most customer-centric company honors World Consumer Rights Day.
          </a>
          <br>
          <a href="">
            <strong>Read more</strong>
          </a>
        </div>
      </div>

      <div class="col-3">
        <p>TOP STORIES</p>
        <hr>
        <a href="">
          Here’s your first look at Project Kuiper’s low-cost customer terminals
        </a>
        <hr>
        <a href="">
          FANoFAn employees in 14 countries can now learn English and other local languages via pre-paid classes
        </a>
        <hr>
        <a href="">
          How the nation’s largest classroom—PBS—uses LDK to teach everyone
        </a>
        <hr>
        <a href="">
          Announcing a new resource to learn more about your Prime member benefits
        </a>
        <hr>
        <!-- <a href="">
            FANoFAN helps communities impacted by the earthquake in Türkiye and Syria
        </a> -->
        <!-- <hr> -->
        <a href="">
          <strong>See all stories</strong>
        </a>
      </div>
    </div>
  </div>

  <div class="container mb-5" id="con">
    <hr>
    <div class="tabs">
      <div class="nav-tabs">
        <div class="nav-items" @click="setActive('tab-1')" :class="{'active' : isActive('tab-1') }">
          <strong>Trending now</strong>
        </div>
        <div class="nav-items" @click="setActive('tab-2')" :class="{'active' : isActive('tab-2') }">
          <strong>Watch videos</strong>
        </div>
        <div class="nav-items" @click="setActive('tab-3')" :class="{'active' : isActive('tab-3') }">
          <strong>Meet us</strong>
        </div>
      </div>
      <div class="tab-content">
        <div class="pane" v-show="isActive('tab-1')">
          <div class="for-example">
            <div class="row">
              <div class="col-3" id="content">
                <a href="">
                  <img src="/assets/images/em.jpg" class="img">
                </a>
                <br>
                <a href="">
                  How FANoFAN helps employees learn and earn more
                </a>
                <br>
                <br>
                <div class="sp">
                  <a href="">
                    <strong>
                      Read more
                    </strong>
                  </a>
                  <a class="rght">
                    January 28, 2023
                  </a>
                </div>
              </div>

              <div class="col-3" id="content">
                <a href="">
                  <img src="/assets/images/dua.png" class="img">
                </a>
                <br>
                <a href="">
                  Olivia Wilde directs an inspiring new commercial in FANoFAN perimeria campaign
                </a>
                <br>
                <div class="sp">
                  <a href="">
                    <strong>
                      Read more
                    </strong>
                  </a>
                  <a class="rght" disabled>
                    March 13, 2023
                  </a>
                </div>
              </div>

              <div class="col-6" id="content-signup">
                <h5>FANoFAN</h5>
                <p class="txt">Sign up for the latest news, facts, analysis, and original stories about FANoFAN
                  delivered to you.</p>
                <input
                    @click="toggleBorderColor()" :class="[SearchClass ,'search']"
                    type="email" class="email"
                    placeholder="Enter your email"
                >
                <button class="btn-7">
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
                <br>
                <p class="txt-2">
                  Protected by reCAPTCHA. The Google <a href="" class="txt-5">Privacy Policy</a> and <a href=""
                                                                                                        class="txt-5">Terms
                  of Service</a> apply.
                  <a href="" class="txt-5">Privacy Policy</a> | Opt out anytime
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="pane" v-show="isActive('tab-2')">
          <div class="for-example">
            <div class="row">
              <div class="col-3" id="content">
                <a href="">
                  <img src="/assets/images/film.jpg" class="img">
                </a>
                <br>
                <a href="">
                  Primeria Video releases behind-the-scenes footage from ‘The Lord of the Rings: The Rings of Power’
                </a>
                <br>
                <div class="sp">
                  <a href="">
                    <strong>
                      Read more
                    </strong>
                  </a>
                  <a class="rght">
                    January 28, 2023
                  </a>
                </div>
              </div>

              <div class="col-3" id="content">
                <a href="">
                  <img src="/assets/images/em2.jpg" class="img">
                </a>
                <br>
                <a href="">
                  How a delivery station manager from New Jersey found career success at FANoFAN without a college
                  degree
                </a>
                <br>
                <div class="sp">
                  <a href="">
                    <strong>
                      Read more
                    </strong>
                  </a>
                  <a class="rght" disabled>
                    March 13, 2023
                  </a>
                </div>
              </div>

              <div class="col-6" id="content-signup">
                <h5>FANoFAN</h5>
                <p class="txt">Sign up for the latest news, facts, analysis, and original stories about FANoFAN
                  delivered to you.</p>
                <input
                    @click="toggleBorderColor()" :class="[SearchClass ,'search']"
                    type="email" class="email"
                    placeholder="Enter your email"
                >
                <button class="btn-7">
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
                <br>
                <p class="txt-2">
                  Protected by reCAPTCHA. The Google <a href="https://policies.google.com/privacy" class="txt-5">Privacy
                  Policy</a> and <a href="" class="txt-5">Terms of Service</a> apply.
                  <a href="" class="txt-5">Privacy Policy</a> | Opt out anytime
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="pane" v-show="isActive('tab-3')">
          <div class="for-example">
            <div class="row">
              <div class="col-3" id="content">
                <a href="">
                  <img src="/assets/images/bg3.png" class="img">
                </a>
                <br>
                <a href="">
                  This FANoFAN employee has her dream job collaborating with stars like Dolly Parton and sharing new
                  music with millions of country fans
                </a>
                <br>
                <div class="sp">
                  <a href="">
                    <strong>
                      Read more
                    </strong>
                  </a>
                  <a class="rght">
                    January 4, 2023
                  </a>
                </div>
              </div>

              <div class="col-3" id="content">
                <a href="">
                  <img src="/assets/images/bg0.png" class="img">
                </a>
                <br>
                <a href="">
                  "I feel welcomed, I feel included, I feel seen, and able to be me."
                </a>
                <br>
                <br>
                <br>
                <div class="sp">
                  <a href="">
                    <strong>
                      Read more
                    </strong>
                  </a>
                  <a class="rght">
                    October 27, 2022
                  </a>
                </div>
              </div>

              <div class="col-6" id="content-signup">
                <h5>FANoFAN</h5>
                <p class="txt">Sign up for the latest news, facts, analysis, and original stories about FANoFAN
                  delivered to you.</p>
                <input
                    @click="toggleBorderColor()" :class="[SearchClass ,'search']"
                    type="email" class="email"
                    placeholder="Enter your email"
                >
                <button class="btn-7">
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
                <br>
                <p class="txt-2">
                  Protected by reCAPTCHA. The Google <a href="" class="txt-5">Privacy Policy</a> and <a href=""
                                                                                                        class="txt-5">Terms
                  of Service</a> apply.
                  <a href="" class="txt-5">Privacy Policy</a> | Opt out anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AuthFooter></AuthFooter>
</template>

<script>
import AuthFooter from "@/components/AuthFooter";

let SearchClass = "border-color-1";
export default {
  data() {
    return {
      SearchClass: "border-color-1",
      activeTab: 'tab-1',
    }
  },
  methods: {
    toggleBorderColor() {
      if (SearchClass === "border-color-1") {
        this.SearchClass = "border-color-2";
      } else {
        this.SearchClass = "border-color-1";
      }
    },
    setActive(tab) {
      this.activeTab = tab

    },
    isActive(tab) {
      return this.activeTab === tab;
    }
  },
  components: {AuthFooter}
};

</script>

<style lang="scss" scoped>

#bg {
  background-color: #02636f;
  width: 100%;
  height: 55vh;
  padding-left: 50px;
}

.icon-mxh {
  margin-top: 90px;
  color: white;
  padding: 20px;
}

.txt-0 {
  color: white;
}

.txt-6 {
  color: white;
  padding: 20px;
}


.txt-0:hover {
  color: white;
  text-decoration-line: underline;
}

.txt-6:hover {
  color: white;
  text-decoration-line: underline;
}

ul li {
  margin-top: 30px;
}

p {
  color: #7d8185;
  font-size: 17px;
}

#head {
  background-color: #f1f6f6;
  display: flex;
}

#content-signup {
  background-color: #18202a;
  padding: 40px 20px;
  color: white;
}

.logo-2 {
  width: 100px;
  height: 60px;
  margin-top: 30px;
}

.border-color-1 {
  border: none;
  border-bottom: 2px solid white;
}

.border-color-2 {
  border: none;
  border-bottom: 2px solid var(--main-color);
}

.logo {
  width: 150px;
  height: 40px;
}

.txt-2 {
  padding: 20px;
  color: white;
}

.txt-5 {
  color: white;
  text-decoration-line: underline;
}

#sheader {
  margin-left: 20px;
  outline: none;
  padding: 4px;
  border: 2px solid var(--main-color);
  border-radius: 100px;
  font-size: 15px;
}

.txt-5:hover {
  color: white;
  text-decoration-line: underline;
}

h5 {
  color: var(--main-color);
  padding-left: 30px;
  font-size: 30px;
}

.tabs {
  width: 100%;
  margin: 0 auto;
}

.nav-tabs {
  display: flex;
  justify-content: space-between;
}

.nav-items {
  color: black;
  transition: all 150ms;
  cursor: pointer;
  height: 150px;
  width: 31.5%;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  &.active {
    color: var(--main-color);
  }
}

a {
  color: black;
  text-decoration: none;
}

a:hover {
  color: black;
  text-decoration-line: underline;
}

img {
  width: 100%;
  height: 300px;
}

.btn-7 {
  border: none;
  background-color: #18202a;
  color: white;
}

.img {
  width: 300px;
  height: 200px;
}

.rght {
  margin-left: 90px;
  font-size: 16px;
  color: #898a9e;
}

.sp {
  margin-top: 50px;
}

#con {
  top: 20%;
}

.email {
  width: 500px;
  outline: none;
  padding: 7px;
  background-color: #18202a;
  color: white;
  margin-left: 20px;
}

.title {
  font-size: 30px;
}

.txt {
  margin-left: 20px;
}

.dropbtn {
  background-color: white;
  color: black;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
  margin-top: 4px;
  margin-left: 10px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  width: 300px;
  padding: 50px;
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 0 auto;
  width: 300px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: white;
  text-decoration-line: underline;
  width: 200px;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: white;
  text-decoration-line: underline;
}

.search-s {
  outline: none;
  border: 0px;
  padding-left: 10px;
}

.search-h {
  border: 2px solid var(--main-color);
  padding: 4px 5px;
  border-radius: 100px;
  margin-right: 330px;
}

.btn-s {
  outline: none;
  border: 0px;
  background-color: white;
}

@media screen and (max-width: 1366px) {
  .search-h[data-v-4fd998ea] {
    margin-right: 0;
  }
}
</style>