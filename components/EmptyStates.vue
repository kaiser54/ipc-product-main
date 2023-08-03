<template>
  <div class="nocart">
    <slot name="svg"></slot>

    <slot name="message"></slot>

    <PrimaryBtn :buttonText="buttonText" @click="emitFunc" class="button" />
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: "Go to market",
    },
  },
  methods: {
    emitFunc() {
      this.$emit("leaveCart");
    },
  },
};
</script>

<style scoped>
.nocart {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 32px;
  margin-inline: auto;

  max-width: 404px;
  width: 100%;
  /* Empty states bg */

  background: linear-gradient(180deg, #e6e6f7 -36.88%, #ffffff 56.41%);
  /* Grey/Grey5 */

  border: 1px solid var(--grey-grey5);
  border-radius: 16px;
}

.message {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 8px;
}

h2 {
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height, or 150% */

  text-align: center;
  letter-spacing: -1px;

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.snippet {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  text-align: center;

  /* Grey/Grey3 */

  color: var(--grey-grey3);
}

button {
  width: auto;
}

@media (max-width: 950px) {
  h2 {
    font-size: 20px;
    line-height: 30px;
    /* identical to box height, or 150% */
    letter-spacing: -0.5px;
  }
}
</style>