<template>
    <div class="container">
        <div class="flex">
            <div class="track-skeleton"></div>
            <div class="info-flex"></div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
    .track-skeleton{
        
        width: 800px;
        height: 145px;
        border: 1px solid var(--grey-grey5);
        border-radius: 16px;
        background: var(--grey-grey6);
        animation: skeleton-loader__image 1s ease-in-out infinite;
    }
</style>