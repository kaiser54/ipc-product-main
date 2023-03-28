<template>
  <div class="modal">
    <div class="content">
      <div class="container">
        <div class="wrapper">
          <div class="modal-content">
            <div class="svg-bg">
              <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 32L24 48L56 16"
                stroke="#20AF0B"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            </div>
           <div class="message">
            <h2 class="h2-medium header-text">Check your email</h2>
            <p>We have sent a secured reset link to <span>dan****4@gmail.com</span> Click on the link to reset your password.</p>
            <p>{{ this.modalMessage }}</p>
           </div>
            <!-- <nuxt-link :to="{ name: 'login' }" @click="closeModal" class="btn primary-btn"
              >Back to log in</nuxt-link
            > -->
            <div @click="closeModal" class="btn primary-btn">Close</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["modalMessage"],
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>

<style scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
}
.modal .container {
  border-radius: 8px;
}
.container .wrapper {
  align-items: center;
  max-width: 446px;
}
.modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 40px 30px;
  background: white;
}
.svg-bg {
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

width: 128px;
height: 128px;

/* Positive/P50 */

background: var(--positive-p50);
border-radius: 100%;
}
.modal-content p {
  text-align: center;
}
</style>
