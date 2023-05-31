<template>
  <div class="view-page">
    <div class="webskeleton" v-if="loading" style="margin: 20px">
      <!-- css skeleton loading state on the website for desktop view -->
      <webskeleton style="overflow: hidden; height: 100vh" />
    </div>
    <div v-if="loading" class="SkeletonLoader">
      <!-- css skeleton loading state on the website for mobile view -->
      <SkeletonLoader style="overflow: hidden; height: 100vh" />
    </div>
    <div class="title-header">
      <goback />
      <!-- <Breadcrumb :route="$route" /> -->
      <h2 class="h2-medium header-text">{{ this.currentPage }}</h2>
    </div>
    <section class="market-product">
      <productcard v-for="(product) in categories" :key="product.id" :product="product" :inCart="inCart" />
      <!-- <productcard /> -->
    </section>
  </div>
</template>

<script>
export default {
  layout: "dashboardview",
  data() {
    return {
      currentPage: "",
      categories: [],
      inCart: false,
      loading: true
    };
  },
  async mounted() {
    const pathArray = this.$route.path.split('/');
    const lastSegment = decodeURIComponent(pathArray[pathArray.length - 1]);
    this.currentPage = lastSegment;

    try {
      this.loading = true;
      const response = await this.$axios.$get(`https://fakestoreapi.com/products/category/${this.currentPage}`);
      this.categories = response;
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
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
