<template>
  <div class="items-index">

    <div v-for="item in items">
       <h4><a v-bind:href="'/#/items/' + item.id">{{ item.name }}</a></h4>
       <div>
         <button><router-link v-bind:to="'/items/' + item.id">{{item.name}}</router-link></button>
         <br>
         <img :src="item.img_url" style="width:200px; height:200px" alt="">
         <br>
         Description: {{item.description}}
         <br>
         Price: {{item.price}}
         <br>
         Rating: {{item.avg_rating}}
       </div> 
    </div>
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
        items: [],
      };
    },
    created: function() { 
      console.log(this.searchTerm);
      axios.get("http://localhost:3000/api/items/?name=" + this.$route.params.name).then(response => {
        console.log(response.data);
        this.items = response.data;
      });
    },
    methods: {},
    computed: {}
};
</script>