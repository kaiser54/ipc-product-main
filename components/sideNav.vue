<template>
  <section class="dashboard-nav-bar">
    <section class="dashboard-menu">
      <img
        src="../assets/images/ipc-logo.png"
        alt="IPC Logo branding Independence purchasing company"
      />
      <section class="menu">
        <nuxt-link to="/dashboard/market">
          <div class="desktop-nav">
            <div class="nav-content">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 10.2501V20.0001C3 20.5524 3.44771 21.0001 4 21.0001H8.42857C8.98086 21.0001 9.42857 20.5524 9.42857 20.0001V13.2858H14.5714V20.0001C14.5714 20.5524 15.0191 21.0001 15.5714 21.0001H20C20.5523 21.0001 21 20.5524 21 20.0001V10.2501C21 9.93536 20.8518 9.63897 20.6 9.45012L12 3.00012L3.4 9.45012C3.14819 9.63897 3 9.93536 3 10.2501Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Market</p>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/dashboard/categories">
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
                  d="M5 7.00012H19"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 12.0001H19"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 17.0001H19"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Categories</p>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/dashboard/track_orders">
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
                  d="M3 7.00012H21V19.0001C21 20.1047 20.1046 21.0001 19 21.0001H5C3.89543 21.0001 3 20.1047 3 19.0001V7.00012Z"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 7.00012L4.96327 3.50986C5.14039 3.19498 5.47357 3.00012 5.83485 3.00012H18.1652C18.5264 3.00012 18.8596 3.19498 19.0367 3.50986L21 7.00012"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 11.0001C15 12.657 13.6569 14.0001 12 14.0001C10.3431 14.0001 9 12.657 9 11.0001"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Track orders</p>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/dashboard/history">
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
                  d="M8 6.00012H16H8ZM8 10.0001H16H8ZM8 14.0001H11H8ZM6 22.0001H18C19.1046 22.0001 20 21.1047 20 20.0001V4.00012C20 2.89555 19.1046 2.00012 18 2.00012H6C4.89543 2.00012 4 2.89555 4 4.00012V20.0001C4 21.1047 4.89543 22.0001 6 22.0001Z"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>History</p>
            </div>
          </div>
        </nuxt-link>
        <!-- <nuxt-link :to="{ name: 'profile' }"> -->
        <nuxt-link to="/dashboard/profile">
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
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 21V17C4 15.8954 4.89543 15 6 15H18C19.1046 15 20 15.8954 20 17V21"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Profile</p>
            </div>
          </div>
        </nuxt-link>
        <div class="cursor">
          <div class="desktop-nav" @click="togglePopup">
            <div class="nav-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13Z"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11C17.4477 11 17 11.4477 17 12C17 12.5523 17.4477 13 18 13Z"
                  stroke="#303237"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>More</p>
            </div>
          </div>
        </div>

        <div class="popup" v-if="showPopup" ref="popup" @click="togglePopup">
          <nuxt-link to="/dashboard/saved-items">
            <div class="desktop-nav">
              <div class="nav-content">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4454 20.7608L3.57617 12.5663C1.35964 10.2582 1.49922 6.4736 3.87922 4.34929C6.24035 2.24181 9.82044 2.65105 11.6863 5.24171L12 5.67724L12.3137 5.24171C14.1796 2.65105 17.7596 2.24181 20.1208 4.34929C22.5008 6.4736 22.6404 10.2582 20.4238 12.5663L12.5546 20.7608C12.2483 21.0797 11.7517 21.0797 11.4454 20.7608Z"
                    stroke="#565C69"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Saved items</p>

                <div class="badge" v-if="savedItem.length > 0">
                  <p>{{ getCartLength }}</p>
                </div>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="https://ipc-africa.com/">
            <div class="desktop-nav">
              <div class="nav-content">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#565C69"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 18.2744V18.25"
                    stroke="#565C69"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 14.5C14 13.5 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10"
                    stroke="#565C69"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>FAQs</p>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="https://ipc-africa.com/">
            <div class="desktop-nav">
              <div class="nav-content">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
                    stroke="#565C69"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 13H15"
                    stroke="#565C69"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 9H9"
                    stroke="#565C69"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Terms and Privacy</p>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="https://ipc-africa.com/">
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
          <a class="cursor" @click="logoutUser">
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
                <p class="logout cursor">Log out</p>
              </div>
            </div>
          </a>
        </div>
      </section>
    </section>
    <section class="dashboard-profile">
      <div class="profile-content">
        <div class="profile-image">
          <img src="../assets/images/avatar.png" alt="" />
        </div>
        <div class="profile-details">
          <p class="name">Chicken republic</p>
          <p class="email truncate">adminchickenrepublic@gmail.com</p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    showPopup: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapState(["savedItem"]),
    getCartLength() {
      const cartLength = this.$store.state.savedItem.length;
      return cartLength;
    },
  },
  methods: {
    togglePopup() {
      this.$emit("update:showPopup", !this.showPopup);
    },
    logoutUser() {
      this.$emit("update:logout", !this.logout);
    },
  },
};
</script>

<style scoped>
.dashboard-nav-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 48px 24px;
  gap: 48px;

  width: 278px;
  height: 100vh;

  /* White */

  background: #ffffff;
  /* Grey/Grey5 */

  border-right: 1px solid var(--grey-grey5);
  z-index: 5;
}

.dashboard-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;

  max-width: 230px;
}

.dashboard-menu img {
  max-width: 144.8px;
  height: auto;
}

.menu {
  display: flex;
  flex-direction: column;
  max-width: 230px;
}

.nav-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
}

.nav-content svg {
  stroke: var(--grey-grey2);
}

.nav-content p {
  font-weight: 500;
}

.popup {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 278px;
  /* height: 168px; */
  left: 0px;
  top: 255px;
  background: var(--white);

  filter: drop-shadow(0px 1px 12px rgba(0, 6, 125, 0.2));
  border-radius: 21px;
  z-index: 12;
}

.popup a {
  width: 100%;
}

.cursor {
  cursor: pointer;
}

.popup .desktop-nav {
  border-radius: 0px;
}

.logout {
  color: var(--negative-n300);
}

.dashboard-profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 8px 24px; */

  max-width: 230px;
}

.profile-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;

  max-width: 205px;
}

.profile-image {
  width: 40px;
  height: 40px;
}

.profile-image img {
  width: 40px;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
}

.profile-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;

  max-width: 149px;
}

.badge {
  position: inherit;
  margin-left: auto;
}
.profile-details .name {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.profile-details .email {
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  /* identical to box height, or 200% */

  /* Grey/Grey3 */

  color: var(--grey-grey3);
}

.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 149px;
  /* or any other value you want to set */
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 1.1s ease-out;
}

.modal-fade-leave-to {
  opacity: 0;
}

.nuxt-link-exact-active .desktop-nav {
  background: var(--primary-p300);
}

.nuxt-link-exact-active .desktop-nav p {
  color: #fff;
}

.nuxt-link-exact-active .desktop-nav svg {
  stroke: #fff;
}

.nuxt-link-exact-active .desktop-nav .nav-content svg path {
  stroke: #fff !important;
}
.nuxt-link-exact-active .desktop-nav .nav-content .badge {
  background: #fff !important;
}
.nuxt-link-exact-active .desktop-nav .nav-content .badge p {
  color: #ff3b2d !important;
}
</style>