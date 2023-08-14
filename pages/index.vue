<template>
  <div></div>
</template>
  
  <script>
export default {
  created() {
    // Redirect to another page when the component is created
    this.$router.push("/auth/login");
  },
};
</script>
  