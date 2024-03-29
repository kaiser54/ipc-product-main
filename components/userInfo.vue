<template>
  <div class="user-info">
    <div class="client-user-name bdr" v-if="data">
      <div class="client-frame">
        <span>Full name</span
        ><span class="bold">{{ data.firstName }} {{ data.lastName }}</span>
      </div>
      <div class="client-frame" v-if="!checkout">
        <div
          class="client-frame"
          v-for="(phoneNumber, index) in data.phoneNumbers"
          :key="index"
        >
          <span>Phone number {{ index + 1 }}</span
          ><span class="bold">{{ phoneNumber }}</span>
        </div>
      </div>

      <div class="client-frame" v-if="checkout">
        <div class="client-frame">
          <span>Phone number</span
          ><span class="bold">{{ data.phoneNumbers[0] }}</span>
        </div>
      </div>

      <div class="client-frame">
        <span>Street address</span
        ><span class="bold">{{ data.address.streetAddress }}</span>
      </div>
      <div class="client-frame">
        <span>Local govt. area</span
        ><span class="bold">{{ data.LGA || data.address.lga }}</span>
      </div>
      <div class="client-frame">
        <span>State</span
        ><span class="bold">{{ data.state || data.address.state }}</span>
      </div>
      <div class="client-frame" v-if="isTimeandDateNeeded">
        <span>Date</span><span class="bold">{{ formatDates(data?.createdAt) }}</span>
      </div>
      <div class="client-frame" v-if="isTimeandDateNeeded">
        <span>Time</span><span class="bold">{{  formatTimeWithAMPM(data?.createdAt) }}</span>
      </div>
      <slot name="button"></slot>
    </div>
    <slot name="delivery"></slot>
    <slot name="email"></slot>
    <div class="client-user-name bdr" v-if="data.paymentMethod">
      <div class="client-frame">
        <span>Payment method</span
        ><span class="bold">{{ data.paymentMethod }}</span>
      </div>
      <div class="client-frame" v-if="data.paymentDate">
        <span>Placed on</span><span class="bold">{{ data.paymentDate }}</span>
      </div>
    </div>
    <div class="client-user-name bdr section2">
      <div class="client-frame">
        <!-- <span>Subtotal</span><span class="bold">₦ {{ calculateTotalPrice().toFixed(2) }}</span> -->
        <span>Subtotal</span
        ><span class="bold"
          >₦
          {{
            formatPriceWithCommas(getTotalProductPrice(data?.products))
          }}</span
        >
      </div>
      <div class="client-frame">
        <span>Delivery fee <span v-if="validCoupon || data.coupon">(Coupon applied)</span></span
        ><span class="bold" :class="{ strike: validCoupon || data.coupon }"
          >₦ {{ formatPriceWithCommas(data.deliveryFee) }}</span
        >
      </div>
      <div class="client-frame">
        <span>Service charge</span>
        <span class="bold">₦ {{ formatPriceWithCommas(parseFloat((0.035 * getTotalProductPrice(data?.products)).toFixed(2))) }}</span>

      </div>
      <div class="client-frame total">
        <!-- <span>Total</span><span class="bold">₦ {{ calculateTotalPrice().toFixed(2) }}</span> -->
        <span>Total</span>
          <span class="bold">
            <template v-if="validCoupon || data.coupon">
              ₦ {{
                formatPriceWithCommas(
              getTotalProductPrice(data?.products) + 0.035 * getTotalProductPrice(data?.products)
                )
              }}
            </template>
            <template v-else>
              ₦ {{
              formatPriceWithCommas(
              getTotalProductPrice(data?.products) + data?.deliveryFee + 0.035 * getTotalProductPrice(data?.products)
              )
              }}
            </template>
          </span>
      </div>
    </div>
  </div>
</template>

<script>
import { formatPriceWithCommas } from "~/static/formatPrice";
import {
  formatDate,
  formatTimeWithAMPM,
  formatDates,
} from "~/utils/dateUtils";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    isTimeandDateNeeded :{
      type: Boolean,
      default: false,
    },
    validCoupon: {
      type: Boolean,
      default: false,
    },
    checkout: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters("cart", ["TotalCart", "cartTotalQuantity", "cartTotalPrice", "serviceCharge"]),
    progressPercentage() {
      // return `${(this.currentStep - 1) * 49.5}`; //returns a string
      return (this.currentStep - 1) * 49.5;
    },
  },

  mounted() {
    console.log("data", this.data)
  },

  methods: {
    formatDates,
    formatTimeWithAMPM,
    formatPriceWithCommas,
    getTotalProductPrice(products) {
      let price = 0;

      for (const product of products) {
        if (product.totalPrice) {
          price += product.totalPrice;
        }
      }

      return price;
    },
  },
};
</script>

<style scoped>
.user-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  /* max-width: 356px; */
  width: 100%;
}

.client-user-name {
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.bdr {
  display: flex;
  padding: 16px;
  gap: 8px;

  /* Grey/Grey5 */

  border: 1px solid var(--grey-grey5);
  border-radius: 16px;
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
  color: var(--grey-grey-1-base, #101928);
  max-width: 50%;
  text-align: right;
}
.section2 .client-frame .bold {
  color: var(--grey-grey-1-base, #101928);
  max-width: 50%;
  text-align: right;
  font-weight: 700;
}
.total span {
  color: var(--grey-grey-1-base, #101928);
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
}
.total .bold {
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height, or 150% */

  letter-spacing: -0.5px;
}
.bold.strike {
  text-decoration: line-through;
}
</style>