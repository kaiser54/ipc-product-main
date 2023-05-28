<template>
    <div class="pagination">
        <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
        <button v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="{ active: page === currentPage }">{{
            page }}</button>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
</template>
  
<script>
export default {
    props: {
        totalPages: {
            type: Number,
            required: true,
        },
        currentPage: {
            type: Number,
            required: true,
        },
    },
    methods: {
        previousPage() {
            if (this.currentPage > 1) {
                this.$emit('pageChanged', this.currentPage - 1);
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.$emit('pageChanged', this.currentPage + 1);
            }
        },
        goToPage(page) {
            if (page !== this.currentPage) {
                this.$emit('pageChanged', page);
            }
        },
    },
};
</script>
  
<style scoped>
.pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.pagination button {
    margin: 0 5px;
    padding: 5px 10px;
    background-color: #eee;
    border: none;
    cursor: pointer;
}

.pagination button.active {
    background-color: #ddd;
}

.pagination button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
</style>
  