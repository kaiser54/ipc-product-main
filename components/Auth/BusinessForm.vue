<template>
  <div>
    <AlertPrompt
      v-if="error"
      ref="alertPrompt"
      :message="error_msg"
      :alertType="alertType"
    />
    <div class="individual-form">
      <h2 class="h2-medium header-text">Create a business account</h2>
      <div class="myAuth-group">
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
                  id="LastName"
                  label="Last name"
                  v-model="lastName"
                  :value="LastnameValue"
                  type="text"
                  placeholder="Bello"
                  :required="true"
                  :invalid="invalidLastName"
                  :errorMessage="LNErrorMessage"
                />
              </div>
              <InputField
                id="businessName"
                label="Business name"
                v-model="businessName"
                :value="businessNameValue"
                type="text"
                placeholder="Independent purchasing company"
                :required="true"
                :invalid="invalidBusinessName"
                :errorMessage="businessErrorMessage"
              />
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
                id="phoneNumber"
                label="Phone number"
                v-model="phoneNumber"
                :value="phoneNumberValue"
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
                <a href="https://ipc-africa.com/TermsConditions" rel="noreferrer" target="-blank">Terms & Conditions</a>
              </p>
            </div>
            <div class="submit-reset">
              <PrimaryBtn
                buttonText="Create account"
                @click="submitForm"
                :buttonTextLoader="loading"
              />
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
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      businessName: "",
      email: "",
      phoneNumber: "",
      password: "",

      inputType: "password",
      invalidEmail: false,
      invalidPassword: false,
      invalidName: false,
      invalidLastName: false,
      invalidPhoneNum: false,
      invalidBusinessName: false,

      FNErrorMessage: "",
      LNErrorMessage: "",
      emailErrorMessage: "",
      PNErrorMessage: "",
      passwordErrorMessage: "",
      businessErrorMessage: "",

      alertType: "error",
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
    businessNameValue: {
      get() {
        return this.businessName;
      },
      set(newValue) {
        this.businessName = newValue;
      },
    },
    LastnameValue: {
      get() {
        return this.lastName;
      },
      set(newValue) {
        this.lastName = newValue;
      },
    },
    phoneNumberValue: {
      get() {
        return this.phoneNumber;
      },
      set(newValue) {
        this.phoneNumber = newValue;
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
        this.invalidLastName = false;
        this.LNErrorMessage = "";
      }
    },
    businessName(newValue) {
      if (newValue.trim() !== "") {
        this.invalidBusinessName = false;
        this.businessErrorMessage = "";
      }
    },
    email(newValue) {
      if (newValue.trim() !== "") {
        this.invalidEmail = false;
        this.emailErrorMessage = "";
      }
    },
    phoneNumber(newValue) {
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
    ...mapActions("auth", ["register"]),
    async submitForm() {
      this.validateForm();
      const isFormInvalid =
        this.invalidBusinessName ||
        this.invalidEmail ||
        this.invalidPassword ||
        this.invalidName ||
        this.invalidLastName ||
        this.invalidPhoneNum;

      if (!isFormInvalid) {
        // Submit form or perform other actions
        const credentials = {
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          businessName: this.businessName,
          password: this.password,
          confirmPassword: this.password,
          phoneNumbers: this.phoneNumber,
        };

        await this.register(credentials);

        if (this.isLoggedIn) {
          this.$router.push("/dashboard/market");
        } else if (this.error) {
          this.$refs.alertPrompt.showAlert();
        }
      }
    },
    validateForm() {
      this.invalidEmail = this.email.trim() === "";
      this.invalidPassword = this.password.length < 4;
      this.invalidName = this.firstName.trim() === "";
      this.invalidBusinessName = this.businessName.trim() === "";
      this.invalidLastName = this.lastName.trim() === "";
      this.invalidPhoneNum = this.phoneNumber.trim() === "";

      this.emailErrorMessage = this.invalidEmail
        ? "Enter a valid email address"
        : "";
      this.passwordErrorMessage = this.invalidPassword
        ? "Please enter a password (min. of 4 characters)"
        : "";
      this.FNErrorMessage = this.invalidName ? "Field cannot be empty" : "";
      this.LNErrorMessage = this.invalidLastName ? "Field cannot be empty" : "";
      this.PNErrorMessage = this.invalidPhoneNum ? "Field cannot be empty" : "";
      this.businessErrorMessage = this.invalidBusinessName
        ? "Field cannot be empty"
        : "";
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
.thirdAuth {
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 24px;
}
.auth-btn-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px px;
  gap: 16px;
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
.pass-link p a,
.pass-link p a:visited
{
  color: var(--new-primary-p300);
}
.tandc a{
  color: var(--new-primary-p300)
}
</style>
