<template>
  <div class="addressDetails">
    <div class="addressDetails-head">
      <h3 class="h3-medium">{{ switchedHeader }}</h3>
      <button class="btn neutral-btn-small" @click="openEdit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            d="M2 14.75H14"
            stroke="#303237"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.99992 9.74885L9.66659 3.08218C10.2189 2.5299 11.1143 2.5299 11.6666 3.08218C12.2189 3.63447 12.2189 4.5299 11.6666 5.08218L4.99992 11.7489L2.33325 12.4155L2.99992 9.74885Z"
            stroke="#303237"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Edit</p>
      </button>
    </div>
    <userAddress
      :disabled="disabled"
      :data="user"
      v-if="user"
      :isEditOpen="isEditOpen"
      @closeEdit="closeEdit"
      @saveEdit="saveEdit"
    />

    <!-- Add a ref to a dummy element as the scroll target -->
    <div ref="scrollTarget" style="height: 1px; opacity: 0"></div>
  </div>
</template>

<script>
import { DEV_URL } from "@/plugins/api";
import axios from "axios";
export default {
  props: {
    switchedHeader: {
      type: String,
      default: false,
    },
    user: {
      required: true,
    },
  },
  data() {
    return {
      disabled: true,
      isEditOpen: false,
    };
  },
  methods: {
    openEdit() {
      this.disabled = false;
      this.isEditOpen = true;
      this.$nextTick(() => {
        const scrollTarget = this.$refs.scrollTarget;
        if (scrollTarget) {
          scrollTarget.scrollIntoView({ behavior: "smooth" });
        }
      });
    },
    closeEdit() {
      this.disabled = true;
      this.isEditOpen = false;
      this.$nextTick(() => {
        const scrollTarget = this.$refs.scrollTarget;
        if (scrollTarget) {
          scrollTarget.scrollIntoView({ behavior: "smooth" });
        }
      });
    },
    saveEdit(address) {
      this.$emit("saveEdit", address);
      this.disabled = true;
      this.isEditOpen = false;
    },
  },
};
</script>

<style scoped>
.addressDetails {
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 32px;
  width: 100%;
}

.addressDetails-head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 32px;
}
h3.h3-medium {
  color: var(--grey-grey1);
}
.change-btn {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  margin-left: auto;

  /* max-width: 273px; */
  /* width: 100%; */
}

.change-btn .primary-btn {
  height: 48px;
}
.change-btn .btn {
  width: auto;
}

button.btn.neutral-btn-small {
  width: auto;
}
</style>