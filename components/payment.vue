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
            <div class="img">
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
    <userInfo />
    <div class="delivery__time">
      <div class="delivery">Estimated delivery time</div>
      <div class="time">24hours</div>
    </div>
    <userInfo />
    <PrimaryBtn class="bottom" buttonText="Make payment" @click="submitForm" />
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      selectedItem: "",
      listSelect: [
        {
          title: "Pay with card",
          snippet:
            "Our secure payment gateway enables you to conveniently pay for your purchases using your credit or debit card.",
          value: "business",
          route: "/business",
          images: ["visa.png", "mclogo.png", "verve.png"],
        },
        {
          title: "Pay on delivery",
          snippet:
            "Kindly take note that payment must be made prior to opening your package. Once the seal is broken, returns will only be accepted in the event that the item is damaged, defective, or contains missing parts.",
          value: "individual",
          route: "/individual",
          images: [],
        },
      ],
    };
  },
  methods: {
    selectItem(value) {
      this.selectedItem = value;
    },
    submitForm() {
      this.$emit("lastStep");
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
  max-width: 419px;
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
</style>