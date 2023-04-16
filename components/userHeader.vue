<template>
    <div class="user-header" @click="$emit('clicked')">
      <div class="username-avatar">
        <div class="avatar">
          <img src="../assets/images/avatar1.png" alt="" />
        </div>
        <div class="userTitle">
          <div class="user__name">
            <p>Lanre Bello</p>
          </div>
          <div class="user__mail">
            <p>lanrebelloipc@gmail.com</p>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M6.66675 3.33203L13.3334 9.9987L6.66675 16.6654"
          stroke="#BDC0CE"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.user-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 12px;
  gap: 6px;

  width: 100%;

  /* Grey/Grey6 */

  border: 1px solid var(--grey-grey6);
  border-radius: 16px;
}

.username-avatar {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
}

.avatar {
  width: 40px;
  height: 40px;

  background: var(--white);
  border-radius: 50%;
  overflow: hidden;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.userTitle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 2px;
}

.user__name p {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.user__mail p {
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */

  /* Grey/Grey3 */

  color: var(--grey-grey3);
}

</style>