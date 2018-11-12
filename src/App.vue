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
                      <li class="nav-item"><a href="#multipages" class="nav-link smooth-scroll">Main Home Pages</a></li>
                      <li class="nav-item"><a href="#onepages" class="nav-link smooth-scroll">One Pages</a></li>
                      <li class="nav-item"><a href="#commerce" class="nav-link smooth-scroll">Shop</a></li>
                      <li class="nav-item"><a href="#blog" class="nav-link smooth-scroll">Blog</a></li>
                      <li class="nav-item"><a href="#sliders" class="nav-link smooth-scroll">Sliders</a></li>
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
    <router-view :key="$route.fullPath"></router-view>

    <!-- footer top start -->
    <!-- ================ -->
    <div class="dark-bg footer-top animated-text default-hovered">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="call-to-action text-center">
              <div class="row">
                <div class="col-md-8">
                  <h2 class="mt-3">Powerful Bootstrap Template</h2>
                  <h2 class="mt-3">Waste no more time</h2>
                </div>
                <div class="col-md-4">
                  <p class="mt-10"><a href="https://wrapbootstrap.com/theme/the-project-multipurpose-template-WB0F82581" target="_blank" class="btn btn-animated btn-lg btn-gray-transparent">Purchase<i class="fa fa-cart-arrow-down pl-20"></i></a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- section end -->

    <!-- footer start (Add "dark" class to #footer in order to enable dark footer) -->
    <!-- ================ -->
    <footer id="footer" class="clearfix dark">

      <!-- .footer start -->
      <!-- ================ -->
      <div class="footer py-5">
        <div class="container">
          <div class="footer-inner">
            <div class="row justify-content-lg-center">
              <div class="col-lg-6">
                <div class="footer-content text-center padding-ver-clear">
                  <h3 class="logo-font mt-3">The <span class="text-default">Project</span></h3>
                  <p class="mb-5">Multipurpose HTML5 template</p>
                </div>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col-md-4">
                <ul class="nav flex-column list-style-icons">
                  <li class="nav-item"><i class="fa fa-check pr-1 text-default"></i> 190+ HTML files</li>
                  <li class="nav-item"><i class="fa fa-check pr-1 text-default"></i> Sit dolor amet</li>
                  <li class="nav-item"><i class="fa fa-check pr-1 text-default"></i> Lorem Ipsum</li>
                  <li class="nav-item"><i class="fa fa-check pr-1 text-default"></i> 28 Home Pages</li>
                  <li class="nav-item"><i class="fa fa-check pr-1 text-default"></i> E-commerce/Shop Pages</li>
                  <li class="nav-item"><i class="fa fa-check pr-1 text-default"></i> One Pages</li>
                  <li class="nav-item"><i class="fa fa-check pr-1 text-default"></i> Comming Soon + Countdown</li>
                  <li class="nav-item"><i class="fa fa-check pr-1 text-default"></i> Video Background</li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul class="nav flex-column list-style-icons">
                  <li class="nav-item"><i class="fa fa-check pr-1 text-default"></i> Sass files included</li>
                  <li class="nav-item"><i class="fa fa-check pr-1 text-default"></i> Clean and Resposive Design</li>
                  <li class="nav-item"><i class="fa fa-check pr-1 text-default"></i> Well Documented</li>
                  <li class="nav-item"><i class="fa fa-check pr-1 text-default"></i> W3C validated</li>
                  <li class="nav-item"><i class="fa fa-check pr-1 text-default"></i> After sale support</li>
                  <li class="nav-item"><i class="fa fa-check pr-1 text-default"></i> 14+ Header options</li>
                  <li class="nav-item"><i class="fa fa-check pr-1 text-default"></i> Many Components</li>
                  <li class="nav-item"><i class="fa fa-check pr-1 text-default"></i> Elegant Design</li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul class="nav flex-column list-style-icons">
                  <li class="nav-item"><i class="fa fa-check pr-1 text-default"></i> Reusable elements</li>
                  <li class="nav-item"><i class="fa fa-check pr-1 text-default"></i> Blog pages</li>
                  <li class="nav-item"><i class="fa fa-check pr-1 text-default"></i> Portfolio pages</li>
                  <li class="nav-item"><i class="fa fa-check pr-1 text-default"></i> 14 predifined skins</li>
                  <li class="nav-item"><i class="fa fa-check pr-1 text-default"></i> Great design</li>
                  <li class="nav-item"><i class="fa fa-check pr-1 text-default"></i> HTML email templates</li>
                  <li class="nav-item"><i class="fa fa-check pr-1 text-default"></i> Google Maps</li>
                  <li class="nav-item"><i class="fa fa-check pr-1 text-default"></i> And many more</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- .footer end -->
    
      <!-- .subfooter start -->
      <!-- ================ -->
      <div class="subfooter">
        <div class="container">
          <div class="subfooter-inner">
            <div class="row">
              <div class="col-md-12">
                <p class="text-left">App Name</p>
                <p class="text-right">Copyright © 2018. All rights reserved.</p>
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
      <div>
       <div>
        <ul>
          <li v-else><router-link to="/userslogin">Login</router-link></li>
          <li v-else><router-link to="/userssignup">Signup</router-link></li>
          <li v-if="isUser()"><router-link to="/users/me">Profile</router-link></li>

          <li v-if="isLoggedIn()"><router-link to="/logout">Logout</router-link></li>

        </ul>
      </div> 

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