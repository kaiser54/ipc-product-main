<template>
    <div>
        <div class="content">
            <div class="container">
                <div class="wrapper">
                    <div class="header">
                        <h2 class="h2-medium header-text">Create new password</h2>
                        <p>
                            Your new password must be different from previous passwords you’ve
                            used for your account
                        </p>
                    </div>

                    <div class="form-group">
                        <div class="form-field">
                            <InputField id="password" label="Create new password" v-model="password" :value="passwordValue"
                                :type="inputType" placeholder="Enter password (min. of 4 characters)" :required="true"
                                :invalid="invalidPassword" :errorMessage="passwordErrorMessage" />
                            <InputField id="rePassword" label="Re-enter new password" v-model="rePassword"
                                :value="rePasswordValue" :type="inputType"
                                placeholder="Enter password (min. of 4 characters)" :required="true"
                                :invalid="invalidRePassword" :errorMessage="rePasswordErrorMessage" />
                        </div>
                        <div class="submit-reset">
                            <PrimaryBtn buttonText="Reset password and log in" @click="submitLogin" />
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
            pageTitle: "IPC | Forgot Password"
        };
    },
    head() {
        return {
            title: this.pageTitle,
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
        rePasswordValue: {
            get() {
                return this.rePassword;
            },
            set(newValue) {
                this.rePassword = newValue;
            },
        },
    },
    watch: {
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
        rePassword(newValue) {
            if (newValue.length < 4) {
                this.invalidRePassword = true;
                this.rePasswordErrorMessage =
                    "Password must be at least 4 characters long";
            } else {
                this.invalidRePassword = false;
                this.rePasswordErrorMessage = "";
            }
        },
    },
    created() {
        console.log(this.$route.params.token)
    },
    methods: {
        submitLogin() {
            if (this.password.length < 4) {
                this.invalidPassword = true;
                this.passwordErrorMessage =
                    "Password must be at least 4 characters long";
                if (this.rePassword.length < 4) {
                    this.invalidRePassword = true;
                    this.rePasswordErrorMessage =
                        "Password must be at least 4 characters long";
                }
            } else {
                // Submit form or perform other actions
                console.log("Valid login");
                
                this.resetTokenSent()
            }
        },
        async resetTokenSent() {
            try {
                const response = await this.$axios.post('/business-customers/reset-password', {
                    password: this.password,
                    confirmPassword: this.rePassword,
                    token: this.$route.params.token
                }
                )
                console.log('Token Sent', response.data)
                this.$router.push("/auth/login");
            } catch(error){
                console.error('Wrong Token:', error)
            }
      }
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
  