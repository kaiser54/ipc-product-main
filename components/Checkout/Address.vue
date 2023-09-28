<template>
  <div>
    <div class="individual-form">
      <h3 class="h3-medium header-text">Address details</h3>
      <div class="myAuth-group">
        <div class="myAuth">
          <div class="form-group">
            <div class="form-field">
              <div class="personal">
                <InputOne
                  id="FirstName"
                  label="First name"
                  v-model="FirstName"
                  type="text"
                  placeholder="Lanre"
                  :required="true"
                  :invalid="invalidName"
                  :errorMessage="FNErrorMessage"
                />

                <InputOne
                  id="LastName"
                  label="Last name"
                  v-model="lastName"
                  type="text"
                  placeholder="Bello"
                  :required="true"
                  :invalid="invalidLastName"
                  :errorMessage="LNErrorMessage"
                />
              </div>
              <!-- <ClickAddNum
                :phone-numbers="phoneNumbers"
                :invalidNumber="invalidNumber"
                :disabled="false"
                :show-new-phone-number="showNewPhoneNumber"
                @add-number="handleAddNumber"
                @close-number="handleCloseNumber"
                @open-number="handleOpenNumber"
              /> -->
              <InputOne
                id="phoneNumber"
                label="Phone number"
                v-model="phoneNumbers"
                type="text"
                placeholder="080123456789"
                :required="true"
                :invalid="invalidNumber"
                :errorMessage="PNErrorMessage"
              />
              <InputOne
                id="address"
                label="Street address"
                v-model="address"
                type="text"
                placeholder="Enter delivery address"
                :required="true"
                :invalid="invalidAddress"
                :errorMessage="addressErrorMessage"
              />
              <InputOne
                id="Directions"
                label="Directions (Optional)"
                v-model="Directions"
                type="text"
                placeholder="Directions"
                :required="false"
                :invalid="invalidDirections"
                :errorMessage="DirectionsErrorMessage"
              />
              <div class="states __width100">
                <label for="states">Select State</label>
                <select class="input" id="state">
                  <option>Lagos</option>
                </select>
              </div>

              <div class="lga __width100">
                <label for="lgas">Select LGA</label>
                <select class="input" id="lgas" v-model="selectedLGA">
                  <option value="" selected>Please select a LGA</option>
                  <option
                    v-for="(lga, index) in lgas"
                    :key="index"
                    :value="lga"
                  >
                    {{ lga.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="submit-reset">
              <PrimaryBtn buttonText="Save and continue" @click="submitForm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { lgas } from "@/static/LagosLGAs";
import { mapState, mapActions, mapGetters } from "vuex";
import { State, Country, City } from "country-state-city";
import axios from "axios";

export default {
  data() {
    return {
      customerId: "",
      // first name and last name error messages
      FirstName: "",
      lastName: "",
      invalidName: false,
      invalidLastName: false,
      FNErrorMessage: "",
      LNErrorMessage: "",
      // -----------------
      // address  error messages
      address: "",
      invalidAddress: false,
      addressErrorMessage: "",
      // -----------------
      // Directions  error messages
      Directions: "",
      invalidDirections: false,
      DirectionsErrorMessage: "",
      // -----------------
      // phone number
      phoneNumbers: "", // array of phone numbers fetched from the API
      invalidNumber: false,
      PNErrorMessage: "",
      showNewPhoneNumber: false, // whether to show the new phone number field
      // -----------------
      // for picking states and local government
      selectedState: "Lagos",
      selectedLGA: "",
      coordinate: "",
      selectedCity: "",
      statesAndLGAs: {},
      states: [],
      lgas: lgas,
      // -------------------------------
    };
  },
  computed: {
    ...mapState("cart", [
      "cart",
      "distance",
      "deliveryFee",
      "cartLoading",
      "totalPrice",
      "error",
    ]),
    ...mapGetters("cart", [
      "TotalCart",
      "cartTotalQuantity",
      "cartTotalPrice",
      "cartFullPrice",
    ]),
    isEmailValid() {
      // Define a regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Check if the input email matches the regular expression
      return emailRegex.test(this.email);
    },
    selectedStateLGAs() {
      return this.statesAndLGAs[this.selectedState] || [];
    },
  },
  watch: {
    selectedLGA(newSelectedLGA) {
      if (
        newSelectedLGA &&
        newSelectedLGA.latlon &&
        newSelectedLGA.latlon.length >= 2
      ) {
        const latitude = newSelectedLGA.latlon[0];
        const longitude = newSelectedLGA.latlon[1];
        this.getDistanceFromLatLonInKm({
          latitude2: latitude,
          longitude2: longitude,
        });
      } else {
        console.error("Invalid or undefined newSelectedLGA:", newSelectedLGA);
      }
    },
  },
  async mounted() {
    this.loadUser();
    // try {
    //   const response = await axios.get("/Statelist.json");
    //   console.log("response: ", response);
    //   const { Lagos } = response.data;
    //   this.cities = Lagos;
    //   console.log(this.cities);
    // } catch (err) {
    //   console.log(err);
    // }
  },
  methods: {
    ...mapActions("cart", ["getDistanceFromLatLonInKm", "getDeliveryFee"]),
    async loadUser() {
      try {
        let user = null;
        if (process.client) {
          user = JSON.parse(localStorage.getItem("user")) || null;
        }
        console.log(user.firstName);

        if (user) {
          this.customerId = user._id;
          this.FirstName = user.firstName;
          this.lastName = user.lastName;
          this.phoneNumbers = user.phoneNumbers[0];
        }
      } catch (err) {
        console.log(err);
      }
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
    handleCloseNumber() {
      this.invalidNumber = false;
      this.showNewPhoneNumber = false;
    },
    handleOpenNumber() {
      this.showNewPhoneNumber = true;
    },

    getCities() {
      this.cities = City.getCitiesOfState(NG, stateCode);
      this.selectedCity = ""; // Reset selected city when changing the state
    },
    submitForm() {
      this.getDeliveryFee({
        distance: this.distance,
      });
      const address = {
        streetAddress: this.address,
        directions: this.Directions,
        state: this.selectedState,
        lga: this.selectedLGA.name,
        // customerId: this.customerId,
      };
      const data = {
        customerId: this.customerId,
        firstName: this.FirstName,
        lastName: this.lastName,
        address: address,
        directions: this.Directions,
        phoneNumbers: this.phoneNumbers,
        state: this.selectedState,
        LGA: this.selectedLGA.name,
        products: this.cart,
        totalPrice: this.cartFullPrice,
        deliveryFee: this.deliveryFee,
        subtotal: this.cartTotalPrice,
      };
      console.log(data);
      this.$emit("customEvent", data);
      console.log("order info", data);
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Optional: Add smooth scrolling effect
      });
    },
  },
};
</script>

<style scoped>
p {
  text-align: center;
}
</style>

<style scoped>
.individual-form {
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 24px;
  margin-bottom: 60px;
}

.thirdAuth {
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 24px;
}

.auth-btn-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px px;
  gap: 16px;
}

.myAuth-group {
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 24px;
}

.form-group {
  gap: 24px;
}

.personal {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
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

.password {
  position: relative;
}

.password span svg {
  position: absolute;
  right: 16px;
  top: 14px;
  fill: var(--grey-grey3);
}

.num-btn {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  width: 100%;
}

.phone-number {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
}

.__width100 {
  width: 100%;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background-image: url(@/static/assets-chevron-down-arrow.png);
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 20px; /* Adjust as needed */

  /* Previous CSS properties */
  background-size: 20px;
}
.submit-reset {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 24px;
}

/* For webkit-based browsers */
input.no-arrow::-webkit-outer-spin-button,
input.no-arrow::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* For Firefox */
input.no-arrow::-moz-number-spin-box {
  -moz-appearance: none;
  margin: 0;
}
</style>
