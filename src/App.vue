<template>
  <div id="app">


    <!-- header-container start -->
    <div class="header-container">
      <!-- header start -->
      <!-- classes:  -->
      <!-- "fixed": enables fixed navigation mode (sticky menu) e.g. class="header fixed clearfix" -->
      <!-- "fixed-desktop": enables fixed navigation only for desktop devices e.g. class="header fixed fixed-desktop clearfix" -->
      <!-- "fixed-all": enables fixed navigation only for all devices desktop and mobile e.g. class="header fixed fixed-desktop clearfix" -->
      <!-- "dark": dark version of header e.g. class="header dark clearfix" -->
      <!-- "centered": mandatory class for the centered logo layout -->
      <!-- ================ -->
      <header class="header dark fixed fixed-all clearfix">
        <div class="container">
          <div class="row">
            <div class="col-md-auto hidden-md-down pl-3">
              <!-- header-first start -->
              <!-- ================ -->
              <div class="header-first clearfix">

                <!-- logo -->
                <div id="logo" class="logo">
                  <a href="template/index.html"><img id="logo_img" src="template/images/logo_light_blue.png" alt="The Project"></a>
                </div>

                <!-- name-and-slogan -->
                <div class="site-slogan">
                  Multipurpose HTML5 Template
                </div>

              </div>
              <!-- header-first end -->

            </div>
            <div class="col-lg-7 col-xl-8 ml-auto">
        
              <!-- header-second start -->
              <!-- ================ -->
              <div class="header-second clearfix">
                
              <!-- main-navigation start -->
              <!-- classes: -->
              <!-- "onclick": Makes the dropdowns open on click, this the default bootstrap behavior e.g. class="main-navigation onclick" -->
              <!-- "animated": Enables animations on dropdowns opening e.g. class="main-navigation animated" -->
              <!-- ================ -->
              <div class="main-navigation  animated">
                <nav class="navbar navbar-expand-lg navbar-light p-0">
                  <div class="navbar-brand clearfix hidden-lg-up">

                    <!-- logo -->
                    <div id="logo-mobile" class="logo">
                      <a href="index.html"><img id="logo-img-mobile" src="template/images/logo_light_blue.png" alt="The Project"></a>
                    </div>

                    <!-- name-and-slogan -->
                    <div class="site-slogan">
                      Multipurpose HTML5 Template
                    </div>

                  </div>
                  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar-collapse-1" aria-controls="navbar-collapse-1" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse scrollspy" id="navbar-collapse-1">
                    <!-- main-menu -->
                    <ul class="navbar-nav ml-lg-auto">
                      <li class="nav-item"><a v-if="!isLoggedIn()" class = "nav-item nav-link" href="#"><router-link to="/signup">Signup</router-link></a></li>
                      <li class="nav-item"><a v-if="!isLoggedIn()" class = "nav-item nav-link" href="#"><router-link to="/login">Login</router-link></a></li>
                      <li class="nav-item"><a v-if="isLoggedIn()" class = "nav-item nav-link" href="#"><router-link to="/logout">Logout</router-link></a></li>
                      <li class="nav-item"><a v-if="isLoggedIn()" class="nav-item nav-link" href="#"><router-link to="/users/me">My Profile</router-link></a></li>
                      <li class="nav-item"><a class="nav-item nav-link" href="#"><router-link to="/">Home</router-link></a></li>
                      <li class="nav-item"><a class="nav-item nav-link" href="#"><router-link to="/lists/Movies">Movies</router-link></a></li>
                      <li class="nav-item"><a class="nav-item nav-link" href="#"><router-link to="/lists/Restaurants">Restaurants</router-link></a></li>
                      <li><a class="nav-item nav-link" href="#"><router-link to="/lists/VideoGames">Video-Games</router-link></a></li>
                      <li class="nav-item"><a class="nav-item nav-link" href="#"><router-link to="/lists/Products">Products</router-link></a></li>
                    </ul>
                    <!-- main-menu end -->
                  </div>
                </nav>
              </div>
              <!-- main-navigation end -->
              </div>
              <!-- header-second end -->

            </div>
            <div class="col-auto ml-auto hidden-md-down">
              <!-- header dropdown buttons -->
              <div class="header-dropdown-buttons">
                <a target="_blank" href="https://wrapbootstrap.com/theme/the-project-multipurpose-template-WB0F82581" class="btn btn-default-transparent m-0">Purchase Now</a>
              </div>
              <!-- header dropdown buttons end-->
            </div>
          </div>
        </div>
      </header>
      <!-- header end -->
    </div>
    <!-- header-container end -->
    <div class="container">
      <router-view :key="$route.fullPath"></router-view>
    </div>
      <!-- .subfooter start -->
      <!-- ================ -->
      <div class="subfooter">
        <div class="container">
          <div class="subfooter-inner">
            <div class="row">
              <div class="col-md-12">
                <p class="text-center">Small Logo. I want to make this subfooter my main footer and have it be light gray.</p>
                <p class="text-center">Contact Us</p>
                <p class="text-center">Copyright © 2018. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- .subfooter end -->
    </footer>
    <!-- footer end -->



  </div>
</div>
</template>

<style>
</style>


<script>
export default {
  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem("jwt")) {
        return true;
      }
      return false;
    },
  },
  computed: {}
};
</script>





<!-- <div id="nav">
      <a v-if="!isLoggedIn()" class = "nav-item nav-link" href="#"><router-link to="/signup">Signup</router-link> | </a>  
      <a v-if="!isLoggedIn()" class = "nav-item nav-link" href="#"><router-link to="/login">Login</router-link> | </a> 
      <a v-if="isLoggedIn()" class = "nav-item nav-link" href="#"><router-link to="/logout">Logout</router-link> | </a>
      <a v-if="isLoggedIn()" class="nav-item nav-link" href="#"><router-link to="/users/me">My Profile</router-link> | </a>
      <a class="nav-item nav-link" href="#"><router-link to="/">Home</router-link> | </a>   
      <a class="nav-item nav-link" href="#"><router-link to="/lists/Movies">Movies</router-link> | </a>  
      <a class="nav-item nav-link" href="#"><router-link to="/lists/Restaurants">Restaurants</router-link> | </a>  
      <a class="nav-item nav-link" href="#"><router-link to="/lists/VideoGames">Video Games</router-link> | </a>  
      <a class="nav-item nav-link" href="#"><router-link to="/lists/Products">Products</router-link></a> 
    </div> -->