<template>
  <div>
    <div class="logout-modal">
      <div class="WH-auto animate__animated" :class="animate">
        <div class="modal">
          <div class="modal-msg">
            <div class="head-x">
              <h3 class="h3-medium">{{ title }}</h3>
              <svg
                @click="closeModal"
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
            <div class="snippet-tab">
              <p class="snippet">{{ snippet }}</p>
              <div class="filter-tabs">
                <div
                  v-for="(tab, index) in tabs"
                  :key="index"
                  class="tab tab-small"
                  @click="toggleTab(index)"
                  :class="{ clicked: activeTabs.includes(index) }"
                >
                  {{ tab }}
                </div>
              </div>
            </div>
            <div class="snippet-tab">
              <p class="snippet">{{ snippet2 }}</p>

              <div class="filter-dates">
                <div class="datepicker-toggle">
                  <p>From</p>
                  <!-- <span class="datepicker-toggle-button"></span> -->
                  <button class="">
                    <!-- <span v-if="startDate">{{ startDate }}</span> -->
                    <input
                      type="date"
                      name=""
                      id=""
                      class="input datepicker-toggle-button"
                      v-model="startDate"
                    />
                  </button>
                  <!-- <input type="date" class="input datepicker-input" v-model="startDate" /> -->
                </div>
                <div class="datepicker-toggle">
                  <p>To</p>
                  <!-- <span class="datepicker-toggle-button"></span> -->
                  <button class="">
                    <!-- <span v-if="endDate">{{ endDate }}</span> -->
                    <input
                      type="date"
                      name=""
                      id=""
                      class="input datepicker-toggle-button"
                      v-model="endDate"
                    />
                  </button>
                  <!-- <input
                type="date"
                name=""
                id=""
                class="input datepicker-toggle-button"
                v-model="endDate"
              /> -->
                </div>
              </div>
            </div>
          </div>
          <div class="button-grp">
            <button @click="closeModal" class="btn" :class="buttonClass">
              {{ buttonText }}
            </button>
          </div>
        </div>
        <div class="modalbg WH-auto logout-modal" ref="modalRef"></div>
      </div>
    </div>
  </div>
</template>
    
  <script>
import "animate.css";
export default {
  props: {
    animate: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    snippet2: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    buttonClass: {
      type: String,
      required: true,
    },
    tabs: {
      type: Array,
      required: true,
    },
    activeTabs: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    // Add a global click event listener
    window.addEventListener("click", this.handleOutsideClick);
  },
  beforeDestroy() {
    // Remove the global click event listener to avoid memory leaks
    window.removeEventListener("click", this.handleOutsideClick);
  },
  methods: {
    handleOutsideClick(event) {
      const modalElement = this.$refs.modalRef;
      if (modalElement.contains(event.target)) {
        // Emit the event to close the modal
        this.$emit("closeModalBG");
      }
    },
    closeModal() {
      this.$emit("closeModal");
    },
    toggleTab(index) {
      this.$emit("toggleTab", index);
    },
  },
};
</script>
    
  <style scoped>
.logout-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.WH-auto {
  width: 100%;
  height: 100%;
}

.modalbg {
  background: rgba(48, 50, 55, 0.3);
  position: relative;
  z-index: -1;
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

  box-shadow: 0px 138px 55px rgba(0, 2, 46, 0.01),
    0px 78px 47px rgba(0, 2, 46, 0.05), 0px 35px 35px rgba(0, 2, 46, 0.09),
    0px 9px 19px rgba(0, 2, 46, 0.1), 0px 0px 0px rgba(0, 2, 46, 0.1);
  border-radius: 16px;
}

.modal-msg {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
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

.snippet-tab {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
}

p.snippet {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */
  color: var(--grey-grey1);
}

.filter-tabs {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.tab-small {
  min-width: auto;
}

.tab.clicked {
  background: var(--secondary-s50);
  border: 1px solid var(--secondary-s300);
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

.filter-dates {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;
  position: relative;
}

.datepicker-toggle {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  position: relative;
}

.datepicker-toggle-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 8px 12px; */
  gap: 4px;

  width: 123px;
  height: 32px;

  /* Grey/Grey4 */

  border: 1px solid var(--grey-grey4);
  border-radius: 100px;
}

input[type="date"] {
  color: var(--grey-grey-1, #303237);
  font-size: 10.5px;
  fornt-family : var(--new-primary-font);
  text-transform: uppercase;
  font-weight: 500;
  line-height: 18px;
}

.datepicker-input {
  position: absolute;
  left: 0;
  top: 0;
  width: 155px;
  height: 40px;
  opacity: 0;
  cursor: pointer;
  box-sizing: border-box;
}

.btn-dsp {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
}

.btn-dsp p {
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

@media (max-width: 950px) {
  .logout-modal {
    z-index: 2;
  }

  .modal {
    z-index: 3;
    max-width: 100%;
    height: auto;
    top: auto;
    bottom: 0px;
    transform: translate(-50%, -0%);
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    padding: 16px;
  }

  .head-x h3 {
    font-size: 20px;
    line-height: 30px;
    /* identical to box height, or 150% */

    letter-spacing: -0.5px;
  }
}
</style>
    