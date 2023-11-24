<template>
  <div class="counter-btn">
    <button @click="decrement" class="circle btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M3.33325 8H12.6666"
          stroke="#0009B3"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <input
      class="counter input"
      v-model="newCounterValue"
      v-if="!loader"
      @input="handleInputChange"
      :class="{ 'input-error': isError }"
    />
    <span class="loader" v-if="loader"></span>
    <button @click="increment" class="circle btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M3.33325 7.99967H12.6666M7.99992 3.33301V12.6663V3.33301Z"
          stroke="#0009B3"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    counterValue: {
      type: Number,
      default: 1,
    },
    loader: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      newCounterValue: this.counterValue,
    };
  },
  watch: {
    newCounterValue(newValue) {
      this.scheduleUpdate(newValue);
    },
  },
  computed: {
    isError() {
      return this.newCounterValue === 0 || this.newCounterValue === "0";
    },
  },
  methods: {
    increment() {
      this.newCounterValue++;
    },
    decrement() {
      this.newCounterValue = Math.max(1, this.newCounterValue - 1);
    },
    handleInputChange() {
      this.scheduleUpdate();
    },
    scheduleUpdate() {
      // Cancel any existing scheduled update
      if (this.updateTimeout) {
        clearTimeout(this.updateTimeout);
      }
      // Schedule a new update after 1000ms (1 second)
      this.updateTimeout = setTimeout(() => {
        this.$emit("postQuantity", this.newCounterValue);
        this.updateTimeout = null;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.counter-btn {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 100%;
}

.counter-btn .circle {
  position: relative;
  /* Primary/P75 */

  border: none;
  background: var(--grey-grey6);
  width: 40px;
  height: 40px;
  top: 0;
  left: 0;
}
.counter-btn:hover .circle:hover {
  background: var(--grey-grey6);
}
.counter-btn:focus .circle:focus {
  background: var(--grey-grey5);
}
.counter-btn:active .circle:active {
  background: var(--grey-grey5);
}

.circle {
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px;
  gap: 10px;

  width: 32px;
  height: 32px;

  /* Grey/Grey4 */

  border: 1px solid var(--new-primary-p300);
  border-radius: 100px;
  z-index: 1;
}

.circle svg path {
  stroke: #565c69;
}
.counter {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  max-width: 85px;
  width: 100%;
  height: 100%;
  color: var(--grey-grey1);
  outline: none;
  border: none;
  text-align: center;
  padding: 0;
}
</style>
