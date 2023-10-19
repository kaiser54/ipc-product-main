<template>
  <div>
    <div class="container zindex">
      <div class="branding">
        <div class="flexed-logo logo">
          <div class="cancel-btn">
            <button class="goback" @click="CancelBtn">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.7793 22.1788L22.2237 9.73438M9.7793 9.73438L22.2237 22.1788L9.7793 9.73438Z" stroke="#344054"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </button>

          </div>
          <nuxt-link to="" class="logo">
            <div class="tag-flex">
              <svg width="128" height="24" viewBox="0 0 128 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.3572 1.87396C16.0442 1.87396 18.4769 3.46542 19.5504 5.93264L21.2674 5.18243C19.8957 2.03405 16.7881 0 13.3572 0C9.05994 0 5.38421 3.20488 4.80664 7.45818L6.66491 7.7093C7.11692 4.38199 9.99536 1.87396 13.3572 1.87396Z"
                  fill="#19B820" />
                <path
                  d="M26.1542 8.6416H0.562194C0.166684 8.6416 -0.103267 9.03711 0.0379866 9.40751L5.5406 23.6396C5.62535 23.8562 5.83252 24.0005 6.06481 24.0005H20.6485C20.8808 24.0005 21.0879 23.8593 21.1727 23.6396L26.6753 9.40751C26.8165 9.04025 26.5466 8.6416 26.1511 8.6416H26.1542ZM21.27 15.3998C19.8951 18.545 16.7907 20.5791 13.3598 20.5791C9.06253 20.5791 5.38679 17.3742 4.80922 13.1209L6.66749 12.8698C7.1195 16.1971 9.99794 18.7051 13.3598 18.7051C15.7171 18.7051 17.8768 17.4809 19.0978 15.5191L12.7351 13.0424L13.4163 11.2972L21.6624 14.5083L21.2731 15.4029L21.27 15.3998Z"
                  fill="#19B820" />
                <path
                  d="M38.4072 12.1168C38.4072 15.5595 40.3933 17.4379 43.2417 17.4379C45.9237 17.4379 47.5496 15.9598 47.5496 13.4871V13.4225H42.8814V11.0329H50.0623V19.7135H47.7836L47.6143 17.9398C46.7705 19.1222 45.0153 19.9475 42.9245 19.9475C38.595 19.9475 35.5742 16.8005 35.5742 12.0491C35.5742 7.29771 38.635 4.02441 43.2817 4.02441C46.8106 4.02441 49.5327 6.07215 49.9761 9.2192H47.1247C46.6381 7.40241 45.0769 6.55868 43.217 6.55868C40.1562 6.55868 38.4041 8.77578 38.4041 12.1137L38.4072 12.1168Z"
                  fill="#09420C" />
                <path
                  d="M56.9301 8.99121C60.1603 8.99121 62.5037 11.2299 62.5037 14.4816C62.5037 17.7334 60.1603 19.972 56.9301 19.972C53.6999 19.972 51.3535 17.7303 51.3535 14.4816C51.3535 11.2329 53.6969 8.99121 56.9301 8.99121ZM56.9301 17.6718C58.7038 17.6718 59.9294 16.3815 59.9294 14.4816C59.9294 12.5817 58.7038 11.2915 56.9301 11.2915C55.1565 11.2915 53.9309 12.5786 53.9309 14.4816C53.9309 16.3846 55.1565 17.6718 56.9301 17.6718Z"
                  fill="#09420C" />
                <path
                  d="M68.9079 4.00616C72.0334 4.00616 74.0196 5.73673 74.1027 8.5235H71.3991C71.3344 7.19324 70.386 6.4111 68.8648 6.4111C67.1959 6.4111 66.1181 7.21171 66.1181 8.50194C66.1181 9.59818 66.7093 10.214 67.9965 10.5097L70.426 11.0362C73.065 11.609 74.3552 12.9608 74.3552 15.261C74.3552 18.134 72.1166 19.9939 68.717 19.9939C65.3175 19.9939 63.2667 18.2387 63.2051 15.4735H65.9087C65.9303 16.7822 66.9865 17.5643 68.717 17.5643C70.4476 17.5643 71.6547 16.7822 71.6547 15.492C71.6547 14.4573 71.125 13.8445 69.8594 13.5705L67.4114 13.0193C64.794 12.4465 63.4206 10.9469 63.4206 8.582C63.4206 5.87837 65.6593 4 68.911 4L68.9079 4.00616Z"
                  fill="#09420C" />
                <path
                  d="M80.7602 8.99121C83.9904 8.99121 86.3337 11.2299 86.3337 14.4816C86.3337 17.7334 83.9904 19.972 80.7602 19.972C77.53 19.972 75.1836 17.7303 75.1836 14.4816C75.1836 11.2329 77.5269 8.99121 80.7602 8.99121ZM80.7602 17.6718C82.5339 17.6718 83.7594 16.3815 83.7594 14.4816C83.7594 12.5817 82.5339 11.2915 80.7602 11.2915C78.9865 11.2915 77.761 12.5786 77.761 14.4816C77.761 16.3846 78.9865 17.6718 80.7602 17.6718Z"
                  fill="#09420C" />
                <path
                  d="M97.1518 9.28711V19.7198H94.7653L94.5775 18.3249C93.9431 19.3164 92.5913 19.9939 91.1995 19.9939C88.7915 19.9939 87.375 18.368 87.375 15.8122V9.28711H89.9524V14.9068C89.9524 16.8899 90.7345 17.6936 92.1695 17.6936C93.7953 17.6936 94.5775 16.7421 94.5775 14.756V9.28711H97.1549H97.1518Z"
                  fill="#09420C" />
                <path
                  d="M105.724 11.63H104.776C102.919 11.63 101.755 12.6215 101.755 14.6508V19.7193H99.1777V9.30818H101.607L101.755 10.8294C102.199 9.79163 103.19 9.0957 104.585 9.0957C104.942 9.0957 105.302 9.13882 105.724 9.24351V11.63Z"
                  fill="#09420C" />
                <path
                  d="M111.091 8.96973C113.943 8.96973 115.886 10.5556 116.16 13.0683H113.582C113.287 11.8858 112.419 11.273 111.196 11.273C109.549 11.273 108.449 12.5202 108.449 14.4848C108.449 16.4494 109.462 17.6749 111.11 17.6749C112.397 17.6749 113.305 17.0406 113.582 15.9012H116.181C115.864 18.3308 113.835 19.9998 111.113 19.9998C107.944 19.9998 105.875 17.8012 105.875 14.4878C105.875 11.1745 108.009 8.97588 111.091 8.97588V8.96973Z"
                  fill="#09420C" />
                <path
                  d="M116.859 14.5032C116.859 11.2299 118.993 8.96973 122.053 8.96973C125.114 8.96973 127.165 11.0606 127.165 14.3123V15.0914L119.307 15.1129C119.498 16.9513 120.471 17.8812 122.18 17.8812C123.596 17.8812 124.526 17.3331 124.819 16.3385H127.205C126.762 18.6203 124.859 19.9936 122.136 19.9936C119.033 19.9936 116.855 17.7334 116.855 14.5032H116.859ZM119.371 13.4686H124.609C124.609 12.0336 123.618 11.079 122.075 11.079C120.532 11.079 119.627 11.9043 119.371 13.4686Z"
                  fill="#09420C" />
              </svg>

              <DynamicTags class="auto" tagText="BETA" size="small" type="positive" style="
              background: var(--positive-p300);
              color: white;
              height: 16px;
              font-size: 10px;
              cursor: auto;
              display: flex;
              padding: 4px 8px;
              justify-content: center;
              align-items: center;
              gap: 10px;
              /* font-family: Inter; */
              font-size: 10px;
              font-style: normal;
              font-weight: 500;
              line-height: 15px;
            " />
            </div>
          </nuxt-link>
        </div>
        <div class="mobile__view">
          <div class="component-header-main">
            <svg @click="goBack" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none">
              <path d="M3 12L10 19M21 12H3H21ZM3 12L10 5L3 12Z" stroke="#565C69" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            <p>Checkout</p>
            <div class="component-cart">
              <nuxt-link to="/dashboard/market/cart">
                <div class="badge" v-if="TotalCart !== 0">
                  <p>{{ TotalCart }}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V9Z"
                    stroke="#565C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8 10V6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V9.6888" stroke="#565C69"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  async mounted() {
    await this.fetchCartItemsByUserID();
  },
  computed: {
    ...mapGetters("cart", ["TotalCart"]),
  },
  mounted() {
    if (process.client) {
      const userData = localStorage.getItem("user");
      if (!userData) {
        this.$router.push("/auth/login");
      }
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    ...mapActions("cart", ["fetchCartItemsByUserID", "addToCart", "reduceQuantity"]),
    CancelBtn() {
      this.$router.push("/dashboard/market/cart");

    }
  },
};
</script>

