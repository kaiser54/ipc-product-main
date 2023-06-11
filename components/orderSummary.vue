<template>
  <div class="payment">
    <h3 class="h3-medium header-text">Order summary</h3>
    <userInfo />
    <div class="delivery__time">
      <div class="delivery">Estimated delivery time</div>
      <div class="time">24hours</div>
    </div>
    <userInfo />
    <PrimaryBtn class="bottom" buttonText="Continue to pay" @click="submitForm" />
  </div>
</template>
    
  <script>
export default {
  data() {
    return {};
  },
  methods: {
    submitForm() {
      this.$emit("customEvent");
    },
  },
};
</script>
  
    
  <style scoped>
.bottom {
  margin-bottom: 70px;
}
</style>