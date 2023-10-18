<template>
  <div class="">
    <div class="profile-wrapper" v-if="user">
      <ProfileAccountAvatar :user="user" />
      <div class="flex">
        <div class="acc-btn">
          <ProfileUserDetails
            :invalidNumber="invalidNumber"
            :show-new-phone-number="showNewPhoneNumber"
            @add-number="handleAddNumber"
            @open-number="addNumberFunc = true"
            :user="user"
          />
        </div>
      </div>
    </div>
    <transition name="slide" appear>
      <ProfileEditDetails
        header="Phone number"
        buttonText="Add number"
        title="Enter phone number"
        v-show="addNumberFunc"
        @closeDetails="addNumberFunc = false"
        @detailsButton="handleAddNumber(newPhoneNumber)"
      >
        <template v-slot:details>
          <InputComponent
            id="phone-number"
            label="Phone number"
            name="number"
            inputType="number"
            v-model="newPhoneNumber"
            :isInvalid="invalidNumber"
            errMsg="Please enter a valid Phone number"
          />
        </template>
      </ProfileEditDetails>
    </transition>
  </div>
</template>

<script>
import { DEV_URL } from "@/plugins/api";
import axios from "axios";
export default {
  layout: "profileView",
  // Other component properties and methods
  data() {
    return {
      user: null,
      phoneNumbers: [],
      invalidNumber: false,
      // newPhoneNumber: "", // phone number entered in the new phone number field
      showNewPhoneNumber: false, // whether to show the new phone number field
      addNumberFunc: false,
      newPhoneNumber: "",
      invalidNumber: false,
    };
  },
  head() {
    return {
      title: this.pageTitle,
    };
  },
  mounted() {
    this.user = false;
    if (process.client) {
      // Check if localStorage is available
      if (typeof localStorage !== "undefined") {
        // Check if user data is saved in localStorage
        const userData = localStorage.getItem("user");

        if (userData) {
          // User data is available, log it
          this.user = JSON.parse(userData);
          ("usser data", this.user);
          ("User data in localStorage:", JSON.parse(userData));
          this.address = this.user?.address?.streetAddress || [];
          this.state = this.user?.address?.state || [];
          this.LGA = this.user?.address?.lga || [];
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
  },
  methods: {
    async handleAddNumber(newPhoneNumber) {
      const number = [];
      this.user.phoneNumbers.forEach((num) => number.push(newPhoneNumber));
      number.push(newPhoneNumber);
      ("number", number);
      ("data", this.phoneNumbers);
      try {
        const phoneNumberRegex =
          /^((090)[23589])|((070)[1-9])|((080)[2-9])|((081)[0-9])(\d{7})$/;
        const headers = {
          "Content-Type": "application/json",
        };

        if (phoneNumberRegex.test(newPhoneNumber)) {
          const response = await axios.patch(
            `${DEV_URL}/business-customers/${this.user._id}`,
            { phoneNumbers: number },
            {
              headers,
            }
          );
          this.user = response.data.data.customer;
          ("backend :", response);
          ("user :", this.user);
          this.phoneNumbers.push(newPhoneNumber);
          this.showNewPhoneNumber = false; // Hide the new-phone-number div
          this.addNumberFunc = false;
          this.invalidNumber = false; // Reset the invalidNumber flag
          newPhoneNumber = null;

          this.addNumberFunc = false;
          this.closeHeaderComp = false;
        } else {
          this.invalidNumber = true;
          this.showNewPhoneNumber = true;
        }
      } catch (error) {
        (error);
      }
    },
  },
};
</script>

<style scoped>
.acc-btn {
    width: 100%;
    padding-bottom: 100px;
  }
.profile-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: rgb(255, 255, 255);
  padding: 5%;
}
@media (max-width: 950px) {
  
  .profile-wrapper {
    height: auto;
    margin-top: 86px;
  }
}
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
  transform: translateY(100vh);
}
</style>