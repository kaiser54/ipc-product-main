<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="tryLogin">
      <!-- <input
        v-model="credentials.username"
        type="text"
        placeholder="Username"
      />
      <input
        v-model="credentials.password"
        type="password"
        placeholder="Password"
      /> -->
      <button type="submit">Login</button>
    </form>
  </div>
</template>
  
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      credentials: {
        email: "test1234@g.co",
        password: "12345678",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    tryLogin() {
      this.login(this.credentials);
    }
  },
};
</script>

  