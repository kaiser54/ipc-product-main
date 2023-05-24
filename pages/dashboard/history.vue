<template>
  <div class="view-page history">
    <div class="title-header history-head">
      <h2 class="h2-medium header-text">History</h2>
      <div class="filter-head">
        <div class="filter-tabs">
          <div v-for="(tab, index) in tabs" :key="index" class="tab tab-standard" @click="toggleTab(index)"
            :class="{ clicked: activeTabs.includes(index) }">
            {{ tab }}
          </div>
        </div>
        <div class="filter-dates">
          <div class="datepicker-toggle">
            <p>From</p>
            <!-- <span class="datepicker-toggle-button"></span> -->
            <button class="datepicker-toggle-button">
              <span v-if="startDate">{{ startDate }}</span>
              <span v-else class="btn-dsp">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                  <path
                    d="M3 4.9987C3 4.07822 3.74619 3.33203 4.66667 3.33203H16.3333C17.2538 3.33203 18 4.07822 18 4.9987V16.6654C18 17.5859 17.2538 18.332 16.3333 18.332H4.66667C3.74619 18.332 3 17.5859 3 16.6654V4.9987Z"
                    stroke="#303237" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3 8.33203H18" stroke="#303237" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M13.834 1.66797V5.0013" stroke="#303237" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M7.16602 1.66797V5.0013" stroke="#303237" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                <p>YYYY-MM-DD</p>
              </span>
            </button>
            <input type="date" class="input datepicker-input" v-model="startDate" />
          </div>
          <div class="datepicker-toggle">
            <p>To</p>
            <!-- <span class="datepicker-toggle-button"></span> -->
            <button class="datepicker-toggle-button">
              <span v-if="endDate">{{ endDate }}</span>
              <span v-else class="btn-dsp">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                  <path
                    d="M3 4.9987C3 4.07822 3.74619 3.33203 4.66667 3.33203H16.3333C17.2538 3.33203 18 4.07822 18 4.9987V16.6654C18 17.5859 17.2538 18.332 16.3333 18.332H4.66667C3.74619 18.332 3 17.5859 3 16.6654V4.9987Z"
                    stroke="#303237" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3 8.33203H18" stroke="#303237" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M13.834 1.66797V5.0013" stroke="#303237" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M7.16602 1.66797V5.0013" stroke="#303237" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                <p>YYYY-MM-DD</p>
              </span>
            </button>
            <input type="date" class="input datepicker-input" v-model="endDate" />
          </div>
        </div>
      </div>
    </div>
    <history-component :tableData="tableData" :activeTabs="activeTabs" :tableHeaders="tableHeaders" />
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
          date: "2022-05-01",
          orderId: "12345",
          quantity: 2,
          price: 10.99,
          status: "Completed",
        },
        {
          id: 2,
          name: "Mama’s pride rice",
          date: "2022-05-02",
          orderId: "67890",
          quantity: 1,
          price: 19.99,
          status: "Pending",
        },
        {
          id: 3,
          name: "Mama’s pride rice",
          date: "2022-05-03",
          orderId: "24680",
          quantity: 3,
          price: 7.99,
          status: "Completed",
        },
        {
          id: 4,
          name: "Mama’s pride rice",
          date: "2022-05-03",
          orderId: "24680",
          quantity: 3,
          price: 7.99,
          status: "Completed",
        },
        {
          id: 5,
          name: "Mama’s pride rice",
          date: "2022-05-03",
          orderId: "24680",
          quantity: 3,
          price: 7.99,
          status: "Completed",
        },
        {
          id: 6,
          name: "Mama’s pride rice",
          date: "2022-05-03",
          orderId: "24680",
          quantity: 3,
          price: 7.99,
          status: "Completed",
        },
        {
          id: 7,
          name: "Mama’s pride rice",
          date: "2022-05-03",
          orderId: "24680",
          quantity: 3,
          price: 7.99,
          status: "Completed",
        },
        {
          id: 8,
          name: "Mama’s pride rice",
          date: "2022-05-03",
          orderId: "24680",
          quantity: 3,
          price: 7.99,
          status: "Completed",
        },
        {
          id: 9,
          name: "Mama’s pride rice",
          date: "2022-05-03",
          orderId: "24680",
          quantity: 3,
          price: 7.99,
          status: "Completed",
        },
        {
          id: 10,
          name: "Mama’s pride rice",
          date: "2022-05-03",
          orderId: "24680",
          quantity: 3,
          price: 7.99,
          status: "Completed",
        },
        {
          id: 11,
          name: "Mama’s pride rice",
          date: "2022-05-03",
          orderId: "24680",
          quantity: 3,
          price: 7.99,
          status: "Completed",
        },
      ],
      data: [
        { id: 1, name: "Item 1", date: "01-01-2022" },
        { id: 2, name: "Item 2", date: "15-02-2022" },
        { id: 3, name: "Item 3", date: "25-03-2022" },
        { id: 4, name: "Item 4", date: "05-05-2023" },
        { id: 5, name: "Item 5", date: "10-05-2023" },
      ],
      startDate: "",
      endDate: "",
      tabs: ["All", "Completed", "Pending", "Cancelled"],
      tableHead: [
        "Product’s name",
        "Date",
        "Order ID",
        "Quantity",
        "Price",
        "Status",
      ],
      activeTabs: [0], // set the default active tab to be "All"
      visible: true,
    };
  },
  head() {
    return {
      title: this.pageTitle,
    };
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
    toggleTab(index) {
      if (this.activeTabs.length === 1 && this.activeTabs.includes(index)) {
        // do nothing if the clicked tab is the last active tab
        return;
      } else if (this.activeTabs.includes(index)) {
        this.activeTabs = this.activeTabs.filter(
          (tabIndex) => tabIndex !== index
        );
      } else {
        this.activeTabs.push(index);
      }
    },
  },
};
</script>

<style scoped>
.history {
  max-width: calc(100vw - 278px - 83px - 16px);
}

.history-head {
  position: sticky;
  top: 0px;
  left: 0px;
  z-index: 9;
  background: white;
}

.datepicker-toggle {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
  position: relative;
}

.datepicker-toggle-button {
  /* position: absolute;
  left: 0;
  top: 0; */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 8px;

  /* max-width: 155px; */
  min-width: 155px;
  /* width: 100%; */
  height: 48px;

  /* White */

  background: var(--white);
  /* Grey/Grey4 */

  border: 1px solid var(--grey-grey4);
  border-radius: 100px;
}

.datepicker-input {
  position: absolute;
  left: 0;
  top: 0;
  width: 155px;
  height: 40px;
  opacity: 0;
  cursor: pointer;
  box-sizing: border-box;
}

.btn-dsp {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.btn-dsp p {
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.filter-head {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.filter-tabs {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.filter-dates {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;
  position: relative;
}

.tab.clicked {
  /* Accent/A75 */
  background: var(--accent-a75);
  /* Accent/A200 */

  border: 1px solid var(--accent-a200);
}

@media (max-width: 1300px) {
  .history {
    max-width: 100%;
  }

  .filter-dates {
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
  }
}

@media (max-width: 1040px) {
  .history {
    max-width: 100%;
  }

  .filter-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }

  .filter-dates {
    justify-content: center;
    align-items: flex-end;
    flex-direction: row;
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
