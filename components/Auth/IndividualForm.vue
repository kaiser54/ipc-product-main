<template>
  <div>
    <AlertPrompt
      ref="alertPrompt"
      :message="alertMessage"
      :alertType="alertType"
    />
    <div class="individual-form">
      <h2 class="h2-medium header-text">Create an individual account</h2>
      <thirdAuth />
      <div class="myAuth-group">
        <h3 class="h3-medium header-text">Sign up with personal details</h3>
        <div class="myAuth">
          <div class="form-group">
            <div class="form-field">
              <div class="personal">
                <InputField
                  id="firstName"
                  label="First name"
                  v-model="firstName"
                  :value="nameValue"
                  type="text"
                  placeholder="Lanre"
                  :required="true"
                  :invalid="invalidName"
                  :errorMessage="FNErrorMessage"
                />
                <InputField
                  id="lastName"
                  label="Last name"
                  v-model="lastName"
                  :value="lastNameValue"
                  type="text"
                  placeholder="Bello"
                  :required="true"
                  :invalid="invalidlastName"
                  :errorMessage="LNErrorMessage"
                />
              </div>
              <InputField
                id="email"
                label="Email address"
                v-model="email"
                :value="emailValue"
                type="email"
                placeholder="johndoe@gmail.com"
                :required="true"
                :invalid="invalidEmail"
                :errorMessage="emailErrorMessage"
              />
              <InputField
                id="phoneNumbers"
                label="Phone number"
                v-model="phoneNumbers"
                :value="phoneNumbersValue"
                type="tel"
                placeholder="091234567809"
                :required="true"
                :invalid="invalidPhoneNum"
                :errorMessage="PNErrorMessage"
              />
              <InputField
                id="CreatePassword"
                label="Create password"
                v-model="password"
                :value="passwordValue"
                :type="inputType"
                placeholder="Enter password (min. of 4 characters)"
                :required="true"
                :invalid="invalidPassword"
                :errorMessage="passwordErrorMessage"
              />
            </div>
            <div class="tandc">
              <p>
                By clicking on create account, you agree to the Independent
                Purchasing Company’s
                <nuxt-link to="#">Terms & Conditions</nuxt-link>
              </p>
            </div>
            <div class="submit-reset">
              <PrimaryBtn buttonText="Create account" @click="submitForm" />
              <div class="pass-link">
                <p>
                  Have an account already?
                  <nuxt-link to="/auth/login">Log in</nuxt-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumbers: "",
      password: "",
      inputType: "password",
      invalidEmail: false,
      invalidPassword: false,
      invalidName: false,
      invalidlastName: false,
      invalidPhoneNum: false,
      FNErrorMessage: "",
      LNErrorMessage: "",
      emailErrorMessage: "",
      PNErrorMessage: "",
      passwordErrorMessage: "",
      alertMessage: "",
      alertType: "",
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
    passwordValue: {
      get() {
        return this.password;
      },
      set(newValue) {
        this.password = newValue;
      },
    },
    nameValue: {
      get() {
        return this.firstName;
      },
      set(newValue) {
        this.firstName = newValue;
      },
    },
    lastNameValue: {
      get() {
        return this.lastName;
      },
      set(newValue) {
        this.lastName = newValue;
      },
    },
    phoneNumbersValue: {
      get() {
        return this.phoneNumbers;
      },
      set(newValue) {
        this.phoneNumbers = newValue;
      },
    },
  },
  watch: {
    firstName(newValue) {
      if (newValue.trim() !== "") {
        this.invalidName = false;
        this.FNErrorMessage = "";
      }
    },
    lastName(newValue) {
      if (newValue.trim() !== "") {
        this.invalidlastName = false;
        this.LNErrorMessage = "";
      }
    },
    email(newValue) {
      if (newValue.trim() !== "") {
        this.invalidEmail = false;
        this.emailErrorMessage = "";
      }
    },
    phoneNumbers(newValue) {
      if (newValue.trim() !== "") {
        this.invalidPhoneNum = false;
        this.PNErrorMessage = "";
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
    async submitForm() {
      this.validateForm();
      const isFormInvalid =
        this.invalidEmail ||
        this.invalidPassword ||
        this.invalidName ||
        this.invalidlastName ||
        this.invalidPhoneNum;

      if (!isFormInvalid) {
        // Submit form or perform other actions
        const credentials = {
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.password,
          confirmPassword: this.password,
          phoneNumbers: this.phoneNumbers,
        };
        const success = await this.$store.dispatch(
          "signupIndividual",
          credentials
        );
        if (success) {

          // Redirect to the home page or do any other necessary actions
          this.$router.push("/dashboard/market");
        } else {
          this.error = this.$store.state.error;
          this.alertType = "error"
          this.alertMessage = "Signup failed, please try again!"
          this.showAlertPrompt();
        }
      }
    },
    validateForm() {
      this.invalidEmail = this.email.trim() === "";
      this.invalidPassword = this.password.length < 4;
      this.invalidName = this.firstName.trim() === "";
      this.invalidlastName = this.lastName.trim() === "";
      this.invalidPhoneNum = this.phoneNumbers.trim() === "";

      this.emailErrorMessage = this.invalidEmail
        ? "Enter a valid email address"
        : "";
      this.passwordErrorMessage = this.invalidPassword
        ? "Please enter a password"
        : "";
      this.FNErrorMessage = this.invalidName ? "Field cannot be empty" : "";
      this.LNErrorMessage = this.invalidlastName ? "Field cannot be empty" : "";
      this.PNErrorMessage = this.invalidPhoneNum ? "Field cannot be empty" : "";
    },
  },
};
</script>

<style scoped>
p {
  text-align: center;
}
</style>

<style scoped>
.individual-form {
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 24px;
  margin-bottom: 60px;
}
.myAuth-group {
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 24px;
}
.form-group {
  gap: 24px;
}
.personal {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
}

.password {
  position: relative;
}
.password span svg {
  position: absolute;
  right: 16px;
  top: 14px;
  fill: var(--grey-grey3);
}
.submit-reset {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 24px;
}
/* For webkit-based browsers */
input.no-arrow::-webkit-outer-spin-button,
input.no-arrow::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* For Firefox */
input.no-arrow::-moz-number-spin-box {
  -moz-appearance: none;
  margin: 0;
}
</style>
