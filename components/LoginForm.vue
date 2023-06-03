<template>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="confirmationMessage" class="confirmation">{{ confirmationMessage }}</div>
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        confirmationMessage: '',
      };
    },
    computed: {
      error() {
        return this.$store.state.error;
      },
    },
    methods: {
      async submitForm() {
        const credentials = {
          username: this.username,
          password: this.password,
        };
        const loginSuccessful = await this.$store.dispatch('login', credentials);
        if (loginSuccessful) {
          this.confirmationMessage = 'Login successful!';
          this.$router.push('/dashboard'); // Redirect to the dashboard page
        }
      },
    },
  };
  </script>
  
  <style>
  .confirmation {
    color: green;
  }
  </style>
  