<template>
    <form @submit.prevent="register">
        <label>
            Account Type:
            <select v-model="accountType">
                <option value="individual">Individual</option>
                <option value="business">Business</option>
            </select>
        </label>

        <label>
            First Name:
            <input type="text" v-model="firstName" required />
        </label>

        <label>
            Last Name:
            <input type="text" v-model="lastName" required />
        </label>

        <label>
            Email:
            <input type="email" v-model="email" required />
        </label>

        <label v-if="accountType === 'business'">
            Business Name:
            <input type="text" v-model="businessName" required />
        </label>

        <label>
            Password:
            <input type="password" v-model="password" required />
        </label>

        <button type="submit">Register</button>
    </form>
</template>
  
<script>
export default {
  data() {
    return {
      accountType: 'individual',
      firstName: '',
      lastName: '',
      email: '',
      businessName: '',
      password: '',
    };
  },
  methods: {
    register() {
      const userData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        businessName: this.businessName,
        password: this.password,
      };
      this.$store.commit('setAccountType', this.accountType); // Update the mutation reference
      this.$store.dispatch('register', userData); // Update the action reference
    },
  },
};
</script>
  

