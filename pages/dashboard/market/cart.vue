<template>
  <div class="cart-view">
    <div class="title-header" v-if="!mobile">
      <div class="page-head-content">
        <goback />
        <h2 class="h2-medium">Shopping bag</h2>
      </div>
    </div>
    <div class="listed-cart" v-if="!mobile">
      <div class="listed-cart-product">
        <cartList />
      </div>
      <div class="checkout-container">
        <div class="checkout-header">
          <p>Cart summary</p>
        </div>
        <div class="checkout-details">
          <div class="checkout-title">
            <p>Orders</p>
            <div class="item-list-tag">7 items</div>
          </div>
          <div class="total-price checkout-title">
            <p class="total">Subtotal</p>
            <p class="price">₦20,000</p>
          </div>
        </div>
        <button class="btn primary-btn">Checkout</button>
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
      pageTitle: "IPC | cart",
      mobile: false,
    };
  },
  head() {
    return {
      title: this.pageTitle,
    };
  }, mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      if (window.innerWidth <= 950) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    },
  },
};
</script>

<style scoped>
.cart-view {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.page-head-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
}

.page-head-content h2 {
  font-weight: 500;
  font-size: 34px;
  line-height: 44px;
  letter-spacing: -1px;

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.listed-cart {
  position: relative;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: calc(100vw - 278px - 63px);
}

.listed-cart-product {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 34px;
  width: 100%;
  max-width: 681px;
}

.checkout-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 24px;

  width: 100%;
  max-width: 287px;
  height: fit-content;

  /* White */

  background: var(--white);
  /* Grey/Grey5 */

  border: 1px solid var(--grey-grey5);
  border-radius: 16px;

  position: sticky;
  top: 16px;
  /* top: calc(100vh - 16px - 44px - 726px - 24px); */
}

.checkout-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 100%;

  /* Grey/Grey5 */

  border-bottom: 1px solid var(--grey-grey5);
}

.checkout-header p {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  padding: 16px;

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.checkout-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 100%;
  /* height: 56px; */
}

.checkout-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  /* gap: 345px; */

  width: 100%;
  /* height: 24px; */
}

.checkout-title p {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey2 */

  color: var(--grey-grey2);
}

p.total {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey2 */

  color: var(--grey-grey2);
}

p.price {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
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