<style>
.mobile__view {
  display: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

::-webkit-scrollbar {
  display: none;
}

.tag-flex {
  display: flex;
  align-items: center;
  gap: 4px;
}
.flexed-logo{
display: flex;
align-items: center;
gap: 48px;
}
.goback{
  cursor: pointer;
}
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  background: #fff;
  position: sticky;
  top: 0;
  left: 0;
}

.zindex {
  z-index: 99;
}

.branding {
  display: flex;
  width: 90%;
  padding: 24px 0;
}

.branding img {
  width: 90%;
}

.content {
  width: 90%;
  margin-top: 16px;
  margin-inline: auto;
}

p.header {
  color: var(--grey-grey1, #303237);
  text-align: center;

  /* Body Large/Body Large Medium */
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 500;
  line-height: 24px;
}

@media (max-width: 750px) {
  .content {
    margin-top: 40px;
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;

  max-width: 376px;
  width: 100%;
}

.header-text {
  color: var(--grey-grey1);
}

.header-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
}

.form-group {
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 32px;

  width: 100%;
}

.form-field {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
}

.input-field {
  width: 100%;
}

label {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  color: var(--grey-grey1);
}

@media (max-width: 550px) {
  h2 {
    font-size: 24px;
    line-height: 36px;
  }
}

@media (max-width: 950px) {
  .logo {
    display: none;
  }

  .mobile__view {
    display: flex;
  }
}
</style>
