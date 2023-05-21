<template>
  <div class="view-page">
    <div class="profile">
      <div class="title-header">
        <h2 class="h2-medium header-text">Profile</h2>
        <div class="account-type indivudual">Individual account</div>
      </div>
      <switchTab
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
            <accountDetails
              :user-name="userName"
              :phone-numbers="phoneNumbers"
              :invalidNumber="invalidNumber"
              :show-new-phone-number="showNewPhoneNumber"
              @add-number="handleAddNumber"
            />
          </div>
          <emaildesktop />
        </div>
        <addressDetails
          v-if="!activetab"
          switchedHeader="Address Book"
        ></addressDetails>
      </div>
      <mobileUserProfile
        @openMail="toggleIsVerifyMail"
        @changePassword="toggleChangePassword"
        v-if="mobile"
      ></mobileUserProfile>
      <button class="btn mqdn" @click="toggleLogout">Log out</button>
    </div>
    <verifyMail v-if="isVerifyMail" @close="toggleIsVerifyMail" />
    <mobileLogout v-if="isLogout" @close="toggleLogout" />
    <changePassword v-if="isChangePassword" @close="toggleChangePassword" />
  </div>
</template>

<script>
export default {
  layout: "dashboardview",
  // Other component properties and methods
  data() {
    return {
      pageTitle: "IPC | Profile",
      activetab: true,
      mobile: false,
      isVerifyMail: false,
      isLogout: false,
      isChangePassword: false,
      userName: [
        { label: "First Name", value: "Lanre" },
        { label: "Last Name", value: "Bello" },
      ],
      phoneNumbers: ["08100023262"],
      invalidNumber: false,
      // newPhoneNumber: "", // phone number entered in the new phone number field
      showNewPhoneNumber: false, // whether to show the new phone number field
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
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      if (window.innerWidth <= 950) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    },
    toggleIsVerifyMail() {
      this.isVerifyMail = !this.isVerifyMail;
    },
    toggleLogout() {
      this.isLogout = !this.isLogout;
    },
    toggleChangePassword() {
      this.isChangePassword = !this.isChangePassword;
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
}
</style>
