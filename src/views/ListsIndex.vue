<template>
  <div class="lists-index">
    
    <h1>Capstone Project Listies</h1>

    <h2>Lists</h2>

    <br>

    <div v-for="list in lists">
       <h4><a v-bind:href="'/#/lists/' + list.id">{{ list.name }}</a></h4>
      <h4>Category: {{ list.category }}</h4>      
    </div>
    <form action="#/lists/new">
      <input type="submit" class="btn btn-primary" value="New List">
    </form>
  </div>
</template>

<style>
</style>

<script>
  var axios = require('axios');
export default {
  //Compiles before the page loads
    data: function() {
      return {
        lists: [],
      };
    },
    created: function() { 
      console.log(this.searchTerm);
      axios.get("http://localhost:3000/api/lists/?category=" + this.$route.params.category).then(response => {
        console.log(response.data);
        this.lists = response.data;
      });
    },
    methods: {},
    computed: {}
};
</script>