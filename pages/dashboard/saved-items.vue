<template>
  <div class="view-page">
    <div class="top-header">
      <div class="title-header">
        <goback />
        <h2 class="h2-medium header-text">Saved items</h2>
      </div>
    </div>
    <div class="saved__items__container">
      <ProductList
        class="product__wrap"
        v-for="product in savedItem"
        :key="product.id"
        :product="product"
        :deleteBtn="true"
        :showTag="true"
        :showBtn="true"
        tagText="In stock"
        size="small"
        type="positive"
        className__1="flex__gap"
        @addToCartEvent="addToCart"
        @removeFromCartEvent="removeFromSaved"
        @incrementQuantityEvent="incrementQuantity"
        @decrementQuantityEvent="decrementQuantity"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import ProductList from "~/components/ProductList.vue";
export default {
  layout: "dashboardview",
  components: { ProductList },
  computed: {
    ...mapState(["savedItem"]),
    isSaved() {
      const productIsSaved = this.$store.state.savedItem.find(
        (p) => p.id === this.product.id
      );
      return productIsSaved !== undefined;
    },
  },
  methods: {
    ...mapMutations(["removeFromSaved"]),
    addToCart(product) {
      this.$store.commit("buyProduct", product);
    },
    incrementQuantity() {
      this.$store.commit("incrementQuantity", { productId: this.product.id });
    },
    decrementQuantity() {
      this.$store.commit("decrementQuantity", { productId: this.product.id });
    },
  },
};
</script>

<style scoped>
.view-page {
  gap: 32px;
}
.top-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
}

.title-header {
  gap: 16px;
}
.saved__items__container {
  display: flex;
  max-width: 681px;
  flex-direction: column;
  align-items: flex-start;
  gap: 64px;
}
.product__wrap {
  /* max-width: 681px; */
  width: 100%;
}
@media (max-width: 950px) {
  .top-header {
    display: none;
  }
  .saved__items__container {
    max-width: 100%;
  }
}
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