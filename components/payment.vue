<template>
    <div>
        <div class="individual-form">
            <h2 class="h2-medium header-text">Payment method</h2>
            <div class="myAuth-group">
                <div class="myAuth">
                    <div class="form-group">
                        <div class="form-field">
                            <div class="personal">
                                <InputField id="FirstName" label="First name" v-model="FirstName" :value="nameValue"
                                    type="text" placeholder="Lanre" :required="true" :invalid="invalidName"
                                    :errorMessage="FNErrorMessage" />
                                <InputField id="LastName" label="Last name" v-model="lastName" :value="LastnameValue"
                                    type="text" placeholder="Bello" :required="true" :invalid="invalidLastName"
                                    :errorMessage="LNErrorMessage" />
                            </div>
                            <InputField id="PhoneNumber" label="Phone number" v-model="PhoneNumber"
                                :value="phonenumberValue" type="tel" placeholder="091234567809" :required="true"
                                :invalid="invalidPhoneNum" :errorMessage="PNErrorMessage" />
                            <InputField id="CreatePassword" label="Create password" v-model="password"
                                :value="passwordValue" :type="inputType" placeholder="Enter password (min. of 4 characters)"
                                :required="true" :invalid="invalidPassword" :errorMessage="passwordErrorMessage" />
                        </div>
                        <div class="submit-reset">
                            <PrimaryBtn buttonText="Make payment" @click="submitForm" />
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
            PhoneNumber: "",
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
        submitForm() {
            this.validateForm();
            const isFormInvalid =
                this.invalidPassword ||
                this.invalidName ||
                this.invalidLastName ||
                this.invalidPhoneNum;

            if (!isFormInvalid) {
                // Submit form or perform other actions
                // this.$router.push("/dashboard/market");
                // this.$emit('customEvent');
            }
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
</style>
  