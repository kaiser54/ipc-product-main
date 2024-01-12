<template>
  <div class="root-nav">
    <div class="mobile-nav-bar" v-if="this.pageName !== 'cart' &&
      this.pageName !== 'notifications' &&
      this.pageName !== 'saved-items'
      ">
      <nuxt-link to="/dashboard/market">
        <div class="mobile-nav">
          <div class="mobile-nav-content">
            <svg class="one" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24">
              <path
                d="M16.6999 10C16.6999 10 16.4999 11 13.4999 15C10.5999 18.8 14.7999 21.6 15.2999 22H15.3999C15.9999 21.5 23.5999 16.7 16.6999 10Z"
                stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M14.3001 7.80001C14.3001 5.50001 13.4001 3.40001 12.5001 2.20001C12.2001 1.90001 11.7001 2.00001 11.6001 2.40001C11.2001 3.90001 10.0001 7.10001 7.10005 10.9C3.40005 15.7 6.80005 20.9 10.3001 21.9C12.2001 22.4 9.80005 20.9 9.50005 17.8C9.20005 13.9 14.3001 11 14.3001 7.80001Z"
                stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Market</p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/dashboard/categories">
        <div class="mobile-nav">
          <div class="mobile-nav-content">
            <!-- <svg
              class="two"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
            >
              <path
                d="M17.5 10H19.5C21.5 10 22.5 9 22.5 7V5C22.5 3 21.5 2 19.5 2H17.5C15.5 2 14.5 3 14.5 5V7C14.5 9 15.5 10 17.5 10Z"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.5 22H7.5C9.5 22 10.5 21 10.5 19V17C10.5 15 9.5 14 7.5 14H5.5C3.5 14 2.5 15 2.5 17V19C2.5 21 3.5 22 5.5 22Z"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.5 10C8.70914 10 10.5 8.20914 10.5 6C10.5 3.79086 8.70914 2 6.5 2C4.29086 2 2.5 3.79086 2.5 6C2.5 8.20914 4.29086 10 6.5 10Z"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.5 22C20.7091 22 22.5 20.2091 22.5 18C22.5 15.7909 20.7091 14 18.5 14C16.2909 14 14.5 15.7909 14.5 18C14.5 20.2091 16.2909 22 18.5 22Z"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg> -->
            <svg class="two" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24">
              <path d="M5.5 10H7.5C9.5 10 10.5 9 10.5 7V5C10.5 3 9.5 2 7.5 2H5.5C3.5 2 2.5 3 2.5 5V7C2.5 9 3.5 10 5.5 10Z"
                stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M17.5 10H19.5C21.5 10 22.5 9 22.5 7V5C22.5 3 21.5 2 19.5 2H17.5C15.5 2 14.5 3 14.5 5V7C14.5 9 15.5 10 17.5 10Z"
                stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M17.5 22H19.5C21.5 22 22.5 21 22.5 19V17C22.5 15 21.5 14 19.5 14H17.5C15.5 14 14.5 15 14.5 17V19C14.5 21 15.5 22 17.5 22Z"
                stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M5.5 22H7.5C9.5 22 10.5 21 10.5 19V17C10.5 15 9.5 14 7.5 14H5.5C3.5 14 2.5 15 2.5 17V19C2.5 21 3.5 22 5.5 22Z"
                stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Categories</p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/dashboard/track_orders">
        <div class="mobile-nav">
          <div class="mobile-nav-content">
            <svg class="three" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path
                d="M10.4306 2.48126L5.09063 5.44126C3.88063 6.11126 2.89062 7.79126 2.89062 9.17126V14.8213C2.89062 16.2013 3.88063 17.8813 5.09063 18.5513L10.4306 21.5213C11.5706 22.1513 13.4406 22.1513 14.5806 21.5213L19.9206 18.5513C21.1306 17.8813 22.1206 16.2013 22.1206 14.8213V9.17126C22.1206 7.79126 21.1306 6.11126 19.9206 5.44126L14.5806 2.47126C13.4306 1.84126 11.5706 1.84126 10.4306 2.48126Z"
                stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3.66992 7.44141L12.4999 12.5514L21.2699 7.47141" stroke="" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12.5 21.6091V12.5391" stroke="" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            <p>Orders</p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/dashboard/history">
        <div class="mobile-nav">
          <div class="mobile-nav-content">
            <!-- <svg class="history" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
              fill="none">
              <path
                d="M15.5 22H9.5C4.5 22 3.5 19.94 3.5 15.82V9.65C3.5 4.95 5.17 3.69 8.5 3.5H16.5C19.83 3.68 21.5 4.95 21.5 9.65V16"
                stroke="" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.5 2V5" stroke="" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M16.5 2V5" stroke="" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M7.5 11H15.5" stroke="" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M7.5 15H12.5" stroke="" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M21.5 16L15.5 22V19C15.5 17 16.5 16 18.5 16H21.5Z" stroke="" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg> -->
            <svg class="history" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
              fill="none">
              <path
                d="M7.23 19.7C8.05 18.82 9.3 18.89 10.02 19.85L11.03 21.2C11.84 22.27 13.15 22.27 13.96 21.2L14.97 19.85C15.69 18.89 16.94 18.82 17.76 19.7C19.54 21.6 20.99 20.97 20.99 18.31V7.04C21 3.01 20.06 2 16.28 2H8.72C4.94 2 4 3.01 4 7.04V18.3C4 20.97 5.46 21.59 7.23 19.7Z"
                stroke="#667185" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.5 7H16.5" stroke="#667185" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.5 11H15.5" stroke="#667185" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>History</p>
          </div>
        </div>
      </nuxt-link>
      <!-- <nuxt-link :to="{ name: 'profile' }"> -->
      <nuxt-link to="/dashboard/profile">
        <div class="mobile-nav">
          <div class="mobile-nav-content">
            <svg class="five" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24">
              <path
                d="M12.5 12C15.2614 12 17.5 9.76142 17.5 7C17.5 4.23858 15.2614 2 12.5 2C9.73858 2 7.5 4.23858 7.5 7C7.5 9.76142 9.73858 12 12.5 12Z"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path class="try" d="M21.0899 22C21.0899 18.13 17.2399 15 12.4999 15C7.75991 15 3.90991 18.13 3.90991 22"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Profile</p>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="checkout-bottom mobile-nav-bar" v-if="this.pageName === 'cart'">
      <button class="btn primary-btn" @click="leaveCart">Checkout</button>
      <button class="btn neutral-btn" @click="clearCart">Clear cart</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      pageName: "",
    };
  },
  created() {
    this.getRouteName();
  },
  watch: {
    $route(to, from) {
      this.getRouteName();
    },
  },
  computed: {
    cartItems() {
      return this.cart;
    },
    ...mapState("cart", ["cart"]),
  },
  methods: {
    ...mapActions("cart", [
      "clearCartItems"
    ]),
    async clearCart() {
      if (process.client) {
        const userData = JSON.parse(localStorage.getItem("user"));
        const customerId = userData._id;
        console.log(customerId)
        await this.clearCartItems(customerId);
      }
    },
    leaveCart() {
      this.$router.push("/dashboard/market/checkout");
    },
    getRouteName() {
      // Get the current route path
      const currentPath = this.$route.fullPath;

      // Split the path by slashes to get an array of segments
      const pathSegments = currentPath.split("/");

      // Get the last segment (the part after the last slash)
      const lastSegment = pathSegments[pathSegments.length - 1];

      // Update the pageName data property
      this.pageName = lastSegment;
    },
  },
};
</script>

