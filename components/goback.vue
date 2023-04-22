<template>
    <button class="btn neutral-btn-small max-w" @click="goBack">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M10.6666 2.66699L5.33325 8.00033L10.6666 13.3337"
            stroke="#303237"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Go back</p>
      </button>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>

.max-w {
  width: fit-content;
}
button p {
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */
  /* Grey/Grey1 */
  color: var(--grey-grey1);
}
</style>