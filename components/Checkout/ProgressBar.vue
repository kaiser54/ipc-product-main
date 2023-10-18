<template>
    <div class="progress__container">
        <div class="progress-bar">
            <div class="circles">
                <div v-for="step in 3" :key="step" class="div" :class="{ active: step <= currentStep, done: step <= (currentStep - 1) }">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M3.05078 12L9.05078 18L21.0508 6" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    <div class="label">{{ getStepLabel(step) }}</div>
                </div>
            </div>
            <div class="progress1" :style="{ width: progressPercentage + '%' }"></div>
            <div class="progress" :style="{ width: (progressPercentage + 49 > 99 ? 99 : progressPercentage + 49.5) + '%' }"></div>
            <div class="progress2"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["progressPercentage", "currentStep", "getStepLabel"],
    computed: {
        stepLabel() {
            const step = 1; // Set the desired step value
            return this.getStepLabel(step);
        }
    }
}
</script>

<style scoped>
.progress__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    max-width: 458.1px;
    width: 100%;
    height: 84px;
    margin-inline: auto;
}

.progress-bar {
    position: relative;
    height: 0;
    width: 100%;
}

.circles {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: -24px;
    z-index: 3;
    left: 0;
    right: 0;
}

.circles .div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px;
    gap: 10px;

    width: 48px;
    height: 48px;

    /* Grey/Grey6 */

    background: var(--grey-grey6);
    /* Grey/Grey5 */

    /* border: 2px solid var(--grey-grey5); */
    border: 2px solid var(--grey-grey5);
    border-radius: 100px;
}


.circles .div.active {
    background: var(--new-primary-p300);
    border: 2px solid var(--new-primary-p300);
}

.circles .div svg {
    stroke: var(--new-primary-p300);
}

.circles .div.active svg {
    stroke: white;
}


.circles .div.done {
    background: var(--new-primary-p300);
    border: 2px solid var(--new-primary-p300);
}

.circles .div.done svg {
    stroke: var(--white);
}

.label {
    position: absolute;
    top: 55px;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */
    white-space: nowrap;

    /* Grey/Grey4 */

    color: var(--new-primary-p300);

}

.circles .active .label {
    color: var(--new-primary-p300);
}

.progress1 {
    position: absolute;
    left: 2px;
    z-index: -1;
    width: 99%;
    border: 2px solid var(--new-primary-p300);
    height: 0;
    transition: width 0.3s ease-in-out;
}

.progress {
    position: absolute;
    left: 2px;
    z-index: -2;
    width: 99%;
    border: 2px solid var(--new-primary-p300);
    height: 0;
    transition: width 0.3s ease-in-out;
}

.progress2 {
    border: 2px solid var(--grey-grey5);
    position: absolute;
    left: 2px;
    width: 99%;
    height: 0;
    z-index: -3;
    /* transition: width 0.3s ease-in-out; */
}
</style>