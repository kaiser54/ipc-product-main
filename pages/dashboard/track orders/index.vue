<template>
  <div class="view-page">
    <div class="title-header">
      <h2 class="h2-medium header-text">Track orders</h2>
    </div>
    <div class="order-container">
      <nuxt-link to="/dashboard/track orders/product one" v-for="index in duplicateCount" :key="index">
        <orderProduct :showSvg="true" />
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  layout: "dashboardview",
  // Other component properties and methods
  data() {
    return {
      pageTitle: "IPC | Track orders",
      duplicateCount: 10 // Specify the number of times to duplicate the component
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
a {
  color: inherit;
  width: 100%;
}

.order-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 100%;
}
</style>
