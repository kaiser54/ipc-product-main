<template>
  <div>
    <div class="center">
      <div class="switch-link">
        <p>
          Sign up as an individual
          <nuxt-link
            to=""
          >
          <!-- <nuxt-link
            to="/auth/register/sign-up/individual"
          > -->
            <button class="btn ghost-btn-small">Change</button>
          </nuxt-link>
        </p>
      </div>
      <AuthBusinessForm />
    </div>
  </div>
</template>

<script>
export default {
  layout: "registerAcc",
  // Other component properties and methods
};
</script>