<template>
  <div class="component-header-main">
    <IconsBack @redirectToprofilepage="$emit('redirectToprofilepage')" />
    <p>{{ modalName }}</p>
    <div class="component-cart">
      <nuxt-link to="/dashboard/market/cart">
        <div class="badge" v-if="cart.length > 0">
          <p>{{ getCartLength }}</p>
        </div>
        <IconsCart />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    modalName: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(["cart"]),
    getCartLength() {
      const cartLength = this.$store.state.cart.length;
      return cartLength;
    },
  },
};
</script>