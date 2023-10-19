<template>
  <div class="cart-view" v-if="cart">
    <div class="mobile-cart" v-if="mobile">
      <CartMobile v-if="cart.length" />
      <EmptyStates @leaveCart="leaveCart" v-else class="empty-state">
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
              Visit the market to purchase your food items, kitchen utensils,
              and other necessary products.
            </div>
          </div>
        </template>
      </EmptyStates>
    </div>
    <div class="title-header" v-if="!mobile">
      <div class="page-head-content">
        <goback />
        <h2 class="h2-medium">Shopping cart</h2>
      </div>
    </div>

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

    <div class="listed-cart" v-if="!mobile">
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
      </div>
      <div class="checkout-container">
        <div class="checkout-header">
          <p>Cart summary</p>
        </div>
        <div class="checkout-details">
          <div class="checkout-title">
            <p>Orders</p>
            <div class="item-list-tag">{{ TotalCart }} items</div>
          </div>
          <div class="total-price checkout-title">
            <p class="total">Subtotal</p>
            <p class="price">₦ {{ formatPriceWithCommas(cartTotalPrice) }}</p>
          </div>
        </div>
        <nuxt-link to="/dashboard/market/checkout">
          <button class="btn primary-btn">Checkout</button>
        </nuxt-link>
      </div>
    </div>
    <!-- <div class="category-list">
      <div class="categories">
        <CategoryCards Header="Recommended for you" />
      </div>
      <div class="categories">
        <CategoryCards Header="Check these out" />
      </div>
      <div class="categories">
        <CategoryCards Header="You might also like this" />
      </div>
    </div> -->
  </div>
</template>

<script>
import { formatPriceWithCommas } from "~/static/formatPrice";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  layout: "dashboardview",
  // Other component properties and methods
  data() {
    return {
      user: null,
      pageTitle: "Gosource | cart",
      mobile: false,
    };
  },
  head() {
    return {
      title: this.pageTitle,
    };
  },
  created() {
    this.fetchCartItemsByUserID();
  },
  async mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
  computed: {
    cartItems() {
      return this.cart;
    },
    ...mapState("cart", ["cart", "cartLoading", "totalPrice", "error"]),
    ...mapGetters("cart", ["TotalCart", "cartTotalPrice"]),
  },
  methods: {
    formatPriceWithCommas,
    counterPlus(e) {
      this.increaseItem(e);
    },
    counterMinus(e) {
      (e);
      this.reduceQuantity(e);
    },
    ...mapActions("cart", [
      "fetchCartItemsByUserID",
      "addToCart",
      "increaseItem",
      "reduceQuantity",
    ]),
    checkScreenSize() {
      if (window.innerWidth <= 950) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    },
    leaveCart() {
      this.$router.push("/dashboard/market");
    },
  },
};
</script>

<style scoped>
.empty-state {
  margin-top: -100px;
}
a {
  width: 100%;
}
.cart-view {
  display: flex;
  flex-direction: column;
  /* gap: 32px; */
  width: 100%;
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
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 34px;
  width: 100%;
  max-width: 681px;
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
.category-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
}
</style>

<style>
.nuxt-link-active .desktop-nav {
  background: var(--supporting-green-s-300);
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
