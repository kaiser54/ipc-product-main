<template>
  <div class="userAddress">
    <div class="addressInput">
      <!-- Street Address Input -->
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

      <!-- State Input -->
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

      <!-- LGA Input -->
      <div class="">
        <label for="LGA" class="label">LGA (Local Govt. Area)</label>
        <input
          class="value input"
          name="LGA"
          type="text"
          v-model="lga"
          style="margin-top: 0"
          :disabled="disabled"
        />
      </div>

      <!-- Buttons -->
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
    address: {
      required: false
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
    if (this.address) {
      this.streetAddress = this.address?.streetAddress;
      this.state = this.address?.state;
      this.lga = this.address?.lga;
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