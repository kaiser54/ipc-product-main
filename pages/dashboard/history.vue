<template>
  <div class="view-page history goTop">
    <div class="title-header history-head">
      <h2 class="h2-medium header-text">History</h2>
      <DynamicButton
        v-if="mobile"
        @clickButton="toggleFilter"
        class="d__btn"
        style="width: auto"
        buttonText="Filter history"
        icon="icon-left"
        size="small"
        type="neutral"
      >
        <template v-slot:svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M7.33398 11.3346H8.66732M1.33398 4.66797H14.6673H1.33398ZM4.00065 8.0013H12.0007H4.00065Z"
              stroke="#303237"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </template>
      </DynamicButton>

      <!-- table filters for desktop views -->

      <HistoryHeader
        @clickTab="filterTableDataByStatus"
        v-if="!mobile"
        @filterProducts="filterProductsByDate"
      />

      <!-- ================================ -->
    </div>

    <LoaderTracking v-if="verificationLoading && mobile" class="load" />

    <p v-if="!tableData">No history yet</p>
    <div class="history-content" v-if="tableData">
      <!-- history table for desktop views -->

      <HistoryTable
        :tableData="tableData"
        :activeTabs="activeTabs"
        :tableHeaders="tableHeaders"
        v-if="!mobile"
        :loading="verificationLoading"
      />

      <!-- ================================ -->

      <!-- history table for mooile views -->

      <HistoryMobileTable v-if="mobile && tableData" :tableData="tableData" />
      <HistoryMobileFilter
        v-show="isFilterOpen && mobile"
        :animate="animate"
        :activeTabs="activeTabs"
        title="Filter by"
        snippet="Filter product’s status"
        snippet2="Filter date"
        buttonText="Apply filter"
        buttonClass="primary-btn"
        @closeModal="toggleFilter"
        @clickTab="filterTableDataByStatus"
        @filterProducts="filterProductsByDate"
        @closeModalBG="toggleFilter"
      />
      <!-- -------------------------------- -->
    </div>
  </div>

