
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
      
      <ol v-for="review in user.reviews">
        <router-link v-bind:to="'/items/' + review.item_id"><h3>{{review.item_name}}</h3></router-link>
        <li>Picture: <img :src="review.img_url" style="width:200px; height:150px" alt=""></li>
        <h5>Rating: {{review.rating}}</h5>
        <h5>Comment: {{review.comment}}</h5>
        <h5>Item Name: {{review.item_name}}</h5>
        <div>Reviewed on {{review.created_at}}</div>
        <button><router-link v-bind:to="'/reviews/' + review.id + '/edit'">Edit Review</router-link></button>
        <br>
        <br>
      </ol>

    </div>
  

  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {}
    };
  },
  created: function() { //Compiles before the page loads
    axios.get("http://localhost:3000/api/users/me").then(response => {
      console.log(response.data);
      this.user = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>