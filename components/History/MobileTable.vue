<template>
  <div class="mobileHistory-container">
    <div
      class="mobileHistory"
      v-for="item in tableData"
      :key="item.id"
      @click="toHistoryDetails(item.name)"
    >
      <div class="img-name-order">
        <div class="img">
          <img src="@/assets/images/p1.png" alt="" />
        </div>
        <div class="name-order">
          <div class="name">{{ item.name }}</div>
          <div class="order">Order id: {{ item.orderId }}</div>
        </div>
      </div>
      <div class="price">#{{ item.price }}</div>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    tableHeaders: {
      type: Array,
      required: true,
    },
    tableData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    toHistoryDetails(value) {
      // const baseURL = "/dashboard/track orders/";
      // const baseURL = `/dashboard/track orders/${value}`;
      // this.$router.push(baseURL + value)
      // this.$router.push(`/dashboard/track orders/${value}`)
      this.$router.push(`/dashboard/track orders/lol`);
    },
  },
};
</script>
  
  <style scoped>
.mobileHistory-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
}

.mobileHistory {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
}

.img-name-order {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 5px;
}

.img {
  width: 32px;
  height: 36px;
}

.img img {
  height: auto;
  width: 100%;
  object-fit: contain;
}

.name-order {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
}

.name {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.order {
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */

  /* Grey/Grey3 */

  color: var(--grey-grey3);
}

.price {
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}
</style>