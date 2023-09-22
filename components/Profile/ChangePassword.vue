<template>
  <div>
    <Loading :message="message" v-if="verificationLoading" />
    <div v-if="showPasswordModal" class="addNumberFunc animate__animated" :class="animate">
      <div class="change-password">
        <header>
          <div class="frame-bg">
            <div class="frame-1"></div>
            <div class="frame-2">
              <div class="circle">
                <svg @click="$emit('close')" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  fill="none">
                  <path d="M5 19L19 5M5 5L19 19L5 5Z" stroke="#565C69" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </div>
              <p>Change password</p>
            </div>
          </div>
        </header>
        <div class="frame-content">
          <div class="frame-content-header">
            <h3 class="h3-heading">Enter Change password</h3>
          </div>

          <div class="form-field">
            <InputComponent id="oldPassword" label="Enter your old password" name="password" required
              v-model="oldPassword" :isInvalid="validOldPassword" :errMsg="errOldPassword" />
            <InputComponent id="newPassword" label="Enter your new password" name="password" required
              v-model="newPassword" :isInvalid="validNewPassword" :errMsg="errNewPassword" />
            <InputComponent id="confirmPassword" label="Enter your new password again" name="password" required
              v-model="confirmPassword" :isInvalid="ValidConfirmPassword" :errMsg="errConfirmPassword" />
          </div>
          <button class="btn primary-btn" @click="handleChangePassword">
            Change password
          </button>
        </div>
      </div>
      <div class="passBG" @click="$emit('close')"></div>
    </div>
    <ModalPasswordVerified v-else-if="showModal" @cancelModal="removeModal()" @routeToMarket="routeToMarket()" />
  </div>
</template>
  
<script>
import "animate.css";
import Loading from '~/components/Loader/Rolling.vue';
export default {
  components: { Loading },
  props: {
    animate: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      errOldPassword: "",
      errNewPassword: "",
      errConfirmPassword: "",
      validOldPassword: false,
      validNewPassword: false,
      ValidConfirmPassword: false,

      verificationLoading: false,
      showModal: false,
      message: '',
      showPasswordModal: true
    };
  },
  methods: {
    validatePasswords() {
      let isValid = true;

      // Check old password
      if (!this.oldPassword) {
        this.validOldPassword = true;
        this.errOldPassword = "Please enter your old password.";
        isValid = false;
      } else {
        this.validOldPassword = false;
        this.errOldPassword = "";
      }

      // Check new password
      if (!this.newPassword) {
        this.validNewPassword = true;
        this.errNewPassword = "Please enter a new password.";
        isValid = false;
      } else if (this.newPassword.length < 8) {
        this.validNewPassword = true;
        this.errNewPassword = "Password must be at least 8 characters.";
        isValid = false;
      } else if (this.newPassword === this.oldPassword) {
        this.validNewPassword = true;
        this.errNewPassword =
          "New password must be different from old password.";
        isValid = false;
      } else {
        this.validNewPassword = false;
        this.errNewPassword = "";
      }

      // Check confirm password
      if (!this.confirmPassword) {
        this.ValidConfirmPassword = true;
        this.errConfirmPassword = "Please confirm your new password.";
        isValid = false;
      } else if (this.confirmPassword !== this.newPassword) {
        this.ValidConfirmPassword = true;
        this.errConfirmPassword = "New passwords do not match.";
        isValid = false;
      } else {
        this.ValidConfirmPassword = false;
        this.errConfirmPassword = "";
      }

      return isValid;
    },
    async handleChangePassword() {
      if (this.validatePasswords()) {
        // Code to submit the password change request
        console.log(
          "Password change request submitted:",
          this.oldPassword,
          this.newPassword,
          this.confirmPassword
        );
        try {
          this.verificationLoading = true;
          this.showPasswordModal = false
          this.message = "Changing Password, Please wait"
          const userId = localStorage.getItem("userId");
          if (!userId) {
            throw new Error("User Id not found in localStorage.");
          }
          const response = await this.$axios.post(
            "/business-customers/change-password",
            {
              customerId: userId,
              oldPassword: this.oldPassword,
              newPassword: this.newPassword,
              confirmPassword: this.confirmPassword,
            }
          );
          this.verificationLoading = false;
          this.showPasswordModal = false
          console.log("Password Changed Successfully:", response.data);
          console.log(userId);
          this.showModal = true;

          // After 10 seconds, hide the modal and navigate to /dashboard/Market
          setTimeout(() => {
            this.showModal = false;
            this.$router.push("/dashboard/Market");
          }, 3000); // 10000 milliseconds = 10 seconds
        } catch (error) {
          console.error("Password Change Unsuccessful:", error);
          // Handle the error as needed
          this.showModal = false;
          this.message = "Try again, Something went wrong"
        }
      }
    },
    closeModal() {
      this.showPasswordModal = false;
    },
    removeModal() {
      this.verificationLoading = true
      this.showModal = false
      this.message = "Let's go to Market"
    },
    routeToMarket(){
      this.verificationLoading = true
      this.$router.push("/dashboard/market")
      this.showModal = false
      this.message = "Let's go to Market"
    },
    
  }
}
</script>
  
