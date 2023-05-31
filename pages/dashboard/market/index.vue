<template>
  <div>
    <div class="webskeleton" v-if="loading" style="margin: 20px">
      <!-- css skeleton loading state on the website for desktop view -->
      <webskeleton style="overflow: hidden; height: 100vh" />
    </div>
    <div v-if="loading" class="SkeletonLoader">
      <!-- css skeleton loading state on the website for mobile view -->
      <SkeletonLoader style="overflow: hidden; height: 100vh" />
    </div>
    <div class="nuxt-page" v-else>
      <promptAlert @openMail="handleOpenMail" />
      <div class="page-title">
        <!-- <Breadcrumb :route="$route" /> -->
        <h2 class="h2-medium header-text">Market</h2>
      </div>
      <section class="market-product">
        <div class="product-top-wrap">
          <productcard v-for="(product) in product" :key="product.id" :product="product" :inCart="inCart" />
        </div>
      </section>
      <transition name="modal-fade">
        <!-- enter the PopModal an add router push to the button and remove the nuxt link -->
        <popupModal v-if="checkMail" animate="animate__zoomIn" title="Check your email address"
          snippet="We have sent a secured reset link to your email. Click on the link to verify your email."
          buttonText="Resend link" buttonText2="Got it" buttonClass="neutral-btn" buttonClass2="primary-btn"
          @closeModal="handleOpenMail" @closeModalBG="handleOpenMail" />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dashboardview",
  data() {
    return {
      pageTitle: "IPC | Market",
      checkMail: false,
      product: {},
      inCart: false,
      loading: true
    };
  },
  head() {
    return {
      title: this.pageTitle,
    };
  },
  async mounted() {
    try {
      this.loading = true;
      // Fetch product details from the FakeStoreAPI
      const response = await this.$axios.$get(`https://fakestoreapi.com/products`);
      this.product = response;
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    handleOpenMail() {
      // Your code for handling open mail event
      this.checkMail = !this.checkMail
    },
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
