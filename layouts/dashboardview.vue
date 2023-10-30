<template>
  <div>
    <AlertPrompt
      ref="alertPrompt"
      :message="error_msg"
      :alertType="alertType"
    />
    <ModalWelcome
      v-if="showModal"
      @cancelModal="removeModal()"
      @complete-flow="removeModal()"
    />
    <Cart @closeCart="showCart = false" :showModal="showCart" v-if="!mobile" />
    <LayoutNotificationDesktop
      @closeNotify="showNotify = false"
      :showNotify="showNotify"
      v-if="!mobile"
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
            <div
              class="ipc-top-fixed"
              :class="{ ProductDetailsPage: isProductDetailsPage }"
            >
              <section class="dashboard-top-fixed" v-if="!mobile">
                <!-- dasboard header that have the welcome, search bar and notify-cart -->
                <LayoutTopDetails
                  :user="user"
                  @openCart="showCart = true"
                  @openNotification="toggleNotification"
                />
              </section>
              <section class="mobile-dashboard-top-fixed" v-else>
                <!-- dasboard header that have the welcome, search bar and notify-cart for mobile -->
                <LayoutMobileTopDetails
                  @redirectToSearchPage="redirectToSearchPageFunc"
                  @openCart="toggleCart"
                  :user="user"
                />
              </section>
            </div>
            <div class="view-wrapper">
              <section class="view">
                <div class="" style="padding: 16px">
                  <promptAlert
                    @openMail="okModal"
                    v-if="!verifiedEmail && $route.name === 'dashboard-market'"
                  />
                </div>
                <div class="page-wrapper nuxt-page-here">
                  <div class="page-container">
                    <transition name="newPage" mode="out-in">
                      <nuxt />
                    </transition>
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
        title="Log out of Gosource ?"
        snippet="It is so sad to see you want to log out at this time. You can always log back in at any time."
        buttonText="Cancel"
        buttonText2="Log out"
        buttonClass="neutral-btn"
        buttonClass2="negative-btn"
        @closeModal="closeLogoutUser"
        @okModal="logOutUser"
        @closeModalBG="closeLogoutUserBG"
      />
    </transition>
    <transition name="modal-fade">
      <popupModal
        v-if="checkMail"
        :animate="animate"
        title="Check your email address"
        snippet="We have sent a secured reset link to your email. Click on the link to verify your email."
        buttonText="Got it"
        buttonText2="Resend link"
        buttonClass="neutral-btn"
        buttonClass2="primary-btn"
        @okModal="okModal"
        @closeModal="handleOpenMail"
        @closeModalBG="handleOpenMail"
      />
    </transition>
  </div>
</template>


<script>
import { mapActions, mapState } from "vuex";
export default {
  head() {
    return {
      // script: [
      //   {
      //     src: "https://embed.tawk.to/653a1516f2439e1631e88e4d/1hdle4ojj",
      //     async: true,
      //     charset: "UTF-8",
      //     crossorigin: "anonymous",
      //   },
      // ],
    };
  },
  data() {
    return {
      user: null,
      showPopup: false,
      mobile: false,
      loading: true,
      logout: false,
      isCart: false,
      showCart: false,
      isNotification: false,
      checkMail: false,
      showModal: false,
      error_msg: "",
      alertType: "",
      verifiedEmail: false,
      animate: null,
      showNotify: false,
    };
  },
  computed: {
    ...mapState("cart", ["cartAlert"]),
    isProductDetailsPage() {
      // Check if the current route is a product details page

      return this.$route.name === "dashboard-market-product";
    },
  },
  async mounted() {
    await this.fetchCartItemsByUserID();
    // set welcome modal to show on condition that a user is new or not
    this.showModal = localStorage.getItem("welcomeFlow") !== "complete";
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
          this.verifiedEmail = this.user.verified;
        } else {
          // User data is not found in localStorage
          this.$router.push("/auth/login");
        }
      } else {
        // Local Storage is not available in this environment
        // You can handle this situation accordingly
      }
    }
  },
  methods: {
    removeModal() {
      this.showModal = false;
      this.showVerifiedModal = false;
      localStorage.setItem("welcomeFlow", "complete");
    },
    ...mapActions("auth", ["logoutUser"]),
    ...mapActions("cart", ["fetchCartItemsByUserID"]),
    logOutUser() {
      this.logoutUser();
      this.$router.push("/auth/login");
    },
    toggleCart() {
      this.showCart = true;
      if (this.mobile) {
        this.$router.push("/dashboard/market/cart");
      } else {
        this.showCart = true;
        this.isCart = !this.isCart;
      }
    },
    toggleNotification() {
      this.showNotify = true;
      if (this.mobile) {
        this.$router.push("/dashboard/market/notifications");
      }
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
      this.animate =
        window.innerWidth <= 950 ? "animate__slideInUp" : "animate__zoomIn";
    },
    redirectToSearchPageFunc() {
      if (this.mobile) {
        this.$router.push("/dashboard/search");
      }
    },
    closeLogoutUser() {
      this.logout = true;
    },
    closeLogoutUserBG() {
      this.logout = false;
    },
    handleOpenMail() {
      this.checkMail = !this.checkMail;
    },
    async okModal() {
      try {
        this.checkMail = !this.checkMail;
        const userEmail = localStorage.getItem("userEmail");
        if (!userEmail) {
          throw new Error("User email not found in localStorage.");
        }
        const response = await this.$axios.post(
          "/business-customers/send-verification-email",
          {
            email: userEmail,
          }
        );

        return { userEmail };
      } catch (error) {
        console.error("Error sending email:", error);
        return { userEmail: null };
      }
    },
  },
  watch: {
    cartAlert(newValue, oldValue) {
      if (newValue === false) {
        this.$refs.alertPrompt.showAlert();
        this.error_msg = "Error adding product to the cart";
        this.alertType = "error";
      } else if (newValue === true) {
        this.$refs.alertPrompt.showAlert();
        this.error_msg = "Product successfully added to cart";
        this.alertType = "success";
      } else if (newValue === "removed") {
        this.$refs.alertPrompt.showAlert();
        this.error_msg = "Product successfully removed from cart";
        this.alertType = "success";
      } else if (newValue === "deleted") {
        this.$refs.alertPrompt.showAlert();
        this.error_msg = "Product successfully deleted from cart";
        this.alertType = "success";
      }
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
  position: relative;
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
    position: relative;
  }

  .nuxt-page-here {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 20px;
    padding-bottom: 20px;
    justify-content: center;
  }

  .view-wrapper {
    overflow-y: visible;
    height: 100%;
    /* margin-top: 154px; */
    margin-top: 150px;
  }

  .ipc-top-fixed {
    position: sticky;
    position: fixed;
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

  .ProductDetailsPage {
    display: none;
  }

  section.view {
    margin-bottom: 0px;
  }
}
</style>