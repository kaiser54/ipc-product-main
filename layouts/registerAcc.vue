<template>
  <div>
    <section class="registerAcc">
      <div class="f-d-r">
        <div class="login__ui">
          <div class="branding__beta">
            <img src="../assets/images/wrong-2.png" alt="" />
            <div class="beta">BETA</div>
          </div>
          <div class="__ui"></div>
        </div>
      </div>
      <div class="page-route-wrap">
        <nuxt class="register-slot" />
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
.page-route-wrap {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.login__ui {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 56px;
  margin-top: 115px;
  margin-left: 14%;
}
.branding__beta {
  display: flex;
  align-items: center;
  gap: 4px;
}
.beta {
  display: flex;
  height: 16px;
  width: fit-content;
  padding: 4px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: var(--white, #fff);

  /* Caption/Caption Medium */
  font-size: 10px;
  font-weight: 500;
  line-height: 15px; /* 150% */

  border-radius: 100px;
  background: var(--positive-p-300, #20af0b);
}
.register-slot {
  max-width: 491px;
  width: 100%;
}
@media (max-width: 1200px) {
  .register-slot {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
::-webkit-scrollbar {
  display: none;
}

.registerAcc {
  display: flex;
  flex-direction: row;
}

.f-d-r {
  background: var(--grey-grey6, #f4f5f8);
  max-width: 42%;
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
}
@media (max-width: 1200px) {
  .f-d-r {
    display: none;
  }
}

.center {
  margin: 48px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.switch-link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;

  max-width: 265px;
  margin-inline: auto;
  height: 40px;

  background: var(--grey-grey6);
  border-radius: 8px;
}
.switch-link button {
  background: transparent;
}
.switch-link p {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
