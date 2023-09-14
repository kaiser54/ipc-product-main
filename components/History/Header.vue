<template>
  <div class="filter-head">
    <div class="filter-tabs">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="tab tab-standard"
        @click="toggleTab(index)"
        :class="{ clicked: activeTab === index }"
      >
        {{ tab }}
      </div>
    </div>

    <div class="filter-dates">
      <div class="datepicker-toggle">
        <p>From</p>
        <input
          type="date"
          @input="filterProducts"
          class="input datepicker-toggle-button"
          v-model="startDate"
        />
      </div>
      <div class="datepicker-toggle">
        <p>To</p>
        <input
          type="date"
          @input="filterProducts"
          class="input datepicker-toggle-button"
          v-model="endDate"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: ["All", "Completed","Pending", "Cancelled"],
      startDate: "",
      endDate: "",
      activeTab: 0,
    };
  },
  methods: {
    toggleTab(index) {
      console.log('header', this.tabs[index])
      this.$emit("clickTab", this.tabs[index]);
      this.activeTab = index;
    },
    filterProducts() {
      const dateData = {
        startDate: this.startDate,
        endDate: this.endDate,
      };
      this.$emit("filterProducts", dateData);
    },
  },
  watch: {
    startDate() {
      this.filterProducts();
    },
    endDate() {
      this.filterProducts();
    },
  },
};
</script>

<style scoped>
.datepicker-toggle {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
  position: relative;
}

.datepicker-toggle-button {
  max-width: 160px;
  height: 48px;

  /* White */

  background: var(--white);
  /* Grey/Grey4 */

  border: 1px solid var(--grey-grey4);
  border-radius: 100px;
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

button {
  width: auto;
}

@media (max-width: 1300px) {
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