<style scoped>
.animate__animated.animate__slideInUp {
  --animate-duration: 0.5s;
}

.addNumberFunc {
  /* background: var(--white); */
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  overflow: hidden;
  z-index: 3;
}

header,
.frame-content {
  width: 100%;
}

.change-password {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 24px;
  gap: 32px;

  position: absolute;
  width: 432px;
  height: auto;
  /* left: calc(50% - 432px / 2 + 36.01px);
    top: 192.25px; */
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* White */

  background: #ffffff;
  /* Raised */

  box-shadow: 0px 138px 55px rgba(0, 2, 46, 0.01),
    0px 78px 47px rgba(0, 2, 46, 0.05), 0px 35px 35px rgba(0, 2, 46, 0.09),
    0px 9px 19px rgba(0, 2, 46, 0.1), 0px 0px 0px rgba(0, 2, 46, 0.1);
  border-radius: 16px;
}

.frame-2 {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
}

.frame-2 p {
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height, or 150% */

  text-align: center;

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.circle {
  padding: 6px;
  gap: 10px;

  width: 32px;
  height: 32px;
}

.frame-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.frame-content-header {
  display: none;
}

.frame-content-header h3 {
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height, or 150% */

  letter-spacing: -0.5px;

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.frame-content-header p.snippet {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Grey/Grey2 */

  color: var(--grey-gre2);
}

.form,
.form-field,
.password-input {
  width: 100%;
}

form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
}

.btn-group,
.btn-group2 {
  width: 100%;
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
}

.passBG {
  background: rgba(48, 50, 55, 0.3);
  width: 100%;
  height: 100%;
}

@media (max-width: 950px) {
  .addNumberFunc header {
    position: absolute;
    width: 100%;
    height: 92px;
    left: 0px;
    top: 0px;
    background: var(--primary-p500);
  }

  .frame-1 {
    box-sizing: border-box;

    position: absolute;
    width: 95%;
    height: 68px;
    top: 0px;

    /* Grey/Grey5 */

    background: var(--grey-grey5);
    /* Grey/Grey5 */

    border-bottom: 0.934481px solid var(--grey-grey5);
    border-radius: 16px 16px 0px 0px;
  }

  .frame-2 {
    align-items: center;
    position: absolute;
    width: 100%;
    height: 56px;
    left: 0px;
    top: 12.25px;
    background: var(--white);
    border-radius: 16px 16px 0px 0px;
    display: flex;
    justify-content: center;
  }

  .frame-2 p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    text-align: center;

    /* Grey/Grey1 */

    color: var(--grey-grey1);
  }

  .frame-2 svg {
    position: absolute;
    width: 24px;
    height: 24px;
    right: 17px;
    top: 15.75px;
  }

  .frame-bg {
    display: flex;
    position: absolute;
    width: 100%;
    height: 68px;
    left: 0px;
    top: 24px;
    flex-direction: column;
    align-items: center;
  }

  .frame-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;
    margin-inline: 16px;
    margin-top: 116px;
    width: auto;
  }

  .change-password {
    display: block;
    padding: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transform: none;
  }

  .frame-content-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
  }

  .circle {
    border: none;
  }
}
</style>
  