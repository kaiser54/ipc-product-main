<template>
    <!-- waiting for the backend before i continue -->
    <div class="tracking-bar">
        <div class="track-wrapper" v-for="(track, index) in tracking" :key="track.id">
            <div class="indicator">
                <svg :class="tagClass" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none">
                    <rect x="1" y="1" width="22" height="22" rx="11" fill="white" stroke="#20AF0B" stroke-width="2" />
                    <circle cx="11.9992" cy="11.9992" r="7.8" fill="#20AF0B" />
                </svg>
                <div class="line" :class="tagClass" v-if="index !== tracking.length - 1" ></div>
            </div>
            <div class="tracking">
                <div class="details">
                    <p class="title">{{ track.title }}</p>
                    <p class="snippet">{{ track.snippet }}</p>
                </div>
                <div class="tag-date">
                    <div class="tagged">
                        <DynamicTags
                        :class="tagged"
                        size="small"
                        type="positive"
                        :tagText="tagged"
                        />
                    </div>
                    <p class="date">{{ formatDate(tracked) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tag: null,
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
                    snippet: "Your order has been delivered  to you.",
                    date: "13/03/2021",
                    status: "Completed",
                },
            ],
        };
    },
    computed: {
        tagClass() {
            if (this.tag === 'DELIVERED') {
                return 'completed';
            } else if (this.tag === 'SHIPPED') {
                return 'pending';
            } else if (this.tag === 'canceled') {
                return 'canceled';
            } else {
                return '';
            }
        },
        tagged(){
            if(this.tag === 'DELIVERED'){
                return "completed"
            }
            else if(this.tag === 'SHIPPED'){
                return "pending"
            }
            else if(this.tag === 'CANCELED'){
                return 'canceled';
            }
        }
        
    },
    async created() {
    this.orderId = this.$route.params.trackOrder
    try {
      const response = await this.$axios.$get(`/orders/${this.orderId}`);
      console.log(response.data)
      this.order = response?.data?.order;
      this.tracked = response?.data?.order.products[0].createdAt;
      console.log(this.tracked)
      this.tag = this.order.status
      console.log(this.tag)
      this.loading = false;
    } catch (error) {
      console.error('Error fetching order details:', error);
    }
    // console.log(this.currentPage);
  },
  methods:{
    formatDate(item) {
  if (!item) return '';

  const date = new Date(item);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based, so we add 1
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  // Customize the format as needed
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

  }
};
</script>

<style scoped>
.tracking-bar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;
    margin-left: 48px;
}

.track-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
}

.indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 4px;
    height: 100%;
}

.line {
    width: 2px;
    height: 100%;
    background:#20AF0B;
}
.tracking {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;

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
    /* identical to box height, or 150% */

    /* Grey/Grey1 */

    color: var(--grey-grey1);
}

p.snippet {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */

    /* Grey/Grey3 */

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
    /* identical to box height, or 150% */

    /* Grey/Grey2 */

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
