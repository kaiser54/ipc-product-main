<template>
    <div class="nameInput">
      <label for="Phone number" class="label">Phone Number</label>
      <input class="value input" name = "Phone number" type="number" style="margin-top: 0px;color: black;" :value="value" @input="$emit('input', $event.target.value)" :disabled="disabled"> 
    </div>
      <!-- <input class="value input" name="Phone number" type="text" value="08100232610" style="margin-top: 0px;color: black;" readonly> -->
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

.nameInput {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 100%;
}
</style>