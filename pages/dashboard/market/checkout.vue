<template>
  <div class="checkout__delivery">
    <LoaderSpin v-if="spinner" />

    <!-- Order on the way message -->
    <CheckoutOnTheWayMsg v-show="isPaid" :data="submittedData" />
    <!-- ------------------------ -->

    <div v-show="!isPaid" class="checkout-wrapper">
      <!-- progress bar -->
      <div v-if="!mobile" class="__bg__fixed desktop_mode">
        <CheckoutProgressBar
          :progressPercentage="progressPercentage"
          :currentStep="currentStep"
          :getStepLabel="getStepLabel"
        />
      </div>
      <!-- ------------- -->

      <div class="main">
        <!-- mobile pricing header -->

        <div v-if="mobile" class="order__pricing__group">
          <div class="mobile_ _orders">
            <div class="mobile-order">Orders</div>
            <div class="order-items">{{ TotalCart }} items</div>
          </div>
          <div class="mobile_ _total">
            <div class="mobile-order">Subtotal</div>
            <div class="total-price">
              ₦ {{ formatPriceWithCommas(cartTotalPrice) }}
            </div>
          </div>
        </div>

        <!-- ----------------------- -->

        <div class="user-form-data">
          <transition name="slide" appear>
            <CheckoutAddress
              v-show="currentStep === 1"
              @customEvent="handleFormSubmission"
            />
          </transition>
          <transition name="slide" appear>
            <CheckoutOrderSummary
              v-show="currentStep === 2 && submittedData"
              @customEvent="nextStep"
              @step1="step1"
              :data="submittedData"
            />
          </transition>
          <transition name="slide" appear>
            <CheckoutPayment
              v-show="currentStep === 3 && submittedData"
              @lastStep="lastStep"
              :data="submittedData"
            />
          </transition>
        </div>
        <div class="__order__data" v-if="!mobile">
          <div class="order-title">
            <div class="__title">Order details</div>
            <div class="__list item-list-tag">{{ TotalCart }} items</div>
          </div>
          <div class="cart-lista">
            <OrderProduct2
              tagText="Instock"
              size="small"
              type="positive"
              v-for="(cartItem, index) in cart"
              :key="index"
              :data="cartItem"
              :checkout="true"
              :showSvg="false"
            />
          </div>
          <div class="__pricing">
            <div class="__price">
              <p class="subtotal">Subtotal</p>
              <p class="subprice">
                ₦ {{ formatPriceWithCommas(cartTotalPrice) }}
              </p>
            </div>
            <div class="__price">
              <p class="total">Total</p>
              <p class="price">₦ {{ formatPriceWithCommas(cartTotalPrice) }}</p>
            </div>
          </div>
          <button class="btn ghost-btn" @click="modifyCart">Modify cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import paystack from "vue-paystack";
