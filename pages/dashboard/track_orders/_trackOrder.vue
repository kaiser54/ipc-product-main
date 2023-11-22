<template>
  <div class="view-page goTop">
    <div class="top-header">
      <div class="title-header">
        <goback />
        <div class="header__flex">
          <h2 class="h2-medium header-text">Track orders</h2>
          <DynamicButton
            class="max-w media950"
            icon="icon-left"
            size="standard"
            type="neutral"
            buttonText="Download invoice"
            @clickButton="generateAndDownloadPDF"
          >
            <template v-slot:svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M15.0581 12.0312L9.99974 17.0896L4.94141 12.0312"
                  stroke="#344054"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 2.92578V16.9508"
                  stroke="#344054"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </template>
          </DynamicButton>
        </div>
      </div>
    </div>
    <div class="product-transaction">
      <div class="product-description">
        <LoaderTracking v-if="verificationLoading" />
        <div class="child order-track" v-else>
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

            <DynamicButton
              class="media"
              icon="icon-left"
              size="standard"
              type="neutral"
              buttonText="Download invoice"
              @clickButton="generateAndDownloadPDF"
            >
              <template v-slot:svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M15.0581 12.0312L9.99974 17.0896L4.94141 12.0312"
                    stroke="#344054"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 2.92578V16.9508"
                    stroke="#344054"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </template>
            </DynamicButton>
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
    <div class="invoice">
      <Invoice
        v-if="user && invoiceData"
        :customer="user"
        :orders="invoiceData"
        :user="user"
        ref="myComponent"
        id="componentToSave"
      />
    </div>
  </div>
</template>

<script>
import jsPDF from "jspdf";
import axios from "axios";
import { DEV_URL } from "@/plugins/api";
export default {
  props: {},
  layout: "dashboardview",
  // Other component properties and methods
  data() {
    return {
      userID: "",
      user: null,
      trackLevel: {},
      pageTitle: "Gosource | Track orders",
      selectedIndex: 2,
      showUserInfoModal: false,
      verificationLoading: true,
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
      invoiceData: null,
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
  async mounted() {
    if (process.client) {
      // Check if localStorage is available
      if (typeof localStorage !== "undefined") {
        // Check if user data is saved in localStorage
        const userData = localStorage.getItem("user");

        if (userData) {
          // User data is available, log it
          const newData = JSON.parse(userData);
          this.userID = newData._id;
          this.fetchUserData();
        } else {
          // User data is not found in localStorage
          ("User data not found in localStorage.");
        }
      } else {
        // Local Storage is not available in this environment
        // You can handle this situation accordingly
        ("LocalStorage is not available in this environment.");
      }
    }
  },
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
      this.verificationLoading = true;
      try {
        const response = await this.$axios.$get(`/orders/${this.orderId}`);
        this.verificationLoading = false;
        this.orderDetails = response?.data?.order;
        this.invoiceData = response?.data;
        this.selectedItem = this.orderDetails?.status;
        this.loading = false;
      } catch (error) {
        this.verificationLoading = true;
        console.error("Error fetching order details:", error);
      }
    },
    async fetchUserData() {
      try {
        const response = await axios.get(
          `${DEV_URL}/business-customers/${this.userID}`
        );
        this.user = response.data.data.customer;
      } catch (error) {
        console.error("Error getting user:", error);
      }
    },
    async generateAndDownloadPDF() {
      var doc = new jsPDF();

      // Wait for the document to be fully loaded before generating the PDF
      doc.html(document.querySelector("#componentToSave"), {
        callback: function (pdf) {
          // Save the PDF with the desired filename
          pdf.save("Invoice_gosource.pdf");
        },
        margin: 5,
        autoPaging: "text",
        x: 0,
        y: 0,
        width: 190,
        windowWidth: 675,
      });
    },
    showUserModal() {
      this.showUserInfoModal = true;
    },
  },
};
</script>

<style scoped>
.invoice {
  position: absolute;
  left: 95%;
  height: 0vh;
  overflow: hidden;
}

.header__flex {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
.max-w {
  width: fit-content;
}
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

.media {
  display: none;
  margin-bottom: 20px;
}

@media (max-width: 1030px) {
  .child:nth-child(1) {
    flex: 100;
  }

  .child:nth-child(2) {
    display: none;
  }
}

@media screen and (max-width: 950px) {
  .media950 {
    display: none !important;
  }
  .media {
    display: block;
  }
  .userInform {
    display: none;
  }
  .user {
    display: none;
  }
  .mobile-user {
    display: block;
    padding-bottom: 50%;
  }
  .orderProduct {
    margin-bottom: 20px;
  }
}

.nuxt-link-exact-active .desktop-nav {
  background: var(--primary-p50);
}

.nuxt-link-exact-active .desktop-nav p {
  color: var(--supporting-green-s-300);
}

/* .nuxt-link-active .desktop-nav svg {
  stroke: #fff;
}

.nuxt-link-active .desktop-nav .nav-content svg path {
  stroke: #fff !important;
} */
</style>
