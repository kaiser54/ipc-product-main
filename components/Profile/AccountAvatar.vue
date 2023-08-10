<template>
  <div class="user_name_mail">
    <div class="user_name_mail_header">
      <div class="user_name_mail_header_img avatar">
        <img src="~/assets/images/avatar1.png" alt="" />
      </div>
      <div class="name-mail">
        <h3 class=".h3-small-regular">Chicken Republic</h3>
        <p>adminchickenrepublic@gmail.com</p>
      </div>
      <DynamicTags tagText="Individual account" size="small" type="info" />
      <DynamicTags tagText="Business account" size="small" type="positive" />
    </div>
  </div>
</template>
  
  <script>
export default {};
</script>
  
  <style scoped>
.user_name_mail {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 32px;
  /* width: 100%; */

  margin: 35px 16px;
}
.user_name_mail_header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0px;
  gap: 16px;
}
.avatar {
  width: 80px;
  height: 80px;
}
.name-mail {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 2px;
}
.name-mail h3 {
  /* Grey/Grey1 */

  color: var(--grey-grey1);
}
.name-mail p {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  text-align: center;

  /* Grey/Grey3 */

  color: var(--grey-grey3);
}
</style>
  