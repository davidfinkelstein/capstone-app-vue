<template>
  <div class="items-show">
    <h1>Items Show</h1>

    <div class="star-ratings-sprite"><span :style="starsPercentage" id="star-ratings-sprite-rating"></span></div>
    <div>
      <h4>Name: {{item.name}}</h4>
      <h4><img :src="item.img_url" style="width:200px; height:150px" alt=""></h4>
      <h4>Price: {{item.price}}</h4>
      <h4>Description: {{item.description}}</h4>
      <h4>Item's Website: {{item.website_url}}</h4>
      <h4>Amazon Link: {{item.amazon_url}}</h4>
      <h4>Rating: {{item.avg_rating}}</h4>

      <button><router-link v-bind:to="'/items/' + item.id + '/edit'">Request Item Edit</router-link></button>
      
    </div>

    <br>
    <br>

    <div v-for="review in item.reviews">
      Review: 
      {{review.comment}}
      {{review.rating}}
      <p>Reviewed on {{review.created_at}}</p>
        <div>
          <button><router-link v-if="review.user_id == user.id" v-bind:to="'/reviews/' + review.id + '/edit'">Edit Review</router-link></button>
        </div>
      <img :src="review.img_url" style="width:200px; height:200px" alt="">
    </div>
      
    <div v-if="unreviewed()" class="container">
        <form v-on:submit.prevent="submit()">
          <h1>New Review</h1>
          <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>
           <div class="form-group">
            <label>Rating:</label>
            

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
            <label>Comments:</label> 
            <input type="text" class="form-control" v-model="comment">
          </div>
          <div class="form-group">
             <label>Upload Image:</label>
             <input class="form-control" placeholder="Image" type="file" v-on:change="setFile($event)" ref="fileInput">
          </div>
          <input type="submit" class="btn btn-primary" value="Submit">
        </form>       
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
      item: {},
      comment: "",
      rating: "",
      imgUrl: "",
      user: {},
      errors: [],
      starsPercentage: ""
    };
  },
  created: function() { //Compiles before the page loads
    axios.get("http://localhost:3000/api/items/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.item = response.data;
      var starsPercent = this.item.avg_rating * 20;
      this.starsPercentage = "width:" + starsPercent + "%";

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
      formData.append("item_id", this.item.id);
      axios
        .post("http://localhost:3000/api/reviews", formData)
        .then(response => {
          console.log(response.data);
          this.item.reviews.push(response.data);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },

    unreviewed: function() {
      var unreviewed = true;
      this.user.reviews.forEach(function(review) {
        if (review.item_id === this.item.id) {
          unreviewed = false;
        } 
      }.bind(this));
      return unreviewed;
    }
  },
  computed: {}
};
</script>