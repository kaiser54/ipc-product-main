<template>
  <div class="user__details__head__group">
    <div class="user__details__head__address udhs">
      <div class="udh__svg__group">
        <IconsQuestion />
        <p>FAQs</p>
      </div>
      <IconsForward />
    </div>
    <div class="user__details__head__address udhs">
      <div class="udh__svg__group">
        <IconsMail />
        <p>Customer Support</p>
      </div>
    </div>
    <div class="user__details__head__address udhs">
      <div class="udh__svg__group">
        <IconsLock />
        <p>Terms and Privacy</p>
      </div>
      <IconsForward />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.user__details__head__group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 100%;

  /* Grey/Grey6 */

  border: 1px solid #f4f5f8;
  border-radius: 16px;
}

.udhs {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 12px;
  gap: 6px;

  width: 100%;
}

.udh__svg__group {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
}

.udh__svg__group p {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: #303237;
}

.verified__svg {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
}
</style>