<style scoped>
.root-nav {
  width: 100%;
  /* display: none !important; */
}

.mobile-nav-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 5.5px;
  gap: 16px;

  position: fixed;
  width: 100%;
  height: 76px;
  left: 0px;
  bottom: 0px;
  z-index: 2;

  /* White */

  background: #ffffff;
  /* Grey/Grey5 */

  border-top: 1px solid var(--grey-grey5);
  /* Nav bar */

  box-shadow: 0px 0px 20px rgba(48, 50, 55, 0.2);
}

.mobile-nav-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 6px;

  width: 60px;
  height: 68px;
}

.mobile-nav-content svg {
  stroke: var(--grey-grey2);
}

.mobile-nav-content p {
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */
  text-align: center;

  /* Primary/P300 */

  color: var(--grey-grey3);
}

.checkout-bottom {
  padding: 16px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-direction: column;
}

.history path,
.three path {
  stroke: #667185;
}

@media (max-width: 950px) {
  .market-product {
    padding: 0;
    gap: 8px;
  }

  .root-nav {
    width: 100%;
    display: block;
  }
}

@media (max-width: 374px) {
  .mobile-nav-bar {
    /* padding: 0; */
    gap: 0;
  }

  .mobile-nav-content {
    padding: 0;
    justify-content: center;
  }
}

.nuxt-link-exact-active .mobile-nav p {
  color: var(--new-primary-p300);
}

.one {
  fill: none;
}

.one path {
  stroke: #667185;
}

.nuxt-link-exact-active .mobile-nav .mobile-nav-content .one {
  fill: var(--new-primary-p300);
}

.nuxt-link-exact-active .mobile-nav .mobile-nav-content .one path {
  stroke: none;
}

.two {
  fill: none;
}

.two path {
  stroke: #667185;

}

.nuxt-link-exact-active .mobile-nav .mobile-nav-content .two {
  fill: var(--new-primary-p300);
}

.nuxt-link-exact-active .mobile-nav .mobile-nav-content .two path {
  stroke: none;
}

.three {
  fill: none;
}

.three path {
  stroke: #667185;
}

.nuxt-link-exact-active .mobile-nav .mobile-nav-content .three path {
  fill: var(--new-primary-p300);
  stroke: white;
}

.five {
  fill: none;
}

.five path {
  stroke: #667185;
}

.nuxt-link-exact-active .mobile-nav .mobile-nav-content .five path {
  fill: var(--new-primary-p300);
  stroke: none;
}

.nuxt-link-exact-active .mobile-nav .mobile-nav-content .five path .try {
  fill: var(--new-primary-p300);
  stroke: var(--new-primary-p300);
}

.forth {
  fill: none;
}

.forth path {
  stroke: #344054;
  fill: none;
}

.nuxt-link-exact-active .mobile-nav .mobile-nav-content .forth path {
  stroke: none;
  fill: var(--new-primary-p300);
}

.nuxt-link-exact-active .mobile-nav .mobile-nav-content .history path {
  stroke: white;
  fill: var(--new-primary-p300);
}

.nuxt-link-active .mobile-nav p {
  color: #09420c;
}

/* 
.nuxt-link-active .mobile-nav svg {
  stroke: var( --new-primary-p300);
}

.nuxt-link-active .mobile-nav .mobile-nav-content svg path {
  stroke: var( --new-primary-p300) !important;
} */
</style>