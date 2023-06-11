<template>
    <div>
        <div class="progress-bar">
            <div class="circles">
                <div v-for="step in 3" :key="step" :class="{ active: step <= currentStep }">{{ step }}</div>
            </div>
            <div class="progress" :style="{ width: progressPercentage }"></div>
        </div>

        <transition name="slide">
            <div class="step-container">
                <!-- Step 1 -->
                <div v-if="currentStep === 1" class="step">
                    <h2>Step 1</h2>
                    <transition name="slide">
                        <div v-if="currentStep === 1" class="input-fields">
                            <input type="text" placeholder="Input 1" key="input1">
                            <input type="text" placeholder="Input 2" key="input2">
                        </div>
                    </transition>
                    <button @click="nextStep">Next</button>
                </div>

                <!-- Step 2 -->
                <div v-if="currentStep === 2" class="step">
                    <h2>Step 2</h2>
                    <transition name="slide">
                        <div v-if="currentStep === 2" class="input-fields">
                            <input type="text" placeholder="Input 3" key="input3">
                            <input type="text" placeholder="Input 4" key="input4">
                        </div>
                    </transition>
                    <button @click="prevStep">Back</button>
                    <button @click="nextStep">Next</button>
                </div>

                <!-- Step 3 -->
                <div v-if="currentStep === 3" class="step">
                    <h2>Step 3</h2>
                    <transition name="slide">
                        <div v-if="currentStep === 3" class="input-fields">
                            <input type="text" placeholder="Input 5" key="input5">
                            <input type="text" placeholder="Input 6" key="input6">
                        </div>
                    </transition>
                    <button @click="prevStep">Back</button>
                    <button @click="lastStep">Submit</button>
                </div>
            </div>
        </transition>
    </div>
</template>
  

<script>
export default {
    data() {
        return {
            currentStep: 1,
        };
    },
    computed: {
        progressPercentage() {
            return `${(this.currentStep - 1) * 50}%`;
        },
    },
    methods: {
        nextStep() {
            if (this.currentStep < 3) {
                this.currentStep++;
            }
        },
        prevStep() {
            if (this.currentStep > 1) {
                this.currentStep--;
            }
        },
        lastStep() {
            if (this.currentStep == 3) {
                this.currentStep = 1;
            }
        },
        submitForm() {
            // Handle form submission
        },
    },
};
</script>

  
<style scoped>
.progress-bar {
    position: relative;
    background-color: #f0f0f0;
    height: 10px;
    margin-bottom: 20px;
}

.circles {
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 0;
    right: 0;
}

.circles div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: 1px solid #000;
    border-radius: 50%;
    font-size: 12px;
}

.circles div.active {
    background-color: #000;
    color: #fff;
}

.progress {
    background-color: #007bff;
    height: 100%;
    transition: width 0.3s ease-in-out;
}

.step-container {
    margin-top: 20px;
    height: 300px;
    overflow: hidden;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

.slide-leave-active {
    position: absolute;
}


.step {
    display: flex;
    flex-direction: column;
    align-items: center;
}

button {
    margin-top: 10px;
}
</style>
  