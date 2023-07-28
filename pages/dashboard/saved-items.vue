<template>
  <div>
    <cartList
      v-for="product in cart"
      :key="product.id"
      :product="product"
      :inCart="false"
      class="cart-list-con"
    />
    <ProductList v-for="product in cart" :key="product.id" :product="product" />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import ProductList from "~/components/ProductList.vue";
export default {
  layout: "dashboardview",
  computed: {
    ...mapState(["cart"]),
  },
  components: { ProductList },
};
</script>

<style scoped>
</style>


<style>
.nuxt-link-active .desktop-nav {
  background: var(--primary-p300);
}

.nuxt-link-active .desktop-nav p {
  color: #fff;
}

.nuxt-link-active .desktop-nav svg {
  stroke: #fff;
}

.nuxt-link-active .desktop-nav .nav-content svg path {
  stroke: #fff !important;
}
</style>