<template>
  <div>
    <label for="start-date">Start Date:</label>
    <input type="date" id="start-date" v-model="startDate" />

    <label for="end-date">End Date:</label>
    <input type="date" id="end-date" v-model="endDate" />

    <button @click="handleFilter">Filter</button>

    <ul>
      <li v-for="item in filteredData" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import moment from "moment";

export default {
  layout: "dashboardview",
  data() {
    return {
      data: [
        { id: 1, name: "Item 1", date: "01-01-2022" },
        { id: 2, name: "Item 2", date: "15-02-2022" },
        { id: 3, name: "Item 3", date: "25-03-2022" },
        { id: 4, name: "Item 4", date: "30-04-2022" },
        { id: 5, name: "Item 5", date: "10-05-2022" },
      ],
      startDate: "",
      endDate: "",
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
  },
};
</script>
