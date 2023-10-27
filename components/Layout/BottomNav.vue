<template>
  <div class="root-nav">
    <div class="mobile-nav-bar" v-if="
        this.pageName !== 'cart' &&
        this.pageName !== 'notifications' &&
        this.pageName !== 'saved-items'
      ">
      <nuxt-link to="/dashboard/market">
        <div class="mobile-nav">
          <div class="mobile-nav-content">
            <svg class="one" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24">
  <path d="M16.6999 10C16.6999 10 16.4999 11 13.4999 15C10.5999 18.8 14.7999 21.6 15.2999 22H15.3999C15.9999 21.5 23.5999 16.7 16.6999 10Z"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.3001 7.80001C14.3001 5.50001 13.4001 3.40001 12.5001 2.20001C12.2001 1.90001 11.7001 2.00001 11.6001 2.40001C11.2001 3.90001 10.0001 7.10001 7.10005 10.9C3.40005 15.7 6.80005 20.9 10.3001 21.9C12.2001 22.4 9.80005 20.9 9.50005 17.8C9.20005 13.9 14.3001 11 14.3001 7.80001Z"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            <p>Market</p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/dashboard/categories">
        <div class="mobile-nav">
          <div class="mobile-nav-content">
            <svg class="two" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" >
  <path d="M17.5 10H19.5C21.5 10 22.5 9 22.5 7V5C22.5 3 21.5 2 19.5 2H17.5C15.5 2 14.5 3 14.5 5V7C14.5 9 15.5 10 17.5 10Z"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.5 22H7.5C9.5 22 10.5 21 10.5 19V17C10.5 15 9.5 14 7.5 14H5.5C3.5 14 2.5 15 2.5 17V19C2.5 21 3.5 22 5.5 22Z"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.5 10C8.70914 10 10.5 8.20914 10.5 6C10.5 3.79086 8.70914 2 6.5 2C4.29086 2 2.5 3.79086 2.5 6C2.5 8.20914 4.29086 10 6.5 10Z"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.5 22C20.7091 22 22.5 20.2091 22.5 18C22.5 15.7909 20.7091 14 18.5 14C16.2909 14 14.5 15.7909 14.5 18C14.5 20.2091 16.2909 22 18.5 22Z"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            <p>Categories</p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/dashboard/track_orders">
        <div class="mobile-nav">
          <div class="mobile-nav-content">
            <svg class="three" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M16.8416 6.51711L10.4249 10.2338C10.1666 10.3838 9.8416 10.3838 9.57494 10.2338L3.15827 6.51711C2.69993 6.25044 2.58327 5.62544 2.93327 5.23377C3.17493 4.95877 3.44993 4.73377 3.7416 4.57544L8.25827 2.07544C9.22494 1.53377 10.7916 1.53377 11.7583 2.07544L16.2749 4.57544C16.5666 4.73377 16.8416 4.96711 17.0833 5.23377C17.4166 5.62544 17.2999 6.25044 16.8416 6.51711Z"
                   />
                <path
                  d="M9.52507 11.7838V17.4671C9.52507 18.1005 8.8834 18.5171 8.31673 18.2421C6.60006 17.4005 3.7084 15.8255 3.7084 15.8255C2.69173 15.2505 1.8584 13.8005 1.8584 12.6088V8.3088C1.8584 7.65047 2.55007 7.2338 3.11673 7.5588L9.1084 11.0338C9.3584 11.1921 9.52507 11.4755 9.52507 11.7838Z"
                  />
                <path
                  d="M10.4751 11.7838V17.4671C10.4751 18.1005 11.1168 18.5171 11.6834 18.2421C13.4001 17.4005 16.2918 15.8255 16.2918 15.8255C17.3084 15.2505 18.1418 13.8005 18.1418 12.6088V8.3088C18.1418 7.65047 17.4501 7.2338 16.8834 7.5588L10.8918 11.0338C10.6418 11.1921 10.4751 11.4755 10.4751 11.7838Z"
                   />
              </svg>
            <p>Orders</p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/dashboard/history">
        <div class="mobile-nav">
          <div class="mobile-nav-content">
            <svg class="forth" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" >
  <path d="M6.90845 5.24211C6.55845 5.24211 6.28345 4.95878 6.28345 4.61711V2.29211C6.28345 1.95045 6.55845 1.66711 6.90845 1.66711C7.25845 1.66711 7.53345 1.95045 7.53345 2.29211V4.60878C7.53345 4.95878 7.25845 5.24211 6.90845 5.24211Z" />
  <path d="M13.0916 5.24211C12.7416 5.24211 12.4666 4.95878 12.4666 4.61711V2.29211C12.4666 1.94211 12.7499 1.66711 13.0916 1.66711C13.4416 1.66711 13.7166 1.95045 13.7166 2.29211V4.60878C13.7166 4.95878 13.4416 5.24211 13.0916 5.24211Z" />
  <path d="M17.9167 13.1838C17.9167 13.3088 17.875 13.4338 17.7667 13.5422C16.5584 14.7588 14.4084 16.9255 13.175 18.1672C13.0667 18.2838 12.925 18.3338 12.7834 18.3338C12.5084 18.3338 12.2417 18.1172 12.2417 17.8005V14.8838C12.2417 13.6672 13.275 12.6588 14.5417 12.6588C15.3334 12.6505 16.4334 12.6505 17.375 12.6505C17.7 12.6505 17.9167 12.9088 17.9167 13.1838Z" />
  <path d="M17.9167 13.1838C17.9167 13.3088 17.875 13.4338 17.7667 13.5422C16.5584 14.7588 14.4084 16.9255 13.175 18.1672C13.0667 18.2838 12.925 18.3338 12.7834 18.3338C12.5084 18.3338 12.2417 18.1172 12.2417 17.8005V14.8838C12.2417 13.6672 13.275 12.6588 14.5417 12.6588C15.3334 12.6505 16.4334 12.6505 17.375 12.6505C17.7 12.6505 17.9167 12.9088 17.9167 13.1838Z" />
  <path d="M16.3083 3.75045C15.7583 3.34211 14.9666 3.73378 14.9666 4.42545V4.50878C14.9666 5.48378 14.2666 6.38378 13.2916 6.48378C12.1666 6.60045 11.2166 5.71711 11.2166 4.61711V3.75045C11.2166 3.29211 10.8416 2.91711 10.3833 2.91711H9.61659C9.15825 2.91711 8.78325 3.29211 8.78325 3.75045V4.50878C8.78325 5.24211 8.39159 5.92545 7.78325 6.25878C7.74992 6.28378 7.71659 6.30045 7.68325 6.31711C7.67492 6.31711 7.67492 6.32545 7.66658 6.32545C7.60825 6.35045 7.54992 6.37545 7.48325 6.40045C7.46658 6.40878 7.44992 6.40878 7.43325 6.41711C7.33325 6.45045 7.22492 6.47545 7.10825 6.48378H7.09992C6.97492 6.50045 6.84159 6.50045 6.71659 6.48378H6.70825C6.59159 6.47545 6.48325 6.45045 6.38325 6.41711C6.29992 6.39211 6.21659 6.35878 6.13325 6.31711C5.48325 6.02545 5.03325 5.37545 5.03325 4.61711V4.42545C5.03325 3.78378 4.34992 3.40045 3.80825 3.67545C3.79992 3.68378 3.79159 3.68378 3.78325 3.69211H3.77492C3.71659 3.73378 3.66659 3.77545 3.60825 3.81711C3.51659 3.89211 3.42492 3.96711 3.34159 4.05045C3.28325 4.10878 3.22492 4.16711 3.17492 4.22545C3.10825 4.29211 3.04992 4.35878 2.99159 4.43378C2.94992 4.48378 2.89992 4.53378 2.86659 4.59211C2.82492 4.64211 2.79159 4.70045 2.75825 4.75045C2.74992 4.75878 2.74159 4.76711 2.73325 4.78378C2.65825 4.89211 2.59159 5.01711 2.53325 5.13378C2.51659 5.15045 2.50825 5.15878 2.50825 5.17545C2.45825 5.27545 2.40825 5.37545 2.37492 5.48378C2.34992 5.52545 2.34159 5.55878 2.32492 5.60045C2.30825 5.63378 2.29992 5.67545 2.28325 5.70878C2.25825 5.79211 2.23325 5.88378 2.20825 5.97545C2.17492 6.09211 2.14992 6.21711 2.13325 6.34211C2.11659 6.43378 2.10825 6.52545 2.09992 6.62545C2.09159 6.74211 2.08325 6.85878 2.08325 6.97545V14.2754C2.08325 16.5171 3.89992 18.3338 6.14158 18.3338H10.1583C10.6166 18.3338 10.9916 17.9588 10.9916 17.5004V14.8838C10.9916 12.9671 12.5833 11.4088 14.5416 11.4088C14.9833 11.4004 16.0583 11.4004 17.0833 11.4004C17.5416 11.4004 17.9166 11.0254 17.9166 10.5671V6.97545C17.9166 5.65045 17.2833 4.49211 16.3083 3.75045ZM9.27492 13.2588C9.19992 13.5088 8.96659 13.6838 8.69159 13.6838H5.65825C5.61659 13.6838 5.58325 13.6838 5.54992 13.6671C5.24992 13.6254 5.03325 13.3671 5.03325 13.0588C5.03325 12.7088 5.30825 12.4254 5.65825 12.4254H8.69159C9.03325 12.4254 9.31659 12.7088 9.31659 13.0588C9.31659 13.1254 9.30825 13.2004 9.27492 13.2588ZM11.5916 10.1671C11.5166 10.4171 11.2833 10.5921 11.0083 10.5921H5.65825C5.61659 10.5921 5.58325 10.5921 5.54992 10.5754C5.24992 10.5338 5.03325 10.2754 5.03325 9.96711C5.03325 9.61711 5.30825 9.33378 5.65825 9.33378H11.0083C11.3583 9.33378 11.6333 9.61711 11.6333 9.96711C11.6333 10.0338 11.6249 10.1088 11.5916 10.1671Z" fill="white"/>
