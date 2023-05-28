<template>
  <div class="stay-up">
    <div class="full-cart-bg">
      <div class="full-cart animate__animated animate__slideInRight">
        <header>
          <div class="modal-title">
            <svg @click="triggerNotification" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none">
              <path d="M5 19L19 5M5 5L19 19L5 5Z" stroke="#565C69" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            <h3 class="h3-medium">Notifications</h3>
          </div>
        </header>
        <div class="cart-list">
          <div class="notification-wrapper">
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
      <div class="cart-bg" @click="triggerNotification"></div>
    </div>
  </div>
</template>

<script>
import "animate.css";
export default {
  data() {
    return {
      pageTitle: "IPC | Market",
      notifications: [
        {
          id: 1,
          time: "13-01-2023",
          title: "Order processing!",
          message:
            "Your order 1384216322 is being processed and is expected to be delivered between 13-Feb-2023 and 20-Feb-2023. Thank you for procuring with IPC",
          image: "p1.png",
          productName: "Mama'S Choice Nigerian Parboiled Rice...",
        },
        {
          id: 1,
          time: "13-01-2023",
          title: "Order processing!",
          message:
            "Your order 1384216322 is being processed and is expected to be delivered between 13-Feb-2023 and 20-Feb-2023. Thank you for procuring with IPC",
          image: "p2.png",
          productName: "Mama'S Choice Nigerian Parboiled Rice...",
        },
        {
          id: 1,
          time: "13-01-2023",
          title: "Order processing!",
          message:
            "Your order 1384216322 is being processed and is expected to be delivered between 13-Feb-2023 and 20-Feb-2023. Thank you for procuring with IPC",
          image: "p3.png",
          productName: "Mama'S Choice Nigerian Parboiled Rice...",
        },
        {
          id: 1,
          time: "13-01-2023",
          title: "Order processing!",
          message:
            "Your order 1384216322 is being processed and is expected to be delivered between 13-Feb-2023 and 20-Feb-2023. Thank you for procuring with IPC",
          image: "p4.png",
          productName: "Mama'S Choice Nigerian Parboiled Rice...",
        },
        {
          id: 1,
          time: "13-01-2023",
          title: "Order processing!",
          message:
            "Your order 1384216322 is being processed and is expected to be delivered between 13-Feb-2023 and 20-Feb-2023. Thank you for procuring with IPC",
          image: "p1.png",
          productName: "Mama'S Choice Nigerian Parboiled Rice...",
        },
        {
          id: 1,
          time: "13-01-2023",
          title: "Order processing!",
          message:
            "Your order 1384216322 is being processed and is expected to be delivered between 13-Feb-2023 and 20-Feb-2023. Thank you for procuring with IPC",
          image: "p2.png",
          productName: "Mama'S Choice Nigerian Parboiled Rice...",
        },
        {
          id: 1,
          time: "13-01-2023",
          title: "Order processing!",
          message:
            "Your order 1384216322 is being processed and is expected to be delivered between 13-Feb-2023 and 20-Feb-2023. Thank you for procuring with IPC",
          image: "p3.png",
          productName: "Mama'S Choice Nigerian Parboiled Rice...",
        },
        {
          id: 1,
          time: "13-01-2023",
          title: "Order processing!",
          message:
            "Your order 1384216322 is being processed and is expected to be delivered between 13-Feb-2023 and 20-Feb-2023. Thank you for procuring with IPC",
          image: "p4.png",
          productName: "Mama'S Choice Nigerian Parboiled Rice...",
        },
        {
          id: 1,
          time: "13-01-2023",
          title: "Order processing!",
          message:
            "Your order 1384216322 is being processed and is expected to be delivered between 13-Feb-2023 and 20-Feb-2023. Thank you for procuring with IPC",
          image: "p1.png",
          productName: "Mama'S Choice Nigerian Parboiled Rice...",
        },
      ],
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
.stay-up {
  position: relative;
  top: 0;
  left: auto;
  z-index: 1;
}

.full-cart-bg {
  display: flex;
  justify-content: flex-end;
  position: absolute;
  width: 100%;
  height: 100vh;
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
  max-width: 489px;
  height: 100vh;
  margin-right: auto;
  top: 0px;

  background: #ffffff;
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

.cart-bg {
  width: 100%;
  height: 100vh;
  background: rgba(48, 50, 55, 0.3);
}
</style>
