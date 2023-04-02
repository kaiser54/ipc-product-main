<template>
  <div>
    <div class="content">
      <div class="container">
        <div class="wrapper">
          <div class="header">
            <h2 class="h2-medium header-text">Create new password</h2>
            <p>
              Your new password must be different from previous passwords you’ve used for
              your account
            </p>
          </div>

          <form action="" class="form-group">
            <div class="form-field">
              <div class="input-field password-field">
                <label for="password">Create new password</label>
                <div class="password">
                  <input
                    class="input"
                    :class="{ 'input-error': invalidPassword }"
                    :type="inputType"
                    id="password"
                    v-model="password"
                    name="password"
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
              <div class="input-field password-field">
                <label for="password">Re-enter new password</label>
                <div class="password">
                  <input
                    class="input"
                    :class="{ 'input-error': invalidRePassword }"
                    :type="reinputType"
                    id="password"
                    v-model="rePassword"
                    name="password"
                    placeholder="Enter password (min. of 4 characters)"
                    required
                  />
                  <span @click="toggleRePassword">
                    <svg
                      v-if="showRePassword"
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
                <div v-show="invalidRePassword" class="error">
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
                  <p>{{ rePasswordErrorMessage }}</p>
                </div>
              </div>
            </div>
          </form>

          <button @click.prevent="resetPasswordLogin" class="btn primary-btn">
            Reset password and log in
          </button>
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
      password: "",
      rePassword: "",
      inputType: "password",
      reinputType: "password",
      invalidPassword: false,
      invalidRePassword: false,
      passwordErrorMessage: "",
      rePasswordErrorMessage: "",
      showPassword: true,
      showRePassword: true,
      pageTitle: "IPC | Forgot Password",
    };
  },
  head() {
    return {
      title: this.pageTitle,
    };
  },
  watch: {
    password(newValue) {
      if (newValue.length < 4) {
        this.invalidPassword = true;
        this.passwordErrorMessage = "Password must be at least 4 characters long";
      }
      //  else if (password !== rePassword) {
      //   this.rePasswordErrorMessage = "Password not thesame";
      // }
      else {
        this.invalidPassword = false;
        // this.invalidRePassword = false;
        this.passwordErrorMessage = "";
      }
    },
    rePassword(newReValue) {
      // if (newValue.length < 4) {
      //   this.invalidPassword = true;
      //   this.passwordErrorMessage = "Password must be at least 4 characters long";
      // } else
      if (this.password !== newReValue) {
        this.rePasswordErrorMessage = "Password not match";
        this.invalidRePassword = true;
      } else {
        // this.invalidPassword = false;
        this.invalidRePassword = false;
        this.repasswordErrorMessage = "";
      }
    },
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
    toggleRePassword() {
      this.showRePassword = !this.showRePassword;
      if (this.showRePassword === false) {
        this.reinputType = "text";
      } else {
        this.reinputType = "password";
      }
    },
    // submitLogin() {
    //   if (!this.isEmailValid) {
    //     this.invalidEmail = true;
    //     if (this.password.length < 4) {
    //       (this.invalidPassword = true),
    //         (this.passwordErrorMessage = "Password must be at least 4 characters long");
    //     }
    //   } else if (!this.invalidEmail && !this.invalidPassword) {
    //     // Submit form or perform other actions
    //     console.log("valid");
    //   }
    // },
    // resetPasswordLogin() {
    //   if (this.password !== this.rePassword || !this.password || !this.rePassword) {
    //     this.rePasswordErrorMessage = "Password not match";
    //     this.passwordErrorMessage = "Password must be at least 4 characters long";
    //     this.invalidPassword = true
    //     this.invalidRePassword = true
    //   } else if (this.password.length < 4) {
    //     this.passwordErrorMessage = "Password must be at least 4 characters long";
    //     this.invalidPassword = false
    //     this.invalidRePassword = false

    //   } else {
    //     this.$router.push("login");
    //   }
    // }
    resetPasswordLogin() {
      if (this.password.length < 4) {
        this.passwordErrorMessage = "Password must be at least 4 characters long";
        this.invalidPassword = true;
        if (this.rePassword.length < 0) {
          this.invalidRePassword = true;
        }
      } else if (this.password !== this.rePassword) {
        this.rePasswordErrorMessage = "Password must MATCH!";
        this.invalidRePassword = false;
      } else {
        this.$router.push("index");
      }
    },
  },
};
</script>

<style scoped>
.header {
  flex-direction: column;
  padding: 0px;
  gap: 8px;
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
</style>
