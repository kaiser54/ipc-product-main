<template>
  <div class="stay-up">
    <div class="full-cart-bg">
      <transition name="slide" appear>
        <div class="full-cart " v-if="showNotify">
        <header>
          <div class="modal-title">
            <svg @click="$emit('closeNotify')" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none">
              <path d="M5 19L19 5M5 5L19 19L5 5Z" stroke="#565C69" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            <h3 class="h3-medium">Notifications</h3>
          </div>
        </header>
        <div class="empty"  v-if="notifications.length === 0">
            <EmptyNotification 
        :header="header"
        :snippet="snippet"
        >
        
        <template v-slot:svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="147" height="159" viewBox="0 0 147 159" fill="none">
  <path d="M141.851 118.992C139.741 115.952 136.911 112.882 133.441 109.842C122.311 100.072 104.661 90.6716 83.7707 84.3016C62.8807 77.9316 42.9907 75.8816 28.3007 77.7816C23.7307 78.3716 19.6607 79.3416 16.2207 80.6816C23.9407 77.7216 30.2607 71.3716 32.8507 62.8516L36.7707 49.9916C45.1707 22.4716 73.2007 6.34163 100.821 12.2716C102.341 12.6016 103.861 12.9916 105.371 13.4516C106.881 13.9116 108.361 14.4416 109.811 15.0116C122.211 19.9616 131.931 29.0616 137.851 40.1816C144.471 52.5916 146.341 67.5316 141.921 82.0516L138.001 94.9116C135.401 103.432 137.101 112.232 141.851 118.992Z" fill="#7E8494"/>
  <path d="M142.562 144.262L142.342 145.002C142.392 144.882 142.432 144.752 142.462 144.632C142.492 144.512 142.532 144.392 142.562 144.262Z" fill="#FFD52B"/>
  <path d="M142.882 139.132C142.452 135.743 140.812 132.152 138.142 128.512C136.112 125.742 133.472 122.922 130.302 120.152C119.172 110.382 101.522 100.982 80.6321 94.6125C59.7421 88.2425 39.8521 86.1925 25.1621 88.0925C20.9921 88.6325 17.2421 89.4825 14.0021 90.6525C9.75207 92.1925 6.38207 94.2525 4.12207 96.8325C2.85207 98.2725 1.94207 99.8725 1.40207 101.632C-3.39793 117.372 24.2921 139.772 63.2421 151.652C101.882 163.432 137.102 160.432 142.342 145.012L142.562 144.272C143.012 142.632 143.112 140.922 142.882 139.142V139.132ZM134.672 144.652C128.012 155.932 97.8321 157.152 64.6421 147.032C31.4521 136.912 7.11207 119.052 7.86207 105.982C7.90207 105.212 8.04207 104.442 8.26207 103.702C8.69207 102.302 9.42207 101.032 10.4521 99.8925C13.0821 96.9325 17.5921 94.8225 23.4821 93.6025C36.8721 90.8025 57.3921 92.5525 79.2321 99.2125C101.062 105.872 119.072 115.872 128.622 125.662C132.832 129.962 135.402 134.232 135.922 138.152C136.142 139.672 136.032 141.132 135.612 142.532C135.392 143.272 135.072 143.982 134.672 144.642V144.652Z" fill="#E5E7EF"/>
  <path d="M135.611 142.533C135.391 143.273 135.071 143.983 134.671 144.643C128.011 155.923 97.8306 157.143 64.6406 147.023C31.4506 136.903 7.11062 119.053 7.86062 105.983C7.90062 105.213 8.04062 104.443 8.26062 103.703C8.69062 102.303 9.42062 101.033 10.4506 99.8926C12.2006 112.723 35.7106 129.233 67.1506 138.823C98.5806 148.403 127.311 147.823 135.931 138.153C136.151 139.673 136.041 141.133 135.621 142.533H135.611Z" fill="#565C69"/>
  <path d="M145.702 133.951L145.482 134.691C145.532 134.571 145.572 134.441 145.602 134.321C145.632 134.201 145.672 134.081 145.702 133.951Z" fill="#FFD52B"/>
  <path d="M135.921 138.152C127.311 147.822 98.5814 148.402 67.1414 138.822C35.7014 129.232 12.1914 112.722 10.4414 99.8923C13.0714 96.9323 17.5814 94.8223 23.4714 93.6023C36.8614 90.8023 57.3814 92.5523 79.2214 99.2123C101.051 105.872 119.061 115.872 128.611 125.662C132.821 129.962 135.391 134.232 135.911 138.152H135.921Z" fill="#303237"/>
  <path d="M112.62 6.23289C112.08 8.00289 110.62 9.23289 108.92 9.56289C108.17 9.70289 107.38 9.67289 106.6 9.43289C105.82 9.19289 105.14 8.78289 104.61 8.24289C103.39 7.02289 102.86 5.18289 103.4 3.41289C104.18 0.86289 106.87 -0.56711 109.42 0.21289C111.97 0.99289 113.4 3.68289 112.62 6.23289Z" fill="#7E8494"/>
  <path d="M123.301 126.382C120.901 134.262 114.371 139.772 106.801 141.242C103.471 141.882 99.9409 141.742 96.4509 140.682C92.9609 139.622 89.9509 137.762 87.5509 135.372C82.0909 129.922 79.7409 121.712 82.1409 113.822C83.5309 109.252 86.3209 105.482 89.8909 102.832C104.051 108.152 116.001 114.792 124.181 121.592C124.071 123.182 123.781 124.782 123.301 126.372V126.382Z" fill="#BDC0CE"/>
  <path d="M108.921 9.56219L108.281 11.6522C107.591 11.3722 106.881 11.1222 106.151 10.9022C105.421 10.6822 104.701 10.4922 103.971 10.3322L104.611 8.24219C105.151 8.78219 105.821 9.19219 106.601 9.43219C107.381 9.67219 108.171 9.70219 108.921 9.56219Z" fill="#BDC0CE"/>
  <path d="M145.7 133.952L142.56 144.252C143.01 142.612 143.11 140.902 142.88 139.122C142.45 135.732 140.81 132.142 138.14 128.502C136.11 125.732 133.47 122.912 130.3 120.142C119.17 110.372 101.52 100.972 80.6304 94.6017C59.7404 88.2317 39.8504 86.1817 25.1604 88.0817C20.9904 88.6217 17.2404 89.4717 14.0004 90.6417C9.75039 92.1817 6.38039 94.2417 4.12039 96.8217C2.85039 98.2617 1.94039 99.8617 1.40039 101.622L4.54039 91.3217C5.97039 86.6417 10.0904 83.0817 16.2204 80.6917C19.6604 79.3517 23.7304 78.3817 28.3004 77.7917C42.9904 75.8917 62.8804 77.9417 83.7704 84.3117C104.66 90.6817 122.31 100.082 133.44 109.852C136.9 112.892 139.74 115.962 141.85 119.002C145.49 124.262 146.95 129.382 145.7 133.962V133.952Z" fill="#BDC0CE"/>
