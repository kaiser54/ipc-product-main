<template>
  <div>
    <div class="center">
      <div class="switch-link">
        <p>
          Sign up as a business<nuxt-link  to="/auth/register/sign-up/business">
            <button class="btn ghost-btn-small">Change</button>
          </nuxt-link>
        </p>
      </div>
      <AuthIndividualForm />
    </div>
  </div>
</template>

<script>
export default {
  layout: "registerAcc",
  // Other component properties and methods
};
</script>

<style scoped></style>