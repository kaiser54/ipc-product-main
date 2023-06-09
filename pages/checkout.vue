<template>
  <div class="checkout-wrapper">
    <div class="__bg__fixed">
      <progressBar :progressPercentage=progressPercentage :currentStep=currentStep :getStepLabel="getStepLabel" />
    </div>
    <div class="main">
      <div class="user-form-data">
        <CheckoutAddress v-if="currentStep === 1" @customEvent="nextStep" />
        <orderSummary v-if="currentStep === 2" @customEvent="nextStep" />
        <payment v-if="currentStep === 3" @customEvent="nextStep" />
      </div>
      <div class="__order__data">

      </div>
    </div>
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
      // return `${(this.currentStep - 1) * 49.5}`; //returns a string
      return (this.currentStep - 1) * 49.5;
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
        return 'Address details';
      } else if (step === 2) {
        return 'Order summary';
      } else if (step === 3) {
        return 'Payment method';
      }
    },
  },
};
</script>

<style scoped>
.main {
  margin-top: 124px;
  display: flex;
  justify-content: space-evenly;
}

.user-form-data {
  max-width: 833px;
}

.__bg__fixed {
  background: var(--white);
  position: fixed;
  z-index: 9;
  width: 100%;
  padding-bottom: 24px;
  top: 98.39px;
  /* height: 90px;*/
}

/*.checkout-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 43px;
  max-width: 833px; 
  width: 100%;
}*/
.__order__data {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;

  
  max-width: 345px;
  width: 100%;

  background: #FFFFFF;
  /* Grey/Grey5 */

  border: 1px solid var(--grey-grey5);
  border-radius: 16px;
}
</style>
