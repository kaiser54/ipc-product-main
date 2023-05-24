<template>
  <div>
    <div class="product-search">
      <search @search-term-updated="handleSearchTermUpdated" />
      <!-- @search-term-updated is catched from the search component  -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
    };
  },
  methods: {
    handleSearchTermUpdated(searchTerm) {
      this.searchTerm = searchTerm;
    },
  },
  mounted() {
    if (this.$route.path === '/dashboard/search') {
      this.$nextTick(() => {
        const searchInput = this.$refs.search;
        if (searchInput) {
          searchInput.focus();
        }
      });
    }
  }
}
</script>

<style scoped>
.product-search {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 16px 16px;
  gap: 16px;
}
</style>
