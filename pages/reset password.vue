<template>
  <div>
    <!-- <loading /> -->
    <div class="content">
      <div class="container">
        <div class="wrapper">
          <nuxt-link :to="{ name: 'login' }">
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
          </nuxt-link>
          <div class="header">
            <div class="header-group">
              <h2 class="h2-medium header-text">Reset password</h2>
              <p class="header-snippet">
                Enter the email address you used to register this account
              </p>
            </div>
          </div>
          <div class="form-group">
            <div class="form-field">
              <div class="input-field email-field">
                <label for="email">Email address</label><br />
                <input
                  class="input"
                  :class="{ 'input-error': invalidEmail }"
                  type="email"
                  id="email"
                  name="email"
                  v-model="email"
                  placeholder="Enter your email address"
                  required
                />
                <div v-show="invalidEmail" class="error">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="15"
                    viewBox="0 96 960 960"
                    width="15"
                  >
                    <path
                      d="M479.789 768Q495 768 505.5 757.711q10.5-10.29 10.5-25.5Q516 717 505.711 706.5q-10.29-10.5-25.5-10.5Q465 696 454.5 706.289q-10.5 10.29-10.5 25.5Q444 747 454.289 757.5q10.29 10.5 25.5 10.5ZM444 624h72V384h-72v240Zm36.276 336Q401 960 331 930q-70-30-122.5-82.5T126 725.042q-30-69.959-30-149.5Q96 496 126 426.5t82.5-122Q261 252 330.958 222q69.959-30 149.5-30Q560 192 629.5 222t122 82.5Q804 357 834 426.724q30 69.725 30 149Q864 655 834 725q-30 70-82.5 122.5T629.276 930q-69.725 30-149 30ZM480 888q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"
                    />
                  </svg>
                  <p>Enter a valid Email address</p>
                </div>
              </div>
            </div>
            <div class="submit-reset">
              <button @click.prevent="submitReset" class="btn primary-btn">
                Continue
              </button>
              <nuxt-link :to="{ name: 'login' }" class="btn ghost-btn"
                >Back to log in</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "registration layout",
  // Other component properties and methods
  data() {
    return {
      email: "",
      invalidEmail: false,
      pageTitle: "IPC | Reset Password",
    };
  },
  head() {
    return {
      title: this.pageTitle,
    };
  },
  computed: {
    isEmailValid() {
      // Define a regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Check if the input email matches the regular expression
      return emailRegex.test(this.email);
    },
  },
  watch: {
    email(newValue) {
      this.email = newValue.replace(/\s/g, "");
      if (
        newValue.length <= 4 ||
        this.isEmailValid == false ||
        newValue.indexOf("@") === -1
      ) {
        this.invalidEmail = true;
      } else {
        this.invalidEmail = false;
      }
    },
  },
  methods: {
    submitReset() {
      const maskedEmail = this.maskEmail(this.email);
      this.$store.commit("setMaskedEmail", maskedEmail);
      localStorage.setItem("maskedEmail", maskedEmail);
      if (!this.isEmailValid) {
        this.invalidEmail = true;
      } else if (!this.invalidEmail && !this.invalidPassword) {
        // Submit form or perform other actions
        // Navigate to another page with query parameters
        // this.$router.push({
        //   name: "confirmation",
        //   params: { maskedEmail },
        // });
        this.$router.push({ name: "confirmation",});

        console.log("valid");
      }
    },
    maskEmail: (email) => {
      // function body
      if (email.length < 12) {
        return email;
      }
      const [username, domain] = email.split("@");
      const maskedUsername = `${username.substring(0, 3)}${"*".repeat(4)}`;
      return `${maskedUsername}@${domain}`;
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
.header .header-group {
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}
.header .header-group .header-snippet {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: var(--grey-grey2);
}
.submit-reset {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (max-width: 750px) {
  .nav-btn {
    width: 36px;
    height: 36px;
  }
  .nav-btn svg {
    width: 20px !important;
    height: 20px !important;
  }
}
</style>