</svg>
        </template>
    </EmptyNotification>
    </div>
        <div class="cart-list" v-else>
          <div class="notification-wrapper" >
            <div class="notification" v-for="(notification, index) in notifications" :key="index">
              <div class="time">{{ notification.time }}</div>
              <div class="notification-header">
                <div class="title">{{ notification.title }}</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <path d="M5.83301 3.16699L11.1663 8.50033L5.83301 13.8337" stroke="#565C69" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div class="message">{{ notification.message }}</div>
              <div class="notification-product">
                <div class="image">
                  <img :src="require(`~/assets/images/${notification.image}`)" />
                </div>
                <div class="product-name">{{ notification.productName }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </transition>
      <transition name="fade" appear>
        <div class="cart-bg modal-overlay" @click="$emit('closeNotify')"
        v-if="showNotify"
        ></div>
      </transition>
    </div>
  </div>
</template>

<script>
import "animate.css";
export default {
  props:{
    showNotify:{
      type: Boolean,
      // default: ()=> false
    }
  },
  watch: {
    showNotify () {
    }
  },
  data() {
    return {
      pageTitle: "Gosource | Market",
      notifications: [
       
      ],
      header:"No notification",
      snippet:"You have no notifications right now, come back later",
    };
  },
  methods: {
    triggerNotification() {
      this.$emit("openNotification");
    },
    gotoCart() {
      this.$router.push("/dashboard/market/cart");
    },
  },
};
</script>
<style scoped>
.empty{
  width: 360px;
  height: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
  text-align: center;
  margin: auto;
        
}
.stay-up {
  position: relative;
  top: 0;
  left: auto;
  z-index: 2;
}

.full-cart-bg {
  display: flex;
  justify-content: flex-end;
  position: absolute;
  width: 100%;
  /* height: 100vh; */
  left: 0px;
  top: 0px;
}

.full-cart {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 16px;

  position: absolute;
  width: 100%;
  max-width: 35%;
  height: 100vh; 
  margin-right: auto;
  top: 0px;

  background: #ffffff;
  position: fixed;
  top: 50%;
  right: 0%;
  transform: translate(-0%, -50%);
  z-index: 99;
}

header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 24px 0px 16px;
  gap: 16px;

  width: 100%;
  height: 72px;

  /* White */

  background: var(--white);
  /* Grey/Grey5 */

  border-bottom: 1px solid var(--grey-grey5);
}

.modal-title {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-title svg {
  position: absolute;
  width: 24px;
  height: 24px;
  left: 0px;
  top: 3px;
}

.modal-title h3 {
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height, or 150% */

  text-align: center;
  letter-spacing: -0.5px;

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.cart-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  width: 100%;
  /* height: calc(100vh - 100px - 193px); */
  overflow-y: scroll;
}

a {
  width: 100%;
}

.notification-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.notification {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  gap: 8px;

  /* width: 342px;
height: 189px; */

  /* Grey/Grey5 */

  border: 1px solid var(--grey-grey5);
  border-radius: 16px;
}

.time {
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */

  /* Grey/Grey3 */

  color: var(--grey-grey3);
}

.notification-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 3px;
  width: 100%;
}

.notification-header .title {
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.message {
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* or 150% */

  /* Grey/Grey2 */

  color: var(--grey-grey2);
}

.notification-product {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  gap: 8px;

  max-width: 318px;
  width: 100%;
  height: 48px;

  /* Grey/Grey6 */

  border: 1px solid var(--grey-grey6);
  border-radius: 12px;
}
.cart-bg {
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
  background: rgba(48, 50, 55, 0.3);
}
.notification-product .image {
  width: 28.44px;
  height: 32px;
}

.notification-product img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.product-name {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}


/* ANIMATIONS */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
@media (min-width: 950px) {
  .notification-product {
    max-width: 100%;
  }

  .message {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }

  .product-name {
    font-size: 16px;
    line-height: 24px;
  }
}


</style>