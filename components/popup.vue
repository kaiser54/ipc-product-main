<template>
  <div v-show="isOpen">
    <div class="nav-popup" >
      <nuxt-link :to="{ name: '' }">
        <div class="desktop-nav">
          <div class="nav-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 22H18C19.1046 22 20 21.1046 20 20V9.82843C20 9.29799 19.7893 8.78929 19.4142 8.41421L13.5858 2.58579C13.2107 2.21071 12.702 2 12.1716 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22Z"
                stroke="#565C69"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13 2.5V9H19"
                stroke="#565C69"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 17H15"
                stroke="#303237"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 13H15"
                stroke="#303237"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 9H9"
                stroke="#303237"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>FAQs</p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link :to="{ name: '' }">
        <div class="desktop-nav">
          <div class="nav-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.51089 2L7.15002 2.13169C7.91653 2.15942 8.59676 2.64346 8.89053 3.3702L9.96656 6.03213C10.217 6.65159 10.1496 7.35837 9.78693 7.91634L8.40831 10.0375C9.22454 11.2096 11.4447 13.9558 13.7955 15.5633L15.5484 14.4845C15.9939 14.2103 16.5273 14.1289 17.0314 14.2581L20.5161 15.1517C21.4429 15.3894 22.0674 16.2782 21.9942 17.2552L21.7705 20.2385C21.6919 21.2854 20.8351 22.1069 19.818 21.9887C6.39245 20.4276 -1.48056 1.99997 3.51089 2Z"
                stroke="#565C69"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Customer support</p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link :to="{ name: '' }">
        <div class="desktop-nav">
          <div class="nav-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 12H15"
                stroke="#FF3B2D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 7L3 12L8 17"
                stroke="#FF3B2D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 3V21"
                stroke="#FF3B2D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="logout">Log out</p>
          </div>
        </div>
      </nuxt-link>
      <button @click="closeModal">X</button>
    </div>
    <div class="popup-overlay" @click.self="closeModal"></div>
  </div>
</template>

<script>
export default {
  name: 'popup',
  props: {
    isOpen: Boolean,
    title: String,
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>

.nav-content {
  display: flex;
  flex-direction: row;
  gap: 16px;
}
.nav-content svg {
  stroke: var(--grey-grey2);
}
.nav-content p {
  font-weight: 500;
}

.nav-popup {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 278px;
  height: 168px;
  left: 0px;
  top: 255px;
  background: var(--white);

  filter: drop-shadow(0px 1px 12px rgba(0, 6, 125, 0.2));
  border-radius: 16px;
}
.nav-popup a {
  width: 100%;
}
.nav-popup .desktop-nav {
  border-radius: 0px;
}
.logout {
  color: var(--negative-n300);
}
.popup-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
