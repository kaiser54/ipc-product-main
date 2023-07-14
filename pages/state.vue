<template>
  <div>
    <FForm @formSubmitted="handleFormSubmission" />
    <SubmittedData v-if="submittedData" :data="submittedData" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      submittedData: null,
    };
  },
  methods: {
    handleFormSubmission(formData) {
      this.submittedData = formData;
    },
  },
};
</script>
