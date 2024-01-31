<template>
    <div :class="['tags', { 'out-of-stock': !text }]">
        <p>{{ stockStatus }}</p>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        stockStatus() {
            return this.text ? 'In stock' : 'Out of stock';
        }
    }
}
</script>

<style scoped>
.tags {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4px 12px;
    gap: 10px;
    height: 24px;
    background: var(--positive-p50);
    border-radius: 100px;
}
.tags p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: var(--positive-p400);
}
.out-of-stock {
    background-color: var(--Negative-N50);
}
.out-of-stock p {
    color: var(--Negative-N400);
}
</style>
