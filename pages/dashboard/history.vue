<template>
  <div class="view-page">
    <div class="title-header">
      <h2 class="h2-medium header-text">History</h2>
      <div class="filter-head">
        <div class="filter-tabs">
          <div
            v-for="(tab, index) in tabs"
            :key="index"
            class="tab tab-standard"
            @click="toggleTab(index)"
            :class="{ clicked: activeTabs.includes(index) }"
          >
            {{ tab }}
          </div>
        </div>
        <div>
          <label for="start-date">Start Date:</label>
          <input
            class="input"
            type="date"
            id="start-date"
            v-model="startDate"
            placeholder="MM-DD-YYYY"
          />

          <label for="end-date">End Date:</label>
          <input
            class="input"
            type="date"
            id="end-date"
            v-model="endDate"
            placeholder="MM-DD-YYYY"
          />

          <button @click="handleFilter">Filter</button>
        </div>
      </div>
    </div>
    <span class="datepicker-toggle">
      <!-- <span class="datepicker-toggle-button"></span> -->
      <button class="btn primay-btn datepicker-toggle-button">START DATEEEEEEEEEEEE</button>
      <input type="date" class="datepicker-input" />
    </span>
    <ul>
      <li v-for="item in filteredData" :key="item.id">{{ item.name }}</li>
    </ul>
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
      activeTabs: [0], // set the default active tab to be "All"
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
.datepicker-toggle {
  display: inline-block;
  position: relative;
  width: 180px;
  height: 40px;
}
.datepicker-toggle-button {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* background-image: url('@/static/category2.png'); */
}
.datepicker-input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  box-sizing: border-box;
}
.datepicker-input::-webkit-calendar-picker-indicator {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  cursor: pointer;
}







.filter-head {
  display: flex;
  justify-content: space-between;
}
.filter-tabs {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}
.tab.clicked {
  /* Accent/A75 */

  background: var(--accent-a75);
  /* Accent/A200 */

  outline: 1px solid var(--accent-a200);
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
