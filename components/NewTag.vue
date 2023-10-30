<template>
    <div>
      <div class="tag-container" :style="cardStyles">
        <span>{{ title }}</span>
      </div>
    </div>
  </template>
      
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      bgColor: {
        type: String,
        required: true
      },
      textColor: {
        type: String,
        required: true
      },
      padding: {
        type: String,
        required: true
      },
      borderRadius: {
        type: String,
        required: true
      },
      border: {
        type: String,
        required: true
      },
      fonts: {
        type: String,
        required: true
      }
    },
    computed: {
      cardStyles() {
        return {
          backgroundColor: this.bgColor,
          color: this.textColor,
          padding: this.padding,
          border: this.border,
          borderRadius: this.borderRadius,
          fontSize: this.fonts
        };
      },
    },
  };
  </script>
      
  <style scoped>
  .tag-container {
    width: fit-content;
    height: fit-content;
  }
  
  .tag-container span {
    font-family: var(--new-primary-font);
    padding: 0px;
    margin: 0px;
  }
  </style>
      