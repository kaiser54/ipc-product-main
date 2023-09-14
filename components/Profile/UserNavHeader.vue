<template>
  <div class="component-header-main">
    <IconsBack @redirectToprofilepage="$emit('redirectToprofilepage')" />
    <p>{{ modalName }}</p>
    <div class="component-cart">
      <nuxt-link to="/dashboard/market/cart">
        <div class="badge" v-if="TotalCart != 0">
          <p>{{ TotalCart }}</p>
        </div>
        <IconsCart />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    modalName: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters("cart", ["TotalCart"]),
  },
};
</script>