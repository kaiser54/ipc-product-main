<template>
  <div class="userName">
    <div class="nameInput" v-for="(field, index) in userName" :key="index">
      <label :for= field.label class="label">{{ field.label }}</label>
      <input class="value input" :name = field.label type="text" v-model="field.value" style="margin-top: 0;" disabled>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: [
        {
          label: "First name",
          value: "Lanre",
        },
        {
          label: "Last name",
          value: "Bello",
        },
      ],
    };
  },
};
</script>

<style scoped>
.userName {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  /* max-width: 575px; */
  width: 100%;
}
.nameInput {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 100%;
}
</style>
