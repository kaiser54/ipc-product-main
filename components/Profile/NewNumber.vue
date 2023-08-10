<template>
  <div class="addNumberFunc animate__animated animate__slideInUp">
    <!-- Header -->

    <header>
      <div class="frame-bg">
        <div class="frame-1"></div>
        <div class="frame-2">
          <svg
            @click="$emit('closeDetails')"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 19L19 5M5 5L19 19L5 5Z"
              stroke="#565C69"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>{{ header }}</p>
        </div>
      </div>
    </header>

    <!-- ^^^^^^^^^^^^^^^^^^^ -->

    <div class="frame-content">
      <div class="frame-content-header">
        <h3 class="h3-heading">Enter phone number</h3>
      </div>
      <slot name="details" />

      <div class="btn-group">
        <button class="btn primary-btn" @click="$emit('detailsButton')">
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>
  
  <script>
import "animate.css";
export default {
  props: {
    header: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
  
  <style scoped>
.animate__animated.animate__slideInUp {
  --animate-duration: 0.5s;
}
.addNumberFunc {
  background: var(--white);
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  overflow: hidden;
  z-index: 3;
}

.addNumberFunc header {
  position: absolute;
  width: 100%;
  height: 92px;
  left: 0px;
  top: 0px;
  background: var(--primary-p500);
}

.frame-bg {
  display: flex;
  position: absolute;
  width: 100%;
  height: 68px;
  left: 0px;
  top: 24px;
  flex-direction: column;
  align-items: center;
}
.frame-1 {
  box-sizing: border-box;

  position: absolute;
  width: 95%;
  height: 68px;
  top: 0px;

  /* Grey/Grey5 */

  background: var(--grey-grey5);
  /* Grey/Grey5 */

  border-bottom: 0.934481px solid var(--grey-grey5);
  border-radius: 16px 16px 0px 0px;
}

.frame-2 {
  align-items: center;
  position: absolute;
  width: 100%;
  height: 56px;
  left: 0px;
  top: 12.25px;
  background: var(--white);
  border-radius: 16px 16px 0px 0px;
  display: flex;
  justify-content: center;
}
.frame-2 svg {
  position: absolute;
  width: 24px;
  height: 24px;
  right: 17px;
  top: 15.75px;
}
.frame-2 p {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}
.frame-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  margin-inline: 16px;
  margin-top: 116px;
}
.frame-content-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
}
.frame-content-header h3 {
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height, or 150% */

  letter-spacing: -0.5px;

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}
.frame-content-header p.snippet {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Grey/Grey2 */

  color: var(--grey-gre2);
}

.btn-group,
.btn-group2 {
  width: 100%;
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
}
</style>
  