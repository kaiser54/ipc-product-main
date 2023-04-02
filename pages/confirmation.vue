<template>
  <div>
    <div class="content">
      <div class="confirmation">
        <div class="confirmation-wrap">
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
            <div class="snippet">
              <p>
                We have sent a secured reset link to
                <span>{{ $store.state.maskedEmail }}</span
                ><br />
                Click on the link to reset your password.
              </p>
            </div>
          </div>
        </div>
        <nuxt-link :to="{ name: 'index' }" class="btn primary-btn"
          >Back to log in</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "registration layout",
  computed: {
    maskedEmail() {
      return this.$route.params.maskedEmail;
    }
  },
  mounted() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "setMaskedEmail") {
        localStorage.setItem("maskedEmail", state.maskedEmail);
      }
    });

    const maskedEmail = localStorage.getItem("maskedEmail");
    if (maskedEmail) {
      this.$store.commit("setMaskedEmail", maskedEmail);
    }
  }
};

</script>



<style scoped>
.confirmation {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 32px;

  max-width: 446px;
  margin-inline: auto;
}
.confirmation-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 24px;
}
.confirmation .btn {
  width: auto;
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
.message {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 8px;
  text-align: center;
}
.snippet p,
.snippet {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  text-align: center;

  color: var(--grey-grey3);
}
.message span {
  font-weight: 700;
  color: var(--grey-grey1);
}
@media (max-width: 750px) {
  br {
    display: none;
  }
  .svg-bg {
    width: 96px;
    height: 96px;
  }
  svg {
    width: 48px;
    height: 48px;
  }
  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height, or 150% */

    letter-spacing: -1px;
  }
}
</style>
