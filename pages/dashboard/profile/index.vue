<template>
  <div class="view-page goTop">
    <LoaderComponent v-if="!user" />
    <div class="aaa" v-if="user" style="padding-bottom: 20%">
      <div
        class="inner_profile"
        :class="{ 'profile-web-mobile': userHeaderComponent || CheckAddress }"
        v-if="!userHeaderComponent && !CheckAddress"
      >
        <!-- DESKTOP VIEW COMPONENTS  -->
        <div
          class="profile"
          v-if="!mobile || !userHeaderComponent || !CheckAddress"
        >
          <div class="title-header">
            <h2 class="h2-medium header-text">Profile</h2>
            <DynamicTags
              v-if="user?.type === 'INDIVIDUAL'"
              tagText="Individual account"
              size="small"
              type="info"
            />
            <DynamicTags
              v-if="user?.type === 'BUSINESS'"
              tagText="Business account"
              size="small"
              type="positive"
            />
          </div>
          <ProfileSwitchTab
            v-show="!mobile"
            @toggleTab="activetab = true"
            @toggleTab2="activetab = false"
            :myTab="activetab"
            text1="Account details"
            text2="Address book"
          />

          <div class="userdetails" v-if="!mobile">
            <div class="account-details-desktop" v-if="activetab">
              <div class="acc-btn">
                <ProfileUserDetails
                  :user="user"
                  :invalidNumber="invalidNumber"
                  :show-new-phone-number="showNewPhoneNumber"
                  @add-number="handleAddNumber"
                  @close-number="handleCloseNumber"
                  @open-number="handleOpenNumber"
                />
              </div>
              <ProfileEmailDesktop
                @openMail="toggleIsVerifyMail"
                @openPassword="toggleChangePassword"
              />
            </div>
            <ProfileAddressDetails
              :address="address"
              :disabledProps="disabledProps"
              v-if="!activetab"
              switchedHeader="Address Book"
              :user="user"
              @saveEdit="sendAddress"
            />
          </div>
        </div>
        <!-- ^^^^^^^^^^^^^^^^^^^^^ -->

        <!-- MOBILE VIEW COMPONENTS -->

        <div class="mobileUserProfile" v-if="mobile">
          <!-- user profile and name -->
          <ProfileUserSection
            @clicked="toggleuserHeaderComponent"
            v-if="!userHeaderComponent || !CheckAddress"
            :user="user"
          />
          <!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->

          <!-- verify address and change password -->
          <div
            class="user__details"
            v-if="!userHeaderComponent || !CheckAddress"
          >
            <div class="user__details__head">
              <p>ACCOUNT</p>
            </div>
            <ProfileAccountSectionMobile
              @openMail="toggleIsVerifyMail"
              @openAddress="CheckAddress = !CheckAddress"
              @changePassword="toggleChangePassword"
            />
          </div>
          <!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->

          <!-- FAQ customer privacy -->
          <div
            class="user__details"
            v-if="!userHeaderComponent || !CheckAddress"
          >
            <div class="user__details__head">
              <p>ABOUT IPC</p>
            </div>
            <ProfileFAQSectionMobile />
          </div>
          <!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->
          <button
            class="btn mqdn"
            @click="toggleLogout"
            v-if="!userHeaderComponent || !CheckAddress"
          >
            Log out
          </button>
        </div>
      </div>

      <!-- verify email popup -->

      <popupModal
        v-if="isVerifyMail"
        :animate="animate"
        title="Check your email address"
        snippet="We have sent a secured reset link to your email. Click on the link to verify your email."
        buttonText="Resend code"
        buttonText2="Got it"
        buttonClass="neutral-btn"
        buttonClass2="primary-btn"
        @closeModal="toggleIsVerifyMail"
        @closeModalBG="toggleIsVerifyMail"
      />

      <!-- ---------------------------- -->

      <!-- logout popup -->

      <popupModal
        v-if="isLogout"
        :animate="animate"
        title="Log out of IPC?"
        snippet="It is so sad to see you want to log out at this time. You can always log back in at any time."
        buttonText="Cancel"
        buttonText2="Log out"
        buttonClass="neutral-btn"
        buttonClass2="negative-btn"
        @closeModal="toggleLogout"
        @okModal="logoutUserFunc"
        @closeModalBG="toggleLogout"
      />

      <!-- change password -->
      <ProfileChangePassword
        v-if="isChangePassword"
        @close="toggleChangePassword"
        :animate="animate"
      />
      <!-- ---------------------------- -->

      <ProfileInnerModalComponent
        v-if="userHeaderComponent && !closeHeaderComp"
        @redirectToprofilepage="redirectToprofilepage"
      >
        <template v-slot:components>
          <div class="profile-wrapper">
            <ProfileAccountAvatar :user="user" />
            <div class="flex">
              <div class="acc-btn">
                <ProfileUserDetails
                  :BusinessName="BusinessName"
                  :user-name="userName"
                  :phone-numbers="phoneNumbers"
                  :invalidNumber="invalidNumber"
                  :show-new-phone-number="showNewPhoneNumber"
                  @add-number="handleAddNumber"
                  @open-number="toggleAddNumberFunc"
                  :user="user"
                />
              </div>
            </div>
          </div>
        </template>
      </ProfileInnerModalComponent>

      <!-- add new number for mobile view -->

      <ProfileEditDetails
        header="Phone number"
        buttonText="Add number"
        title="Enter phone number"
        v-if="addNumberFunc"
        @closeDetails="toggleAddNumberFunc"
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

      <!-- ===================== -->

      <!-- view address on mobile -->

      <ProfileInnerModalComponent
        v-if="CheckAddress && !closeHeaderComp"
        @redirectToprofilepage="redirectToprofilepage"
      >
        <template v-slot:components>
          <div class="profile-wrapper">
            <div class="textfield">
              <InputComponent
                id="streetAddress"
                label="Street Address"
                name="address"
                inputType="text"
                v-model="address.streetAddress"
                :isInvalid="validAddress"
                :errMsg="errAddress"
              />
              <InputComponent
                id="state"
                label="State"
                name="state"
                inputType="text"
                v-model="address.state"
                :isInvalid="validState"
                :errMsg="errState"
              />
              <InputComponent
                id="LGA"
                label="LGA (Local Govt. Area)"
                name="LGA"
                inputType="text"
                v-model="address.lga"
                :isInvalid="validLGA"
                :errMsg="errLGA"
              />
            </div>
            <DynamicButton
              @clickButton="editAddress"
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
        </template>
      </ProfileInnerModalComponent>

      <!-- ===================== -->

      <!-- change Address on mobile -->

      <ProfileEditDetails
        header="Edit address details"
        buttonText="Save changes"
        v-if="openEditAddress"
        @closeDetails="editAddress"
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

      <!-- ===================== -->
    </div>
  </div>
