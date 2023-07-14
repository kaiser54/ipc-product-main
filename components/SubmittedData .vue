<template>
  <div>
    <h3>Submitted Data:</h3>
    <p>Name: {{ data.name }} {{ data.email }}</p>
    <p>Email: {{ data.email }}</p>
  </div>
</template>
  
  <script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
  