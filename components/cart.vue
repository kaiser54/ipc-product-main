<template>
  <div class="stay-up">
    <div class="full-cart-bg">
      <div class="full-cart animate__animated animate__slideInRight">
        <header>
          <div class="modal-title">
            <svg @click="triggerCart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none">
              <path d="M5 19L19 5M5 5L19 19L5 5Z" stroke="#565C69" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            <h3 class="h3-medium">Shopping bag</h3>
          </div>
        </header>
        <div v-if="cart.length === 0">
          <p>Your cart is empty.</p>
        </div>
        <div class="cart-list">
          <cartList v-for="product in cart" :key="product.id" :product="product" :inCart="true" class="cart-list-con" />
        </div>
        <div class="checkout-container">
          <div class="checkout-details">
            <div class="checkout-title">
              <p>Orders</p>
              <div class="item-list-tag">
                7 items
              </div>
            </div>
            <div class="total-price checkout-title">
              <p class="total">Subtotal</p>
              <p class="price">₦20,000</p>
            </div>
          </div>
          <button class="btn primary-btn" @click="checkout">Checkout</button>
        </div>
      </div>
      <div class="cart-bg" @click="closeCart"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import "animate.css";
export default {
  computed: {
    ...mapState(['cart']),
  },
  methods: {
    ...mapMutations(['removeFromCart']),
    triggerCart() {
      this.$emit("openCart");
    },
    closeCart() {
      this.$emit("openCart");
    },
    checkout() {
      this.triggerCart()
      this.gotoCart()
    },
    gotoCart() {
      this.$router.push('/dashboard/market/cart')
    },
  },
};
</script>

<style scoped>
.stay-up {
  position: relative;
  top: 0;
  left: auto;
  z-index: 1;
}

.full-cart-bg {
  display: flex;
  justify-content: flex-end;
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0px;
  top: 0px;
}

.full-cart {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 16px;

  position: absolute;
  width: 100%;
  max-width: 489px;
  height: 100vh;
  margin-right: auto;
  top: 0px;

  background: #ffffff;
}

header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 24px 0px 16px;
  gap: 16px;

  width: 100%;
  height: 72px;

  /* White */

  background: var(--white);
  /* Grey/Grey5 */

  border-bottom: 1px solid var(--grey-grey5);
}

.modal-title {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-title svg {
  position: absolute;
  width: 24px;
  height: 24px;
  left: 0px;
  top: 3px;
}

.modal-title h3 {
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height, or 150% */

  text-align: center;
  letter-spacing: -0.5px;

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.cart-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  width: 100%;
  height: calc(100vh - 100px - 193px);
  overflow-y: scroll;
}
.cart-list-con {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  padding-bottom: 32px;

  /* width: 441px; */
  width: 100%;
  height: 122px;
  border-bottom: 1px solid var(--grey-grey5);
}

.checkout-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 24px;

  width: 100%;
  /* height: 160px; */

  /* White */

  background: var(--white);
  /* Grey/Grey5 */

  border: 1px solid var(--grey-grey5);
  border-radius: 16px;
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
.cart-bg {
  width: 100%;
  height: 100vh;
  background: rgba(48, 50, 55, 0.3);
}
a {
  width: 100%;
}
</style>
