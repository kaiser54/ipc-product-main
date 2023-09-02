<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <!-- <input v-model="user.username" type="text" placeholder="Username" />
      <input v-model="user.password" type="password" placeholder="Password" /> -->
      <button type="submit">Register</button>
    </form>
  </div>
</template>
  
<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      user: {
        password: "12345678",
        businessName: "test909",
        firstName: "test",
        lastName: "909",
        phoneNumbers: ["09162611469"],
        email: "test909@g.co",
      },
    };
  },
  methods: {
    ...mapMutations('auth', ['SET_USER']),
    async register() {
      // Simulate API call
      const response = await this.$axios.post('/business-customers/signup', this.user);

      if (response.data.success) {
        this.$router.push('/login');
      }
    },
  },
};
</script>

  