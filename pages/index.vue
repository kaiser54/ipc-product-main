<template>
  <div>
    <AlertPrompt ref="alertPrompt" :message="alertMessage" :alertType="alertType" />
    <div class="content">
      <div class="container">
        <div class="wrapper">
          <div class="header">
            <LoginWelcome />
          </div>
          <div class="form-group">
            <div class="form-field">
              <!-- <InputField id="email" label="Email address" v-model="email" :value="emailValue" type="email"
                placeholder="Enter your email address" :required="true" :invalid="invalidEmail"
                :errorMessage="emailErrorMessage" /> -->
              <InputField id="username" label="username" v-model="username" :value="username" type="text"
                placeholder="Enter username" :required="true" :invalid="invalidEmail" :errorMessage="emailErrorMessage" />

              <InputField id="password" label="Password" v-model="password" :value="passwordValue" :type="inputType"
                placeholder="Enter your password" :required="true" :invalid="invalidPassword"
                :errorMessage="passwordErrorMessage" />
            </div>
            <div class="submit-reset">
              <PrimaryBtn buttonText="Log in" @click="submitLogin" :buttonTextLoader="buttonTextLoader" />
              <div class="pass-link">
                <p>
                  Forgot password?
                  <nuxt-link :to="{ name: 'reset-password' }">Reset it here</nuxt-link>
                </p>
              </div>
            </div>
          </div>
          <div class="signup-link">
            <p>
              Are you new to IPC?<nuxt-link :to="{ name: 'register' }">
                Create an account</nuxt-link>
            </p>
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
      password: "",
      inputType: "password",
      invalidEmail: false,
      invalidPassword: false,
      emailErrorMessage: "",
      passwordErrorMessage: "",
      showPassword: true,
      alertMessage: "",
      alertType: "",
      pageTitle: "IPC | Login",
      username: "",
      buttonTextLoader: false
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
    uservalue: {
      get() {
        return this.username;
      },
      set(newValue) {
        this.username = newValue;
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
    showAlertPrompt() {
      this.$refs.alertPrompt.showAlert('This is an example alert.', 'success');
    },

    async submitLogin() {
      this.buttonTextLoader = true;
      // if (this.isEmailValid && this.isPasswordValid) {
      if (this.isPasswordValid) {
        const credentials = {
          username: this.username,
          password: this.password,
        };
        const loginSuccessful = await this.$store.dispatch("login", credentials);
        if (loginSuccessful) {
          this.buttonTextLoader = false;
          // this.confirmationMessage = "Login successful!"; //i dont have a confirmation message yet
          this.$router.push("/dashboard"); // Redirect to the dashboard page
        } else {
          this.buttonTextLoader = false;
          // Handle failed login case if needed
          this.alertType = "error"
          this.alertMessage = "Login failed, please try again!"
          this.showAlertPrompt();

        }
      } else {
          this.buttonTextLoader = false;
        // if (!this.isEmailValid) {
        //   this.invalidEmail = true;
        //   this.emailErrorMessage = "Invalid email address";
        // }
        if (!this.isPasswordValid) {
          this.buttonTextLoader = false;
          this.invalidPassword = true;
          this.passwordErrorMessage = "Password must be at least 4 characters long";
        }
      }
    },
  },
}
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
