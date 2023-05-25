<template>
    <div class="vertical-progress-bar">
        <div v-for="(step, index) in steps" :key="index" class="step" :class="{ active: step.value }">
            {{ index + 1 }}
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'VerticalProgressBar',
    props: {
        steps: {
            type: Array,
            required: true
        }
    }
};
</script>
  
<style scoped>
.vertical-progress-bar {
    display: flex;
    flex-direction: column;
    height: 200px;
    /* Adjust the height as needed */
}

.step {
    flex: 1;
    background-color: lightgray;
    text-align: center;
    line-height: 30px;
    font-weight: bold;
}

.active {
    background-color: green;
    color: white;
}
</style>
  