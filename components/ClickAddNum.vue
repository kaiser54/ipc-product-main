<template>
  <div class="num-btn">
    <!-- phone number -->

    <div class="phone-number">
      <div class="phone-num" v-if="phoneNumbers.length === 0">
        <label for="phoneNumber">Phone number </label>
        <input
          class="input"
          id="phone-number"
          type="tel"
          v-model="newNumber"
          placeholder="Enter phone number"
        />
      </div>
      <div
        class="phone-num"
        v-for="(number, index) in phoneNumbers"
        :key="index"
      >
        <label :for="'phone-number-' + (index + 1)"
          >Phone number {{ index + 1 }}</label
        >
        <input
          class="input"
          :id="'phone-number-' + (index + 1)"
          type="tel"
          :value="number"
          :readonly="disabled"
        />
      </div>
    </div>

    <!-- ------------ -->

    <!-- input field where the new number is been added -->

    <div
      class="new-phone-number animate__animated animate__slideInDown"
      v-if="showNewPhoneNumber"
    >
      <InputOne
      v-if="phoneNumbers.length <= 1"
        class="inputed"
        id="number"
        v-model="newPhoneNumber"
        type="tel"
        placeholder="Add new number"
        :required="false"
        :invalid="invalidNumber"
        :errorMessage="errorMessage"
      />

      <!--  click this button to save the inputed number  -->

      <PrimaryBtn @click="addNumBtn" buttonText="Add" />

      <!-- ---------------------------------------------- -->

      <!-- close and clear the imput field button -->
      <svg
        @click="closeNumber"
        style="margin-top: 22px"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M4.16602 15.8307L15.8327 4.16406M4.16602 4.16406L15.8327 15.8307L4.16602 4.16406Z"
          stroke="#565C69"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <!-- ------------------------------------- -->
    </div>

    <!-- the button that toggles the input field for the add phone number -->

    <add-num-btn @click="openAddNumber" v-if="phoneNumbers.length <= 1"/>

    <!-- ---------------------------------------------------------------- -->
  </div>
</template>


<script>
import "animate.css";
export default {
  props: {
    phoneNumbers: {
      type: Array,
      required: true,
    },
    invalidNumber: {
      type: Boolean,
      required: true,
    },
    showNewPhoneNumber: {
      type: Boolean,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      newPhoneNumber: "",
      newNumber: "",
      errorMessage: "Enter a valid phone number",
    };
  },
  methods: {
    openAddNumber() {
      this.$emit("open-number");
      // this.localShowNewPhoneNumber = true; // Update the local data property
      this.phoneNumbers.push(this.newNumber); // Push the number into the array
    },
    closeNumber() {
      this.$emit("close-number");
      this.newPhoneNumber = "";
      // this.localShowNewPhoneNumber = false;
      // this.localInvalidNumber = false;
    },
    addNumBtn() {
      this.$emit("add-number", this.newPhoneNumber);
      this.newPhoneNumber = ""; // Clear the value to an empty string
    },
  },
};
</script>


<style scoped>
.num-btn {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}
.phone-number {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}
.phone-num {
  width: 100%;
  display: flex;
  gap: 8px;
  flex-direction: column;
}
.new-phone-number {
  max-width: 429px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
}
.new-phone-number .inputed {
  max-width: 277px;
  width: 100%;
}
.new-phone-number button {
  max-width: 80px;
  margin-top: 8px;
}
</style>