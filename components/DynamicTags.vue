<template>
  <button
    class="btn"
    :class="buttonClasses"
    :style="buttonStyles"
    :disabled="disabled"
  >
    <div class="">{{ tagText }}</div>
    <slot name="text"></slot>
  </button>
</template>


<script>
export default {
  props: {
    tagText: {
      type: String,
    },
    size: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClasses() {
      return {
        // Button size
        small: this.size === "small",
        standard: this.size === "standard",
        // Button type
        info: this.type === "info",
        default: this.type === "default",
        warning: this.type === "warning",
        positive: this.type === "positive",
        negative: this.type === "negative",
        // icon position
        "icon-left": this.icon === "icon-left",
        "icon-right": this.icon === "icon-right",
      };
    },
    buttonStyles() {
      return {
        // Define your CSS styles based on size
      };
    },
  },
};
</script>

<style scoped>
button {
  border-radius: 100px;
  transition: 0.3s;
  width: auto;
}
button.small {
  display: inline-flex;
  height: 24px;
  padding: 4px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  /* Body Micro/Body Micro Regular */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
}
button.standard {
  display: inline-flex;
  height: 32px;
  padding: 4px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  /* Body Small/Body Small Regular */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 150% */
}

button.default {
  color: var(--grey-grey1, #303237);
  background: var(--grey-grey5, #e5e7ef);
}
button.warning {
  color:  #b38820;
  background: #fff9ea;
}
button.positive {
  background: var(--positive-p50, #E6F8EF);
  color: var(--positive-p400, #057E45);
}
button.info {
  color: var(--primary-p400, #00067d);
  border: 1px solid var(--primary-p75, #969ae0);
}
button.negative {
background: var(--negative-n50);
color: var(--negative-n400);
}
button.icon-right {
  flex-direction: row;
}
button.icon-left {
  flex-direction: row-reverse;
}
</style>