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
          <span class="bold">{{ data.email }}</span> Kindly check
          to see your order’s full details.
        </div>
      </div>
      <div class="btn__group">
        <nuxt-link to="/dashboard/market">
          <button class="btn secondary-btn">Go to market</button>
        </nuxt-link>
        <nuxt-link to="/dashboard/track_orders">
          <button class="btn primary-btn">Track order</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    }
  }
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

  max-width: 446px;
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