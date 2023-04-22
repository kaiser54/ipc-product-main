<template>
  <div class="view-page">
    <div class="profile">
      <div class="title-header">
        <h2 class="h2-medium header-text">Profile</h2>
        <div class="account-type indivudual">Individual account</div>
      </div>
      <switchTab
        v-show="!mobile"
        @toggleTab="activetab = !activetab"
        :myTab="activetab"
        text1="Account details"
        text2="Address book"
      />
      <div class="userdetails" v-if="!mobile">
        <div class="account-details-desktop" v-if="activetab">
          <div class="acc-btn">
            <accountDetails />
            <button class="add-num-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.16663 10.0013H15.8333M9.99996 4.16797V15.8346V4.16797Z"
                  stroke="#0009B3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Add new phone number</p>
            </button>
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
.add-num-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;

  border-radius: 100px;
  margin-top: 16px;
}
.acc-btn {
  width: 100%;
}
.add-num-btn p {
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
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
    margin-top: -43px;
    gap: 32px;
    margin-bottom: 100px;
  }
}
</style>