</template>
<script>
import moment from "moment";
export default {
  layout: "dashboardview",
  // Other component properties and methods
  data() {
    return {
      verificationLoading: true,
      pageTitle: "Gosource | History",
      mobile: false,
      loading: false,
      tableHeaders: [
        "Product’s name",
        "Date",
        "Order ID",
        "Quantity",
        "Price",
        "Status",
      ],
      tableData: [],
      status: "All",
      activeTabs: [0],
      visible: true,
      animate: "animate__slideInUp",
      isFilterOpen: false,
      tableDataClone: [],
      tableDatas: null,
      filteredStatus: null,
      tableDataMobile: [],
      // filteredData: []
    };
  },
  head() {
    return {
      title: this.pageTitle,
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
    // set loading to true again when component is mounted
    // this.loading = true;

    this.getOrders();
    (this.tableData);
    (this.tableDataClone);
    this.tableData.forEach((data) => {
      console.log("data Status:", data.status);
    });
    ("tableDataMobile", this.tableDataClone);
  },
  created() {
    if (this.$route.path === "/dashboard") {
      // Perform an automatic redirect to "/dashboard/market"
      this.$router.redirect("/dashboard/market");
    }

    this.getOrders();
  },
  beforeDestroy() {
    this.checkScreenSize();
    window.removeEventListener("resize", this.checkScreenSize);
  },

  computed: {
    filteredData() {
      const startDate = this.startDate;
      const endDate = this.endDate;

      if (!startDate || !endDate) {
        return this.data;
      }

      const filteredData = this.data.filter((item) => {
        const itemDate = moment(item.date, "DD-MM-YYYY");
        const start = moment(startDate);
        const end = moment(endDate);

        return itemDate.isBetween(start, end, null, "[]");
      });

      return filteredData;
    },
  },

  methods: {
    handleFilter() {
      this.filteredData = this.data.filter((item) => {
        const itemDate = moment(item.date, "DD-MM-YYYY");
        const start = moment(this.startDate);
        const end = moment(this.endDate);

        return itemDate.isBetween(start, end, null, "[]");
      });
    },
    async getOrders() {
      const userId = localStorage.getItem("userId");
      this.verificationLoading = true;
      try {
        this.loading = true;
        const response = await this.$axios.get(`/orders/customer/${userId}`);
        this.verificationLoading = false;
        this.tableDatas = response?.data?.data?.orders;
        this.tableDataMobile = response?.data?.data?.orders;
        this.tableData = this.tableDatas;
        this.tableDataClone = this.tableData;
       console.log(this.tableData);
        console.log(this.tableDataClone);
        this.tableDatas.forEach((order) => {
          this.filteredStatus = order.status;
          console.log("Order Status:", this.filteredStatus);
        });
        
        this.loading = false;
        this.verificationLoading = false;

        return { responseData: response.data };
      } catch (error) {
        console.error("Error fetching data", error);
        this.verificationLoading = false;
        return { responseData: null };
      }
    },

    filterTableDataByStatus(status) {
      this.status = status.status;
      ("Selected status:", this.status);
      if (status.status === "All") {
        this.tableData = this.tableDataClone;
      } else if (status.status === "Completed") {
        this.tableData = this.tableDataClone.filter(
          (item) => item.status === "DELIVERED"
        );
      } else if (status.status === "Pending") {
        this.tableData = this.tableDataClone.filter(
          (item) => item.status === "SHIPPED" || item.status === "PROCESSING"
        );
      } else if (status.status === "Cancelled") {
        this.tableData = this.tableDataClone.filter(
          (item) => item.status === "CANCELLED"
        );
      } else {
        console.error("Invalid status selected");
        this.tableData = [];
      }

      // Set the activeTabs array to reflect the selected status
      this.activeTabs = [status];
    },

    checkScreenSize() {
      if (window.innerWidth <= 950) {
        this.mobile = true;
        this.animate = "animate__slideInUp";
      } else {
        this.mobile = false;
        this.animate = "animate__zoomIn";
      }
    },
    toggleFilter() {
      this.isFilterOpen = !this.isFilterOpen;
    },

    filterProductsByDate(dateData) {
      this.tableDataClone = this.tableData.filter((product) => {
        if (!dateData.startDate) {
          return true; // No start date input, no filter applied
        }

        if (!dateData.endDate) {
          return product.date >= dateData.startDate; // Filter based on start date only
        }

        return (
          product.date >= dateData.startDate && product.date <= dateData.endDate
        );
      });
      // (dateData)
      // (dateData.startDate)
      // (dateData.endDate)
    },
  },
};
</script>

<style scoped>
.history {
  max-width: calc(100vw - 278px - 83px - 16px);
}

.history-head {
  /* position: sticky; */
  top: 0px;
  left: 0px;
  /* z-index: 9; */
  background: white;
}

.history-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* padding: 24px 32px; */
  gap: 32px;

  width: 100%;
  /* White */
  background: var(--white);
  /* Grey/Grey5 */
  /* border: 1px solid var(--grey-grey5); */
  border-radius: 16px;

  /* height: 50vh; */
}

@media (max-width: 1300px) {
  .history {
    max-width: 100%;
  }
}

@media (max-width: 951px) {
  .history {
    max-width: 100%;
  }

  .history-head {
    flex-direction: row;
    align-items: center;
    gap: 32px;
    justify-content: space-between;
    position: relative;
    z-index: 0;
  }

  /* .history-content {
    padding: 16px;
  } */
}
</style>

<style>
.nuxt-link-active .desktop-nav {
  background: var(--primary-p50) !important;
}

.nuxt-link-active .desktop-nav p {
  color: var(--supporting-green-s-300);
}

/* .nuxt-link-active .desktop-nav svg {
  stroke: #fff;
} */

/* .nuxt-link-active .desktop-nav .nav-content svg path {
  stroke: #fff !important;
} */
</style>
