<template>
  <div id="app">
    <div id="nav">
      <div>
       <!-- <div>
        <ul>
          <li v-else><router-link to="/userslogin">Login</router-link></li>
          <li v-else><router-link to="/userssignup">Signup</router-link></li>
          <li v-if="isUser()"><router-link to="/users/me">Profile</router-link></li>
          <li v-if="isLoggedIn()"><router-link to="/logout">Logout</router-link></li>
        </ul>
      </div> -->
      <a v-if="!isLoggedIn()" class = "nav-item nav-link" href="#"><router-link to="/signup">Signup</router-link> | </a>  
      <a v-if="!isLoggedIn()" class = "nav-item nav-link" href="#"><router-link to="/login">Login</router-link> | </a> 
      <a v-if="isLoggedIn()" class = "nav-item nav-link" href="#"><router-link to="/logout">Logout</router-link> | </a>
      <a v-if="isLoggedIn()" class="nav-item nav-link" href="#"><router-link to="/users/me">My Profile</router-link> | </a>
      <a class="nav-item nav-link" href="#"><router-link to="/">Home</router-link> | </a>   
      <a class="nav-item nav-link" href="#"><router-link to="/lists/?category=Movies">Movies</router-link> | </a>  
      <a class="nav-item nav-link" href="#"><router-link to="/lists/?category=Restaurants">Restaurants</router-link> | </a>  
      <a class="nav-item nav-link" href="#"><router-link to="/lists/?category=VideoGames">Video Games</router-link> | </a>  
      <a class="nav-item nav-link" href="#"><router-link to="/lists/?category=Products">Products</router-link></a> 
    </div>
    <router-view/>
  </div>
</div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
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