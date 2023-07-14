<template>
  <div class="user-info">
    <div class="client-user-name bdr" v-if="data">
      <div class="client-frame">
        <span>Full name</span><span class="bold">{{ data.firstName }} {{ data.lastName }}</span>
      </div>
      <div class="client-frame" v-for="(phoneNumber, index) in data.phoneNumbers" :key="index">
        <span>Phone number {{ index }}</span><span class="bold">{{ phoneNumber }}</span>
      </div>
      <div class="client-frame">
        <span>Street address</span><span class="bold">{{ data.directions }}</span>
      </div>
      <div class="client-frame">
        <span>Local govt. area</span><span class="bold">{{ data.LGA }}</span>
      </div>
      <div class="client-frame">
        <span>State</span><span class="bold">{{ data.state }}</span>
      </div>
    </div>
    <div class="client-user-name bdr" v-if="data.paymentMethod">
      <div class="client-frame">
        <span>Payment method</span><span class="bold">{{ data.paymentMethod }}</span>
      </div>
      <div class="client-frame" v-if="data.paymentDate">
        <span>Placed on</span><span class="bold">{{ data.paymentDate }}</span>
      </div>
    </div>
    <div class="client-user-name bdr">
      <div class="client-frame">
        <span>Subtotal</span><span class="bold">₦ {{ calculateTotalPrice().toFixed(2) }}</span>
      </div>
      <div class="client-frame">
        <span>Delivery fee</span><span class="bold">#0</span>
      </div>
      <div class="client-frame total">
        <span>Total</span><span class="bold">₦ {{ calculateTotalPrice().toFixed(2) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(["cart"]),
    progressPercentage() {
      // return `${(this.currentStep - 1) * 49.5}`; //returns a string
      return (this.currentStep - 1) * 49.5;
    },
  },
  mounted() {
    console.log(this.data)
  },
  methods: {
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
  }
};
</script>

<style scoped>
.user-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
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
  color: var(--grey-grey1);
}
.total .bold {
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height, or 150% */

  letter-spacing: -0.5px;
}
</style>