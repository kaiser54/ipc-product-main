<template>
  <div class="stay-up">
    <div class="full-cart-bg">
      <transition name="slide" appear>
        <div class="full-cart" v-if="showModal">
          <header>
            <div class="modal-title">
              <svg
                @click="$emit('closeCart')"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 19L19 5M5 5L19 19L5 5Z"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3 class="h3-medium">Shopping cart</h3>
            </div>
          </header>
          <div class="cart-list">
            <EmptyStates v-if="cart.length == 0" @leaveCart="leaveCart">
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
                    Visit the market to purchase your food items, kitchen
                    utensils, and other necessary products.
                  </div>
                </div>
              </template>
            </EmptyStates>
            <div class="cart-lista" v-if="cart.length > 0">
              <CartList
                class="cart-list-con"
                v-for="(items, index) in cartItems"
                :key="index"
                :items="items"
                :inCart="true"
              />
            </div>
          </div>
          <div class="checkout-wrap" v-if="cart.length > 0">
            <div class="checkout-container">
              <div class="checkout-details">
                <div class="checkout-title">
                  <p>Orders</p>
                  <div class="item-list-tag">
                    {{ formatPriceWithCommas(TotalCart) }} items
                  </div>
                </div>
                <div class="total-price checkout-title">
                  <p class="total">Subtotal</p>
                  <p class="price">
                    ₦ {{ formatPriceWithCommas(cartTotalPrice) }}
                  </p>
                </div>
              </div>
                <div class="set-btn">
                  <button class="btn primary-btn" @click="checkout">
                Checkout
              </button>
              <button class="btn neutral-btn" @click="clearCart">
                Clear cart
              </button>
                </div>
            </div>
          </div>
        </div>
      </transition>
      <transition name="fade" appear>
        <div
          class="modal-overlay cart-bg"
          v-if="showModal"
          @click="$emit('closeCart')"
        ></div>
      </transition>
    </div>
  </div>
</template>

<script>
import { formatPriceWithCommas } from "~/static/formatPrice";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  props: {
    showModal: {
      type: Boolean,
    }
  },
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
    formatPriceWithCommas,
    counterPlus(e) {
      this.increaseItem(e);
    },
    counterMinus(e) {
      this.reduceQuantity(e);
    },
    ...mapActions("cart", [
      "fetchCartItemsByUserID",
      "addToCart",
      "reduceQuantity",
      "increaseItem",
      "clearCartItems"
    ]),
    checkout() {
      this.$emit("closeCart");
      this.$router.push("/dashboard/market/cart");
    },
    leaveCart() {
      this.$emit("closeCart");
      this.$router.push("/dashboard/market");
    },
    async clearCart() {
      if (process.client) {
        const userData = JSON.parse(localStorage.getItem("user"));
        const customerId = userData._id;
        await this.clearCartItems(customerId);
      }
    },
    // async sendPostRequest(customerId) {
    //   try {
    //     const response = await this.$axios.delete(`/cart/delete-customers-items/${customerId}`);
    //     console.log(response.data); 

    //   } catch (error) {
    //     console.error('Error deleting customer items:', error);
    //   }
    // },
  }
}
</script>

<style scoped>
.stay-up {
  position: relative;
  top: 0;
  left: auto;
  z-index: 2;
}
.set-btn{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}
.full-cart-bg {
  display: flex;
  justify-content: flex-end;
  position: absolute;
  width: 100%;
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
  max-width: 40%;
  height: 100vh;
  margin-right: auto;
  top: 0px;

  background: #ffffff;

  position: fixed;
  top: 50%;
  right: 0%;
  transform: translate(-0%, -50%);
  z-index: 99;
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
  /* height: calc(100vh - 100px - 193px); */
  overflow-y: scroll;
}

.cart-lista {
  margin-bottom: 170px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
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

.checkout-wrap {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 24px;
  background: white;
  z-index: 1;
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

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}

a {
  width: 100%;
}

/* ANIMATIONS */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
</style>
