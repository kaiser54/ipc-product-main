<template>
  <div class="view-page">
    <div class="profile">
      <div class="title-header">
        <h2 class="h2-medium header-text">Profile</h2>
        <div class="account-type indivudual">
          Individual account
        </div>
      </div>
      <div class="profile-switch-tab" v-if="!mobile">
        <div class="table" :class="{ 'active': activetab }" @click="activetab = true">Account details</div>
        <div class="table" :class="{ 'active': !activetab }" @click="activetab = false">Address book</div>
      </div>
      <div class="userdetails" v-if="!mobile">
        <accountDetails v-if="activetab"></accountDetails>
        <addressDetails v-if="!activetab"></addressDetails>
      </div>
      <mobileUserProfile v-if="mobile"></mobileUserProfile>
      <button class="btn">Log out</button>
    </div>
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
      };
    },
  }
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
.profile-switch-tab {
  box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 8px;

max-width: 780px;
width: 100%;
height: 44px;

margin-left: 24px;

/* Grey/Grey5 */

border-bottom: 1px solid var(--grey-grey5);
}
.table {
cursor: pointer;

  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 16px;
gap: 10px;

max-width: 152px;
width: 100%;
height: 44px;


font-weight: 500;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


/* Grey/Grey3 */

color: var(--grey-grey3);
}
.table.active {
  color: var(--primary-p300);
  border-bottom: 2px solid var(--primary-p300);
}
.userdetails {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 574px;
  margin-left: 24px;
  margin-bottom: 100px;
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
