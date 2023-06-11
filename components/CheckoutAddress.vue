<template>
  <div>
    <div class="individual-form">
      <h3 class="h3-medium header-text">Address details</h3>
      <div class="myAuth-group">
        <div class="myAuth">
          <div class="form-group">
            <!-- <div class="form-field">
              <div class="personal">
                <InputField id="FirstName" label="First name" v-model="FirstName" :value="nameValue" type="text"
                  placeholder="Lanre" :required="true" :invalid="invalidName" :errorMessage="FNErrorMessage" />
                <InputField id="LastName" label="Last name" v-model="lastName" :value="LastnameValue" type="text"
                  placeholder="Bello" :required="true" :invalid="invalidLastName" :errorMessage="LNErrorMessage" />
              </div>
              <div class="phone-num">
                <InputField id="PhoneNumber" label="Phone number" v-model="PhoneNumber" :value="phonenumberValue"
                  type="tel" placeholder="091234567809" :required="true" :invalid="invalidPhoneNum"
                  :errorMessage="PNErrorMessage" />

                <div class="new-phone-number animate__animated animate__slideInDown" v-if="showNewPhoneNumber">
                  <InputField class="inputed" id="number" v-model="newPhoneNumber" :value="numberValue" type="tel"
                    placeholder="Add new number" :required="false" :invalid="invalidNumber"
                    errorMessage="Enter a valid phone number" />
                  <PrimaryBtn @click="addNumBtn" buttonText="Add" /> -->
                  <!-- second button -->
                  <!-- <svg @click="closeNumber" style="margin-top: 22px" xmlns="http://www.w3.org/2000/svg" width="20"
                    height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4.16602 15.8307L15.8327 4.16406M4.16602 4.16406L15.8327 15.8307L4.16602 4.16406Z"
                      stroke="#565C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg> -->
                  <!-- third button -->
                <!-- </div>
                <add-num-btn @click="openAddNumber" style="justify-content: flex-start;" />
              </div> -->
<!-- 
              <InputField id="CreatePassword" label="Create password" v-model="password" :value="passwordValue"
                :type="inputType" placeholder="Enter password (min. of 4 characters)" :required="true"
                :invalid="invalidPassword" :errorMessage="passwordErrorMessage" />
              <InputField id="CreatePassword" label="Create password" v-model="password" :value="passwordValue"
                :type="inputType" placeholder="Enter password (min. of 4 characters)" :required="true"
                :invalid="invalidPassword" :errorMessage="passwordErrorMessage" />
              <InputField id="CreatePassword" label="Create password" v-model="password" :value="passwordValue"
                :type="inputType" placeholder="Enter password (min. of 4 characters)" :required="true"
                :invalid="invalidPassword" :errorMessage="passwordErrorMessage" />
            </div> -->
            <div class="submit-reset">
              <PrimaryBtn buttonText="Save and continue" @click="submitForm" />
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
      FirstName: "",
      lastName: "",
      phoneNumbers: ["08100023262"],
      password: "",

      inputType: "password",
      invalidPassword: false,
      invalidName: false,
      invalidLastName: false,
      invalidPhoneNum: false,

      FNErrorMessage: "",
      LNErrorMessage: "",
      PNErrorMessage: "",
      passwordErrorMessage: "",

      showNewPhoneNumber: false,
      invalidNumber: true,
    };
  },
  computed: {
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
        return this.FirstName;
      },
      set(newValue) {
        this.FirstName = newValue;
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
    phonenumberValue: {
      get() {
        return this.PhoneNumber;
      },
      set(newValue) {
        this.PhoneNumber = newValue;
      },
    },
  },
  watch: {
    FirstName(newValue) {
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
    PhoneNumber(newValue) {
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
    // submitForm() {
    //   this.validateForm();
    //   const isFormInvalid =
    //     this.invalidPassword ||
    //     this.invalidName ||
    //     this.invalidLastName ||
    //     this.invalidPhoneNum;

    //   if (!isFormInvalid) {
        // Submit form or perform other actions
        // this.$router.push("/dashboard/market");
      //   this.$emit('customEvent');
      // }
    // },
    submitForm() {
        this.$emit('customEvent');
        window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional: Add smooth scrolling effect
      });
    },
    validateForm() {
      this.invalidPassword = this.password.length < 4;
      this.invalidName = this.FirstName.trim() === "";
      this.invalidLastName = this.lastName.trim() === "";
      this.invalidPhoneNum = this.PhoneNumber.trim() === "";

      this.passwordErrorMessage = this.invalidPassword
        ? "Please enter a password (min. of 4 characters)"
        : "";
      this.FNErrorMessage = this.invalidName ? "Field cannot be empty" : "";
      this.LNErrorMessage = this.invalidLastName ? "Field cannot be empty" : "";
      this.PNErrorMessage = this.invalidPhoneNum ? "Field cannot be empty" : "";
    },
    openAddNumber() {
      this.showNewPhoneNumber = true; // Update the local data property
    },
    closeNumber() {
      this.showNewPhoneNumber = false;
      this.invalidNumber = false
    },
    addNumBtn() {
      const phoneNumberRegex =
        /^((090)[23589])|((070)[1-9])|((080)[2-9])|((081)[0-9])(\d{7})$/;
      if (phoneNumberRegex.test(newPhoneNumber)) {
        this.phoneNumbers.push(newPhoneNumber);
        this.showNewPhoneNumber = false; // Hide the new-phone-number div
        this.invalidNumber = false; // Reset the invalidNumber flag
        newPhoneNumber = null;
      } else {
        this.invalidNumber = true;
        this.showNewPhoneNumber = true;
      }
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

.phone-num {
  width: 100%;
  display: flex;
  gap: 8px;
  flex-direction: column;
}

.new-phone-number {
  max-width: 429px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
}

.new-phone-number .inputed {
  max-width: 277px;
  width: 100%;
}

.new-phone-number button {
  max-width: 80px;
  margin-top: 8px;
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
