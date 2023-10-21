<template>
  <div>
    <div class="profile-wrapper">
      <div class="textfield">
        <InputComponent
          id="streetAddress"
          label="Street Address"
          name="address"
          inputType="text"
          v-model="streetAddress"
          :isInvalid="validAddress"
          :errMsg="errAddress"
          :readonly="true"
        />
        <InputComponent
          id="state"
          label="State"
          name="state"
          inputType="text"
          v-model="state"
          :isInvalid="validState"
          :errMsg="errState"
          :readonly="true"
        />
        <InputComponent
          id="LGA"
          label="LGA (Local Govt. Area)"
          name="LGA"
          inputType="text"
          v-model="LGA"
          :isInvalid="validLGA"
          :errMsg="errLGA"
          :readonly="true"
        />
      </div>
      <DynamicButton
        @clickButton="openEditAddress = true"
        style="width: 100%"
        class=""
        buttonText="Change"
        size="standard"
        type="neutral"
        icon="icon-left"
      >
        <template v-slot:svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M2.5 18H17.5"
              stroke="#565C69"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.74935 11.7495L12.0827 3.41621C12.773 2.72585 13.8923 2.72585 14.5827 3.41621C15.273 4.10656 15.273 5.22585 14.5827 5.91621L6.24935 14.2495L2.91602 15.0829L3.74935 11.7495Z"
              stroke="#565C69"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </template>
      </DynamicButton>
    </div>

    <!-- change Address on mobile -->

    <transition name="slide" appear>
      <ProfileEditDetails
        header="Edit address details"
        buttonText="Save changes"
        v-show="openEditAddress"
        @closeDetails="openEditAddress = false"
        @detailsButton="saveAddress"
      >
        <template v-slot:details>
          <InputComponent
            id="streetAddress"
            label="Street Address"
            name="address"
            inputType="text"
            v-model="streetAddress"
            :isInvalid="validAddress"
            :errMsg="errAddress"
          />
          <InputComponent
            id="state"
            label="State"
            name="state"
            inputType="text"
            v-model="state"
            :isInvalid="validState"
            :errMsg="errState"
          />
          <InputComponent
            id="LGA"
            label="LGA (Local Govt. Area)"
            name="LGA"
            inputType="text"
            v-model="LGA"
            :isInvalid="validLGA"
            :errMsg="errLGA"
          />
        </template>
      </ProfileEditDetails>
    </transition>

    <!-- ===================== -->
  </div>
</template>

<script>
import { DEV_URL } from "@/plugins/api";
import axios from "axios";
export default {
  transition: {
    name: 'slide-in',
    mode: 'out-in',
  },
  layout: "profileView",
  // Other component properties and methods
  data() {
    return {
      user: null,
      CheckAddress: false,
      streetAddress: "",
      validAddress: null,
      errAddress: "Please enter a valid address",
      state: "",
      validState: null,
      errState: "",
      LGA: "",
      validLGA: null,
      errLGA: "",
      invalidNumber: false,
      openEditAddress: false,
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
          ("User data in localStorage:", JSON.parse(userData));
          this.address = this.user?.address?.streetAddress || "";
          this.state = this.user?.address?.state || "";
          this.LGA = this.user?.address?.lga || "";
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

    this.fetchAddress();
  },
  methods: {
    async saveAddress() {
      try {
        const headers = {
          "Content-Type": "application/json",
        };

        const body = {
          customerId: this.user._id,
          streetAddress: this.streetAddress,
          state: this.state,
          lga: this.LGA,
        };

        const response = await axios.post(`${DEV_URL}/addresses/`, body, {
          headers,
        });

        if (response.status === 201) {
          this.disabledProps = true;
          this.fetchAddress();
          this.openEditAddress = !this.openEditAddress;
          this.closeHeaderComp = !this.closeHeaderComp;
        }

        // this.user = response.data.data.customer;
        ("e :", address);
        ("backend :", response);
        ("user :", this.user);
      } catch (error) {
        (error);
      }
    },
    async fetchAddress() {
      // sending the address to the backend end
      await axios
        .get(`${DEV_URL}/addresses/`, {
          params: {
            customerId: this.user._id,
          },
        })
        .then((response) => {
          // Handle the response data here
          const addresses = response?.data?.data?.addresses[0];
          this.address = addresses || [];
          this.streetAddress = this.address?.streetAddress || "";
          this.state = this.address?.state || "";
          this.LGA = this.address?.lga || "";
          ("response", response);
          ("address", addresses);
          ("streetAddress", this.address?.streetAddress);
          ("_id", this.user._id);
        })
        .catch((error) => {
          // Handle any errors here
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.profile-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: rgb(255, 255, 255);
  padding: 5%;
}
.textfield {
  display: flex;
  flex-direction: column;
  gap: 16px;
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