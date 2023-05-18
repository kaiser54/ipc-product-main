<template>
    <button @click.prevent="handleClick" class="btn primary-btn">
      {{ buttonText }}
    </button>
  </template>
  
  <script>
  export default {
    props: {
      buttonText: {
        type: String,
        required: true
      }
    },
    methods: {
      handleClick() {
        this.$emit('click');
      }
    }
  };
  </script>
  