import axios from "axios";
import { DEV_URL } from "@/plugins/api";
import { formatPriceWithCommas } from "~/static/formatPrice";
// import { startConfetti, stopConfetti } from '@/plugins/confetti'
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  layout: "checkOut",
  data() {
    return {
      spinner: true,
      user: null,
      currentStep: 1,
      isPaid: false,
      mobile: false,
      submittedData: null,
      ref: "",
    };
  },
  created() {
    console.log(this.$config.PAYSTACK_PUBLIC_KEY);
  },
  async mounted() {
    // payStack
    // this.verifyPayment();
    if (process.client) {
      const popup = document.createElement("script");
      popup.setAttribute("src", "https://js.paystack.co/v2/inline.js");
      popup.async = true;
      document.head.appendChild(popup);
    }

    // ^^^^^^^^^^^^^^^^^^

    await this.fetchCartItemsByUserID();
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
    // set loading to true again when component is mounted
    // this.loading = true;

    this.user = false;
    this.spinner = true;
    if (process.client) {
      // Check if localStorage is available
      if (typeof localStorage !== "undefined") {
        // Check if user data is saved in localStorage
        const userData = localStorage.getItem("user");

        if (userData) {
          // User data is available, log it
          this.user = JSON.parse(userData);
          // this.ref = `${this.user._id}-${new Date()}`; //invalid reference
          this.ref = this.reference;
          console.log("ref", this.ref);
          console.log("User data in localStorage:", JSON.parse(userData));
        } else {
          // User data is not found in localStorage
          console.log("User data not found in localStorage.");
        }
      } else {
        // Local Storage is not available in this environment
        // You can handle this situation accordingly
        console.log("LocalStorage is not available in this environment.");
      }
    }
    this.spinner = false;
  },

  computed: {
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    },
    progressPercentage() {
      // return `${(this.currentStep - 1) * 49.5}`; //returns a string
      return (this.currentStep - 1) * 49.5;
    },
    ...mapState("cart", ["cart", "cartLoading", "totalPrice", "error"]),
    ...mapGetters("cart", [
      "TotalCart",
      "cartTotalQuantity",
      "cartTotalPrice",
      "cartFullPrice",
    ]),
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
    if (this.$route.path === "/dashboard") {
      // Perform an automatic redirect to "/dashboard/market"
      this.$router.redirect("/dashboard/market");
    }
  },

  methods: {
    nairaToKobo(amount) {
      return Math.ceil(amount * 100);
    },
    ...mapActions("cart", ["fetchCartItemsByUserID"]),
    formatPriceWithCommas,
    checkScreenSize() {
      if (window.innerWidth < 951) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    },
    handleFormSubmission(data) {
      this.submittedData = data;
      console.log(data);
      if (this.currentStep < 3) {
        this.currentStep++;
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
    async lastStep() {
      this.spinner = true;
      this.payWithPaystack();
      // try {
      // Prepare data
      // const data = {
      //   email: this.submittedData?.email,
      //   amount: this.nairaToKobo(this.submittedData?.totalPrice),
      //   firstName: this.submittedData?.firstName,
      //   lastName: this.submittedData?.lastName,
      //   phoneNumber: this.submittedData?.phoneNumbers,
      //   callback_url: "https://app.ipc-africa.com/dashboard/market/checkout",
      // };

      // console.log("Submit data:", data);

      // Send POST request to initialize payment
      // const response = await axios.post(
      //   `${DEV_URL}/paystack/initialize/`,
      //   data
      // );

      // this.ref = response.data.data.data.reference;

      // console.log("Payment initialization response:", response.data);
      // console.log(
      //   "Payment reference response:",
      //   response.data.data.data.reference
      // );

      // Initialize PaystackPop and resume transaction
      // const paystack = new window.PaystackPop();
      // const accessCode = response.data.data.data.access_code;
      // paystack.resumeTransaction(accessCode);
      // verify payment
      // this.verifyPayment();
      // } catch (error) {
      //   console.error("Error:", error.message);
      // }
    },

    payWithPaystack() {
      this.spinner = true;
      const handler = PaystackPop.setup({
        // key: process.env.PAYSTACK_PUBLIC_KEY, // Replace with your public key
        key: "pk_test_3319daf09404682ea805ac89a163ff5499a14d03", // Replace with your public key
        email: this.submittedData?.email,
        amount: this.nairaToKobo(this.submittedData?.totalPrice),
        // ref: "" + Math.floor(Math.random() * 1000000000 + 1), // Generate a pseudo-unique reference
        ref: this.ref, // Generate a pseudo-unique reference
        onClose: () => {
          alert("Window closed.");
        },
        callback: (response) => {
          const message = "Payment complete! Reference: " + response.reference;
          alert(message);
          this.submitForm();
        },
      });
      this.spinner = false;
      handler.openIframe();
    },

    async verifyPayment() {
      console.log("Verifying payment");
      console.log("this.ref:", this.ref);

      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
          reference: this.ref,
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        const response = await fetch(
          `${DEV_URL}/paystack/verify/`,
          requestOptions
        );

        if (response.ok) {
          const result = await response.json();
          console.log("Verification result:", result);

          if (result.status === "success") {
            console.log("Payment verification successful!");
            this.submitForm();
            return; // Exit the retry loop
          }
        }

        // Payment is not successful, so retry the verification after a delay (1 second)
        setTimeout(this.verifyPayment, 1000);
      } catch (error) {
        console.error("Error:", error);
        // Handle any errors that occur during the verification process
      }
    },

    step1() {
      this.currentStep = 1;
      console.log("clicked");
    },

    async submitForm() {
      this.spinner = true;
      this.submittedData.reference = this.ref;
      console.log("submit data:", this.submittedData);

      try {
        const headers = {
          "Content-Type": "application/json",
        };

        const response = await axios.post(
          `${DEV_URL}/orders/`,
          this.submittedData,
          {
            headers: headers,
          }
        );

        console.log("Response from the backend:", response.data);

        if (response.data.status === "success") {
          this.isPaid = true;
          window.startConfetti();
        } else {
          console.log(response);
          throw new Error("Failed to create an order.");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        this.spinner = false;
      }
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
    modifyCart() {
      this.$router.push("/dashboard/market/cart");
    },
  },
};
</script>

<style scoped>
.main {
  /* margin-top: 24px; */
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
  /* position: fixed; */
  position: sticky;
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
.cart-lista {
  max-height: 190px;
  overflow: scroll;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
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


.fade-enter-active,
.fade-leave-active {
 transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
 opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
 transition: transform .5s;
}

.slide-enter,
.slide-leave-to {
 transform: translateX(100vw);
 opacity: 0.3;
}
</style>
