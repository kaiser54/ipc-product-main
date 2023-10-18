<template>
  <div class="selected-ctn">
    <div class="selected-icon">
      <svg
        width="96"
        height="128"
        viewBox="0 0 96 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48 24C25.96 24 8 41.96 8 64C8 86.04 25.96 104 48 104C70.04 104 88 86.04 88 64C88 41.96 70.04 24 48 24ZM67.12 54.8L44.44 77.48C43.88 78.04 43.12 78.36 42.32 78.36C41.52 78.36 40.76 78.04 40.2 77.48L28.88 66.16C27.72 65 27.72 63.08 28.88 61.92C30.04 60.76 31.96 60.76 33.12 61.92L42.32 71.12L62.88 50.56C64.04 49.4 65.96 49.4 67.12 50.56C68.28 51.72 68.28 53.6 67.12 54.8Z"
          fill="#19B820"
        />
      </svg>
    </div>
    <div class="selected-info">
      <div class="selected-title">
        <h6>{{ title }}</h6>
        <slot></slot>
      </div>
      <div class="selected-snippet">
        <p>{{ snippet }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
    },
    snippet: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      indexOfCardWithComponent: 1,
    };
  },
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
.selected-ctn {
  width: 100%;
  max-width: 410px;
  display: flex;
  gap: 10px;
  font-family: var(--primary-font);
}
.selected-icon svg {
  width: 32px;
  height: 32px;
}
.selected-title h6 {
  color: var(--grey-grey1, #303237);

  /* H3/Heading 3 Small Medium */
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 150% */
  letter-spacing: -0.5px;
}
.selected-snippet {
  margin-top: 3px;
  text-align: left;
}
.selected-snippet p {
  color: var(--grey-grey2, #565c69);

  /* Body Large/Body Large Regular */
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}
.selected-title {
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>