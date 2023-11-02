<template>
  <div class="view-page goTop">
    <div class="title-header">
      <div class="category">
        <goback />
      <!-- <Breadcrumb :route="$route" /> -->
      <!-- <p class="top">Categories > <span>{{ this.searchQuery }}</span></p>  -->
      </div>
      <h2 class="h2-medium header-text">{{ this.searchQuery }}</h2>
    </div>
    <LoaderComponent v-if="loading" />
    <section class="market-product" v-if="filteredProducts.length > 0">
      <productcard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        :inCart="inCart"
      />

    </section>
    <div v-if="filteredProducts.length === 0">
      Products not available for this category yet. Showing all products instead
      <br />
      <section class="market-product">
        <productcard
          v-for="product in products"
          :key="product.id"
          :product="product"
          :inCart="inCart"
        />
      </section>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  layout: "dashboardview",
  data() {
    return {
      searchQuery: decodeURIComponent(
        this.$route.path.split("/")[this.$route.path.split("/").length - 1]
      ),
      categories: [],
      inCart: false,
    };
  },
  async mounted() {
    await this.fetchAllProducts(); // Fetch all products when the component is mounted
    // const pathArray = this.$route.path.split('/');
    // const lastSegment = decodeURIComponent(pathArray[pathArray.length - 1]);
    // this.currentPage = lastSegment;
    this.updateQuery(this.searchQuery);
  },
  computed: {
    ...mapState("product", ["loading", "error", "products"]),
    ...mapGetters("product", ["getProductsBySearch"]),
    filteredProducts() {
      return this.getProductsBySearch; // Use the searchQuery here
    },
  },
  methods: {
    ...mapActions("product", ["fetchAllProducts"]),
    ...mapActions("product", ["updateQuery"]),
  },
  watch: {},
};
</script>

<style scoped>
.category{
  display: flex;
  align-items: center;
  gap: 20px;
}
.top p{
  color: var(--grey-grey-2, #565C69);
font-family: var(----new-primary-font);
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
}
.top span{
  color: var(--new-primary-p300);
}
@media (min-width: 950px) {
  .webskeleton {
    display: block;
  }

  .SkeletonLoader {
    display: none;
  }
}

@media (max-width: 950px) {
  .webskeleton {
    display: none;
  }

  .SkeletonLoader {
    display: block;
  }
}
</style>


<style>
.nuxt-link-active .desktop-nav {
  background: var(--supporting-green-s-300);
}

.nuxt-link-active .desktop-nav p {
  color: #fff;
}

.first{
  fill:white;
}
.second{
  fill:white;
}
.forth {
  fill: none;
}
.fifth{
  fill: none;
}
.fifth path{
  stroke: #565C69;
}
.forth path{
  stroke: #344054;
  fill: none;
}
.third path{
  fill: white;
}
.second path{
  stroke: #565C69;
}
.nuxt-link-exact-active .desktop-nav .first {
  fill: white;
  stroke: none;
}
.nuxt-link-exact-active .desktop-nav .second {
  fill: white;
}
.nuxt-link-exact-active .desktop-nav .second path {
  fill: white;
  stroke: white;
}
.nuxt-link-exact-active .desktop-nav .third path {
  fill: white;
  stroke: none;
}
.nuxt-link-exact-active .desktop-nav .forth path {
  stroke: none;
  fill: #fff;
  /* stroke: #344054; */
}
.nuxt-link-exact-active .desktop-nav .fifth path {
  fill: #fff;
  stroke: none;
}
.nuxt-link-exact-active .desktop-nav .fifth path .try {
  fill: #fff;
  stroke: #fff;
}
</style>
