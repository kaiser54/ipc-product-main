<template>
  <div>
    <div class="logout-modal">
      <div class="WH-auto animate__animated animate__zoomIn">
        <div class="modal">
          <div class="modal-msg">
            <div class="head-x">
              <h3 class="h3-medium">Log out of IPC?</h3>
              <svg
              @click="$emit('closeLogout')"
                class="circle"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3.33301 12.6663L12.6663 3.33301M3.33301 3.33301L12.6663 12.6663L3.33301 3.33301Z"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p class="snippet">
              It is so sad to see you want to log out at this time. You can always log
              back in at any time.
            </p>
          </div>
          <div class="button-grp">
            <button @click="$emit('closeLogout')" class="btn neutral-btn">Cancel</button>
            <nuxt-link :to="{ name: 'index' }"><button class="btn negative-btn">Log Out</button></nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css";
export default {};
</script>

<style scoped>
.logout-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(48, 50, 55, 0.3);
}
.WH-auto {
    width: 100%;
    height: 100%;
}
.modal {
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  padding: 24px;
  gap: 32px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 432px;
  width: 100%;
  height: 220px;

  /* White */

  background: var(--white);
  /* Raised */

  box-shadow: 0px 138px 55px rgba(0, 2, 46, 0.01), 0px 78px 47px rgba(0, 2, 46, 0.05),
    0px 35px 35px rgba(0, 2, 46, 0.09), 0px 9px 19px rgba(0, 2, 46, 0.1),
    0px 0px 0px rgba(0, 2, 46, 0.1);
  border-radius: 16px;
}
.modal-msg {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
}
.head-x {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: flex-start; */
  padding: 0px;
  /* gap: 32px; */

  width: 100%;
}
.circle {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px;
  gap: 10px;

  width: 32px;
  height: 32px;

  /* Grey/Grey4 */

  border: 1px solid #bdc0ce;
  border-radius: 100px;
}
p.snippet {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */
  max-width: 353px;

  /* Grey/Grey2 */

  color: var(--grey-grey2);
}
.button-grp {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
}
.button-grp a {
    width: 100%;
}
.background {
  position: relative;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;

  z-index: 999999;

  /* Modal */

  background: rgba(48, 50, 55, 0.3);
}
</style>
