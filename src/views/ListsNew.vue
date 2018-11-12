<template>
  <div class="lists-new">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>New List</h1>
        <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
         <div class="form-group">
          <label>Enter list name:</label>
          <input type="text" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label>Category:</label> 
          <select v-model="category">
            <option disabled value="">Please select one</option>
            <option value="Television">Television</option>
            <option value="Restaurants">Restaurants</option>
            <option value="Video Games">Video Games</option>
            <option value="Products">Products</option>
          </select>
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
        <button><router-link v-bind:to="'/#/'">Cancel</router-link></button>
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
      category: "",
      errors: []
    };
  },
  methods: {
    submit: function() { //submit = patch
      var params = {
        name: this.name,
        category: this.category,
      };
      axios
        .post("http://localhost:3000/api/lists", params)
        .then(response => {
          this.$router.push("/lists");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>