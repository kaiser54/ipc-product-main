<template>
  <div class="checkout__delivery">
    <LoaderSpin v-if="spinner" />

    <!-- Order on the way message -->
    <CheckoutOnTheWayMsg
      v-show="isPaid"
      :data="submittedData"
      @showInvoice="generateAndDownloadPDF"
    />
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
          <CheckoutAddress
            v-show="currentStep === 1"
            @customEvent="handleFormSubmission"
            :lastCheckoutDetails="lastCheckoutDetails"
          />

          <CheckoutOrderSummary
            v-show="currentStep === 2 && submittedData"
            @customEvent="nextStep"
            @step1="step1"
            :data="submittedData"
          />

          <CheckoutPayment
            v-show="currentStep === 3 && submittedData"
            v-if="user"
            @lastStep="lastStep"
            @handleCoupon="handleCoupon($event)"
            :data="submittedData"
            :canBuyOnCredit="user?.canBuyOnCredit"
            :loaderClass="loaderClass"
            :couponError="couponError"
          />
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
            <div class="__price" style="display: none">
              <p class="total">Total</p>
              <p class="price">₦ {{ formatPriceWithCommas(cartTotalPrice) }}</p>
            </div>
          </div>
          <button class="btn ghost-btn" @click="modifyCart">Modify cart</button>
        </div>
      </div>
    </div>
    <div class="invoice">
      <Invoice
        v-if="currentStep === 3 && isPaid"
        :customer="submittedData"
        :orders="invoiceData"
        :user="user"
        ref="myComponent"
        id="componentToSave"
      />
    </div>
  </div>
</template>

<script>
// import paystack from "vue-paystack";
import jsPDF from "jspdf";
import axios from "axios";
import { DEV_URL } from "@/plugins/api";
import { formatPriceWithCommas } from "~/static/formatPrice";
// import { startConfetti, stopConfetti } from '@/plugins/confetti'
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  layout: "checkOut",
  data() {
    return {
      lastCheckoutDetails: null,
      spinner: true,
      userID: "",
      user: null,
      currentStep: 1,
      isPaid: false,
      mobile: false,
      submittedData: null,
      ref: "",
      invoiceData: null,
      couponError: false,
      couponLoading: false,
      loaderClass: '',
    };
  },
  created() {
    // this.$config.PAYSTACK_PUBLIC_KEY;
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
    this.spinner = true;
    if (process.client) {
      // Check if localStorage is available
      if (typeof localStorage !== "undefined") {
        // Check if user data is saved in localStorage
        const userData = localStorage.getItem("user");

        if (userData) {
          // User data is available, log it
          const newData = JSON.parse(userData);
          this.userID = newData._id;
          this.fetchUserData();
        } else {
          // User data is not found in localStorage
          ("User data not found in localStorage.");
        }
      } else {
        // Local Storage is not available in this environment
        // You can handle this situation accordingly
        ("LocalStorage is not available in this environment.");
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
      "serviceCharge",
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
    async lastStep(data) {
      this.spinner = true;
      if (data.paymentMethod === "CARD") {
        this.payWithPaystack(data);
      } else {
        this.ref = "PAYMENT IS MADE ON CREDIT";
        this.submitForm(data);
      }
    },
    payWithPaystack(data) {
      this.ref = this.reference;
      this.spinner = true;
      const handler = PaystackPop.setup({
        key: this.$config.PAYSTACK_PUBLIC_KEY,
        email: this.submittedData?.email,
        amount: this.nairaToKobo(this.submittedData?.totalPrice),
        // ref: "" + Math.floor(Math.random() * 1000000000 + 1), // Generate a pseudo-unique reference
        ref: this.ref, // Generate a pseudo-unique reference
        onClose: () => {
          // alert("Window closed.");
        },
        callback: (response) => {
          const message = "Payment complete! Reference: " + response.reference;
          // alert(message);
          this.submitForm(data);
        },
      });
      this.spinner = false;
      handler.openIframe();
    },
    step1() {
      this.currentStep = 1;
      ("clicked");
    },

    async handleCoupon(newVal) {
      this.couponLoading = true;
      this.loaderClass = "coupon-loader";
      try {
        const res = await axios.get(`${DEV_URL}/coupon/${newVal}`);
        this.loaderClass = "check";
      } catch (error) {
      this.couponError = true;
      } finally {
        setTimeout(() => {
          this.couponLoading = false;
          this.loaderClass = null;
      this.couponError = false;
        }, 3000);
      }
    },

    async submitForm(data) {
      this.spinner = true;
      data.reference = this.ref;
      data.serviceCharge = this.serviceCharge;
      data.businessName =
        this.user.businessName ||
        `${this.user.firstName} ${this.user.lastName}`;
      try {
        const headers = {
          "Content-Type": "application/json",
        };

        const response = await axios.post(
          `${DEV_URL}/orders`,
          this.submittedData,
          {
            headers: headers,
          }
        );
        if (response.status === 201 || response.status === 200) {
          this.invoiceData = response.data.data;
          this.isPaid = true;
          window.startConfetti();
        } else {
          response;
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
    async generateAndDownloadPDF() {
      var doc = new jsPDF();

      // Wait for the document to be fully loaded before generating the PDF
      doc.html(document.querySelector("#componentToSave"), {
        callback: function (pdf) {
          // Save the PDF with the desired filename
          pdf.save("Invoice_gosource.pdf");
        },
        margin: 5,
        autoPaging: "text",
        x: 0,
        y: 0,
        width: 190,
        windowWidth: 675,
      });
    },
    async fetchUserData() {
      try {
        const response = await axios.get(
          `${DEV_URL}/business-customers/${this.userID}`
        );
        this.user = response.data.data.customer;
        this.lastCheckoutDetails = this.user.lastCheckoutDetails;
      } catch (error) {
        console.error("Error getting user:", error);
      }
    },
  },
};
</script>

<style scoped>
.main {
  margin-top: 24px;
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
  /* margin-top:50px; */
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
  top: 72px;
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
.invoice {
  position: absolute;
  left: 95%;
  height: 0vh;
  overflow: hidden;
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
