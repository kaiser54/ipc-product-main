<template>
  <div>
    <div class="__OMW">
      <div class="emoji__bg">
        <img src="/emoji.png" alt="" />
      </div>
      <div class="_omw__msg">
        <div class="title">Your order is on its way!</div>
        <div class="snippet">
          We have sent your order invoice to
          <span class="bold">{{ data?.email || "" }}</span> Kindly check to see
          your order’s full details.
        </div>
      </div>
      <div class="btn__group">
        <button class="btn primary-btn" @click="$emit('showInvoice')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M15.0581 12.0312L9.99974 17.0896L4.94141 12.0312"
              stroke="#fff"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 2.92578V16.9508"
              stroke="#fff"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
          >Download Invoice
        </button>
        <nuxt-link to="/dashboard/track_orders">
          <button class="btn secondary-btn">Track orders</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style scoped>
.__OMW {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0px;
  gap: 32px;

  max-width: 476px;
  width: 100%;
  margin-inline: auto;
}

.emoji__bg {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 32px; */
  gap: 10px;

  width: 136px;
  height: 136px;

  /* Accent/A50 */

  background: var(--accent-a50);
  border-radius: 100px;
}

._omw__msg {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;
}
._omw__msg .title {
  font-weight: 500;
  font-size: 34px;
  line-height: 44px;
  letter-spacing: -1px;

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}
._omw__msg .snippet {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  text-align: center;

  /* Grey/Grey3 */

  color: var(--grey-grey3);
}
._omw__msg .snippet .bold {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  text-align: center;

  /* Grey/Grey1 */
  color: var(--grey-grey1);
}
.btn__group {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 100%;
}
a {
  width: 100%;
}
@media (max-width: 950px) {
  .__OMW {
    padding: 16px;
  }
  ._omw__msg .title {
    font-size: 24px;
    line-height: 36px;
  }
  .btn__group {
    flex-direction: column;
  }
  .emoji__bg {
    width: 80px;
    height: 80px;
  }
  .emoji__bg img {
    width: 42.35px;
  }
}
</style>