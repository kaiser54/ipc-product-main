<template>
  <div class="nuxt-page">
    <promptAlert @openMail="handleOpenMail" />
    <div class="page-title">
      <!-- <Breadcrumb :route="$route" /> -->
      <h2 class="h2-medium header-text">Market</h2>
    </div>
    <section class="market-product">
      <productcard />
    </section>
    <transition name="modal-fade">
      <!-- enter the PopModal an add router push to the button and remove the nuxt link -->
      <popupModal
        v-if="checkMail"
        animate="animate__zoomIn"
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
  </div>
</template>

<script>
export default {
  layout: "dashboardview",
  // Other component properties and methods
  data() {
    return {
      pageTitle: "IPC | Market",
      checkMail: false,
    };
  },
  head() {
    return {
      title: this.pageTitle,
    };
  },
  methods: {
    handleOpenMail() {
      this.checkMail = !this.checkMail;
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
