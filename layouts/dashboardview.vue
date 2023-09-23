<template>
  <div>
    <Cart @openCart="toggleCart" v-if="isCart && !mobile" />
    <LayoutNotificationDesktop
      @openNotification="toggleNotification"
      v-if="isNotification && !mobile "
    />

    <div class="dashboard-wrapper" v-if="user">
      <section class="section-wrapper">
        <div class="ipc-nav">
          <div class="fixed" v-if="!mobile">
            <div class="solv">
              <!-- side navigation bar -->
              <LayoutSideNav
                :user="user"
                :show-popup="showPopup"
                @update:showPopup="updateShowPopup"
                @update:logout="updatelogout"
              />
            </div>
            <div class="backdrop" v-if="showPopup" @click="closePopup"></div>
          </div>
          <!-- bottom navigation bar -->
          <div class="mobile-bottom-nav">
            <LayoutBottomNav v-if="mobile" class="mobile" />
          </div>
        </div>
        <div class="top-fixed" @click="closePopup">
          <section class="dashview">
            <div class="ipc-top-fixed">
              <section class="dashboard-top-fixed" v-if="!mobile">
                <!-- dasboard header that have the welcome, search bar and notify-cart -->
                <LayoutTopDetails
                :user="user"
                  @openCart="toggleCart"
                  @openNotification="toggleNotification"
                />
              </section>
              <section class="mobile-dashboard-top-fixed" v-else>
                <!-- dasboard header that have the welcome, search bar and notify-cart for mobile -->
                <LayoutMobileTopDetails
                  @redirectToSearchPage="redirectToSearchPageFunc"
                  @openCart="toggleCart" :user="user"
                />
              </section>
            </div>
            <div class="view-wrapper">
              <section class="view">
                <div class="page-wrapper nuxt-page-here">
                  <div class="page-container">
                    <nuxt />
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </section>
    </div>
    <transition name="modal-fade">
      <popupModal
        v-if="logout"
        animate="animate__zoomIn"
        title="Log out of IPC?"
        snippet="It is so sad to see you want to log out at this time. You can always log back in at any time."
        buttonText="Cancel"
        buttonText2="Log out"
        buttonClass="neutral-btn"
        buttonClass2="negative-btn"
        @closeModal="logoutUser"
        @closeModalBG="logoutUserBG"
      />
    </transition>
  </div>
</template>


<script>
export default {
  data() {
    return {
      user: null,
      showPopup: false,
      mobile: false,
      loading: true,
      logout: false,
      isCart: false,
      isNotification: false,
      checkMail: false,
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
    // Initialize other data or perform actions when the component is mounted
    // For example: this.loading = true;

    if (process.client) {
      // Check if localStorage is available
      if (typeof localStorage !== "undefined") {
        // Check if user data is saved in localStorage
        const userData = localStorage.getItem("user");

        if (userData) {
          // User data is available, log it
          this.user = JSON.parse(userData);
          console.log("User data in localStorage:", JSON.parse(userData));
        } else {
          // User data is not found in localStorage
          console.log("User data not found in localStorage.");
        }
      } else {
        // Local Storage is not available in this environment
        // You can handle this situation accordingly
        console.log("LocalStorage is not available in this environment.");
      }
    }
  },
  methods: {
    toggleCart() {
      this.isCart = !this.isCart;
      if (this.mobile) {
        this.$router.push("/dashboard/market/cart");
      }
      console.log("cart clicked");
    },
    toggleNotification() {
      this.isNotification = !this.isNotification;
      if (this.mobile) {
        this.$router.push("/dashboard/market/notifications");
      }
      console.log("notification clicked");
    },
    updateShowPopup(value) {
      this.showPopup = value;
    },
    updatelogout(value) {
      this.showPopup = value ? false : this.showPopup;
      this.logout = value;
    },
    closePopup() {
      this.showPopup = false;
      this.logout = false;
    },
    checkScreenSize() {
      this.mobile = window.innerWidth < 952;
    },
    redirectToSearchPageFunc() {
      if (this.mobile) {
        this.$router.push("/dashboard/search");
      }
    },
    logoutUser() {
      this.logout = true;
    },
    logoutUserBG() {
      this.logout = false;
    },
    handleOpenMail() {
      this.checkMail = !this.checkMail;
    },
  },
};
</script>


<style scoped>
section {
  background: none;
}

.dashboard-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  width: 100%;
  height: 100%;
}

.section-wrapper {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  padding-right: 0px;
}

.fixed {
  position: relative;
}

.mobile-bottom-nav {
  width: 100%;
}

div.top-fixed {
  width: 100%;
}

.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}

section.dashview {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.dashboard-top-fixed {
  height: 136px;

  /* White */

  background: #ffffff;
  /* Grey/Grey5 */

  border-bottom: 1px solid var(--grey-grey5);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.view-wrapper {
  display: flex;
  overflow-y: scroll;
  height: calc(100vh - 136px);
  max-width: calc(100vw - 278px);
  justify-content: center;
}

section.view {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: calc(100vw - 278px);
  margin-bottom: 100px;
}

::-webkit-scrollbar {
  /* display: none; */
  display: block !important;
  width: auto;
  /* Set width of the scrollbar */
}

.nuxt-page-here {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 20px;
  padding-bottom: 40px;
  justify-content: center;
}

@media (max-width: 950px) {
  .top-details,
  .view-wrapper,
  section.view {
    max-width: 100%;
  }

  .view-wrapper {
    overflow-y: visible;
    height: 100%;
  }

  .ipc-top-fixed {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 2;
  }

  .page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 100%;
  }

  .nuxt-page-here {
    margin: 16px;
    gap: 16px;
  }
}
</style>
