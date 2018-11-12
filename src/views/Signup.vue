<template>
  <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Username:</label> 
          <input type="text" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Repeat Password:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation">
        </div>
        <form>
          <div>
            <label>Date of birth:</label>
            <input type="date" min="1900-01-01" max="2001-01-01" v-model="birthday">
          </div>
        </form>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>

      <form action="./views/Home.vue">
          <input type="submit" class="btn btn-primary" value="Cancel">
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
      email: "",
      birthday: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() { //submit = patch
      var params = {
        name: this.name,
        email: this.email,
        birthday: this.birthday,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("http://localhost:3000/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>