</template>
  
<script>
import { mapActions } from "vuex";
import { DEV_URL } from "@/plugins/api";
import axios from "axios";
export default {
  layout: "dashboardview",
  // Other component properties and methods
  data() {
    return {
      user: null,
      userID: "",
      pageTitle: "IPC | Profile",
      activetab: true,
      mobile: false,
      isVerifyMail: false,
      isLogout: false,
      isChangePassword: false,
      userHeaderComponent: false,
      userName: [
        { label: "First Name", value: "Lanre" },
        { label: "Last Name", value: "Bello" },
      ],
      phoneNumbers: [],
      invalidNumber: false,
      // newPhoneNumber: "", // phone number entered in the new phone number field
      showNewPhoneNumber: false, // whether to show the new phone number field
      BusinessName: "Chicken Republic",
      addNumberFunc: false,
      animate: null,
      CheckAddress: false,
      address: null,
      streetAddress: "",
      validAddress: null,
      errAddress: "Please enter a valid address",
      state: "",
      validState: null,
      errState: "",
      LGA: "",
      validLGA: null,
      errLGA: "",
      closeHeaderComp: false,
      newPhoneNumber: "",
      invalidNumber: false,
      openEditAddress: false,
      disabledProps: true,
    };
  },
  head() {
    return {
      title: this.pageTitle,
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);

    this.user = false;
    if (process.client) {
      // Check if localStorage is available
      if (typeof localStorage !== "undefined") {
        // Check if user data is saved in localStorage
        const userData = localStorage.getItem("user");

        if (userData) {
          // User data is available, log it
          this.user = JSON.parse(userData);
          console.log("User data in localStorage:", JSON.parse(userData));
          this.userID = this.user?._id;
          if (this.userID) {
            this.fetchUser();
          }
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

    this.fetchAddress();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
  methods: {
    ...mapActions("auth", ["logoutUser"]),
    checkScreenSize() {
      if (window.innerWidth <= 950) {
        this.mobile = true;
        this.animate = "animate__slideInUp";
      } else {
        this.mobile = false;
        this.animate = "animate__zoomIn";
      }
    },
    toggleIsVerifyMail() {
      this.isVerifyMail = !this.isVerifyMail;
    },
    toggleLogout() {
      this.isLogout = !this.isLogout;
    },
    logoutUserFunc() {
      this.isLogout = !this.isLogout;
      this.logoutUser();
      this.$router.push("/auth/login");
    },
    toggleChangePassword() {
      this.isChangePassword = !this.isChangePassword;
    },
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
    handleCloseNumber() {
      this.invalidNumber = false;
      this.showNewPhoneNumber = false;
    },
    handleOpenNumber() {
      this.showNewPhoneNumber = true;
    },
    toggleuserHeaderComponent() {
      this.userHeaderComponent = true;
    },
    redirectToprofilepage() {
      this.userHeaderComponent = false;
      this.CheckAddress = false;
    },
    toggleAddNumberFunc() {
      this.addNumberFunc = !this.addNumberFunc;
      this.closeHeaderComp = !this.closeHeaderComp;
    },
    editAddress() {
      this.openEditAddress = !this.openEditAddress;
      this.closeHeaderComp = !this.closeHeaderComp;
    },
    async fetchUser() {
      try {
        const headers = {
          "Content-Type": "application/json",
        };

        // sending the address to the backend end

        if (this.userID) {
          console.log(`${DEV_URL}/business-customers/${this.userID}`);
          const response = await axios.get(
            `${DEV_URL}/business-customers/${this.user._id}`,
            {
              headers,
            }
          );
          this.user = response?.data?.data?.customer
        }
        // console.log("Updated user:", this.user);
      } catch (error) {
        console.error("Error:", error);
      }
    },
    async sendAddress(address) {
      try {
        const headers = {
          "Content-Type": "application/json",
        };

        const body = {
          customerId: this.user._id,
          streetAddress: address.streetAddress,
          state: address.state,
          lga: address.lga,
        };

        ("sending data", body);

        // sending the address to the backend end

        const response = await axios.post(`${DEV_URL}/addresses/`, body, {
          headers,
        });

        if (response.status === 201) {
          this.disabledProps = true;
          this.fetchAddress();
        }

        // this.user = response.data.data.customer;
        ("Address saved:", response);
        // ("Updated user:", this.user);
      } catch (error) {
        console.error("Error:", error);
      }
    },
    async saveAddress() {
      try {
        const headers = {
          "Content-Type": "application/json",
        };

        const body = {
          customerId: this.user._id,
          streetAddress: this.address,
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
          this.streetAddress = this.address?.streetAddress;
          this.state = this.address?.state;
          this.LGA = this.address?.lga;
          ("response", response);
          ("address", addresses);
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
.profile-web-mobile {
  position: fixed;
}
.profile {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.title-header {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 16px;
  height: 76px;
}

.userdetails {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  width: 100%;
  max-width: 574px;
  margin-left: 24px;
  margin-bottom: 100px;
}

.account-details-desktop {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;

  width: 100%;
}

.mobileUserProfile {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
}

.user__details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 100%;

  background: var(--white);
}

.user__details__head p {
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */

  /* Grey/Grey3 */

  color: var(--grey-grey3);
}

.acc-btn {
  width: 100%;
}

.btn {
  border: none;
  outline: none;
  background: none;

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  padding: 16px 24px;

  /* Negative/N300 */

  color: var(--negative-n300);
}

.profile-wrapper {
  position: absolute;
  z-index: -1;
  height: 156vh;
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

@media (min-width: 950px) {
  .mqdn {
    display: none;
  }
}

@media (max-width: 950px) {
  .title-header {
    justify-content: space-between;
  }

  .profile {
    gap: 32px;
  }

  .profile-wrapper {
    height: auto;
    margin-top: 86px;
  }
}
</style>
  