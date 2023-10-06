<template>
  <div class="user-details-component animate__animated animate__slideInRight">
    <div class="component-header">
      <!-- the top back name and car component -->
      <ProfileUserNavHeader
        @redirectToprofilepage="$emit('redirectToprofilepage')"
        :modalName="modalName"
      />
      <!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->
    </div>
    <slot name="components"/>
  </div>
</template>
  
  <script>
import { mapState } from "vuex";
import "animate.css";
export default {
  data() {
    return {
      addNumberFunc: false,
      myValue: "08123456789",
      isDisabled: true,
      // phoneNumbers: ["08100023262"],
      invalidNumber: false,
      modalName: "Profile",
    };
  },
  computed: {
    ...mapState(["cart"]),
    getCartLength() {
      const cartLength = this.$store.state.cart.length;
      return cartLength;
    },
  },
  methods: {
    toggleAddNumberFunc() {
      this.addNumberFunc = !this.addNumberFunc;
    },
    handleAddNumber(newPhoneNumber) {
      const phoneNumberRegex =
        /^((090)[23589])|((070)[1-9])|((080)[2-9])|((081)[0-9])(\d{7})$/;
      if (phoneNumberRegex.test(newPhoneNumber)) {
        this.phoneNumbers.push(newPhoneNumber);
        this.showNewPhoneNumber = false; // Hide the new-phone-number div
        this.invalidNumber = false; // Reset the invalidNumber flag
        newPhoneNumber = null;
      } else {
        this.invalidNumber = true;
        this.showNewPhoneNumber = true;
      }
    },
  },
};
</script>
  
  <style scoped>
.flex {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  /* margin: 0 16px; */

  /* max-width: 575px; */
  width: auto;
}

.acc-btn {
  width: 100%;
}

button.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;
  background: none;
  width: auto;
}

button.btn p {
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}
.component-header{
  position: sticky;
}
</style>
  