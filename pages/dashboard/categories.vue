<template>
  <div class="view-page">
    <div class="title-header">
      <h2 class="h2-medium header-text">Categories</h2>
    </div>
    <div class="page-content">
        <div class="box"></div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dashboardview",
  // Other component properties and methods
  data() {
    return {
      pageTitle: "IPC | Categories",
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
.view {
    
}
.page-content {
    width: 100%;
}
.box {
    background: brown;
    width: 100%;
    height: 310vh;
}
</style>
