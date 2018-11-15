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
        <input v-model="itemName" type="text" name="text" class="search" placeholder="Search..">
        <input v-on:click="submit()" type="submit"> | 
      <a v-if="!isLoggedIn()" class = "nav-item nav-link" href="#"><router-link to="/signup">Signup</router-link> | </a>  
      <a v-if="!isLoggedIn()" class = "nav-item nav-link" href="#"><router-link to="/login">Login</router-link> | </a> 
      <a v-if="isLoggedIn()" class = "nav-item nav-link" href="#"><router-link to="/logout">Logout</router-link> | </a>
      <a v-if="isLoggedIn()" class="nav-item nav-link" href="#"><router-link to="/users/me">My Profile</router-link> | </a>
      <a class="nav-item" href="#"><router-link to="/">Home</router-link> | </a>   
      <a class="nav-item" href="#"><router-link to="/lists/categories/Television">Movies</router-link> | </a>  
      <a class="nav-item" href="#"><router-link to="/lists/categories/Restaurants">Restaurants</router-link> | </a>  
      <a class="nav-item" href="#"><router-link to="/lists/categories/VideoGames">Video Games</router-link> | </a>  
      <a class="nav-item" href="#"><router-link to="/lists/categories/Products">Products</router-link></a> 
    </div>
    <router-view :key="$route.fullPath"></router-view>
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

form.example button {
  float: left;
  width: 20%;
  padding: 10px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
}
</style>


<script>
  var axios = require('axios');

export default {
    data: function() {
      return {
        itemName: "",
      };
    },
    methods: {
      isLoggedIn: function() {
        if (localStorage.getItem("jwt")) {
          return true;
        }
        return false;
      },
      submit: function() { 
        console.log(this.searchTerm);

        this.$router.push("/items/names/" + this.itemName);
        //Send router to items index frontend. Interpolate items name into the route
        //Make items index view
      },
    },

    computed: {}
};
</script>













<!-- 

<h1>Pure CSS Star Rating Widget</h1>
<fieldset class="rating">
    <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
    <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
    <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
    <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
    <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
    <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
    <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
    <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
    <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
    <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
</fieldset>

@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);

fieldset, label { margin: 0; padding: 0; }
body{ margin: 20px; }
h1 { font-size: 1.5em; margin: 10px; }

/****** Style Star Rating Widget *****/

.rating { 
  border: none;
  float: left;
}

.rating > input { display: none; } 
.rating > label:before { 
  margin: 5px;
  font-size: 1.25em;
  font-family: FontAwesome;
  display: inline-block;
  content: "\f005";
}

.rating > .half:before { 
  content: "\f089";
  position: absolute;
}

.rating > label { 
  color: #ddd; 
 float: right; 
}

/***** CSS Magic to Highlight Stars on Hover *****/

.rating > input:checked ~ label, /* show gold star when clicked */
.rating:not(:checked) > label:hover, /* hover current star */
.rating:not(:checked) > label:hover ~ label { color: #FFD700;  } /* hover previous stars in list */

.rating > input:checked + label:hover, /* hover current star when changing rating */
.rating > input:checked ~ label:hover,
.rating > label:hover ~ input:checked ~ label, /* lighten current selection */
.rating > input:checked ~ label:hover ~ label { color: #FFED85;  }  -->