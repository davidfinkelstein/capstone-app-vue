<template>
  <div class="items-edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Edit</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name Edit: </label>
          <input type="text" class="form-control" v-model="name">
        </div>    
        <div class="form-group">
          <label>Price Update: </label>
          <input type="text" class="form-control" v-model="price">
        </div>
        <div class="form-group">
          <label>Description Edit: </label>
          <input type="text" class="form-control" v-model="description">
        </div>
        <div class="form-group">
          <label>Website URL Edit: </label>
          <input type="text" class="form-control" v-model="websiteUrl">
        </div>
        <div class="form-group">
          <label>Amazon URL Edit: </label>
          <input type="text" class="form-control" v-model="amazonUrl">
        </div>
        <div class="form-group">
          <label>New Image: </label>
          <input type="text" class="form-control" v-model="imgUrl">
        </div>

        <input type="submit" class="btn btn-primary" value="Submit">

        <form action="./views/ItemsShow.vue">
          <input type="submit" class="btn btn-primary" value="Cancel">
        </form>

      </form>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      price: "",
      description: "",
      websiteUrl: "",
      amazonUrl: "",
      imgUrl: "",
      errors: []
    };
  },
  created: function() { //created = get request
    axios.get("http://localhost:3000/api/items/" +  this.$route.params.id).then(response => {
      console.log(response.data);
      this.item = response.data;
      this.name = response.data.name;
      this.price = response.data.price;
      this.description = response.data.description;
      this.websiteUrl = response.data.website_url;
      this.amazonUrl = response.data.amazon_url;
      this.imgUrl = response.data.img_url;
    });
  },
  methods: {
    submit: function() { //submit = patch
      var params = {
        name: this.name,
        price: this.price,
        description: this.description,
        website_url: this.websiteUrl,
        amazon_url: this.amazonUrl,
        img_url: this.imgUrl
      };
      axios
        .patch("http://localhost:3000/api/items/" + this.$route.params.id, params)
        .then(response => {
          this.$router.push("/items/" + this.$route.params.id, params);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  },
  computed: {}
};
</script>