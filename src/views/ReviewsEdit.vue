<template>
  <div v-if="this.review.user_id === this.user.id" class="reviews-edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Reviews Edit</h1>
        <h3>{{this.itemName}}</h3>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Edit Review:</label>
          <input type="text" class="form-control" v-model="comment">
        </div>
        <div class="form-group">
          <label>Edit Rating:</label>
          <input type="number" class="form-control" v-model="rating">
        </div>
        <div class="form-group">
           <label>Upload new image:</label>
           <input class="form-control" placeholder="Image" type="file" v-on:change="setFile($event)" ref="fileInput">
         </div>

        <input type="submit" class="btn btn-primary" value="Submit">

        <button><router-link v-bind:to="'/items/' + review.item_id">Cancel</router-link></button>

      </form>

      <button v-on:click="deleteReview(review)">Delete Review</button>


    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data: function() {
    return {
      review: {},
      rating: "",
      comment: "",
      imgUrl: "",
      itemName: "",
      user: {},
      errors: []
    };
  },
  created: function() { //created = get request
    axios.get("http://localhost:3000/api/reviews/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.review = response.data;
      this.rating = response.data.rating;
      this.comment = response.data.comment;
      this.imgUrl = response.data.img_url;
      this.itemName = response.data.item_name;
      axios.get("http://localhost:3000/api/users/me").then(response => {
        console.log(response.data);
        this.user = response.data;
      
      });
    });
  },
  methods: {
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.imgUrl = event.target.files[0];
      } 
    },
    submit: function() { //submit = patch
      var formData = new FormData();
      formData.append("rating", this.rating);
      formData.append("comment", this.comment);
      formData.append("img_url", this.imgUrl);
      
      axios
        .patch("http://localhost:3000/api/reviews/" + this.review.id, formData)
        .then(response => {
          this.$router.push("/items/" + this.review.item_id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    deleteReview: function(review) {
      axios
        .delete("http://localhost:3000/api/reviews/" + review.id)
        .then(response => {
          delete axios.defaults.headers.common["Authorization"];
          this.$router.push("/items/" + this.review.item_id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  },
  computed: {}
};
</script>















<!-- Was good time!
    // currentUserReview: function() {
    //   var currentUserReview = true;
    //   this.user.reviews.forEach(function(review) {
    //     if (this.review.user_id !== this.user.id) {
    //       currentUserReview = false;
    //     } 
    //   }.bind(this));
    //   return currentUserReview;
    // } -->