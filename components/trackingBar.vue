<template>
    <div class="tracking-bar">
        <div class="track-wrapped">
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
        <div class="track-container">
            <div class="track-wrapper" v-for="(track, index) in tracking" :key="index">
            <div class="tracking">
                <div class="details">
                    <p class="title">{{ track.title }}</p>
                    <p class="snippet">{{ track.snippet }}</p>
                </div>
                <div class="tag-date">
                    <div class="tagged">
                        <DynamicTags :tagText="trackLevel.status" :size="size" :type="getTagType(trackLevel.status)" />
                    </div>
                    <p class="date">{{ track.date }}</p>
                </div>
            </div>
        </div>
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
    data() {
        return {
            selectedIndex: 0,
            tracking: [
                {
                    id: 1,
                    title: "Order processing",
                    snippet: "We’re processing your order to be ready.",
                    date: "13/03/2021",
                    status: "Completed",
                },
                {
                    id: 2,
                    title: "Shipped",
                    snippet: "Your order is on its way to you right now!",
                    date: "13/03/2021",
                    status: "Pending",
                },
                {
                    id: 3,
                    title: "Delivered",
                    snippet: "Your order has been delivered to you.",
                    date: "13/03/2021",
                    status: "Completed",
                },
            ],
            listSelect: [
                {
                    title: "Order processing",
                    type: "warning",
                    size: "small",
                },
                {
                    title: "Shipped",
                    type: "info",
                    size: "small",
                },
                {
                    title: "Delivered",
                    type: "positive",
                    size: "small",
                },
            ],
        };
    },
    computed: {
        isProcessing() {
            return this.trackLevel.status === "PROCESSING";
        },
        size() {
            return this.listSelect[this.selectedIndex].size;
        },
    },
    methods: {
        getTagClass(index) {
            if (this.isProcessing) {
                if (index === 0) return "processing";
                return "grey";
            } else if (this.trackLevel.status === "SHIPPED") {
                if (index === 0) return "processing";
                else if (index === 1) return "processing";
                return "grey";
            } else {
                return "grey";
            }
        },
        getTagType(status) {
            if (status === "PROCESSING") {
                return "warning";
            } else if (status === "SHIPPED") {
                return "info";
            } else if (status === "DELIVERED") {
                return "positive";
            } else {
                return "";
            }
        },
    },
};
</script>
  
<style scoped>
.track-wrapped {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    flex-direction: column;
    /* border: 1px solid red; */
    height: 100%;
}

.circle {
    width: 25px;
    height: 70px;
    border-radius: 50%;
    border: 2px solid grey;
    /* Green border */
    background-color: white;
    /* White interior */
    transition: background-color 0.3s ease, border-color 0.3s ease;
    /* Transition for both border and interior color */
    position: relative;
}

.inner-circle {
    width: 15px;
    height: 16px;
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
    height: 100%;
    max-height: 160px;
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
}

.tracking-bar {
    display: flex;
    /* flex-direction: column; */
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    margin-left: 48px;
    /* border: 1px solid blue; */
    height: 300px;
}
.track-container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
}
.track-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    /* border: 1px solid purple; */
}

.processing {
    stroke: #20af0b;
    fill: #20af0b;
}

.grey {
    stroke: grey;
    fill: grey;
}

.indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 4px;
    height: 100%;
}



.tracking {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 2px;
    max-width: 295px;
    width: 100%;
    margin-bottom: 21px;
}

.details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;
}

p.title {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--grey-grey1);
}

p.snippet {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: var(--grey-grey3);
}

.tag-date {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
}

p.date {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: var(--grey-grey2);
}

@media (max-width: 950px) {
    .tracking-bar {
        margin-left: 0;
    }

    p.title {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: var(--grey-grey1);
    }

    p.snippet {
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: var(--grey-grey3);
    }

    p.date {
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        color: var(--grey-grey2);
    }
}
</style>
  