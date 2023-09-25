<template>
  <div>
    <div class="content">
      <div class="confirmation">
        <div @click="goBack" style="margin-right: 100%">
          <div class="nav-btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12L10 19M21 12H3H21ZM3 12L10 5L3 12Z"
                stroke="#303237"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
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
                <span>{{ this.maskedEmail }}</span
                ><br />
                Click on the link to reset your password.
              </p>
            </div>
          </div>
        </div>
        <nuxt-link to="/auth/login" class="btn primary-btn"
          >Back to log in</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["maskedEmail"],
  methods: {
    goBack() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.nav-btn {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;

  border-radius: 100%;

  background: var(--grey-grey6);
}
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
