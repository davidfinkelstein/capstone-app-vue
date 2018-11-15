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
            <fieldset class="rating">
                <input v-model="rating" type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                <input v-model="rating" type="radio" id="star4half" name="rating" value="4.5" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                <input v-model="rating" type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                <input v-model="rating" type="radio" id="star3half" name="rating" value="3.5" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                <input v-model="rating" type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
                <input v-model="rating" type="radio" id="star2half" name="rating" value="2.5" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                <input v-model="rating" type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                <input v-model="rating" type="radio" id="star1half" name="rating" value="1.5" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                <input v-model="rating" type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                <input v-model="rating" type="radio" id="starhalf" name="rating" value="0.5" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
            </fieldset>

            <!-- <input type="number" class="form-control" v-model="rating"> -->
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

<style>
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
  .rating > input:checked ~ label:hover ~ label { color: #FFED85;  } 
</style>

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