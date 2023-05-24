<template>
  <div>
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
</template>

<script>
export default {
  layout: "dashboardview",
  // Other component properties and methods
  data() {
    return {
      pageTitle: "IPC | Market",
      notifications: [
        {
          id: 1,
          time: "13-01-2023",
          title: "Order processing!",
          message: "Your order 1384216322 is being processed and is expected to be delivered between 13-Feb-2023 and 20-Feb-2023. Thank you for procuring with IPC",
          image: "p1.png",
          productName: "Mama'S Choice Nigerian Parboiled Rice...",
        },
        {
          id: 1,
          time: "13-01-2023",
          title: "Order processing!",
          message: "Your order 1384216322 is being processed and is expected to be delivered between 13-Feb-2023 and 20-Feb-2023. Thank you for procuring with IPC",
          image: "p2.png",
          productName: "Mama'S Choice Nigerian Parboiled Rice...",
        },
        {
          id: 1,
          time: "13-01-2023",
          title: "Order processing!",
          message: "Your order 1384216322 is being processed and is expected to be delivered between 13-Feb-2023 and 20-Feb-2023. Thank you for procuring with IPC",
          image: "p3.png",
          productName: "Mama'S Choice Nigerian Parboiled Rice...",
        },
        {
          id: 1,
          time: "13-01-2023",
          title: "Order processing!",
          message: "Your order 1384216322 is being processed and is expected to be delivered between 13-Feb-2023 and 20-Feb-2023. Thank you for procuring with IPC",
          image: "p4.png",
          productName: "Mama'S Choice Nigerian Parboiled Rice...",
        },
        {
          id: 1,
          time: "13-01-2023",
          title: "Order processing!",
          message: "Your order 1384216322 is being processed and is expected to be delivered between 13-Feb-2023 and 20-Feb-2023. Thank you for procuring with IPC",
          image: "p1.png",
          productName: "Mama'S Choice Nigerian Parboiled Rice...",
        },
        {
          id: 1,
          time: "13-01-2023",
          title: "Order processing!",
          message: "Your order 1384216322 is being processed and is expected to be delivered between 13-Feb-2023 and 20-Feb-2023. Thank you for procuring with IPC",
          image: "p2.png",
          productName: "Mama'S Choice Nigerian Parboiled Rice...",
        },
        {
          id: 1,
          time: "13-01-2023",
          title: "Order processing!",
          message: "Your order 1384216322 is being processed and is expected to be delivered between 13-Feb-2023 and 20-Feb-2023. Thank you for procuring with IPC",
          image: "p3.png",
          productName: "Mama'S Choice Nigerian Parboiled Rice...",
        },
        {
          id: 1,
          time: "13-01-2023",
          title: "Order processing!",
          message: "Your order 1384216322 is being processed and is expected to be delivered between 13-Feb-2023 and 20-Feb-2023. Thank you for procuring with IPC",
          image: "p4.png",
          productName: "Mama'S Choice Nigerian Parboiled Rice...",
        },
        {
          id: 1,
          time: "13-01-2023",
          title: "Order processing!",
          message: "Your order 1384216322 is being processed and is expected to be delivered between 13-Feb-2023 and 20-Feb-2023. Thank you for procuring with IPC",
          image: "p1.png",
          productName: "Mama'S Choice Nigerian Parboiled Rice...",
        },
      ],
    };
  },
  head() {
    return {
      title: this.pageTitle,
    };
  },
};
</script>

<style scoped>
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

  width: 318px;
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
</style>
