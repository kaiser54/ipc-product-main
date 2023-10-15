<template>
  <div>
    <label for="email">Email:</label>
    <input
      v-model="email"
      @blur="validateEmail"
      @focus="validationError = null"
      :class="{ error: validationError }"
      id="email"
      type="email"
    />
    <span v-if="validationError" class="error-message">{{
      validationError
    }}</span>
    <button>hey</button>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      email: "",
      validationError: null,
    };
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      if (!emailRegex.test(this.email)) {
        this.validationError = "Please enter a valid email address.";
      } else {
        this.validationError = null;
      }
    },
  },
};
</script>
  
  <style>
.error {
  border: 1px solid red;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
</style>
  