<template>
  <div class="payment">
    <h3 class="h3-medium header-text">Payment</h3>
    <div class="content-select">
      <div class="" v-for="(item, index) in listSelect" :key="index" style="width: 100%">
        <div
          class="list-select"
          :class="{
            clicked: selectedItem === item.value,
          }"
          v-if="item.show"
          @click="selectItem(item)"
        >
          <label>
            <input type="radio" :value="item.value" v-model="selectedItem" hidden />
            <svg
              :class="{ selected: selectedItem === item.value }"
              viewBox="0 0 25 25"
              width="25"
              height="25"
            >
              <rect
                x="1"
                y="1"
                width="22"
                height="22"
                rx="11"
                fill="white"
                stroke="#BDC0CE"
                stroke-width="2"
              />
              <circle
                v-if="selectedItem === item.value"
                cx="11.9992"
                cy="11.9992"
                r="7.8"
                fill="#0009B3"
              />
            </svg>
          </label>
          <div class="list-select-header">
            <div class="img__title">
              <p class="title">{{ item.title }}</p>
              <!-- <div class="img" v-if="item.images.length > 0">
              <img
                :src="`/${image}`"
                alt=""
                v-for="(image, index) in item.images"
                :key="index"
              />
            </div> -->
            </div>
            <!-- <p class="snippet">{{ item.snippet }}</p> -->
          </div>
        </div>
      </div>
      <div
        class="disabled no-hover"
        style="width: 100%; display: none"
        v-if="!canBuyOnCredit"
      >
        <div class="list-select">
          <label>
            <svg viewBox="0 0 25 25" width="25" height="25">
              <rect
                x="1"
                y="1"
                width="22"
                height="22"
                rx="11"
                fill="white"
                stroke="#BDC0CE"
                stroke-width="2"
              />
              <circle class="circle" cx="11.9992" cy="11.9992" r="7.8" fill="" />
            </svg>
          </label>
          <div class="list-select-header">
            <div class="img__title">
              <p class="title">Purchase on credit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <userInfo :data="data" v-if="data" :checkout="true" :validCoupon="validCoupon" :isTimeandDateNeeded="isTimeandDateNeeded">
      <template v-slot:button>
        <button class="btn ghost-btn">Change delivery address</button>
      </template>
      <template v-slot:email>
        <form action="">
          <label for="coupon">Coupon free delivery</label>
          <div style="display: flex; align-items: center; gap: 8px;">
            <input
              :class="{ 'input-error': couponError }"
              type="text"
              class="input"
              placeholder="Enter coupon"
              v-model="coupon"
            />
            <div :class="loaderClass"></div>
          </div>
          <div class="caution" :class="{ error: couponError, caution: !couponError }">
            <svg
              v-if="couponError"
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
              v-if="!couponError"
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
            <p v-if="!couponError">
              This coupon code will give you access to free delivery
            </p>
            <p v-if="couponError" style="color: rgb(255, 59, 45)">
              Invalid coupon, please enter a valid coupon
            </p>
          </div>
        </form>
      </template>
      <template v-slot:delivery>
        <div class="delivery__time">
          <div class="delivery">
            Your items will be delivered to you in 24hours. If there will be any delay in
            some order items, we’ll contact you immediately
          </div>
          <!-- <div class="time">24hours</div> -->
        </div>
      </template>
    </userInfo>
    <PrimaryBtn
      class="bottom"
      :buttonText="selectedItem === 'CREDIT' ? 'Purchase on credit' : 'Make payment'"
      @click="submitForm"
      :disabled="!selectedItem && !couponLoading"
    />
  </div>
</template>

