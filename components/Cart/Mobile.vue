<template>
  <div class="">
    <div class="order__pricing__group">
      <div class="mobile_ _orders">
        <div class="mobile-order">Orders</div>
        <div class="order-items">
          {{ formatPriceWithCommas(TotalCart) }} items
        </div>
      </div>
      <div class="mobile_ _total">
        <div class="mobile-order">Subtotal</div>
        <div class="total-price">
          ₦ {{ formatPriceWithCommas(cartTotalPrice) }}
        </div>
      </div>
    </div>
    <div class="listed-cart-product">
      <CartList
        class="cart-list-con"
        v-for="(items, index) in cartItems"
        :key="index"
        :items="items"
        :inCart="true"
        @counterPlus="counterPlus"
        @counterMinus="counterMinus"
      />
      <EmptyStates @leaveCart="leaveCart" v-if="cart.length < 0">
      <template v-slot:svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="357"
          height="178"
          viewBox="0 0 357 178"
          fill="none"
        >
          <rect
            x="28"
            y="1.40625"
            width="301"
            height="175.188"
            rx="15.5"
            fill="white"
          />
          <rect
            x="43.5"
            y="16.9062"
            width="44.4375"
            height="32.0625"
            rx="6.19761"
            fill="#E5E7EF"
          />
          <rect
            x="94.6875"
            y="16.9062"
            width="79.875"
            height="8"
            rx="4"
            fill="#E5E7EF"
          />
          <rect
            x="94.6875"
            y="31.0938"
            width="46.1052"
            height="8"
            rx="4"
            fill="#E5E7EF"
          />
          <rect
            x="244.312"
            y="16.9062"
            width="69.1875"
            height="8"
            rx="4"
            fill="#E5E7EF"
          />
          <rect
            x="43.5"
            y="72.9688"
            width="44.4375"
            height="32.0625"
            rx="6.19761"
            fill="#E5E7EF"
          />
          <rect
            x="94.6875"
            y="72.9688"
            width="79.875"
            height="8"
            rx="4"
            fill="#E5E7EF"
          />
          <rect
            x="94.6875"
            y="87.1562"
            width="46.1052"
            height="8"
            rx="4"
            fill="#E5E7EF"
          />
          <rect
            x="244.312"
            y="72.9688"
            width="69.1875"
            height="8"
            rx="4"
            fill="#E5E7EF"
          />
          <rect
            x="43.5"
            y="129.031"
            width="44.4375"
            height="32.0625"
            rx="6.19761"
            fill="#F4F5F8"
          />
          <rect
            x="94.6875"
            y="129.031"
            width="79.875"
            height="8"
            rx="4"
            fill="#F4F5F8"
          />
          <rect
            x="94.6875"
            y="143.219"
            width="46.1052"
            height="8"
            rx="4"
            fill="#F4F5F8"
          />
          <rect
            x="244.312"
            y="129.031"
            width="69.1875"
            height="8"
            rx="4"
            fill="#F4F5F8"
          />
          <rect
            x="28"
            y="1.40625"
            width="301"
            height="175.188"
            rx="15.5"
            stroke="#F4F5F8"
          />
        </svg>
      </template>
      <template v-slot:message>
        <div class="message">
          <h2 class="">Your cart is empty</h2>
          <div class="snippet">
            Visit the market to purchase your food items, kitchen utensils, and
            other necessary products.
          </div>
        </div>
      </template>
    </EmptyStates>
    </div>
    <!-- <div class="checkout-bottom mobile-nav-bar">
      <button class="btn primary-btn" @click="leaveCart">Checkout</button>
    </div> -->
  </div>
</template>

<script>
import { formatPriceWithCommas } from "~/static/formatPrice";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  async mounted() {
    await this.fetchCartItemsByUserID();
  },
  computed: {
    cartItems() {
      return this.cart;
    },
    ...mapState("cart", ["cart", "cartLoading", "totalPrice", "error"]),
    ...mapGetters("cart", ["TotalCart", "cartTotalQuantity", "cartTotalPrice"]),
  },
  methods: {
    leaveCart() {
      this.$router.push('/dashboard/market/checkout');
    },
    formatPriceWithCommas,
    counterPlus(e) {
      this.addToCart(e);
    },
    counterMinus(e) {
      this.reduceQuantity(e);
    },
    ...mapActions("cart", [
      "fetchCartItemsByUserID",
      "addToCart",
      "reduceQuantity",
    ]),
  },
};
</script>

<style scoped>
.order__pricing__group {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 8px;

  width: 100%;
  /* height: 88px; */

  /* Grey/Grey6 */

  background: var(--grey-grey6);

  width: 100%;
  position: fixed;
  top: 64px;
  left: 0;
  z-index: 1;
}

.mobile_ {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  width: 100%;
}

.mobile-orders {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey2 */

  color: var(--grey-grey2);
}

.order-items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  gap: 10px;

  height: 24px;

  /* Grey/Grey5 */

  background: var(--grey-grey5);
  border-radius: 100px;
}

.total-price {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: right;

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.listed-cart-product {
  display: flex;
  flex-direction: column;
  gap: 24px;
  /* margin-top: 170px; */
}
.checkout-bottom {
  padding: 16px;
  height: auto;
}
.mobile-nav-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 5.5px;
  gap: 16px;

  position: fixed;
  width: 100%;
  height: 76px;
  left: 0px;
  bottom: 0px;
  z-index: 999999999;

  /* White */

  background: #ffffff;
  /* Grey/Grey5 */

  border-top: 1px solid var(--grey-grey5);
  /* Nav bar */

  box-shadow: 0px 0px 20px rgba(48, 50, 55, 0.2);
}
@media (max-width: 374px) {
  .mobile-nav-bar {
    /* padding: 0; */
    gap: 0;
  }
}
</style>