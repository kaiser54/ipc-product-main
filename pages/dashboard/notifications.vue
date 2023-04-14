<template>
    <div>
        
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
      <productcard />
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

<style scoped>
@media (max-width: 950px) {
    .mobile-dashboard-top-fixed,
    .ipc-nav {
        display: none;
    }
}
</style>