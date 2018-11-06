<template>
  <div class="lists-show">
    <h1>Lists Show</h1>
    <h2>Lists Name: {{list.name}}</h2>
    <h2>Lists Category: {{list.category}}</h2>
    <h2>Number of {{ list.name }}: {{list.items.length}}</h2>
    
    <ol v-for="item in list.items">
      <li>{{item}}</li>
    </ol>

    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>New Item</h1>
        <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
         <div class="form-group">
          <label>Enter item name:</label>
          <input type="text" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label>Enter Price:</label> 
          <input type="number" class="form-control" v-model="price">
        </div>
        <div class="form-group">
          <label>Enter Description:</label> 
          <input type="text" class="form-control" v-model="description">
        </div>
        <div class="form-group">
          <label>Enter website URL:</label> 
          <input type="text" class="form-control" v-model="websiteUrl">
        </div>
        <div class="form-group">
          <label>Enter Amazon URL:</label> 
          <input type="text" class="form-control" v-model="amazonUrl">
        </div>
        <div class="form-group">
           <label>Upload Image:</label>
           <input class="form-control" placeholder="Image" type="file" v-on:change="setFile($event)" ref="fileInput">
         </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>

      <div>
        <button class="btn btn-primary">Sort by rating // high to low, low to high</button>
        <button class="btn btn-primary">Sort by name</button>
      </div>

    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data: function() {
    return {
      list: {},
      name: "",
      price: "",
      description: "",
      websiteUrl: "",
      amazonUrl: "",
      imgUrl: "",
      errors: []
    };
  },
  created: function() { //Compiles before the page loads
    axios.get("http://localhost:3000/api/lists/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.list = response.data;
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
      formData.append("name", this.name);
      formData.append("price", this.price);
      formData.append("description", this.description);
      formData.append("website_url", this.websiteUrl);
      formData.append("amazon_url", this.amazonUrl);
      formData.append("img_url", this.imgUrl);
      formData.append("list_id", this.list.id);



      axios
        .post("http://localhost:3000/api/items", formData)
        .then(response => {
          this.$router.push("/items");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  },

  computed: {}
};
</script>
