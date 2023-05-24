<template>
  <div>
    <!-- <loading /> -->
    <div class="content">
      <div class="container">
        <div class="wrapper">
          <div @click="goBack">
            <div class="nav-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12L10 19M21 12H3H21ZM3 12L10 5L3 12Z" stroke="#303237" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
          </div>
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
              <InputField id="email" label="Email address" v-model="email" :value="emailValue" type="email"
                placeholder="Enter your email address" :required="true" :invalid="invalidEmail"
                :errorMessage="emailErrorMessage" />
            </div>
            <div class="submit-reset">
              <PrimaryBtn buttonText="Continue" @click="submitReset" />
              <nuxt-link :to="{ name: 'index' }" class="btn ghost-btn">Back to log in</nuxt-link>
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
      emailErrorMessage: "",
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
    emailValue: {
      get() {
        return this.email;
      },
      set(newValue) {
        this.email = newValue;
      },
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
        this.emailErrorMessage = "Invalid email address";
      } else {
        this.invalidEmail = false;
        this.emailErrorMessage = "";
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
        this.emailErrorMessage = "Invalid email address";
      } else {
        // Submit form or perform other actions
        // Navigate to another page with query parameters
        // this.$router.push({
        //   name: "confirmation",
        //   params: { maskedEmail },
        // });
        this.$router.push({ name: "confirmation" });
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
    goBack() {
      this.$router.go(-1);
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
