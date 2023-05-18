<template>
  <div class="checkout-wrap">
    <h3 class="h3-medium header-text">Address details</h3>
    <div class="myAuth-group">
      <div class="myAuth">
        <form class="form-group">
          <div class="form-field">
            <div class="personal">
              <div class="input-field firstName-field">
                <label for="FirstName">First name</label><br />
                <input
                  class="input"
                  :class="{ 'input-error': invalidEmail }"
                  type="text"
                  id="FirstName"
                  name="FirstName"
                  v-model="FirstName"
                  placeholder="Lanre"
                  required
                />
                <div v-show="invalidEmail" class="error">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2260_9969)">
                      <path
                        d="M8 5.33334V8"
                        stroke="#FF3B2D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 10.6797V10.6667"
                        stroke="#FF3B2D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33334 8.00001 1.33334C4.31811 1.33334 1.33334 4.3181 1.33334 8C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667Z"
                        stroke="#FF3B2D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2260_9969">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>Field cannot be empty</p>
                </div>
              </div>
              <div class="input-field lastName-field">
                <label for="LastName">Last name</label><br />
                <input
                  class="input"
                  :class="{ 'input-error': invalidEmail }"
                  type="text"
                  id="LastName"
                  name="LastName"
                  v-model="lastName"
                  placeholder="Bello"
                  required
                />
                <div v-show="invalidEmail" class="error">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2260_9969)">
                      <path
                        d="M8 5.33334V8"
                        stroke="#FF3B2D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 10.6797V10.6667"
                        stroke="#FF3B2D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33334 8.00001 1.33334C4.31811 1.33334 1.33334 4.3181 1.33334 8C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667Z"
                        stroke="#FF3B2D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2260_9969">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>Field cannot be empty</p>
                </div>
              </div>
            </div>
            <div class="input-field email-field">
              <label for="email">Email address</label><br />
              <input
                class="input"
                :class="{ 'input-error': invalidEmail }"
                type="email"
                id="email"
                name="email"
                v-model="email"
                placeholder="johndoe@gmail.com"
                required
              />
              <div v-show="invalidEmail" class="error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_2260_9969)">
                    <path
                      d="M8 5.33334V8"
                      stroke="#FF3B2D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 10.6797V10.6667"
                      stroke="#FF3B2D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33334 8.00001 1.33334C4.31811 1.33334 1.33334 4.3181 1.33334 8C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667Z"
                      stroke="#FF3B2D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2260_9969">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Enter a valid Email address</p>
              </div>
            </div>
            <div class="input-field PhoneNumber-field">
              <label for="PhoneNumber">Phone number</label><br />
              <input
                class="input no-arrow"
                :class="{ 'input-error': invalidEmail }"
                type="number"
                id="PhoneNumber"
                name="PhoneNumber"
                v-model="PhoneNumber"
                placeholder="091234567809"
                required
              />
              <div v-show="invalidEmail" class="error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_2260_9969)">
                    <path
                      d="M8 5.33334V8"
                      stroke="#FF3B2D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 10.6797V10.6667"
                      stroke="#FF3B2D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33334 8.00001 1.33334C4.31811 1.33334 1.33334 4.3181 1.33334 8C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667Z"
                      stroke="#FF3B2D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2260_9969">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Enter a valid phone number</p>
              </div>
            </div>
            <div class="input-field password-field">
              <label for="CreatePassword">Create password</label>
              <div class="password">
                <input
                  class="input"
                  :class="{ 'input-error': invalidPassword }"
                  :type="inputType"
                  id="CreatePassword"
                  v-model="password"
                  name="CreatePassword"
                  placeholder="Enter password (min. of 4 characters)"
                  required
                />
                <span @click="togglePassword">
                  <svg
                    v-if="showPassword"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 96 960 960"
                    width="20"
                  >
                    <path
                      d="M480 744q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Zm0-72q-40 0-68-28t-28-68q0-40 28-68t68-28q40 0 68 28t28 68q0 40-28 68t-68 28Zm0 192q-142.596 0-259.798-78.5T48 576q55-131 172.202-209.5T480 288q142.596 0 259.798 78.5T912 576q-55 131-172.202 209.5T480 864Zm0-288Zm0 216q112 0 207-58t146-158q-51-100-146-158t-207-58q-112 0-207 58T127 576q51 100 146 158t207 58Z"
                    />
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 96 960 960"
                    width="20"
                  >
                    <path
                      d="m637 631-62-62q4-38-23-65.5T487 480l-62-62q13-5 27-7.5t28-2.5q70 0 119 49t49 119q0 14-2.5 28t-8.5 27Zm133 133-52-52q36-28 65.5-61.5T833 576q-49-101-144.5-158.5T480 360q-26 0-51 3t-49 10l-58-58q38-15 77.5-21t80.5-6q143 0 261.5 77.5T912 576q-22 57-58.5 103.5T770 764Zm-2 202L638 836q-38 14-77.5 21t-80.5 7q-143 0-261.5-77.5T48 576q22-57 58-104t84-85L90 287l51-51 678 679-51 51ZM241 439q-35 28-65 61.5T127 576q49 101 144.5 158.5T480 792q26 0 51-3.5t50-9.5l-45-45q-14 5-28 7.5t-28 2.5q-70 0-119-49t-49-119q0-14 3.5-28t6.5-28l-81-81Zm287 89Zm-96 96Z"
                    />
                  </svg>
                </span>
              </div>
              <div v-show="invalidPassword" class="error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_2260_9969)">
                    <path
                      d="M8 5.33334V8"
                      stroke="#FF3B2D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 10.6797V10.6667"
                      stroke="#FF3B2D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33334 8.00001 1.33334C4.31811 1.33334 1.33334 4.3181 1.33334 8C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667Z"
                      stroke="#FF3B2D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2260_9969">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>{{ passwordErrorMessage }}</p>
              </div>
            </div>
          </div>
          <div class="tandc">
            <p>
              By clicking on create account, you agree to the Independent
              Purchasing Company’s
              <router-link to="#">Terms & Conditions</router-link>
            </p>
          </div>
          <div class="submit-reset">
            <button @click.prevent="submitForm" class="btn primary-btn">
              Create account
            </button>
            <div class="pass-link">
              <p>
                Have an account already?
                <nuxt-link :to="{ name: 'index' }">Log in</nuxt-link>
                <!-- <nuxt-link to="/login">Log in</nuxt-link> -->
              </p>
            </div>
          </div>
        </form>
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
      email: "",
      PhoneNumber: "",
      password: "",
      inputType: "password",
      invalidEmail: false,
      invalidPassword: false,
      passwordErrorMessage: "",
      showPassword: true,
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
      if (this.showPassword === false) {
        this.inputType = "text";
      } else {
        this.inputType = "password";
      }
    },
    submitForm() {
      if (!this.isEmailValid) {
        this.invalidEmail = true;
        if (this.password.length < 4) {
          (this.invalidPassword = true),
            (this.passwordErrorMessage = "Please enter a password");
        }
      } else if (!this.invalidEmail && !this.invalidPassword) {
        // Submit form or perform other actions
        console.log("valid");
      }
    },
  },
};
</script>

<style scoped>
.checkout-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  max-width: 491px;
  width: 100%;
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
