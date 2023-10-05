<template>
    <div class="container">
        <div class="flex">
            <div class="info-skeleton"></div>
            <div class="info-flex"></div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
    .info-skeleton{
        
        width: 800px;
        height: 200px;
        border: 1px solid var(--grey-grey5);
        border-radius: 16px;
        background: var(--grey-grey6);
        animation: skeleton-loader__image 1s ease-in-out infinite;
    }
    .info-flex{
        
       max-width: 100%;
       /* max-width: 800px; */
       width: 100%;
        height: 105px;
        border: 1px solid var(--grey-grey5);
        border-radius: 16px;
        background: var(--grey-grey6);
        animation: skeleton-loader__image 1s ease-in-out infinite;
    }
    .flex{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
</style>