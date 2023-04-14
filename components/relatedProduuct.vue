<template>
    <div class="related">
        <div class="related-title">
            <h3 class="h3-medium">You might also like</h3>
            <div class="circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M6.66675 3.33301L13.3334 9.99967L6.66675 16.6663" stroke="#0009B3" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
        <div class="related-product-card">

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.related {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    gap: 16px;

    /* max-width: calc(100% - 278px); */
    width: 100%;
    /* height: 357px; */

    /* Grey/Grey6 */

    background: var(--grey-grey6);
    border-radius: 16px;
}

.related-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px;
    width: 100%;
}

.related-title .circle {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 10px;

    width: 40px;
    height: 40px;

    /* Primary/P75 */

    border: 1px solid var(--primary-p75);
    border-radius: 100px;
}

.related-product-card {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
}
</style>