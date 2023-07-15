<template>
  <div class="payment">
    <h3 class="h3-medium header-text">Payment</h3>
    <div class="content-select">
      <div
        class="list-select"
        :class="{ clicked: selectedItem === item.value }"
        v-for="(item, index) in listSelect"
        :key="index"
        @click="selectItem(item.value)"
      >
        <label>
          <input
            type="radio"
            :value="item.value"
            v-model="selectedItem"
            hidden
          />
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
            <div class="img" v-if="item.images.length > 0">
              <img
                :src="`/${image}`"
                alt=""
                v-for="(image, index) in item.images"
                :key="index"
              />
            </div>
          </div>
          <p class="snippet">{{ item.snippet }}</p>
        </div>
      </div>
    </div>
    <userInfo :data="data" v-if="data">
      <template v-slot:button>
        <button class="btn ghost-btn">Change delivery address</button>
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
      buttonText="Make payment"
      @click="submitForm"
      :disabled="!selectedItem"
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
      selectedItem: "",
      listSelect: [
        {
          title: "Pay with Card / USSD / Transfer",
          snippet:
            "Our secure payment gateway enables you to conveniently pay for your purchases using your credit or debit card.",
          value: "Online payment",
          route: "/business",
          images: ["paystack.png"],
        },
        {
          title: "Pay on delivery",
          snippet:
            "Kindly take note that payment must be made prior to opening your package. Once the seal is broken, returns will only be accepted in the event that the item is damaged, defective, or contains missing parts.",
          value: "Payment on delivery",
          route: "/individual",
          images: [],
        },
      ],
    };
  },
  methods: {
    selectItem(value) {
      this.selectedItem = value;
      console.log(value)
    },
    submitForm() {
      this.$emit("lastStep");
      this.$set(this.data, 'paymentMethod', this.selectedItem); // Add the number to the object
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Optional: Add smooth scrolling effect
      });
      console.log(this.data)
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
}

.list-select {
  cursor: default;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
  max-width: 491px;
  min-height: 127px;

  /* White */

  background: #ffffff;
  /* Grey/Grey4 */

  border: 1px solid var(--grey-grey4);
  border-radius: 16px;
}

button:disabled {
  cursor: not-allowed;
}

.clicked,
.list-select:hover {
  background: var(--accent-a50);
  border: 1px solid var(--accent-a75);
}

.clicked svg rect {
  stroke: #0009b3 !important;
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
</style>