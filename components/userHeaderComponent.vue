<template>
  <div class="user-details-component animate__animated animate__slideInRight">
    <div class="component-header">
      <div class="component-header-main">
        <svg
          @click="$emit('redirectToprofilepage')"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 12L10 19M21 12H3H21ZM3 12L10 5L3 12Z"
            stroke="#565C69"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Profile</p>
        <div class="component-cart">
          <div class="badge">
            <p>9</p>
          </div>
          <nuxt-link to="/dashboard/market/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V9Z"
                stroke="#565C69"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 10V6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V9.6888"
                stroke="#565C69"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </nuxt-link>
        </div>
      </div>
    </div>
    <userNameMail />
    <div class="flex">
      <userName />
      <PhoneNumber v-model="myValue" :disabled="isDisabled" />
      <button class="btn" @click="toggleAddNumberFunc">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M4.16663 10.0013H15.8333M9.99996 4.16797V15.8346V4.16797Z"
            stroke="#0009B3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Add new phone number</p>
      </button>
    </div>
    <addNumberFunc
      v-if="addNumberFunc"
      @toggleAddNumberFunc="toggleAddNumberFunc"
    />
  </div>
</template>

<script>
import "animate.css";
export default {
  data() {
    return {
      addNumberFunc: false,
      myValue: "08123456789",
      isDisabled: true,
    };
  },
  methods: {
    toggleAddNumberFunc() {
      this.addNumberFunc = !this.addNumberFunc;
    },
  },
};
</script>

<style scoped>

.flex {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  margin: 0 16px;

  /* max-width: 575px; */
  width: auto;
}

button.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;
  background: none;
  width: auto;
}

button.btn p {
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}
</style>
