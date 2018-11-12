<template>
  <div class="users-edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Edit</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Change Username:</label>
          <input type="text" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label>New Email:</label>
          <input type="text" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>New Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>New Password Confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation">
        </div>

      <input type="submit" class="btn btn-primary" value="Submit">
      </form>

      <button><router-link v-bind:to="'/users/' + user.id">Cancel</router-link></button>

      <button v-on:click="deleteUser(user)">Delete Account</button>


    
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  created: function() { //created = get request
    axios.get("http://localhost:3000/api/users/me").then(response => {
      console.log(response.data);
      this.user = response.data;
      this.name = response.data.name;
      this.email = response.data.email;
    });
  },
  methods: {
    submit: function() { //submit = patch
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .patch("http://localhost:3000/api/users/me", params)
        .then(response => {
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },

    deleteUser: function(user) {
      axios
        .delete("http://localhost:3000/api/users/" + user.id)
        .then(response => {
          delete axios.defaults.headers.common["Authorization"];
          localStorage.removeItem("jwt");
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  },
  computed: {}
};
</script>