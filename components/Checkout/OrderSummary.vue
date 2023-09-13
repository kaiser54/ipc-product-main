<template>
  <div class="payment">
    <h3 class="h3-medium header-text">Order summary</h3>
    <userInfo :data="data" v-if="data" :checkout="true">
      <template v-slot:button>
        <button class="btn ghost-btn" @click="step1">Change delivery address</button>
      </template>
      <template v-slot:delivery>
        <div class="delivery__time">
          <div class="delivery">Estimated delivery time</div>
          <div class="time">24hours</div>
        </div>
      </template>
      <template v-slot:email>
        <form action="">
          <label for="email">Email address</label>
          <input
            type="text"
            class="input"
            placeholder="Enter your email address"
            v-model="email"
          />
          <div class="caution">
            <svg
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
            <p>Provide us with an email for your invoice</p>
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
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      email: ''
    };
  },
  methods: {
    step1() {
      this.$emit("step1")
    },
    submitForm() {
      this.$emit("customEvent");
      this.$set(this.data, 'email', this.email); // Add the number to the object
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Optional: Add smooth scrolling effect
      });
      console.log(this.data)
    },
  },
  mounted() {
    console.log(this.data);
  },
};
</script>
  
    
<style scoped>
.bottom {
  margin-bottom: 70px;
}
</style>