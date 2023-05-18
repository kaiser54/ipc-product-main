<template>
  <div class="checkout-wrapper">
    <CheckoutAddress />
  </div>
</template>

<script>
export default {
  layout: "checkOut",
};
</script>

<style scoped>
.checkout-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  max-width: 833px;
  width: 100%;
}
</style>
