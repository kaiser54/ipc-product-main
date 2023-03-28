<template>
  <div class="view-page">
    <div class="title-header">
        <h2 class="h2-medium header-text">Track orders</h2>
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
    };
  },
  head() {
    return {
      title: this.pageTitle,
    };
  },
};
</script>

<style scoped></style>
