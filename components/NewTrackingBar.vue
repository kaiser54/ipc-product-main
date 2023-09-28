<template>
    <div class="tracking-bar">
        <div class="track-wrapper">
            <!-- First Circle -->
            <div class="circle"
                :class="{ 'green': trackLevel.status === 'PROCESSING' || trackLevel.status === 'SHIPPED' || trackLevel.status === 'DELIVERED' }">
                <div class="inner-circle"
                    v-if="trackLevel.status === 'PROCESSING' || trackLevel.status === 'SHIPPED' || trackLevel.status === 'DELIVERED'">
                </div>
            </div>
            <!-- First Line -->
            <div class="line" :class="{ 'green': trackLevel.status === 'SHIPPED' || trackLevel.status === 'DELIVERED' }">
            </div>
            <!-- Second Circle -->
            <div class="circle" :class="{ 'green': trackLevel.status === 'SHIPPED' || trackLevel.status === 'DELIVERED' }">
                <div class="inner-circle" v-if="trackLevel.status === 'SHIPPED' || trackLevel.status === 'DELIVERED'"></div>
            </div>
            <!-- Second Line -->
            <div class="line" :class="{ 'green': trackLevel.status === 'DELIVERED' }"></div>
            <!-- Third Circle -->
            <div class="circle" :class="{ 'green': trackLevel.status === 'DELIVERED' }">
                <div class="inner-circle" v-if="trackLevel.status === 'DELIVERED'"></div>
            </div>
        </div>
        <!-- Status -->
        <div class="status">
            <p>{{ trackLevel.status }}</p>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        trackLevel: {
            type: Object,
            required: true,
        },
    },
};
</script>
  
<style scoped>
.tracking-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    margin-left: 48px;
}

.track-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
}

.circle {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid green;
    /* Green border */
    background-color: white;
    /* White interior */
    transition: background-color 0.3s ease, border-color 0.3s ease;
    /* Transition for both border and interior color */
    position: relative;
}

.inner-circle {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: green;
    /* Small green circle color */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}

.circle.green {
    background-color: white;
    /* Interior color when green class is applied */
    border-color: green;
    /* Border color when green class is applied */
}

.line {
    width: 2px;
    height: 16px;
    background-color: grey;
    transition: background-color 0.3s ease;
}

.line.green {
    background-color: green;
}

.status {
    font-weight: bold;
    font-size: 14px;
    color: var(--grey-grey1);
}</style>
  