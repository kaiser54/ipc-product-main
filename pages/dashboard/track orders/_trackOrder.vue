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
        <orderProduct :showSvg="false"/>
        <div class="user-info">
          <div class="client-user-name bdr">
            <div class="client-frame">
              <span>Full name</span><span class="bold">Agboola Temitope</span>
            </div>
            <div class="client-frame">
              <span>Phone number</span><span class="bold">09156581205</span>
            </div>
            <div class="client-frame">
              <span>Street address</span
              ><span class="bold">91, lagos road</span>
            </div>
            <div class="client-frame">
              <span>Local govt. area</span><span class="bold">Epe</span>
            </div>
            <div class="client-frame">
              <span>State</span><span class="bold">Lagos</span>
            </div>
          </div>
          <div class="client-user-name bdr">
            <div class="client-frame">
              <span>Payment method</span><span class="bold">Card payment</span>
            </div>
            <div class="client-frame">
              <span>Placed on</span><span class="bold">14-03-2023</span>
            </div>
          </div>
          <div class="client-user-name bdr">
            <div class="client-frame">
              <span>Subtotal</span><span class="bold">#75,000</span>
            </div>
            <div class="client-frame">
              <span>Delivery fee</span><span class="bold">#1,245</span>
            </div>
            <div class="client-frame total">
              <span>Total</span><span class="bold">#76,245</span>
            </div>
          </div>
        </div>
      </div>
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
  flex-direction: column;
  padding: 0px;
  gap: 16px;
  max-width: 579px;
  width: 100%;
}
.user-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  padding-bottom: 60px;
}
.bdr {
  display: flex;
  padding: 16px;
  gap: 8px;

  /* Grey/Grey5 */

  border: 1px solid var(--grey-grey5);
  border-radius: 16px;
}
.client-user-name {
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.client-frame {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  width: 100%;

  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey2 */

  color: var(--grey-grey2);
}
.client-frame .bold {
  color: var(--grey-grey1);
}
.total {
  color: var(--grey-grey1);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}
.total .bold {
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height, or 150% */

  letter-spacing: -0.5px;
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
