<template>
  <button
    @click="emitFunction"
    class="btn"
    :class="buttonClasses"
    :style="buttonStyles"
    :disabled="disabled"
  >
    <div class="" v-if="showText">{{ buttonText }}</div>
    <slot name="svg"></slot>
  </button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true,
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
    showText: {
      type: Boolean,
      default: true,
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
        primary: this.type === "primary",
        secondary: this.type === "secondary",
        ghost: this.type === "ghost",
        neutral: this.type === "neutral",
        // icon position
        "icon-left": this.icon === "icon-left",
        "icon-right": this.icon === "icon-right",
        "icon-button": this.showText === false,
      };
    },
    buttonStyles() {
      return {
        // Define your CSS styles based on size
      };
    },
  },
  methods: {
    emitFunction() {
      this.$emit("clickButton");
    },
  },
};
</script>

<style scoped>
button {
  border-radius: 100px;
  transition: 0.3s;
}
button.standard {
  display: flex;
  height: 48px;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
}
button.small {
  display: flex;
  height: 32px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
}
button.primary {
  color: var(--white, #fff);
  background: var(--new-primary-p300);
}
button.primary:hover {
  color: var(--white, #fff);
  background-color: var(--new-primary-p500);
}
button.primary:focus,
button.primary:active {
  background-color: var(--new-primary-p500);
}
button.primary:disabled {
  background-color: var( --grey-grey4);
}
button.secondary {
  color: var(--primary-p300);
  background-color: transparent;
}
button.secondary:hover {
  background-color: var(--primary-p25);
  color: var(--primary-p300);
}
button.secondary:active,
button.secondary:focus {
  background-color: var(--primary-p50);
  color: var(--primary-p300);
}

button.secondary:disabled {
  color: var(--grey-grey4);
  background-color: transparent;
}
button.ghost {
  color: var(--grey-grey1);
  background-color: transparent;
}
button.ghost:hover {
  color: var(--grey-grey1);
  background-color: var(--grey-grey6);
}
button.ghost:active,
button.ghost:focus {
  color: var(--grey-grey1);
  background-color: var(--grey-grey5);
}

button.ghost:disabled {
  color: var(--grey-grey4);
  background-color: white;
  border: 1px solid var(--grey-grey6);
}

button.neutral {
  color: var(--grey-grey1);
  border: 1px solid var(--grey-grey5);
  background: var(--white);
  /* Neutral Button shadow */
  /* box-shadow: 0px 1px 3px 0px rgba(47, 43, 67, 0.1),
    0px 2px 0px 0px rgba(234, 234, 234, 0.25) inset; */
  box-shadow: 0px 1px 2px 0px rgba(47, 43, 67, 0.10);
}

button.neutral:hover {
  background-color: var(--grey-grey6);
}

button.neutral:active,
button.neutral:focus {
  background-color: var(--grey-grey5);
}

button.neutral:disabled {
  color: var(--grey-grey4);
  background-color: var(--white);
  border: 1px solid var(--grey-grey6);
}
button.negative {
  color: var(--white, #fff);
  background: var(--negative-n300);
}
button.negative:hover {
  background-color: var(--negative-n400);
}

button.negative:active,
button.negative:focus {
  background-color: var(--negative-n500);
}

button.negative:disabled {
  background-color: var(--grey-grey4);
}
button.icon-right {
  flex-direction: row;
}
button.icon-left {
  flex-direction: row-reverse;
}
</style>