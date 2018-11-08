<template>
  <div class="reviews-edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Reviews Edit</h1>
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
      </form>
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
    }
  },
  computed: {}
};
</script>