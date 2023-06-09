<template>
  <div class="checkout-wrapper">
    <progressBar :progressPercentage = progressPercentage :currentStep = currentStep :getStepLabel="getStepLabel" />
    <CheckoutAddress />
  </div>
</template>

<script>
export default {
  layout: "checkOut",
  data() {
    return {
      currentStep: 1,
    };
  },
  computed: {
    progressPercentage() {
      return `${(this.currentStep - 1) * 49.5}%`;
    },
  },
  methods: {
    nextStep() {
      if (this.currentStep < 3) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    submitForm() {
      // Handle form submission
    },
    getStepLabel(step) {
    if (step === 1) {
      return 'Address';
    } else if (step === 2) {
      return 'Order';
    } else if (step === 3) {
      return 'Payment';
    }
  },
  },
};
</script>

<style scoped>
.checkout-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  /* max-width: 833px; */
  width: 100%;
}
</style>