</svg>
            <p>History</p>
          </div>
        </div>
      </nuxt-link>
      <!-- <nuxt-link :to="{ name: 'profile' }"> -->
      <nuxt-link to="/dashboard/profile">
        <div class="mobile-nav">
          <div class="mobile-nav-content">
            <svg class="five" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" >
  <path d="M12.5 12C15.2614 12 17.5 9.76142 17.5 7C17.5 4.23858 15.2614 2 12.5 2C9.73858 2 7.5 4.23858 7.5 7C7.5 9.76142 9.73858 12 12.5 12Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path class="try" d="M21.0899 22C21.0899 18.13 17.2399 15 12.4999 15C7.75991 15 3.90991 18.13 3.90991 22"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            <p>Profile</p>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="checkout-bottom mobile-nav-bar" v-if="this.pageName === 'cart' ">
      <button class="btn primary-btn" @click="leaveCart">Checkout</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
    cartItems () {
      return this.cart
    },
    ...mapState("cart", ["cart"]),
  },
  methods: {
    leaveCart() {
      this.$router.push('/dashboard/market/checkout');
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
  font-family: var(--new-primary-font);
  text-align: center;

  /* Primary/P300 */

  color: var(--grey-grey3);
}

.checkout-bottom {
  padding: 16px;
  height: auto;
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
  color: var( --new-primary-p300);
}
.one {
  fill: none;
}
.one path{
  stroke: #667185;
}
.nuxt-link-exact-active .mobile-nav .mobile-nav-content .one {
  fill: var(--new-primary-p300);
}
.nuxt-link-exact-active .mobile-nav .mobile-nav-content .one path {
  stroke: none;
}
.two{
  fill: none;
}
.two path{
  stroke: #667185;
}
.nuxt-link-exact-active .mobile-nav .mobile-nav-content .two {
  fill: var(--new-primary-p300);
}
.nuxt-link-exact-active .mobile-nav .mobile-nav-content .two path {
  stroke: none;
}
.three{
  fill: none;
}
.three path{
  stroke: #667185;
}
.nuxt-link-exact-active .mobile-nav .mobile-nav-content .three path {
  fill: var(--new-primary-p300);
  stroke: none;
}
.five{
  fill: none;
}
.five path{
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
.forth path{
  stroke: #344054;
  fill: none;
}
.nuxt-link-exact-active .mobile-nav .mobile-nav-content .forth path {
  stroke: none;
  fill: var(--new-primary-p300);
}
.nuxt-link-active .mobile-nav p {
  color: black;
}
/* 
.nuxt-link-active .mobile-nav svg {
  stroke: var( --new-primary-p300);
}

.nuxt-link-active .mobile-nav .mobile-nav-content svg path {
  stroke: var( --new-primary-p300) !important;
} */
</style>