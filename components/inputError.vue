<template>
    <div class="error">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <g clip-path="url(#clip0_2260_9969)">
          <path
            d="M8 5.33334V8"
            stroke="#FF3B2D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 10.6797V10.6667"
            stroke="#FF3B2D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33334 8.00001 1.33334C4.31811 1.33334 1.33334 4.3181 1.33334 8C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667Z"
            stroke="#FF3B2D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2260_9969">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <p>{{ input-error }}</p>
    </div>
</template>

<script>
export default {
  props: {
    inputError: {
      type: String,
      required: true,
    },
  },
};
</script>
