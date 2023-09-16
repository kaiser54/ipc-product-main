<template>
  <div class="search-bar">
    <div class="search-bar-input">
      <svg
        class="search-svg"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <g clip-path="url(#clip0_2006_2516)">
          <path
            d="M14.1667 14.1666L18.3334 18.3333L14.1667 14.1666ZM16.2501 8.95829C16.2501 12.9854 12.9855 16.25 8.95842 16.25C4.93134 16.25 1.66675 12.9854 1.66675 8.95829C1.66675 4.93122 4.93134 1.66663 8.95842 1.66663C12.9855 1.66663 16.2501 4.93122 16.2501 8.95829Z"
            stroke="#7E8494"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2006_2516">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <input
        class="input-search"
        ref="search"
        type="search"
        name=""
        v-model="searchQuery"
        id="input"
        placeholder="Search for products"
        autofocus
      />

      <!-- <svg
        @click="cancelSearch"
        class="cancel-svg"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M3.33333 12.6666L12.6667 3.33325M3.33333 3.33325L12.6667 12.6666L3.33333 3.33325Z"
          stroke="#7E8494"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg> -->
    </div>
    <button @click="redirectTobackPage">Cancel</button>
  </div>
</template>


<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  mounted() {
    if (this.$route.path === "/dashboard/search") {
      this.$nextTick(() => {
        const searchInput = this.$refs.search;
        if (searchInput) {
          searchInput.focus();
        }
      });
    }
  },
  methods: {
    ...mapActions("product", ["updateQuery"]),
    cancelSearch() {
      this.searchQuery = "";
    },
    redirectTobackPage() {
      this.searchQuery = "";
      this.$router.go(-1);
    },
  },
  watch: {
    searchQuery(newSearchQuery) {
      this.updateQuery(newSearchQuery);
    },
  },
};
</script>

<style scoped>
.search-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 100%;
  /* height: 48px; */

  border-radius: 4px;
}
.search-bar-input {
  display: flex;
  position: relative;
  width: 100%;
}
.search-bar-input .search-svg {
  top: 14px;
  left: 16px;
  position: absolute;
}
.search-bar-input svg.cancel-svg {
  top: 16.2px;
  right: 16px;
  position: absolute;
}
.search-bar-input .input-search {
  width: 100%;
  padding-left: 52px;
}
.search-bar button {
  outline: none;
  border: none;
  background: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;

  width: 71px;
  height: 37px;

  border-radius: 100px;

  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Primary/P300 */

  color: var(--primary-p300);
}
</style>
