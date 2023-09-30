<template>
  <div class="view-page">
    <div class="top-header">
      <div class="title-header">
        <goback />
        <h2 class="h2-medium header-text">Track orders</h2>
      </div>
    </div>
    <div class="product-transaction">
      <div class="product-description">
        <div class="child order-track">
          <div class="user">
            <div class="orderProduct">
              <div class="userProduct" @click="moreOrder">
                <NewOrderProduct
                  v-if="orderDetails"
                  :tagText="dynamicTagProps.tagText"
                  size="small"
                  :type="dynamicTagProps.type"
                  :data="orderDetails"
                />
              </div>
              <div class="" style="position: sticky; overflow: hidden">
                <div :class="{ 'slide-out': !more, 'slide-in': more }">
                  <OrderProduct
                    v-for="(order, index) in orderDetails?.products"
                    :key="index"
                    :item="order"
                    :status="orderDetails?.status"
                    class="more"
                    :tagText="tagText"
                    :size="'small'"
                    :type="type"
                    @set-level="setTrackOrderLevel($event)"
                  />
                </div>
              </div>

              <TrackingBar :track-level="trackLevel" />
            </div>
            <UserInfo
              class="userInform"
              v-if="orderDetails"
              :data="orderDetails"
              style="max-width: 387px; width: 100%; margin-left: 20px"
            />
          </div>
          <div class="mobile-user">
            <div class="orderProduct" @click="showUserModal">
              <MobileOrderProduct
                :tagText="tagText"
                :size="'small'"
                :type="type"
                @set-level="setTrackOrderLevel($event)"
              />
            </div>
            <TrackingBar :track-level="trackLevel" />
            <div
              class="modal-overlay"
              v-if="showUserInfoModal"
              @click="showUserInfoModal = false"
            >
              <div class="modal-content">
                <UserInfo v-if="orderDetails" :data="orderDetails" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  layout: "dashboardview",
  // Other component properties and methods
  data() {
    return {
      trackLevel: {},
      pageTitle: "IPC | Track orders",
      selectedIndex: 2,
      showUserInfoModal: false,
      more: false,
      listSelect: [
        {
          title: "Order procesing",
          type: "warning",
          size: "small",
        },
        {
          title: "Shipped",
          type: "info",
          size: "small",
        },
        {
          title: "Delivered",
          type: "positive",
          size: "small",
        },
      ],
      orderDetails: null,
    };
  },
  head() {
    return {
      title: this.pageTitle,
    };
  },
  computed: {
    tagText() {
      // return this.listSelect[this.selectedIndex].title;
      if (this.orderDetails?.status) {
        return this.orderDetails?.status;
      }
    },
    type() {
      return this.listSelect[this.selectedIndex].type;
    },
    size() {
      return this.listSelect[this.selectedIndex].size;
    },
    statusTagType() {
      if (this.statusTagText === "In Active") {
        return "warning";
      } else {
        return "info";
      }
    },
    dynamicTagProps() {
      let tagText = this.orderDetails?.status;
      let type = "";

      if (tagText === "PROCESSING") {
        type = "warning";
      } else if (tagText === "SHIPPED") {
        type = "info";
      } else if (tagText === "DELIVERED") {
        type = "positive";
      }

      return { tagText, type };
    },
  },
  created() {
    this.orderId = this.$route.params.trackOrder;
    this.getOrders();
  },
  mounted() {},
  methods: {
    setTrackOrderLevel(val) {
      this.selectedIndex = val.level;
      this.trackLevel = val;
    },
    moreOrder() {
      this.more = !this.more;
    },
    async getOrders() {
      this.orderId = this.$route.params.trackOrder;
      try {
        const response = await this.$axios.$get(`/orders/${this.orderId}`);
        console.log("orderDetails:", response.data.order);
        this.orderDetails = response?.data?.order;
        this.selectedItem = this.orderDetails?.status;
        this.loading = false;
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    },
    showUserModal() {
      this.showUserInfoModal = true;
      console.log("working");
    },
  },
};
</script>

<style scoped>
.slide-in {
  transform: translateY(0);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out,
    height 0.3s ease-in-out;
  opacity: 1;
  height: auto; /* Auto height for slide-in */
}

.slide-out {
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out,
    height 0.3s ease-in-out;
  opacity: 0;
  height: 0; /* Collapsed height for slide-out */
}
.view-page {
  gap: 32px;
}
.mobile-user {
  display: none;
}
.more {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all;
}
.user {
  display: flex;
  gap: 20px;
}
.userProduct {
  margin-bottom: 50px;
  cursor: pointer;
}
.userInform {
  position: sticky;
  position: -webkit-sticky;
  top: 16px;
  height: 350px;
}
.top-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
}

.title-header {
  gap: 16px;
}
.orderProduct {
  width: 100%;
}
.product-transaction {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.product-description {
  display: flex;
  flex-direction: row;
  padding: 0px;
  gap: 16px;
  /* max-width: 579px; */
  width: 100%;
}

.child:nth-child(1) {
  flex: 65;
}

.child:nth-child(2) {
  flex: 35;
}

.order-track {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.total {
  color: var(--grey-grey1);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.modal-overlay {
  /* Styles for modal overlay on mobile */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* Style for the modal content on mobile */
.modal-content {
  /* Styles for modal content on mobile */
  max-width: 100%;
  width: 99%;
  background: white;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

@media (max-width: 1030px) {
  .child:nth-child(1) {
    flex: 100;
  }

  .child:nth-child(2) {
    display: none;
  }
}

@media screen and (max-width: 750px) {
  .userInform {
    display: none;
  }
  .user {
    display: none;
  }
  .mobile-user {
    display: block;
  }
  .orderProduct {
    margin-bottom: 20px;
  }
}
</style>


<style>
.nuxt-link-active .desktop-nav {
  background: var(--primary-p300);
}

.nuxt-link-active .desktop-nav p {
  color: #fff;
}

.nuxt-link-active .desktop-nav svg {
  stroke: #fff;
}

.nuxt-link-active .desktop-nav .nav-content svg path {
  stroke: #fff !important;
}
</style>
