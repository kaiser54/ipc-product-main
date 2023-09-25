<template>
  <div style="width: 100%">
    <LoaderComponent v-if="loading" />
    <div class="nuxt-page" v-else>
      <promptAlert @openMail="handleOpenMail" v-if="!verifiedEmail" />
      <div class="page-title">
        <h2 class="h2-medium header-text">Market</h2>
      </div>
      <section class="market-product">
        <div class="product-top-wrap">
          <productcard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
            :inCart="inCart"
          />
        </div>
      </section>
      <transition name="modal-fade">
        <popupModal
          v-if="checkMail"
          :animate="animate"
          title="Check your email address"
          snippet="We have sent a secured reset link to your email. Click on the link to verify your email."
          buttonText="Resend link"
          buttonText2="Got it"
          buttonClass="neutral-btn"
          buttonClass2="primary-btn"
          @closeModal="handleOpenMail"
          @closeModalBG="handleOpenMail"
        />
      </transition>
      <!-- <ModalEmailVerified v-if="showVerifiedModal" @cancelModal="removeModal()" @routeToMarket="routeToMarket()"/> -->
      <ModalWelcome v-if="showModal" @cancelModal="removeModal()" @complete-flow="removeModal()" />
    </div>
  </div>
</template>

<script>
import ProductCard from "~/components/productcard.vue";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  layout: "dashboardview",
  head() {
    return {
      title: this.pageTitle,
    };
  },
  components: {
    ProductCard,
  },
  data() {
    return {
      // api: process.env.BASE_URL,
      pageTitle: "IPC | Market",
      checkMail: false,
      inCart: false,
      animate: null,
      showModal: false,
      verifiedEmail: false,
      showVerifiedModal: true
    };
  },
  mounted(){
    const userData = localStorage.getItem("user");
        if (userData) {
          this.user = JSON.parse(userData);
          console.log("User data in localStorage:", JSON.parse(userData));
          console.log("User:", this.user.verified);
          localStorage.setItem("userId", this.user._id);
          localStorage.setItem("userEmail", this.user.email);
          
        } else {
          console.log("User data not found in localStorage.");
        }
        this.getAllProduct()
        this.getUserDetails()
  },

  computed: {
    ...mapState("product", ["loading", "error"]),
    ...mapGetters("product", ["getProductsBySearch"]),
    filteredProducts() {
      return this.getProductsBySearch; // Use the searchQuery here
    },
  },
  methods: {
    ...mapActions("product", ["fetchAllProducts"]),
    checkScreenSize() {
      this.animate = window.innerWidth <= 950 ? "animate__slideInUp" : "animate__zoomIn";
    },
    async getUserDetails(){
      try{
        const response = await this.$axios.get(`/business-customers/${this.user._id}`)
        this.userProfile = response.data.data.customer
        console.log("user-profile:",this.userProfile)
        console.log("user-profile-status:",this.userProfile.verified)
        this.userProfileStatus = response.data.data.customer.verified
        this.verifiedEmail = this.userProfileStatus
      }catch (error) {
        console.error("Error fetching data", error);
        return { responseData: null };
      }
    },
    async getAllProduct(){
    // set welcome modal to show on condition that a user is new or not
    this.showModal = localStorage.getItem('welcomeFlow') !== 'complete'
    await this.fetchAllProducts(); // Fetch all products when the component is mounted
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);

  },
    async handleOpenMail() {
      this.checkMail = !this.checkMail;
      try {
      const userEmail = localStorage.getItem('userEmail');
      if (!userEmail) {
        throw new Error('User email not found in localStorage.');
      }
      const response = await this.$axios.post('/business-customers/send-verification-email', {
        email: userEmail,
      });
      console.log('Email sent successfully:', response.data);
      console.log(userEmail)

      return { userEmail };
    } catch (error) {
      console.error('Error sending email:', error);
      return { userEmail: null };
    }
  },

    welcomeUser() {
      const welcome = localStorage.getItem('welcomeFlow')
      if (!welcome) {
        localStorage.setItem('welcomeFlow', 'incomplete')
      }
    },
    clear() {
      localStorage.removeItem('welcomeFlow')
    },
    removeModal() {
      this.showModal = false
      this.showVerifiedModal = false
      localStorage.setItem('welcomeFlow', 'complete');
    },
    routeToMarket(){
      this.$router.push("/dashboard/market")
      this.showVerifiedModal = false
    },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
  
  }


};
</script>



<style>
.nuxt-page {
  display: flex;
  gap: 32px;
  flex-direction: column;
  width: auto;
  height: 100%;
}
</style>

<style scoped>
.product-top-wrap {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
  width: 100%;
  justify-content: space-between;
}

@media (min-width: 950px) {
  .webskeleton {
    display: block;
  }

  .SkeletonLoader {
    display: none;
  }
}

@media (max-width: 950px) {
  .product-top-wrap {
    padding: 0;
    gap: 8px;
  }

  .webskeleton {
    display: none;
  }

  .SkeletonLoader {
    display: block;
  }
}

@media (max-width: 950px) {
  .m-20 {
    margin: 0;
    padding: 16px;
    background: var(--grey-grey6);
  }

  .page-title {
    display: none;
  }
}
</style>
