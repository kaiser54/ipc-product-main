<template>
  <div class="view-page">
    <div class="title-header">
      <goback />
      <!-- <Breadcrumb :route="$route" /> -->
      <h2 class="h2-medium header-text">{{ this.currentPage }}</h2>
    </div>
    <section class="market-product">
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
    </section>
  </div>
</template>

<script>
export default {
  layout: "dashboardview",
  data() {
    return {
      currentPage: "",
    };
  },
  mounted() {
    const pathArray = this.$route.path.split('/');
    const lastSegment = decodeURIComponent(pathArray[pathArray.length - 1]);
    this.currentPage = lastSegment; // use = instead of ==
    console.log(this.currentPage); // use this.currentPage instead of currentPage
  }

};
</script>


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
