<template>
  <div class="mobileUserProfile">
    <userHeader @clicked="toggleuserHeaderComponent"/>
    <userHeaderComponent v-if="userHeaderComponent" @redirectToprofilepage="redirectToprofilepage"/>
    <div class="user__details">
      <div class="user__details__head">
        <p>ACCOUNT</p>
      </div>
      <userdetailsMobileview @openMail="$emit('openMail')" @changePassword="$emit('changePassword')"/> 
    </div>
    <div class="user__details">
      <div class="user__details__head">
        <p>ABOUT IPC</p>
      </div>
      <FAQmobileview /> 
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      userHeaderComponent: false,
    };
  },
  methods: {
    toggleuserHeaderComponent() {
      this.userHeaderComponent = true;
    },
    redirectToprofilepage() {
      this.userHeaderComponent = false;
    }
  },
};
</script>


<style scoped>
.mobileUserProfile {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  margin: 0 16px;
}
.user__details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 100%;

  background: var(--white);
}

.user__details__head p {
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */

  /* Grey/Grey3 */

  color: var(--grey-grey3);
}
</style>
