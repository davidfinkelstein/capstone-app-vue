<template>
  <div class="users-show">
    <div>
      <h4>Name: {{user.name}}</h4>
      <h4>Email: {{user.email}}</h4>
      <h4>Birthday: {{user.birthday}}</h4>
      <h4>Member Since: {{user.created_at}}</h4>
      <h4>Ratings: {{user.reviews.length}}</h4>
      <ol v-for="review in user.reviews">
        <li>{{review}}</li>
      </ol>
    </div>
<!-- User.created_at??? -->
    <!-- Current user edit ???????? -->
    
    <router-link to="/users/:id/edit">
      <input type="submit" class="btn btn-primary" value="Edit Profile">
    </router-link>
  

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
    axios.get("http://localhost:3000/api/users/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.user = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>
