<template>
  <div>
    <input v-model="name" type="text" placeholder="Name" />
    <input v-model="email" type="email" placeholder="Email" />
    <button @click="submitForm">Submit</button>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    submitForm() {
      const formData = {
        name: this.name,
        email: this.email,
      };
      this.$emit("formSubmitted", formData);
    },
  },
};
</script>
  