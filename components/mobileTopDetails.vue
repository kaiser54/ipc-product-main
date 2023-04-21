<template>
  <section class="mobile-top-details">
    <div class="welcome-cart">
      <div class="username-welcome">
        <div class="welcome">
          <p>Hello,</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <rect y="0.5" width="20" height="20" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image0_1757_8288"
                  transform="scale(0.0138889)"
                />
              </pattern>
              <image
                id="image0_1757_8288"
                width="72"
                height="72"
                xlink:href="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </div>
        <p class="username mobile-truncate">Chicken Republic</p>
      </div>
      <div class="notify-cart">
        <div class="notification">
          <div class="circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5.6 9.45798V8.4C5.6 4.86538 8.46538 2 12 2C15.5346 2 18.4 4.86537 18.4 8.4V9.45798C18.4 11.7583 19.0649 14.0096 20.3146 15.9409L21 17H3L3.68539 15.9408C4.93512 14.0096 5.6 11.7583 5.6 9.45798Z"
                stroke="#565C69"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11 20.8889C11.5344 21.4827 12.4656 21.4827 13 20.8889"
                stroke="#565C69"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div class="cart" @click="triggerCart">
          <div class="circle">
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
          </div>
          <div class="badge">
            <p>10</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-search search-input" @click="redirectToSearchPage">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <g clip-path="url(#clip0_2006_2516)">
          <path
            d="M14.1667 14.1666L18.3334 18.3333L14.1667 14.1666ZM16.2501 8.95829C16.2501 12.9854 12.9855 16.25 8.95842 16.25C4.93134 16.25 1.66675 12.9854 1.66675 8.95829C1.66675 4.93122 4.93134 1.66663 8.95842 1.66663C12.9855 1.66663 16.2501 4.93122 16.2501 8.95829Z"
            stroke="#7E8494"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2006_2516">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <input
        class="input-search"
        type=""
        name=""
        id=""
        placeholder="Search for products" 
      />
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isProfilePage: false,
    };
  },
  methods: {
    redirectToSearchPage() {
      this.$emit("redirectToSearchPage");
    },
    triggerCart() {
    this.$emit('openCart')
  }
  },
  created() {
    const currentRoute = this.$route.path;
    if (currentRoute === "/dashboard/profile") {
      this.isProfilePage = true;
    }
    this.$router.afterEach((to, from) => {
      if (to.path === "/dashboard/profile") {
        this.isProfilePage = true;
      } else {
        this.isProfilePage = false;
      }
    });
  },
  mounted() {
    const currentRoute = this.$route.path;
    if (currentRoute === "/dashboard/profile") {
      this.isProfilePage = true;
    }
    if (this.isProfilePage) {
      this.$el.classList.add("profile-page");
    }
  },
  watch: {
    isProfilePage(newVal, oldVal) {
      if (newVal) {
        this.$el.classList.add("profile-page");
      } else {
        this.$el.classList.remove("profile-page");
      }
    },
  },
};
</script>

<style scoped>
@media (max-width: 950px) {
  .mobile-top-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 16px 16px;
    gap: 16px;

    width: 100%;
    height: 153px;

    /* White */

    background: #ffffff;
    /* Grey/Grey5 */

    border-bottom: 1px solid var(--grey-grey5);
  }

  .welcome-cart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0px;
    width: 100%;
  }

  .username-welcome {
    margin-left: 0px;
  }

  .mobile-search {
    max-width: 100% !important;
  }

  section.profile-page {
    height: auto !important;
    display: flex;
    flex-direction: row-reverse;
  }

  .profile-page .username-welcome,
  .profile-page .notification {
    display: none;
  }
  .profile-page .welcome-cart {
    width: auto !important;
  }
}

@media (max-width: 335px) {
  .mobile-truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 80px;
    /* or any other value you want to set */
  }
}
</style>
