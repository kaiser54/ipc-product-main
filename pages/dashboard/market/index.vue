<template>
  <div class="nuxt-page">
    <div class="page-title">
      <h2 class="h2-medium header-text">Market</h2>
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
  // Other component properties and methods
  data() {
    return {
      pageTitle: "IPC | Market",
    };
  },
  head() {
    return {
      title: this.pageTitle,
    };
  },
};
</script>
<style>
.nuxt-page {
  display: flex;
  gap: 32px;
  flex-direction: column;
  width: auto;
  height: 100%;
}
</style>

<style scoped>
.market-product {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
  justify-content: space-evenly;
}
@media (max-width: 950px) {
  .m-20 {
    margin: 0;
  padding: 16px;
    background: var(--grey-grey6);
  }
  .page-title {
    display: none;
  }
  .market-product {
    padding: 0;
    gap: 8px;
  }
}
</style>
