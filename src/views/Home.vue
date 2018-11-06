<template>
  <div class="home">
    
    <h1>Capstone Project</h1>

    <h2>Home</h2>

    <br>

    <div v-for="list in lists">
      <h4>Name: {{ list.name }}</h4>
      <h4>Category: {{ list.category }}</h4>      
    </div>
  </div>
</template>

<style>
</style>

<script>
  var axios = require('axios');
export default {
    data: function() {
      return {
        lists: []
      };
    },
    created: function() { //Compiles before the page loads
      axios.get("http://localhost:3000/api/lists").then(response => {
        console.log(response.data);
        this.lists = response.data;
      });
    },
    methods: {},
    computed: {}
};
</script>