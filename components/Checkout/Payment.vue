<template>
  <div class="payment">
    <h3 class="h3-medium header-text">Payment</h3>
    <div class="content-select">
      <div
        class="list-select"
        :class="{ clicked: selectedItem === item.value }"
        v-for="(item, index) in listSelect"
        :key="index"
        @click="selectItem(item)"
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
    <userInfo :data="data" v-if="data" :checkout="true">
      <template v-slot:button>
        <button class="btn ghost-btn">Change delivery address</button>
      </template>
      <template v-slot:delivery>
        <div class="delivery__time">
          <div class="delivery">
            Your items will be delivered to you in 24hours. If there will be any
            delay in some order items, we’ll contact you immediately
          </div>
          <!-- <div class="time">24hours</div> -->
        </div>
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
  props: ["data"],
  data() {
    return {
      selectedItem: "",
      listSelect: [
        {
          title: "Pay with Card / USSD / Transfer",
          value: "CARD",
          route: "/business",
        },
        {
          title: "Purchase on credit",
          value: "CREDIT",
          route: "/individual",
        },
      ],
    };
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item.value;
      this.data.paymentMethod = item.value
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

.list-select {
  cursor: default;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 16px;
  max-width: 491px;
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
</style>