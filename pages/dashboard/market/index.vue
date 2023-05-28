<template>
  <div class="nuxt-page">
    <promptAlert @openMail="handleOpenMail" />
    <div class="page-title">
      <!-- <Breadcrumb :route="$route" /> -->
      <h2 class="h2-medium header-text">Market</h2>
    </div>
    <section class="market-product">
      <div class="product-top-wrap">
        <productcard v-for="(product) in products" :key="product.id" :product="product" />
      </div>
    </section>
    <transition name="modal-fade">
      <!-- enter the PopModal an add router push to the button and remove the nuxt link -->
      <popupModal v-if="checkMail" animate="animate__zoomIn" title="Check your email address"
        snippet="We have sent a secured reset link to your email. Click on the link to verify your email."
        buttonText="Resend link" buttonText2="Got it" buttonClass="neutral-btn" buttonClass2="primary-btn"
        @closeModal="handleOpenMail" @closeModalBG="handleOpenMail" />
    </transition>
    <mycart />
  </div>
</template>

<script>
export default {
  layout: "dashboardview",
  data() {
    return {
      pageTitle: "IPC | Market",
      checkMail: false,
      toggleBTN: false,
    };
  },
  head() {
    return {
      title: this.pageTitle,
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
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

@media (max-width: 950px) {
  .product-top-wrap {
    padding: 0;
    gap: 8px;
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
