<template>
  <div class="view-page">
    <div class="top-header">
      <div class="title-header">
        <goback />
        <h2 class="h2-medium header-text">Track orders</h2>
      </div>
    </div>
    <div class="product-transaction">
      <div class="product-description">
        <orderProduct :showSvg="true" class="child" />
        <userInfo class="child"/>
      </div>
      <trackingBar />
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

.product-transaction {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.product-description {
  display: flex;
  flex-direction: row;
  padding: 0px;
  gap: 16px;
  /* max-width: 579px; */
  width: 100%;
}

.child:nth-child(1) {
  flex: 65;
}

.child:nth-child(2) {
  flex: 35;
}


.total {
  color: var(--grey-grey1);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

@media (max-width: 1030px) {
  .child:nth-child(1) {
    flex: 100;
  }

  .child:nth-child(2) {
    display: none;
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
