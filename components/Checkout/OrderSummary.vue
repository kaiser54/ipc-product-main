<template>
  <div class="payment">
    <h3 class="h3-medium header-text">Order summary</h3>
    <userInfo :data="data" v-if="data" :checkout="true" :isTimeandDateNeeded="isTimeandDateNeeded">
      <template v-slot:button>
        <button class="btn ghost-btn" @click="step1">
          Change delivery address
        </button>
      </template>
      <template v-slot:delivery>
        <div class="delivery__time">
          <div class="delivery">
            Your items will be delivered to you in 24hours. If there will be any
            delay in some order items, we’ll contact you immediately
          </div>
          <!-- <div class="delivery">Estimated delivery time</div> -->
          <!-- <div class="time">24hours</div> -->
        </div>
      </template>
      <template v-slot:email>
        <form action="">
          <label for="email">Email address</label>
          <input
            :class="{ 'input-error': emailError }"
            type="text"
            class="input"
            placeholder="Enter your email address"
            v-model="email"
            @input="validateEmail"
          />
          <div
            class="caution"
            :class="{ error: emailError, caution: !emailError }"
          >
            <svg
              v-if="emailError"
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
            <svg
              v-if="!emailError"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_5373_7723)">
                <path
                  d="M8 5.33203V7.9987"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 10.681V10.668"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.00065 14.6654C11.6825 14.6654 14.6673 11.6806 14.6673 7.9987C14.6673 4.3168 11.6825 1.33203 8.00065 1.33203C4.31875 1.33203 1.33398 4.3168 1.33398 7.9987C1.33398 11.6806 4.31875 14.6654 8.00065 14.6654Z"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_5373_7723">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p v-if="!emailError">Invoice is sent to this provided email</p>
            <p v-if="emailError" style="color: rgb(255, 59, 45)">
              {{ emailError }}
            </p>
          </div>
        </form>
      </template>
    </userInfo>
    <PrimaryBtn
      class="bottom"
      buttonText="Continue to pay"
      @click="submitForm"
    />
  </div>
</template>
    
  <script>
export default {
  props: ["data"],
  data() {
    return {
      email: "",
      emailError: null,
      isTimeandDateNeeded: false
    };
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (!this.email.match(emailRegex)) {
        this.emailError = "Invalid email address";
      } else {
        this.emailError = null;
      }
    },
    step1() {
      this.$emit("step1");
    },
    submitForm() {
      this.validateEmail();
      if (this.email !== "" && !this.emailError) {
        this.$emit("customEvent");
        this.$set(this.data, "email", this.email); // Add the number to the object
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Optional: Add smooth scrolling effect
        });
      }
    },
  },
};
</script>
  
    
<style scoped>
.bottom {
  margin-bottom: 70px;
}

.delivery__time {
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 12px;
  border-radius: 12px;
  background: var(--warning-w-50, #fbeee6);
  border: none;
}
.delivery__time .delivery {
  color: var(--grey-grey-1-base, #101928);

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 150% */
}
</style>