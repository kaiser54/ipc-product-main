<template>
  <div class="profile-switch-tab">
    <div
      class="table"
      :class="{ active: myTab }"
      @click="() => $emit('toggleTab')"
    >
      {{ text1 }}
    </div>
    <div
      class="table"
      :class="{ active: !myTab }"
      @click="() => $emit('toggleTab2')"
    >
      {{ text2 }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    myTab: {
      type: Boolean,
      default: false,
    },
    text1: {
      type: String,
      default: false,
    },
    text2: {
      type: String,
      default: false,
    },
  },
};
</script>

<style scoped>
.profile-switch-tab {
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  max-width: 780px;
  width: 100%;
  height: 44px;

  margin-left: 24px;

  /* Grey/Grey5 */

  border-bottom: 1px solid var(--grey-grey5);
}
.table {
  cursor: pointer;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  gap: 10px;

  max-width: 152px;
  width: 100%;
  height: 44px;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Grey/Grey3 */

  color: var(--grey-grey3);
}
.table.active {
  color: var(--primary-p300);
  border-bottom: 2px solid var(--primary-p300);
}
</style>
