<template>
  <div>
    <AlertPrompt
      v-if="error"
      ref="alertPrompt"
      :message="error_msg"
      :alertType="alertType"
    />
    <div class="content">
      <div class="container">
        <div class="wrapper">
          <div class="header">
            <LoginWelcome />
          </div>
          <div class="form-group">
            <div class="form-field">
              <InputField
                id="email"
                label="Email address"
                v-model="email"
                :value="emailValue"
                type="email"
                placeholder="Enter your email address"
                :required="true"
                :error="error"
                :invalid="error || invalidEmail"
                :errorMessage="emailErrorMessage"
              />

              <InputField
                id="password"
                label="Password"
                v-model="password"
                :value="passwordValue"
                :type="inputType"
                placeholder="Enter your password"
                :required="true"
                :error="error"
                :invalid="error || invalidPassword"
                :errorMessage="passwordErrorMessage"
              />
            </div>
            <div class="submit-reset">
              <PrimaryBtn
                buttonText="Log in"
                @click="submitLogin"
                :buttonTextLoader="loading"
              />
              <div class="pass-link">
                <p>
                  Forgot password?
                  <nuxt-link :to="{ name: 'reset' }"
                    >Reset it here</nuxt-link
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="signup-link">
            <p>
              Are you new to IPC?<nuxt-link to="/auth/register">
                Create an account</nuxt-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  layout: "registration layout",
  // Other component properties and methods
  data() {
    return {
      email: "",
      password: "",
      invalidEmail: false,
      invalidPassword: false,
      emailErrorMessage: "",
      passwordErrorMessage: "",

      inputType: "password",
      showPassword: true,

      alertType: "error",

      pageTitle: "IPC | Login",
    };
  },
  head() {
    return {
      title: this.pageTitle,
    };
  },
  computed: {
    ...mapState("auth", ["loading", "error", "error_msg"]),
    ...mapGetters("auth", ["isLoggedIn"]),
    isEmailValid() {
      // Define a regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Check if the input email matches the regular expression
      return emailRegex.test(this.email);
    },
    isPasswordValid() {
      return this.password.length >= 4;
    },
    emailValue: {
      get() {
        return this.email;
      },
      set(newValue) {
        this.email = newValue;
      },
    },
    passwordValue: {
      get() {
        return this.password;
      },
      set(newValue) {
        this.password = newValue;
      },
    },
  },

  mounted() {
    // this.showAlertPrompt();
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
    password(newValue) {
      if (newValue.length < 4) {
        this.invalidPassword = true;
        this.passwordErrorMessage =
          "Password must be at least 4 characters long";
      } else {
        this.invalidPassword = false;
        this.passwordErrorMessage = "";
      }
    },
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async submitLogin() {
      const credentials = {
        email: this.email,
        password: this.password,
      };
      await this.login(credentials);

      if (this.isLoggedIn) {
        this.$router.push("/dashboard/market");
      } else if (this.error) {
        this.$refs.alertPrompt.showAlert();
      }
    },
  },
};
</script>

<style scoped>
.submit-reset {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;
}

.pass-link,
.signup-link {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-self: center;
  line-height: 21px;
}

.pass-link p {
  color: var(--grey-grey3);
}

.pass-link a {
  color: var(--grey-grey1);
}

.signup-link a {
  color: var(--primary-p300);
}
</style>
