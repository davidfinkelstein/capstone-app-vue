<template>
  <div class="items-show">
    <h1>Hello</h1>
    <div>

    
      <div class="container">
        <div class="listing-item mb-20">
          <div class="row grid-space-0">
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div class="overlay-container">
                <img src="images/product-1.jpg" alt="">
                <a class="overlay-link" href="shop-product.html"><i class="fa fa-plus"></i></a>
                <span class="badge">30% OFF</span>
              </div>
            </div>
            <div class="col-md-6 col-lg-8 col-xl-9">
              <div class="body">
                <h3 class="margin-clear"><a href="shop-product.html">Consectetur adipisicing elit</a></h3>
                <p>
                  <i class="fa fa-star text-default"></i>
                  <i class="fa fa-star text-default"></i>
                  <i class="fa fa-star text-default"></i>
                  <i class="fa fa-star text-default"></i>
                  <i class="fa fa-star"></i>
                  <a href="#" class="btn-sm-link"><i class="fa fa-heart pr-1"></i>Add to Wishlist</a>
                  <a href="#" class="btn-sm-link"><i class="fa fa-link pr-1"></i>View Details</a>
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas inventore modi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, cum repellat nisi quaerat mollitia reiciendis totam repellendus dicta id dolorem voluptate debitis molestias molestiae asperiores, odit magni vitae placeat optio.</p>
                <div class="elements-list clearfix">
                  <span class="price"><del>$199.00</del> $150.00</span>
                  <a href="#" class="pull-right btn btn-sm btn-default-transparent btn-animated">Add To Cart<i class="fa fa-shopping-cart"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </head>

<!-- 
      <h4>Name: {{item.name}}</h4>
      <h4>Price: {{item.price}}</h4>
      <h4>Description: {{item.description}}</h4>
      <h4>Item's Website: {{item.website_url}}</h4>
      <h4>Amazon Link: {{item.amazon_url}}</h4>

      <button><router-link v-bind:to="'/items/' + item.id + '/edit'">Request Edit</router-link></button>
       -->
    </div>
    <div v-for="review in item.reviews">
      Review: {{review}}
    </div>
      
    <div class="container">
        <form v-on:submit.prevent="submit()">
          <h1>New Review</h1>
          <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>
           <div class="form-group">
            <label>Rating:</label>
            <input type="number" class="form-control" v-model="rating">
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

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      item: {},
      comment: "",
      rating: "",
      imgUrl: "",
      errors: []
    };
  },
  created: function() { //Compiles before the page loads
    axios.get("http://localhost:3000/api/items/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.item = response.data;
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
    }
  },
  computed: {}
};
</script>
