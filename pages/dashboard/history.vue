<template>
  <div class="view-page history">
    <div class="title-header history-head">
      <h2 class="h2-medium header-text">History</h2>
      <DynamicButton
        v-if="mobile"
        @clickButton="toggleFilter"
        class="d__btn"
        style="width: auto;"
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
    <div class="history-content">

      <!-- history table for desktop views -->

      <HistoryTable
        :tableData="tableDataClone"
        :activeTabs="activeTabs"
        :tableHeaders="tableHeaders"
        v-if="!mobile"
      />

      <!-- ================================ -->

      <!-- history table for mooile views -->

      <HistoryMobileTable
        :tableData="tableDataClone"
        :tableHeaders="tableHeaders"
        v-if="mobile"
      />
      <HistoryMobileFilter
        v-show="isFilterOpen && mobile"
        :animate="animate"
        :tabs="tabs"
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
      pageTitle: "IPC | History",
      mobile: false,
      tableHeaders: [
        "Product’s name",
        "Date",
        "Order ID",
        "Quantity",
        "Price",
        "Status",
      ],
      tableData: [
        {
          id: 1,
          name: "Mama’s pride rice",
          date: "2023-08-10",
          orderId: "12345",
          quantity: 2,
          price: 10.99,
          status: "Completed",
        },
        {
          id: 2,
          name: "Fresh Apples",
          date: "2023-08-09",
          orderId: "54321",
          quantity: 5,
          price: 4.75,
          status: "Cancelled",
        },
        {
          id: 3,
          name: "Crisp Potato Chips",
          date: "2023-08-08",
          orderId: "98765",
          quantity: 3,
          price: 2.99,
          status: "Pending",
        },
        {
          id: 4,
          name: "Premium Coffee Blend",
          date: "2023-08-07",
          orderId: "45678",
          quantity: 1,
          price: 8.49,
          status: "Completed",
        },
        {
          id: 5,
          name: "Soft Bath Towel",
          date: "2023-08-06",
          orderId: "23456",
          quantity: 2,
          price: 15.75,
          status: "Pending",
        },
        {
          id: 6,
          name: "Classic Leather Belt",
          date: "2023-08-05",
          orderId: "65432",
          quantity: 1,
          price: 22.99,
          status: "Cancelled",
        },
        {
          id: 7,
          name: "Garden Flower Seeds",
          date: "2023-08-04",
          orderId: "87654",
          quantity: 4,
          price: 1.99,
          status: "Completed",
        },
        {
          id: 8,
          name: "Stainless Steel Water Bottle",
          date: "2023-08-03",
          orderId: "34567",
          quantity: 1,
          price: 12.25,
          status: "Cancelled",
        },
        {
          id: 9,
          name: "Aromatic Vanilla Candle",
          date: "2023-08-02",
          orderId: "76543",
          quantity: 2,
          price: 6.99,
          status: "Pending",
        },
        {
          id: 10,
          name: "Digital Alarm Clock",
          date: "2023-08-01",
          orderId: "56789",
          quantity: 1,
          price: 9.75,
          status: "Completed",
        },
        {
          id: 11,
          name: "Men's Casual T-Shirt",
          date: "2023-07-31",
          orderId: "98765",
          quantity: 3,
          price: 18.49,
          status: "Completed",
        },
        {
          id: 12,
          name: "Scented Bath Bombs Set",
          date: "2023-07-30",
          orderId: "45678",
          quantity: 1,
          price: 14.99,
          status: "Cancelled",
        },
        {
          id: 13,
          name: "Wireless Bluetooth Earphones",
          date: "2023-07-29",
          orderId: "23456",
          quantity: 2,
          price: 32.75,
          status: "Pending",
        },
        {
          id: 14,
          name: "Healthy Snack Variety Pack",
          date: "2023-07-28",
          orderId: "65432",
          quantity: 1,
          price: 11.99,
          status: "Completed",
        },
        {
          id: 15,
          name: "Set of Glass Food Containers",
          date: "2023-07-27",
          orderId: "87654",
          quantity: 2,
          price: 19.25,
          status: "Cancelled",
        },
        {
          id: 16,
          name: "Professional Sketching Pencils",
          date: "2023-07-26",
          orderId: "34567",
          quantity: 1,
          price: 8.99,
          status: "Pending",
        },
        {
          id: 17,
          name: "Fruit Infuser Water Pitcher",
          date: "2023-07-25",
          orderId: "76543",
          quantity: 1,
          price: 16.49,
          status: "Completed",
        },
        {
          id: 18,
          name: "Yoga Mat with Carry Strap",
          date: "2023-07-24",
          orderId: "56789",
          quantity: 1,
          price: 24.75,
          status: "Cancelled",
        },
        {
          id: 19,
          name: "Reusable Grocery Bags",
          date: "2023-07-23",
          orderId: "98765",
          quantity: 4,
          price: 6.99,
          status: "Completed",
        },
        {
          id: 20,
          name: "Decorative Throw Pillow",
          date: "2023-07-22",
          orderId: "45678",
          quantity: 2,
          price: 13.49,
          status: "Cancelled",
        },
        {
          id: 21,
          name: "Fresh Strawberries",
          date: "2023-07-21",
          orderId: "23456",
          quantity: 3,
          price: 3.99,
          status: "Pending",
        },
        {
          id: 22,
          name: "Sleek Wristwatch",
          date: "2023-07-20",
          orderId: "65432",
          quantity: 1,
          price: 45.99,
          status: "Completed",
        },
        {
          id: 23,
          name: "Artificial Indoor Plant",
          date: "2023-07-19",
          orderId: "87654",
          quantity: 2,
          price: 29.25,
          status: "Cancelled",
        },
        {
          id: 24,
          name: "Gourmet Chocolate Box",
          date: "2023-07-18",
          orderId: "34567",
          quantity: 1,
          price: 19.99,
          status: "Pending",
        },
        {
          id: 25,
          name: "Leather Crossbody Bag",
          date: "2023-07-17",
          orderId: "76543",
          quantity: 1,
          price: 37.49,
          status: "Completed",
        },
        {
          id: 26,
          name: "Rustic Wall Clock",
          date: "2023-07-16",
          orderId: "56789",
          quantity: 1,
          price: 28.75,
          status: "Cancelled",
        },
        {
          id: 27,
          name: "Fitness Resistance Bands Set",
          date: "2023-07-15",
          orderId: "98765",
          quantity: 3,
          price: 9.99,
          status: "Pending",
        },
        {
          id: 28,
          name: "Aromatherapy Essential Oils Set",
          date: "2023-07-14",
          orderId: "45678",
          quantity: 1,
          price: 22.99,
          status: "Completed",
        },
        {
          id: 29,
          name: "Wireless Computer Mouse",
          date: "2023-07-13",
          orderId: "23456",
          quantity: 2,
          price: 12.75,
          status: "Cancelled",
        },
        {
          id: 30,
          name: "Cozy Knit Blanket",
          date: "2023-07-12",
          orderId: "65432",
          quantity: 1,
          price: 34.99,
          status: "Pending",
        },
      ],
      data: [
        { id: 1, name: "Item 1", date: "01-01-2022" },
        { id: 2, name: "Item 2", date: "15-02-2022" },
        { id: 3, name: "Item 3", date: "25-03-2022" },
        { id: 4, name: "Item 4", date: "05-05-2023" },
        { id: 5, name: "Item 5", date: "10-05-2023" },
      ],
      tableHead: [
        "Product’s name",
        "Date",
        "Order ID",
        "Quantity",
        "Price",
        "Status",
      ],
      status: "All",
      activeTabs: [0],
      visible: true,
      animate: null,
      isFilterOpen: false,
      tableDataClone: [],
    };
  },
  head() {
    return {
      title: this.pageTitle,
    };
  },
  mounted() {
    this.checkScreenSize();
    this.tableDataClone = this.tableData;
    window.addEventListener("resize", this.checkScreenSize);
    // set loading to true again when component is mounted
    // this.loading = true;
  },
  created() {
    if (this.$route.path === "/dashboard") {
      // Perform an automatic redirect to "/dashboard/market"
      this.$router.redirect("/dashboard/market");
    }
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
    filterTableDataByStatus(status) {
      this.status = status.status;
      if (status.status == "All") {
        return (this.tableDataClone = this.tableData);
      } else
        this.tableDataClone = this.tableData.filter(
          (item) => item.status === this.status
        );
      console.log(this.tableDataClone);
      console.log(status);
      console.log(this.tableData);
      console.log(this.status);
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
      // console.log(dateData)
      // console.log(dateData.startDate)
      // console.log(dateData.endDate)
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
  padding: 24px 32px;
  gap: 32px;

  width: 100%;
  /* White */
  background: var(--white);
  /* Grey/Grey5 */
  border: 1px solid var(--grey-grey5);
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

  .history-content {
    padding: 16px;
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
