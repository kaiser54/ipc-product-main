<template>
  <div style="width: 100%">
    <LoaderComponent v-if="loading" />
    <div class="nuxt-page" v-else>
      <promptAlert @openMail="handleOpenMail" />
      <div class="page-title">
        <h2 class="h2-medium header-text">Market</h2>
      </div>
      <section class="market-product">
        <div class="product-top-wrap">
          <ProductCard
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
      <ModalWelcome
        v-if="showModal"
        @cancelModal="removeModal()"
        @complete-flow="removeModal()"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import ProductCard from "@/components/productcard";
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
      pageTitle: "IPC | Market",
      checkMail: false,
      inCart: false,
      animate: null,
      showModal: false,
    };
  },
  async mounted() {
    await this.fetchCartItemsByUserID();
    // await this.fetchAllProducts();
    // await this.fetchFavouriteByUserID();
    // set welcome modal to show on condition that a user is new or not
    this.showModal = localStorage.getItem("welcomeFlow") !== "complete";
    await this.fetchAllProducts(); // Fetch all products when the component is mounted
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
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
    ...mapActions("cart", ["fetchCartItemsByUserID", "fetchFavouriteByUserID"]),
    checkScreenSize() {
      this.animate =
        window.innerWidth <= 950 ? "animate__slideInUp" : "animate__zoomIn";
    },
    handleOpenMail() {
      this.checkMail = !this.checkMail;
    },
    welcomeUser() {
      const welcome = localStorage.getItem("welcomeFlow");
      if (!welcome) {
        localStorage.setItem("welcomeFlow", "incomplete");
      }
    },
    clear() {
      localStorage.removeItem("welcomeFlow");
    },
    removeModal() {
      this.showModal = false;
      localStorage.setItem("welcomeFlow", "complete");
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
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
