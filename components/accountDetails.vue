<template>
  <div class="accountDetails">
    <h3 class="h3-medium">Account details</h3>
    <div class="avatar">
      <img src="../assets/images/avatar1.png" alt="" />
    </div>
    <userName />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.accountDetails {
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 32px;
}
.accountDetails h3 {
  color: var(--grey-grey1);
}
.avatar {
  width: 104px;
  height: 104px;

  background: var(--white);
  border-radius: 50%;
  overflow: hidden;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
