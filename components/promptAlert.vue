<template>
  <div class="prompt-alert">
    <svg class="alert-warning" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
      <path
        d="M2.20164 18.9695L10.1643 4.50506C10.9021 3.16498 13.0979 3.16498 13.8357 4.50506L21.7984 18.9695C22.4443 20.1428 21.4598 21.5 19.9627 21.5H4.0373C2.54022 21.5 1.55571 20.1428 2.20164 18.9695Z"
        stroke="#FFC22E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 9.5V13.5" stroke="#FFC22E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 17.5195V17.5" stroke="#FFC22E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <div class="prompt-content">
      <div class="prompt-msg">
        <h4>Verify your email address</h4>
        <p>
          We have sent a secured reset link to your email. Click on the link to
          verify your email.
        </p>
      </div>
      <button class="btn neutral-btn-small" @click="$emit('openMail')">
        <p>Resend link</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
          <path d="M5.33398 3.16699L10.6673 8.50033L5.33398 13.8337" stroke="#303237" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.prompt-alert {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 24px;
  /* margin: 16px; */
  gap: 24px;

  width: 100%;
  /* height: 157px; */

  /* Warning/W50 */

  background: var(--warning-w50);
  /* Warning/W100 */

  border: 1px solid var(--warning-w100);
  border-radius: 16px;
}

.prompt-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
}

.prompt-msg {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
}

.prompt-msg h4 {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.prompt-msg p {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey2 */

  color: var(--grey-grey2);
}

button {
  width: auto;
}

button p {
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

@media (max-width: 950px) {
  .prompt-alert {
    padding: 16px;
    gap: 12px;
    /* width: fit-content; */
  }

  .alert-warning {
    max-width: 24px !important;
    width: 100% !important;
  }

  .prompt-content {
    gap: 16px;
  }

  .prompt-msg h4 {
    font-size: 16px;
    line-height: 24px;
  }

  .prompt-msg p {
    font-size: 14px;
    line-height: 21px;
  }
}
</style>
