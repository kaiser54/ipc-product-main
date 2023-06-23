<template>
  <div class="checkout__delivery">
    <onTheWayMsg v-if="isPaid" />
    <div v-else class="checkout-wrapper">
      <div v-if="!mobile" class="__bg__fixed">
        <progressBar
          :progressPercentage="progressPercentage"
          :currentStep="currentStep"
          :getStepLabel="getStepLabel"
        />
      </div>
      <div class="main">
        <div v-if="mobile" class="order__pricing__group">
          <div class="mobile_ _orders">
            <div class="mobile-order">Orders</div>
            <div class="order-items">{{ cart.length }} items</div>
          </div>
          <div class="mobile_ _total">
            <div class="mobile-order">Subtotal</div>
            <div class="total-price">
              ₦ {{ calculateTotalPrice().toFixed(2) }}
            </div>
          </div>
        </div>
        <div class="user-form-data">
          <CheckoutAddress v-show="currentStep === 1" @customEvent="nextStep" />
          <orderSummary v-show="currentStep === 2" @customEvent="nextStep" />
          <payment v-show="currentStep === 3" @lastStep="lastStep" />
        </div>
        <div class="__order__data" v-if="!mobile">
          <div class="order-title">
            <div class="__title">Order details</div>
            <div class="__list item-list-tag">{{ cart.length }} items</div>
          </div>
          <div class="cart-lista"></div>
          <div class="__pricing">
            <div class="__price">
              <p class="subtotal">Subtotal</p>
              <p class="subprice">₦ {{ calculateTotalPrice().toFixed(2) }}</p>
            </div>
            <div class="__price">
              <p class="total">Total</p>
              <p class="price">₦ {{ calculateTotalPrice().toFixed(2) }}</p>
            </div>
          </div>
          <button class="btn ghost-btn" @click="modifyCart">Modify cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { startConfetti, stopConfetti } from '@/plugins/confetti'
import { mapState, mapMutations } from "vuex";
export default {
  layout: "checkOut",
  data() {
    return {
      currentStep: 1,
      isPaid: false,
      mobile: false,
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
    // set loading to true again when component is mounted
    // this.loading = true;
  },
  computed: {
    ...mapState(["cart"]),
    progressPercentage() {
      // return `${(this.currentStep - 1) * 49.5}`; //returns a string
      return (this.currentStep - 1) * 49.5;
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
    if (this.$route.path === "/dashboard") {
      // Perform an automatic redirect to "/dashboard/market"
      this.$router.redirect("/dashboard/market");
    }
  },
  methods: {
    checkScreenSize() {
      if (window.innerWidth < 951) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    },
    nextStep() {
      if (this.currentStep < 3) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    lastStep() {
      // if (this.currentStep == 3) {
      //   this.currentStep = 1;
      // }
      this.isPaid = true;
      window.startConfetti();

      // Stop confetti after 10 seconds
      // setTimeout(window.stopConfetti(), 50000);
    },
    submitForm() {
      // Handle form submission
    },
    getStepLabel(step) {
      if (step === 1) {
        return "Address details";
      } else if (step === 2) {
        return "Order summary";
      } else if (step === 3) {
        return "Payment method";
      }
    },
    calculateTotalPrice() {
      let totalPrice = 0;

      for (const product of this.cart) {
        const productInCart = this.$store.state.cart.find(
          (p) => p.id === product.id
        );
        const quantity = productInCart ? productInCart.quantity : 0;
        totalPrice += product.price * quantity;
      }

      return totalPrice;
    },
    modifyCart() {
      this.$router.push("/dashboard/market/cart");
    },
  },
};
</script>

<style scoped>
.main {
  margin-top: 124px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
}

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

.user-form-data {
  /* max-width: 833px; */
  max-width: 491px;
  width: 100%;
}

.__bg__fixed {
  background: var(--white);
  position: fixed;
  z-index: 9;
  width: 100%;
  padding-bottom: 24px;
  top: 98.39px;
  /* height: 90px;*/
}

/*.checkout-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 43px;
  max-width: 833px; 
  width: 100%;
}*/
.__order__data {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;

  max-width: 345px;
  width: 100%;

  background: #ffffff;
  /* Grey/Grey5 */

  border: 1px solid var(--grey-grey5);
  border-radius: 16px;

  position: sticky;
  top: 224px;
}

.order-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 16px;

  border-bottom: 1px solid var(--grey-grey5);
}

.__title {
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height, or 150% */

  letter-spacing: -0.5px;

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.__pricing {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  padding-bottom: 16px;

  border-bottom: 1px solid var(--grey-grey5);
}

.__price {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.subtotal {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey2 */

  color: var(--grey-grey2);
}

.subprice {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: right;

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.total {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.price {
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height, or 150% */

  text-align: right;
  letter-spacing: -0.5px;
  color: var(--grey-grey1);
}
@media (max-width: 950px) {
  .main {
    margin-top: auto;
    gap: 24px;
    flex-direction: column;
  }
  .user-form-data {
    max-width: 100%;
    max-width: 90%;
    margin-inline: auto;
  }
}
</style>
