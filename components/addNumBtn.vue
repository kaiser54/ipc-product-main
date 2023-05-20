<template>
  <button class="add-num-btn" @click="handleClick">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M4.16663 10.0013H15.8333M9.99996 4.16797V15.8346V4.16797Z"
        stroke="#0009B3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <p>Add new phone number</p>
  </button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.add-num-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;

  border-radius: 100px;
  /* margin-top: 16px; */
}
.add-num-btn p {
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}
</style>
