<template>
  <div>
    <div class="">
      <div class="product-search">
        <Search />
      </div>
      <!-- @search-term-updated is catched from the search component  -->
      <section class="market-product">
        <div class="product-top-wrap">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
            :inCart="inCart"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/productcard";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      inCart: false,
    };
  },
  components: {
    ProductCard,
  },
  methods: {
    ...mapActions("product", ["fetchAllProducts"]),
  },
  async mounted() {
    await this.fetchAllProducts(); // Fetch all products when the component is mounted
    if (this.$route.path === "/dashboard/search") {
      this.$nextTick(() => {
        const searchInput = this.$refs.search;
        if (searchInput) {
          searchInput.focus();
        }
      });
    }
  },
  computed: {
    ...mapState("product", ["loading", "error"]),
    ...mapGetters("product", ["getProductsBySearch"]),
    filteredProducts() {
      return this.getProductsBySearch; // Use the searchQuery here
    },
  },
};
</script>

<style scoped>
.product-search {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 16px 16px;
  gap: 16px;
  z-index: 2;
  background: white;
}

.product-top-wrap {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
  width: 100%;
  justify-content: space-between;
  margin-top: 95px;
}

@media (max-width: 950px) {
  .product-top-wrap {
    padding: 0;
    gap: 8px;
  }
}
</style>
