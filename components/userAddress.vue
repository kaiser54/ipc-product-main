<template>
  <div class="userAddress">
    <div class="addressInput">
      <div class="">
        <label for="streetAddress" class="label">Street Address</label>
        <input
          class="value input"
          name="streetAddress"
          type="text"
          v-model="streetAddress"
          style="margin-top: 0"
          :disabled="disabled"
        />
      </div>
      <div class="">
        <label for="State" class="label">State</label>
        <input
          class="value input"
          name="State"
          type="text"
          v-model="state"
          style="margin-top: 0"
          :disabled="disabled"
        />
      </div>
      <div class="">
        <label for="LGA" class="label">LGA (Local Govt. Area) </label>
        <input
          class="value input"
          name="LGA"
          type="text"
          v-model="lga"
          style="margin-top: 0"
          :disabled="disabled"
        />
      </div>

      <div class="change-btn" v-if="isEditOpen">
        <button class="btn neutral-btn" @click="closeEdit">Cancel</button>
        <button class="btn primary-btn" @click="saveEdit">Save changes</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isEditOpen: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: true,
    },
    data: {
      type: Object,
    },
  },
  data() {
    return {
      streetAddress: "",
      state: "",
      lga: "",
    };
  },
  created() {
    if (this.data) {
      this.streetAddress = this.data?.address?.streetAddress;
      this.state = this.data?.address?.state;
      this.lga = this.data?.address?.lga;
    }
  },
  methods: {
    closeEdit() {
      this.$emit("closeEdit");
    },
    saveEdit() {
      const address = {
        streetAddress: this.streetAddress,
        state: this.state,
        lga: this.lga,
      };
      this.$emit("saveEdit", address);
    },
  },
};
</script>

<style scoped>
.userAddress {
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 32px;
}

.addressInput {
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 16px;
}
.change-btn {
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  margin-left: auto;

  /* max-width: 273px; */
  /* width: 100%; */
}
button {
  width: auto;
}
</style>