<script>
export default {
  props: {
    data: {},
    canBuyOnCredit: {
      type: Boolean,
      default: false,
    },
    couponError: {
      type: Boolean,
      default: false,
    },
    validCoupon: {
      type: Boolean,
      default: false,
    },
    couponLoading: {
      type: Boolean,
      default: false,
    },
    loaderClass: {
      type: String,
    },
  },
  data() {
    return {
      selectedItem: "",
      isTimeandDateNeeded: false,
      listSelect: [
        {
          title: "Pay with Card / USSD / Transfer",
          value: "CARD",
          route: "/business",
          show: true,
        },
        {
          title: "Purchase on credit",
          value: "CREDIT",
          route: "/individual",
          show: this.canBuyOnCredit,
        },
      ],
      coupon: "",
      typingTimer: null,
      doneTypingInterval: 2000,
    };
  },
  watch: {
    coupon(newVal, oldVal) {
      // Clear the previous timer
      clearTimeout(this.typingTimer);

      // Start a new timer to validate after the specified interval
      this.typingTimer = setTimeout(() => {
        this.handleCoupon(newVal);
      }, this.doneTypingInterval);
    },
  },
  methods: {
    handleCoupon(newVal) {
      this.$emit("handleCoupon", newVal);
    },
    selectItem(item) {
      this.selectedItem = item.value;
      this.data.paymentMethod = item.value;
    },
    submitForm() {
      this.$emit("lastStep", this.data);
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Optional: Add smooth scrolling effect
      });
    },
  },
};
</script>

<style scoped>
.payment {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
}

.content-select {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;
}
.content-select .disabled {
  cursor: not-allowed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;
}

.disabled .list-select .title {
  color: var(--grey-grey4);
}

.list-select {
  cursor: default;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 16px;
  max-width: 491px;
  width: 100%;
  /* min-height: 127px; */

  /* White */

  background: #ffffff;
  /* Grey/Grey4 */

  border: 1px solid var(--grey-grey4);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.list-select label {
  margin-bottom: 0 !important;
}
button:disabled {
  cursor: not-allowed;
}

.clicked,
.list-select:hover {
  border-radius: 12px;
  border: 1px solid var(--primary-p-300-base, #19b820);
  background: var(--primary-p-25, #f1fbf2);
}

.clicked svg rect {
  stroke: #19b820 !important;
}

.list-select-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  /* max-width: 419px; */
}

.img__title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
}

p.title {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.img {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 14px;
}

.img img {
  height: 20px;
  width: auto;
}

p.snippet {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* or 150% */

  /* Grey/Grey2 */
  color: var(--grey-grey2);
}

svg circle {
  stroke: var(--grey-grey4);
  stroke-width: 2px;
  fill: none;
}

/* Checked styling */
.selected circle {
  stroke: none;
  fill: var(--primary-p300);
}
.bottom {
  margin-bottom: 70px;
}
.delivery__time {
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 12px;
  border-radius: 12px;
  background: #fbeee6;
  background: var(--warning-w-50, #fbeee6);
  border: none;
}
@media (max-width: 950px) {
  .list-select {
    max-width: 100%;
    width: 100%;
  }
}
@media (max-width: 450px) {
  .list-select-header {
    gap: 16px;
  }
  .img__title {
    flex-direction: column;
    gap: 16px;
  }
}
@media (max-width: 300px) {
  .img {
    /* flex-direction: column; */
    flex-wrap: wrap;
  }
}
.no-hover .list-select:hover {
  cursor: not-allowed;
  background: #ffffff;
  /* Grey/Grey4 */

  border: 1px solid var(--grey-grey4);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.circle {
  cursor: not-allowed;
  stroke: none;
}

/* HTML: <div class="loader"></div> */
.coupon-loader {
  width: 16px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #000000 94%, #0000) top/3px 3px no-repeat,
    conic-gradient(#0000 30%, #000000);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 3px), #000 0);
  animation: l13 1s infinite linear;
}

.check {
  margin-bottom: 4px;
  display: inline-block;
  transform: rotate(45deg);
  height: 12px;
  width: 6px;
  border-bottom: 2px solid #00ff1e;
  border-right: 2px solid #00ff1e;
}

@keyframes l13 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
