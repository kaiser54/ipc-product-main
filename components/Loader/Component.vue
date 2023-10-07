<template>
    <div>
        <div class="webskeleton" style="margin: 20px">
            <!-- css skeleton loading state on the website for desktop view -->
            <LoaderWeb style="overflow: hidden; height: 100vh" />
        </div>
        <div class="SkeletonLoader mobile">
            <!-- css skeleton loading state on the website for mobile view -->
            <LoaderMobile style="overflow: hidden; height: 100vh" />
        </div>
    </div>
</template>



<style scoped>
@media (max-width: 950px) {
    .webskeleton {
        display: none;
    }
}</style>