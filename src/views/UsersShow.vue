
<template>
  <div class="users-show">

      <h2>{{user.name}}</h2>
      <router-link v-bind:to="'/users/' + user.id + '/edit'">
        <input type="submit" class="btn btn-primary" value="Edit Profile">
      </router-link>

      <div>
        <h4>Name: {{user.name}}</h4>
        <h4>Email: {{user.email}}</h4>
        <h4>Birthday: {{user.birthday}}</h4>
        <h4>Member Since: {{user.created_at}}</h4>
        <h4>Ratings: {{user.reviews.length}}</h4>

        <br>
        
        <div v-for="review in user.reviews">
          <router-link v-bind:to="'/items/' + review.item_id"><h3>{{review.item_name}}</h3></router-link>
          <h4><img :src="review.img_url" style="width:200px; height:150px" alt=""></h4>
          <h5>Rating: {{review.rating}}</h5>
          <div class="star-ratings-sprite"><span :style="'width:' + review.rating*20 + '%'" id="star-ratings-sprite-rating"></span></div>
          <div>
          <h5>Comment: {{review.comment}}</h5>
          <h5>Item Name: {{review.item_name}}</h5>
          <div>Reviewed on {{review.created_at}}</div>
          <button><router-link v-bind:to="'/reviews/' + review.id + '/edit'">Edit Review</router-link></button>
          <br>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .star-ratings-sprite {
    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png") repeat-x;
    font-size: 0;
    height: 21px;
    line-height: 0;
    overflow: hidden;
    text-indent: -999em;
    width: 110px;
    margin: 0 auto;
  }
    
  #star-ratings-sprite-rating {
    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png") repeat-x;
    background-position: 0 100%;
    float: left;
    height: 21px;
    display:block;
  }
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {},
    };
  },
  created: function() { //Compiles before the page loads
    axios.get("http://localhost:3000/api/users/me").then(response => {
      console.log(response.data);
      this.user = response.data;
      console.log(this.user.reviews);
    });
  },
  methods: {},
  computed: {}
};
</script>