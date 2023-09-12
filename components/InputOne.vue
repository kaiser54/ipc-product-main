<template>
  <div class="input-field">
    <label :for="id">{{ label }}</label>
    <div class="input-container" :class="{ password: type === 'password' }">
      <input
        class="input"
        :class="{ 'input-error': invalid }"
        :type="inputType"
        :id="id"
        :name="id"
        :value="internalValue"
        :placeholder="placeholder"
        :required="required"
        @input="updateValue($event.target.value)"
      />
      <span
        v-if="type === 'password'"
        class="toggle-password"
        @click="togglePasswordVisibility"
      >
        <!-- Your password toggle icons here -->
      </span>
    </div>
    <div v-if="invalid && !error" class="error">
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: "",
    },
    error: {
      default: false,
    },
  },
  data() {
    return {
      inputType: this.type,
      internalValue: this.value,
    };
  },
  watch: {
    value(newValue) {
      this.internalValue = newValue;
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.inputType = this.inputType === "password" ? "text" : "password";
    },
    updateValue(value) {
      this.internalValue = value;
      this.$emit("input", value);
    },
  },
};
</script>
  
  <style scoped>
.password {
  position: relative;
}
.password span svg {
  position: absolute;
  right: 16px;
  top: 14px;
  fill: var(--grey-grey3);
}
</style>
  